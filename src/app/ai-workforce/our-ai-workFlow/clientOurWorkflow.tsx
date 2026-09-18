"use client";

import { useState } from "react";
import {
  ArrowRight, Play, Bot, BarChart3, Search, FileText, Settings,
  TrendingUp, Clock, DollarSign, Rocket, Check, Menu, X,
  Sparkles, Target, RefreshCw, Zap,
} from "lucide-react";
import AIWorkflowHero from "@/components/ai-workflow-hero/reusable-hero";

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
    

      {/* ================= HERO ================= */}
    <AIWorkflowHero
  eyebrow="A SMARTER WAY TO WORK"
  title="Our"
  highlightedTitle="AI WorkFlow"
  subtitle="AI agents, experts and operators"
  description="A structured, collaborative workflow where AI agents, human experts, and operators work together to turn your business goals into real results — faster, smarter, and at scale."
  imageSrc="/ai-workforce/our-workforce-hero.png"
  imageAlt="AI agents, experts and operators working together"
  primaryLabel="Book a Free Consultation"
  primaryHref="#cta"
  secondaryLabel="See it in Action"
  secondaryHref="#process"
/>

      {/* ================= PROCESS ================= */}
      <section id="process" className="bg-white py-10">
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
      <section className="bg-[linear-gradient(to_bottom_right,#eff6ff,#ffffff,#eef2ff)] py-10">
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
      <section className="bg-white py-10">
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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#061a38_0%,#0a2a63_55%,#123a8c_100%)] px-6 py-10 text-center shadow-2xl shadow-[rgba(32,83,150,0.25)] sm:px-12">
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