"use client";

import PageHero from "@/components/company-hero/reusable-hero";
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
<PageHero
  titleId="how-we-work-hero-title"
  eyebrow="Our Process. Your Progress."
  title="How We"
  highlightedTitle="Work"
  description="A collaborative and results-driven process to help businesses unlock the full potential of AI."
  image="/company-images/how-we-work-company-hero.png"
  imageAlt="AI WorksForce team collaborating"
  primaryAction={{
    label: "Book a Free Consultation",
    href: "/book-demo",
    icon: "arrow",
  }}
  secondaryAction={{
    label: "Watch How It Works",
    href: "#process",
    icon: "play",
  }}
  stats={[
    {
      icon: "users",
      value: "500+",
      label: "Projects Delivered",
    },
    {
      icon: "users",
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      icon: "clock",
      value: "2–6",
      label: "Weeks Average Time to Deploy",
    },
    {
      icon: "chart",
      value: "Real",
      label: "Measurable Results",
    },
  ]}
  resultCard={{
    icon: "lightbulb",
    lines: [
      "From Ideas",
      "to Impact",
      "Together",
    ],
  }}
/>

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
            We follow a proven process to ensure every solution is tailored, effective, and aligned with business goals.
          </p>
        </div>

        {/* Process Steps */}

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
          {[
            {
              number: "01",
              title: "Discover",
              icon: MessageCircle,
              text: "We understand business, goals, and challenges.",
            },
            {
              number: "02",
              title: "Analyze",
              icon: Search,
              text: "We assess opportunities, processes, and data to find the use cases.",
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
              text: "We configure AI solutions, agents, and automations.",
            },
            {
              number: "05",
              title: "Deploy",
              icon: Rocket,
              text: "We launch. Ensure smooth adoption.",
            },
            {
              number: "06",
              title: "Optimize",
              icon: BarChart3,
              text: "We monitor performance and refine and scale for long-term success.",
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

     <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
  <div className="mx-auto grid max-w-7xl items-stretch gap-4 lg:grid-cols-[1.03fr_1fr]">
    <div className="rounded-xl bg-linear-to-br from-[#f4faff] to-[#f0f8ff] p-5 sm:p-6">
      <p className="text-xs leading-5 font-bold tracking-[0.2em] text-[#2100ed]">
        WHAT MAKES OUR APPROACH DIFFERENT
      </p>

      <h2 className="mt-2 text-3xl leading-tight font-bold tracking-[-0.04em] text-[#09065b] sm:text-4xl">
        Built Around Your Business
      </h2>

      <p className="mt-3 text-base leading-relaxed text-[#5143a0] sm:text-lg">
        We do not believe in one-size-fits-all. Our process is designed to be flexible, transparent, and focused on business outcomes.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          {
            title: "Collaborative Approach",
            description: "We work with the client team at every step.",
            icon: (
              <>
                <circle cx="9" cy="7" r="4" />
                <path d="M1 21v-3a8 8 0 0 1 16 0v3H1Z" />
                <path d="M16 3a4 4 0 0 1 0 8V3Zm3 10a7 7 0 0 1 4 6v2h-4v-3a10 10 0 0 0-1-4.4l1-.6Z" />
              </>
            ),
          },
          {
            title: "Tailored Solutions",
            description: "Custom strategies for client needs.",
            icon: (
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-9-9" />
                <path d="M16.5 12a4.5 4.5 0 1 1-4.5-4.5" />
                <path d="m12 12 8-8M16 4h4v4" />
              </g>
            ),
          },
          {
            title: "Transparent Process",
            description: "Clear. Regular updates.",
            icon: (
              <>
                <path d="M5 2h9l5 5v15H5V2Z" />
                <path
                  d="M14 2v6h5M8 12h8M8 16h8"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </>
            ),
          },
          {
            title: "Long-Term Partnership",
            description: "We grow with the client beyond the implementation.",
            icon: (
              <>
                <path d="m2 5 5-2 4 2-5 5 4 4a3 3 0 0 0 4 0l3-3 5 5-7 6-9-7-4-1V5Z" />
                <path d="m13 4 4-1 5 3v8l-5-5-5 4a1.5 1.5 0 0 1-2-2l5-5-2-2Z" />
              </>
            ),
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-3 rounded-xl bg-white p-4"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#eeebff] text-[#2300ed]">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="size-8"
              >
                {feature.icon}
              </svg>
            </div>

            <div className="min-w-0 pt-0.5">
              <h3 className="text-base leading-snug font-semibold tracking-tight text-[#09065b]">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-[#5a4ba3]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

   <div className="grid min-h-100 grid-cols-[58%_42%] overflow-hidden rounded-xl">
  {/* Separate image */}
  <div className="relative min-h-100 overflow-hidden bg-[#e5e9ed]">
    <img
      src="/company-images/how-we-work-company-bottom.png"
      alt="Modern office workspace"
      loading="lazy"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  </div>

  {/* Separate blue box */}
  <div className="flex flex-col justify-center bg-linear-to-br from-[#0739b8] via-[#031a76] to-[#020b47] px-4 py-8 text-white sm:px-7">
    <h3 className="text-3xl leading-[1.1] font-semibold tracking-[-0.04em] sm:text-[2rem]">
      Our Goal
      <br />
      Your Growth
    </h3>

    <p className="mt-5 text-base leading-relaxed text-white/95">
      We combine people, processes, and AI to create solutions that deliver measurable impact.
    </p>

    <a
      href="/our-story"
      className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-3 py-3 text-base font-semibold text-[#09065b] transition-colors hover:bg-[#f0eeff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      Our Story
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-5 shrink-0 text-[#2300ed]"
      >
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
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
              Our process has helped hundreds of businesses automate, scale, and achieve results with AI.
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
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              The AIWorksForce team made the entire process seamless. From understanding client needs to deployment and support, they were with the client at every step. The results have been incredible.
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

      <section className="relative isolate mx-1 my-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07154d] via-[#0b176f] to-[#2437e9] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-9">
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
              Talk to our experts and discover how our process can help businesses grow.
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