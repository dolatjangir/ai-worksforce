"use client";

import { useMemo, useState, type ReactNode } from "react";

/* ============================================================
   TYPES
============================================================ */

type IconName =
  | "grid"
  | "info"
  | "settings"
  | "chip"
  | "database"
  | "tag"
  | "shield"
  | "headphones"
  | "chart"
  | "message"
  | "calendar"
  | "mail"
  | "video"
  | "book"
  | "users"
  | "search"
  | "lightbulb"
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "chevron-up"
  | "play"
  | "menu"
  | "close"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram"
  | "check"
  | "zap";

type FAQ = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

type FAQCategory = {
  name: string;
  icon: IconName;
  color: string;
};

/* ============================================================
   ICON
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

    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </>
    ),

    settings: (
      <>
        <path d="M12 2.5 14 5l3 .5.5 3 2.5 2-1.5 3 1.5 3-2.5 2-.5 3-3 .5-2 2.5-2-2.5-3-.5-.5-3-2.5-2 1.5-3-1.5-3 2.5-2 .5-3 3-.5 2-2.5Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),

    chip: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 2v5M15 2v5M9 17v5M15 17v5M2 9h5M2 15h5M17 9h5M17 15h5" />
      </>
    ),

    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </>
    ),

    tag: (
      <>
        <path d="M20 13 13 20l-9-9V4h7l9 9Z" />
        <circle cx="8" cy="8" r="1" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.3 8.3-8 10-4.7-1.7-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),

    headphones: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Z" />
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

    message: (
      <>
        <path d="M5 5h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H10l-5 3v-3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z" />
      </>
    ),

    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),

    video: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),

    book: (
      <>
        <path d="M4 5a3 3 0 0 1 3-2h5v17H7a3 3 0 0 0-3 3V5Z" />
        <path d="M20 5a3 3 0 0 0-3-2h-5v17h5a3 3 0 0 1 3 3V5Z" />
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

    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),

    lightbulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5a7 7 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
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

    "chevron-down": (
      <path d="m6 9 6 6 6-6" />
    ),

    "chevron-up": (
      <path d="m6 15 6-6 6 6" />
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

    check: (
      <path d="m5 12 4 4L19 6" />
    ),

    zap: (
      <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
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
  className?: string;
}) {
  return (
    <span
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full sm:size-11 ${
        className ?? "bg-indigo-100 text-brand-purple"
      }`}
    >
      <Icon
        name={icon}
        className="size-5 sm:size-6"
      />
    </span>
  );
}

/* ============================================================
   FAQ PAGE
============================================================ */

export default function FAQPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState("All FAQs");
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [search, setSearch] = useState("");
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
     CATEGORIES
  ========================================================== */

  const categories: FAQCategory[] = [
    {
      name: "All FAQs",
      icon: "grid",
      color: "bg-indigo-100 text-brand-purple",
    },
    {
      name: "General",
      icon: "info",
      color: "bg-blue-100 text-brand-blue",
    },
    {
      name: "Services",
      icon: "settings",
      color: "bg-indigo-100 text-brand-purple",
    },
    {
      name: "AI Technology",
      icon: "chip",
      color: "bg-violet-100 text-brand-purple",
    },
    {
      name: "Implementation",
      icon: "database",
      color: "bg-blue-100 text-brand-blue",
    },
    {
      name: "Pricing",
      icon: "tag",
      color: "bg-indigo-100 text-brand-purple",
    },
    {
      name: "Security",
      icon: "shield",
      color: "bg-blue-100 text-brand-blue",
    },
    {
      name: "Support",
      icon: "headphones",
      color: "bg-violet-100 text-brand-purple",
    },
    {
      name: "Business Impact",
      icon: "chart",
      color: "bg-indigo-100 text-brand-purple",
    },
  ];

  /* ==========================================================
     FAQ DATA
  ========================================================== */

  const faqs: FAQ[] = [
    {
      id: 1,
      category: "General",
      question: "What is AI WorksForce?",
      answer:
        "AI WorksForce is a leading AI automation company that helps businesses streamline operations, improve productivity, and drive growth using AI agents, automation, and intelligent workflows across sales, customer support, marketing, and more.",
    },
    {
      id: 2,
      category: "Services",
      question:
        "What services does AI WorksForce offer?",
      answer:
        "AI WorksForce provides AI automation, AI agents, customer operations automation, sales and outreach automation, lead generation, data intelligence, digital marketing automation, and tailored business AI solutions.",
    },
    {
      id: 3,
      category: "AI Technology",
      question:
        "How can AI automation benefit my business?",
      answer:
        "AI automation can reduce repetitive manual work, improve response times, increase operational consistency, help teams process more information, and create scalable workflows that support business growth.",
    },
    {
      id: 4,
      category: "General",
      question:
        "Which industries do you work with?",
      answer:
        "AI WorksForce can design solutions for a wide range of industries including healthcare, finance, real estate, retail, manufacturing, education, travel, hospitality, technology, SaaS, and professional services.",
    },
    {
      id: 5,
      category: "Implementation",
      question:
        "How long does it take to implement an AI solution?",
      answer:
        "Implementation time depends on the complexity of the workflow, integrations, data requirements, and business objectives. After understanding your requirements, the team can define an appropriate implementation roadmap.",
    },
    {
      id: 6,
      category: "Services",
      question:
        "Do you offer customized solutions?",
      answer:
        "Yes. AI WorksForce solutions can be tailored around your existing processes, systems, business goals, team workflows, and specific automation opportunities.",
    },
    {
      id: 7,
      category: "AI Technology",
      question:
        "What tools and technologies do you use?",
      answer:
        "Solutions can combine AI models, automation platforms, business applications, APIs, data systems, analytics, and other technologies selected according to the specific workflow and requirements.",
    },
    {
      id: 8,
      category: "Security",
      question:
        "Is my data secure with AI WorksForce?",
      answer:
        "Security and responsible handling of business data are considered during solution design and implementation. Specific security requirements can be reviewed as part of the project discovery process.",
    },
    {
      id: 9,
      category: "Pricing",
      question:
        "How is pricing structured?",
      answer:
        "Pricing depends on the scope of the solution, number of workflows, integrations, AI requirements, implementation complexity, and ongoing support needs. A customized proposal can be prepared after understanding your requirements.",
    },
    {
      id: 10,
      category: "General",
      question:
        "Can I get a demo before purchasing?",
      answer:
        "Yes. You can request a consultation or demo to discuss your business requirements, explore relevant AI use cases, and understand how an AI-powered solution could fit into your operations.",
    },
  ];

  /* ==========================================================
     FILTERED FAQS
  ========================================================== */

  const filteredFaqs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const categoryMatch =
        activeCategory === "All FAQs" ||
        faq.category === activeCategory;

      const searchMatch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  /* ==========================================================
     HANDLERS
  ========================================================== */

  function handleCategory(category: string) {
    setActiveCategory(category);
    setOpenFaq(null);
  }

  function handleSearch(value: string) {
    setSearch(value);
    setOpenFaq(null);
  }

  function handleNewsletter(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!email.trim()) return;

    setEmail("");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">


      <main>
        {/* ====================================================
            HERO
        ===================================================== */}

        <section className="relative isolate overflow-hidden rounded-b-[1.25rem] bg-[linear-gradient(110deg,#fafbff_0%,#f7f8ff_45%,#eeefff_100%)]">
          <div className="pointer-events-none absolute -right-40 -top-40 -z-10 size-128 rounded-full bg-[radial-gradient(circle,#b9b2ff70_0%,transparent_70%)] blur-2xl" />

          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_0.95fr]">
            {/* Hero text */}
            <div className="relative z-20 px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14 xl:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                Questions. Answers. Clarity.
              </p>

              <h1 className="mt-3 max-w-3xl text-5xl font-bold leading-[0.94] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-text sm:text-lg lg:text-xl">
                Find quick answers to the most common questions about AI
                WorksForce, our services, implementation process, pricing,
                and more.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#faq"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.2)] transition-all hover:-translate-y-0.5 sm:px-6"
                >
                  Ask a Question

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

                  Watch FAQs Video
                </a>
              </div>

              {/* Hero stats */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
                <div className="flex items-center gap-3">
                  <IconBubble className="bg-emerald-50 text-emerald-500" icon="message" />

                  <div>
                    <p className="text-2xl font-bold leading-none tracking-tight text-brand-blue sm:text-3xl">
                      100+
                    </p>

                    <p className="mt-1 text-xs text-brand-text-muted sm:text-sm">
                      Common Questions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-l border-indigo-100 pl-4">
                  <IconBubble className="bg-indigo-100 text-brand-purple" icon="users" />

                  <div>
                    <p className="text-2xl font-bold leading-none tracking-tight text-brand-blue sm:text-3xl">
                      25K+
                    </p>

                    <p className="mt-1 text-xs text-brand-text-muted sm:text-sm">
                      Happy Customers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-l border-indigo-100 pl-4">
                  <IconBubble className="bg-violet-100 text-brand-purple" icon="zap" />

                  <div>
                    <p className="text-2xl font-bold leading-none tracking-tight text-brand-blue sm:text-3xl">
                      &lt; 24h
                    </p>

                    <p className="mt-1 text-xs text-brand-text-muted sm:text-sm">
                      Average Response Time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative min-h-[25rem] sm:min-h-[30rem] lg:min-h-0">
              <div className="absolute left-1/2 top-10 size-80 -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl sm:size-128" />

              {/* Robot */}
              <div className="absolute bottom-0 left-1/2 z-10 w-64 -translate-x-1/2 sm:w-80 lg:w-96">
                <div className="relative mx-auto flex aspect-[0.78] items-end justify-center">
                  {/* Head */}
                  <div className="absolute left-1/2 top-[7%] h-32 w-48 -translate-x-1/2 rounded-[2.5rem] border-4 border-slate-200 bg-gradient-to-br from-white via-slate-100 to-slate-300 shadow-[0_18px_35px_rgba(15,30,80,0.15)] sm:h-40 sm:w-60">
                    <div className="absolute inset-5 rounded-[2rem] bg-slate-900 shadow-inner">
                      <div className="flex h-full items-center justify-center gap-8">
                        <span className="size-4 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)] sm:size-5" />
                        <span className="size-4 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)] sm:size-5" />
                      </div>

                      <div className="absolute bottom-5 left-1/2 h-5 w-14 -translate-x-1/2 rounded-b-full border-b-2 border-cyan-300 sm:w-16" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="relative z-10 h-52 w-48 rounded-[5rem_5rem_2rem_2rem] border-4 border-slate-200 bg-gradient-to-br from-white to-slate-200 shadow-[0_18px_40px_rgba(15,30,80,0.14)] sm:h-64 sm:w-60">
                    <div className="absolute left-1/2 top-14 -translate-x-1/2 text-4xl font-bold text-brand-blue sm:text-5xl">
                      AI
                    </div>
                  </div>

                  {/* Left arm */}
                  <div className="absolute bottom-24 left-0 z-20 h-32 w-12 rotate-[25deg] rounded-full bg-gradient-to-b from-slate-100 to-slate-300 shadow-lg sm:h-40 sm:w-14" />

                  {/* Right arm */}
                  <div className="absolute bottom-20 right-0 z-20 h-32 w-12 rotate-[-20deg] rounded-full bg-gradient-to-b from-slate-100 to-slate-300 shadow-lg sm:h-40 sm:w-14" />
                </div>
              </div>

              {/* Top right benefit card */}
              <div className="absolute right-0 top-5 z-30 hidden w-44 rounded-xl bg-white/95 p-4 shadow-[0_8px_25px_rgba(51,42,157,0.1)] sm:block lg:w-48">
                <div className="space-y-2.5">
                  {[
                    "Clear Answers",
                    "Expert Support",
                    "Helpful Resources",
                    "Always Here for You",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-brand-dark sm:text-sm"
                    >
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-500">
                        <Icon
                          name="check"
                          className="size-3"
                        />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Question speech bubble */}
              <div className="absolute left-2 top-7 z-30 hidden rotate-[-7deg] rounded-xl bg-white px-5 py-4 text-center font-hand text-2xl leading-none text-brand-blue shadow-[0_8px_25px_rgba(51,42,157,0.1)] md:block">
                Got Questions?
                <br />
                We've Got Answers!
              </div>

              {/* Arrow */}
              <svg
                className="absolute left-16 top-28 z-30 hidden h-20 w-24 text-brand-blue md:block"
                viewBox="0 0 90 80"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M70 8C56 22 58 39 41 49 30 56 19 57 7 55"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="m12 47-7 8 11 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Handwritten message */}
              <div className="absolute right-0 top-52 z-30 hidden rotate-[-7deg] font-hand text-2xl leading-[0.95] text-brand-blue md:block">
                Your
                <br />
                AI Partner
                <br />
                for a Smarter
                <br />
                Tomorrow
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            CATEGORY NAVIGATION
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-7 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
            Browse FAQs by Category
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
            {categories.map((category) => {
              const active =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    handleCategory(category.name)
                  }
                  className={`group flex min-h-20 flex-col items-center justify-center rounded-xl px-2 py-3 text-center transition-all sm:min-h-24 ${
                    active
                      ? "bg-gradient-to-b from-brand-blue to-brand-purple text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)]"
                      : "bg-blue-50/60 text-brand-dark hover:-translate-y-0.5 hover:bg-blue-50"
                  }`}
                >
                  <span
                    className={`grid size-9 place-items-center rounded-full sm:size-10 ${
                      active
                        ? "bg-white/15 text-white"
                        : category.color
                    }`}
                  >
                    <Icon
                      name={category.icon}
                      className="size-5"
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
            FAQ CONTENT
        ===================================================== */}

        <section
          id="faq"
          className="mx-auto max-w-7xl px-5 pt-8 sm:px-7 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)] xl:grid-cols-[18rem_minmax(0,1fr)]">
            {/* ==================================================
                LEFT SUPPORT PANEL
            =================================================== */}

            <aside className="relative overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#f7faff,#eef4ff)] p-5 sm:p-6">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-dark sm:text-3xl">
                Still Have Questions?
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-brand-text sm:text-base">
                Can't find the answer you're looking for? Our team is here
                to help. Get in touch and we'll be happy to assist you.
              </p>

              {/* Support cards */}
              <div className="relative z-10 mt-5 space-y-2.5">
                <a
                  href="#contact"
                  className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-[0_5px_18px_rgba(24,74,140,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <IconBubble
                    icon="calendar"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold text-brand-dark sm:text-base">
                      Book a Free Consultation
                    </p>

                    <p className="mt-0.5 text-xs text-brand-text-muted sm:text-sm">
                      Talk to our AI experts
                    </p>
                  </div>
                </a>

                <a
                  href="#contact"
                  className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-[0_5px_18px_rgba(24,74,140,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <IconBubble
                    icon="headphones"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold text-brand-dark sm:text-base">
                      Contact Support
                    </p>

                    <p className="mt-0.5 text-xs text-brand-text-muted sm:text-sm">
                      Get help from our team
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@aiworksforce.com"
                  className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-[0_5px_18px_rgba(24,74,140,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <IconBubble
                    icon="mail"
                    className="bg-violet-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold text-brand-dark sm:text-base">
                      Email Us
                    </p>

                    <p className="mt-0.5 text-xs text-brand-text-muted sm:text-sm">
                      hello@aiworksforce.com
                    </p>
                  </div>
                </a>

                <a
                  href="#contact"
                  className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-[0_5px_18px_rgba(24,74,140,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <IconBubble
                    icon="message"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold text-brand-dark sm:text-base">
                      Live Chat
                    </p>

                    <p className="mt-0.5 text-xs text-brand-text-muted sm:text-sm">
                      Chat with us now
                    </p>
                  </div>
                </a>
              </div>

              {/* Support person */}
              <div className="relative mt-7 h-60 overflow-hidden sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=90"
                  alt="AI WorksForce support specialist"
                  className="absolute bottom-[-1rem] left-1/2 h-full w-full -translate-x-1/2 object-cover object-top mix-blend-multiply"
                />

                <div className="absolute right-0 top-5 z-20 rotate-[-7deg] font-hand text-xl leading-[0.95] text-brand-blue sm:text-2xl">
                  Real People
                  <br />
                  Real Support
                  <br />
                  Real Solutions
                </div>

                <svg
                  className="absolute right-10 top-24 z-20 h-16 w-20 text-brand-blue"
                  viewBox="0 0 80 60"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M70 8C55 16 49 33 12 42"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="m18 35-8 7 10 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </aside>

            {/* ==================================================
                RIGHT FAQ LIST
            =================================================== */}

            <div>
              {/* Heading and search */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-dark sm:text-3xl">
                    Frequently Asked Questions
                  </h2>

                  <p className="mt-1 text-sm leading-relaxed text-brand-text sm:text-base">
                    Find answers to common questions about AI WorksForce and
                    how we help businesses grow.
                  </p>
                </div>

                <div className="relative w-full sm:w-52 lg:w-56">
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
                    placeholder="Search FAQs..."
                    className="h-11 w-full rounded-lg border border-blue-100 bg-white pl-9 pr-3 text-sm text-brand-dark outline-none transition-colors placeholder:text-brand-text-muted focus:border-brand-blue"
                  />
                </div>
              </div>

              {/* FAQ list */}
              <div className="mt-5 space-y-2">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openFaq === faq.id;

                  return (
                    <div
                      key={faq.id}
                      className={`overflow-hidden rounded-lg border transition-all duration-200 ${
                        isOpen
                          ? "border-blue-100 bg-white shadow-[0_6px_20px_rgba(24,74,140,0.05)]"
                          : "border-transparent bg-blue-50/55"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(
                            isOpen ? null : faq.id,
                          )
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center gap-3 px-4 py-3 text-left sm:px-5 sm:py-3.5"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-indigo-100 text-xs font-bold text-brand-blue sm:size-10 sm:text-sm">
                          {String(index + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <span className="min-w-0 flex-1 text-sm font-bold leading-snug text-brand-dark sm:text-base lg:text-lg">
                          {faq.question}
                        </span>

                        <span className="grid size-7 shrink-0 place-items-center text-brand-blue">
                          <Icon
                            name={
                              isOpen
                                ? "chevron-up"
                                : "chevron-down"
                            }
                            className="size-5"
                          />
                        </span>
                      </button>

                      {isOpen && (
                        <div className="border-t border-blue-50 px-4 pb-5 pl-16 pt-3 sm:px-5 sm:pb-5 sm:pl-20">
                          <p className="max-w-3xl text-sm leading-relaxed text-brand-text sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Empty state */}
              {filteredFaqs.length === 0 && (
                <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/50 px-5 py-12 text-center">
                  <div className="mx-auto grid size-14 place-items-center rounded-full bg-white text-brand-blue shadow-sm">
                    <Icon
                      name="search"
                      className="size-6"
                    />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-brand-dark">
                    No FAQs found
                  </h3>

                  <p className="mt-2 text-sm text-brand-text sm:text-base">
                    Try another search term or FAQ category.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All FAQs");
                      setOpenFaq(1);
                    }}
                    className="mt-4 text-sm font-bold text-brand-blue hover:text-brand-purple"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* Bottom resource cards */}
              <div className="mt-6 grid gap-3 rounded-xl bg-blue-50/55 p-4 sm:grid-cols-3 sm:p-5">
                <a
                  href="#"
                  className="flex items-center gap-3 border-b border-blue-100 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4"
                >
                  <IconBubble
                    icon="book"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold text-brand-dark sm:text-base">
                      Knowledge Base
                    </p>

                    <p className="mt-0.5 text-xs text-brand-text-muted sm:text-sm">
                      Explore guides and resources
                    </p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 border-b border-blue-100 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4"
                >
                  <IconBubble
                    icon="video"
                    className="bg-violet-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold text-brand-dark sm:text-base">
                      Video Tutorials
                    </p>

                    <p className="mt-0.5 text-xs text-brand-text-muted sm:text-sm">
                      Step-by-step instructions
                    </p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3"
                >
                  <IconBubble
                    icon="message"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <p className="text-sm font-bold text-brand-dark sm:text-base">
                      Community
                    </p>

                    <p className="mt-0.5 text-xs text-brand-text-muted sm:text-sm">
                      Join the conversation
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            CTA
        ===================================================== */}

        <section
          id="contact"
          className="relative isolate mx-1 mt-8 overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#07154d,#0c1772_55%,#2836e4)] px-5 py-8 text-center text-white sm:mx-3 sm:px-8 sm:py-10"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
            Still Need Help?
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Let&apos;s Find the Right Solution for You
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
            Talk to our experts and get personalized answers to your
            questions.
            <br className="hidden sm:block" />
            We&apos;re here to help you succeed with AI.
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
              href="#"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/60 bg-white/5 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Contact Our Team
            </a>
          </div>

          <div className="absolute bottom-7 right-8 hidden rotate-[-8deg] font-hand text-2xl leading-[0.95] text-white md:block">
            Questions
            <br />
            Today
            <br />
            A Smarter
            <br />
            Tomorrow
          </div>

          <svg
            className="absolute bottom-4 right-8 hidden h-14 w-20 text-white md:block"
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