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
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
          {eyebrow}
        </div>
      )}

      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#10204f] sm:text-4xl">
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
        <div className="text-sm font-bold text-[#152451]">{title}</div>
        <div className="text-xs text-slate-500">{text}</div>
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

      <h3 className="mb-2 text-base font-bold text-[#14234f]">{title}</h3>

      <p className="max-w-[210px] text-sm leading-5 text-slate-500">
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

      <h3 className="mb-2 text-sm font-bold text-[#14234f]">{title}</h3>

      <p className="text-sm leading-5 text-slate-500">{text}</p>
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

      <section className="relative overflow-hidden">
        {/* Background decorations */}
        {/* <div className="pointer-events-none absolute -right-32 -top-48 h-[650px] w-[650px] rounded-full bg-blue-100/50 blur-3xl" /> */}

        {/* <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-50 blur-3xl" /> */}

        {/* <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-50 blur-3xl" /> */}

<div className="relative  min-h-[700px] max-w-[1350px] px-5 pb-12 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pb-16 lg:pt-16">          {/* Hero content */}
          <div className="relative z-10 pl-10">
            <div className="mb-5 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
                Start a Pilot
              </span>

              <span className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-blue-600" />
            </div>

            <h1 className="max-w-[650px] text-[45px] font-black leading-[0.98] tracking-[-0.04em] text-[#101f4e] sm:text-6xl lg:text-[68px]">
              Turn Ideas into
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>

            <p className="mt-6 max-w-[590px] text-base leading-7 text-slate-600 sm:text-lg">
              Experience the power of AI Workforce with a low-risk,
              high-impact pilot. Test, learn, and scale with confidence.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid max-w-[650px] gap-5 sm:grid-cols-3">
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
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#pilot-form"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 text-sm font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Start Your Pilot
                <ArrowRight />
              </a>

              <button className="group flex items-center gap-3 text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-blue-600 transition group-hover:bg-blue-50">
                  <Play />
                </span>

                <span>
                  <span className="block text-sm font-bold text-[#14234f]">
                    Watch How It Works
                  </span>

                  <span className="block text-xs text-slate-500">
                    2 min video
                  </span>
                </span>
              </button>
            </div>

            {/* Hero stats */}
            <div className="mt-8 grid max-w-[700px] gap-3 sm:grid-cols-3">
              {[
                ["10x", "Faster Execution"],
                ["70%", "Cost Optimization"],
                ["100+", "Businesses Trust Us"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-blue-100 bg-white/80 px-4 py-3 shadow-[0_8px_30px_rgba(25,80,160,0.06)] backdrop-blur"
                >
                  <div className="text-xl font-black text-blue-600">
                    {number}
                  </div>

                  <div className="text-xs text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

        {/* Hero image */}
<div className="relative mt-10 min-h-[430px] sm:min-h-[560px] lg:absolute lg:right-[-80px] lg:top-1/2 lg:mt-0 lg:w-[720px] lg:-translate-y-1/2 xl:right-[-120px] xl:w-[800px]">
  {/* Glow */}
  <div className="absolute right-[10%] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-blue-200/40 blur-3xl" />

  <img
    src="/pilot-page-hero-img.png"
    alt="AI Workforce pilot"
    className="relative z-10 ml-auto w-full object-contain"
  />
  {/* Left-side blend */}
  <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[12%] bg-gradient-to-r from-white via-white/70 to-transparent" />
</div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section id="solutions" className="relative px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px] rounded-[24px] border border-blue-100 bg-white p-6 shadow-[0_15px_50px_rgba(32,83,150,0.07)] sm:p-8 lg:p-9">
          <SectionTitle title="How It Works">
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
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
          WHY START A PILOT + FORM
      ===================================================== */}

      <section id="why-us" className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Left */}
          <div>
            <SectionTitle title="Why Start a Pilot?">
              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                A simple way to experience real value before you scale.
              </p>
            </SectionTitle>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
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

          {/* Form */}
          <div
            id="pilot-form"
            className="rounded-[22px] border border-blue-100 bg-white p-6 shadow-[0_15px_50px_rgba(32,83,150,0.1)] sm:p-7"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-[#10204f]">
              Start Your AI Pilot Today
            </h2>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Fill out the form and our team will get in touch to design your
              pilot.
            </p>

            <form className="mt-6 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="h-12 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-[#10204f] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />

                <input
                  type="email"
                  placeholder="Business Email*"
                  className="h-12 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-[#10204f] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <input
                type="text"
                placeholder="Company Name*"
                className="h-12 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm text-[#10204f] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              />

              <select
                defaultValue=""
                className="h-12 w-full appearance-none rounded-xl border border-blue-100 bg-white px-4 text-sm text-slate-500 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              >
                <option value="" disabled>
                  Select Use Case*
                </option>
                <option>AI Automation</option>
                <option>Customer Support</option>
                <option>Sales & Marketing</option>
                <option>Operations</option>
                <option>Data & Analytics</option>
                <option>Other</option>
              </select>

              <textarea
                rows={3}
                placeholder="Tell us about your goals"
                className="w-full resize-none rounded-xl border border-blue-100 bg-white p-4 text-sm text-[#10204f] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              />

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Request a Pilot
                <ArrowRight />
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <span>🔒</span>
              Your information is secure and will never be shared.
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUSTED COMPANIES
      ===================================================== */}

      <section id="resources" className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-7 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
            Trusted by forward-thinking companies
          </div>

          <div className="grid grid-cols-2 items-center gap-7 text-center sm:grid-cols-4 lg:grid-cols-7">
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
                className="text-xl font-bold tracking-tight text-slate-400 transition hover:text-slate-600 sm:text-2xl"
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
      
      <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-[10px] sm:tracking-[0.32em]">
        Small steps. Bigger futures.
      </div>

      <h2 className="text-3xl font-black tracking-tight text-[#10204f] sm:text-4xl md:text-5xl">
        Start Your{" "}
        <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
          Pilot Today
        </span>
      </h2>

      <p className="mx-auto mt-3 max-w-[650px] text-xs leading-6 text-slate-500 sm:mt-4 sm:text-sm md:text-base">
        Test the possibilities. Unlock real value. Build your AI-powered
        future.
      </p>

      <a
        href="#pilot-form"
        className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-7 text-xs font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:shadow-2xl sm:mt-7 sm:h-12 sm:px-8 sm:text-sm"
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