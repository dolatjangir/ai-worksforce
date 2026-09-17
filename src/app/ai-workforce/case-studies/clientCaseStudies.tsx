"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  BarChart3,
  Clock,
  Users,
  Settings,
  ShoppingCart,
  Home,
  CalendarCheck,
  GraduationCap,
  Quote,
  Menu,
  X,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import AIWorkflowHero from "@/components/ai-workflow-hero/reusable-hero";

/* =========================================================
   AI WorksForce — Case Studies Page
   Next.js (App Router) + Tailwind CSS v4 + TypeScript
   Uses tokens from global.css:
   brand-blue / brand-purple / brand-green / brand-orange /
   brand-sky / heading / text-muted / gradient-brand / font-hand
========================================================= */

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "What is AIWorksForce?", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "Our AI Workflow", href: "#" },
  { label: "Case Studies", href: "#", active: true },
  { label: "Solutions", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

const FILTERS = [
  "All",
  "E-commerce",
  "SaaS & Technology",
  "Healthcare",
  "Real Estate",
  "Education",
  "Manufacturing",
  "Professional Services",
];

type CaseStudy = {
  category: string;
  tagClass: string;
  iconClass: string;
  title: string;
  desc: string;
  stats: { value: string; label: string }[];
  image: string;
  overlayIcon: React.ElementType;
  overlayLabel: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    category: "E-commerce",
    tagClass: "bg-brand-blue-soft text-brand-blue",
    iconClass: "bg-brand-blue-soft text-brand-blue",
    title: "Scaling Customer Support for a D2C Brand",
    desc: "Automated 80% of customer queries with AI agents, reducing response time from hours to seconds.",
    stats: [
      { value: "80%", label: "Queries Automated" },
      { value: "3x", label: "Faster Response" },
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    overlayIcon: ShoppingCart,
    overlayLabel: "Support Automated",
  },
  {
    category: "SaaS & Technology",
    tagClass: "bg-sky-100 text-brand-sky",
    iconClass: "bg-sky-100 text-brand-sky",
    title: "Generating 3x More Qualified Leads",
    desc: "Implemented AI-driven outreach and lead qualification, resulting in 3x more sales opportunities.",
    stats: [
      { value: "3x", label: "More Qualified Leads" },
      { value: "50%", label: "Lower CAC" },
    ],
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    overlayIcon: BarChart3,
    overlayLabel: "Leads Generated",
  },
  {
    category: "Real Estate",
    tagClass: "bg-brand-green-soft text-brand-green",
    iconClass: "bg-brand-green-soft text-brand-green",
    title: "Automating Property Inquiries & Follow-Ups",
    desc: "Deployed AI agents to handle inquiries, schedule site visits, and follow up automatically.",
    stats: [
      { value: "70%", label: "Time Saved" },
      { value: "2x", label: "More Site Visits" },
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    overlayIcon: Home,
    overlayLabel: "Inquiries Automated",
  },
  {
    category: "Healthcare",
    tagClass: "bg-rose-100 text-rose-500",
    iconClass: "bg-rose-100 text-rose-500",
    title: "Improving Patient Engagement",
    desc: "Used AI agents to handle appointments, reminders, and patient queries 24/7.",
    stats: [
      { value: "60%", label: "Less Admin Work" },
      { value: "95%", label: "Patient Satisfaction" },
    ],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    overlayIcon: CalendarCheck,
    overlayLabel: "Appointments Automated",
  },
  {
    category: "Education",
    tagClass: "bg-amber-100 text-amber-600",
    iconClass: "bg-amber-100 text-amber-600",
    title: "Boosting Student Enrollments",
    desc: "Automated inquiries, counseling follow-ups, and application tracking with AI agents.",
    stats: [
      { value: "2.5x", label: "More Enrollments" },
      { value: "40%", label: "Faster Follow-Ups" },
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    overlayIcon: GraduationCap,
    overlayLabel: "Admissions Simplified",
  },
  {
    category: "Professional Services",
    tagClass: "bg-brand-purple-soft text-brand-purple",
    iconClass: "bg-brand-purple-soft text-brand-purple",
    title: "Streamlining Internal Operations",
    desc: "Implemented AI workflows for reporting, research, and client communication.",
    stats: [
      { value: "50%", label: "Higher Productivity" },
      { value: "30%", label: "Cost Reduction" },
    ],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    overlayIcon: Settings,
    overlayLabel: "Operations Optimized",
  },
];

const HERO_STATS = [
  { icon: Building2, value: "50+", label: "Businesses Transformed", chip: "bg-brand-blue-soft text-brand-blue" },
  { icon: BarChart3, value: "3x", label: "Average Efficiency Gain", chip: "bg-brand-purple-soft text-brand-purple" },
  { icon: Clock, value: "60%", label: "Reduction in Manual Work", chip: "bg-sky-100 text-brand-sky" },
  { icon: Users, value: "98%", label: "Client Satisfaction", chip: "bg-brand-green-soft text-brand-green" },
];

const HERO_FEATURES = [
  { icon: Settings, label: "Automate Operations" },
  { icon: Users, label: "Improve Customer Experience" },
  { icon: BarChart3, label: "Increase Revenue" },
];

export default function CaseStudiesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === filter);

  return (
    <main className="min-h-screen bg-white font-sans text-heading antialiased">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed)] text-white shadow-lg shadow-blue-500/25">
              <Bot className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-heading">
                AI Works<span className="text-brand-blue">Force</span>
              </span>
              <span className="block text-[10px] font-medium tracking-wide text-text-muted">
                Automate. Accelerate. Grow.
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-[13px] font-medium transition-colors ${
                  link.active
                    ? "text-heading after:absolute after:-bottom-4 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-blue"
                    : "text-text-muted hover:text-heading"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="hidden items-center gap-1.5 rounded-full bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:bg-[#4a22c7] sm:inline-flex"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 text-heading lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-blue-100 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                    link.active
                      ? "bg-brand-blue-soft text-brand-blue"
                      : "text-text-muted hover:bg-blue-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
    <AIWorkflowHero
  eyebrow="REAL BUSINESSES. REAL IMPACT."
  title="Case"
  highlightedTitle="Studies"
  subtitle="Real business results"
  description="See how businesses across industries are using AI WorksForce to automate operations, improve customer experiences, and achieve measurable growth."
  imageSrc="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
  imageAlt="Business professional"
  primaryLabel="Book a Free Consultation"
  primaryHref="#cta"
  secondaryLabel="Explore Our Solutions"
  secondaryHref="#stories"
/>

      {/* ================= SUCCESS STORIES ================= */}
      <section id="stories" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">
              Success Stories
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              Real Companies. Real Results.
            </h2>
            <p className="mt-4 text-base text-text-muted">
              Explore how businesses like yours are achieving more with AI WorksForce.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition ${
                  filter === f
                    ? "bg-brand-blue text-white shadow-lg shadow-blue-500/25"
                    : "border border-blue-100 bg-white text-text-muted hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Case study grid */}
          <div className="mt-14 grid gap-x-10 gap-y-16 lg:grid-cols-2">
            {visible.map((c) => (
              <div key={c.title} className="group flex flex-col gap-6 sm:flex-row">
                {/* Text side */}
                <div className="flex flex-1 flex-col">
                  <span
                    className={`inline-flex w-fit rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${c.tagClass}`}
                  >
                    {c.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-heading">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-muted">
                    {c.desc}
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <p className="text-xl font-extrabold tracking-tight text-heading">
                          {s.value}
                        </p>
                        <p className="text-[11px] font-medium text-text-muted">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue transition group-hover:gap-2.5"
                  >
                    Read Full Case Study <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Image side */}
                <div className="relative w-full pb-6 sm:w-[46%] sm:pb-8">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-56 w-full rounded-2xl object-cover shadow-lg shadow-[rgba(24,74,140,0.10)] transition duration-500 group-hover:scale-[1.02] sm:h-full sm:min-h-[220px]"
                  />
                  <div className="absolute -bottom-1 left-1/2 flex w-max -translate-x-1/2 items-center gap-2.5 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-xl shadow-[rgba(24,74,140,0.14)]">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${c.iconClass}`}>
                      <c.overlayIcon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-bold leading-tight text-heading">
                      {c.overlayLabel.split(" ").map((w, i) => (
                        <span key={i} className="block">
                          {w}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-[linear-gradient(to_bottom_right,#eff6ff,#ffffff,#eef2ff)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/85 p-8 shadow-xl shadow-[rgba(24,74,140,0.08)] backdrop-blur sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-purple-soft" fill="currentColor" />

            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              {/* Quote */}
              <div className="flex items-start gap-5">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
                  alt="Rahul Mehta"
                  className="h-20 w-20 shrink-0 rounded-full border-4 border-white object-cover shadow-lg shadow-[rgba(24,74,140,0.15)]"
                />
                <div>
                  <p className="text-base font-medium leading-relaxed text-heading sm:text-lg">
                    &ldquo;AI WorksForce has completely transformed our
                    operations. We&apos;ve saved hours of manual work, improved
                    customer satisfaction, and seen real business growth.&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-bold text-heading">Rahul Mehta</p>
                  <p className="text-xs text-text-muted">CEO, GrowthMart (E-commerce)</p>
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 lg:divide-x lg:divide-blue-100">
                {[
                  { icon: BarChart3, value: "3x", label: "Revenue Growth", chip: "bg-brand-purple-soft text-brand-purple" },
                  { icon: Clock, value: "60%", label: "Less Manual Work", chip: "bg-sky-100 text-brand-sky" },
                  { icon: Users, value: "98%", label: "Team Satisfaction", chip: "bg-brand-green-soft text-brand-green" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center text-center lg:px-4">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-full ${s.chip}`}>
                      <s.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xl font-extrabold tracking-tight text-heading">{s.value}</p>
                    <p className="text-[11px] font-medium text-text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="cta" className="bg-white px-4 pb-6 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#061a38_0%,#0a2a63_55%,#123a8c_100%)] px-6 py-16 text-center shadow-2xl shadow-[rgba(32,83,150,0.25)] sm:px-12 lg:py-20">
          <svg className="pointer-events-none absolute -left-10 -top-24 h-72 w-72 opacity-20" viewBox="0 0 200 200" fill="none" aria-hidden="true">
            <circle cx="40" cy="40" r="120" stroke="#22d3ee" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="90" stroke="#0876ed" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="60" stroke="#8b5cf6" strokeWidth="1.5" />
          </svg>
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />

          <p className="relative text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Your Success Story Could Be Next
          </p>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Ready to Get Real Results?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-blue-100/80">
            Let&apos;s discuss how AI WorksForce can create the same impact for your business.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-heading shadow-xl transition hover:bg-blue-50"
            >
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#stories"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white/10"
            >
              See More Case Studies
            </a>
          </div>

          {/* handwritten note */}
          <div className="pointer-events-none absolute bottom-8 right-8 hidden rotate-[-8deg] md:block">
            <p className="font-hand text-3xl leading-tight text-cyan-300">
              Different Industries
              <br />
              Same Success
            </p>
            <svg className="ml-auto mt-1 h-10 w-24 text-cyan-300" viewBox="0 0 96 40" fill="none" aria-hidden="true">
              <path d="M90 4 Q 60 34 8 26 M8 26 l14 -6 M8 26 l4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-blue-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed)] text-white shadow-lg shadow-blue-500/25">
                <Bot className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-extrabold tracking-tight text-heading">
                  AI Works<span className="text-brand-blue">Force</span>
                </span>
                <span className="block text-[10px] font-medium tracking-wide text-text-muted">
                  Automate. Accelerate. Grow.
                </span>
              </span>
            </a>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-medium transition ${
                    link.active ? "font-bold text-heading" : "text-text-muted hover:text-brand-blue"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-100 text-text-muted transition hover:border-brand-blue hover:text-brand-blue"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-blue-100 pt-6 sm:flex-row">
            <p className="text-xs text-text-muted">
              &copy; 2024 AI WorksForce. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Contact"].map((l) => (
                <a key={l} href="#" className="text-xs text-text-muted transition hover:text-brand-blue">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}