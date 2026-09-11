"use client";

import { useState, type ReactNode } from "react";

/* ============================================================
   TYPES
============================================================ */

type IconName =
  | "book"
  | "file"
  | "users"
  | "lightbulb"
  | "chart"
  | "megaphone"
  | "pen"
  | "help"
  | "arrow"
  | "calendar"
  | "clock"
  | "menu"
  | "close"
  | "play"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram";

/* ============================================================
   ICON SYSTEM
   No external icon package required.
============================================================ */

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const icons: Record<IconName, ReactNode> = {
    book: (
      <>
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23V5.5Z" />
        <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5A3.5 3.5 0 0 1 20 23V5.5Z" />
      </>
    ),

    file: (
      <>
        <path d="M6 3h8l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5" />
        <path d="M8 13h8M8 17h6" />
      </>
    ),

    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M15 15a5 5 0 0 1 6 5" />
      </>
    ),

    lightbulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5a7 7 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V12" />
        <path d="M10 20V8" />
        <path d="M16 20V4" />
        <path d="M22 20H2" />
      </>
    ),

    megaphone: (
      <>
        <path d="m4 11 14-6v14L4 13v-2Z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
        <path d="m7 14 1.5 6h3L10 15" />
      </>
    ),

    pen: (
      <>
        <path d="m4 20 4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20Z" />
        <path d="m14.5 6.5 3 3" />
      </>
    ),

    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.8 9a2.3 2.3 0 1 1 4.2 1.4c-.8 1-2 1.3-2 3" />
        <path d="M12 17h.01" />
      </>
    ),

    arrow: (
      <>
        <path d="M4 12h16" />
        <path d="m13 5 7 7-7 7" />
      </>
    ),

    calendar: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),

    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),

    play: (
      <path
        d="m9 6 9 6-9 6V6Z"
        fill="currentColor"
        stroke="none"
      />
    ),

    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 10v6M8 8v.1M12 16v-6M12 13c0-2 4-2 4 0v3" />
      </>
    ),

    twitter: (
      <path d="M21 6.5c-.7.3-1.4.5-2.2.6A3.7 3.7 0 0 0 20.4 5c-.7.4-1.5.7-2.4.9A3.7 3.7 0 0 0 11.7 9c0 .3 0 .6.1.9A10.5 10.5 0 0 1 4 5.3a3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5v.1a3.7 3.7 0 0 0 3 3.6c-.6.2-1.2.2-1.7.1a3.7 3.7 0 0 0 3.5 2.6A7.4 7.4 0 0 1 3.6 18a10.5 10.5 0 0 0 5.7 1.7c6.9 0 10.7-5.7 10.7-10.7v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
    ),

    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path
          d="m10 9 5 3-5 3V9Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle
          cx="17"
          cy="7"
          r=".8"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

/* ============================================================
   ICON BUBBLE
============================================================ */

function IconBubble({
  icon,
  className = "bg-indigo-100 text-brand-purple",
}: {
  icon: IconName;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full sm:size-11 ${className}`}
    >
      <Icon
        name={icon}
        className="size-5 sm:size-6"
      />
    </span>
  );
}

/* ============================================================
   RESOURCE DATA
============================================================ */

const categories = [
  {
    title: "AI Use Cases",
    description:
      "Explore real-world applications of AI across industries.",
    icon: "book" as IconName,
  },
  {
    title: "Case Studies",
    description:
      "See how businesses are achieving measurable results with AI.",
    icon: "file" as IconName,
  },
  {
    title: "AI Workforce Guides",
    description:
      "Practical guides to build, automate, and scale with AI.",
    icon: "users" as IconName,
  },
  {
    title: "AI Digital Marketing Guides",
    description:
      "Strategies and tutorials to grow your business with AI marketing.",
    icon: "megaphone" as IconName,
  },
  {
    title: "Blog",
    description:
      "Stay updated with the latest insights, trends, and tips.",
    icon: "pen" as IconName,
  },
  {
    title: "FAQs",
    description:
      "Get quick answers to common questions.",
    icon: "help" as IconName,
  },
];

const featuredResources = [
  {
    type: "Guide",
    title: "The Complete Guide to AI Automation for Businesses",
    description:
      "Learn how to identify opportunities, choose the right tools, and implement AI automation step by step.",
    date: "Sep 10, 2024",
    readTime: "8 min read",
    image: "/images/resources/ai-automation-guide.webp",
  },
  {
    type: "Case Study",
    title: "How a Retail Brand Increased Sales by 3x with AI",
    description:
      "See how we helped a growing retail brand automate marketing and customer support to achieve 3x higher sales.",
    date: "Aug 28, 2024",
    readTime: "6 min read",
    image: "/images/resources/retail-case-study.webp",
  },
  {
    type: "Blog",
    title: "10 AI Tools Every Business Should Use in 2024",
    description:
      "A curated list of powerful AI tools to boost productivity, improve customer experience, and drive growth.",
    date: "Sep 2, 2024",
    readTime: "7 min read",
    image: "/images/resources/ai-tools.webp",
  },
];

/* ============================================================
   NAVIGATION
============================================================ */

const navigation = [
  "Home",
  "What AIWorksForce?",
  "How it Works",
  "Our AI Workflow",
  "Solutions",
  "Industries",
  "Case Studies",
  "Resources",
  "About",
];

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function ResourcesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
   

      <main>
        {/* ====================================================
            HERO
        ===================================================== */}

        <section className="relative isolate overflow-hidden rounded-b-[1.25rem] bg-[linear-gradient(110deg,#ffffff_0%,#f8f9ff_48%,#eff0ff_100%)]">
          {/* Background glow */}

          <div className="pointer-events-none absolute -right-40 -top-40 -z-10 size-128 rounded-full bg-[radial-gradient(circle,#bbb5ff80_0%,transparent_70%)] blur-3xl" />

          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
            {/* Hero copy */}

            <div className="relative z-20 px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14 xl:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                Knowledge. Strategies. Real Impact.
              </p>

              <h1 className="mt-3 max-w-3xl text-5xl font-bold leading-[0.96] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
                Resources for a{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Smarter Tomorrow
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-text sm:text-lg lg:text-xl">
                Explore our collection of guides, case studies, blog
                posts, and more to learn how AI can transform your
                business.
              </p>

              {/* Hero stats */}

              <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-0">
                <div className="flex items-center gap-3">
                  <IconBubble
                    icon="book"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-2xl font-bold leading-none tracking-tight text-brand-blue sm:text-3xl">
                      500+
                    </p>

                    <p className="mt-1 text-xs leading-tight text-brand-text-muted sm:text-sm">
                      Resources
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4">
                  <IconBubble
                    icon="users"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-2xl font-bold leading-none tracking-tight text-brand-blue sm:text-3xl">
                      25K+
                    </p>

                    <p className="mt-1 text-xs leading-tight text-brand-text-muted sm:text-sm">
                      Readers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4">
                  <IconBubble
                    icon="lightbulb"
                    className="bg-violet-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-2xl font-bold leading-none tracking-tight text-brand-blue sm:text-3xl">
                      Expert
                    </p>

                    <p className="mt-1 text-xs leading-tight text-brand-text-muted sm:text-sm">
                      Insights
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4">
                  <IconBubble
                    icon="chart"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-2xl font-bold leading-none tracking-tight text-brand-blue sm:text-3xl">
                      Real
                    </p>

                    <p className="mt-1 text-xs leading-tight text-brand-text-muted sm:text-sm">
                      Business Impact
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#resources"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.2)] transition-all hover:-translate-y-0.5 sm:px-6"
                >
                  Explore All Resources

                  <Icon
                    name="arrow"
                    className="size-4"
                  />
                </a>

                <a
                  href="#"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-brand-purple/50 bg-white/70 px-5 text-sm font-bold text-brand-dark transition-colors hover:bg-white sm:px-6"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-violet-100 text-brand-purple">
                    <Icon
                      name="play"
                      className="size-2.5"
                    />
                  </span>

                  Watch Overview
                </a>
              </div>
            </div>

            {/* ==================================================
                HERO VISUAL
            =================================================== */}

            <div className="relative min-h-[25rem] sm:min-h-[31rem] lg:min-h-0">
              <div className="absolute left-1/2 top-5 size-80 -translate-x-1/2 rounded-full bg-indigo-100/70 blur-3xl sm:size-128" />

              {/* Main image */}

              <div className="absolute bottom-0 left-1/2 z-10 w-[19rem] -translate-x-1/2 sm:w-[25rem] lg:w-[29rem]">
                <img
                  src="/images/resources/resources-hero.webp"
                  alt="AI WorksForce resources"
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Resource menu card */}

              <div className="absolute right-0 top-5 z-30 hidden w-44 rounded-xl bg-white/95 p-4 shadow-[0_10px_30px_rgba(51,42,157,0.1)] sm:block lg:w-48">
                <div className="space-y-4">
                  {[
                    {
                      icon: "book" as IconName,
                      title: "Guides",
                      text: "Learn step by step",
                    },
                    {
                      icon: "file" as IconName,
                      title: "Case Studies",
                      text: "Real world results",
                    },
                    {
                      icon: "pen" as IconName,
                      title: "Blog",
                      text: "Latest insights",
                    },
                    {
                      icon: "help" as IconName,
                      title: "FAQs",
                      text: "Quick answers",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3"
                    >
                      <IconBubble
                        icon={item.icon}
                        className="size-9 bg-indigo-100 text-brand-purple"
                      />

                      <div>
                        <p className="text-xs font-bold text-brand-dark sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-0.5 text-[0.625rem] leading-tight text-brand-text-muted sm:text-xs">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Handwritten message */}

              <div className="absolute left-0 top-28 z-30 hidden -rotate-6 font-hand text-2xl leading-[0.95] text-brand-blue lg:block">
                Better
                <br />
                Knowledge
                <br />
                Brighter
                <br />
                Business
              </div>

              <svg
                className="absolute left-12 top-48 z-30 hidden h-20 w-24 text-brand-blue lg:block"
                viewBox="0 0 90 80"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 10C28 30 43 42 72 55"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="m63 47 10 8-12 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ====================================================
            CATEGORY SECTION
        ===================================================== */}

        <section
          id="resources"
          className="mx-auto max-w-7xl px-5 pt-8 sm:px-7 lg:px-8 lg:pt-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
            Explore by Category
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categories.map((category) => (
              <a
                href="#"
                key={category.title}
                className="group flex min-h-52 flex-col rounded-xl bg-blue-50/55 p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-[0_12px_30px_rgba(24,74,140,0.07)] sm:min-h-56"
              >
                <IconBubble
                  icon={category.icon}
                  className="bg-indigo-100 text-brand-purple"
                />

                <h2 className="mt-4 text-base font-bold leading-tight tracking-tight text-brand-dark sm:text-lg">
                  {category.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-brand-text sm:text-base">
                  {category.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-brand-blue sm:text-base">
                  Explore

                  <Icon
                    name="arrow"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ====================================================
            FEATURED RESOURCES
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-7 lg:px-8 lg:pt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
              Featured Resources
            </p>

            <a
              href="#"
              className="hidden items-center gap-2 text-sm font-bold text-brand-blue sm:inline-flex"
            >
              View All Resources

              <Icon
                name="arrow"
                className="size-4"
              />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <article
                key={resource.title}
                className="group overflow-hidden rounded-xl border border-blue-50 bg-white shadow-[0_5px_22px_rgba(24,74,140,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(24,74,140,0.1)]"
              >
                {/* Image */}

                <div className="relative aspect-[16/7] overflow-hidden bg-blue-50">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-blue shadow-sm">
                    {resource.type}
                  </span>
                </div>

                {/* Content */}

                <div className="p-4 sm:p-5">
                  <h2 className="text-lg font-bold leading-tight tracking-tight text-brand-dark sm:text-xl">
                    {resource.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-brand-text sm:text-base">
                    {resource.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-brand-text-muted sm:text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon
                        name="calendar"
                        className="size-4"
                      />
                      {resource.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Icon
                        name="clock"
                        className="size-4"
                      />
                      {resource.readTime}
                    </span>
                  </div>

                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue sm:text-base"
                  >
                    Read More

                    <Icon
                      name="arrow"
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ====================================================
            BLUE CTA
        ===================================================== */}

        <section className="relative isolate mx-1 mt-8 overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#07154d,#0b176f_55%,#2637e8)] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-10 lg:mt-10">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

          <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
                Explore More
              </p>

              <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                See all resources
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
                Dive into our complete library of guides, case studies,
                blog posts, and more to accelerate your AI journey.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-7 text-sm font-bold text-brand-dark shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:text-base"
            >
              Explore

              <Icon
                name="arrow"
                className="size-5"
              />
            </a>
          </div>

          <div className="absolute bottom-5 right-8 hidden rotate-[-8deg] font-hand text-2xl leading-[0.95] text-white md:block">
            More
            <br />
            Knowledge
            <br />
            More
            <br />
            Possibilities
          </div>
        </section>

        {/* ====================================================
            SOCIAL PROOF
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:px-8 lg:py-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_1.25fr] lg:items-center">
            {/* Metrics */}

            <div className="grid grid-cols-3 gap-4">
              <div>
                <IconBubble
                  icon="book"
                  className="bg-indigo-100 text-brand-purple"
                />

                <p className="mt-3 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                  500+
                </p>

                <p className="mt-1 text-xs text-brand-text-muted sm:text-sm">
                  Resources
                </p>
              </div>

              <div>
                <IconBubble
                  icon="users"
                  className="bg-indigo-100 text-brand-purple"
                />

                <p className="mt-3 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                  25K+
                </p>

                <p className="mt-1 text-xs text-brand-text-muted sm:text-sm">
                  Active Readers
                </p>
              </div>

              <div>
                <IconBubble
                  icon="lightbulb"
                  className="bg-indigo-100 text-brand-purple"
                />

                <p className="mt-3 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                  4.9/5
                </p>

                <p className="mt-1 text-xs text-brand-text-muted sm:text-sm">
                  Reader Satisfaction
                </p>
              </div>
            </div>

            {/* Testimonial */}

            <div className="flex flex-col gap-5 border-t border-blue-100 pt-6 sm:flex-row sm:items-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="mx-auto size-28 shrink-0 overflow-hidden rounded-full border-4 border-indigo-100 bg-blue-50 sm:size-32 lg:mx-0">
                <img
                  src="/images/testimonials/rahul-mehta.webp"
                  alt="Rahul Mehta"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="font-serif text-4xl font-bold leading-none text-brand-blue">
                  “
                </div>

                <p className="text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
                  The resources from AI WorksForce have been incredibly
                  helpful. Practical, easy to follow, and full of
                  real-world examples.
                </p>

                <p className="mt-3 text-sm font-bold text-brand-dark sm:text-base">
                  Rahul Mehta
                </p>

                <p className="text-xs text-brand-text-muted sm:text-sm">
                  CEO, GrowthTech (SaaS)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    
    </div>
  );
}