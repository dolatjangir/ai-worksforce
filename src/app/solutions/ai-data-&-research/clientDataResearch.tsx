"use client";

import SolutionsHero from "@/components/solutions-hero/reusable-hero";
import PageHero from "@/components/solutions-hero/reusable-hero";
import React, { useEffect, useRef, useState } from "react";

/* ============================================================
   ICONS
============================================================ */

type IconName =
  | "research"
  | "chart"
  | "target"
  | "database"
  | "search"
  | "file"
  | "users"
  | "settings"
  | "rocket"
  | "home"
  | "cart"
  | "health"
  | "finance"
  | "education"
  | "grid"
  | "arrow"
  | "check"
  | "play"
  | "menu"
  | "close"
  | "insight"
  | "strategy"
  | "growth"
  | "opportunity";

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "research":
      return (
        <svg {...common}>
          <path d="M4 19V9" />
          <path d="M10 19V5" />
          <path d="M16 19v-7" />
          <path d="M22 19V3" />
          <path d="M3 21h20" />
        </svg>
      );

    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="m7 16 4-5 3 3 5-7" />
        </svg>
      );

    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
        </svg>
      );

    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 5 5" />
        </svg>
      );

    case "file":
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 17h5M9 9h1" />
        </svg>
      );

    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.56-1.03H6v-2.4h.84A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.67 5.2V5h2.4v.2a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.03h.84v2.4h-.84A1.7 1.7 0 0 0 19.4 15Z" />
        </svg>
      );

    case "rocket":
      return (
        <svg {...common}>
          <path d="M14 4c2-2 5-2 6-2 0 1 0 4-2 6l-5 5-4-4 5-5Z" />
          <path d="m9 9-4 1-3 3 5 1" />
          <path d="m15 15-1 4-3 3-1-5" />
          <circle cx="16" cy="8" r="1" />
        </svg>
      );

    case "home":
      return (
        <svg {...common}>
          <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" />
          <path d="M9 21v-7h6v7" />
        </svg>
      );

    case "cart":
      return (
        <svg {...common}>
          <path d="M3 4h2l2.5 11h9L20 7H6" />
          <circle cx="9" cy="19" r="1.5" />
          <circle cx="17" cy="19" r="1.5" />
        </svg>
      );

    case "health":
      return (
        <svg {...common}>
          <path d="M20 8c0 5-8 11-8 11S4 13 4 8a4 4 0 0 1 7-2 4 4 0 0 1 9 2Z" />
          <path d="M8 10h3l1-3 2 6 1-3h2" />
        </svg>
      );

    case "finance":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V9h4v12M15 21V5h4v16" />
          <path d="m3 9 9-6 9 6" />
        </svg>
      );

    case "education":
      return (
        <svg {...common}>
          <path d="m2 9 10-5 10 5-10 5L2 9Z" />
          <path d="M6 11v5c0 2 2.7 3 6 3s6-1 6-3v-5" />
          <path d="M22 9v6" />
        </svg>
      );

    case "grid":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );

    case "insight":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m8 14 3-3 2 2 3-4" />
        </svg>
      );

    case "strategy":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m12 7 2 5-2 2-2-2 2-5Z" />
        </svg>
      );

    case "growth":
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 4-4 3 2 5-7" />
          <path d="M15 6h4v4" />
        </svg>
      );

    case "opportunity":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m12 7 1.8 3.7L18 12l-4.2 1.3L12 17l-1.8-3.7L6 12l4.2-1.3L12 7Z" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" strokeWidth="3" />
        </svg>
      );

    case "play":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <path d="m8 5 11 7-11 7V5Z" />
        </svg>
      );

    case "menu":
      return (
        <svg {...common}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );

    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );

    default:
      return null;
  }
}

/* ============================================================
   REVEAL ANIMATION
============================================================ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   LOGO
============================================================ */

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0876ed] text-[10px] font-extrabold text-white shadow-md">
        AW
      </div>

      <div className="leading-none">
        <div className="text-[17px] font-extrabold tracking-[-0.05em] text-[#06235a]">
          AI<span className="text-[#0876ed]">WorksForce</span>
        </div>

        <div className="mt-0.5 text-[7px] font-semibold text-slate-400">
          AI Agents. AI Operations. Real Results.
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function AIDataResearchPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const features = [
    {
      icon: "database" as IconName,
      title: "Market Research",
      desc: "Identify trends, opportunities and customer needs with AI-powered analysis.",
      bg: "bg-blue-50",
      color: "text-[#0876ed]",
    },
    {
      icon: "search" as IconName,
      title: "Competitive Analysis",
      desc: "Monitor your competitors and find strategic advantages.",
      bg: "bg-emerald-50",
      color: "text-emerald-500",
    },
    {
      icon: "file" as IconName,
      title: "Custom Reports",
      desc: "Get tailored, data-backed reports for smarter decision-making.",
      bg: "bg-violet-50",
      color: "text-violet-500",
    },
    {
      icon: "target" as IconName,
      title: "Opportunity Discovery",
      desc: "Uncover new markets, segments and growth opportunities.",
      bg: "bg-orange-50",
      color: "text-orange-500",
    },
  ];

  const steps = [
    {
      number: "1",
      icon: "research" as IconName,
      title: "Understand Your Goals",
      desc: "We learn about your business, industry and research needs.",
      bg: "bg-[#0876ed]",
    },
    {
      number: "2",
      icon: "database" as IconName,
      title: "Collect & Analyze Data",
      desc: "Our AI gathers and analyzes relevant data from trusted sources.",
      bg: "bg-violet-500",
    },
    {
      number: "3",
      icon: "insight" as IconName,
      title: "Generate Insights",
      desc: "We transform raw data into clear, actionable insights.",
      bg: "bg-emerald-500",
    },
    {
      number: "4",
      icon: "chart" as IconName,
      title: "Deliver Results",
      desc: "You get a detailed report with recommendations to drive growth.",
      bg: "bg-orange-500",
    },
  ];

  const industries = [
    {
      title: "Startups",
      icon: "rocket" as IconName,
      desc: "Validate ideas, analyze markets, and find product-market fit.",
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Real Estate",
      icon: "home" as IconName,
      desc: "Market analysis, property trends, and location intelligence.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "E-commerce",
      icon: "cart" as IconName,
      desc: "Customer insights, competitor tracking, and product demand analysis.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Healthcare",
      icon: "health" as IconName,
      desc: "Research on patient needs, market trends, and innovation opportunities.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Finance",
      icon: "finance" as IconName,
      desc: "Industry research, risk analysis, and investment insights.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "And More",
      icon: "grid" as IconName,
      desc: "Custom research solutions for your unique industry needs.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-600">
    

      {/* ======================================================
          HERO
      ====================================================== */}

<SolutionsHero
  badge="AI DATA & RESEARCH"
  title="Turn Data Into"
  highlightedTitle="Real Opportunities."
  description="Get accurate insights, in-depth research, and actionable intelligence with AI-powered data & research solutions. We help you discover trends, validate ideas, and make smarter, faster decisions."
  imageSrc="/solutions/ai-automation.png"
  imageAlt="AI Data & Research workspace and data intelligence"
  assessmentLabel="Get a Free Data Assessment"
  assessmentHref="#contact"
  videoHref="#how-it-works"
/>

      {/* ======================================================
          TRUSTED
      ====================================================== */}

      <section className="border-y border-slate-100 bg-white py-6">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <p className="mb-5 text-center text-[9px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
            Trusted by Growing Businesses
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 sm:gap-x-12">
            {[
              "stripe",
              "shopify",
              "HubSpot",
              "slack",
              "Microsoft",
              "Google",
              "amazon",
              "_zapier",
            ].map((brand) => (
              <span
                key={brand}
                className="text-lg font-extrabold tracking-tight text-slate-400 sm:text-xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT WE DO
      ====================================================== */}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0876ed]">
              What We Do
            </p>

            <h2 className="mt-3 text-[29px] font-extrabold tracking-tight text-[#06235a] sm:text-4xl">
              AI-Powered Research. Real Business Impact.
            </h2>

            <p className="mt-3 text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
              From market research to competitive analysis, our AI-driven data
              & research solutions help you unlock valuable insights and stay
              ahead in a fast-changing world.
            </p>
          </Reveal>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 80}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(24,74,140,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(24,74,140,0.12)]">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} ${feature.color}`}
                  >
                    <Icon name={feature.icon} size={24} />
                  </span>

                  <h3 className="mt-5 text-[15px] font-extrabold text-[#06235a]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          TRANSFORMING DATA
      ====================================================== */}

      <section className="bg-white pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-9 px-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8">
          {/* DATA VISUAL */}

          <Reveal>
            <div className="relative h-[330px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#061d48] via-[#06235a] to-[#020b1d] shadow-2xl sm:h-[365px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,118,237,.3),transparent_62%)]" />

              {/* globe */}

              <div className="absolute left-1/2 top-[57%] h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 shadow-[0_0_60px_rgba(8,118,237,.3)]">
                <div className="absolute inset-[18px] rounded-full border border-cyan-300/20" />

                <div className="absolute inset-[43px] rounded-full border border-cyan-300/20" />

                <div className="absolute left-1/2 top-0 h-full w-px bg-cyan-300/15" />

                <div className="absolute left-0 top-1/2 h-px w-full bg-cyan-300/15" />

                {/* dots */}

                {[
                  "left-[28%] top-[32%]",
                  "left-[58%] top-[22%]",
                  "left-[67%] top-[52%]",
                  "left-[42%] top-[66%]",
                  "left-[25%] top-[57%]",
                  "left-[72%] top-[72%]",
                ].map((position, i) => (
                  <span
                    key={i}
                    className={`absolute ${position} h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.9)]`}
                  />
                ))}
              </div>

              {/* search bar */}

              <div className="absolute left-1/2 top-10 flex w-[60%] -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-xl">
                <Icon name="search" size={15} className="text-[#0876ed]" />
                <span className="text-[10px] font-medium text-slate-500">
                  Discover what&apos;s possible with your data...
                </span>
              </div>

              {/* orbit cards */}

              <div className="absolute left-[7%] top-[45%] flex flex-col items-center gap-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-[#0876ed]/20 text-cyan-300">
                  <Icon name="chart" size={21} />
                </span>
                <span className="rounded-md bg-black/25 px-2 py-1 text-[8px] font-bold text-white">
                  Market Trends
                </span>
              </div>

              <div className="absolute right-[7%] top-[45%] flex flex-col items-center gap-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-[#0876ed]/20 text-cyan-300">
                  <Icon name="users" size={21} />
                </span>
                <span className="rounded-md bg-black/25 px-2 py-1 text-[8px] font-bold text-white">
                  Customer Insights
                </span>
              </div>

              <div className="absolute bottom-[8%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-[#0876ed]/20 text-cyan-300">
                  <Icon name="chart" size={21} />
                </span>
                <span className="rounded-md bg-black/25 px-2 py-1 text-[8px] font-bold text-white">
                  Industry Analysis
                </span>
              </div>
            </div>
          </Reveal>

          {/* COPY */}

          <Reveal delay={120}>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0876ed]">
              Why It Matters
            </p>

            <h2 className="mt-3 max-w-[470px] text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#06235a] sm:text-4xl">
              Transforming Data Into
              <br />
              Business Growth
            </h2>

            <p className="mt-5 max-w-[510px] text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
              We combine advanced AI models, real-world data, and human
              expertise to deliver insights that matter. Whether you&apos;re
              exploring a new market, launching a product, or optimizing
              operations — we give you the clarity to move forward with
              confidence.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Accurate & reliable data insights",
                "Customized research for your business",
                "Faster turnaround with AI automation",
                "Actionable recommendations, not just reports",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0876ed] text-white">
                    <Icon name="check" size={11} />
                  </span>

                  <span className="text-[13.5px] font-medium text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0876ed] px-6 py-3.5 text-[13px] font-extrabold text-white shadow-lg shadow-blue-500/25"
            >
              Talk to Our Experts
              <Icon name="arrow" size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ======================================================
          HOW IT WORKS
      ====================================================== */}

      <section
        id="how-it-works"
        className="py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(180deg,#eef8ff 0%,#f8fbff 55%,#ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0876ed]">
              How It Works
            </p>

            <h2 className="mt-3 text-[29px] font-extrabold tracking-tight text-[#06235a] sm:text-4xl">
              From Data to Decisions in 4 Simple Steps
            </h2>

            <p className="mt-3 text-[14px] text-slate-500 sm:text-[15px]">
              We make research simple, fast, and actionable.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <div className="relative flex flex-col items-center text-center">
                  {index < 3 && (
                    <span className="absolute left-[calc(50%+52px)] top-8 hidden text-[#0876ed]/60 lg:block">
                      <Icon name="arrow" size={21} />
                    </span>
                  )}

                  <div className="relative">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl ${step.bg}`}
                    >
                      <Icon name={step.icon} size={23} />
                    </div>

                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-extrabold text-slate-700 shadow-md">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-[200px] text-[15px] font-extrabold leading-snug text-[#06235a]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[220px] text-[12px] leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          USE CASES
      ====================================================== */}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0876ed]">
              Use Cases
            </p>

            <h2 className="mt-3 text-[29px] font-extrabold tracking-tight text-[#06235a] sm:text-4xl">
              Research Solutions for Every Business
            </h2>

            <p className="mt-3 text-[14px] text-slate-500 sm:text-[15px]">
              No matter your industry, our AI data & research solutions help
              you move faster and make better decisions.
            </p>
          </Reveal>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 60}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(24,74,140,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(24,74,140,0.12)]">
                  <div className="relative h-[106px] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06235a]/50 to-transparent" />

                    <span className="absolute bottom-0 left-4 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded-xl bg-[#0876ed] text-white shadow-lg">
                      <Icon name={industry.icon} size={18} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-4 pb-5 pt-8">
                    <h3 className="text-[14px] font-extrabold text-[#06235a]">
                      {industry.title}
                    </h3>

                    <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-slate-500">
                      {industry.desc}
                    </p>

                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0876ed]"
                    >
                      {industry.title === "And More"
                        ? "Let's Talk"
                        : "Learn More"}

                      <Icon name="arrow" size={12} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          STATISTICS STRIP
      ====================================================== */}

      <section className="bg-gradient-to-r from-[#05245b] via-[#063273] to-[#05245b] py-7">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
          {[
            ["500+", "Research Projects Delivered", "users"],
            ["95%", "Client Satisfaction", "settings"],
            ["3x", "Faster Insights", "growth"],
            ["10+", "Industries Served", "opportunity"],
          ].map(([value, label, icon], index) => (
            <div
              key={label}
              className={`flex items-center gap-3 px-4 py-3 ${
                index !== 0
                  ? "border-l border-white/10"
                  : ""
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-[#0876ed]/15 text-cyan-300">
                <Icon name={icon as IconName} size={20} />
              </span>

              <div>
                <div className="text-[22px] font-extrabold text-white">
                  {value}
                </div>

                <div className="text-[9px] font-medium text-slate-300 sm:text-[10px]">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================
          CLIENT SUCCESS
      ====================================================== */}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.15fr] lg:gap-16 lg:px-8">
          <Reveal>
            <span className="inline-flex rounded-full border border-[#0876ed]/20 bg-blue-50 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#0876ed]">
              Client Success
            </span>

            <h2 className="mt-4 max-w-[450px] text-[30px] font-extrabold leading-tight tracking-tight text-[#06235a] sm:text-4xl">
              Trusted by Businesses
              <br />
              That Value Insights
            </h2>

            <p className="mt-5 max-w-[440px] text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
              See how our AI data & research solutions have helped companies
              make smarter decisions and achieve real results.
            </p>

            <div className="mt-7 flex gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm">
                ←
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm">
                →
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_18px_50px_rgba(24,74,140,0.10)] sm:p-9">
              <div className="absolute -top-4 left-7 text-[70px] font-serif font-extrabold leading-none text-[#0876ed]/15">
                “
              </div>

              <p className="relative text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                <strong className="font-extrabold text-[#06235a]">
                  AIWorksForce helped us uncover market opportunities
                </strong>{" "}
                we hadn&apos;t seen before. Their research insights were
                accurate, actionable, and delivered quickly. It gave us the
                confidence to expand into a new market.
              </p>

              <div className="mt-7 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#0876ed] to-cyan-400 text-[11px] font-extrabold text-white">
                    PS
                  </div>

                  <div>
                    <div className="text-[13px] font-extrabold text-[#06235a]">
                      Priya Sharma
                    </div>

                    <div className="text-[10px] text-slate-500">
                      CEO, GrowthPath Ventures
                    </div>
                  </div>
                </div>

                <div className="text-[17px] tracking-[2px] text-orange-400">
                  ★★★★★
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#031d4c]"
      >
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#0876ed]/20 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          {/* COPY */}

          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-cyan-300">
              Ready to Unlock the Power of Your Data?
            </p>

            <h2 className="mt-4 max-w-[570px] text-[31px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[40px]">
              Ready to Unlock the Power of Your Data?
            </h2>

            <p className="mt-5 max-w-[490px] text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Get a free consultation and see how AI data & research can help
              you find new opportunities, reduce risks, and drive faster
              growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[13px] font-extrabold text-[#06235a] shadow-xl"
              >
                Get Started Today
                <Icon name="arrow" size={15} className="text-[#0876ed]" />
              </a>

              <a
                href="#"
                className="text-[13px] font-bold text-white"
              >
                Talk to Our Experts
              </a>
            </div>
          </Reveal>

          {/* CTA VISUAL */}

          <Reveal delay={120}>
            <div className="relative h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a2b59] via-[#06235a] to-[#020b1d] shadow-2xl sm:h-[380px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_75%,rgba(8,118,237,.35),transparent_58%)]" />

              {/* laptop */}

              <div className="absolute bottom-[6%] right-[7%] h-[150px] w-[58%] rounded-t-2xl border border-white/10 bg-gradient-to-b from-slate-300 to-slate-500 shadow-2xl">
                <div className="m-3 h-[105px] rounded-lg bg-[#061a39] p-3">
                  <div className="relative h-full overflow-hidden rounded bg-[#092957]">
                    <div className="absolute left-3 top-3 text-[8px] font-bold text-white">
                      Data Intelligence
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex h-[55%] items-end gap-2">
                      {[30, 50, 42, 68, 55, 80].map((height, i) => (
                        <span
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-[#0876ed] to-cyan-300"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 left-[-7%] h-3 w-[114%] rounded-full bg-slate-500" />
              </div>

              {/* floating chips */}

              <div className="absolute left-6 top-6 flex flex-col gap-2.5">
                {[
                  ["insight", "Insights"],
                  ["strategy", "Strategy"],
                  ["growth", "Growth"],
                  ["opportunity", "Opportunities"],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-md"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0876ed] text-white">
                      <Icon name={icon as IconName} size={12} />
                    </span>

                    <span className="text-[9.5px] font-bold text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* handwritten text */}

              <div className="absolute right-5 top-6 rotate-[3deg] text-right">
                <p className="font-serif text-[25px] font-semibold italic leading-[1.05] text-white/90 sm:text-[31px]">
                  Better Data
                  <br />
                  Bigger Decisions
                </p>
              </div>

              {/* graph arrow */}

              <svg
                className="absolute bottom-[39%] left-[38%] w-[45%] text-cyan-300"
                viewBox="0 0 220 90"
                fill="none"
              >
                <path
                  d="M4 82C60 75 120 50 207 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <path
                  d="M190 5h19v19"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}