"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  FileText,
  Cog,
  Play,
  BarChart3,
  Users,
  Wrench,
  Zap,
  Shield,
  TrendingUp,
  Target,
  FileEdit,
  Bot,
  Rocket,
  Database,
  Lightbulb,
  Briefcase,
  MessageSquare,
  LineChart,
  Menu,
  X,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

/* ============================================
   DATA
============================================ */

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What is AIWorksForce?", href: "#" },
  { label: "How it Works", href: "#", active: true },
  { label: "Solutions", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

const HERO_FLOW = [
  { icon: Target, label: "Your Business Goals", position: "top-[4%] left-[8%]" },
  { icon: FileEdit, label: "AI Strategy & Design", position: "top-[36%] left-[2%]" },
  { icon: Bot, label: "AI Agents in Action", position: "top-[32%] right-0" },
  { icon: LineChart, label: "Real Results & Growth", position: "top-[2%] right-[2%]" },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    color: "bg-brand-purple-soft text-brand-purple",
    step: "01",
    title: "Discover",
    desc: "We understand your business, goals, challenges, and opportunities.",
    outcome: "Clear problem definition and success criteria.",
  },
  {
    icon: FileText,
    color: "bg-cyan-50 text-cyan-500",
    step: "02",
    title: "Design",
    desc: "We create a customized AI strategy and design your AI workforce.",
    outcome: "A tailored solution plan with the right AI agents.",
  },
  {
    icon: Cog,
    color: "bg-brand-purple-soft text-brand-purple",
    step: "03",
    title: "Build & Integrate",
    desc: "We set up, train, and integrate AI agents into your existing systems.",
    outcome: "A fully functional AI workforce, ready to go.",
  },
  {
    icon: Play,
    color: "bg-brand-purple-soft text-brand-purple",
    step: "04",
    title: "Deploy",
    desc: "We launch the AI workforce and ensure smooth adoption with your team.",
    outcome: "Live AI operations delivering real value.",
  },
  {
    icon: BarChart3,
    color: "bg-brand-purple-soft text-brand-purple",
    step: "05",
    title: "Optimize & Scale",
    desc: "We monitor performance, refine continuously, and scale as you grow.",
    outcome: "Higher efficiency, better results, and long-term growth.",
  },
];

const PARTNERSHIP_FEATURES = [
  {
    icon: Users,
    color: "bg-brand-purple-soft text-brand-purple",
    title: "Business-First Approach",
    desc: "Every solution is designed around your real business needs.",
  },
  {
    icon: Wrench,
    color: "bg-brand-green-soft text-brand-green",
    title: "End-to-End Support",
    desc: "From strategy to scaling, we're with you at every step.",
  },
  {
    icon: Zap,
    color: "bg-brand-orange-soft text-brand-orange",
    title: "Fast & Efficient",
    desc: "Get your AI workforce up and running quickly without disruption.",
  },
  {
    icon: Shield,
    color: "bg-rose-50 text-rose-500",
    title: "Secure & Reliable",
    desc: "Built with enterprise-grade security and compliance standards.",
  },
  {
    icon: TrendingUp,
    color: "bg-cyan-50 text-cyan-500",
    title: "Continuous Improvement",
    desc: "We optimize and scale your AI workforce as your business grows.",
  },
];

const OUTCOME_FLOW = [
  { icon: MessageSquare, label: "Business Problem" },
  { icon: FileEdit, label: "AI Strategy" },
  { icon: Bot, label: "AI Agents" },
  { icon: Rocket, label: "Deployment" },
  { icon: TrendingUp, label: "Real Results" },
];

const OUTCOME_STATS = [
  { icon: Briefcase, value: "50+", label: "Businesses Empowered" },
  { icon: Zap, value: "2M+", label: "Tasks Automated" },
  { icon: MessageSquare, value: "99%", label: "Client Satisfaction" },
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

export default function HowItWorksPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark antialiased">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-brand-dark sm:text-2xl">
              AI Works<span className="text-brand-blue">Force</span>
            </span>
            <span className="text-[10px] font-medium tracking-wide text-slate-400">
              Automate. Accelerate. Grow.
            </span>
          </Link>

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

          <div className="flex items-center gap-3">
            <Link
              href="#consultation"
              className="hidden items-center gap-1.5 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-navy hover:shadow-lg sm:inline-flex"
            >
              Book a Free Consultation
              <ArrowUpRight size={15} />
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
        <div className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-purple-soft/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-20 lg:pt-16">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Simple. Structured. Impactful.
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-dark sm:text-5xl lg:text-[3.4rem]">
              How it Works
            </h1>
            <p className="mt-4 text-base font-bold text-brand-dark sm:text-lg">
              From business problem to AI operations
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              We follow a clear, step-by-step process to understand your
              business, design the right AI workforce, and deploy it for real
              results — quickly, securely, and at scale.
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
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative z-10 mx-auto w-[72%] overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
                alt="Professional with her AI workforce"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/15 via-transparent to-transparent" />
            </div>

            {/* Flow chips */}
            {HERO_FLOW.map((chip, i) => (
              <div
                key={chip.label}
                className={`absolute ${chip.position} z-20 animate-float rounded-2xl border border-slate-100 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-slate-200/60 backdrop-blur-sm`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                    <chip.icon size={15} />
                  </span>
                  <span className="whitespace-pre-line text-[11px] font-bold leading-tight text-brand-dark">
                    {chip.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Center card */}
            <div className="absolute bottom-[8%] left-1/2 z-30 w-[70%] -translate-x-1/2 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-xl shadow-slate-200/70 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-extrabold leading-snug text-brand-dark">
                    From Ideas
                    <br />
                    to Impact
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    with AI WorksForce
                  </p>
                </div>
                <BarChart3 size={36} className="shrink-0 text-brand-purple" />
              </div>
            </div>

            {/* Handwritten note */}
            <p className="font-hand absolute -right-2 bottom-[26%] z-20 hidden rotate-[-10deg] text-xl font-semibold leading-tight text-brand-purple/70 lg:block">
              Smarter
              <br />
              Operations
              <br />
              Brighter
              <br />
              Growth
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              A Clear Path to AI-Powered Growth
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              We turn your business challenges into intelligent, automated
              operations — in just a few simple steps.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Connector (desktop) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute right-[-0.9rem] top-16 hidden items-center gap-1 lg:flex">
                    <span className="h-px w-6 border-t-2 border-dashed border-slate-300" />
                    <ArrowRight size={14} className="text-slate-300" />
                  </div>
                )}

                {/* Step number */}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-purple-soft text-xs font-bold text-brand-purple">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="mt-4 flex justify-center">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}
                  >
                    <step.icon size={26} />
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-brand-dark">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[210px] text-xs leading-relaxed text-slate-400">
                  {step.desc}
                </p>

                {/* Outcome */}
                <div className="mx-auto mt-5 max-w-[210px] rounded-xl bg-slate-50 p-3.5 text-left">
                  <p className="text-[11px] font-bold text-brand-dark">
                    Outcome:
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                    {step.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERSHIP ================= */}
      <section className="bg-slate-50/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              What Makes Our Process Different
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              More Than Implementation – A True Partnership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              We don&apos;t just set up AI. We work with you at every step to
              ensure your AI workforce delivers measurable business impact.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
            {PARTNERSHIP_FEATURES.map((feature) => (
              <div key={feature.title} className="text-center">
                <span
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-110 ${feature.color}`}
                >
                  <feature.icon size={26} />
                </span>
                <h3 className="mt-4 text-sm font-bold leading-snug text-brand-dark">
                  {feature.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[200px] text-xs leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REAL OUTCOMES ================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Left — Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-300/40">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
                alt="Business leader reviewing AI results"
                className="h-[380px] w-full object-cover sm:h-[440px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/70 via-brand-navy/30 to-transparent" />

              {/* Vertical flow panel */}
              <div className="absolute left-5 top-1/2 w-[55%] -translate-y-1/2 space-y-2.5 sm:left-8">
                {OUTCOME_FLOW.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 backdrop-blur-md"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/20 text-cyan-300">
                      <item.icon size={13} />
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {item.label}
                    </span>
                  </div>
                ))}
                <p className="pt-1 text-[10px] font-medium leading-tight text-white/70">
                  Ideas → Action → Results
                </p>
              </div>

              {/* Badge card */}
              <div className="absolute bottom-5 right-5 max-w-[210px] rounded-2xl border border-slate-100 bg-white/95 p-3.5 shadow-xl backdrop-blur-sm sm:right-8">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-purple-soft text-brand-purple">
                    <Lightbulb size={16} />
                  </span>
                  <p className="text-[11px] font-bold leading-snug text-brand-dark">
                    Turning Business Challenges into AI Opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Copy + Stats */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Real Outcomes
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              From Challenges to Results
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Our proven process helps businesses automate operations, save
              time, reduce costs, and achieve measurable growth.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {OUTCOME_STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple-soft text-brand-purple">
                    <stat.icon size={18} />
                  </span>
                  <p className="mt-3 text-2xl font-extrabold text-brand-dark sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-slate-400 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
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
              Ready to Start?
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let&apos;s Build Your AI Workforce
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100/70 sm:text-base">
              Take the first step towards smarter operations and real business
              growth.
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
                See Our Solutions
              </Link>
            </div>

            <p className="font-hand absolute -right-2 bottom-0 hidden rotate-[-8deg] text-2xl font-semibold leading-tight text-blue-200/80 lg:block">
              Smarter Businesses
              <br />
              Happier Customers
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-brand-dark">
              AI Works<span className="text-brand-blue">Force</span>
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-wide text-slate-400">
              Automate. Accelerate. Grow.
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-500 transition-colors hover:text-brand-dark"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-blue-50 hover:text-brand-blue"
              >
                <social.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-slate-100 px-4 pt-6 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2024 AIWorksForce. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-brand-dark">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-brand-dark">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-brand-dark">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}