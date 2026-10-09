
import { headers } from "next/headers";
import { getSEO } from "../../../lib/seo";


export default async function SchemaMarkup() {
  // Identify the current page from the request header
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");

  // Do not accidentally render homepage schema on every page
  if (!pathname) {
    console.error(
      "SchemaMarkup: Missing x-pathname header."
    );
    return null;
  }

  // Convert pathname to the same slug format used by SEO metadata
  const cleanPath = pathname
    .split("?")[0]
    .replace(/^\/+|\/+$/g, "");

  const slug = cleanPath
    ? cleanPath.replace(/\//g, "-")
    : "home";

  // Retrieve the matching published SEO entry
  let seo;

  try {
    seo = await getSEO(slug);
  } catch (error) {
    // A schema lookup failure should not break the page
    console.error(
      `SchemaMarkup: Failed to load SEO entry for "${slug}".`,
      error
    );
    return null;
  }

  // Render only when schema is explicitly enabled
  if (
    seo?.schemaEnabled !== true ||
    !seo.schemaMarkup
  ) {
    return null;
  }

  // Parse and validate the saved JSON-LD
  let schema: unknown;

  try {
    schema =
      typeof seo.schemaMarkup === "string"
        ? JSON.parse(seo.schemaMarkup)
        : seo.schemaMarkup;
  } catch {
    console.error(
      `SchemaMarkup: Invalid JSON-LD for "${slug}".`
    );
    return null;
  }

  if (
    !schema ||
    typeof schema !== "object"
  ) {
    console.error(
      `SchemaMarkup: Schema must be a JSON object or array for "${slug}".`
    );
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
