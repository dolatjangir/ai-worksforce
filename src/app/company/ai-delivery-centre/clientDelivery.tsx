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
  | "shield"
  | "clock"
  | "database"
  | "handshake"
  | "file"
  | "code"
  | "check"
  | "rocket"
  | "headphones"
  | "arrow"
  | "play"
  | "menu"
  | "close"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram";

/* =========================================================
   ICONS
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

    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.3 8.1-8 10-4.7-1.9-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </>
    ),

    handshake: (
      <>
        <path d="m4 12 3-3 4 1 3-3 6 4" />
        <path d="m4 12 5 5c.8.8 2 .8 2.8 0l1.2-1.2" />
        <path d="m13 15 1.2 1.2c.8.8 2 .8 2.8 0l2-2" />
        <path d="m16 10 2 2c.8.8 2 .8 2.8 0l.7-.7" />
      </>
    ),

    file: (
      <>
        <path d="M6 3h8l4 4v14H6V3Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h6" />
      </>
    ),

    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 6-4 12" />
      </>
    ),

    check: (
      <path d="m7 12 3 3 7-7" strokeWidth="2.5" />
    ),

    rocket: (
      <>
        <path d="M14 4c2.8-1.8 5.1-2.1 6-2 .1.9-.2 3.2-2 6-1.4 2.1-3.4 4-5.6 5.4l-2.8-2.8C11 8.4 12 5.4 14 4Z" />
        <path d="m9.6 10.6-3.4.8-2.5 2.5 4.2.8.8 4.2 2.5-2.5.8-3.4" />
        <circle cx="16.5" cy="6.5" r="1.2" />
      </>
    ),

    headphones: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4Z" />
        <path d="M20 14h-3v5h2a1 1 0 0 0 1-1v-4Z" />
      </>
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
   ICON CIRCLE
========================================================= */

function IconCircle({
  icon,
  className = "bg-indigo-100 text-brand-blue",
  large = false,
}: {
  icon: IconName;
  className?: string;
  large?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex shrink-0 items-center justify-center rounded-full",
        large
          ? "size-12 sm:size-14"
          : "size-10 sm:size-12",
        className,
      ].join(" ")}
    >
      <Icon
        name={icon}
        className={
          large
            ? "size-6 sm:size-7"
            : "size-5 sm:size-6"
        }
      />
    </span>
  );
}

/* =========================================================
   NAVIGATION
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

/* =========================================================
   DELIVERY FEATURES
========================================================= */

const deliveryFeatures = [
  {
    icon: "users" as IconName,
    title: "Expert AI Team",
    description:
      "A dedicated team of AI engineers, data scientists, and automation specialists.",
  },
  {
    icon: "settings" as IconName,
    title: "Advanced Infrastructure",
    description:
      "Secure, scalable, and high-performance environment for AI development and deployment.",
  },
  {
    icon: "shield" as IconName,
    title: "Quality & Security",
    description:
      "Best practices, compliance, and rigorous quality assurance at every stage.",
  },
  {
    icon: "chart" as IconName,
    title: "Scalable Delivery",
    description:
      "Flexible delivery models to meet the needs of startups, SMBs, and enterprises.",
  },
];

/* =========================================================
   DELIVERY PROCESS
========================================================= */

const deliveryProcess = [
  {
    icon: "file" as IconName,
    number: "01",
    title: "Plan",
    description:
      "Understand business goals and requirements.",
  },
  {
    icon: "code" as IconName,
    number: "02",
    title: "Build",
    description:
      "Design and develop custom AI solutions with best practices.",
  },
  {
    icon: "check" as IconName,
    number: "03",
    title: "Test",
    description:
      "Ensure quality, security, and performance.",
  },
  {
    icon: "rocket" as IconName,
    number: "04",
    title: "Deploy",
    description:
      "Deliver and integrate seamlessly into your operations.",
  },
  {
    icon: "headphones" as IconName,
    number: "05",
    title: "Support",
    description:
      "Continuous monitoring and optimization.",
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const advantages = [
  {
    icon: "globe" as IconName,
    title: "Global Talent Pool",
    description:
      "Access to diverse talent and specialized AI expertise.",
  },
  {
    icon: "database" as IconName,
    title: "Cost-Effective Delivery",
    description:
      "High-quality solutions with optimized delivery costs.",
  },
  {
    icon: "clock" as IconName,
    title: "Faster Time-to-Market",
    description:
      "Agile processes to deliver solutions quickly.",
  },
  {
    icon: "handshake" as IconName,
    title: "Long-Term Partnership",
    description:
      "We grow with you, ensuring ongoing support and innovation.",
  },
];

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-7 lg:px-8 lg:py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_0.95fr]">
          {/* Brand */}

          <div>
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl"
            >
              <span className="text-brand-blue">
                AI
              </span>{" "}
              WorksForce
            </a>

            <p className="mt-1 text-xs text-brand-text-muted sm:text-sm">
              Automate. Accelerate. Grow.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
              Empowering businesses with AI automation,
              intelligent agents, and modern workflows for a
              smarter tomorrow.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-base font-bold text-brand-dark sm:text-lg">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5">
              {[
                "Home",
                "About AIWorksForce",
                "Our Team",
                "Careers",
                "News & Updates",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-text transition-colors hover:text-brand-blue sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}

          <div>
            <h3 className="text-base font-bold text-brand-dark sm:text-lg">
              Our Solutions
            </h3>

            <ul className="mt-4 space-y-2.5">
              {[
                "AI Automation",
                "AI Agents",
                "AI Customer Operations",
                "AI Sales & Outreach",
                "AI Digital Marketing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-text transition-colors hover:text-brand-blue sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-base font-bold text-brand-dark sm:text-lg">
              Connect With Us
            </h3>

            <div className="mt-4 flex items-center gap-3">
              {[
                ["linkedin", "LinkedIn"],
                ["twitter", "Twitter"],
                ["youtube", "YouTube"],
                ["instagram", "Instagram"],
              ].map(([icon, label]) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-9 place-items-center text-brand-dark transition-colors hover:text-brand-blue"
                >
                  <Icon
                    name={icon as IconName}
                    className="size-5"
                  />
                </a>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-brand-text sm:text-base">
              Let&apos;s build a smarter future together.
            </p>

            <a
              href="/company/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue sm:text-base"
            >
              Get in Touch
              <Icon
                name="arrow"
                className="size-4"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-5 text-xs text-brand-text-muted sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2024 AIWorksForce. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/privacy-policy"
              className="hover:text-brand-blue"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="hover:text-brand-blue"
            >
              Terms of Service
            </a>

            <a
              href="/company/contact"
              className="hover:text-brand-blue"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AIDeliveryCentrePage() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
  

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative isolate overflow-hidden rounded-b-2xl bg-[linear-gradient(110deg,#ffffff_0%,#f8faff_46%,#edf1ff_100%)]">
          <div className="pointer-events-none absolute -right-32 -top-32 -z-10 size-[30rem] rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
            {/* Copy */}

            <div className="relative z-20 px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14 xl:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                Global Talent. Real Impact.
              </p>

              <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[0.94] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
                AI Delivery{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Centre
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-text sm:text-lg lg:text-xl">
                Our AI Delivery Centre is the engine behind your
                success. A dedicated team, advanced infrastructure,
                and proven processes to deliver high-quality AI
                solutions at scale.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#delivery"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(37,99,235,0.2)] transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
                >
                  Take a Virtual Tour

                  <Icon
                    name="arrow"
                    className="size-4"
                  />
                </a>

                <a
                  href="#"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-brand-purple/50 bg-white/80 px-5 text-sm font-bold text-brand-dark transition hover:bg-white sm:px-6 sm:text-base"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-violet-100 text-brand-purple">
                    <Icon
                      name="play"
                      className="size-2.5"
                    />
                  </span>

                  Watch Video
                </a>
              </div>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0">
                <div className="flex items-center gap-3">
                  <IconCircle
                    icon="users"
                    className="bg-indigo-100 text-brand-blue"
                  />

                  <div>
                    <p className="text-2xl font-bold leading-none text-brand-blue sm:text-3xl">
                      200+
                    </p>

                    <p className="mt-1 text-xs leading-tight text-brand-text-muted sm:text-sm">
                      AI Specialists
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4">
                  <IconCircle
                    icon="clock"
                    className="bg-indigo-100 text-brand-blue"
                  />

                  <div>
                    <p className="text-2xl font-bold leading-none text-brand-blue sm:text-3xl">
                      24/7
                    </p>

                    <p className="mt-1 text-xs leading-tight text-brand-text-muted sm:text-sm">
                      Delivery Operations
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4">
                  <IconCircle
                    icon="shield"
                    className="bg-indigo-100 text-brand-blue"
                  />

                  <div>
                    <p className="text-2xl font-bold leading-none text-brand-blue sm:text-3xl">
                      99%
                    </p>

                    <p className="mt-1 text-xs leading-tight text-brand-text-muted sm:text-sm">
                      Quality Assurance
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4">
                  <IconCircle
                    icon="globe"
                    className="bg-indigo-100 text-brand-blue"
                  />

                  <div>
                    <p className="text-2xl font-bold leading-none text-brand-blue sm:text-3xl">
                      Global
                    </p>

                    <p className="mt-1 text-xs leading-tight text-brand-text-muted sm:text-sm">
                      Client Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}

            <div className="relative min-h-[23rem] sm:min-h-[30rem] lg:min-h-0">
              <div className="absolute left-1/2 top-1/2 -z-10 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl sm:size-[35rem]" />

              <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
                <img
                  src="/images/delivery-centre/delivery-centre-hero.webp"
                  alt="AI WorksForce delivery centre"
                  className="w-full max-w-[38rem] object-contain"
                />
              </div>

              {/* handwritten note */}

              <div className="absolute right-0 top-16 z-30 hidden font-hand text-2xl leading-tight text-brand-dark lg:block">
                People
                <br />
                Process
                <br />
                Technology
                <br />
                Real Impact
              </div>

              {/* Result card */}

              <div className="absolute bottom-5 right-0 z-30 hidden w-52 rounded-xl bg-white/95 p-4 shadow-[0_12px_32px_rgba(24,74,140,0.12)] sm:block">
                <div className="flex items-start gap-3">
                  <IconCircle
                    icon="chart"
                    className="bg-indigo-100 text-brand-purple"
                  />

                  <div>
                    <h3 className="text-sm font-bold text-brand-dark sm:text-base">
                      Delivering
                      <br />
                      Smarter Solutions
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-brand-text sm:text-sm">
                      From Our Delivery Centre to Your Business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CENTRE OF EXCELLENCE
        ====================================================== */}

        <section
          id="delivery"
          className="mx-auto max-w-7xl px-5 py-10 sm:px-7 lg:px-8 lg:py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Left */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                Powering Your AI Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                A Centre of Excellence
                <br />
                <span className="text-brand-blue">
                  for AI Delivery
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-text sm:text-lg">
                Our AI Delivery Centre brings together skilled
                professionals, cutting-edge technology, and agile
                processes to design, build, and deploy AI solutions
                that drive real business outcomes.
              </p>

              <a
                href="#"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-brand-blue px-5 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white sm:text-base"
              >
                Learn More About Our Approach

                <Icon
                  name="arrow"
                  className="size-4"
                />
              </a>
            </div>

            {/* Features */}

            <div className="grid gap-4 sm:grid-cols-2">
              {deliveryFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl bg-blue-50/70 p-5 sm:p-6"
                >
                  <div className="flex gap-4">
                    <IconCircle
                      icon={feature.icon}
                      className="bg-indigo-100 text-brand-blue"
                    />

                    <div>
                      <h3 className="text-base font-bold tracking-tight text-brand-dark sm:text-lg">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-brand-text sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DELIVERY PROCESS
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-7 lg:px-8 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Image */}

            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/images/delivery-centre/delivery-centre-team.webp"
                alt="AI WorksForce delivery centre team"
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute bottom-4 right-4 hidden rotate-[-6deg] font-hand text-xl leading-tight text-brand-blue sm:block">
                Real People
                <br />
                Real Solutions
              </div>
            </div>

            {/* Process */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                How We Deliver
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                From Strategy to
                <br />
                <span className="text-brand-blue">
                  Scalable Solutions
                </span>
              </h2>

              <p className="mt-3 max-w-3xl text-base leading-relaxed text-brand-text sm:text-lg">
                Our delivery centre follows a proven, agile process
                to ensure faster time-to-value and measurable
                results.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-2">
                {deliveryProcess.map(
                  (step, index) => (
                    <div
                      key={step.number}
                      className="relative text-center"
                    >
                      {index <
                        deliveryProcess.length -
                          1 && (
                        <div className="absolute left-[calc(50%+2.5rem)] top-6 hidden w-[calc(100%-3rem)] items-center sm:flex">
                          <span className="h-px flex-1 bg-brand-blue/30" />

                          <Icon
                            name="arrow"
                            className="size-4 shrink-0 text-brand-blue"
                          />
                        </div>
                      )}

                      <IconCircle
                        icon={step.icon}
                        className="mx-auto bg-indigo-100 text-brand-purple"
                      />

                      <p className="mt-2 text-xs font-bold text-brand-blue sm:text-sm">
                        {step.number}
                      </p>

                      <h3 className="mt-1 text-base font-bold text-brand-dark sm:text-lg">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-brand-text sm:text-sm">
                        {step.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY CHOOSE US
        ====================================================== */}

        <section className="mx-3 overflow-hidden rounded-2xl bg-blue-50/70 sm:mx-5 lg:mx-auto lg:max-w-7xl">
          <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
              Why Choose Our AI Delivery Centre
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Built for Performance. Designed for You.
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl bg-white/80 p-5 sm:p-6"
                >
                  <IconCircle
                    icon={item.icon}
                    className="bg-indigo-100 text-brand-blue"
                  />

                  <h3 className="mt-4 text-base font-bold text-brand-dark sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-brand-text sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INSIDE CENTRE
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:px-8 lg:py-10">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.65fr_0.65fr_0.65fr]">
            {/* Intro */}

            <div className="rounded-xl bg-blue-50/70 p-6 sm:p-7">
              <p className="text-xl font-bold text-brand-blue sm:text-2xl">
                A Glimpse Inside
              </p>

              <h2 className="mt-1 text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
                Our AI Delivery Centre
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
                A modern, collaborative, and secure workspace where
                innovation meets execution. Designed to empower our
                team and deliver exceptional results for our clients.
              </p>

              <a
                href="#"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-brand-blue px-5 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white sm:text-base"
              >
                View More Photos

                <Icon
                  name="arrow"
                  className="size-4"
                />
              </a>
            </div>

            {/* Gallery */}

            {[
              {
                src: "/images/delivery-centre/delivery-centre-1.webp",
                alt: "AI WorksForce office entrance",
              },
              {
                src: "/images/delivery-centre/delivery-centre-2.webp",
                alt: "AI WorksForce delivery team",
              },
              {
                src: "/images/delivery-centre/delivery-centre-3.webp",
                alt: "AI WorksForce workspace",
              },
            ].map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="relative isolate mx-1 overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#07154d,#0b176f_55%,#2637e8)] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-9">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

          <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
                Ready to Build Together?
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Let&apos;s Leverage Our AI Delivery Centre for Your
                Business
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
                Talk to our team and discover how we can help you
                automate, accelerate, and grow.
              </p>
            </div>

            <a
              href="/book-demo"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-brand-dark shadow-lg transition hover:-translate-y-0.5 sm:text-base"
            >
              Book a Free Consultation

              <Icon
                name="arrow"
                className="size-4"
              />
            </a>
          </div>
        </section>
      </main>

    
    </div>
  );
}