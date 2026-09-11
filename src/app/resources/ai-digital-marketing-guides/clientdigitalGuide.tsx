"use client";

import { useMemo, useState, type ReactNode } from "react";

/* ============================================================
   TYPES
============================================================ */

type IconName =
  | "book"
  | "pen"
  | "megaphone"
  | "search"
  | "users"
  | "mail"
  | "chart"
  | "lightbulb"
  | "settings"
  | "grid"
  | "arrow-right"
  | "arrow-up"
  | "play"
  | "menu"
  | "close"
  | "star"
  | "clock"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram";

type Guide = {
  category: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
};

/* ============================================================
   ICON
============================================================ */

function Icon({
  name,
  className = "size-6",
}: {
  name: IconName;
  className?: string;
}) {
  const icons: Record<IconName, ReactNode> = {
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
      </>
    ),

    pen: (
      <>
        <path d="m4 20 4.5-1 10-10a2.2 2.2 0 0 0-3-3l-10 10L4 20Z" />
        <path d="m13 7 4 4" />
      </>
    ),

    megaphone: (
      <>
        <path d="M4 14V10a2 2 0 0 1 2-2h3l9-4v16l-9-4H6a2 2 0 0 1-2-2Z" />
        <path d="M8 16v4" />
        <path d="M18 9.5a3.5 3.5 0 0 1 0 5" />
      </>
    ),

    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </>
    ),

    users: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21v-2.2a7 7 0 0 1 14 0V21" />
        <path d="M5.5 7.5a3 3 0 0 0 0 5.5M18.5 7.5a3 3 0 0 1 0 5.5" />
      </>
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V12M10 20V8M16 20V4M22 20H2" />
      </>
    ),

    lightbulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5a7 7 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
      </>
    ),

    settings: (
      <>
        <path d="M12 2.5 13.4 5l2.8.7.7 2.8 2.5 1.4-1.1 2.7 1.1 2.7-2.5 1.4-.7 2.8-2.8.7L12 22l-1.4-2.5-2.8-.7-.7-2.8-2.5-1.4 1.1-2.7-1.1-2.7 2.5-1.4.7-2.8 2.8-.7L12 2.5Z" />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ),

    grid: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),

    "arrow-right": (
      <>
        <path d="M4 12h16" />
        <path d="m13 5 7 7-7 7" />
      </>
    ),

    "arrow-up": (
      <>
        <path d="M5 19 19 5" />
        <path d="M8 5h11v11" />
      </>
    ),

    play: (
      <path
        d="m9 6 9 6-9 6V6Z"
        fill="currentColor"
        stroke="none"
      />
    ),

    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
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
  className,
}: {
  icon: IconName;
  className: string;
}) {
  return (
    <span
      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full sm:size-12 ${className}`}
    >
      <Icon name={icon} className="size-5 sm:size-6" />
    </span>
  );
}

/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-brand-dark sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   GUIDE CARD
============================================================ */

function GuideCard({
  guide,
}: {
  guide: Guide;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-blue-50 bg-white shadow-[0_4px_18px_rgba(24,74,140,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(24,74,140,0.11)]">
      {/* Image */}
      <div className="relative h-44 overflow-hidden sm:h-48">
        <img
          src={guide.image}
          alt={guide.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-blue shadow-sm sm:text-sm">
          {guide.category}
        </span>

        {/* Read time */}
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-brand-text-muted">
          {guide.readTime}
        </span>
      </div>

      {/* Content */}
      <div className="flex min-h-52 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold leading-tight tracking-tight text-brand-dark sm:text-xl">
          {guide.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-brand-text sm:text-base">
          {guide.description}
        </p>

        <a
          href="#"
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
        >
          Read Guide

          <Icon
            name="arrow-right"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function DigitalMarketingGuidesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState("All Guides");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  /* ==========================================================
     NAVIGATION
  ========================================================== */

  const navItems = [
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

  /* ==========================================================
     TOPICS
  ========================================================== */

  const topics = [
    {
      name: "All Guides",
      icon: "grid" as IconName,
      color: "bg-indigo-100 text-brand-purple",
    },
    {
      name: "Content Marketing",
      icon: "pen" as IconName,
      color: "bg-violet-100 text-brand-purple",
    },
    {
      name: "Paid Advertising",
      icon: "megaphone" as IconName,
      color: "bg-rose-100 text-rose-500",
    },
    {
      name: "SEO",
      icon: "search" as IconName,
      color: "bg-blue-100 text-brand-blue",
    },
    {
      name: "Social Media",
      icon: "users" as IconName,
      color: "bg-indigo-100 text-brand-purple",
    },
    {
      name: "Email Marketing",
      icon: "mail" as IconName,
      color: "bg-blue-100 text-brand-blue",
    },
    {
      name: "Analytics & Insights",
      icon: "chart" as IconName,
      color: "bg-emerald-100 text-emerald-500",
    },
    {
      name: "Strategy & Planning",
      icon: "lightbulb" as IconName,
      color: "bg-violet-100 text-brand-purple",
    },
    {
      name: "Tools & Automations",
      icon: "settings" as IconName,
      color: "bg-indigo-100 text-brand-purple",
    },
  ];

  /* ==========================================================
     GUIDES
  ========================================================== */

  const guides: Guide[] = [
    {
      category: "Featured",
      readTime: "10 min read",
      title: "The Complete Guide to AI in Digital Marketing",
      description:
        "Learn how to use AI across your marketing channels to drive higher engagement, leads, and revenue.",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "Strategy",
      readTime: "8 min read",
      title: "How to Create a Winning AI-Powered Social Media Strategy",
      description:
        "Step-by-step guide to plan, create, and automate your social media with AI.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "Paid Ads",
      readTime: "12 min read",
      title: "Using AI to Optimize Google Ads Campaigns",
      description:
        "Learn how AI can help you create better ad copy, target the right audience, and maximize ROI.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "SEO",
      readTime: "9 min read",
      title: "AI SEO Guide: Rank Higher, Faster",
      description:
        "Discover how to use AI tools to optimize your content, find the right keywords, and improve search rankings.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "Email Marketing",
      readTime: "7 min read",
      title: "AI for Email Marketing: Personalize and Scale",
      description:
        "Learn how to use AI to create personalized email campaigns that convert.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "Analytics",
      readTime: "10 min read",
      title: "AI Marketing Analytics: Turn Data into Decisions",
      description:
        "A practical guide to using AI for smarter marketing insights and better decision-making.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=90",
    },
  ];

  /* ==========================================================
     FILTERED GUIDES
  ========================================================== */

  const filteredGuides = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return guides.filter((guide) => {
      const topicMatch =
        activeTopic === "All Guides" ||
        (activeTopic === "Content Marketing" &&
          guide.category === "Featured") ||
        (activeTopic === "Paid Advertising" &&
          guide.category === "Paid Ads") ||
        (activeTopic === "Analytics & Insights" &&
          guide.category === "Analytics") ||
        (activeTopic === "Strategy & Planning" &&
          guide.category === "Strategy") ||
        guide.category === activeTopic;

      const searchMatch =
        query.length === 0 ||
        guide.title.toLowerCase().includes(query) ||
        guide.description.toLowerCase().includes(query) ||
        guide.category.toLowerCase().includes(query);

      return topicMatch && searchMatch;
    });
  }, [activeTopic, searchQuery]);

  /* ==========================================================
     NEWSLETTER
  ========================================================== */

  function handleNewsletterSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!email.trim()) return;

    setEmail("");
  }

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
  

      <main>
        {/* ======================================================
            HERO
        ======================================================= */}

        <section className="relative isolate overflow-hidden rounded-b-[1.25rem] bg-[linear-gradient(112deg,#fafbff_0%,#f5f7ff_48%,#f0efff_100%)]">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-32 -top-48 -z-10 size-[38rem] rounded-full bg-[radial-gradient(circle,#b5acff90_0%,#d9dcff45_42%,transparent_70%)] sm:size-[45rem]" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 size-[28rem] rounded-full bg-[radial-gradient(circle,#dbeafe80_0%,transparent_70%)]" />

          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
            {/* Hero content */}
            <div className="relative z-20 px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14 xl:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                Marketing Smarter. With AI.
              </p>

              <h1 className="mt-3 max-w-3xl text-5xl font-bold leading-[0.94] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
                AI Digital
                <span className="block bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Marketing Guides
                </span>
              </h1>

              <h2 className="mt-5 max-w-2xl text-lg font-bold leading-tight tracking-tight text-brand-dark sm:text-xl lg:text-2xl">
                Practical guides, strategies, and frameworks to help you use
                AI in digital marketing and achieve measurable business
                growth.
              </h2>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-text sm:text-lg">
                From content creation to paid ads, SEO, and analytics —
                explore expert resources to market smarter, faster, and more
                effectively with AI.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#guides"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.2)] transition-all hover:-translate-y-0.5 sm:px-6"
                >
                  Explore All Guides

                  <Icon
                    name="arrow-right"
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

              {/* Hero statistics */}
              <div className="mt-8 grid max-w-3xl grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
                {[
                  {
                    icon: "book" as IconName,
                    value: "100+",
                    label: "Guides & Resources",
                    tone: "bg-emerald-100 text-emerald-500",
                  },
                  {
                    icon: "users" as IconName,
                    value: "25K+",
                    label: "Marketers Learning",
                    tone: "bg-indigo-100 text-brand-purple",
                  },
                  {
                    icon: "chart" as IconName,
                    value: "3x",
                    label: "Faster Campaign Results",
                    tone: "bg-violet-100 text-brand-purple",
                  },
                  {
                    icon: "arrow-up" as IconName,
                    value: "70%",
                    label: "Average Time Saved",
                    tone: "bg-indigo-100 text-brand-purple",
                  },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-2 sm:gap-3 ${
                      index > 0
                        ? "border-l border-indigo-100 pl-3 sm:pl-4"
                        : ""
                    }`}
                  >
                    <IconBubble
                      icon={stat.icon}
                      className={stat.tone}
                    />

                    <div className="min-w-0">
                      <p className="text-2xl font-bold leading-none tracking-tight text-brand-blue sm:text-3xl">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs leading-tight text-brand-text-muted sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative min-h-[25rem] sm:min-h-[30rem] lg:min-h-0">
              {/* Soft visual background */}
              <div className="absolute left-1/2 top-12 size-80 -translate-x-1/2 rounded-full bg-indigo-100/50 blur-2xl sm:size-[28rem]" />

              {/* Main person */}
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=90"
                alt="Digital marketing professional"
                className="absolute bottom-0 left-1/2 z-10 h-[84%] w-[66%] -translate-x-1/2 rounded-t-[6rem] object-cover object-center shadow-[0_18px_45px_rgba(48,42,185,0.14)] sm:w-[59%]"
              />

              {/* Laptop overlay */}
              <div className="absolute bottom-7 left-1/2 z-20 w-44 -translate-x-1/2 rounded-lg bg-slate-200 px-4 py-4 text-center shadow-xl sm:w-52">
                <p className="text-sm font-bold text-brand-text sm:text-base">
                  Marketing
                </p>

                <p className="text-xs font-semibold text-brand-text-muted sm:text-sm">
                  Smarter with AI
                </p>
              </div>

              {/* Left top card */}
              <div className="absolute left-0 top-7 z-30 hidden w-40 items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_7px_24px_rgba(51,42,157,0.1)] sm:flex">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-50 text-brand-purple">
                  <Icon
                    name="pen"
                    className="size-5"
                  />
                </span>

                <div>
                  <p className="text-sm font-bold leading-tight text-brand-dark">
                    AI Content
                    <br />
                    Creation
                  </p>

                  <p className="mt-1 text-xs text-brand-text-muted">
                    Create. Optimize. Scale.
                  </p>
                </div>
              </div>

              {/* Left middle card */}
              <div className="absolute left-0 top-28 z-30 hidden w-40 items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_7px_24px_rgba(51,42,157,0.1)] sm:flex">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-rose-50 text-rose-500">
                  <Icon
                    name="megaphone"
                    className="size-5"
                  />
                </span>

                <div>
                  <p className="text-sm font-bold leading-tight text-brand-dark">
                    AI Ads & Paid Media
                  </p>

                  <p className="mt-1 text-xs text-brand-text-muted">
                    Higher ROI. Lower Costs.
                  </p>
                </div>
              </div>

              {/* Left bottom card */}
              <div className="absolute left-0 top-48 z-30 hidden w-40 items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_7px_24px_rgba(51,42,157,0.1)] sm:flex">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-500">
                  <Icon
                    name="search"
                    className="size-5"
                  />
                </span>

                <div>
                  <p className="text-sm font-bold leading-tight text-brand-dark">
                    AI SEO
                  </p>

                  <p className="mt-1 text-xs text-brand-text-muted">
                    Rank Smarter. Faster.
                  </p>
                </div>
              </div>

              {/* Right top card */}
              <div className="absolute right-0 top-5 z-30 hidden w-44 items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_7px_24px_rgba(51,42,157,0.1)] sm:flex">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-50 text-brand-purple">
                  <Icon
                    name="users"
                    className="size-5"
                  />
                </span>

                <div>
                  <p className="text-sm font-bold leading-tight text-brand-dark">
                    Social Media
                    <br />
                    Automation
                  </p>

                  <p className="mt-1 text-xs text-brand-text-muted">
                    Engage. Grow. Convert.
                  </p>
                </div>
              </div>

              {/* Right middle card */}
              <div className="absolute right-0 top-28 z-30 hidden w-44 items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_7px_24px_rgba(51,42,157,0.1)] sm:flex">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-violet-50 text-brand-purple">
                  <Icon
                    name="chart"
                    className="size-5"
                  />
                </span>

                <div>
                  <p className="text-sm font-bold leading-tight text-brand-dark">
                    Marketing Analytics
                  </p>

                  <p className="mt-1 text-xs text-brand-text-muted">
                    Turn Data into Growth.
                  </p>
                </div>
              </div>

              {/* Right bottom card */}
              <div className="absolute right-0 top-48 z-30 hidden w-44 items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_7px_24px_rgba(51,42,157,0.1)] sm:flex">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-50 text-brand-blue">
                  <Icon
                    name="mail"
                    className="size-5"
                  />
                </span>

                <div>
                  <p className="text-sm font-bold leading-tight text-brand-dark">
                    Email Marketing
                    <br />
                    with AI
                  </p>

                  <p className="mt-1 text-xs text-brand-text-muted">
                    Personalize. Automate.
                  </p>
                </div>
              </div>

              {/* Handwritten note */}
              <div className="absolute right-0 top-64 z-40 hidden rotate-[-8deg] font-hand text-2xl leading-[0.95] text-brand-blue md:block">
                Real
                <br />
                Strategies
                <br />
                Real Growth
              </div>

              {/* Hand drawn arrow */}
              <svg
                className="absolute right-16 top-72 z-30 hidden h-20 w-20 text-brand-blue md:block"
                viewBox="0 0 80 80"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M66 7C50 17 47 31 37 41 28 50 18 54 8 56"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="m12 49-7 8 10 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* ======================================================
            TOPICS
        ======================================================= */}

        <section
          id="guides"
          className="mx-auto max-w-7xl px-5 pt-10 sm:px-7 lg:px-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
            Explore Guides by Topic
          </p>

          <div className="mt-3">
            <SectionHeading
              title="Find the Right Guide for Your Marketing"
              description="Browse practical AI marketing resources built to help you market smarter, faster, and more effectively."
            />
          </div>

          {/* Topic cards */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
            {topics.map((topic) => {
              const active = activeTopic === topic.name;

              return (
                <button
                  key={topic.name}
                  type="button"
                  onClick={() =>
                    setActiveTopic(topic.name)
                  }
                  className={`group flex min-h-24 flex-col items-center justify-center rounded-xl px-2 py-4 text-center transition-all sm:min-h-28 ${
                    active
                      ? "bg-gradient-to-b from-brand-blue to-brand-purple text-white shadow-[0_10px_24px_rgba(37,99,235,0.2)]"
                      : "bg-blue-50/60 text-brand-dark hover:-translate-y-0.5 hover:bg-blue-50"
                  }`}
                >
                  <span
                    className={`grid size-11 place-items-center rounded-full sm:size-12 ${
                      active
                        ? "bg-white/15 text-white"
                        : topic.color
                    }`}
                  >
                    <Icon
                      name={topic.icon}
                      className="size-5 sm:size-6"
                    />
                  </span>

                  <span
                    className={`mt-3 text-xs font-bold leading-tight sm:text-sm ${
                      active
                        ? "text-white"
                        : "text-brand-dark"
                    }`}
                  >
                    {topic.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ======================================================
            FEATURED GUIDES
        ======================================================= */}

        <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-7 lg:px-8">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
                Featured AI Digital Marketing Guides
              </p>
            </div>

            <a
              href="#guides"
              className="hidden items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple sm:inline-flex"
            >
              View All Guides

              <Icon
                name="arrow-right"
                className="size-4"
              />
            </a>
          </div>

          {/* Search */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
              Explore Our Digital Marketing Knowledge Base
            </h2>

            <div className="relative w-full sm:max-w-xs">
              <Icon
                name="search"
                className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-brand-blue"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search marketing guides..."
                className="h-11 w-full rounded-lg border border-blue-100 bg-white pl-10 pr-4 text-sm text-brand-dark outline-none transition placeholder:text-brand-text-muted focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
              />
            </div>
          </div>

          {/* Cards */}
          {filteredGuides.length > 0 ? (
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.map((guide) => (
                <GuideCard
                  key={guide.title}
                  guide={guide}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/50 px-6 py-12 text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-white text-brand-blue shadow-sm">
                <Icon
                  name="search"
                  className="size-6"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold text-brand-dark">
                No marketing guides found
              </h3>

              <p className="mt-2 text-sm text-brand-text sm:text-base">
                Try another topic or search term.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveTopic("All Guides");
                  setSearchQuery("");
                }}
                className="mt-5 text-sm font-bold text-brand-blue hover:text-brand-purple"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* ======================================================
            NEWSLETTER
        ======================================================= */}

        <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-7 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#07154d,#0c1772_55%,#2836e4)] px-5 py-7 text-white sm:px-8 lg:px-10">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
                  Stay Ahead in Digital Marketing
                </p>

                <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  Get the Latest AI Marketing Guides in Your Inbox
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
                  Join 25,000+ marketers and receive new guides, templates,
                  and strategies delivered to your inbox.
                </p>
              </div>

              <div className="w-full lg:w-[28rem]">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col gap-2 sm:flex-row"
                >
                  <div className="relative flex-1">
                    <Icon
                      name="mail"
                      className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-text-muted"
                    />

                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="Enter your email address"
                      className="h-11 w-full rounded-lg border-0 bg-white pl-10 pr-4 text-sm text-brand-dark outline-none placeholder:text-brand-text-muted focus:ring-2 focus:ring-white/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-purple px-5 text-sm font-bold text-white transition-colors hover:bg-brand-purple-light"
                  >
                    Subscribe

                    <Icon
                      name="arrow-right"
                      className="size-4"
                    />
                  </button>
                </form>

                <p className="mt-2 text-xs text-blue-100">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            RESULTS + TESTIMONIAL
        ======================================================= */}

        <section className="mx-auto max-w-7xl px-5 pt-5 sm:px-7 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Results */}
            <div className="rounded-xl bg-[linear-gradient(135deg,#f8faff,#eef3ff)] p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
                Real Guides. Real Impact.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    icon: "arrow-up" as IconName,
                    value: "312%",
                    label: "Average Increase in Campaign ROI",
                    tone: "bg-emerald-100 text-emerald-500",
                  },
                  {
                    icon: "users" as IconName,
                    value: "3x",
                    label: "Faster Content Production",
                    tone: "bg-indigo-100 text-brand-purple",
                  },
                  {
                    icon: "clock" as IconName,
                    value: "70%",
                    label: "Reduction in Manual Work",
                    tone: "bg-orange-100 text-brand-orange",
                  },
                  {
                    icon: "chart" as IconName,
                    value: "5x",
                    label: "More Qualified Leads",
                    tone: "bg-rose-100 text-rose-500",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center"
                  >
                    <IconBubble
                      icon={stat.icon}
                      className={stat.tone}
                    />

                    <p className="mt-3 text-2xl font-bold leading-none tracking-tight text-brand-blue sm:text-3xl">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-xs leading-snug text-brand-text sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-xl bg-[linear-gradient(135deg,#f8faff,#eef3ff)] p-4 sm:p-5">
              <div className="flex gap-4 sm:gap-5">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=90"
                  alt="Marketing leader testimonial"
                  className="size-24 shrink-0 rounded-full border-4 border-violet-100 object-cover sm:size-28"
                />

                <div>
                  <span className="text-4xl font-bold leading-none text-brand-blue sm:text-5xl">
                    “
                  </span>

                  <p className="text-sm leading-relaxed text-brand-text sm:text-base">
                    The AI digital marketing guides from AI WorksForce have
                    been a game-changer for our team. We implemented several
                    strategies and seen a significant increase in leads and
                    ROI.
                  </p>

                  <div className="mt-3">
                    <p className="text-sm font-bold text-brand-dark sm:text-base">
                      Karan Mehta
                    </p>

                    <p className="text-xs text-brand-text-muted sm:text-sm">
                      Head of Marketing, GrowthTech (SaaS)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            CTA
        ======================================================= */}

        <section
          id="contact"
          className="relative isolate mx-1 mt-8 overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#07154d,#0c1772_55%,#2836e4)] px-5 py-8 text-center text-white sm:mx-3 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

          <div className="pointer-events-none absolute -bottom-32 -right-24 -z-10 size-72 rounded-full bg-brand-blue/20 blur-3xl" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
            Ready to Transform Your Marketing?
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Explore All AI Digital Marketing Guides
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
            Get practical strategies, expert insights, and step-by-step
            guides to grow your business with AI.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#guides"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-brand-dark shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Explore All Guides

              <Icon
                name="arrow-right"
                className="size-4"
              />
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/60 bg-white/5 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Talk to Our Marketing Experts
            </a>
          </div>

          {/* Handwritten annotation */}
          <div className="absolute bottom-7 right-8 hidden rotate-[-8deg] font-hand text-2xl leading-[0.95] text-white md:block">
            Smarter
            <br />
            Marketing
            <br />
            Brighter
            <br />
            Growth
          </div>

          <svg
            className="absolute bottom-3 right-8 hidden h-14 w-20 text-white md:block"
            viewBox="0 0 80 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M69 5C62 25 44 40 10 47"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="m16 40-7 7 10 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </section>
      </main>

   
    </div>
  );
}