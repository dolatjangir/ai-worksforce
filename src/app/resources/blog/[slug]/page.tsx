import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "../../../../../lib/prisma";



export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function formatShortDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function getReadTime(content: string | null | undefined) {
  if (!content) return "1 min read";

  const plainText = content
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();

  const words = plainText ? plainText.split(" ").length : 0;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

function parseTags(tags: string | null | undefined) {
  if (!tags?.trim()) return [];

  const value = tags.trim();

  // Supports:
  // "AI, Automation, Agents"
  // ["AI", "Automation", "Agents"]
  if (value.startsWith("[") && value.endsWith("]")) {
    try {
      const parsed = JSON.parse(value);

      if (Array.isArray(parsed)) {
        return parsed
          .map((tag) => String(tag).trim())
          .filter(Boolean);
      }
    } catch {
      // Fall back to comma-separated tags.
    }
  }

  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function getCategory(
  pageName: string | null | undefined,
  tags: string[],
) {
  return pageName?.trim() || tags[0] || "Insights";
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        slug,
        isPublished: true,
      },
      select: {
        title: true,
        excerpt: true,
        featuredImg: true,
      },
    });

    if (!blog) {
      return {
        title: "Blog Not Found",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    return {
      title: blog.title,
      description: blog.excerpt || blog.title,

      openGraph: {
        title: blog.title,
        description: blog.excerpt || blog.title,
        type: "article",

        ...(blog.featuredImg
          ? {
              images: [
                {
                  url: blog.featuredImg,
                  alt: blog.title,
                },
              ],
            }
          : {}),
      },

      twitter: {
        card: blog.featuredImg
          ? "summary_large_image"
          : "summary",

        title: blog.title,
        description: blog.excerpt || blog.title,

        ...(blog.featuredImg
          ? {
              images: [blog.featuredImg],
            }
          : {}),
      },
    };
  } catch (error) {
    console.error(
      "Failed to generate blog metadata:",
      error,
    );

    return {
      title: "Blog",
      description:
        "Read the latest insights from AI WorksForce.",
    };
  }
}

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const blog = await prisma.blog.findFirst({
    where: {
      slug,
      isPublished: true,
    },
  });

  if (!blog) {
    notFound();
  }

  const tags = parseTags(blog.tags);

  const category = getCategory(
    blog.pageName,
    tags,
  );

  const readTime = getReadTime(blog.content);

  const otherBlogs = await prisma.blog.findMany({
    where: {
      isPublished: true,
      NOT: {
        id: blog.id,
      },
    },

    orderBy: [
      {
        updatedAt: "desc",
      },
      {
        createdAt: "desc",
      },
    ],

    take: 10,

    select: {
      id: true,
      title: true,
      slug: true,
      featuredImg: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return (
    <main className="min-h-screen bg-white font-sans text-brand-dark">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-text-muted transition-colors hover:text-brand-blue"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>

            Back to all blogs
          </Link>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col gap-8 lg:h-[calc(100vh-175px)] lg:flex-row xl:gap-10">

          {/* LEFT COLUMN — BLOG ARTICLE */}
          <article className="w-full lg:h-full lg:w-[70%] lg:overflow-y-auto lg:pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_12px_35px_rgba(24,74,140,0.07)]">

              {/* Featured Image */}
              {blog.featuredImg ? (
                <div className="relative aspect-[21/9] w-full overflow-hidden bg-blue-50">
                  <img
                    src={blog.featuredImg}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/15 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="flex aspect-[21/9] w-full items-center justify-center bg-gradient-to-br from-brand-blue-soft via-white to-brand-purple-soft">
                  <div className="rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-brand-blue shadow-sm">
                    AI WorksForce Insights
                  </div>
                </div>
              )}

              {/* Article Content Wrapper */}
              <div className="p-6 sm:p-8 lg:p-10 xl:p-12">

                {/* Header */}
                <header className="mb-9">

                  {/* Meta */}
                  <div className="mb-5 flex flex-wrap items-center gap-3">

                    {/* Category */}
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/15 bg-brand-blue-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">

                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />

                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>

                      {category}
                    </span>

                    <span
                      className="h-1 w-1 rounded-full bg-brand-text-muted/50"
                      aria-hidden="true"
                    />

                    {/* Date */}
                    <span className="text-sm font-medium text-brand-text-muted">
                      {formatDate(blog.createdAt)}
                    </span>

                    <span
                      className="h-1 w-1 rounded-full bg-brand-text-muted/50"
                      aria-hidden="true"
                    />

                    {/* Read Time */}
                    <span className="text-sm font-medium text-brand-text-muted">
                      {readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.75rem]">
                    {blog.title}
                  </h1>

                  {/* Excerpt */}
                  {blog.excerpt && (
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-text sm:text-lg lg:text-xl">
                      {blog.excerpt}
                    </p>
                  )}
                </header>

                {/* Divider */}
                <div className="mb-9 h-px w-full bg-blue-100" />

                {/* Blog Content */}
                <div
                  className="
                    max-w-none text-[15px] leading-8 text-brand-text sm:text-base

                    [&>h1]:mb-5
                    [&>h1]:mt-10
                    [&>h1]:text-3xl
                    [&>h1]:font-bold
                    [&>h1]:leading-tight
                    [&>h1]:text-brand-dark

                    [&>h2]:mb-4
                    [&>h2]:mt-10
                    [&>h2]:text-2xl
                    [&>h2]:font-bold
                    [&>h2]:leading-tight
                    [&>h2]:text-brand-dark

                    [&>h3]:mb-3
                    [&>h3]:mt-8
                    [&>h3]:text-xl
                    [&>h3]:font-bold
                    [&>h3]:leading-tight
                    [&>h3]:text-brand-dark

                    [&>h4]:mb-2
                    [&>h4]:mt-6
                    [&>h4]:text-lg
                    [&>h4]:font-bold
                    [&>h4]:text-brand-dark

                    [&>p]:mb-6
                    [&>p]:text-brand-text
                    [&>p]:leading-8

                    [&>a]:font-semibold
                    [&>a]:text-brand-blue
                    [&>a]:underline-offset-4
                    hover:[&>a]:underline

                    [&_a]:font-semibold
                    [&_a]:text-brand-blue
                    [&_a]:underline-offset-4
                    hover:[&_a]:underline

                    [&>strong]:font-semibold
                    [&>strong]:text-brand-dark

                    [&_strong]:font-semibold
                    [&_strong]:text-brand-dark

                    [&>ul]:my-6
                    [&>ul]:list-disc
                    [&>ul]:pl-6

                    [&>ol]:my-6
                    [&>ol]:list-decimal
                    [&>ol]:pl-6

                    [&_li]:mb-2

                    [&>blockquote]:my-8
                    [&>blockquote]:rounded-r-xl
                    [&>blockquote]:border-l-4
                    [&>blockquote]:border-brand-blue
                    [&>blockquote]:bg-brand-blue-soft
                    [&>blockquote]:px-6
                    [&>blockquote]:py-5
                    [&>blockquote]:italic

                    [&>pre]:my-7
                    [&>pre]:overflow-x-auto
                    [&>pre]:rounded-xl
                    [&>pre]:border
                    [&>pre]:border-blue-100
                    [&>pre]:bg-slate-950
                    [&>pre]:p-5
                    [&>pre]:text-sm
                    [&>pre]:leading-6
                    [&>pre]:text-white

                    [&_code]:rounded
                    [&_code]:bg-blue-50
                    [&_code]:px-1.5
                    [&_code]:py-0.5
                    [&_code]:text-sm
                    [&_code]:text-brand-blue

                    [&>pre_code]:bg-transparent
                    [&>pre_code]:p-0
                    [&>pre_code]:text-white

                    [&>img]:my-8
                    [&>img]:max-h-[650px]
                    [&>img]:w-auto
                    [&>img]:max-w-full
                    [&>img]:rounded-xl
                    [&>img]:border
                    [&>img]:border-blue-100
                    [&>img]:object-contain
                    [&>img]:shadow-sm

                    [&_img]:max-w-full

                    [&>hr]:my-10
                    [&>hr]:border-blue-100

                    [&>table]:my-8
                    [&>table]:w-full
                    [&>table]:min-w-[650px]
                    [&>table]:border-collapse

                    [&_th]:border
                    [&_th]:border-blue-100
                    [&_th]:bg-blue-50
                    [&_th]:p-3
                    [&_th]:text-left
                    [&_th]:text-sm
                    [&_th]:font-semibold
                    [&_th]:text-brand-dark

                    [&_td]:border
                    [&_td]:border-blue-100
                    [&_td]:p-3
                    [&_td]:text-sm
                    [&_td]:text-brand-text
                  "
                  dangerouslySetInnerHTML={{
                    __html: blog.content,
                  }}
                />

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="mt-10 border-t border-blue-100 pt-7">

                    <div className="flex flex-wrap items-center gap-2">

                      <span className="mr-1 text-sm font-semibold text-brand-dark">
                        Tags:
                      </span>

                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-lg border border-brand-blue/15 bg-brand-blue-soft px-3 py-1.5 text-xs font-semibold text-brand-blue transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>

          {/* RIGHT COLUMN — SIDEBAR */}
          <aside className="w-full lg:h-full lg:w-[30%] lg:shrink-0">

            <div className="flex flex-col gap-5 lg:h-full">

              {/* Latest News */}
              <div className="flex min-h-[360px] flex-1 flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_12px_35px_rgba(24,74,140,0.06)] lg:min-h-0">

                {/* Header */}
                <div className="flex shrink-0 items-center justify-between border-b border-blue-100 bg-blue-50/70 px-5 py-4">

                  <h2 className="flex items-center gap-2 text-sm font-bold text-brand-dark">

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-blue"
                      aria-hidden="true"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />

                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>

                    Latest News
                  </h2>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-text-muted">
                    Live
                  </span>
                </div>

                {/* News List */}
                <div className="min-h-0 flex-1 overflow-y-auto p-3 [scrollbar-width:thin]">

                  {otherBlogs.length > 0 ? (
                    <div className="flex flex-col gap-1">

                      {otherBlogs.map((item) => (
                        <Link
                          key={item.id}
                          href={`/blog/${item.slug}`}
                          className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-blue-50/70"
                        >

                          {/* Image */}
                          {item.featuredImg ? (
                            <img
                              src={item.featuredImg}
                              alt={item.title}
                              loading="lazy"
                              className="h-12 w-12 shrink-0 rounded-lg border border-blue-100 object-cover"
                            />
                          ) : (
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50">

                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-brand-blue"
                                aria-hidden="true"
                              >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />

                                <polyline points="14 2 14 8 20 8" />
                              </svg>

                            </div>
                          )}

                          {/* Content */}
                          <div className="min-w-0">

                            <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-brand-dark transition-colors group-hover:text-brand-blue">
                              {item.title}
                            </h3>

                            <span className="mt-1 block text-[11px] text-brand-text-muted">
                              {formatShortDate(
                                item.updatedAt ||
                                  item.createdAt,
                              )}
                            </span>

                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="flex h-full min-h-[220px] flex-col items-center justify-center text-center">

                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">

                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-brand-blue"
                          aria-hidden="true"
                        >
                          <path d="M12 20h9" />

                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>

                      </div>

                      <p className="text-sm font-medium text-brand-text">
                        No other articles yet
                      </p>

                      <p className="mt-0.5 text-xs text-brand-text-muted">
                        Check back later
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="shrink-0 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_12px_35px_rgba(24,74,140,0.06)]">

                <div className="border-b border-blue-100 bg-blue-50/70 px-5 py-4">

                  <h2 className="flex items-center gap-2 text-sm font-bold text-brand-dark">

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-blue"
                      aria-hidden="true"
                    >
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />

                      <line
                        x1="7"
                        y1="7"
                        x2="7.01"
                        y2="7"
                      />
                    </svg>

                    Tags
                  </h2>
                </div>

                <div className="p-5">

                  {tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">

                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-lg border border-brand-blue/15 bg-brand-blue-soft px-3 py-1.5 text-xs font-semibold text-brand-blue transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>
                  ) : (
                    <p className="text-sm text-brand-text-muted">
                      No tags added
                    </p>
                  )}
                </div>
              </div>

              {/* Back to Blog */}
              <Link
                href="/blog"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-5 text-sm font-semibold text-brand-dark shadow-[0_8px_20px_rgba(24,74,140,0.04)] transition-all hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
              >

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line
                    x1="19"
                    y1="12"
                    x2="5"
                    y2="12"
                  />

                  <polyline points="12 19 5 12 12 5" />
                </svg>

                Explore all articles
              </Link>

            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
