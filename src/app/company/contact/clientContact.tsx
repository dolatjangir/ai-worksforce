"use client";

import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  Headphones,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  X,
  Youtube,
  Zap,
} from "lucide-react";

import { FormEvent, useState } from "react";

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
   CONTACT METHODS
========================================================= */

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description:
      "For general inquiries, partnerships or business opportunities.",
    value: "hello@aiworksforce.com",
    href: "mailto:hello@aiworksforce.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description:
      "Speak directly with our team during business hours.",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description:
      "Come say hello at our headquarters in Jaipur, India.",
    value: "Jaipur, Rajasthan, India",
    href: "#office",
  },
];

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-7 lg:px-8 lg:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_0.9fr]">
          {/* Brand */}

          <div>
            <a
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-[var(--color-heading)] sm:text-3xl"
            >
              <span className="text-[var(--color-primary)]">
                AI
              </span>{" "}
              WorksForce
            </a>

            <p className="mt-1 text-xs font-medium text-[var(--color-text-muted)] sm:text-sm">
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
              {[
                ["Home", "/"],
                ["About AIWorksForce", "/company/about"],
                ["Our Team", "/company/our-team"],
                ["Careers", "/company/careers"],
                ["Contact", "/company/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                  >
                    {label}
                  </a>
                </li>
              ))}
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

            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[var(--color-heading)] transition hover:text-[var(--color-primary)]"
              >
                <Linkedin className="size-6" />
              </a>

              <a
                href="#"
                aria-label="X"
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

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-5 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© 2024 AIWorksForce. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/privacy-policy"
              className="transition hover:text-[var(--color-primary)]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition hover:text-[var(--color-primary)]"
            >
              Terms of Service
            </a>

            <a
              href="/company/contact"
              className="transition hover:text-[var(--color-primary)]"
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

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [service, setService] = useState("");

  const [submitted, setSubmitted] = useState(false);

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
        <div className="pointer-events-none absolute -right-40 -top-32 -z-10 size-[32rem] rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl lg:min-h-[34rem] lg:grid-cols-2">
          {/* Hero Content */}

          <div className="relative z-20 px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-14 lg:px-8 lg:py-14 xl:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Let&apos;s Connect
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-[0.94] tracking-tight text-[var(--color-heading)] sm:text-6xl lg:text-7xl">
              Get in Touch with{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-violet-600)] to-[var(--color-primary)] bg-clip-text text-transparent">
                AIWorksForce
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-text)] sm:text-xl lg:text-2xl">
              Have a question, a project in mind, or just want to
              explore what&apos;s possible with AI? We&apos;d love
              to hear from you.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact-form"
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

            <div className="mt-9 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0">
              <div className="flex items-center gap-3 sm:pr-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <Zap className="size-6 sm:size-7" />
                </span>

                <div>
                  <p className="text-xl font-bold leading-none text-[var(--color-primary)] sm:text-2xl">
                    Quick
                  </p>

                  <p className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Response
                  </p>

                  <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                    Within 24 Hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-indigo-100 pl-4 sm:pr-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <UsersIcon />
                </span>

                <div>
                  <p className="text-xl font-bold leading-none text-[var(--color-primary)] sm:text-2xl">
                    Expert
                  </p>

                  <p className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Guidance
                  </p>

                  <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                    From AI Specialists
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4 sm:pr-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <ShieldCheck className="size-6 sm:size-7" />
                </span>

                <div>
                  <p className="text-xl font-bold leading-none text-[var(--color-primary)] sm:text-2xl">
                    No
                  </p>

                  <p className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Obligation
                  </p>

                  <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                    Just a Conversation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-12">
                  <Globe2 className="size-6 sm:size-7" />
                </span>

                <div>
                  <p className="text-xl font-bold leading-none text-[var(--color-primary)] sm:text-2xl">
                    Global
                  </p>

                  <p className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Reach
                  </p>

                  <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                    Local Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}

          <div className="relative min-h-[22rem] sm:min-h-[30rem] lg:min-h-0">
            <div className="absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />

            <img
              src="/images/contact/contact-hero.webp"
              alt="AIWorksForce office"
              className="absolute inset-x-0 bottom-0 mx-auto h-full w-full object-cover object-center lg:object-contain"
            />

            {/* Handwritten text */}

            <div className="absolute right-5 top-12 z-20 hidden rotate-[-5deg] font-hand text-2xl leading-tight text-[var(--color-primary)] lg:block">
              Ideas
              <br />
              People
              <br />
              Technology
              <br />
              A Brighter
              <br />
              Tomorrow
            </div>

            {/* Office message */}

            <div className="absolute bottom-5 right-5 z-30 hidden max-w-52 rounded-xl bg-white/95 p-5 shadow-xl sm:block">
              <p className="font-hand text-2xl leading-tight text-[var(--color-heading)]">
                Let&apos;s Build
                <br />
                A Smarter
                <br />
                Tomorrow
                <br />
                Together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT AREA
      ====================================================== */}

      <section
        id="contact-form"
        className="mx-auto max-w-7xl px-5 py-12 sm:px-7 lg:px-8 lg:py-16"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* =================================================
              FORM
          ================================================== */}

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Send Us a Message
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              Tell Us About Your Goals
            </h2>

            <p className="mt-2 text-base text-[var(--color-text)] sm:text-lg">
              Fill out the form below and our team will get back
              to you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 rounded-xl border border-blue-100 bg-white p-5 shadow-[0_8px_30px_rgba(24,74,140,0.05)] sm:p-6 lg:p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full Name */}

                <div>
                  <label
                    htmlFor="full-name"
                    className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                  >
                    Full Name *
                  </label>

                  <input
                    id="full-name"
                    name="fullName"
                    required
                    type="text"
                    placeholder="John Doe"
                    className="h-11 w-full rounded-lg border border-blue-100 bg-white px-3 text-sm text-[var(--color-heading)] outline-none transition placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-50 sm:h-12 sm:text-base"
                  />
                </div>

                {/* Business Email */}

                <div>
                  <label
                    htmlFor="business-email"
                    className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                  >
                    Business Email *
                  </label>

                  <input
                    id="business-email"
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
                    Phone Number
                  </label>

                  <div className="flex h-11 overflow-hidden rounded-lg border border-blue-100 focus-within:border-[var(--color-primary)] focus-within:ring-4 focus-within:ring-blue-50 sm:h-12">
                    <div className="flex items-center gap-2 border-r border-blue-100 px-3 text-sm text-[var(--color-text)]">
                      <span>🇮🇳</span>
                      <ChevronDown className="size-3" />
                    </div>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="min-w-0 flex-1 px-3 text-sm text-[var(--color-heading)] outline-none placeholder:text-slate-400 sm:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Service */}

              <div className="mt-5">
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                >
                  How can we help you? *
                </label>

                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={service}
                    onChange={(event) =>
                      setService(event.target.value)
                    }
                    className="h-11 w-full appearance-none rounded-lg border border-blue-100 bg-white px-3 pr-10 text-sm text-[var(--color-heading)] outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-blue-50 sm:h-12 sm:text-base"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="automation">
                      AI Automation
                    </option>
                    <option value="agents">AI Agents</option>
                    <option value="customer-operations">
                      AI Customer Operations
                    </option>
                    <option value="sales">
                      AI Sales & Outreach
                    </option>
                    <option value="marketing">
                      AI Digital Marketing
                    </option>
                    <option value="data">
                      AI Data & Research
                    </option>
                    <option value="other">
                      Something Else
                    </option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
                </div>
              </div>

              {/* Message */}

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[var(--color-heading)] sm:text-base"
                >
                  Your Message *
                </label>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    placeholder="Tell us about your project, goals, or any questions..."
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
                {submitted
                  ? "Message Sent Successfully"
                  : "Send Message"}

                {submitted ? (
                  <Check className="size-4" />
                ) : (
                  <ArrowRight className="size-4" />
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
              CONTACT INFORMATION
          ================================================== */}

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Reach Us Directly
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              Our Contact Information
            </h2>

            <p className="mt-2 text-base text-[var(--color-text)] sm:text-lg">
              Choose the best way to get in touch. We&apos;re here
              to help.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <article
                    key={method.title}
                    className="rounded-xl bg-[var(--color-blue-50)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                  >
                    <span className="grid size-12 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)]">
                      <Icon className="size-6" />
                    </span>

                    <h3 className="mt-5 text-lg font-bold text-[var(--color-heading)] sm:text-xl">
                      {method.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
                      {method.description}
                    </p>

                    <a
                      href={method.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-heading)] transition hover:text-[var(--color-primary)] sm:text-base"
                    >
                      {method.value}
                      <ArrowRight className="size-4 text-[var(--color-primary)]" />
                    </a>
                  </article>
                );
              })}

              {/* Business Hours */}

              <article className="rounded-xl bg-[var(--color-blue-50)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
                <span className="grid size-12 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)]">
                  <Clock3 className="size-6" />
                </span>

                <h3 className="mt-5 text-lg font-bold text-[var(--color-heading)] sm:text-xl">
                  Business Hours
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
                  We&apos;re available to help you every step of the
                  way.
                </p>

                <div className="mt-4 space-y-1 text-sm text-[var(--color-heading)] sm:text-base">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM (IST)</p>
                  <p>Sat: 10:00 AM - 2:00 PM (IST)</p>
                  <p>Sun: Closed</p>
                </div>
              </article>
            </div>

            {/* Map */}

            <div
              id="office"
              className="relative mt-5 min-h-56 overflow-hidden rounded-xl border border-blue-100 bg-slate-100 sm:min-h-64"
            >
              <iframe
                title="AIWorksForce office location"
                src="https://www.google.com/maps?q=Jaipur,Rajasthan,India&output=embed"
                loading="lazy"
                className="absolute inset-0 size-full border-0"
              />

              <div className="absolute bottom-3 right-3 w-52 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur sm:w-56">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)]">
                    <MapPin className="size-5" />
                  </span>

                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-heading)] sm:text-base">
                      Our Location
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                      AIWorksForce
                      <br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jaipur%2CRajasthan%2CIndia"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-[var(--color-primary)] text-xs font-bold text-[var(--color-primary)] transition hover:bg-blue-50 sm:text-sm"
                >
                  View on Google Maps
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ / CALL SECTION
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-6 sm:px-7 lg:px-8 lg:pb-8">
        <div className="rounded-xl bg-[var(--color-blue-50)] p-6 sm:p-8 lg:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* FAQ */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
                Still Have Questions?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl">
                Check Out Our FAQs
              </h2>

              <p className="mt-2 max-w-xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
                Find quick answers to common questions about our
                services, process, and partnerships.
              </p>

              <a
                href="/resources/faqs"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--color-primary)] bg-white px-5 text-sm font-bold text-[var(--color-primary)] transition hover:bg-blue-50 sm:text-base"
              >
                View FAQs
                <ArrowRight className="size-4" />
              </a>
            </div>

            {/* Call */}

            <div className="flex flex-col gap-5 border-t border-indigo-100 pt-7 sm:flex-row sm:items-center sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0 lg:pl-10">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-indigo-100 text-[var(--color-primary)] sm:size-16">
                <Headphones className="size-7 sm:size-8" />
              </span>

              <div>
                <h3 className="text-xl font-bold text-[var(--color-heading)] sm:text-2xl">
                  Prefer to talk?
                </h3>

                <p className="mt-1 max-w-md text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
                  Schedule a quick call with our team to discuss
                  your needs in detail.
                </p>

                <a
                  href="/book-demo"
                  className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[var(--color-primary)] px-4 text-sm font-bold text-[var(--color-primary)] transition hover:bg-white"
                >
                  Schedule a Call
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <div className="hidden rotate-[-6deg] font-hand text-2xl leading-tight text-[var(--color-primary)] xl:block">
                Great
                <br />
                Ideas Start
                <br />
                with a
                <br />
                Conversation
              </div>
            </div>
          </div>
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
              Let&apos;s Build Together
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Ready to Automate, Accelerate, and Grow?
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
              Take the first step. Book a free consultation with
              our AI experts today.
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

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-[-7deg] font-hand text-2xl leading-tight text-white/95 lg:block">
          A
          <br />
          Smarter
          <br />
          Tomorrow
          <br />
          Together
        </div>
      </section>

    </main>
  );
}

/* =========================================================
   SMALL REUSABLE ICON
========================================================= */

function UsersIcon() {
  return (
    <span className="relative block size-7">
      <span className="absolute left-0 top-1 size-3.5 rounded-full bg-current" />
      <span className="absolute right-0 top-0.5 size-3 rounded-full bg-current" />
      <span className="absolute bottom-0 left-0 h-3.5 w-5 rounded-t-full bg-current" />
      <span className="absolute bottom-0 right-0 h-3 w-4 rounded-t-full bg-current" />
    </span>
  );
}