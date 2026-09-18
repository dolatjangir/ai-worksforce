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
import AIWorkflowHero from "@/components/ai-workflow-hero/reusable-hero";

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
     

      {/* ================= HERO ================= */}
    <AIWorkflowHero
  eyebrow="THE FUTURE OF WORK"
  title="What is an"
  highlightedTitle="AI Workforce?"
  subtitle=""
  description="An AI workforce is a team of intelligent AI agents that work alongside your human team to automate tasks, handle operations, interact with customers, and drive growth — 24/7."
  imageSrc="/ai-workforce/what-an-ai-workforce-hero.png"
  imageAlt="Professional working with her AI workforce"
  primaryLabel="See How It Works"
  primaryHref="#how-it-works"
  secondaryLabel="Talk to an Expert"
  secondaryHref="#consultation"
/>

      {/* ================= WORKFORCE FEATURES ================= */}
      <section className="bg-white py-10">
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
      <section id="how-it-works" className="bg-slate-50/60 py-10">
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
            AWFI Engine™ helps your AI workforce understand your business, use your data, follow your processes and take action—just like a real team.
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
      <section className="bg-white py-10 lg:py-24">
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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-dark to-[#1e2a6e] px-6 py-10 text-center sm:px-12">
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

     
    </div>
  );
}