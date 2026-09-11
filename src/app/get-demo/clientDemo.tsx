"use client";

import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

import { FormEvent, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type Benefit = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type Company = {
  name: string;
  className?: string;
};

/* =========================================================
   CONSTANTS
========================================================= */

const HERO_IMAGE = "/images/book-demo/book-demo-hero.webp";

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "What AIWorksForce?",
    href: "/what-aiworksforce",
  },
  {
    label: "How it Works",
    href: "/how-it-works",
  },
  {
    label: "Our AI Workflow",
    href: "/ai-workflow",
  },
  {
    label: "Solutions",
    href: "#",
    dropdown: true,
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "About",
    href: "/company/about",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits: Benefit[] = [
  {
    icon: Lightbulb,
    title: "Discover Tailored Solutions",
    description:
      "See how our AI tools and strategies can be customized for your specific business needs.",
  },
  {
    icon: Sparkles,
    title: "Live Product Walkthrough",
    description:
      "Get a hands-on look at our AI solutions in action.",
  },
  {
    icon: MessageCircle,
    title: "Ask Your Questions",
    description:
      "Talk directly with our experts and get clarity on implementation, pricing, and ROI.",
  },
  {
    icon: Zap,
    title: "Explore Growth Opportunities",
    description:
      "Identify high-impact areas where AI can save time, reduce costs, and drive revenue.",
  },
  {
    icon: ShieldCheck,
    title: "No Obligation",
    description:
      "It's a simple conversation to help you make the right decision.",
  },
];

/* =========================================================
   TRUSTED COMPANIES
========================================================= */

const companies: Company[] = [
  {
    name: "TATA",
    className: "font-black tracking-wide",
  },
  {
    name: "Infosys",
    className: "font-medium",
  },
  {
    name: "Reliance",
    className: "font-serif font-bold",
  },
  {
    name: "Pharmeasy",
    className: "font-semibold",
  },
  {
    name: "OYO",
    className: "font-black tracking-tight",
  },
  {
    name: "zomato",
    className: "font-black italic",
  },
  {
    name: "Flipkart",
    className: "font-bold italic",
  },
  {
    name: "Microsoft",
    className: "font-semibold",
  },
];

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-7 lg:px-8 lg:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.9fr]">
          {/* Brand */}

          <div>
            <a
              href="/"
              className="inline-block text-2xl font-bold leading-none tracking-tight text-[var(--color-heading)] sm:text-3xl"
            >
              <span className="text-[var(--color-primary)]">
                AI
              </span>{" "}
              WorksForce
            </a>

            <p className="mt-1 pl-6 text-xs font-medium text-[var(--color-text-muted)] sm:text-sm">
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
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/company/about"
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  About AIWorksForce
                </a>
              </li>

              <li>
                <a
                  href="/company/our-team"
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  Our Team
                </a>
              </li>

              <li>
                <a
                  href="/company/careers"
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="/company/contact"
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  Contact
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
              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  AI Automation
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  AI Agents
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  AI Customer Operations
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  AI Sales & Outreach
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                >
                  AI Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">
              Connect With Us
            </h3>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary)]"
              >
                <Linkedin className="size-6" />
              </a>

              <a
                href="#"
                aria-label="X"
                className="text-lg font-bold text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary)]"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="grid size-6 place-items-center rounded-md bg-[var(--color-heading)] text-xs font-bold text-white transition-colors hover:bg-[var(--color-primary)]"
              >
                ▶
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 fill-none stroke-current stroke-2"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
              Let&apos;s build a smarter future together.
            </p>

            <a
              href="mailto:hello@aiworksforce.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] sm:text-base"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}

        <div className="mt-10 flex flex-col gap-4 border-t border-blue-100 pt-5 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2024 AIWorksForce. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-[var(--color-primary)]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-[var(--color-primary)]"
            >
              Terms of Service
            </a>

            <a
              href="/company/contact"
              className="transition-colors hover:text-[var(--color-primary)]"
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
   PAGE COMPONENT
========================================================= */

export default function BookDemoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [industry, setIndustry] = useState("");

  const [teamSize, setTeamSize] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[var(--color-heading)]">
   

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden rounded-b-2xl bg-[linear-gradient(105deg,#ffffff_0%,#f9fbff_48%,#edf2ff_100%)]">
        <div className="pointer-events-none absolute -right-40 -top-32 -z-10 size-[30rem] rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl lg:min-h-[34rem] lg:grid-cols-2">
          {/* Hero Copy */}

          <div className="relative z-20 px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-14 lg:px-8 lg:py-14 xl:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Let&apos;s Talk
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-[0.94] tracking-tight text-[var(--color-heading)] sm:text-6xl lg:text-7xl">
              Need{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-violet-600)] to-[var(--color-primary)] bg-clip-text text-transparent">
                personalized help?
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-text)] sm:text-xl lg:text-2xl">
              Book a demo with our AI experts and discover how
              AI WorksForce can help you automate, scale, and grow
              your business — tailored to your unique needs.
            </p>

            {/* Hero Buttons */}

            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#demo-form"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-violet-600)] px-5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
              >
                Book a Free Consultation
                <ArrowRight className="size-4" />
              </a>

              <a
                href="#"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--color-violet-600)]/50 bg-white/80 px-5 text-sm font-bold text-[var(--color-heading)] transition hover:bg-white sm:px-6 sm:text-base"
              >
                <span className="grid size-6 place-items-center rounded-full bg-indigo-50 text-[var(--color-primary)]">
                  <Play className="size-3 fill-current" />
                </span>

                Watch Our Video
              </a>
            </div>

            {/* Hero Stats */}

            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
              {/* Flexible */}

              <div className="flex items-center gap-3 sm:pr-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <CalendarDays className="size-6 sm:size-7" />
                </span>

                <div>
                  <p className="text-lg font-bold leading-tight text-[var(--color-heading)] sm:text-xl">
                    Flexible
                  </p>

                  <p className="text-sm leading-tight text-[var(--color-text-muted)] sm:text-base">
                    Scheduling
                  </p>
                </div>
              </div>

              {/* Experts */}

              <div className="flex items-center gap-3 border-indigo-100 sm:border-l sm:pl-5 sm:pr-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <Users className="size-6 sm:size-7" />
                </span>

                <div>
                  <p className="text-lg font-bold leading-tight text-[var(--color-heading)] sm:text-xl">
                    Talk to
                  </p>

                  <p className="text-sm leading-tight text-[var(--color-text-muted)] sm:text-base">
                    AI Experts
                  </p>
                </div>
              </div>

              {/* No obligation */}

              <div className="flex items-center gap-3 border-indigo-100 sm:border-l sm:pl-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <Zap className="size-6 sm:size-7" />
                </span>

                <div>
                  <p className="text-lg font-bold leading-tight text-[var(--color-heading)] sm:text-xl">
                    No Obligation
                  </p>

                  <p className="text-sm leading-tight text-[var(--color-text-muted)] sm:text-base">
                    Just Insights
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}

          <div className="relative min-h-[22rem] sm:min-h-[30rem] lg:min-h-0">
            <div className="absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />

            <img
              src={HERO_IMAGE}
              alt="AIWorksForce expert speaking with a business client"
              className="absolute inset-0 size-full object-cover object-center lg:object-contain"
            />

            {/* Handwritten note */}

            <div className="absolute bottom-24 left-5 z-30 hidden rotate-[-7deg] font-hand text-2xl leading-tight text-[var(--color-primary)] xl:block">
              Smarter
              <br />
              Businesses
              <br />
              Happier People
              <br />
              A Brighter
              <br />
              Tomorrow
            </div>

            {/* Right Card */}

            <div className="absolute bottom-5 right-5 z-30 hidden max-w-56 rounded-xl bg-white/95 p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)]">
                  <Users className="size-6" />
                </span>

                <p className="text-sm font-semibold leading-snug text-[var(--color-heading)] sm:text-base">
                  One Conversation
                  <br />
                  Can Unlock
                  <br />
                  Big Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEMO + BENEFITS
      ====================================================== */}

      <section
        id="demo-form"
        className="mx-auto max-w-7xl px-5 py-12 sm:px-7 lg:px-8 lg:py-16"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* =================================================
              DEMO FORM
          ================================================== */}

          <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-[0_8px_30px_rgba(24,74,140,0.05)] sm:p-7 lg:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Book a Demo
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              Schedule Your Demo
            </h2>

            <p className="mt-2 text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
              Fill out the form below and our team will get in
              touch to schedule a personalized demo at your
              convenience.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}

                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="h-11 w-full rounded-lg border border-blue-100 bg-white px-3 text-sm text-[var(--color-heading)] outline-none transition placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-50 sm:h-12 sm:text-base"
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                  >
                    Business Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="h-11 w-full rounded-lg border border-blue-100 bg-white px-3 text-sm text-[var(--color-heading)] outline-none transition placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-50 sm:h-12 sm:text-base"
                  />
                </div>

                {/* Company */}

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                  >
                    Company Name *
                  </label>

                  <input
                    id="company"
                    name="company"
                    required
                    type="text"
                    placeholder="Your Company"
                    className="h-11 w-full rounded-lg border border-blue-100 bg-white px-3 text-sm text-[var(--color-heading)] outline-none transition placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-50 sm:h-12 sm:text-base"
                  />
                </div>

                {/* Phone */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                  >
                    Phone Number *
                  </label>

                  <div className="flex h-11 overflow-hidden rounded-lg border border-blue-100 focus-within:border-[var(--color-primary)] focus-within:ring-4 focus-within:ring-blue-50 sm:h-12">
                    <div className="flex items-center gap-2 border-r border-blue-100 px-3 text-sm text-[var(--color-text)]">
                      <span>🇮🇳</span>
                      <ChevronDown className="size-3" />
                    </div>

                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="min-w-0 flex-1 px-3 text-sm text-[var(--color-heading)] outline-none placeholder:text-slate-400 sm:text-base"
                    />
                  </div>
                </div>

                {/* Industry */}

                <div>
                  <label
                    htmlFor="industry"
                    className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                  >
                    Industry
                  </label>

                  <div className="relative">
                    <select
                      id="industry"
                      name="industry"
                      value={industry}
                      onChange={(event) =>
                        setIndustry(event.target.value)
                      }
                      className="h-11 w-full appearance-none rounded-lg border border-blue-100 bg-white px-3 pr-10 text-sm text-[var(--color-heading)] outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-50 sm:h-12 sm:text-base"
                    >
                      <option value="">
                        Select your industry
                      </option>
                      <option value="healthcare">
                        Healthcare
                      </option>
                      <option value="finance">
                        Finance & Accounting
                      </option>
                      <option value="retail">
                        Retail & E-commerce
                      </option>
                      <option value="manufacturing">
                        Manufacturing
                      </option>
                      <option value="real-estate">
                        Real Estate
                      </option>
                      <option value="education">
                        Education
                      </option>
                      <option value="travel">
                        Travel & Hospitality
                      </option>
                      <option value="technology">
                        Technology & SaaS
                      </option>
                      <option value="other">
                        Other
                      </option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
                  </div>
                </div>

                {/* Team Size */}

                <div>
                  <label
                    htmlFor="teamSize"
                    className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                  >
                    Team Size
                  </label>

                  <div className="relative">
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={teamSize}
                      onChange={(event) =>
                        setTeamSize(event.target.value)
                      }
                      className="h-11 w-full appearance-none rounded-lg border border-blue-100 bg-white px-3 pr-10 text-sm text-[var(--color-heading)] outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-50 sm:h-12 sm:text-base"
                    >
                      <option value="">
                        Select team size
                      </option>
                      <option value="1-10">1 - 10</option>
                      <option value="11-50">11 - 50</option>
                      <option value="51-200">51 - 200</option>
                      <option value="201-500">
                        201 - 500
                      </option>
                      <option value="500+">500+</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
                  </div>
                </div>
              </div>

              {/* Message */}

              <div className="mt-5">
                <label
                  htmlFor="discussion"
                  className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                >
                  What would you like to discuss? *
                </label>

                <div className="relative">
                  <textarea
                    id="discussion"
                    name="discussion"
                    required
                    maxLength={500}
                    rows={5}
                    placeholder="Tell us about your goals, challenges, or specific areas of interest..."
                    className="min-h-32 w-full resize-none rounded-lg border border-blue-100 bg-white px-3 py-3 text-sm leading-relaxed text-[var(--color-heading)] outline-none transition placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-50 sm:min-h-36 sm:text-base"
                  />

                  <span className="absolute bottom-2 right-3 text-xs text-[var(--color-text-muted)]">
                    0/500
                  </span>
                </div>
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-violet-600)] text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 sm:h-12 sm:text-base"
              >
                {submitted ? (
                  <>
                    Demo Request Sent
                    <Check className="size-4" />
                  </>
                ) : (
                  <>
                    Book a Demo
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>

              <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                By submitting this form, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium text-[var(--color-primary)] hover:underline"
                >
                  Privacy Policy
                </a>
                . We respect your privacy and will never share
                your information.
              </p>
            </form>
          </div>

          {/* =================================================
              WHY BOOK A DEMO
          ================================================== */}

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Why Book a Demo?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              Get Answers. See Possibilities.
            </h2>

            <p className="mt-2 text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
              A personalized demo gives you a chance to explore
              real solutions for your business, with no
              commitment.
            </p>

            <div className="mt-6 space-y-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="flex gap-4 rounded-xl bg-[var(--color-blue-50)] p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-14">
                      <Icon className="size-6 sm:size-7" />
                    </span>

                    <div>
                      <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-7 lg:px-8 lg:pb-14">
        <div className="relative overflow-hidden rounded-xl bg-[var(--color-blue-50)] p-6 sm:p-8 lg:p-9">
          <div className="grid items-center gap-7 lg:grid-cols-[auto_1fr_auto]">
            {/* Avatar */}

            <div className="mx-auto size-24 overflow-hidden rounded-full border-4 border-white bg-indigo-100 shadow-md sm:size-28 lg:mx-0 lg:size-32">
              <img
                src="/images/team/amit-sharma.webp"
                alt="Amit Sharma"
                className="size-full object-cover"
              />
            </div>

            {/* Quote */}

            <div className="relative">
              <span className="absolute -left-1 -top-3 text-5xl font-black leading-none text-[var(--color-primary)] sm:text-6xl">
                “
              </span>

              <p className="pl-7 text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:text-xl">
                The demo with AIWorksForce gave us a clear
                understanding of how we can automate our
                operations and scale faster. Highly recommended!
              </p>

              <div className="mt-3 pl-7">
                <p className="text-sm font-bold text-[var(--color-heading)] sm:text-base">
                  Amit Sharma
                </p>

                <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                  Founder, GrowthTech
                </p>
              </div>
            </div>

            {/* Handwritten */}

            <div className="hidden rotate-[-6deg] border-l border-indigo-200 pl-10 font-hand text-2xl leading-tight text-[var(--color-primary)] xl:block">
              Real
              <br />
              Conversations
              <br />
              Real Growth
              <br />
              ↙
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUSTED COMPANIES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-7 lg:px-8 lg:pb-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
            Trusted by Innovative Businesses
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
            Businesses That Believe in a Smarter Tomorrow
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-2 overflow-hidden rounded-xl border border-blue-100 bg-white sm:grid-cols-4 lg:grid-cols-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex min-h-20 items-center justify-center border-b border-r border-blue-100 px-4 text-center text-xl text-slate-700 last:border-r-0 sm:min-h-24 lg:border-b-0"
            >
              <span className={company.className}>
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative isolate mx-1 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07154d] via-[#0b176f] to-[#2437e9] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-9">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

        <div className="mx-auto grid max-w-6xl items-center gap-7 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
              Let&apos;s Build Your Success Together
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Ready to explore what AI can do for your business?
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
              Book a demo today and take the first step towards
              a smarter, more efficient tomorrow.
            </p>
          </div>

          <a
            href="#demo-form"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-[var(--color-heading)] shadow-lg transition hover:-translate-y-0.5 sm:text-base"
          >
            Book a Demo
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-[-7deg] font-hand text-2xl leading-tight text-white/95 lg:block">
          Ideas
          <br />
          To Impact
          <br />
          Together
          <br />
          ↙
        </div>
      </section>

   
    </main>
  );
}