// lib/ai-service.ts

import { createHash } from "node:crypto";
import { GoogleGenAI, Type } from "@google/genai";

import {
  getSEOSystemPrompt,
  buildUserPrompt,
  type SEOPromptInput,
  type SEOPromptOutput,
  type SEOSchemaType,
} from "./seo-prompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const seoCache = new Map<string, SEOPromptOutput>();

const SCHEMA_TYPES: SEOSchemaType[] = [
  "Organization",
  "WebSite",
  "Service",
  "Article",
  "BreadcrumbList",
  "FAQPage",
  "Custom",
];

function getCacheKey(input: SEOPromptInput): string {
  const contentHash = createHash("sha256")
    .update(input.pageContent)
    .digest("hex");

  return `${input.pageName}:${input.canonicalUrl}:${contentHash}`;
}

async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: unknown) {
      lastError = error;

      const apiError = error as {
        status?: number;
        message?: string;
        details?: Array<{
          "@type"?: string;
          retryDelay?: string;
        }>;
      };

      const isRateLimited =
        apiError.status === 429 ||
        apiError.message?.includes("RESOURCE_EXHAUSTED");

      if (!isRateLimited || attempt === maxRetries) {
        throw error;
      }

      const retryInfo = apiError.details?.find((item) =>
        item["@type"]?.includes("RetryInfo")
      );

      const seconds = Number.parseInt(
        retryInfo?.retryDelay?.match(/\d+/)?.[0] || "0",
        10
      );

      const delayMs = seconds > 0
        ? seconds * 1000
        : baseDelay * Math.pow(2, attempt);

      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("AI generation failed");
}

export async function generateSEO(
  input: SEOPromptInput
): Promise<SEOPromptOutput> {
  const cacheKey = getCacheKey(input);

  const cached = seoCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  const fullPrompt = [
    getSEOSystemPrompt(),
    buildUserPrompt(input),
  ].join("\n\n");

  const result = await retryWithBackoff(() =>
    ai.models.generateContent({
      model: "models/gemini-2.5-flash",
      contents: fullPrompt,

      // Request structured JSON from Gemini.
      config: {
        responseMimeType: "application/json",

        responseSchema: {
          type: Type.OBJECT,

          properties: {
            metaTitle: { type: Type.STRING },
            metaDescription: { type: Type.STRING },

            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },

            ogTitle: { type: Type.STRING },
            ogDescription: { type: Type.STRING },
            ogImage: { type: Type.STRING },

            twitterTitle: { type: Type.STRING },
            twitterDescription: { type: Type.STRING },
            twitterImage: { type: Type.STRING },

            schemaType: {
              type: Type.STRING,
              enum: SCHEMA_TYPES,
            },

            schemaMarkup: { type: Type.STRING },
          },

          required: [
            "metaTitle",
            "metaDescription",
            "keywords",
            "ogTitle",
            "ogDescription",
            "ogImage",
            "twitterTitle",
            "twitterDescription",
            "twitterImage",
            "schemaType",
            "schemaMarkup",
          ],
        },
      },
    })
  );

  const responseText = result.text?.trim();

  if (!responseText) {
    throw new Error("Gemini returned an empty response");
  }

  let raw: Record<string, unknown>;

  try {
    const parsed: unknown = JSON.parse(responseText);

    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      throw new Error("Response must be a JSON object");
    }

    raw = parsed as Record<string, unknown>;
  } catch {
    throw new Error("Gemini returned invalid SEO JSON");
  }

  let parsedSchema: unknown;

  try {
    parsedSchema =
      typeof raw.schemaMarkup === "string"
        ? JSON.parse(raw.schemaMarkup)
        : raw.schemaMarkup;
  } catch {
    throw new Error("Gemini returned invalid JSON-LD markup");
  }

  if (
    !parsedSchema ||
    typeof parsedSchema !== "object" ||
    Array.isArray(parsedSchema)
  ) {
    throw new Error("JSON-LD schema must be a JSON object");
  }

  const schema = parsedSchema as Record<string, unknown>;

  // Normalize and validate the schema before sending it to the UI.
  schema["@context"] = "https://schema.org";

  if (
    typeof schema["@type"] !== "string" ||
    !schema["@type"].trim()
  ) {
    const requestedType =
      typeof raw.schemaType === "string" &&
      SCHEMA_TYPES.includes(raw.schemaType as SEOSchemaType) &&
      raw.schemaType !== "Custom"
        ? raw.schemaType
        : "WebPage";

    schema["@type"] = requestedType;
  }

  // These values come from the selected page, not invented AI claims.
  schema.name = input.pageName;
  schema.url = input.canonicalUrl;

  const jsonLdType = String(schema["@type"]);

  const schemaType: SEOSchemaType =
    SCHEMA_TYPES.includes(jsonLdType as SEOSchemaType)
      ? (jsonLdType as SEOSchemaType)
      : "Custom";

  const metaTitle = String(raw.metaTitle ?? "").trim();
  const metaDescription = String(
    raw.metaDescription ?? ""
  ).trim();

  if (!metaTitle || !metaDescription) {
    throw new Error(
      "Gemini did not return the required SEO title and description"
    );
  }

  const seoData: SEOPromptOutput = {
    metaTitle: metaTitle.slice(0, 70),
    metaDescription: metaDescription.slice(0, 170),

    keywords: Array.isArray(raw.keywords)
      ? raw.keywords
          .filter((keyword): keyword is string =>
            typeof keyword === "string"
          )
          .map((keyword) => keyword.trim())
          .filter(Boolean)
          .slice(0, 8)
      : [],

    ogTitle: String(raw.ogTitle || metaTitle).slice(0, 70),
    ogDescription: String(
      raw.ogDescription || metaDescription
    ).slice(0, 170),
    ogImage: String(raw.ogImage || ""),

    twitterTitle: String(
      raw.twitterTitle || metaTitle
    ).slice(0, 70),
    twitterDescription: String(
      raw.twitterDescription || metaDescription
    ).slice(0, 170),
    twitterImage: String(
      raw.twitterImage || raw.ogImage || ""
    ),

    schemaType,
    schemaMarkup: JSON.stringify(schema, null, 2),
  };

  seoCache.set(cacheKey, seoData);

  return seoData;
}