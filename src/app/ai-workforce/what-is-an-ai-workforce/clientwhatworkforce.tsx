"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Users,
  Cog,
  Clock,
  TrendingUp,
  Target,
  Sparkles,
  Headset,
  Rocket,
  Database,
  Megaphone,
  Workflow,
  BarChart3,
  Coins,
  Zap,
  HeartHandshake,
  Menu,
  X,
} from "lucide-react";

/* ============================================
   DATA
============================================ */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What is an AI Workforce", href: "#", active: true },
  { label: "Solutions", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

const AGENT_CHIPS = [
  { label: "Customer Support\nAI Agent", icon: Headset, position: "top-[4%] -left-[6%]", delay: "0s" },
  { label: "Sales & Outreach\nAI Agent", icon: Rocket, position: "top-[28%] -left-[10%]", delay: "1.2s" },
  { label: "Data & Research\nAI Agent", icon: Database, position: "top-[58%] -left-[8%]", delay: "2s" },
  { label: "Marketing\nAI Agent", icon: Megaphone, position: "top-[4%] -right-[6%]", delay: "0.6s" },
  { label: "Operations\nAI Agent", icon: Workflow, position: "top-[28%] -right-[10%]", delay: "1.6s" },
  { label: "Automation\nAI Agent", icon: Zap, position: "top-[58%] -right-[8%]", delay: "2.4s" },
];

const WORKFORCE_FEATURES = [
  {
    icon: Users,
    color: "bg-brand-purple-soft text-brand-purple",
    title: "Multi-Agent Team",
    desc: "Specialized AI agents for each business function",
  },
  {
    icon: Cog,
    color: "bg-brand-green-soft text-brand-green",
    title: "Works Together",
    desc: "Agents collaborate like a real team",
  },
  {
    icon: Clock,
    color: "bg-brand-orange-soft text-brand-orange",
    title: "24/7 Productivity",
    desc: "Operates around the clock",
  },
  {
    icon: TrendingUp,
    color: "bg-rose-50 text-rose-500",
    title: "Scalable",
    desc: "Grows with your business",
  },
  {
    icon: Target,
    color: "bg-cyan-50 text-cyan-500",
    title: "Goal-Oriented",
    desc: "Focused on real business outcomes",
  },
];

const AGENT_PANEL_ITEMS = [
  { label: "Customer Support", icon: Headset },
  { label: "Sales & Outreach", icon: Rocket },
  { label: "Marketing", icon: Megaphone },
  { label: "Operations", icon: Workflow },
  { label: "Data & Research", icon: Database },
  { label: "Automation", icon: Zap },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Understand",
    desc: "Learns about your business, goals, and workflows",
  },
  {
    step: "02",
    title: "Plan",
    desc: "Breaks down tasks and assigns them to the right AI agents",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Agents take action, collaborate, and get work done",
  },
  {
    step: "04",
    title: "Improve",
    desc: "Continuously learns and optimizes for better results",
  },
];

const IMPACT_FEATURES = [
  {
    icon: Zap,
    title: "Higher Efficiency",
    desc: "Automate repetitive work and focus on what matters",
  },
  {
    icon: HeartHandshake,
    title: "Better Customer Experiences",
    desc: "Instant, personalized support at scale",
  },
  {
    icon: Coins,
    title: "Cost Savings",
    desc: "Do more with less",
  },
  {
    icon: BarChart3,
    title: "Faster Growth",
    desc: "Scale operations without hiring overhead",
  },
];

/* ============================================
   COMPONENT
============================================ */

export default function AIWorkforcePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark antialiased">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-brand-dark sm:text-2xl">
              AI Works<span className="text-brand-blue">Force</span>
            </span>
            <span className="text-[10px] font-medium tracking-wide text-slate-400">
              Automate. Accelerate. Grow.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative pb-1 text-sm font-medium transition-colors ${
                  link.active
                    ? "text-brand-dark after:absolute after:-bottom-[22px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-brand-purple"
                    : "text-slate-500 hover:text-brand-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="#consultation"
              className="hidden rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-navy hover:shadow-lg sm:inline-flex"
            >
              Book a Free Consultation
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-dark lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    link.active
                      ? "bg-brand-purple-soft text-brand-purple"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#consultation"
                className="mt-2 rounded-full bg-brand-dark px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book a Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Soft background blobs */}
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-purple-soft blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              The Future of Work
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-dark sm:text-5xl lg:text-[3.4rem]">
              What is an{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
                AI Workforce?
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
              An AI workforce is a team of intelligent AI agents that work
              alongside your human team to automate tasks, handle operations,
              interact with customers, and drive growth — 24/7.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all hover:bg-brand-blue-dark hover:shadow-xl"
              >
                See How It Works
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#consultation"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:border-brand-blue hover:text-brand-blue"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Center person */}
            <div className="relative z-10 mx-auto w-[78%] overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
                alt="Professional working with her AI workforce"
                className="h-full w-full object-cover"
              />
              {/* Purple tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 via-transparent to-transparent" />
            </div>

            {/* Floating agent chips */}
            {AGENT_CHIPS.map((chip) => (
              <div
                key={chip.label}
                className={`absolute ${chip.position} z-20 animate-float rounded-2xl border border-slate-100 bg-white/95 px-3 py-2.5 shadow-lg shadow-slate-200/60 backdrop-blur-sm`}
                style={{ animationDelay: chip.delay }}
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                    <chip.icon size={15} />
                  </span>
                  <span className="whitespace-pre-line text-[10px] font-semibold leading-tight text-brand-dark">
                    {chip.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Bottom badge card */}
            <div className="absolute -bottom-4 left-1/2 z-30 w-[78%] -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/70 sm:-bottom-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple-soft text-brand-purple">
                  <Sparkles size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-dark">
                    Your Always-On AI Team
                  </p>
                  <p className="text-xs text-slate-400">
                    Smarter. Faster. Scalable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKFORCE FEATURES ================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              A New Way to Work
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              More Than a Tool — A Complete Workforce
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Unlike a single AI tool, an AI workforce is a coordinated
              ecosystem of specialized AI agents, each designed to handle a
              specific function, seamlessly working together to achieve your
              business goals.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
            {WORKFORCE_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6"
              >
                <span
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${feature.color}`}
                >
                  <feature.icon size={24} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-brand-dark">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="bg-slate-50/60 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Left — Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-300/40">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                alt="AI workforce dashboard"
                className="h-[380px] w-full object-cover sm:h-[440px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 via-brand-navy/40 to-transparent" />

              {/* Glass agent panel */}
              <div className="absolute left-5 top-1/2 w-[62%] -translate-y-1/2 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:left-8 sm:w-[55%]">
                <div className="mb-3 flex items-center gap-2">
                  <Bot size={16} className="text-cyan-300" />
                  <span className="text-sm font-bold text-white">AI Agents</span>
                </div>
                <div className="space-y-2">
                  {AGENT_PANEL_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm"
                    >
                      <item.icon size={13} className="shrink-0 text-cyan-300" />
                      <span className="text-xs font-medium text-white/90">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connected workforce card */}
              <div className="absolute bottom-6 right-5 max-w-[200px] rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:right-8">
                <p className="text-sm font-bold leading-snug text-white">
                  One Connected{" "}
                  <span className="text-cyan-300">AI Workforce</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right — Steps */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              Intelligence in Action
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Your AI workforce understands your business, uses your data,
              follows your processes, and takes action — just like a real team.
            </p>

            <div className="mt-10 space-y-7">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple-soft text-sm font-bold text-brand-purple">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= REAL IMPACT ================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Real Impact
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              A Stronger Business, A Smarter Future
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              An AI workforce helps you save time, reduce costs, improve
              customer experiences, and unlock new growth opportunities.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {IMPACT_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue transition-transform duration-300 group-hover:scale-110">
                  <feature.icon size={22} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-brand-dark">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section id="consultation" className="bg-white px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-dark to-[#1e2a6e] px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-purple/30 blur-3xl" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200/70">
              Ready to Build Your AI Workforce?
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let&apos;s Create Your Always-On AI Team
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100/70 sm:text-base">
              Discover how an AI workforce can transform your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-lg transition-all hover:bg-blue-50"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Explore Our Solutions
              </Link>
            </div>

            {/* Handwritten note */}
            <p className="font-hand absolute -right-2 bottom-0 hidden rotate-[-8deg] text-2xl font-semibold text-blue-200/80 lg:block">
              The future works with AI
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <span className="text-lg font-extrabold tracking-tight text-brand-dark">
            AI Works<span className="text-brand-blue">Force</span>
          </span>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} AI WorksForce. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}