import { prisma } from "./prisma";


export async function getSEO(slug: string) {

   try {
   const entry = await prisma.seoEntry.findFirst({
      where: {
        slug,
        status: "published", // ← Only fetch published
      },
      orderBy: { lastModified: "desc" }, // Get most recent if multiple
    });

    if (!entry) return null; // Draft or missing → triggers your fallback

    return {
      ...entry,
      keywords: JSON.parse(entry.keywords || "[]"),
    };
  } catch (error) {
    console.error("DB Error:", error);
    return null; // 👈 prevent crash
  }
}


export async function getSEOByUrl(pathname: string) {
  const url = pathname.replace(/^\/+|\/+$/g, "");

  const entry = await prisma.seoEntry.findFirst({
    where: {
      url,
      status: "published",
    },
    orderBy: {
      lastModified: "desc",
    },
  });

  if (!entry) return null;

  return {
    ...entry,
    keywords: JSON.parse(entry.keywords || "[]"),
  };
}
