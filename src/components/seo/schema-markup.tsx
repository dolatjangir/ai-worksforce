
import { headers } from "next/headers";
import { getSEOByUrl } from "../../../lib/seo";

export default async function SchemaMarkup() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");

  if (!pathname) {
    console.error("SchemaMarkup: Missing x-pathname header.");
    return null;
  }

  // Convert the pathname to the format stored in the database URL field.
  const cleanPath = pathname
    .split("?")[0]
    .replace(/^\/+|\/+$/g, "");

  let seo;

  try {
    seo = await getSEOByUrl(cleanPath);
  } catch (error) {
    console.error(
      `SchemaMarkup: Failed to load SEO entry for "${cleanPath}".`,
      error
    );
    return null;
  }

  if (seo?.schemaEnabled !== true || !seo.schemaMarkup) {
    return null;
  }

  let schema: unknown;

  try {
    schema =
      typeof seo.schemaMarkup === "string"
        ? JSON.parse(seo.schemaMarkup)
        : seo.schemaMarkup;
  } catch {
    console.error(
      `SchemaMarkup: Invalid JSON-LD for "${cleanPath}".`
    );
    return null;
  }

  if (
    !schema ||
    typeof schema !== "object" ||
    Array.isArray(schema)
  ) {
    console.error(
      `SchemaMarkup: Schema must be a JSON object for "${cleanPath}".`
    );
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
