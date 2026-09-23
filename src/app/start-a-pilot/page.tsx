"use client";

import React from "react";

/* =========================================================
   INLINE ICONS
========================================================= */

const Icon = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const gradientId = React.useId();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-6 w-6 ${className}`}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
      </defs>

      {children}
    </svg>
  );
};

const ArrowRight = () => (
  <Icon className="h-5 w-5">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
);

const Check = () => (
  <Icon className="h-4 w-4">
    <path d="m5 12 4 4L19 6" />
  </Icon>
);

const Bolt = () => (
  <Icon className="h-7 w-7">
    <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
  </Icon>
);

const Chart = () => (
  <Icon className="h-7 w-7">
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7 15 3-4 3 2 5-7" />
  </Icon>
);

const Shield = () => (
  <Icon className="h-7 w-7">
    <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

const Document = () => (
  <Icon className="h-8 w-8">
    <path d="M6 3h9l4 4v14H6z" />
    <path d="M14 3v5h5" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </Icon>
);

const Gear = () => (
  <Icon className="h-8 w-8">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 2-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.8v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2-2 .1-.1A1.7 1.7 0 0 0 7.4 15a1.7 1.7 0 0 0-1.5-1H5.7v-2.8h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L7 8.2l2-2 .1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h2.8v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2 2-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z" />
  </Icon>
);

const Users = () => (
  <Icon className="h-8 w-8">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
    <path d="M16 5.5a3 3 0 0 1 0 5.8" />
    <path d="M18 15c2 .7 3 2.2 3 5" />
  </Icon>
);

const Target = () => (
  <Icon className="h-9 w-9">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <path d="m16 8 4-4" />
    <path d="M17 4h3v3" />
  </Icon>
);

const Bulb = () => (
  <Icon className="h-9 w-9">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M8.5 14.5A7 7 0 1 1 15.5 15c-.8.8-1.5 1.7-1.5 3h-4c0-1.3-.7-2.2-1.5-3Z" />
  </Icon>
);

const Rocket = () => (
  <Icon className="h-8 w-8">
    <path d="M14 4c3-3 6-2 6-2s1 3-2 6l-5 5-4-4 5-5Z" />
    <path d="m9 9-4 1-2 4 5-1" />
    <path d="m15 15-1 5 4-2 1-4" />
    <path d="M7 17c-1 2-3 3-4 3 0-1 1-3 3-4" />
  </Icon>
);

const Play = () => (
  <Icon className="h-7 w-7">
    <path d="m9 6 9 6-9 6V6Z" fill="currentColor" stroke="none" />
  </Icon>
);

const Menu = () => (
  <Icon className="h-7 w-7">
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Icon>
);

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      {eyebrow && (
        <div className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-blue-600 sm:text-base sm:tracking-[0.24em]">
          {eyebrow}
        </div>
      )}

      <div className="flex items-center gap-4">
        <h2 className="text-[26px] font-extrabold leading-[1.16] tracking-tight text-[#10204f] sm:text-3xl lg:text-4xl">
          {title}
        </h2>

        <span className="mt-2 h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-blue-600" />
      </div>

      {children}
    </div>
  );
}

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <div className="text-base font-extrabold leading-tight text-[#152451] sm:text-lg">{title}</div>
        <div className="text-sm leading-6 text-slate-500 sm:text-base">{text}</div>
      </div>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="relative flex-1">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-sm font-bold text-blue-700 shadow-lg shadow-blue-100">
          {number}
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-sm">
          {icon}
        </div>
      </div>

      <h3 className="mb-2 text-base font-extrabold leading-tight text-[#14234f] sm:text-lg">{title}</h3>

      <p className="max-w-[260px] text-[15px] leading-[1.5] text-slate-500 sm:text-base">
        {text}
      </p>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_30px_rgba(24,74,140,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(24,74,140,0.12)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600">
        {icon}
      </div>

      <h3 className="mb-2 text-base font-extrabold leading-tight text-[#14234f] sm:text-lg">{title}</h3>

      <p className="text-[15px] leading-[1.5] text-slate-500 sm:text-base">{text}</p>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function PilotPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#10204f]">
    

      {/* =====================================================
          HERO
      ===================================================== */}

    <section className="relative isolate min-h-[90dvh] overflow-hidden bg-white">
  <div
    className="
      relative mx-auto grid h-full min-h-0 w-full max-w-[1536px]
      grid-rows-[minmax(0,1fr)_minmax(0,0.55fr)]
      lg:grid-cols-[1.05fr_1fr] lg:grid-rows-1
      [@media(orientation:landscape)_and_(max-height:600px)]:grid-cols-2
      [@media(orientation:landscape)_and_(max-height:600px)]:grid-rows-1
    "
  >
    {/* Content */}
    <div
      className="
        relative z-20 min-h-0 min-w-0 overflow-y-auto overscroll-contain
        px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-12
        [scrollbar-width:thin]
      "
    >
      <div className="flex min-h-full flex-col justify-center">
        <div className="mb-3 flex items-center gap-3 lg:mb-5">
          <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-700 sm:text-base sm:tracking-[0.22em]">
            Start a Pilot
          </span>

          <span className="h-0.5 w-12 bg-gradient-to-r from-cyan-400 to-blue-600" />
        </div>

        <h1
          className="
            text-[clamp(2.25rem,5vw,4.25rem)]
            font-black leading-[1.04] tracking-[-0.04em]
            text-[#101f4e]
          "
        >
          Turn Ideas into
          <br />
          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
            Real Results
          </span>
        </h1>

        <p className="mt-4 max-w-[590px] text-[15px] leading-[1.55] text-slate-600 sm:text-base lg:text-lg xl:text-xl">
          Experience the power of AI Workforce with a low-risk,
          high-impact pilot. Test, learn, and scale with confidence.
        </p>

        {/* Benefits */}
        <div
          className="
            mt-5 grid grid-cols-1 gap-3
            min-[480px]:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-4
            [&>*]:min-w-0
          "
        >
          <Benefit
            icon={<Bolt />}
            title="Quick Setup"
            text="Get started in days"
          />

          <Benefit
            icon={<Chart />}
            title="Measurable Impact"
            text="Track real results"
          />

          <Benefit
            icon={<Shield />}
            title="Low Risk"
            text="High value, minimal commitment"
          />
        </div>

        {/* CTA */}
        <div className="mt-5 flex flex-wrap items-center gap-4 lg:mt-6">
          <a
            href="#pilot-form"
            className="
              inline-flex min-h-12 items-center justify-center gap-3
              rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600
              px-6 py-3 text-sm font-bold text-white
              shadow-lg shadow-blue-200
              transition hover:-translate-y-1 hover:shadow-xl
              focus-visible:outline-2 focus-visible:outline-offset-4
              focus-visible:outline-blue-600
            "
          >
            Start Your Pilot
            <ArrowRight />
          </a>

          {/* Keep your existing video click handler here. */}
          <button
            type="button"
            className="group flex items-center gap-3 text-left"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-blue-600 transition group-hover:bg-blue-50">
              <Play />
            </span>

            <span>
              <span className="block text-sm font-extrabold text-[#14234f] sm:text-base">
                Watch How It Works
              </span>
              <span className="block text-sm leading-6 text-slate-500 sm:text-base">
                2 min video
              </span>
            </span>
          </button>
        </div>

        {/* Stats */}
        {/* <div className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 lg:mt-6 lg:gap-3">
          {[
            ["10x", "Faster Execution"],
            ["70%", "Cost Optimization"],
            ["100+", "Businesses Trust Us"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="
                min-w-0 rounded-2xl border border-blue-100
                bg-white/80 px-2 py-3
                shadow-[0_8px_30px_rgba(25,80,160,0.06)]
                backdrop-blur sm:px-4
              "
            >
              <div className="text-lg font-black text-blue-600 sm:text-xl">
                {number}
              </div>
              <div className="mt-1 text-sm leading-snug text-slate-500 sm:text-base">
                {label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>

    {/* Image: constrained to its grid cell at every screen size */}
    <div className="relative min-h-0 min-w-0 overflow-hidden">
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-[15%]
          rounded-full bg-blue-200/40 blur-3xl
        "
      />

      <img
        src="/pilot-page-hero-img.png"
        alt="AI Workforce pilot"
        className="
          absolute inset-0 z-10 block h-full w-full
          object-contain object-bottom
          lg:object-center
        "
        fetchPriority="high"
        decoding="async"
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-20
          hidden w-[10%]
          bg-gradient-to-r from-white via-white/70 to-transparent
          lg:block
        "
      />
    </div>
  </div>
</section>
 {/* =====================================================
          WHY START A PILOT + FORM
      ===================================================== */}

   <section
  id="why-us"
  className="relative px-4 sm:px-8 lg:px-12 "
>
  <div
    className="
      mx-auto grid w-full max-w-[1320px]
      grid-cols-1 items-center gap-10
      lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]
      lg:gap-12 xl:gap-16
    "
  >
    {/* Form */}
    <div
      id="pilot-form"
      className="
        relative isolate w-full min-w-0 scroll-mt-24
        rounded-[26px]
        bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600
        p-[2px]
        shadow-[0_20px_65px_-15px_rgba(37,99,235,0.3)]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          rounded-[26px] bg-gradient-to-br
          from-cyan-300/25 to-violet-400/25 blur-xl
        "
      />

      <div className="relative overflow-hidden rounded-[24px] bg-white">
        {/* Form header */}
        <div className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 px-5 py-6">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 sm:tracking-[0.14em]">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-blue-500"
            />
            Start Your Pilot
          </span>

          <h2 className="text-[26px] font-extrabold leading-[1.16] tracking-tight text-[#10204f] sm:text-3xl ">
            Start Your AI Pilot{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Today
            </span>
          </h2>

          <p className="mt-1 text-[15px] leading-[1.5] text-slate-600 sm:text-sm">
            Fill out the form and our team will get in touch to design your
            pilot.
          </p>
        </div>

        {/* Form fields */}
        <div className="p-5">
          {/* Add your existing submission handler to this form. */}
          <form className="space-y-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block min-w-0">
                <span className="mb-1.5 block text-sm font-semibold text-[#10204f]">
                  Full Name <span className="text-blue-600">*</span>
                </span>

                <input
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                  className="
                    h-12 w-full min-w-0 rounded-xl border border-blue-200
                    bg-slate-50/70 px-4 text-base text-[#10204f]
                    outline-none transition placeholder:text-slate-400
                    focus:border-blue-500 focus:bg-white
                    focus:ring-4 focus:ring-blue-100
                  "
                />
              </label>

              <label className="block min-w-0">
                <span className="mb-1.5 block text-sm font-semibold text-[#10204f]">
                  Business Email <span className="text-blue-600">*</span>
                </span>

                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  className="
                    h-12 w-full min-w-0 rounded-xl border border-blue-200
                    bg-slate-50/70 px-4 text-base text-[#10204f]
                    outline-none transition placeholder:text-slate-400
                    focus:border-blue-500 focus:bg-white
                    focus:ring-4 focus:ring-blue-100
                  "
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-[#10204f]">
                Company Name <span className="text-blue-600">*</span>
              </span>

              <input
                name="company"
                type="text"
                autoComplete="organization"
                required
                placeholder="Your company name"
                className="
                  h-12 w-full min-w-0 rounded-xl border border-blue-200
                  bg-slate-50/70 px-4 text-base text-[#10204f]
                  outline-none transition placeholder:text-slate-400
                  focus:border-blue-500 focus:bg-white
                  focus:ring-4 focus:ring-blue-100
                "
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-[#10204f]">
                Use Case <span className="text-blue-600">*</span>
              </span>

              <div className="relative">
                <select
                  name="useCase"
                  defaultValue=""
                  required
                  className="
                    h-12 w-full min-w-0 appearance-none rounded-xl
                    border border-blue-200 bg-slate-50/70
                    pl-4 pr-11 text-base text-[#10204f]
                    outline-none transition invalid:text-slate-400
                    focus:border-blue-500 focus:bg-white
                    focus:ring-4 focus:ring-blue-100
                  "
                >
                  <option value="" disabled>
                    Select your use case
                  </option>
                  <option>AI Automation</option>
                  <option>Customer Support</option>
                  <option>Sales &amp; Marketing</option>
                  <option>Operations</option>
                  <option>Data &amp; Analytics</option>
                  <option>Other</option>
                </select>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-blue-600"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-[#10204f]">
                Your Goals{" "}
                <span className="font-normal text-slate-400">
                  (optional)
                </span>
              </span>

              <textarea
                name="goals"
                rows={3}
                placeholder="What would you like to achieve with AI?"
                className="
                  block min-h-24 w-full resize-y rounded-xl
                  border border-blue-200 bg-slate-50/70
                  p-4 text-base text-[#10204f]
                  outline-none transition placeholder:text-slate-400
                  focus:border-blue-500 focus:bg-white
                  focus:ring-4 focus:ring-blue-100
                "
              />
            </label>

            <button
              type="submit"
              className="
                group flex min-h-14 w-full items-center justify-center gap-3
                rounded-xl bg-gradient-to-r from-blue-600 to-violet-600
                px-5 py-3 text-base font-bold text-white
                shadow-[0_8px_24px_rgba(79,70,229,0.3)]
                transition duration-200 hover:brightness-110
                hover:shadow-[0_12px_30px_rgba(79,70,229,0.4)]
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-blue-600
                motion-safe:hover:-translate-y-0.5
              "
            >
              Request a Pilot
              <span
                aria-hidden="true"
                className="shrink-0 transition-transform motion-safe:group-hover:translate-x-1"
              >
                <ArrowRight />
              </span>
            </button>
          </form>

          <div className="mt-5 flex items-start justify-center gap-2 text-center text-sm leading-6 text-slate-500 sm:text-base">
            <span aria-hidden="true" className="shrink-0">
              🔒
            </span>
            <span>
              Your information is secure and will never be shared.
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Benefits */}
    <div className="w-full min-w-0">
      <SectionTitle title="Why Start a Pilot?">
        <p className="mt-3 max-w-[560px] text-[15px] leading-[1.55] text-slate-500 sm:text-base lg:text-lg">
          A simple way to experience real value before you scale.
        </p>
      </SectionTitle>

      <div
        className="
          mt-6 grid grid-cols-1 gap-4
          sm:grid-cols-2 lg:mt-8 xl:gap-5
          [&>*]:h-full [&>*]:min-w-0
        "
      >
        <ValueCard
          icon={<Target />}
          title="Validate Real Impact"
          text="See tangible results in your environment."
        />

        <ValueCard
          icon={<Bulb />}
          title="Discover New Opportunities"
          text="Uncover AI use cases unique to your business."
        />

        <ValueCard
          icon={<Users />}
          title="Build Team Confidence"
          text="Get your people comfortable with AI."
        />

        <ValueCard
          icon={<Chart />}
          title="Create a Scalable Roadmap"
          text="Turn pilot success into long-term growth."
        />
      </div>
    </div>
  </div>
</section>
      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section id="solutions" className="relative my-3 px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px] rounded-[24px] border border-blue-100 bg-white p-6 shadow-[0_15px_50px_rgba(32,83,150,0.07)] sm:p-8 lg:p-9">
          <SectionTitle title="How It Works">
            <p className="mt-2 text-[15px] leading-[1.5] text-slate-500 sm:text-base lg:text-lg">
              From pilot to impact — in just a few simple steps.
            </p>
          </SectionTitle>

          <div className="mt-10 grid gap-9 md:grid-cols-4 md:gap-4">
            <div className="relative ">
              <Step
                number="01"
                icon={<Document />}
                title="Tell Us Your Goals"
                text="Share your use case and business needs."
              />

              <div className="absolute right-0 top-8 hidden text-6xl text-blue-500 md:block">
                →
              </div>
            </div>

            <div className="relative">
              <Step
                number="02"
                icon={<Gear />}
                title="We Set Up the Pilot"
                text="Our team configures a tailored AI solution."
              />

              <div className="absolute right-0 top-8 hidden text-6xl text-blue-500 md:block">
                →
              </div>
            </div>

            <div className="relative">
              <Step
                number="03"
                icon={<Chart />}
                title="Test & Measure"
                text="Run the pilot and track real results."
              />

              <div className="absolute right-0 top-8 hidden text-6xl text-blue-500 md:block">
                →
              </div>
            </div>

            <Step
              number="04"
              icon={<Rocket />}
              title="Scale with Confidence"
              text="Expand what works across your business."
            />
          </div>
        </div>
      </section>

     

      {/* =====================================================
          TRUSTED COMPANIES
      ===================================================== */}

      <section id="resources" className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-7 text-center text-sm font-extrabold uppercase tracking-[0.22em] text-slate-400 sm:text-base sm:tracking-[0.3em]">
            Trusted by forward-thinking companies
          </div>

          <div className="grid grid-cols-2 items-center gap-6 text-center sm:grid-cols-3 sm:gap-7 md:grid-cols-4 lg:grid-cols-7">
            {[
              "Microsoft",
              "Google",
              "amazon",
              "Meta",
              "slack",
              "shopify",
              "HubSpot",
            ].map((company) => (
              <div
                key={company}
                className="text-base font-bold tracking-tight text-slate-400 transition hover:text-slate-600 sm:text-xl lg:text-2xl"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

    <section className="px-4 pb-8 sm:px-6 sm:pb-10 lg:px-12">
  <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[20px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-12 text-center sm:rounded-[24px] sm:px-10 sm:py-14">

    {/* LEFT IMAGE - 50% */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2">
      <img
        src="/pilot-page-cta-left-img.png"
        alt=""
        className="h-full w-full object-cover object-left"
      />
    </div>

    {/* RIGHT IMAGE - 50% */}
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2">
      <img
        src="/pilot-page-cta-right-img.png"
        alt=""
        className="h-full w-full object-cover object-right"
      />
    </div>

    {/* Responsive blend */}
{/* Soft center blend to hide image seam */}
<div className="pointer-events-none absolute inset-y-0 left-1/2 z-[5] w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/90 to-transparent blur-md" />
    {/* CONTENT */}
    <div className="relative z-10 mx-auto max-w-[800px]">
      
      <div className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-slate-500 sm:text-base sm:tracking-[0.3em]">
        Small steps. Bigger futures.
      </div>

      <h2 className="text-[28px] font-black leading-[1.12] tracking-tight text-[#10204f] sm:text-4xl md:text-5xl lg:text-6xl">
        Start Your{" "}
        <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
          Pilot Today
        </span>
      </h2>

      <p className="mx-auto mt-3 max-w-[650px] text-[15px] leading-[1.55] text-slate-500 sm:mt-4 sm:text-base lg:text-lg">
        Test the possibilities. Unlock real value. Build your AI-powered
        future.
      </p>

      <a
        href="#pilot-form"
        className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3 text-sm font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:shadow-2xl sm:mt-7 sm:px-8 sm:text-base"
      >
        Get Started
        <ArrowRight />
      </a>
    </div>
  </div>
</section>
      
    </main>
  );
}