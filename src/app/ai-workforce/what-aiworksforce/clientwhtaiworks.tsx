"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Zap,
  Cog,
  Clock,
  TrendingUp,
  Users,
  BarChart3,
  X,
  Check,
  Search,
  Wrench,
  Play,
  ChartLine,
  Quote,
  Menu,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Sparkles,
  User,
} from "lucide-react";

/* ============================================
   DATA
============================================ */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What is AIWorksForce?", href: "#", active: true },
  { label: "Solutions", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

const HERO_CHIPS = [
  { icon: Cog, title: "Automate", desc: "Repetitive Work", position: "top-[6%] left-[2%]", delay: "0s" },
  { icon: User, title: "Improve", desc: "Customer Experience", position: "top-[30%] left-[6%]", delay: "1s" },
  { icon: TrendingUp, title: "Drive", desc: "Business Growth", position: "top-[52%] left-[10%]", delay: "2s" },
];

const STATS = [
  { value: "50+", label: "Businesses Empowered" },
  { value: "2M+", label: "Tasks Automated" },
  { value: "99%", label: "Client Satisfaction" },
];

const MODEL_FEATURES = [
  {
    icon: Zap,
    color: "bg-brand-purple-soft text-brand-purple",
    title: "Dedicated AI Workforce",
    desc: "A team of specialized AI agents for every key function.",
  },
  {
    icon: Cog,
    color: "bg-brand-green-soft text-brand-green",
    title: "End-to-End Automation",
    desc: "From operations to outreach, we cover the full workflow.",
  },
  {
    icon: Clock,
    color: "bg-brand-orange-soft text-brand-orange",
    title: "24/7 Productivity",
    desc: "Your AI team works around the clock, without breaks.",
  },
  {
    icon: TrendingUp,
    color: "bg-rose-50 text-rose-500",
    title: "Custom-Built for Your Business",
    desc: "Solutions tailored to your goals, industry, and processes.",
  },
  {
    icon: Users,
    color: "bg-brand-purple-soft text-brand-purple",
    title: "Human + AI Collaboration",
    desc: "AI handles the work, your team focuses on what matters most.",
  },
  {
    icon: BarChart3,
    color: "bg-cyan-50 text-cyan-500",
    title: "Measurable Results",
    desc: "Save time, reduce costs, and drive real growth.",
  },
];

const COMPARISON = {
  traditional: [
    "Manual and repetitive tasks",
    "Scattered tools and systems",
    "Limited working hours",
    "Higher operational costs",
    "Slower growth and response time",
  ],
  aiworksforce: [
    "Automated and intelligent workflows",
    "One integrated AI workforce",
    "24/7 operations",
    "Cost-efficient and scalable",
    "Faster growth with measurable results",
  ],
};

const PROCESS_STEPS = [
  {
    icon: Search,
    color: "bg-brand-purple-soft text-brand-purple",
    step: "01",
    title: "Discover",
    desc: "We understand your business, goals, and challenges.",
  },
  {
    icon: Wrench,
    color: "bg-brand-green-soft text-brand-green",
    step: "02",
    title: "Design",
    desc: "We build your custom AI workforce with the right agents.",
  },
  {
    icon: Play,
    color: "bg-brand-orange-soft text-brand-orange",
    step: "03",
    title: "Deploy",
    desc: "We integrate and launch into your workflow.",
  },
  {
    icon: ChartLine,
    color: "bg-rose-50 text-rose-500",
    step: "04",
    title: "Grow",
    desc: "You get continuous optimization and measurable results.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "AIWorksForce has completely transformed our customer operations. We've saved hours of manual work and our response time is now instant.",
    name: "Rohit Sharma",
    role: "CEO, Retail Brand",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "The AI agents handle our lead generation and outreach seamlessly. We've seen a 40% increase in qualified leads in just 3 months.",
    name: "Priya Mehta",
    role: "Founder, SaaS Company",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "A reliable, scalable, and cost-effective solution. AIWorksForce feels like an extension of our own team.",
    name: "Amit Verma",
    role: "Operations Head, E-commerce",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

const SOCIALS = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

/* ============================================
   COMPONENT
============================================ */

export default function AIWorkforceWhyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark antialiased">
    

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-purple-soft/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-20 lg:pt-16">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              The New Way to Work
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-dark sm:text-5xl lg:text-[3.4rem]">
              What{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-purple-light bg-clip-text text-transparent">
                AI WorksForce?
              </span>
            </h1>
            <p className="mt-4 text-base font-bold text-brand-dark sm:text-lg">
              Why businesses choose our model
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              AIWorksForce gives you a dedicated team of AI agents that work
              alongside your people — automating tasks, handling operations,
              interacting with customers, and driving growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all hover:bg-brand-blue-dark hover:shadow-xl"
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:border-brand-blue hover:text-brand-blue"
              >
                See How it Works
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-brand-dark sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-slate-400 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative z-10 mx-auto w-[85%] overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
                alt="Professional with her AI workforce"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/15 via-transparent to-transparent" />
            </div>

            {/* Floating chips (left of image) */}
            {HERO_CHIPS.map((chip) => (
              <div
                key={chip.title}
                className={`absolute ${chip.position} z-20 animate-float rounded-2xl border border-slate-100 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-slate-200/60 backdrop-blur-sm`}
                style={{ animationDelay: chip.delay }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                    <chip.icon size={15} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[11px] font-bold text-brand-dark">
                      {chip.title}
                    </p>
                    <p className="text-[10px] text-slate-400">{chip.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Top-right badge */}
            <div className="absolute -top-2 right-0 z-30 animate-float rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-lg shadow-slate-200/60 backdrop-blur-sm" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="mt-0.5 text-brand-purple" />
                <div className="leading-tight">
                  <p className="text-[11px] font-bold text-brand-dark">
                    Your AI Workforce
                  </p>
                  <p className="text-[10px] font-medium text-slate-400">
                    Always On
                  </p>
                  <p className="text-[10px] font-medium text-slate-400">
                    Always Ahead
                  </p>
                </div>
              </div>
            </div>

            {/* Robot card (bottom-right) */}
            <div className="absolute -bottom-4 right-0 z-30 hidden w-36 animate-float-slow sm:block">
              <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-xl shadow-slate-200/70">
                <div className="flex flex-col items-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-brand-purple-soft">
                    <Bot size={36} className="text-brand-blue" />
                  </span>
                  <span className="mt-2 rounded-lg bg-brand-dark px-2.5 py-1 text-[9px] font-semibold text-white">
                    AI WorksForce
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY BUSINESSES CHOOSE ================= */}
      <section className="bg-slate-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Built for Real Business Impact
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              Why Businesses Choose Our Model
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              We&apos;re more than just an AI tool — we&apos;re your AI
              workforce partner, focused on real outcomes.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {MODEL_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${feature.color}`}
                >
                  <feature.icon size={24} />
                </span>
                <h3 className="mt-5 text-base font-bold text-brand-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Traditional to Modern
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              A Smarter Way to Work
            </h2>
            <p className="mt-4 text-base text-slate-500">
              See how AIWorksForce is different.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Traditional */}
            <div className="rounded-3xl bg-slate-50/70 p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200/70 text-slate-500">
                  <Users size={20} />
                </span>
                <h3 className="text-lg font-bold text-brand-dark">
                  Traditional Approach
                </h3>
              </div>
              <ul className="mt-7 space-y-4">
                {COMPARISON.traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200/70 text-slate-500">
                      <X size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AIWorksForce */}
            <div className="rounded-3xl bg-brand-purple-soft/60 p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple text-white">
                  <Bot size={20} />
                </span>
                <h3 className="text-lg font-bold text-brand-purple">
                  With AIWorksForce
                </h3>
              </div>
              <ul className="mt-7 space-y-4">
                {COMPARISON.aiworksforce.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-brand-dark">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="bg-slate-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Simple. Powerful. Effective
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              How Our AI Workforce Works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              From understanding your business to delivering real results — we
              make it simple.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Connector arrow (desktop) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <ArrowRight
                    size={22}
                    className="absolute right-[-1.4rem] top-7 hidden text-slate-300 lg:block"
                  />
                )}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.color}`}
                  >
                    <step.icon size={24} />
                  </span>
                </div>
                <p className="mt-3 text-xs font-bold text-brand-purple">
                  {step.step}
                </p>
                <h3 className="mt-1 text-base font-bold text-brand-dark">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Real Stories. Real Growth
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              Trusted by Growing Businesses
            </h2>
            <p className="mt-4 text-base text-slate-500">
              See what our clients say about working with AIWorksForce.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <Quote size={26} className="text-brand-purple-soft" fill="currentColor" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-500">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-purple-soft"
                  />
                  <div>
                    <p className="text-sm font-bold text-brand-dark">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section id="consultation" className="bg-white px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-dark to-[#1e2a6e] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-purple/30 blur-3xl" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200/70">
              Ready to Build Your AI Workforce?
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let&apos;s Make AI Work for Your Business
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100/70 sm:text-base">
              Join businesses that are already saving time, reducing costs, and
              growing with AIWorksForce.
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

            <p className="font-hand absolute -right-2 bottom-0 hidden rotate-[-8deg] text-2xl font-semibold text-blue-200/80 lg:block">
              The future works with AI
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
}