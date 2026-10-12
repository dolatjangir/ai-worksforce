// app/api/seo/generate/route.ts

import { NextRequest, NextResponse } from "next/server";
import type { SEOPromptInput } from "../../../../../lib/seo-prompt";
import { generateSEO } from "../../../../../lib/ai-service";

interface GenerateRequest {
  pageName?: string;
  canonicalUrl?: string;
  pageContent?: string;
}

function extractPageText(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 14000);
}

async function fetchPageContent(
  canonicalUrl: string
): Promise<string> {
  const configuredUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (!configuredUrl) {
    throw new Error(
      "NEXT_PUBLIC_APP_URL is not configured"
    );
  }

  let target: URL;
  let configuredOrigin: string;

  try {
    target = new URL(canonicalUrl);
    configuredOrigin = new URL(configuredUrl).origin;
  } catch {
    throw new Error("The canonical URL is invalid");
  }

  if (
    !["http:", "https:"].includes(target.protocol) ||
    target.origin !== configuredOrigin ||
    target.username ||
    target.password
  ) {
    throw new Error(
      "The canonical URL must belong to the configured website"
    );
  }

  const response = await fetch(target.toString(), {
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(10000),
    headers: {
      Accept: "text/html",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Could not retrieve the selected page (HTTP ${response.status})`
    );
  }

  const html = await response.text();
  const content = extractPageText(html);

  if (!content) {
    throw new Error(
      "No readable page content was found at the selected URL"
    );
  }

  return content;
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateRequest = await request.json();

    const pageName = body.pageName?.trim();
    const canonicalUrl = body.canonicalUrl?.trim();

    if (!pageName || !canonicalUrl) {
      return NextResponse.json(
        { error: "Page name and canonical URL are required" },
        { status: 400 }
      );
    }

    // The header button sends an empty pageContent.
    // Retrieve the selected page content on the server.
    const pageContent =
      body.pageContent?.trim() ||
      (await fetchPageContent(canonicalUrl));

    const input: SEOPromptInput = {
      pageName,
      canonicalUrl,
      pageContent,
    };

    const seoData = await generateSEO(input);

    return NextResponse.json(seoData);
  } catch (error: unknown) {
    console.error("SEO Generate Error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "SEO generation failed",
      },
      { status: 500 }
    );
  }
}