"use client";

import { useState, type ReactNode } from "react";

/* =========================================================
   TYPES
========================================================= */

type IconName =
  | "activity"
  | "cart"
  | "settings"
  | "home"
  | "file"
  | "graduation"
  | "plane"
  | "grid"
  | "users"
  | "message"
  | "target"
  | "chart"
  | "document"
  | "pen"
  | "search"
  | "arrow-up"
  | "arrow-right"
  | "dollar"
  | "lightning"
  | "clock"
  | "menu"
  | "close"
  | "play"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram";

/* =========================================================
   ICON
========================================================= */

function Icon({
  name,
  className = "size-6",
}: {
  name: IconName;
  className?: string;
}) {
  const icons: Record<IconName, ReactNode> = {
    activity: <path d="M3 12h4l2.2-7 4.2 14 2.2-7H21" />,

    cart: (
      <>
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
        <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" />
      </>
    ),

    settings: (
      <>
        <path d="M12 2.5 13.4 5l2.8.7.7 2.8 2.5 1.4-1.1 2.7 1.1 2.7-2.5 1.4-.7 2.8-2.8.7L12 22l-1.4-2.5-2.8-.7-.7-2.8-2.5-1.4 1.1-2.7-1.1-2.7 2.5-1.4.7-2.8 2.8-.7L12 2.5Z" />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ),

    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),

    file: (
      <>
        <path d="M6 3h8l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5M8 13h8M8 17h6" />
      </>
    ),

    graduation: (
      <>
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="M7 11.2V16c2.8 2.1 7.2 2.1 10 0v-4.8" />
        <path d="M21 9v6" />
      </>
    ),

    plane: (
      <>
        <path d="m3 11 18-7-7 18-3-8-8-3Z" />
        <path d="m11 14 4-4" />
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

    users: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21v-2.2a7 7 0 0 1 14 0V21" />
        <path d="M5.5 7.5a3 3 0 0 0 0 5.5M18.5 7.5a3 3 0 0 1 0 5.5" />
      </>
    ),

    message: (
      <>
        <path d="M5 5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H11l-5 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path d="M8 10h8M8 14h5" />
      </>
    ),

    target: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
        <path d="m16.5 7.5 4-4M17 4h3.5v3.5" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V12M10 20V8M16 20V4M22 20H2" />
      </>
    ),

    document: (
      <>
        <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5M9 13h6M9 17h4" />
      </>
    ),

    pen: (
      <>
        <path d="m4 20 4.5-1 10-10a2.2 2.2 0 0 0-3-3l-10 10L4 20Z" />
        <path d="m13 7 4 4" />
      </>
    ),

    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </>
    ),

    "arrow-up": <path d="M5 19 19 5M8 5h11v11" />,

    "arrow-right": (
      <>
        <path d="M4 12h16M13 5l7 7-7 7" />
      </>
    ),

    dollar: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 8.5c-.7-.8-1.7-1.2-3-1.2-1.7 0-2.8.8-2.8 2 0 1.4 1.2 1.8 3 2.2 1.8.4 3.5.9 3.5 2.8 0 1.5-1.4 2.6-3.4 2.6-1.4 0-2.6-.5-3.4-1.4M12 5.5v13" />
      </>
    ),

    lightning: <path d="M13.2 2 5 13h6l-.8 9L19 10h-6l.2-8Z" />,

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),

    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),

    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
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
        <path d="M8 10v6M8 8v.1M12 16v-6M12 13c0-2 4-2.5 4 0v3" />
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

/* =========================================================
   ICON BUBBLE
========================================================= */

function IconBubble({
  icon,
  tone,
  size = "normal",
}: {
  icon: IconName;
  tone: string;
  size?: "small" | "normal" | "large";
}) {
  const wrapper =
    size === "small"
      ? "size-10"
      : size === "large"
        ? "size-14 sm:size-16"
        : "size-12 sm:size-14";

  const iconSize =
    size === "small"
      ? "size-5"
      : size === "large"
        ? "size-7 sm:size-8"
        : "size-6 sm:size-7";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${wrapper} ${tone}`}
    >
      <Icon name={icon} className={iconSize} />
    </span>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

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
    <div className="mx-auto max-w-[850px] text-center">
      <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-[10px]">
        {eyebrow}
      </p>

      <h2 className="mt-1.5 text-[25px] font-bold leading-[1.08] tracking-[-1px] text-brand-dark sm:text-[29px] lg:text-[31px]">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-[780px] text-[13px] leading-[1.5] text-brand-text sm:text-[14px]">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AIUseCasesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
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

  const industries = [
    {
      icon: "activity" as IconName,
      title: "Healthcare",
      text: "Streamline patient care, reduce admin work, and improve diagnostics with AI.",
      tone: "bg-sky-100 text-brand-sky",
    },
    {
      icon: "cart" as IconName,
      title: "Retail & E-commerce",
      text: "Personalize customer experiences, optimize inventory, and boost sales with AI.",
      tone: "bg-rose-100 text-rose-500",
    },
    {
      icon: "settings" as IconName,
      title: "Manufacturing",
      text: "Improve production efficiency, predictive maintenance, and quality control.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      icon: "home" as IconName,
      title: "Real Estate",
      text: "Automate lead generation, property analysis, and customer communication.",
      tone: "bg-emerald-100 text-emerald-500",
    },
    {
      icon: "file" as IconName,
      title: "Finance & Accounting",
      text: "Automate bookkeeping, fraud detection, and financial reporting.",
      tone: "bg-emerald-100 text-emerald-500",
    },
    {
      icon: "graduation" as IconName,
      title: "Education",
      text: "Personalize learning experiences and automate administrative tasks.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      icon: "plane" as IconName,
      title: "Travel & Hospitality",
      text: "Enhance customer service and streamline bookings with AI.",
      tone: "bg-sky-100 text-brand-sky",
    },
    {
      icon: "grid" as IconName,
      title: "Technology & SaaS",
      text: "Accelerate development, improve support, and unlock new possibilities with AI.",
      tone: "bg-violet-100 text-brand-purple",
    },
  ];

  const popularCases = [
    ["message", "Customer Support Automation", "bg-sky-100 text-brand-sky"],
    ["target", "Lead Generation & Outreach", "bg-rose-100 text-rose-500"],
    ["chart", "Data Analysis & Reporting", "bg-emerald-100 text-emerald-500"],
    ["document", "Document Processing", "bg-violet-100 text-brand-purple"],
    ["users", "Sales Automation", "bg-indigo-100 text-brand-purple"],
    ["pen", "Content Generation", "bg-sky-100 text-brand-sky"],
    ["settings", "Process Automation", "bg-violet-100 text-brand-purple"],
    ["activity", "Predictive Analytics", "bg-emerald-100 text-emerald-500"],
  ] as const;

  const process = [
    {
      number: "01",
      icon: "search" as IconName,
      title: "Identify Challenges",
      text: "We analyze your business processes to find the best AI opportunities.",
      tone: "bg-indigo-100 text-brand-purple",
    },
    {
      number: "02",
      icon: "file" as IconName,
      title: "Design Solution",
      text: "We create a tailored AI strategy for your specific use case.",
      tone: "bg-emerald-100 text-emerald-500",
    },
    {
      number: "03",
      icon: "settings" as IconName,
      title: "Implement & Optimize",
      text: "We build, deploy, and fine-tune the solution with your team.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      number: "04",
      icon: "chart" as IconName,
      title: "Measure Results",
      text: "Track performance and achieve continuous growth.",
      tone: "bg-violet-100 text-brand-purple",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
   

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative isolate overflow-hidden rounded-b-[20px] bg-[linear-gradient(112deg,#fafbff_0%,#f5f7ff_48%,#f0efff_100%)]">
          <div className="absolute -top-[160px] -right-[100px] -z-10 size-[700px] rounded-full bg-[radial-gradient(circle,#b5acff85_0%,#d9dcff45_42%,transparent_70%)]" />

          <div className="mx-auto grid max-w-[1280px] lg:grid-cols-[1.03fr_0.97fr]">
            {/* Hero content */}
            <div className="relative z-20 px-6 pt-10 pb-7 sm:px-9 sm:pt-12 lg:px-8 lg:pt-14 xl:pl-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-[10px]">
                Real Problems. Real Solutions.
              </p>

              <h1 className="mt-2 text-[49px] font-bold leading-[0.93] tracking-[-2.5px] text-brand-dark sm:text-[60px] lg:text-[63px] xl:text-[66px]">
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-[#3020d8] bg-clip-text text-transparent">
                  AI Use Cases
                </span>
              </h1>

              <h2 className="mt-4 max-w-[590px] text-[18px] font-bold leading-[1.14] tracking-[-0.45px] text-brand-dark sm:text-[20px]">
                Discover how businesses are using AI to solve real challenges
                and drive measurable results.
              </h2>

              <p className="mt-3 max-w-[555px] text-[14px] leading-[1.52] text-brand-text sm:text-[15px]">
                Explore practical AI use cases across industries. See how AI
                automation, data intelligence, and AI agents help businesses
                save time, reduce costs, and grow faster.
              </p>

              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-6 text-[11px] font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.2)] transition hover:-translate-y-0.5 sm:text-[12px]"
                >
                  Book a Free Consultation
                  <Icon name="arrow-right" className="size-4" />
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#7774af] bg-white/60 px-6 text-[11px] font-bold text-brand-dark transition hover:bg-white sm:text-[12px]"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-violet-100 text-brand-purple">
                    <Icon name="play" className="size-2.5" />
                  </span>
                  See How It Works
                </a>
              </div>

              {/* Stats */}
              <div className="mt-7 grid max-w-[600px] grid-cols-3">
                {[
                  [
                    "chart",
                    "100+",
                    "Real Use Cases",
                    "bg-emerald-100 text-emerald-500",
                  ],
                  [
                    "users",
                    "25+",
                    "Industries Covered",
                    "bg-indigo-100 text-brand-purple",
                  ],
                  [
                    "lightning",
                    "3x",
                    "Average Productivity Gain",
                    "bg-violet-100 text-brand-purple",
                  ],
                ].map(([icon, value, label, tone], index) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 sm:gap-3 ${
                      index > 0
                        ? "border-l border-indigo-100 pl-3 sm:pl-4"
                        : ""
                    }`}
                  >
                    <IconBubble
                      icon={icon as IconName}
                      tone={tone}
                      size="small"
                    />

                    <div>
                      <p className="text-[23px] font-bold leading-none tracking-[-0.8px] text-brand-blue sm:text-[25px]">
                        {value}
                      </p>

                      <p className="mt-1 text-[9px] leading-[1.2] text-brand-text-muted sm:text-[10px]">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative min-h-[400px] sm:min-h-[440px] lg:min-h-[430px]">
              <div className="absolute top-[48px] left-1/2 size-[340px] -translate-x-1/2 rounded-full border-[20px] border-white/50 bg-[#b7afff]/15 sm:size-[370px]" />

              <div className="absolute top-[90px] left-1/2 size-[275px] -translate-x-1/2 rounded-full border-[18px] border-white/60" />

              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=90"
                alt="Business professional using AI solutions"
                className="absolute bottom-0 left-1/2 z-10 h-[80%] w-[46%] -translate-x-1/2 rounded-t-[100px] object-cover object-top shadow-[0_18px_45px_rgba(48,42,185,0.15)]"
              />

              {/* Left cards */}
              <div className="absolute top-8 left-0 z-20 hidden gap-3 sm:grid">
                {[
                  ["settings", "Automate", "Repetitive Work"],
                  ["users", "Improve", "Customer Experience"],
                  ["chart", "Make", "Smarter Decisions"],
                ].map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="flex w-[172px] items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_6px_22px_rgba(51,42,157,0.1)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-50 text-brand-purple">
                      <Icon name={icon as IconName} className="size-5" />
                    </span>

                    <div>
                      <p className="text-[11px] font-bold text-brand-dark">
                        {title}
                      </p>

                      <p className="text-[10px] leading-[1.25] text-brand-text">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right cards */}
              <div className="absolute top-8 right-0 z-20 hidden gap-3 sm:grid">
                {[
                  ["dollar", "Reduce", "Operational Costs"],
                  ["arrow-up", "Drive", "Business Growth"],
                ].map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="flex w-[178px] items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-[0_6px_22px_rgba(51,42,157,0.1)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-500">
                      <Icon name={icon as IconName} className="size-5" />
                    </span>

                    <div>
                      <p className="text-[11px] font-bold text-brand-dark">
                        {title}
                      </p>

                      <p className="text-[10px] leading-[1.25] text-brand-text">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute right-3 bottom-10 z-20 rotate-[-8deg] font-hand text-[21px] leading-[0.95] text-brand-blue">
                Real
                <br />
                Use Cases
                <br />
                Real Impact
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INDUSTRIES
        ====================================================== */}

        <section className="mx-auto max-w-[1280px] px-5 pt-8 sm:px-7 lg:px-8">
          <SectionHeading
            eyebrow="Explore Use Cases by Industry"
            title="AI Use Cases Across Every Industry"
            description="See how businesses like yours are using AI to solve real problems and achieve extraordinary results."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[156px] rounded-[13px] bg-[linear-gradient(135deg,#fafbff,#f7f8ff)] px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(24,74,140,0.08)]"
              >
                <IconBubble
                  icon={item.icon}
                  tone={item.tone}
                  size="small"
                />

                <h3 className="mt-3 pr-10 text-[13px] font-bold leading-[1.25] tracking-[-0.2px] text-brand-dark sm:text-[14px]">
                  {item.title}
                </h3>

                <p className="mt-1.5 max-w-[235px] pr-8 text-[12px] leading-[1.45] text-brand-text sm:text-[13px]">
                  {item.text}
                </p>

                <span className="absolute right-3 bottom-4 grid size-9 place-items-center rounded-full bg-white text-brand-blue shadow-[0_5px_15px_rgba(37,99,235,0.12)] transition group-hover:translate-x-1">
                  <Icon name="arrow-right" className="size-4" />
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            POPULAR USE CASES
        ====================================================== */}

        <section className="mx-auto max-w-[1280px] px-5 pt-8 sm:px-7 lg:px-8">
          <SectionHeading
            eyebrow="Popular AI Use Cases"
            title="Most Common AI Use Cases"
            description="Explore the top ways businesses are using AI today."
          />

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {popularCases.map(([icon, title, tone]) => (
              <article
                key={title}
                className="flex min-h-[118px] flex-col items-center justify-center rounded-lg bg-[linear-gradient(135deg,#fafbff,#f7f8ff)] px-2.5 py-4 text-center transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(24,74,140,0.07)]"
              >
                <IconBubble
                  icon={icon as IconName}
                  tone={tone}
                  size="small"
                />

                <h3 className="mt-2.5 text-[10px] font-bold leading-[1.3] text-brand-dark sm:text-[11px]">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section
          id="how-it-works"
          className="mx-auto max-w-[1280px] px-5 pt-8 sm:px-7 lg:px-8"
        >
          <div className="rounded-[14px] bg-[linear-gradient(135deg,#fafcff,#f5f7ff)] px-4 py-6 sm:px-6">
            <SectionHeading
              eyebrow="How It Works"
              title="From Challenge to Results"
              description="We identify opportunities, implement the right AI solutions, and deliver measurable impact."
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {process.map((item, index) => (
                <article
                  key={item.title}
                  className="relative rounded-xl bg-white/45 px-4 py-4 text-center"
                >
                  <IconBubble
                    icon={item.icon}
                    tone={item.tone}
                    size="small"
                  />

                  <p className="mt-2 text-[11px] font-bold text-brand-blue">
                    {item.number}
                  </p>

                  <h3 className="mt-0.5 text-[13px] font-bold leading-[1.25] text-brand-dark sm:text-[14px]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-1.5 max-w-[215px] text-[12px] leading-[1.45] text-brand-text sm:text-[13px]">
                    {item.text}
                  </p>

                  {index < process.length - 1 && (
                    <span className="absolute top-7 -right-4 hidden text-[30px] font-light text-brand-blue lg:block">
                      →
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            RESULTS + CASE STUDY
        ====================================================== */}

        <section className="mx-auto grid max-w-[1280px] gap-5 px-5 pt-8 sm:px-7 lg:grid-cols-[1fr_1.12fr] lg:px-8">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-[10px]">
              Real Use Cases. Real Results.
            </p>

            <h2 className="mt-1.5 text-[25px] font-bold leading-[1.08] tracking-[-1px] text-brand-dark sm:text-[29px] lg:text-[31px]">
              Businesses Are Achieving More with AI
            </h2>

            <p className="mt-2 max-w-[550px] text-[13px] leading-[1.5] text-brand-text sm:text-[14px]">
              See how our AI solutions are solving real-world challenges across
              industries.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {[
                [
                  "arrow-up",
                  "312%",
                  "Increase in Operational Efficiency",
                  "bg-emerald-100 text-emerald-500",
                ],
                [
                  "users",
                  "3x",
                  "Faster Time to Market",
                  "bg-violet-100 text-brand-purple",
                ],
                [
                  "clock",
                  "70%",
                  "Reduction in Manual Work",
                  "bg-orange-100 text-orange-500",
                ],
                [
                  "chart",
                  "5x",
                  "Higher Business Growth",
                  "bg-rose-100 text-rose-500",
                ],
              ].map(([icon, value, label, tone]) => (
                <div
                  key={label}
                  className="rounded-xl bg-[#fafbff] p-4 text-center"
                >
                  <IconBubble
                    icon={icon as IconName}
                    tone={tone}
                    size="small"
                  />

                  <p className="mt-2 text-[23px] font-bold leading-none tracking-[-0.8px] text-brand-dark">
                    {value}
                  </p>

                  <p className="mx-auto mt-1.5 max-w-[125px] text-[10px] leading-[1.3] text-brand-text">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <article className="rounded-[15px] bg-[#f8f9ff] p-5">
            <div className="grid gap-5 sm:grid-cols-[160px_1fr] sm:items-center">
              <div className="relative h-[170px] overflow-hidden rounded-xl bg-brand-navy">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=90"
                  alt="E-commerce business case study"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-brand-navy/20" />

                <span className="absolute top-4 left-3 max-w-[105px] text-[17px] font-bold leading-[0.95] text-white">
                  E-COMMERCE
                  <br />
                  GROWTH
                </span>

                <span className="absolute bottom-3 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-white text-white">
                  <Icon name="play" className="size-3.5" />
                </span>
              </div>

              <div>
                <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-purple">
                  Case Study
                </span>

                <h3 className="mt-2 text-[17px] font-bold leading-[1.15] tracking-[-0.3px] text-brand-dark sm:text-[19px]">
                  E-commerce Brand: 3x More Sales with AI Automation
                </h3>

                <p className="mt-2 text-[12px] leading-[1.45] text-brand-text sm:text-[13px]">
                  We helped a leading e-commerce brand automate customer
                  support, personalize product recommendations, and streamline
                  inventory management, resulting in 3x higher sales in 6
                  months.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  {[
                    ["3x", "Higher Sales"],
                    ["70%", "Lower Support Costs"],
                    ["312%", "Faster Response Time"],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <p className="text-[21px] font-bold leading-none text-brand-blue sm:text-[23px]">
                        {value}
                      </p>

                      <p className="mt-1 text-[9px] leading-[1.25] text-brand-text sm:text-[10px]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section
          id="contact"
          className="relative isolate mx-1 mt-8 overflow-hidden rounded-[14px] bg-[linear-gradient(110deg,#07154d,#0c1772_55%,#2836e4)] px-5 py-7 text-center text-white sm:mx-3 sm:py-8"
        >
          <div className="absolute inset-0 -z-10 opacity-30 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_12px,#7180ff_13px_14px)]" />

          <p className="text-[9px] font-bold uppercase tracking-[0.27em] text-blue-100 sm:text-[10px]">
            Ready to Explore Real AI Use Cases?
          </p>

          <h2 className="mt-2 text-[25px] font-semibold leading-[1.08] tracking-[-0.8px] sm:text-[29px] lg:text-[31px]">
            Let&apos;s Find the Right AI Solutions for Your Business
          </h2>

          <p className="mx-auto mt-2 max-w-[700px] text-[13px] leading-[1.5] text-blue-100 sm:text-[14px]">
            Get expert guidance on the most relevant AI use cases for your
            industry.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@aiworksforce.com"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-[11px] font-bold text-brand-dark transition hover:-translate-y-0.5 hover:bg-blue-50 sm:text-[12px]"
            >
              Book a Free Consultation
              <Icon name="arrow-right" className="size-4" />
            </a>

            <a
              href="/resources"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/60 px-6 text-[11px] font-bold text-white transition hover:bg-white/10 sm:text-[12px]"
            >
              Explore More Resources
            </a>
          </div>

          <div className="absolute right-8 bottom-6 hidden rotate-[-8deg] font-hand text-[21px] leading-[0.9] text-white md:block">
            Ideas
            <br />
            Use Cases
            <br />
            Real Impact
          </div>
        </section>
      </main>

   
    </div>
  );
}