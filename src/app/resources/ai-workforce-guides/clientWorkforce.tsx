"use client";

import { useMemo, useState, type ReactNode } from "react";

/* ============================================================
   TYPES
============================================================ */

type IconName =
  | "book"
  | "lightbulb"
  | "file"
  | "grid"
  | "rocket"
  | "settings"
  | "bot"
  | "chart"
  | "building"
  | "wrench"
  | "shield"
  | "search"
  | "arrow-right"
  | "arrow-up"
  | "mail"
  | "star"
  | "users"
  | "menu"
  | "close"
  | "play"
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
  featured?: boolean;
};

/* ============================================================
   ICON COMPONENT
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

    lightbulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5a7 7 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
      </>
    ),

    file: (
      <>
        <path d="M6 3h8l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5" />
        <path d="M8 13h8M8 17h6" />
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

    rocket: (
      <>
        <path d="M14 4c3.8-.8 6-.3 6-.3s.5 2.2-.3 6c-.8 3.5-4.1 6.8-8.5 8.5l-5.7-5.7C7.2 8.1 10.5 4.8 14 4Z" />
        <path d="m8.5 14.5-4 1 .8-4M9.5 17.5l-1 4 4-.8" />
        <circle cx="15.5" cy="8.5" r="1.5" />
      </>
    ),

    settings: (
      <>
        <path d="M12 2.5 13.4 5l2.8.7.7 2.8 2.5 1.4-1.1 2.7 1.1 2.7-2.5 1.4-.7 2.8-2.8.7L12 22l-1.4-2.5-2.8-.7-.7-2.8-2.5-1.4 1.1-2.7-1.1-2.7 2.5-1.4.7-2.8 2.8-.7L12 2.5Z" />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ),

    bot: (
      <>
        <rect x="5" y="7" width="14" height="12" rx="3" />
        <path d="M12 3v4M8.5 12h.1M15.4 12h.1M9 16h6" />
        <path d="M3 11v4M21 11v4" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V12M10 20V8M16 20V4M22 20H2" />
      </>
    ),

    building: (
      <>
        <path d="M5 21V4h10v17M15 9h4v12M8 8h4M8 12h4M8 16h4M17 13h1M17 17h1" />
        <path d="M3 21h18" />
      </>
    ),

    wrench: (
      <>
        <path d="M14.5 6.5a4.5 4.5 0 0 0-5.8 5.8L4 17a2.1 2.1 0 0 0 3 3l4.7-4.7a4.5 4.5 0 0 0 5.8-5.8l-3 3-3-3 3-3Z" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.3 8.5-8 10-4.7-1.5-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.3 2.3 4.8-5" />
      </>
    ),

    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
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

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),

    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),

    users: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21v-2.2a7 7 0 0 1 14 0V21" />
        <path d="M5.5 7.5a3 3 0 0 0 0 5.5M18.5 7.5a3 3 0 0 1 0 5.5" />
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
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-brand-dark sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
        {description}
      </p>
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
    <article className="group overflow-hidden rounded-xl border border-blue-50 bg-white shadow-[0_4px_18px_rgba(24,74,140,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(24,74,140,0.1)]">
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
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-brand-text-muted">
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
   MAIN PAGE
============================================================ */

export default function ResourcesPage() {
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
      name: "Getting Started",
      icon: "rocket" as IconName,
      color: "bg-blue-100 text-brand-blue",
    },
    {
      name: "AI Automation",
      icon: "settings" as IconName,
      color: "bg-sky-100 text-brand-blue",
    },
    {
      name: "AI Agents",
      icon: "bot" as IconName,
      color: "bg-emerald-100 text-emerald-500",
    },
    {
      name: "Data Intelligence",
      icon: "chart" as IconName,
      color: "bg-blue-100 text-brand-blue",
    },
    {
      name: "Industry Guides",
      icon: "building" as IconName,
      color: "bg-violet-100 text-brand-purple",
    },
    {
      name: "Tool Guides",
      icon: "wrench" as IconName,
      color: "bg-sky-100 text-brand-blue",
    },
    {
      name: "Best Practices",
      icon: "shield" as IconName,
      color: "bg-indigo-100 text-brand-purple",
    },
  ];

  /* ==========================================================
     GUIDES
  ========================================================== */

  const guides: Guide[] = [
    {
      category: "Getting Started",
      readTime: "8 min read",
      title: "A Complete Guide to Getting Started with AI",
      description:
        "Learn the fundamentals, key concepts, and a step-by-step roadmap to start your AI journey.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "AI Automation",
      readTime: "12 min read",
      title: "How to Automate Repetitive Tasks with AI",
      description:
        "A practical guide to identifying, automating, and optimizing repetitive tasks in your business.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "AI Agents",
      readTime: "10 min read",
      title: "Building Effective AI Agents for Your Business",
      description:
        "Learn how to design, deploy, and manage AI agents that drive real business value.",
      image:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "Data Intelligence",
      readTime: "9 min read",
      title: "Turning Your Data into Actionable Insights",
      description:
        "A step-by-step guide to leveraging data intelligence for smarter business decisions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "Industry Guide",
      readTime: "11 min read",
      title: "AI in Healthcare: Opportunities and Use Cases",
      description:
        "Explore real-world applications of AI in healthcare and how to get started.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "Tool Guide",
      readTime: "8 min read",
      title: "Top AI Tools for Business in 2024",
      description:
        "A curated list of the best AI tools with practical use cases, pros, and tips.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "Best Practices",
      readTime: "10 min read",
      title: "AI Implementation Best Practices",
      description:
        "Key strategies and best practices to ensure successful AI adoption in your organization.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=90",
    },

    {
      category: "Advanced",
      readTime: "14 min read",
      title: "Building an AI-Ready Workforce",
      description:
        "A comprehensive guide to upskilling your team and creating an AI-first culture.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=90",
    },
  ];

  /* ==========================================================
     FILTER GUIDES
  ========================================================== */

  const filteredGuides = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return guides.filter((guide) => {
      const topicMatch =
        activeTopic === "All Guides" ||
        guide.category === activeTopic ||
        (activeTopic === "Industry Guides" &&
          guide.category === "Industry Guide") ||
        (activeTopic === "Tool Guides" &&
          guide.category === "Tool Guide") ||
        (activeTopic === "Best Practices" &&
          guide.category === "Best Practices");

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
     RETURN
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
            {/* Hero copy */}
            <div className="relative z-20 px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14 xl:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                Learn. Apply. Grow.
              </p>

              <h1 className="mt-3 max-w-2xl text-5xl font-bold leading-[0.94] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
                AI Workforce{" "}
                <span className="block bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Guides
                </span>
              </h1>

              <h2 className="mt-5 max-w-2xl text-lg font-bold leading-tight tracking-tight text-brand-dark sm:text-xl lg:text-2xl">
                Practical guides, playbooks, and tutorials to help you build,
                automate, and scale with AI.
              </h2>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-text sm:text-lg">
                Step-by-step resources, expert insights, and real-world
                frameworks to make AI work for your business.
              </p>

              {/* CTA buttons */}
              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#guides"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.2)] transition-all hover:-translate-y-0.5 sm:px-6"
                >
                  Browse All Guides

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

                  Watch Intro
                </a>
              </div>

              {/* Stats */}
              <div className="mt-8 grid max-w-2xl grid-cols-3">
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
                    label: "Active Learners",
                    tone: "bg-indigo-100 text-brand-purple",
                  },
                  {
                    icon: "graduation" as IconName,
                    value: "4.9/5",
                    label: "Reader Satisfaction",
                    tone: "bg-violet-100 text-brand-purple",
                  },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-2 sm:gap-3 ${
                      index > 0
                        ? "border-l border-indigo-100 pl-3 sm:pl-5"
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
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=90"
                alt="Professional learning AI workflows"
                className="absolute bottom-0 left-1/2 z-10 h-[84%] w-[65%] -translate-x-1/2 rounded-t-[6rem] object-cover object-center shadow-[0_18px_45px_rgba(48,42,185,0.14)] sm:w-[58%]"
              />

              {/* Left floating cards */}
              <div className="absolute left-0 top-8 z-20 hidden gap-3 sm:grid">
                <div className="flex w-36 items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_6px_22px_rgba(51,42,157,0.1)]">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-50 text-brand-purple">
                    <Icon
                      name="book"
                      className="size-5"
                    />
                  </span>

                  <p className="text-sm font-bold leading-tight text-brand-dark">
                    Step-by-Step
                    <br />
                    Tutorials
                  </p>
                </div>

                <div className="flex w-36 items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_6px_22px_rgba(51,42,157,0.1)]">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-violet-50 text-brand-purple">
                    <Icon
                      name="lightbulb"
                      className="size-5"
                    />
                  </span>

                  <p className="text-sm font-bold leading-tight text-brand-dark">
                    Expert
                    <br />
                    Insights
                  </p>
                </div>

                <div className="flex w-40 items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_6px_22px_rgba(51,42,157,0.1)]">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-50 text-brand-purple">
                    <Icon
                      name="file"
                      className="size-5"
                    />
                  </span>

                  <p className="text-sm font-bold leading-tight text-brand-dark">
                    Real-World
                    <br />
                    Examples
                  </p>
                </div>
              </div>

              {/* Right checklist card */}
              <div className="absolute right-0 top-6 z-20 hidden w-44 rounded-xl bg-white/95 p-4 shadow-[0_8px_25px_rgba(51,42,157,0.1)] sm:block">
                <h3 className="text-base font-bold leading-tight text-brand-dark">
                  Build Your
                  <br />
                  AI-Ready Team
                </h3>

                <div className="mt-3 space-y-2">
                  {["Learn", "Implement", "Scale"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-brand-text"
                      >
                        <span className="grid size-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-500">
                          <span className="text-xs font-bold">
                            ✓
                          </span>
                        </span>

                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Decorative plant */}
              <div className="absolute bottom-0 right-4 z-[5] hidden sm:block">
                <div className="size-20 rounded-full bg-emerald-100/60 blur-xl" />
              </div>

              {/* Cup */}
              <div className="absolute bottom-3 right-12 z-20 hidden rounded-b-xl rounded-t-md bg-white px-3 py-3 text-center shadow-lg sm:block">
                <p className="text-xs font-bold leading-tight text-brand-dark">
                  Smarter
                  <br />
                  Teams
                  <br />
                  Brighter
                  <br />
                  Futures
                </p>
              </div>

              {/* Handwritten note */}
              <div className="absolute right-0 top-40 z-30 hidden rotate-[-8deg] font-hand text-2xl leading-[0.95] text-brand-blue md:block">
                Guides
                <br />
                For a Smarter
                <br />
                Tomorrow
              </div>

              <svg
                className="absolute right-16 top-44 z-20 hidden h-20 w-20 text-brand-blue md:block"
                viewBox="0 0 80 80"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M65 8C49 17 48 29 38 39 28 50 19 55 8 57"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="m12 50-7 8 10 2"
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
          <div className="mb-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
              Explore by Topic
            </p>
          </div>

          <SectionHeading
            eyebrow=""
            title="Find the Right Guide for Your AI Journey"
            description="Browse guides by category to learn what matters most to your business."
          />

          {/* Topic cards */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {topics.map((topic) => {
              const active = activeTopic === topic.name;

              return (
                <button
                  key={topic.name}
                  type="button"
                  onClick={() => setActiveTopic(topic.name)}
                  className={`group flex min-h-24 flex-col items-center justify-center rounded-xl px-2 py-4 text-center transition-all sm:min-h-28 ${
                    active
                      ? "bg-gradient-to-b from-brand-blue to-brand-purple text-white shadow-[0_10px_24px_rgba(37,99,235,0.2)]"
                      : "bg-blue-50/60 text-brand-dark hover:-translate-y-0.5 hover:bg-blue-50"
                  }`}
                >
                  <span
                    className={`grid size-11 place-items-center rounded-full transition-colors sm:size-12 ${
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
          {/* Section top */}
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
                Featured Guides
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
              Explore Our AI Knowledge Base
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
                placeholder="Search guides..."
                className="h-11 w-full rounded-lg border border-blue-100 bg-white pl-10 pr-4 text-sm text-brand-dark outline-none transition placeholder:text-brand-text-muted focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
              />
            </div>
          </div>

          {/* Guide cards */}
          {filteredGuides.length > 0 ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                No guides found
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
                  Stay Ahead with AI
                </p>

                <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  Get New Guides in Your Inbox
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
                  Join our newsletter and get the latest AI guides,
                  templates, and insights delivered to your inbox.
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
            GUIDE OF MONTH + TESTIMONIAL
        ======================================================= */}

        <section className="mx-auto max-w-7xl px-5 pt-5 sm:px-7 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Guide of month */}
            <article className="overflow-hidden rounded-xl bg-[linear-gradient(135deg,#f7f9ff,#eef3ff)] p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">
                Guide of the Month
              </p>

              <div className="mt-3 grid gap-5 sm:grid-cols-[12rem_1fr] sm:items-center">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=90"
                  alt="AI analytics guide"
                  className="h-36 w-full rounded-lg object-cover sm:h-40"
                />

                <div>
                  <span className="inline-flex rounded-full bg-brand-purple px-3 py-1 text-xs font-bold text-white">
                    Featured
                  </span>

                  <h3 className="mt-2 text-lg font-bold leading-tight text-brand-dark sm:text-xl">
                    The Ultimate Guide to Building an AI-Powered Business
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-brand-text sm:text-base">
                    A comprehensive guide covering strategy, tools,
                    implementation, and real-world examples to help you build
                    and scale an AI-powered business.
                  </p>

                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-blue"
                  >
                    Read the Full Guide

                    <Icon
                      name="arrow-right"
                      className="size-4"
                    />
                  </a>
                </div>
              </div>
            </article>

            {/* Learner testimonial */}
            <article className="rounded-xl bg-[linear-gradient(135deg,#f7f9ff,#eef3ff)] p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">
                Real Learners. Real Growth.
              </p>

              <div className="mt-3 flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=90"
                  alt="Priya Sharma"
                  className="size-20 shrink-0 rounded-full border-4 border-violet-100 object-cover sm:size-24"
                />

                <div>
                  <span className="text-4xl font-bold leading-none text-brand-blue">
                    “
                  </span>

                  <p className="text-sm leading-relaxed text-brand-text sm:text-base">
                    The AI Workforce Guides are incredibly practical and easy
                    to follow. They helped our team implement automation in
                    just weeks, saving us hours every day.
                  </p>

                  <div className="mt-2">
                    <p className="text-sm font-bold text-brand-dark">
                      Priya Sharma
                    </p>

                    <p className="text-xs text-brand-text-muted sm:text-sm">
                      Head of Operations, GrowthTech
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial stats */}
              <div className="mt-5 grid grid-cols-3 border-t border-blue-100 pt-4">
                <div className="flex items-center gap-2">
                  <IconBubble
                    icon="book"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-xl font-bold leading-none text-brand-blue sm:text-2xl">
                      25K+
                    </p>

                    <p className="mt-1 text-xs text-brand-text-muted">
                      Active Learners
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-l border-blue-100 pl-3 sm:pl-4">
                  <IconBubble
                    icon="star"
                    className="bg-orange-100 text-brand-orange"
                  />

                  <div>
                    <p className="text-xl font-bold leading-none text-brand-blue sm:text-2xl">
                      4.9/5
                    </p>

                    <p className="mt-1 text-xs text-brand-text-muted">
                      Average Rating
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-l border-blue-100 pl-3 sm:pl-4">
                  <IconBubble
                    icon="users"
                    className="bg-violet-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-xl font-bold leading-none text-brand-blue sm:text-2xl">
                      92%
                    </p>

                    <p className="mt-1 text-xs text-brand-text-muted">
                      Report Real Impact
                    </p>
                  </div>
                </div>
              </div>
            </article>
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
            Ready to Build Your AI Knowledge?
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Explore All AI Workforce Guides
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
            Get practical insights, step-by-step tutorials, and expert advice
            to accelerate your AI journey.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#guides"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-brand-dark shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Browse All Guides

              <Icon
                name="arrow-right"
                className="size-4"
              />
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/60 bg-white/5 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Talk to Our Experts
            </a>
          </div>

          {/* Handwritten note */}
          <div className="absolute bottom-7 right-8 hidden rotate-[-8deg] font-hand text-2xl leading-[0.95] text-white md:block">
            Learn
            <br />
            Apply
            <br />
            Grow
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