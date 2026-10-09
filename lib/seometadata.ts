import { headers } from "next/headers";
import { getSEO } from "./seo";


const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";


function getCleanCanonicalPath(pathname: string) {
  // Remove leading/trailing slashes
  const cleanPath = pathname.replace(/^\/+|\/+$/g, "");

  // Homepage
  if (!cleanPath) {
    return "/";
  }

  return `/${cleanPath}`;
}
function getValidCanonical(
  customCanonical: string | null | undefined,
  currentPath: string
) {
  // No custom canonical configured
  if (!customCanonical?.trim()) {
    return currentPath;
  }

  try {
    const customUrl = new URL(customCanonical.trim());

    // Canonical must use HTTPS
    if (customUrl.protocol !== "https:") {
      return currentPath;
    }

    // Canonical must use aiworksforce.com
    if (customUrl.hostname !== "aiworksforce.com") {
      return currentPath;
    }

    // Remove query parameters such as UTM
    customUrl.search = "";

    // Remove hash
    customUrl.hash = "";

    // Keep trailing slash consistent
    customUrl.pathname =
      customUrl.pathname === "/"
        ? "/"
        : customUrl.pathname.replace(/\/+$/, "");

    return customUrl.pathname;
  } catch {
    // Invalid custom canonical → use current page
    return currentPath;
  }
}



export async function generateSEOMetadata() {
  const headersList = await headers();

  const pathname = headersList.get("x-pathname") || "/";

 // Clean pathname:
  // - Always starts with /
  // - Removes trailing slash except for homepage
  // - Does not include query parameters
  const cleanPath = getCleanCanonicalPath(pathname);

  // Convert path → slug
  const slug =
     cleanPath === "/"
      ? "home"
      : cleanPath.replace(/^\/+/, "");

  const seo = await getSEO(slug);


  // Self-referencing canonical by default.
  // Custom canonical is used only when explicitly configured.
  const canonicalPath = getValidCanonical(
    seo?.canonicalUrl,
    cleanPath
  );

  return {
   metadataBase: new URL(SITE_URL),

    title:
      seo?.metaTitle ||
      slug.replace(/-/g, " "),

    description:
      seo?.metaDescription ||
      `Learn more about ${slug.replace(/-/g, " ")}`,

    
...(seo?.canonicalEnabled === true
  ? {
      alternates: {
        canonical: canonicalPath,
      },
    }
  : {}),



    robots: {
      index: seo?.indexable !== false,
      follow: seo?.indexable !== false,
    },

    openGraph: {
      title:
        seo?.ogTitle ||
        seo?.metaTitle,

      description:
        seo?.ogDescription ||
        seo?.metaDescription,

      images:
        seo?.ogImage
          ? [seo.ogImage]
          : [],
    },

    twitter: {
      title:
        seo?.twitterTitle ||
        seo?.metaTitle,

      description:
        seo?.twitterDescription ||
        seo?.metaDescription,

      images:
        seo?.twitterImage
          ? [seo.twitterImage]
          : [],
    },
  };
}