"use client";

import { useState, type ReactNode } from "react";

/* =========================================================
   TYPES
========================================================= */

type IconName =
  | "users"
  | "settings"
  | "chart"
  | "globe"
  | "target"
  | "eye"
  | "diamond"
  | "rocket"
  | "lightbulb"
  | "heart"
  | "star"
  | "arrow"
  | "play"
  | "menu"
  | "close"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram"
  | "check";

/* =========================================================
   ICON SYSTEM
   Self-contained SVG icons so no icon dependency is required.
========================================================= */

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const icons: Record<IconName, ReactNode> = {
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M15 15a5 5 0 0 1 6 5" />
      </>
    ),

    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.06.06-1.82 1.82-.06-.06a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.1 1.65V22h-2.58v-.09a1.8 1.8 0 0 0-1.1-1.65 1.8 1.8 0 0 0-1.98.36l-.06.06-1.82-1.82.06-.06A1.8 1.8 0 0 0 7.76 17a1.8 1.8 0 0 0-1.65-1.1H6V13.3h.11a1.8 1.8 0 0 0 1.65-1.1 1.8 1.8 0 0 0-.36-1.98l-.06-.06 1.82-1.82.06.06a1.8 1.8 0 0 0 1.98.36 1.8 1.8 0 0 0 1.1-1.65V6h2.58v.11a1.8 1.8 0 0 0 1.1 1.65 1.8 1.8 0 0 0 1.98-.36l.06-.06 1.82 1.82-.06.06A1.8 1.8 0 0 0 19.4 11c.25.67.9 1.1 1.61 1.1h.1v2.6h-.1c-.71 0-1.36.43-1.61 1.1Z" />
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

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </>
    ),

    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="m16.5 7.5 4-4" />
        <path d="M17 3.5h3.5V7" />
      </>
    ),

    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),

    diamond: (
      <>
        <path d="m12 3 7 4-7 14L5 7l7-4Z" />
        <path d="M5 7h14" />
        <path d="m8.5 5 3.5 2 3.5-2" />
      </>
    ),

    rocket: (
      <>
        <path d="M14 4c2.8-1.8 5.1-2.1 6-2 .1.9-.2 3.2-2 6-1.4 2.1-3.4 4-5.6 5.4l-2.8-2.8C11 8.4 12 5.4 14 4Z" />
        <path d="m9.6 10.6-3.4.8-2.5 2.5 4.2.8.8 4.2 2.5-2.5.8-3.4" />
        <circle cx="16.5" cy="6.5" r="1.2" />
        <path d="M7 17c-1.3.3-2.5 1-3.2 2.3" />
      </>
    ),

    lightbulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5a7 7 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
      </>
    ),

    heart: (
      <path d="M20.8 8.9c0 5.5-8.8 10.1-8.8 10.1S3.2 14.4 3.2 8.9A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.6Z" />
    ),

    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),

    arrow: (
      <>
        <path d="M4 12h16" />
        <path d="m13 5 7 7-7 7" />
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
      <path
        d="m7 12 3 3 7-7"
        strokeWidth="2.5"
      />
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
   SMALL ICON CIRCLE
========================================================= */

function IconCircle({
  icon,
  className = "bg-indigo-100 text-brand-blue",
  size = "normal",
}: {
  icon: IconName;
  className?: string;
  size?: "normal" | "large";
}) {
  return (
    <span
      className={[
        "inline-flex shrink-0 items-center justify-center rounded-full",
        size === "large"
          ? "size-12 sm:size-14"
          : "size-10 sm:size-12",
        className,
      ].join(" ")}
    >
      <Icon
        name={icon}
        className={
          size === "large"
            ? "size-6 sm:size-7"
            : "size-5 sm:size-6"
        }
      />
    </span>
  );
}

/* =========================================================
   DATA
========================================================= */

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

const values = [
  "Customer Success First",
  "Innovation in Everything We Do",
  "Transparency & Trust",
  "Practical, Real-World Impact",
  "People + Technology for a Better Future",
];

const journeyItems = [
  {
    icon: "rocket" as IconName,
    title: "The Beginning",
    description:
      "A small team, a big vision — to make AI accessible for every business.",
  },
  {
    icon: "lightbulb" as IconName,
    title: "Building Solutions",
    description:
      "We developed practical AI automation solutions for real-world challenges.",
  },
  {
    icon: "users" as IconName,
    title: "Growing Together",
    description:
      "Today, we work with 500+ businesses across industries, delivering measurable results.",
  },
  {
    icon: "chart" as IconName,
    title: "A Brighter Tomorrow",
    description:
      "We continue to innovate and empower businesses for a smarter, more efficient future.",
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
  

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
<section
  aria-labelledby="about-hero-title"
  className="relative isolate min-h-[85dvh] overflow-hidden rounded-2xl bg-white"
>
  {/* Right-side office image */}
  <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full lg:w-[65%]">
    <img
      src="/company-images/about-aiworkforce-company-hero-img.png"
      alt=""
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="h-full w-full object-cover object-right"
    />

    {/* Blend the office image into the white content area */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 lg:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.95)_10%,rgba(255,255,255,0.45)_28%,transparent_48%)]" />

    <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-white/95 to-transparent" />
  </div>

  <div className="mx-auto flex min-h-[85dvh] w-full max-w-[1440px] flex-col px-5 py-7 sm:px-8 lg:px-[5.3%] lg:py-8">
    {/* Hero copy */}
    <div className="relative w-full pt-14 lg:max-w-[49%] lg:pt-[12vh]">
      <p className="text-[9px] font-bold uppercase leading-relaxed tracking-[0.16em] text-[#1600ff] sm:text-xs">
        Our Story. Our Purpose. A Smarter Tomorrow.
      </p>

      <h1
        id="about-hero-title"
        className="mt-4 text-[clamp(2rem,5.8vw,5.25rem)] font-bold leading-[0.99] tracking-[-0.045em] text-[#080044]"
      >
        About
        <span className="block text-[#1600ff]">
          AIWorksForce
        </span>
      </h1>

      <p className="mt-3 max-w-[470px] text-base leading-[1.25] tracking-[-0.012em] text-[#37308b] sm:text-lg">
        We help businesses unlock growth through the power
        of AI automation, intelligent agents, and modern
        workflows.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-5">
        <a
          href="#mission"
          className="inline-flex min-h-11 min-w-[158px] items-center justify-center gap-2 rounded-md border border-[#4936ff] bg-[#1600ff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_3px_0_rgba(22,0,255,0.12)] transition-colors hover:bg-[#1000d9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1600ff]"
        >
          Our Mission
          <span aria-hidden="true">
            <Icon name="arrow" className="size-4" />
          </span>
        </a>

        <a
          href="#our-story"
          className="inline-flex min-h-11 min-w-[176px] items-center justify-center gap-3 rounded-md border border-[#a395ff] bg-white/80 px-4 py-2.5 text-sm font-bold text-[#080044] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1600ff]"
        >
          <span
            aria-hidden="true"
            className="grid size-[20px] shrink-0 place-items-center rounded-full bg-[#eae7ff] text-[#1600ff]"
          >
            <Icon name="play" className="size-4" />
          </span>
          Watch Our Story
        </a>
      </div>
    </div>

    {/* Bottom statistics and result card */}
    <div className="relative mt-auto flex flex-col gap-6 pt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-5">
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-0 lg:w-[74%]">
        <div className="flex min-w-0 items-center gap-2.5 sm:pr-3">
          <span aria-hidden="true" className="shrink-0">
            <IconCircle
              icon="users"
              className="bg-[#eeebff] text-[#1600ff]"
            />
          </span>

          <div className="min-w-0">
            <p className="text-xl font-bold leading-none tracking-tight text-[#1600ff] xl:text-2xl">
              500+
            </p>
            <p className="mt-1 text-[10px] leading-tight tracking-tight text-[#59529c] xl:text-xs">
              Businesses Empowered
            </p>
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-2.5 sm:border-l sm:border-[#e7e4ff] sm:px-3">
          <span aria-hidden="true" className="shrink-0">
            <IconCircle
              icon="settings"
              className="bg-[#eeebff] text-[#1600ff]"
            />
          </span>

          <div className="min-w-0">
            <p className="text-xl font-bold leading-none tracking-tight text-[#1600ff] xl:text-2xl">
              250+
            </p>
            <p className="mt-1 text-[10px] leading-tight tracking-tight text-[#59529c] xl:text-xs">
              AI Automations Deployed
            </p>
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-2.5 sm:px-3">
          <span aria-hidden="true" className="shrink-0">
            <IconCircle
              icon="chart"
              className="bg-[#eeebff] text-[#1600ff]"
            />
          </span>

          <div className="min-w-0">
            <p className="text-xl font-bold leading-none tracking-tight text-[#1600ff] xl:text-2xl">
              99%
            </p>
            <p className="mt-1 text-[10px] leading-tight tracking-tight text-[#59529c] xl:text-xs">
              Client Satisfaction
            </p>
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-2.5 sm:pl-3">
          <span aria-hidden="true" className="shrink-0">
            <IconCircle
              icon="globe"
              className="bg-[#eeebff] text-[#1600ff]"
            />
          </span>

          <div className="min-w-0">
            <p className="text-xl font-bold leading-none tracking-tight text-[#1600ff] xl:text-2xl">
              10+
            </p>
            <p className="mt-1 text-[10px] leading-tight tracking-tight text-[#59529c] xl:text-xs">
              Industries Served
            </p>
          </div>
        </div>
      </div>

      <div className="w-full rounded-xl border border-white/40 bg-[#eeedff]/85 px-3 py-3 shadow-[0_10px_30px_rgba(43,38,119,0.14)] backdrop-blur-md sm:w-[194px] sm:self-end lg:shrink-0">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-[52px] shrink-0 place-items-center rounded-full bg-[#d9d8ff] text-[#1600ff]"
          >
            <Icon name="chart" className="size-8" />
          </span>

          <p className="text-xs font-medium leading-[1.4] tracking-tight text-[#080044]">
            More
            <br />
            Automation
            <br />
            More Growth
            <br />
            A Smarter Tomorrow
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* =====================================================
            MISSION / VISION / VALUES
        ====================================================== */}

        <section
          id="mission"
          className="mx-auto max-w-7xl px-5 py-10 sm:px-7 lg:px-8 lg:py-12"
        >
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
              What Drives Us
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Our Mission, Vision & Values
            </h2>

            <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
              Guided by a clear purpose to create real impact for
              businesses through AI.
            </p>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {/* Mission */}

            <article className="rounded-xl bg-blue-50/70 p-6 sm:p-7">
              <IconCircle
                icon="target"
                size="large"
                className="bg-blue-100 text-brand-blue"
              />

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Our Mission
              </h3>

              <p className="mt-2 text-base leading-relaxed text-brand-text sm:text-lg">
                To make AI simple, accessible, and impactful for
                businesses of all sizes, helping them automate,
                scale, and grow faster.
              </p>
            </article>

            {/* Vision */}

            <article className="rounded-xl bg-purple-50/80 p-6 sm:p-7">
              <IconCircle
                icon="eye"
                size="large"
                className="bg-violet-100 text-brand-purple"
              />

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Our Vision
              </h3>

              <p className="mt-2 text-base leading-relaxed text-brand-text sm:text-lg">
                A future where every business can harness the power
                of AI to unlock human potential and create a more
                efficient, innovative, and sustainable world.
              </p>
            </article>

            {/* Values */}

            <article className="rounded-xl bg-blue-50/70 p-6 sm:p-7">
              <IconCircle
                icon="diamond"
                size="large"
                className="bg-cyan-100 text-brand-blue"
              />

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Our Values
              </h3>

              <ul className="mt-3 space-y-2.5">
                {values.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-text sm:text-base"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-brand-green">
                      <Icon
                        name="check"
                        className="size-3.5"
                      />
                    </span>

                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* =====================================================
            OUR JOURNEY
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-7 lg:px-8 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.3fr_0.85fr] lg:items-center">
            {/* Copy */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                Our Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                From an Idea to
                <br />
                <span className="text-brand-blue">
                  Real Impact
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
                AIWorksForce was founded with a simple belief — AI
                should work for businesses, not the other way around.
                What started as a vision to solve real operational
                challenges has grown into a trusted partner for
                hundreds of businesses across industries.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand-blue px-6 text-sm font-bold text-white shadow-[0_8px_22px_rgba(37,99,235,0.18)] transition-all hover:-translate-y-0.5 sm:text-base"
              >
                Our Story

                <Icon
                  name="arrow"
                  className="size-4"
                />
              </a>
            </div>

            {/* Journey image */}

            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/company-images/about-aiworkforce-company-bottom.png"
                alt="AI WorksForce team collaborating"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>

            {/* Timeline */}

            <div className="relative">
              <div className="absolute bottom-5 left-6 top-5 border-l border-dashed border-brand-blue/40" />

              <div className="space-y-5">
                {journeyItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative flex gap-4"
                  >
                    <div className="relative z-10">
                      <IconCircle
                        icon={item.icon}
                        className="bg-indigo-100 text-brand-purple"
                      />
                    </div>

                    <div className="pt-1">
                      <h3 className="text-base font-bold tracking-tight text-brand-dark sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-brand-text sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TEAM IMPACT
        ====================================================== */}

        <section className="mx-3 overflow-hidden rounded-2xl bg-blue-50/70 sm:mx-5 lg:mx-auto lg:max-w-7xl">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-9 lg:grid-cols-[1.1fr_1.5fr] lg:items-center lg:px-10">
            {/* Team heading */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                The People Behind AIWorksForce
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                A Team Driven by Impact
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
                We’re a diverse team of innovators, problem-solvers,
                and AI enthusiasts working together to help
                businesses grow.
              </p>
            </div>

            {/* Team values */}

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                {
                  icon: "users" as IconName,
                  title: "Expert Team",
                  description:
                    "AI & Business Specialists",
                },
                {
                  icon: "lightbulb" as IconName,
                  title: "Innovative Culture",
                  description:
                    "Always Learning",
                },
                {
                  icon: "heart" as IconName,
                  title: "Global Mindset",
                  description:
                    "Impact Beyond Borders",
                },
                {
                  icon: "star" as IconName,
                  title: "Client-Centric",
                  description:
                    "Your Success, Our Priority",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center"
                >
                  <IconCircle
                    icon={item.icon}
                    className="mx-auto bg-white text-brand-purple shadow-sm"
                  />

                  <h3 className="mt-3 text-sm font-bold text-brand-dark sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-brand-text-muted sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative isolate mx-1 mt-4 overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#07154d,#0b176f_55%,#2637e8)] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-10 lg:mt-5">
          {/* Decorative background */}

          <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

          <div className="mx-auto grid max-w-6xl items-center gap-7 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
                Let&apos;s Build a Smarter Tomorrow
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Partner with AIWorksForce
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
                Discover how our AI solutions can help your business
                automate, accelerate, and grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/book-demo"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-bold text-brand-dark shadow-lg transition-all hover:-translate-y-0.5 sm:px-6 sm:text-base"
              >
                Book a Free Consultation

                <Icon
                  name="arrow"
                  className="size-4"
                />
              </a>

              <a
                href="/company/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/50 px-5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:px-6 sm:text-base"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

 
    </div>
  );
}