"use client";

import { useMemo, useState, type ReactNode } from "react";

/* ============================================================
   TYPES
============================================================ */

type IconName =
  | "grid"
  | "settings"
  | "bot"
  | "megaphone"
  | "chart"
  | "link"
  | "building"
  | "lightbulb"
  | "file"
  | "search"
  | "arrow-right"
  | "arrow-left"
  | "play"
  | "menu"
  | "close"
  | "calendar"
  | "clock"
  | "flame"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram"
  | "arrow-up";

type Category = {
  name: string;
  icon: IconName;
  tone: string;
};

type Article = {
  id: number;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
};

/* ============================================================
   ICON COMPONENT
============================================================ */

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const icons: Record<IconName, ReactNode> = {
    grid: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),

    settings: (
      <>
        <path d="M12 2.5 14 5l3 .5.5 3 2.5 2-1.5 3 1.5 3-2.5 2-.5 3-3 .5-2 2.5-2-2.5-3-.5-.5-3-2.5-2 1.5-3-1.5-3 2.5-2 .5-3 3-.5 2-2.5Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),

    bot: (
      <>
        <rect x="5" y="7" width="14" height="12" rx="3" />
        <path d="M12 3v4M9 12h.01M15 12h.01M9 16h6" />
        <path d="M3 12h2M19 12h2" />
      </>
    ),

    megaphone: (
      <>
        <path d="M4 14v-4a2 2 0 0 1 2-2h3l9-4v16l-9-4H6a2 2 0 0 1-2-2Z" />
        <path d="M9 16v4" />
        <path d="M18 9a4 4 0 0 1 0 6" />
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

    link: (
      <>
        <path d="M10 13.5 14 9.5" />
        <path d="M7 17H6a4 4 0 0 1 0-8h3" />
        <path d="M17 7h1a4 4 0 0 1 0 8h-3" />
      </>
    ),

    building: (
      <>
        <path d="M5 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M3 21h18" />
        <path d="M9 7h1M13 7h1M9 11h1M13 11h1M9 15h1M13 15h1" />
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
        <path d="M6 3h8l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5" />
        <path d="M8 13h8M8 17h6M8 9h2" />
      </>
    ),

    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),

    "arrow-right": (
      <>
        <path d="M4 12h16" />
        <path d="m13 5 7 7-7 7" />
      </>
    ),

    "arrow-left": (
      <>
        <path d="M20 12H4" />
        <path d="m11 5-7 7 7 7" />
      </>
    ),

    play: (
      <path
        d="m9 6 9 6-9 6V6Z"
        fill="currentColor"
        stroke="none"
      />
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

    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    flame: (
      <path d="M12 22c4.5 0 7-3 7-7 0-3.2-1.8-5.5-4.3-8.3.2 2.7-1.1 4.1-2.6 5.1.2-3.7-1.6-6.4-4.5-8.8.2 3.8-3.5 6.5-3.5 10.4C4.1 18.9 7.3 22 12 22Z" />
    ),

    "arrow-up": (
      <>
        <path d="M5 19 19 5" />
        <path d="M8 5h11v11" />
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
   ARTICLE META
============================================================ */

function ArticleMeta({
  date,
  readTime,
}: {
  date: string;
  readTime: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-brand-text-muted sm:text-sm">
      <span className="inline-flex items-center gap-1.5">
        <Icon
          name="calendar"
          className="size-3.5 sm:size-4"
        />
        {date}
      </span>

      <span className="inline-flex items-center gap-1.5">
        <Icon
          name="clock"
          className="size-3.5 sm:size-4"
        />
        {readTime}
      </span>
    </div>
  );
}

/* ============================================================
   ARTICLE CARD
============================================================ */

function ArticleCard({
  article,
}: {
  article: Article;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-blue-50 bg-white shadow-[0_5px_20px_rgba(24,74,140,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(24,74,140,0.1)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-navy/20 to-transparent" />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-blue shadow-sm sm:text-sm">
          {article.category}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <ArticleMeta
          date={article.date}
          readTime={article.readTime}
        />

        <h3 className="mt-3 text-lg font-bold leading-tight tracking-tight text-brand-dark sm:text-xl">
          {article.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-text sm:text-base">
          {article.description}
        </p>

        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
        >
          Read More

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
   PAGE
============================================================ */

export default function OurBlogPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState("All Posts");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(1);

  /* ==========================================================
     NAV
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
     CATEGORIES
  ========================================================== */

  const categories: Category[] = [
    {
      name: "All Posts",
      icon: "grid",
      tone: "bg-indigo-100 text-brand-purple",
    },
    {
      name: "AI Automation",
      icon: "settings",
      tone: "bg-blue-100 text-brand-blue",
    },
    {
      name: "AI Agents",
      icon: "bot",
      tone: "bg-emerald-100 text-emerald-500",
    },
    {
      name: "Digital Marketing",
      icon: "megaphone",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      name: "Business Growth",
      icon: "chart",
      tone: "bg-blue-100 text-brand-blue",
    },
    {
      name: "Tools & Integrations",
      icon: "link",
      tone: "bg-indigo-100 text-brand-purple",
    },
    {
      name: "Industry Insights",
      icon: "building",
      tone: "bg-blue-100 text-brand-blue",
    },
    {
      name: "Tips & Tutorials",
      icon: "lightbulb",
      tone: "bg-violet-100 text-brand-purple",
    },
  ];

  /* ==========================================================
     ARTICLES
  ========================================================== */

  const articles: Article[] = [
    {
      id: 1,
      category: "Digital Marketing",
      date: "Sep 8, 2024",
      readTime: "6 min read",
      title:
        "AI in Digital Marketing: Strategies That Actually Work",
      description:
        "Learn how to use AI tools to create better content, target the right audience, and drive higher ROI.",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=90",
    },

    {
      id: 2,
      category: "Business Growth",
      date: "Sep 5, 2024",
      readTime: "7 min read",
      title:
        "5 Ways AI Agents Can Improve Your Customer Experience",
      description:
        "From instant support to personalized recommendations, discover how AI agents are changing customer service.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90",
    },

    {
      id: 3,
      category: "Tools & Integrations",
      date: "Sep 2, 2024",
      readTime: "5 min read",
      title:
        "Top 10 AI Tools for Businesses in 2024",
      description:
        "A curated list of the best AI tools to help you automate, analyze, and scale your business.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=90",
    },

    {
      id: 4,
      category: "Industry Insights",
      date: "Aug 28, 2024",
      readTime: "8 min read",
      title:
        "The Future of Work: How AI is Reshaping Every Industry",
      description:
        "Explore the opportunities and challenges AI brings to different sectors in 2024 and beyond.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90",
    },

    {
      id: 5,
      category: "Tips & Tutorials",
      date: "Aug 25, 2024",
      readTime: "6 min read",
      title:
        "A Step-by-Step Guide to Building Your First AI Workflow",
      description:
        "Learn how to set up a simple yet powerful AI workflow for your business — no coding required.",
      image:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=90",
    },

    {
      id: 6,
      category: "AI Agents",
      date: "Aug 20, 2024",
      readTime: "7 min read",
      title:
        "Real-World Examples of AI Agents in Action",
      description:
        "See how businesses are using AI agents to automate tasks, increase productivity, and deliver better results.",
      image:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=90",
    },
  ];

  /* ==========================================================
     FEATURED ARTICLE
  ========================================================== */

  const featuredArticle: Article = {
    id: 0,
    category: "AI Automation",
    date: "Sep 10, 2024",
    readTime: "8 min read",
    title:
      "How AI Automation is Transforming Businesses in 2024",
    description:
      "Discover how companies are using AI automation to reduce costs, improve efficiency, and unlock new growth opportunities.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=90",
  };

  /* ==========================================================
     FILTER
  ========================================================== */

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return articles.filter((article) => {
      const categoryMatch =
        activeCategory === "All Posts" ||
        article.category === activeCategory;

      const searchMatch =
        query.length === 0 ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  /* ==========================================================
     NEWSLETTER
  ========================================================== */

  function handleNewsletter(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!email.trim()) return;

    setEmail("");
  }

  /* ==========================================================
     CATEGORY CHANGE
  ========================================================== */

  function changeCategory(category: string) {
    setActiveCategory(category);
    setPage(1);
  }

  /* ==========================================================
     SEARCH
  ========================================================== */

  function handleSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
      {/* ======================================================
          HEADER
      ======================================================= */}

      <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-7 lg:h-18 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            className="shrink-0"
            aria-label="AI WorksForce"
          >
            <div className="text-xl font-bold leading-none tracking-tight sm:text-2xl">
              <span className="text-brand-blue">AI</span>{" "}
              <span className="text-brand-dark">
                WorksForce
              </span>
            </div>

            <p className="mt-1 pl-7 text-xs font-medium text-brand-text-muted">
              Automate. Accelerate. Grow.
            </p>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`relative whitespace-nowrap py-6 text-xs transition-colors xl:text-sm ${
                  item === "Resources"
                    ? "font-bold text-brand-dark"
                    : "font-medium text-brand-text hover:text-brand-blue"
                }`}
              >
                {item}

                {item === "Resources" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-brand-blue" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue px-5 text-xs font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.2)] transition-all hover:-translate-y-0.5 lg:inline-flex"
          >
            Book a Free Consultation

            <Icon
              name="arrow-right"
              className="size-4"
            />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
            className="grid size-11 place-items-center rounded-lg border border-blue-100 text-brand-dark lg:hidden"
          >
            <Icon
              name={menuOpen ? "close" : "menu"}
              className="size-5"
            />
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-blue-100 bg-white px-5 py-5 shadow-lg lg:hidden">
            <nav className="mx-auto flex max-w-xl flex-col">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-slate-100 py-3 text-sm ${
                    item === "Resources"
                      ? "font-bold text-brand-blue"
                      : "font-medium text-brand-dark"
                  }`}
                >
                  {item}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 text-sm font-bold text-white"
              >
                Book a Free Consultation

                <Icon
                  name="arrow-right"
                  className="size-4"
                />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ====================================================
            HERO
        ===================================================== */}

        <section className="relative isolate overflow-hidden rounded-b-[1.25rem] bg-[linear-gradient(112deg,#fafbff_0%,#f6f7ff_45%,#f0efff_100%)]">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-40 -top-48 -z-10 size-128 rounded-full bg-[radial-gradient(circle,#bcb5ff80_0%,#dfe2ff40_45%,transparent_70%)]" />

          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_0.98fr]">
            {/* Hero content */}
            <div className="relative z-20 px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14 xl:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                Insights. Ideas. Impact.
              </p>

              <h1 className="mt-3 text-5xl font-bold leading-[0.95] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
                Our{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>

              <h2 className="mt-5 max-w-2xl text-lg font-bold leading-tight tracking-tight text-brand-dark sm:text-xl lg:text-2xl">
                Stay ahead with the latest insights, trends, and practical
                guides on AI, automation, and business growth.
              </h2>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-text sm:text-lg">
                Expert perspectives, how-to guides, industry updates, and
                real examples to help you build a smarter, more efficient
                business with AI.
              </p>

              {/* Hero buttons */}
              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#articles"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.2)] transition-all hover:-translate-y-0.5 sm:px-6"
                >
                  Explore Articles

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

              {/* Hero stats */}
              <div className="mt-8 grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
                {[
                  {
                    icon: "file" as IconName,
                    value: "250+",
                    label: "Articles",
                    tone: "bg-indigo-100 text-brand-purple",
                  },
                  {
                    icon: "users" as IconName,
                    value: "50K+",
                    label: "Monthly Readers",
                    tone: "bg-blue-100 text-brand-blue",
                  },
                  {
                    icon: "chart" as IconName,
                    value: "10+",
                    label: "Topics Covered",
                    tone: "bg-indigo-100 text-brand-purple",
                  },
                  {
                    icon: "arrow-up" as IconName,
                    value: "Weekly",
                    label: "New Content",
                    tone: "bg-violet-100 text-brand-purple",
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

                    <div>
                      <p className="text-xl font-bold leading-none tracking-tight text-brand-blue sm:text-2xl lg:text-3xl">
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
              <div className="absolute left-1/2 top-10 size-80 -translate-x-1/2 rounded-full bg-indigo-100/50 blur-2xl sm:size-128" />

              {/* Person */}
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=90"
                alt="AI WorksForce professional"
                className="absolute bottom-0 left-1/2 z-10 h-[88%] w-[64%] -translate-x-1/2 rounded-t-[6rem] object-cover object-center shadow-[0_18px_45px_rgba(48,42,185,0.14)] sm:w-[58%]"
              />

              {/* Laptop */}
              <div className="absolute bottom-7 left-1/2 z-20 w-44 -translate-x-1/2 rounded-lg bg-slate-200 px-4 py-4 text-center shadow-xl sm:w-52">
                <p className="text-sm font-bold text-brand-text sm:text-base">
                  AI
                </p>

                <p className="text-xs font-semibold text-brand-text-muted sm:text-sm">
                  WorksForce
                </p>
              </div>

              {/* Right cards */}
              <div className="absolute right-0 top-5 z-30 hidden w-44 rounded-xl bg-white/95 p-3 shadow-[0_7px_24px_rgba(51,42,157,0.1)] sm:block">
                <div className="flex items-center gap-3">
                  <IconBubble
                    icon="file"
                    className="bg-indigo-50 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold leading-tight text-brand-dark">
                      Latest Trends
                    </p>

                    <p className="mt-1 text-xs text-brand-text-muted">
                      Stay Updated
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-28 z-30 hidden w-44 rounded-xl bg-white/95 p-3 shadow-[0_7px_24px_rgba(51,42,157,0.1)] sm:block">
                <div className="flex items-center gap-3">
                  <IconBubble
                    icon="lightbulb"
                    className="bg-violet-50 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold leading-tight text-brand-dark">
                      Expert Insights
                    </p>

                    <p className="mt-1 text-xs text-brand-text-muted">
                      Learn from Experts
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-52 z-30 hidden w-44 rounded-xl bg-white/95 p-3 shadow-[0_7px_24px_rgba(51,42,157,0.1)] sm:block">
                <div className="flex items-center gap-3">
                  <IconBubble
                    icon="file"
                    className="bg-indigo-50 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold leading-tight text-brand-dark">
                      Practical Guides
                    </p>

                    <p className="mt-1 text-xs text-brand-text-muted">
                      Apply in Real Life
                    </p>
                  </div>
                </div>
              </div>

              {/* Handwriting */}
              <div className="absolute right-0 top-64 z-40 hidden rotate-[-8deg] font-hand text-2xl leading-[0.95] text-brand-blue md:block">
                Knowledge
                <br />
                Today
                <br />
                A Smarter
                <br />
                Tomorrow
              </div>

              <svg
                className="absolute right-12 top-72 z-30 hidden h-20 w-24 text-brand-blue md:block"
                viewBox="0 0 90 80"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M76 8C59 22 56 35 42 45 31 53 20 57 7 58"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="m12 50-7 8 11 2"
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
            CATEGORY
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-7 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
            Explore by Category
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => {
              const active =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    changeCategory(category.name)
                  }
                  className={`group flex min-h-20 flex-col items-center justify-center rounded-xl px-2 py-3 text-center transition-all sm:min-h-24 ${
                    active
                      ? "bg-gradient-to-b from-brand-blue to-brand-purple text-white shadow-[0_10px_24px_rgba(37,99,235,0.2)]"
                      : "bg-blue-50/60 text-brand-dark hover:-translate-y-0.5 hover:bg-blue-50"
                  }`}
                >
                  <span
                    className={`grid size-9 place-items-center rounded-full sm:size-10 ${
                      active
                        ? "bg-white/15 text-white"
                        : category.tone
                    }`}
                  >
                    <Icon
                      name={category.icon}
                      className="size-4.5 sm:size-5"
                    />
                  </span>

                  <span
                    className={`mt-2 text-xs font-bold leading-tight sm:text-sm ${
                      active
                        ? "text-white"
                        : "text-brand-dark"
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ====================================================
            BLOG CONTENT
        ===================================================== */}

        <section
          id="articles"
          className="mx-auto max-w-7xl px-5 pt-8 sm:px-7 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_20rem]">
            {/* Main column */}
            <div>
              {/* Featured */}
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
                  Featured Article
                </p>

                <a
                  href="#"
                  className="hidden items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-purple sm:inline-flex"
                >
                  View All Articles

                  <Icon
                    name="arrow-right"
                    className="size-4"
                  />
                </a>
              </div>

              <article className="mt-4 overflow-hidden rounded-xl border border-blue-50 bg-white shadow-[0_6px_24px_rgba(24,74,140,0.05)]">
                <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative aspect-[16/10] md:aspect-auto">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-blue shadow-sm sm:text-sm">
                      {featuredArticle.category}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7">
                    <ArticleMeta
                      date={featuredArticle.date}
                      readTime={featuredArticle.readTime}
                    />

                    <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-brand-dark sm:text-3xl">
                      {featuredArticle.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
                      {featuredArticle.description}
                    </p>

                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue"
                    >
                      Read Full Article

                      <Icon
                        name="arrow-right"
                        className="size-4"
                      />
                    </a>
                  </div>
                </div>
              </article>

              {/* Latest */}
              <div className="mt-7 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
                  Latest Articles
                </p>

                <a
                  href="#"
                  className="hidden items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-purple sm:inline-flex"
                >
                  View All Articles

                  <Icon
                    name="arrow-right"
                    className="size-4"
                  />
                </a>
              </div>

              <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                  />
                ))}
              </div>

              {/* Empty state */}
              {filteredArticles.length === 0 && (
                <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 px-5 py-12 text-center">
                  <div className="mx-auto grid size-14 place-items-center rounded-full bg-white text-brand-blue shadow-sm">
                    <Icon
                      name="search"
                      className="size-6"
                    />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-brand-dark">
                    No articles found
                  </h3>

                  <p className="mt-2 text-sm text-brand-text sm:text-base">
                    Try another category or search term.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      changeCategory("All Posts");
                    }}
                    className="mt-4 text-sm font-bold text-brand-blue"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setPage((value) =>
                      Math.max(1, value - 1),
                    )
                  }
                  disabled={page === 1}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-blue-100 px-4 text-xs font-semibold text-brand-text transition-colors hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
                >
                  <Icon
                    name="arrow-left"
                    className="size-4"
                  />
                  Previous
                </button>

                {[1, 2, 3].map((number) => (
                  <button
                    key={number}
                    type="button"
                    onClick={() => setPage(number)}
                    className={`grid size-10 place-items-center rounded-lg border text-sm font-semibold transition-all ${
                      page === number
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-blue-100 text-brand-dark hover:border-brand-blue hover:text-brand-blue"
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <span className="px-1 text-sm text-brand-text-muted">
                  ...
                </span>

                <button
                  type="button"
                  onClick={() => setPage(10)}
                  className={`grid size-10 place-items-center rounded-lg border text-sm font-semibold ${
                    page === 10
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-blue-100 text-brand-dark"
                  }`}
                >
                  10
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setPage((value) =>
                      Math.min(10, value + 1),
                    )
                  }
                  disabled={page === 10}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-blue-100 px-4 text-xs font-semibold text-brand-text transition-colors hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
                >
                  Next

                  <Icon
                    name="arrow-right"
                    className="size-4"
                  />
                </button>
              </div>
            </div>

            {/* ==================================================
                SIDEBAR
            =================================================== */}

            <aside className="space-y-5">
              {/* Search */}
              <div className="rounded-xl border border-blue-100 bg-white p-2 shadow-[0_5px_18px_rgba(24,74,140,0.04)]">
                <div className="flex gap-2">
                  <div className="relative min-w-0 flex-1">
                    <Icon
                      name="search"
                      className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand-blue"
                    />

                    <input
                      type="search"
                      value={search}
                      onChange={(event) =>
                        handleSearch(event.target.value)
                      }
                      placeholder="Search articles, topics, or keywords..."
                      className="h-10 w-full min-w-0 rounded-lg bg-blue-50/50 pl-9 pr-3 text-xs text-brand-dark outline-none placeholder:text-brand-text-muted focus:bg-blue-50 sm:text-sm"
                    />
                  </div>

                  <button
                    type="button"
                    className="rounded-lg bg-brand-blue px-4 text-xs font-bold text-white transition-colors hover:bg-brand-purple sm:text-sm"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-xl bg-[linear-gradient(145deg,#07154d,#101e88,#2739e5)] p-5 text-white shadow-[0_10px_25px_rgba(20,45,150,0.15)] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100">
                  Stay Updated
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-tight">
                  Get the Latest Insights
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-blue-100 sm:text-base">
                  Join 25,000+ professionals and receive our latest blog
                  posts, guides, and industry updates in your inbox.
                </p>

                <form
                  onSubmit={handleNewsletter}
                  className="mt-5 space-y-2"
                >
                  <div className="relative">
                    <Icon
                      name="file"
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
                      className="h-11 w-full rounded-lg bg-white pl-9 pr-3 text-xs text-brand-dark outline-none placeholder:text-brand-text-muted sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/60 bg-brand-purple text-sm font-bold text-white transition-colors hover:bg-brand-purple-light"
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

              {/* Popular topics */}
              <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-[0_5px_18px_rgba(24,74,140,0.04)] sm:p-5">
                <div className="flex items-center gap-2">
                  <Icon
                    name="flame"
                    className="size-5 text-brand-orange"
                  />

                  <h3 className="text-lg font-bold text-brand-dark sm:text-xl">
                    Popular Topics
                  </h3>
                </div>

                <div className="mt-4 divide-y divide-blue-50">
                  {[
                    ["AI Automation", "42"],
                    ["AI Agents", "38"],
                    ["Digital Marketing", "36"],
                    ["Business Growth", "28"],
                    ["Tools & Integrations", "24"],
                    ["Industry Insights", "20"],
                    ["Tips & Tutorials", "18"],
                  ].map(([topic, count]) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() =>
                        changeCategory(topic)
                      }
                      className="flex w-full items-center justify-between gap-3 py-2 text-left text-sm text-brand-text transition-colors hover:text-brand-blue"
                    >
                      <span className="flex items-center gap-2">
                        <Icon
                          name="grid"
                          className="size-3.5"
                        />

                        {topic}
                      </span>

                      <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-brand-purple">
                        {count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending */}
              <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-[0_5px_18px_rgba(24,74,140,0.04)] sm:p-5">
                <div className="flex items-center gap-2">
                  <Icon
                    name="arrow-up"
                    className="size-5 text-emerald-500"
                  />

                  <h3 className="text-lg font-bold text-brand-dark sm:text-xl">
                    Trending This Week
                  </h3>
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    "10 AI Tools to Boost Productivity in 2024",
                    "How to Build an AI-Powered Sales Process",
                    "AI in Digital Marketing: Complete Guide",
                    "Real-World AI Use Cases for SMBs",
                    "The Future of Work: Humans + AI",
                  ].map((item, index) => (
                    <a
                      key={item}
                      href="#"
                      className="flex items-start gap-3 border-b border-blue-50 py-2.5 text-sm leading-snug text-brand-text transition-colors hover:text-brand-blue"
                    >
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-indigo-50 text-xs font-bold text-brand-purple">
                        {index + 1}
                      </span>

                      <span>{item}</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ====================================================
            CTA
        ===================================================== */}

        <section
          id="contact"
          className="relative isolate mx-1 mt-8 overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#07154d,#0c1772_55%,#2836e4)] px-5 py-8 text-center text-white sm:mx-3 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
            Turn Insights Into Action
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Ready to Build a Smarter Business with AI?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
            Get expert guidance, explore our resources, or talk to our team
            about your goals.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-brand-dark shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Book a Free Consultation

              <Icon
                name="arrow-right"
                className="size-4"
              />
            </a>

            <a
              href="#articles"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/60 bg-white/5 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Explore Our Resources
            </a>
          </div>

          {/* Handwriting */}
          <div className="absolute bottom-7 right-8 hidden rotate-[-8deg] font-hand text-2xl leading-[0.95] text-white md:block">
            Learn
            <br />
            Share
            <br />
            Grow
            <br />
            Together
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

      {/* ======================================================
          FOOTER
      ======================================================= */}

      <footer className="border-t border-blue-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-7 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Footer logo */}
            <div className="shrink-0">
              <a
                href="/"
                className="text-xl font-bold tracking-tight text-brand-dark sm:text-2xl"
              >
                <span className="text-brand-blue">AI</span>{" "}
                WorksForce
              </a>

              <p className="mt-1 text-xs text-brand-text-muted sm:text-sm">
                Automate. Accelerate. Grow.
              </p>
            </div>

            {/* Footer nav */}
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-xs transition-colors sm:text-sm ${
                    item === "Resources"
                      ? "font-semibold text-brand-dark"
                      : "font-medium text-brand-text hover:text-brand-blue"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                {
                  icon: "linkedin" as IconName,
                  label: "LinkedIn",
                },
                {
                  icon: "twitter" as IconName,
                  label: "Twitter",
                },
                {
                  icon: "youtube" as IconName,
                  label: "YouTube",
                },
                {
                  icon: "instagram" as IconName,
                  label: "Instagram",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-lg border border-blue-100 text-brand-dark transition-all hover:border-brand-blue hover:bg-blue-50 hover:text-brand-blue"
                >
                  <Icon
                    name={social.icon}
                    className="size-4"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 text-xs text-brand-text-muted sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <p>
              © 2024 AI WorksForce. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="/privacy-policy"
                className="transition-colors hover:text-brand-blue"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="transition-colors hover:text-brand-blue"
              >
                Terms of Service
              </a>

              <a
                href="/contact"
                className="transition-colors hover:text-brand-blue"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}