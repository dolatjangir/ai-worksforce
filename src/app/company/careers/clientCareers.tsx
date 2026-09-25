"use client";

import PageHero from "@/components/company-hero/reusable-hero";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Globe2,
  Heart,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Play,
  Rocket,
  Sparkles,
  Star,
  Users,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";


/* =========================================================
   WHY WORK WITH US
========================================================= */

const benefits = [
  {
    icon: Rocket,
    title: "Work on Real Impact",
    description:
      "Be part of projects that solve business challenges with AI.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Continuous Learning",
    description:
      "Access to training, mentorship, and the latest AI tools and technologies.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description:
      "A supportive, diverse, and collaborative work environment.",
  },
  {
    icon: BarChart3,
    title: "Growth Opportunities",
    description:
      "Clear career. Opportunities to take on new challenges.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Flexible work. A culture that values your well-being.",
  },
];

/* =========================================================
   JOBS
========================================================= */

const departments = [
  {
    name: "All Departments",
    count: 12,
    active: true,
  },
  {
    name: "Engineering",
    count: 4,
  },
  {
    name: "Product",
    count: 2,
  },
  {
    name: "Sales & Growth",
    count: 2,
  },
  {
    name: "Marketing",
    count: 2,
  },
  {
    name: "Operations",
    count: 1,
  },
  {
    name: "People & Culture",
    count: 1,
  },
];

const jobs = [
  {
    title: "AI/ML Engineer",
    slug: "ai-ml-engineer",
    department: "Engineering",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-time",
    icon: Rocket,
  },
  {
    title: "AI Operator",
    slug: "ai-operator",
    department: "Operations",
    location: "Remote / India",
    type: "Full-time",
    icon: Users,
  },
  {
    title: "AI Specialist",
    slug: "ai-specialist",
    department: "AI Solutions",
    location: "Jaipur, India (Hybrid)",
    type: "Full-time",
    icon: BriefcaseBusiness,
  },
  {
    title: "Digital Marketing Specialist",
    slug: "digital-marketing-specialist",
    department: "Marketing",
    location: "Remote / India",
    type: "Full-time",
    icon: BarChart3,
  },

 
];

/* =========================================================
   HIRING PROCESS
========================================================= */

const hiringSteps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your application in a minute.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Screening",
    description:
      "We review your profile. Get in touch.",
    icon: Users,
  },
  {
    number: "03",
    title: "Interviews",
    description:
      "Meet our team. Showcase your skills.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Offer",
    description:
      "We will make an offer. Welcome you aboard!",
    icon: CheckCircle2,
  },
];

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-7 lg:px-8 lg:py-11">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.9fr]">
          {/* Brand */}

          <div>
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-[var(--color-heading)] sm:text-3xl"
            >
              <span className="text-[var(--color-primary)]">
                AI
              </span>{" "}
              WorksForce
            </a>

            <p className="mt-1 text-xs text-[var(--color-text-muted)] sm:text-sm">
              Automate. Accelerate. Grow.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-text)] sm:text-base lg:text-lg">
              Empowering businesses with AI automation,
              intelligent agents, and modern workflows for a
              smarter tomorrow.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="/"
                  className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] sm:text-base"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/company/about"
                  className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] sm:text-base"
                >
                  About AIWorksForce
                </a>
              </li>

              <li>
                <a
                  href="/company/our-team"
                  className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] sm:text-base"
                >
                  Our Team
                </a>
              </li>

              <li>
                <a
                  href="/company/careers"
                  className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] sm:text-base"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="/resources"
                  className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] sm:text-base"
                >
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}

          <div>
            <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">
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
                    className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">
              Connect With Us
            </h3>

            <div className="mt-4 flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[var(--color-heading)] transition hover:text-[var(--color-primary)]"
              >
                <Linkedin className="size-6" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="text-[var(--color-heading)] transition hover:text-[var(--color-primary)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.258 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="text-[var(--color-heading)] transition hover:text-[var(--color-primary)]"
              >
                <Youtube className="size-6" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-[var(--color-heading)] transition hover:text-[var(--color-primary)]"
              >
                <Instagram className="size-6" />
              </a>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
              Let&apos;s build a smarter future together.
            </p>

            <a
              href="/company/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] sm:text-base"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-4 border-t border-slate-100 pt-5 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2024 AIWorksForce. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/privacy-policy"
              className="hover:text-[var(--color-primary)]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="hover:text-[var(--color-primary)]"
            >
              Terms of Service
            </a>

            <a
              href="/company/contact"
              className="hover:text-[var(--color-primary)]"
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

export default function CareersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [activeDepartment, setActiveDepartment] =
    useState("All Departments");

  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[var(--color-heading)]">
   

      {/* =====================================================
          HERO
      ====================================================== */}

    <PageHero
  titleId="careers-hero-title"
  eyebrow="Build Your Future With AI."
  title="Careers at"
  highlightedTitle="AIWorksForce"
  description="Join a team of innovators, builders, and problem‑solvers who are using AI to create a more efficient tomorrow."
  image="/company-images/careers-company-hero.png"
  imageAlt="AIWorksForce team working together"
  primaryAction={{
    label: "See Open Positions",
    href: "#open-positions",
    icon: "arrow",
  }}
  secondaryAction={{
    label: "Watch Our Culture Video",
    href: "#culture",
    icon: "play",
  }}
  stats={[
    {
      icon: "users",
      value: "50+",
      label: "Team Members",
    },
    {
      icon: "globe",
      value: "5+",
      label: "Locations",
    },
    {
      icon: "lightbulb",
      value: "100+",
      label: "Projects Delivered",
    },
    {
      icon: "heart",
      value: "Great",
      label: "Place to Work",
    },
  ]}
  resultCard={{
    icon: "users",
    lines: [
      "Grow",
      "Learn",
      "Make an Impact",
      "Together",
    ],
  }}
/>

  {/* =====================================================
          OPEN POSITIONS
      ====================================================== */}

      <section
        id="open-positions"
        className="mx-auto max-w-7xl px-5 pb-12 sm:px-7 lg:px-8 lg:py-10"
      >
        {/* Heading */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Open Positions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              Find Your Next Opportunity
            </h2>

            <p className="mt-2 text-base text-[var(--color-text)] sm:text-lg">
              Explore roles across engineering, product, design,
              marketing, and more.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] sm:text-base"
          >
            View All Jobs
            <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Jobs Area */}

        <div className="mt-7 grid gap-5 lg:grid-cols-[13rem_1fr]">
          {/* Departments */}

          <aside className="rounded-lg bg-[var(--color-blue-50)] p-2 sm:p-3">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
              {departments.map((department) => {
                const active =
                  activeDepartment === department.name;

                return (
                  <button
                    key={department.name}
                    type="button"
                    onClick={() =>
                      setActiveDepartment(department.name)
                    }
                    className={[
                      "flex min-w-max items-center justify-between gap-6 rounded-lg px-3 py-2.5 text-left text-sm transition sm:px-4 sm:py-3 sm:text-base lg:w-full",
                      active
                        ? "bg-[var(--color-primary)] font-semibold text-white shadow-sm"
                        : "text-[var(--color-text)] hover:bg-white hover:text-[var(--color-primary)]",
                    ].join(" ")}
                  >
                    <span>{department.name}</span>

                    <span
                      className={
                        active
                          ? "text-white"
                          : "text-[var(--color-text-muted)]"
                      }
                    >
                      {department.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Job List */}

          <div className="space-y-3">
            {jobs.map((job) => {
              const JobIcon = job.icon;

              return (
                <article
                  key={job.title}
                  className="group rounded-xl border border-blue-100 bg-white p-4 shadow-[0_4px_18px_rgba(24,74,140,0.05)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg sm:p-5"
                >
                  <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-50 text-[var(--color-primary)]">
                          <JobIcon className="size-5" />
                        </span>

                        <h3 className="text-base font-bold tracking-tight text-[var(--color-heading)] sm:text-lg">
                          {job.title}
                        </h3>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 pl-0 text-xs text-[var(--color-text-muted)] sm:text-sm lg:pl-13">
                        <span className="inline-flex items-center gap-1.5">
                          <BriefcaseBusiness className="size-4" />
                          {job.department}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-4" />
                          {job.location}
                        </span>

                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 className="size-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-3 lg:border-0 lg:pt-0">
                      <ChevronRight className="hidden size-5 text-[var(--color-primary)] lg:block" />

                   {/* href={`/company/careers/${job.title
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")}`} */}

                      <Link
                        href={`/company/careers/apply-now?job=${job.slug}`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-violet-600)] px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 sm:px-5"
                      >
                        Apply Now
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* =====================================================
          WHY WORK WITH US
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-11 sm:px-7 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
            Why Work With Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            More Than a Job. A Meaningful Career.
          </h2>

          <p className="mt-3 text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
            We&apos;re building the future with AI, and we want
            great people like you to be part of it.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-xl bg-[var(--color-blue-50)] px-5 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-6"
              >
                <span className="grid size-12 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-14">
                  <BenefitIcon className="size-6 sm:size-7" />
                </span>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-[var(--color-heading)] sm:text-xl">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

    

      {/* =====================================================
          HIRING PROCESS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-7 lg:px-8 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.7fr] lg:items-start">
          {/* Intro */}

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Our Hiring Process
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl">
              A Simple Transparent Process
            </h2>

            <p className="mt-2 text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
              We keep it straightforward, respectful, and human.
            </p>
          </div>

          {/* Steps */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >
                  <div className="mx-auto grid size-14 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-16">
                    <StepIcon className="size-7 sm:size-8" />
                  </div>

                  <p className="mt-3 text-xs font-bold text-[var(--color-primary)] sm:text-sm">
                    {step.number}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[var(--color-heading)] sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-1 max-w-44 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                    {step.description}
                  </p>

                  {index < hiringSteps.length - 1 && (
                    <ArrowRight className="absolute right-[-1.25rem] top-6 hidden size-5 text-[var(--color-primary)] lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL + OFFICE IMAGE
      ====================================================== */}

      <section
        id="culture"
        className="mx-auto max-w-8xl px-5 pb-5 sm:px-7 lg:px-8 lg:pb-7"
      >
        <div className="grid overflow-hidden rounded-xl bg-[var(--color-blue-50)] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Testimonial */}

          <div className="flex items-center gap-5 p-6 sm:p-8 lg:p-10">
            <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ritika Soni"
              className="size-20 shrink-0 rounded-full border-4 border-white object-cover shadow-md sm:size-24"
            />

            <div>
              <div className="text-5xl font-bold leading-none text-[var(--color-primary)]">
                “
              </div>

              <p className="mt-1 text-sm leading-relaxed text-[var(--color-text)] sm:text-base lg:text-lg">
                Working at AIWorksForce has been an incredible
                journey. I get to work on cutting-edge AI projects,
                learn every day, and be surrounded by a team that
                truly cares.
              </p>

              <p className="mt-3 text-sm font-bold text-[var(--color-heading)] sm:text-base">
                Ritika Soni
              </p>

              <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                Marketing Manager
              </p>
            </div>
          </div>

          {/* Office Image */}

          <div className="relative min-h-52 overflow-hidden sm:min-h-64">
            <img
              src="/company-images/careers-company-bottom-cta.png"
              alt="AIWorksForce office"
              className="absolute inset-0 size-full object-cover rounded-l-2xl"
            />

            <div className="absolute right-0 top-0 flex h-full w-28 items-center justify-center bg-[var(--color-primary)]/90 px-4 text-center text-lg font-medium text-white sm:w-36 sm:text-xl">
              <span className="font-hand leading-tight">
                A
                <br />
                Smarter
                <br />
                Tomorrow
                <br />
                Together
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative isolate mx-1 my-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07154d] via-[#0b176f] to-[#2437e9] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-9">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

        <div className="mx-auto grid max-w-6xl items-center gap-7 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
              Ready to Make an Impact?
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Join AIWorksForce Today
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
              Be part of a team that is building a more efficient future with AI.
            </p>
          </div>

          <a
            href="#open-positions"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-[var(--color-heading)] shadow-lg transition hover:-translate-y-0.5 sm:text-base"
          >
            View Open Positions
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="absolute right-7 top-1/2 hidden -translate-y-1/2 rotate-[-7deg] font-hand text-2xl leading-tight text-white/95 lg:block">
          Great
          <br />
          People
          <br />
          Great
          <br />
          Possibilities
        </div>
      </section>

    </main>
  );
}