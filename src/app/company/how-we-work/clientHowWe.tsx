"use client";

import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Code2,
  Handshake,
  Lightbulb,
  Menu,
  MessageCircle,
  Play,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  FileText,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   PAGE
========================================================= */

export default function HowWeWorkPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[var(--color-heading)]">
  

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden rounded-b-2xl bg-[linear-gradient(105deg,#ffffff_0%,#f9fbff_48%,#edf2ff_100%)]">
        {/* Background glow */}

        <div className="pointer-events-none absolute -right-40 -top-32 -z-10 size-[32rem] rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl lg:min-h-[34rem] lg:grid-cols-[0.98fr_1.02fr]">
          {/* Hero Copy */}

          <div className="relative z-20 px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-14 lg:px-8 lg:py-14 xl:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Our Process. Your Progress.
            </p>

            <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[0.94] tracking-tight text-[var(--color-heading)] sm:text-6xl lg:text-7xl">
              How We{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-violet-600)] to-[var(--color-primary)] bg-clip-text text-transparent">
                Work
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-text)] sm:text-xl lg:text-2xl">
              A clear, collaborative, and results-driven
              process to help you unlock the full potential
              of AI for your business.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="/book-demo"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-violet-600)] px-5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,0.2)] transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
              >
                Book a Free Consultation
                <ArrowRight className="size-4" />
              </a>

              <a
                href="#process"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--color-violet-600)]/50 bg-white/80 px-5 text-sm font-bold text-[var(--color-heading)] transition hover:bg-white sm:px-6 sm:text-base"
              >
                <span className="grid size-6 place-items-center rounded-full bg-indigo-50 text-[var(--color-primary)]">
                  <Play className="size-3 fill-current" />
                </span>
                Watch How It Works
              </a>
            </div>

            {/* Hero Statistics */}

            <div className="mt-9 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0">
              {/* Stat 1 */}

              <div className="flex items-center gap-3 sm:pr-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <Handshake className="size-6 sm:size-7" />
                </span>

                <div>
                  <div className="text-2xl font-bold leading-none text-[var(--color-primary)] sm:text-3xl">
                    500+
                  </div>

                  <div className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Projects Delivered
                  </div>
                </div>
              </div>

              {/* Stat 2 */}

              <div className="flex items-center gap-3 border-l border-indigo-100 pl-4 sm:pr-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <Users className="size-6 sm:size-7" />
                </span>

                <div>
                  <div className="text-2xl font-bold leading-none text-[var(--color-primary)] sm:text-3xl">
                    98%
                  </div>

                  <div className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* Stat 3 */}

              <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4 sm:pr-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <Clock3 className="size-6 sm:size-7" />
                </span>

                <div>
                  <div className="text-2xl font-bold leading-none text-[var(--color-primary)] sm:text-3xl">
                    2–6
                  </div>

                  <div className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Weeks
                    <br className="sm:hidden" />
                    <span className="hidden sm:inline">
                      {" "}
                    </span>
                    Average Time to Deploy
                  </div>
                </div>
              </div>

              {/* Stat 4 */}

              <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <BarChart3 className="size-6 sm:size-7" />
                </span>

                <div>
                  <div className="text-2xl font-bold leading-none text-[var(--color-primary)] sm:text-3xl">
                    Real
                  </div>

                  <div className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Measurable Results
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}

          <div className="relative min-h-[22rem] sm:min-h-[29rem] lg:min-h-0">
            <div className="absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />

            <img
              src="/images/how-it-works/how-it-works-hero.webp"
              alt="AI WorksForce team collaborating"
              className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[40rem] object-contain"
            />

            {/* Handwritten annotation */}

            <div className="absolute right-5 top-16 z-20 hidden rotate-[-4deg] font-hand text-2xl leading-tight text-[var(--color-primary)] lg:block">
              Plan
              <br />
              Build
              <br />
              Automate
              <br />
              Grow
              <br />
              Together
            </div>

            {/* Hero result card */}

            <div className="absolute bottom-5 right-0 z-30 hidden w-52 rounded-xl bg-white/95 p-4 shadow-[0_12px_35px_rgba(24,74,140,0.12)] sm:block">
              <div className="flex gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)]">
                  <Lightbulb className="size-6" />
                </span>

                <div>
                  <h3 className="text-sm font-bold leading-tight text-[var(--color-heading)] sm:text-base">
                    From Ideas
                    <br />
                    to Impact
                    <br />
                    Together
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        id="process"
        className="mx-auto max-w-7xl px-5 py-11 sm:px-7 lg:px-8 lg:py-14"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
            Our Work Process
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            From Understanding to Lasting Impact
          </h2>

          <p className="mt-3 text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:text-xl">
            We follow a proven, collaborative process to ensure
            every solution is tailored, effective, and aligned
            with your business goals.
          </p>
        </div>

        {/* Process Steps */}

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
          {[
            {
              number: "01",
              title: "Discover",
              icon: MessageCircle,
              text: "We understand your business, goals, and challenges.",
            },
            {
              number: "02",
              title: "Analyze",
              icon: Search,
              text: "We assess opportunities, processes, and data to find the right use cases.",
            },
            {
              number: "03",
              title: "Design",
              icon: FileText,
              text: "We create a tailored AI strategy and solution blueprint.",
            },
            {
              number: "04",
              title: "Build",
              icon: Settings,
              text: "We develop and configure AI solutions, agents, and automations.",
            },
            {
              number: "05",
              title: "Deploy",
              icon: Rocket,
              text: "We launch, integrate, and ensure smooth adoption.",
            },
            {
              number: "06",
              title: "Optimize",
              icon: BarChart3,
              text: "We monitor performance, refine, and scale for long-term success.",
            },
          ].map((step, index) => {
            const StepIcon = step.icon;

            return (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Arrow */}

                {index < 5 && (
                  <div className="absolute left-[calc(50%+2.75rem)] top-7 hidden w-[calc(100%-2.5rem)] items-center lg:flex">
                    <div className="h-px flex-1 bg-indigo-200" />
                    <ArrowRight className="size-4 shrink-0 text-[var(--color-primary)]" />
                  </div>
                )}

                <div className="relative z-10 mx-auto grid size-14 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-16">
                  <StepIcon className="size-7 sm:size-8" />
                </div>

                <p className="mt-3 text-xs font-bold text-[var(--color-primary)] sm:text-sm">
                  {step.number}
                </p>

                <h3 className="mt-1 text-lg font-bold leading-tight text-[var(--color-heading)] sm:text-xl">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-40 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          DIFFERENT APPROACH
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-11 sm:px-7 lg:px-8 lg:pb-14">
        <div className="grid overflow-hidden rounded-2xl bg-[var(--color-blue-50)] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              What Makes Our Approach Different
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              Built Around Your Business
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
              We don&apos;t believe in one-size-fits-all. Our
              process is designed to be flexible, transparent,
              and focused on real business outcomes.
            </p>

            {/* Feature cards */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  title: "Collaborative Approach",
                  text: "We work with your team at every step.",
                },
                {
                  icon: Target,
                  title: "Tailored Solutions",
                  text: "Custom strategies for your unique needs.",
                },
                {
                  icon: FileText,
                  title: "Transparent Process",
                  text: "Clear communication and regular updates.",
                },
                {
                  icon: Handshake,
                  title: "Long-Term Partnership",
                  text: "We grow with you beyond the initial implementation.",
                },
              ].map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl bg-white p-4 sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                        <ItemIcon className="size-6" />
                      </span>

                      <div>
                        <h3 className="text-sm font-bold text-[var(--color-heading)] sm:text-base">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}

          <div className="relative min-h-[25rem] lg:min-h-full">
            <img
              src="/images/how-it-works/how-it-works-office.webp"
              alt="AI WorksForce workspace"
              className="absolute inset-0 size-full object-cover"
            />

            {/* Dark blue panel */}

            <div className="absolute bottom-0 right-0 m-0 w-full bg-gradient-to-r from-[var(--color-heading)] to-[var(--color-primary)] p-7 text-white sm:m-5 sm:w-64 sm:rounded-xl sm:p-7 lg:m-0 lg:w-56 lg:rounded-none lg:rounded-tl-xl lg:p-8 xl:w-64">
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                Our Goal
                <br />
                Your Growth
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-blue-50 sm:text-base">
                We combine people, processes, and AI to create
                solutions that deliver real, measurable impact.
              </p>

              <a
                href="/company/about"
                className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-5 text-sm font-bold text-[var(--color-heading)]"
              >
                Our Story
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROVEN RESULTS
      ====================================================== */}

      <section className="mx-5 max-w-7xl rounded-2xl bg-blue-50/80 sm:mx-7 lg:mx-auto lg:px-2">
        <div className="grid gap-8 px-6 py-7 sm:px-8 sm:py-9 lg:grid-cols-[1.15fr_1.85fr] lg:items-center lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Proven Results
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl">
              Trusted by Businesses
              <br />
              Across Industries
            </h2>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
              Our process has helped hundreds of businesses
              automate, scale, and achieve real results with AI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-0">
            {[
              {
                icon: Building2Icon,
                value: "500+",
                label: "Businesses Empowered",
              },
              {
                icon: Bot,
                value: "250+",
                label: "AI Solutions Deployed",
              },
              {
                icon: BarChart3,
                value: "98%",
                label: "Client Retention",
              },
              {
                icon: Star,
                value: "4.9/5",
                label: "Average Rating",
              },
            ].map((item, index) => {
              const ItemIcon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`text-center ${
                    index > 1
                      ? "border-l border-indigo-100 pl-3"
                      : ""
                  }`}
                >
                  <span className="mx-auto grid size-12 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)]">
                    <ItemIcon className="size-6" />
                  </span>

                  <p className="mt-3 text-2xl font-bold leading-none text-[var(--color-primary)] sm:text-3xl">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-7 lg:px-8 lg:py-8">
        <div className="grid items-center gap-6 rounded-2xl bg-blue-50/70 px-6 py-7 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-10">
          {/* Person */}

          <div className="flex items-center gap-4">
            <img
              src="/images/testimonials/rahul-mehta.webp"
              alt="Rahul Mehta"
              className="size-20 rounded-full border-4 border-white object-cover shadow-md sm:size-24"
            />
          </div>

          {/* Quote */}

          <div className="max-w-2xl">
            <div className="text-5xl font-bold leading-none text-[var(--color-primary)]">
              “
            </div>

            <p className="mt-1 text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
              The AIWorksForce team made the entire process
              seamless. From understanding our needs to
              deployment and support, they were with us at
              every step. The results have been incredible.
            </p>

            <div className="mt-3">
              <p className="text-sm font-bold text-[var(--color-heading)] sm:text-base">
                Rahul Mehta
              </p>

              <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                CEO, GrowthTech (SaaS)
              </p>
            </div>
          </div>

          {/* Annotation */}

          <div className="hidden border-l border-indigo-200 pl-8 font-hand text-2xl leading-tight text-[var(--color-primary)] lg:block">
            Real
            <br />
            Partnerships
            <br />
            Real Impact
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative isolate mx-1 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07154d] via-[#0b176f] to-[#2437e9] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-9">
        {/* Background pattern */}

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

        <div className="mx-auto grid max-w-6xl items-center gap-7 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
              Ready to See How We Work?
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Let&apos;s Build Your AI Success Story Together
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
              Talk to our experts and discover how our process
              can help your business grow.
            </p>
          </div>

          <a
            href="/book-demo"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-[var(--color-heading)] shadow-lg transition hover:-translate-y-0.5 sm:text-base"
          >
            Book a Free Consultation
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

    </main>
  );
}

/* =========================================================
   SMALL INLINE ICON
========================================================= */

function Building2Icon({
  className,
}: {
  className?: string;
}) {
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
      <path d="M3 21h18" />
      <path d="M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
      <path d="M16 9h3a2 2 0 0 1 2 2v10" />
      <path d="M9 7h2" />
      <path d="M9 11h2" />
      <path d="M9 15h2" />
    </svg>
  );
}