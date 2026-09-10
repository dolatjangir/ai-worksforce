"use client";

import { useState } from "react";
import {
  ArrowRight, Play, Bot, BarChart3, Search, FileText, Settings,
  TrendingUp, Clock, DollarSign, Rocket, Check, Menu, X,
  Sparkles, Target, RefreshCw, Zap,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "What is AIWorksForce?", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "Our AI Workflow", href: "#", active: true },
  { label: "Solutions", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Understand", desc: "We analyze your business goals, challenges, and opportunities.", icon: Search, chip: "bg-[#e0e7ff] text-indigo-500", ring: "bg-indigo-50", iconColor: "text-indigo-500" },
  { num: "02", title: "Plan", desc: "Our experts design the right AI workflow with the right agents.", icon: FileText, chip: "bg-sky-100 text-brand-sky", ring: "bg-sky-50", iconColor: "text-brand-sky" },
  { num: "03", title: "Build", desc: "We configure, train, and integrate AI agents into your systems.", icon: Settings, chip: "bg-brand-green-soft text-brand-green", ring: "bg-brand-green-soft/60", iconColor: "text-brand-green" },
  { num: "04", title: "Operate", desc: "AI agents and operators work together to execute tasks in real time.", icon: Play, chip: "bg-brand-orange-soft text-brand-orange", ring: "bg-brand-orange-soft/60", iconColor: "text-brand-orange" },
  { num: "05", title: "Optimize", desc: "We monitor, learn, and continuously improve for greater results.", icon: TrendingUp, chip: "bg-rose-100 text-rose-500", ring: "bg-rose-50", iconColor: "text-rose-500" },
];

const COLLAB_CARDS = [
  { title: "AI Agents", subtitle: "Your Always-On Workforce", icon: Bot, chip: "bg-brand-blue-soft text-brand-blue", check: "bg-brand-blue/10 text-brand-blue",
    items: ["Automate repetitive tasks", "Handle customer interactions", "Process and analyze data", "Learn and improve continuously"] },
  { title: "Experts", subtitle: "Strategy, Design & Guidance", icon: Sparkles, chip: "bg-brand-purple-soft text-brand-purple", check: "bg-brand-purple/10 text-brand-purple",
    items: ["Identify opportunities", "Design AI solutions", "Train and fine-tune agents", "Ensure best practices and ROI"] },
  { title: "Operators", subtitle: "Execution & Oversight", icon: Target, chip: "bg-brand-green-soft text-brand-green", check: "bg-brand-green/10 text-brand-green",
    items: ["Manage day-to-day operations", "Monitor performance", "Handle exceptions", "Keep your workflows running smoothly"] },
];

const RESULTS = [
  { title: "Faster Execution", desc: "Get more done in less time", icon: Clock, chip: "bg-brand-blue-soft text-brand-blue" },
  { title: "Lower Costs", desc: "Reduce operational overhead", icon: DollarSign, chip: "bg-brand-green-soft text-brand-green" },
  { title: "Higher Productivity", desc: "Your team focuses on what matters most", icon: BarChart3, chip: "bg-brand-purple-soft text-brand-purple" },
  { title: "Scalable Growth", desc: "Easily expand as your business grows", icon: Rocket, chip: "bg-rose-100 text-rose-500" },
];

export default function AiWorkflowPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
              <a key={link.label} href={link.href}
                className={`relative text-[13px] font-medium transition-colors ${
                  link.active
                    ? "text-heading after:absolute after:-bottom-4 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-blue"
                    : "text-text-muted hover:text-heading"
                }`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta"
              className="hidden items-center gap-1.5 rounded-full bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:bg-[#4a22c7] sm:inline-flex">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 text-heading lg:hidden"
              aria-label="Toggle menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-blue-100 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                    link.active ? "bg-brand-blue-soft text-brand-blue" : "text-text-muted hover:bg-blue-50"
                  }`}>
                  {link.label}
                </a>
              ))}
              <a href="#cta"
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom_right,#eff6ff,#ffffff,#eef2ff)]">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-blue-soft blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-brand-purple-soft blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-20">
          {/* Left copy */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">
              A Smarter Way to Work
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-[3.4rem]">
              Our{" "}
              <span className="bg-[linear-gradient(to_right,#06b6d4,#2563eb,#7c3aed)] bg-clip-text text-transparent">
                AI WorkFlow
              </span>
            </h1>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
              AI agents, experts and operators
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted">
              A structured, collaborative workflow where AI agents, human experts,
              and operators work together to turn your business goals into real
              results — faster, smarter, and at scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-brand-blue-dark">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#process"
                className="inline-flex items-center gap-2 rounded-full border-2 border-blue-200 bg-white/70 px-7 py-3 text-sm font-semibold text-heading backdrop-blur transition hover:border-brand-blue hover:text-brand-blue">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                  <Play className="ml-0.5 h-3 w-3 fill-current" />
                </span>
                See it in Action
              </a>
            </div>
          </div>

          {/* Right — workflow diagram */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative hidden h-[520px] md:block">
              {/* curved connector arrows */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 520" fill="none" aria-hidden="true">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0 0L10 5L0 10z" fill="#0876ed" />
                  </marker>
                </defs>
                <path d="M300 110 Q 210 130 180 190" stroke="#0876ed" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#arrow)" />
                <path d="M360 110 Q 450 130 470 190" stroke="#0876ed" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#arrow)" />
                <path d="M190 330 Q 240 390 280 400" stroke="#0876ed" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#arrow)" />
                <path d="M450 330 Q 400 390 330 400" stroke="#0876ed" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#arrow)" />
                <path d="M305 415 L 305 440" stroke="#0876ed" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#arrow)" />
                <path d="M305 300 L 305 255" stroke="#0876ed" strokeWidth="1.5" strokeDasharray="5 5" markerEnd="url(#arrow)" />
              </svg>

              {/* AI Agents card (top) */}
              <div className="absolute left-1/2 top-2 w-56 -translate-x-1/2 animate-float rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-xl shadow-[rgba(24,74,140,0.12)]">
                <div className="mx-auto -mt-10 mb-2 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed)] text-white shadow-lg">
                  <Bot className="h-8 w-8" />
                </div>
                <p className="text-sm font-bold text-heading">AI Agents</p>
                <p className="text-xs text-text-muted">Execute, automate, and learn 24/7</p>
              </div>

              {/* Smarter Operations pill */}
              <div className="absolute left-0 top-16 flex animate-float-slow items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-semibold text-heading shadow-lg shadow-[rgba(24,74,140,0.08)]">
                <Zap className="h-3.5 w-3.5 fill-brand-purple text-brand-purple" />
                Smarter Operations
              </div>

              {/* Better Results pill */}
              <div className="absolute right-0 top-16 flex animate-float items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-semibold text-heading shadow-lg shadow-[rgba(24,74,140,0.08)]">
                <Target className="h-3.5 w-3.5 text-brand-purple" />
                Better Results
              </div>

              {/* Experts card (left) */}
              <div className="absolute left-0 top-44 w-44 animate-float-slow rounded-2xl border border-blue-100 bg-white p-3 text-center shadow-xl shadow-[rgba(24,74,140,0.12)]">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="AI workflow expert" className="mx-auto h-24 w-full rounded-xl object-cover object-top" />
                <p className="mt-2.5 text-sm font-bold text-heading">Experts</p>
                <p className="text-xs text-text-muted">Design, strategize, and optimize</p>
              </div>

              {/* Operators card (right) */}
              <div className="absolute right-0 top-44 w-44 animate-float rounded-2xl border border-blue-100 bg-white p-3 text-center shadow-xl shadow-[rgba(24,74,140,0.12)]">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                  alt="AI workflow operator" className="mx-auto h-24 w-full rounded-xl object-cover object-top" />
                <p className="mt-2.5 text-sm font-bold text-heading">Operators</p>
                <p className="text-xs text-text-muted">Monitor, manage, and ensure success</p>
              </div>

              {/* Continuous Improvement pill */}
              <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 animate-float-slow items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-semibold text-heading shadow-lg shadow-[rgba(24,74,140,0.08)]">
                <RefreshCw className="h-3.5 w-3.5 text-brand-purple" />
                Continuous Improvement
              </div>

              {/* Your Business Growth card (center) */}
              <div className="absolute bottom-0 left-1/2 w-56 -translate-x-1/2 rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-xl shadow-[rgba(24,74,140,0.12)]">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-soft">
                  <BarChart3 className="h-5 w-5 text-brand-blue" />
                </div>
                <p className="text-sm font-extrabold tracking-tight text-heading">Your Business Growth</p>
              </div>
            </div>

            {/* Mobile diagram fallback */}
            <div className="flex flex-col items-center gap-4 md:hidden">
              {[
                { icon: Bot, label: "AI Agents", sub: "Execute, automate, and learn 24/7", chip: "bg-[linear-gradient(135deg,#06b6d4,#2563eb,#7c3aed)] text-white" },
                { icon: Sparkles, label: "Experts", sub: "Design, strategize, and optimize", chip: "bg-brand-blue-soft text-brand-blue" },
                { icon: Target, label: "Operators", sub: "Monitor, manage, and ensure success", chip: "bg-brand-green-soft text-brand-green" },
              ].map((c) => (
                <div key={c.label} className="w-full max-w-xs rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-lg shadow-[rgba(24,74,140,0.08)]">
                  <div className={`mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full ${c.chip}`}>
                    <c.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold text-heading">{c.label}</p>
                  <p className="text-xs text-text-muted">{c.sub}</p>
                </div>
              ))}
              <div className="w-full max-w-xs rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-lg shadow-[rgba(24,74,140,0.08)]">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-soft">
                  <BarChart3 className="h-5 w-5 text-brand-blue" />
                </div>
                <p className="text-sm font-extrabold text-heading">Your Business Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">The AI Workflow Process</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">From Strategy to Scale</h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              A clear, end-to-end workflow that brings together AI agents, experts and operators to deliver measurable business outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-[calc(50%+44px)] top-9 hidden items-center lg:flex">
                    <span className="h-px w-8 border-t-2 border-dashed border-blue-200" />
                    <ArrowRight className="-ml-1 h-3.5 w-3.5 text-brand-blue" />
                  </div>
                )}
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${step.chip}`}>{step.num}</span>
                <div className={`mt-3 flex h-16 w-16 items-center justify-center rounded-full ${step.ring}`}>
                  <step.icon className={`h-7 w-7 ${step.iconColor}`} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-heading">{step.title}</h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COLLABORATION ================= */}
      <section className="bg-[linear-gradient(to_bottom_right,#eff6ff,#ffffff,#eef2ff)] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">The People + AI Model</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">A Powerful Collaboration</h2>
            <p className="mt-4 text-base text-text-muted">
              The right mix of AI agents, human experts, and skilled operators — working as one team.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {COLLAB_CARDS.map((card) => (
              <div key={card.title}
                className="rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-xl shadow-[rgba(24,74,140,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[rgba(24,74,140,0.14)]">
                <div className="flex items-center gap-4">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.chip}`}>
                    <card.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-heading">{card.title}</h3>
                    <p className="text-xs font-medium text-text-muted">{card.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-heading">
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${card.check}`}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">Real Business Impact</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">Results at Every Step</h2>
            <p className="mt-4 text-base text-text-muted">
              A workflow designed to save time, reduce costs, and unlock new growth opportunities.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map((r) => (
              <div key={r.title} className="flex flex-col items-center text-center">
                <span className={`flex h-14 w-14 items-center justify-center rounded-full ${r.chip}`}>
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-heading">{r.title}</h3>
                <p className="mt-1.5 max-w-[220px] text-sm text-text-muted">{r.desc}</p>
              </div>
            ))}
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
            Ready to Transform Your Operations?
          </p>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Let&apos;s Build Your AI WorkFlow
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-blue-100/80">
            Combine AI agents, experts and operators to create real business impact.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-heading shadow-xl transition hover:bg-blue-50">
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white/10">
              Talk to Our Experts
            </a>
          </div>

          {/* handwritten note */}
          <div className="pointer-events-none absolute bottom-8 right-8 hidden rotate-[-8deg] md:block">
            <p className="font-hand text-3xl leading-tight text-cyan-300">
              Smarter Workflows<br />Brighter Futures
            </p>
            <svg className="ml-auto mt-1 h-10 w-24 text-cyan-300" viewBox="0 0 96 40" fill="none" aria-hidden="true">
              <path d="M90 4 Q 60 34 8 26 M8 26 l14 -6 M8 26 l4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}