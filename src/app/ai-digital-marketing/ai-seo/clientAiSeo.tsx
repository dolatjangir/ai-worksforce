"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileSearch,
  Gauge,
  Globe2,
  Link2,
  Menu,
  Play,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type Solution = {
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
};

type Benefit = {
  title: string;
  description: string;
};

/* =========================================================
   DATA
========================================================= */

const solutions: Solution[] = [
  {
    title: "AI Keyword Research",
    description:
      "Find high-intent keywords and uncover new opportunities with AI.",
    icon: Search,
    iconBg: "bg-[var(--color-blue-100)]",
    iconColor: "text-[var(--color-primary)]",
  },
  {
    title: "Content Optimization",
    description:
      "Create and optimize SEO-friendly content that ranks.",
    icon: FileSearch,
    iconBg: "bg-[var(--color-cyan-50)]",
    iconColor: "text-[var(--color-cyan-500)]",
  },
  {
    title: "Technical SEO",
    description:
      "Identify and fix technical issues automatically.",
    icon: Settings,
    iconBg: "bg-[var(--color-indigo-50)]",
    iconColor: "text-[var(--color-violet-600)]",
  },
  {
    title: "Link Building & Outreach",
    description:
      "Discover and reach high-quality backlink opportunities.",
    icon: Link2,
    iconBg: "bg-[var(--color-purple-soft)]",
    iconColor: "text-[var(--color-violet-600)]",
  },
  {
    title: "Rank Tracking & Analytics",
    description:
      "Monitor progress with real-time AI insights.",
    icon: BarChart3,
    iconBg: "bg-[var(--color-orange-soft)]",
    iconColor: "text-[var(--color-orange)]",
  },
  {
    title: "Competitor Analysis",
    description:
      "Stay ahead with AI-powered competitor insights.",
    icon: Target,
    iconBg: "bg-[var(--color-blue-100)]",
    iconColor: "text-[var(--color-primary)]",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Analyze",
    description:
      "We analyze your website, industry, and competitors using AI.",
    icon: Search,
    iconBg: "bg-[var(--color-blue-100)]",
    iconColor: "text-[var(--color-primary)]",
  },
  {
    number: "02",
    title: "Optimize",
    description:
      "Our AI optimizes your content, technical SEO, and strategy.",
    icon: Settings,
    iconBg: "bg-[var(--color-green-soft)]",
    iconColor: "text-[var(--color-green)]",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "We execute the plan with automated workflows and expert oversight.",
    icon: Play,
    iconBg: "bg-[var(--color-indigo-50)]",
    iconColor: "text-[var(--color-violet-600)]",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "You get higher rankings, more traffic, and increased revenue.",
    icon: BarChart3,
    iconBg: "bg-[var(--color-purple-soft)]",
    iconColor: "text-[var(--color-violet-600)]",
  },
];

const benefits: Benefit[] = [
  {
    title: "More Visibility",
    description: "Get discovered by more of the right customers.",
  },
  {
    title: "More Website Traffic",
    description: "Turn higher rankings into consistent organic traffic.",
  },
  {
    title: "More Qualified Leads",
    description: "Reach people actively searching for your solutions.",
  },
  {
    title: "More Sales & Revenue",
    description: "Convert organic growth into measurable business results.",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp:Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AISEOPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[var(--color-heading)]">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative z-50 border-b border-[var(--color-border)]/60 bg-white">
        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          {/* LOGO */}

          <Link
            href="/"
            className="group flex shrink-0 flex-col leading-none"
          >
            <span className="text-[21px] font-extrabold tracking-[-0.04em] text-[var(--color-heading)] sm:text-[23px]">
              <span className="text-[var(--color-primary)]">
                AI
              </span>{" "}
              WorksForce
            </span>

            <span className="mt-1 text-[7px] font-medium tracking-[0.03em] text-[var(--color-text-muted)] sm:text-[8px]">
              Automate. Accelerate. Grow.
            </span>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
            <Link
              href="/"
              className="relative py-6 text-[11px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Home
            </Link>

            <Link
              href="/what-is-ai-workforce"
              className="relative py-6 text-[11px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              What AIWorksForce?
            </Link>

            <Link
              href="/how-it-works"
              className="relative py-6 text-[11px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              How it Works
            </Link>

            <Link
              href="/our-ai-workflow"
              className="relative py-6 text-[11px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Our AI Workflow
            </Link>

            <div className="relative">
              <Link
                href="/solutions"
                className="
                  relative flex items-center gap-1 py-6
                  text-[11px] font-semibold
                  text-[var(--color-heading)]
                "
              >
                Solutions
                <ChevronDown size={12} />
              </Link>

              <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[var(--color-primary)]" />
            </div>

            <Link
              href="/industries"
              className="py-6 text-[11px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Industries
            </Link>

            <Link
              href="/resources"
              className="py-6 text-[11px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              Resources
            </Link>

            <Link
              href="/about"
              className="py-6 text-[11px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
            >
              About
            </Link>
          </nav>

          {/* DESKTOP CTA */}

          <Link
            href="#consultation"
            className="
              hidden min-h-[42px]
              items-center gap-2 rounded-xl
              bg-[var(--color-primary)]
              px-5 py-2.5
              text-[11px] font-bold text-white
              shadow-[0_10px_25px_rgba(37,99,235,0.18)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[var(--color-primary-dark)]
              lg:inline-flex
            "
          >
            Book a Free Consultation
            <ArrowRight size={14} />
          </Link>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-heading)] lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        {mobileMenuOpen && (
          <div className="border-t border-[var(--color-border)] bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col">
              {[
                ["Home", "/"],
                ["What AIWorksForce?", "/what-is-ai-workforce"],
                ["How it Works", "/how-it-works"],
                ["Our AI Workflow", "/our-ai-workflow"],
                ["Solutions", "/solutions"],
                ["Industries", "/industries"],
                ["Resources", "/resources"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-[var(--color-border)] py-3.5 text-sm font-medium text-[var(--color-heading)]"
                >
                  {label}
                </Link>
              ))}

              <Link
                href="#consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 text-sm font-bold text-white"
              >
                Book a Free Consultation
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-blue-50)] via-white to-[var(--color-indigo-50)]">
        {/* BACKGROUND GLOWS */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[var(--color-violet)]/10 blur-[100px]" />

        <div className="pointer-events-none absolute left-[40%] top-[10%] h-[400px] w-[400px] rounded-full bg-[var(--color-primary)]/10 blur-[90px]" />

        <div className="pointer-events-none absolute bottom-[-200px] left-[20%] h-[450px] w-[450px] rounded-full bg-[var(--color-cyan)]/10 blur-[100px]" />

        <div className="mx-auto grid max-w-[1440px] items-center px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-14 lg:grid-cols-[0.93fr_1.07fr] lg:px-12 lg:py-14 xl:px-16 xl:py-16">
          {/* LEFT HERO */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20 max-w-[590px]"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-[var(--color-violet-600)] sm:text-[10px]">
                Rank Higher. Grow Faster.
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="
                mt-4
                text-[52px] font-extrabold
                leading-[0.94]
                tracking-[-0.055em]
                text-[var(--color-heading)]
                sm:text-[62px]
                lg:text-[64px]
                xl:text-[72px]
              "
            >
              <span className="block">AI</span>

              <span className="block bg-[var(--gradient-heading)] bg-clip-text text-transparent">
                SEO
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="
                mt-3
                text-[19px] font-bold
                tracking-[-0.025em]
                text-[var(--color-heading)]
                sm:text-[21px]
                lg:text-[22px]
              "
            >
              Smarter SEO. Real Business Growth.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-4 max-w-[560px]
                text-[14px] leading-6
                text-[var(--color-text)]
                sm:text-[15px] sm:leading-7
                lg:text-[16px]
              "
            >
              Leverage the power of AI to create data-driven SEO
              strategies, automate content optimization, and achieve
              higher rankings with less effort. Let AI do the heavy
              lifting while you focus on growing your business.
            </motion.p>

            {/* HERO BUTTONS */}

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#consultation"
                className="
                  inline-flex min-h-[50px]
                  items-center justify-center gap-2
                  rounded-xl
                  bg-[var(--color-primary)]
                  px-6 py-3
                  text-[12px] font-bold text-white
                  shadow-[0_12px_30px_rgba(37,99,235,0.2)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[var(--color-primary-dark)]
                "
              >
                Book a Free Consultation
                <ArrowRight size={15} />
              </Link>

              <Link
                href="#process"
                className="
                  inline-flex min-h-[50px]
                  items-center justify-center gap-2
                  rounded-xl
                  border border-[var(--color-border-hover)]
                  bg-white/80
                  px-6 py-3
                  text-[12px] font-bold
                  text-[var(--color-heading)]
                  transition-all duration-300
                  hover:border-[var(--color-primary)]
                  hover:text-[var(--color-primary)]
                "
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-indigo-50)]">
                  <Play
                    size={9}
                    fill="currentColor"
                    className="ml-0.5 text-[var(--color-violet-600)]"
                  />
                </span>

                See How It Works
              </Link>
            </motion.div>

            {/* STATS */}

            <motion.div
              variants={fadeUp}
              className="
                mt-8 grid
                max-w-[590px]
                grid-cols-3
                border-t border-[var(--color-border)]/70
                pt-6
                sm:mt-9 sm:pt-7
              "
            >
              <div className="border-r border-[var(--color-border)] pr-4">
                <p className="text-[25px] font-extrabold tracking-tight text-[var(--color-primary)] sm:text-[27px]">
                  3x
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[var(--color-text-muted)] sm:text-[11px]">
                  Faster SEO Results
                </p>
              </div>

              <div className="border-r border-[var(--color-border)] px-4">
                <p className="text-[25px] font-extrabold tracking-tight text-[var(--color-primary)] sm:text-[27px]">
                  70%
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[var(--color-text-muted)] sm:text-[11px]">
                  Less Manual Work
                </p>
              </div>

              <div className="pl-4">
                <p className="text-[25px] font-extrabold tracking-tight text-[var(--color-primary)] sm:text-[27px]">
                  100%
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[var(--color-text-muted)] sm:text-[11px]">
                  Data-Driven Strategy
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <div className="relative mt-12 min-h-[470px] lg:mt-0 lg:min-h-[550px] xl:min-h-[590px]">
            {/* HERO GLOW */}

            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[80px] sm:h-[470px] sm:w-[470px]" />

            {/* ORBIT */}

            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-primary)]/10 sm:h-[500px] sm:w-[500px]" />

            {/* WOMAN */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute bottom-[-5px]
                left-1/2 z-20
                w-[285px]
                -translate-x-1/2
                sm:w-[350px]
                lg:bottom-[-15px]
                lg:w-[400px]
                xl:w-[450px]
              "
            >
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 h-[160px] w-[300px] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/15 blur-3xl" />

                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=90"
                  alt="Professional using AI SEO"
                  width={1000}
                  height={1200}
               
                  className="
                    relative z-10
                    h-auto w-full
                    object-cover
                    object-top
                    [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
                  "
                />
              </div>
            </motion.div>

            {/* HIGHER RANKINGS */}

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute left-[2%] top-[8%] z-30
                rounded-xl border border-white
                bg-white/95
                px-4 py-3
                shadow-[0_15px_40px_rgba(24,74,140,0.12)]
                backdrop-blur-xl
                sm:left-[3%]
                lg:left-[2%]
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex items-end gap-[2px]">
                  <span className="h-3 w-1.5 rounded-sm bg-[var(--color-primary)]" />
                  <span className="h-5 w-1.5 rounded-sm bg-[var(--color-primary)]" />
                  <span className="h-7 w-1.5 rounded-sm bg-[var(--color-primary)]" />
                </div>

                <p className="text-[10px] font-bold leading-4 text-[var(--color-heading)] sm:text-[11px]">
                  Higher Rankings
                  <br />
                  <span className="font-medium text-[var(--color-text-muted)]">
                    with AI
                  </span>
                </p>
              </div>
            </motion.div>

            {/* ORGANIC TRAFFIC */}

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute right-[0%] top-[3%] z-30
                w-[145px]
                rounded-xl border border-white
                bg-white/95
                px-4 py-3
                shadow-[0_15px_40px_rgba(24,74,140,0.12)]
                backdrop-blur-xl
                sm:w-[160px]
                lg:w-[170px]
              "
            >
              <p className="text-[10px] font-bold text-[var(--color-heading)] sm:text-[11px]">
                Organic Traffic
              </p>

              <p className="mt-1 text-[19px] font-extrabold text-[var(--color-green)] sm:text-[21px]">
                ↑ 256%
              </p>

              {/* Mini graph */}

              <div className="relative mt-3 h-[50px] overflow-hidden">
                <svg
                  viewBox="0 0 160 60"
                  className="h-full w-full"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 52L20 43L37 46L54 30L74 34L94 22L115 24L132 12L158 3"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />

                  <circle
                    cx="158"
                    cy="3"
                    r="3"
                    fill="var(--color-primary)"
                  />
                </svg>
              </div>
            </motion.div>

            {/* CHECKLIST */}

            <div
              className="
                absolute left-[1%] top-[27%] z-30
                w-[155px]
                rounded-xl border border-white
                bg-white/95
                px-3.5 py-3.5
                shadow-[0_15px_40px_rgba(24,74,140,0.12)]
                backdrop-blur-xl
                sm:w-[175px]
                lg:left-[2%]
                lg:w-[185px]
              "
            >
              <div className="space-y-2">
                {[
                  "Keyword Research",
                  "Content Optimization",
                  "Technical SEO",
                  "Performance Tracking",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-green-soft)]">
                      <Check
                        size={10}
                        strokeWidth={3}
                        className="text-[var(--color-green)]"
                      />
                    </span>

                    <span className="text-[8px] font-semibold text-[var(--color-heading)] sm:text-[9px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GOOGLE RANKINGS */}

            <div
              className="
                absolute right-[0%] top-[31%] z-30
                w-[150px]
                rounded-xl border border-white
                bg-white/95
                px-4 py-3
                shadow-[0_15px_40px_rgba(24,74,140,0.12)]
                backdrop-blur-xl
                sm:w-[165px]
                lg:w-[175px]
              "
            >
              <p className="text-[10px] font-bold text-[var(--color-heading)]">
                Top Google Rankings
              </p>

              <div className="mt-3 space-y-2">
                {[
                  "Your Brand",
                  "Target Keywords",
                  "More Customers",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="text-[9px] font-bold text-[var(--color-primary)]">
                      #1
                    </span>

                    <span className="text-[8px] font-medium text-[var(--color-text)] sm:text-[9px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI POWERED SEO */}

            <div
              className="
                absolute bottom-[12%] left-1/2 z-40
                flex w-[180px]
                -translate-x-1/2
                items-center gap-3
                rounded-xl border border-white
                bg-white/95
                px-4 py-3
                shadow-[0_15px_40px_rgba(24,74,140,0.14)]
                backdrop-blur-xl
                sm:w-[200px]
              "
            >
              <Search
                size={20}
                className="shrink-0 text-[var(--color-primary)]"
              />

              <span className="text-[10px] font-bold text-[var(--color-heading)] sm:text-[11px]">
                AI-Powered SEO
              </span>
            </div>

            {/* HANDWRITTEN NOTE */}

            <div
              className="
                absolute bottom-[5%] right-[0%]
                z-40 hidden
                rotate-[-7deg]
                font-hand text-lg
                font-semibold leading-5
                text-[var(--color-violet-600)]
                lg:block
                xl:text-xl
              "
            >
              <span className="block">More</span>
              <span className="block">Visibility</span>
              <span className="block">More Leads</span>
              <span className="block">More Growth</span>

              <svg
                className="absolute -left-10 top-8 h-12 w-12"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M53 5C42 18 30 32 9 47"
                  stroke="var(--color-violet-600)"
                  strokeWidth="1.5"
                />

                <path
                  d="M9 47L12 36M9 47L20 44"
                  stroke="var(--color-violet-600)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS SECTION
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mx-auto max-w-[900px] text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--color-violet-600)] sm:text-[10px]"
            >
              Complete AI-Powered SEO Solutions
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                mt-3
                text-[29px] font-extrabold
                leading-tight
                tracking-[-0.04em]
                text-[var(--color-heading)]
                sm:text-[36px]
                lg:text-[40px]
              "
            >
              Everything You Need to Rank Higher
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mx-auto mt-3 max-w-[720px]
                text-[13px] leading-6
                text-[var(--color-text)]
                sm:text-[15px]
              "
            >
              From strategy to execution, our AI-driven SEO solutions
              cover every aspect of your digital growth.
            </motion.p>
          </motion.div>

          {/* CARDS */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={staggerContainer}
            className="
              mt-10 grid
              grid-cols-1 gap-4
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
              xl:gap-5
            "
          >
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  key={solution.title}
                  variants={fadeUp}
                  className="
                    group
                    min-h-[190px]
                    rounded-xl
                    border border-[var(--color-border)]/70
                    bg-gradient-to-b
                    from-[var(--color-blue-50)]/45
                    to-white
                    px-5 py-6
                    text-center
                    shadow-[0_8px_30px_rgba(24,74,140,0.025)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--color-border-hover)]
                    hover:shadow-[0_15px_35px_rgba(24,74,140,0.08)]
                  "
                >
                  <div
                    className={`
                      mx-auto flex h-14 w-14
                      items-center justify-center
                      rounded-full
                      ${solution.iconBg}
                      transition-transform duration-300
                      group-hover:scale-105
                    `}
                  >
                    <Icon
                      size={25}
                      strokeWidth={2}
                      className={solution.iconColor}
                    />
                  </div>

                  <h3
                    className="
                      mx-auto mt-5 max-w-[145px]
                      text-[12px] font-extrabold
                      leading-[1.35]
                      text-[var(--color-heading)]
                      sm:text-[13px]
                    "
                  >
                    {solution.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[10px]
                      leading-[1.65]
                      text-[var(--color-text-muted)]
                      sm:text-[11px]
                    "
                  >
                    {solution.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROCESS SECTION
      ===================================================== */}

      <section
        id="process"
        className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
      >
        <div className="mx-auto max-w-[1390px] rounded-2xl bg-gradient-to-br from-[var(--color-blue-50)] via-white to-[var(--color-indigo-50)] px-4 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--color-violet-600)] sm:text-[10px]">
              How Our AI SEO Works
            </p>

            <h2
              className="
                mt-3
                text-[28px] font-extrabold
                tracking-[-0.04em]
                text-[var(--color-heading)]
                sm:text-[35px]
                lg:text-[39px]
              "
            >
              A Simple Process. Powerful Results.
            </h2>

            <p className="mt-3 text-[13px] text-[var(--color-text)] sm:text-[15px]">
              We combine AI technology with SEO expertise to deliver
              measurable growth.
            </p>
          </div>

          {/* PROCESS */}

          <div className="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {/* Connecting line */}

            <div className="pointer-events-none absolute left-[12%] right-[12%] top-[53px] hidden h-px bg-[var(--color-primary)]/20 lg:block" />

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="
                      relative z-10
                      min-h-[185px]
                      rounded-xl
                      border border-[var(--color-border)]/60
                      bg-white/90
                      px-5 py-6
                      text-center
                      shadow-[0_8px_25px_rgba(24,74,140,0.035)]
                    "
                  >
                    <div
                      className={`
                        mx-auto flex h-12 w-12
                        items-center justify-center
                        rounded-full
                        ${step.iconBg}
                      `}
                    >
                      <Icon
                        size={23}
                        className={step.iconColor}
                      />
                    </div>

                    <p className="mt-3 text-[10px] font-extrabold text-[var(--color-heading)]">
                      {step.number}
                    </p>

                    <h3 className="mt-0.5 text-[13px] font-extrabold text-[var(--color-heading)]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[190px] text-[10px] leading-[1.6] text-[var(--color-text-muted)] sm:text-[11px]">
                      {step.description}
                    </p>
                  </motion.article>

                  {/* Arrow */}

                  {index < processSteps.length - 1 && (
                    <div className="absolute -right-3 top-[44px] z-30 hidden h-7 w-7 items-center justify-center bg-transparent lg:flex">
                      <ChevronRight
                        size={21}
                        strokeWidth={1.5}
                        className="text-[var(--color-primary)]"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SUCCESS SECTION
      ===================================================== */}

      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 xl:gap-12">
            {/* LEFT SUCCESS STORY */}

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--color-violet-600)] sm:text-[10px]">
                Real Results. Real Businesses.
              </p>

              <h2
                className="
                  mt-3
                  text-[28px] font-extrabold
                  tracking-[-0.04em]
                  text-[var(--color-heading)]
                  sm:text-[36px]
                  lg:text-[39px]
                "
              >
                SEO Success with AI
              </h2>

              <p className="mt-2 max-w-[620px] text-[13px] leading-6 text-[var(--color-text)] sm:text-[15px]">
                See how businesses like yours are achieving higher
                rankings, more traffic, and greater revenue with AI
                WorksForce.
              </p>

              {/* CASE STUDY CARD */}

              <div className="relative mt-6 rounded-2xl border border-[var(--color-border)]/60 bg-gradient-to-br from-[var(--color-blue-50)]/40 to-white p-5 sm:p-6">
                {/* LEFT ARROW */}

                <button
                  type="button"
                  aria-label="Previous case study"
                  className="
                    absolute left-[-12px] top-1/2
                    flex h-8 w-8
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    bg-white
                    text-[var(--color-primary)]
                    shadow-[0_5px_20px_rgba(24,74,140,0.1)]
                  "
                >
                  <ChevronLeft size={17} />
                </button>

                <div className="grid gap-5 sm:grid-cols-[140px_1fr] sm:items-center">
                  {/* IMAGE */}

                  <div className="mx-auto h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-white shadow-[0_10px_30px_rgba(24,74,140,0.1)] sm:h-[130px] sm:w-[130px]">
                    <img
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=85"
                      alt="E-commerce business"
                      width={500}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}

                  <div>
                    <span className="inline-flex rounded-md bg-[var(--color-indigo-50)] px-2.5 py-1 text-[8px] font-bold text-[var(--color-violet-600)]">
                      E-commerce Brand
                    </span>

                    <h3 className="mt-2 text-[16px] font-extrabold tracking-tight text-[var(--color-heading)] sm:text-[17px]">
                      From Page 5 to #1 in 3 Months
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-[var(--color-text-muted)] sm:text-[11px]">
                      With our AI SEO strategy, this e-commerce brand
                      increased organic traffic by 312% and achieved
                      #1 rankings for 25+ high-value keywords.
                    </p>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-[17px] font-extrabold text-[var(--color-primary)]">
                          312%
                        </p>
                        <p className="mt-0.5 text-[8px] text-[var(--color-text-muted)]">
                          Increase in Organic Traffic
                        </p>
                      </div>

                      <div>
                        <p className="text-[17px] font-extrabold text-[var(--color-primary)]">
                          25+
                        </p>
                        <p className="mt-0.5 text-[8px] text-[var(--color-text-muted)]">
                          Keywords in Top 3
                        </p>
                      </div>

                      <div>
                        <p className="text-[17px] font-extrabold text-[var(--color-primary)]">
                          3x
                        </p>
                        <p className="mt-0.5 text-[8px] text-[var(--color-text-muted)]">
                          More Revenue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT ARROW */}

                <button
                  type="button"
                  aria-label="Next case study"
                  className="
                    absolute right-[-12px] top-1/2
                    flex h-8 w-8
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    bg-white
                    text-[var(--color-primary)]
                    shadow-[0_5px_20px_rgba(24,74,140,0.1)]
                  "
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>

            {/* RIGHT GRAPHIC */}

            <div
              className="
                relative min-h-[340px]
                overflow-hidden rounded-2xl
                bg-[var(--color-heading)]
                p-6
                sm:min-h-[380px]
                sm:p-8
              "
            >
              {/* Grid */}

              <div
                className="
                  absolute inset-0 opacity-20
                  [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
                  [background-size:55px_55px]
                "
              />

              {/* GLOW */}

              <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[var(--color-primary)]/25 blur-[80px]" />

              {/* GOOGLE */}

              <div className="absolute left-8 top-7 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[19px] font-extrabold shadow-xl sm:left-10 sm:top-9">
                G
              </div>

              {/* GRAPH */}

              <div className="absolute bottom-14 left-8 right-8 h-[190px] sm:left-10 sm:right-10">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

                <div className="absolute bottom-0 left-[4%] h-[45px] w-[28px] rounded-t bg-[var(--color-primary)]/60 sm:w-[34px]" />

                <div className="absolute bottom-0 left-[22%] h-[75px] w-[28px] rounded-t bg-[var(--color-primary)]/70 sm:w-[34px]" />

                <div className="absolute bottom-0 left-[40%] h-[105px] w-[28px] rounded-t bg-[var(--color-primary)]/80 sm:w-[34px]" />

                <div className="absolute bottom-0 left-[58%] h-[135px] w-[28px] rounded-t bg-[var(--color-primary)] sm:w-[34px]" />

                <div className="absolute bottom-0 left-[76%] h-[165px] w-[28px] rounded-t bg-[var(--color-violet-600)] sm:w-[34px]" />

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 500 200"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 190 C90 175 135 165 200 140 C260 115 315 95 370 55 C420 22 450 12 500 0"
                    stroke="var(--color-cyan)"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />

                  <path
                    d="M472 0L500 0L493 24"
                    stroke="var(--color-cyan)"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              {/* +312% BADGE */}

              <div className="absolute left-[28%] top-[19%] rounded-xl border border-white/20 bg-white px-4 py-3 shadow-2xl">
                <p className="text-[18px] font-extrabold text-[var(--color-green)]">
                  +312%
                </p>
                <p className="text-[8px] font-semibold text-[var(--color-heading)]">
                  Organic Traffic
                </p>
              </div>

              {/* BENEFITS */}

              <div className="absolute right-5 top-8 space-y-3 sm:right-8 sm:top-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-center gap-2"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-green-soft)]">
                      <Check
                        size={12}
                        strokeWidth={3}
                        className="text-[var(--color-green)]"
                      />
                    </span>

                    <span className="text-[10px] font-medium text-white sm:text-[11px]">
                      {benefit.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* BOTTOM CARD */}

              <div className="absolute bottom-5 left-7 rounded-xl bg-white px-4 py-3 shadow-2xl sm:left-9">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-indigo-50)]">
                    <TrendingUp
                      size={18}
                      className="text-[var(--color-violet-600)]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold leading-4 text-[var(--color-heading)]">
                      Higher Rankings
                      <br />
                      More Customers
                      <br />
                      Greater Revenue
                    </p>
                  </div>
                </div>
              </div>

              {/* HANDWRITTEN */}

              <div className="absolute bottom-7 right-5 hidden rotate-[-7deg] font-hand text-lg leading-5 text-white/90 sm:block">
                <span className="block">Let AI</span>
                <span className="block">Take Your SEO</span>
                <span className="block">to the Next Level</span>

                <svg
                  className="absolute -left-8 top-8 h-12 w-12"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M45 4C35 17 23 29 8 43"
                    stroke="white"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M8 43L11 33M8 43L18 40"
                    stroke="white"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section id="consultation" className="px-4 pb-5 sm:px-6 lg:px-8">
        <div
          className="
            relative mx-auto
            max-w-[1420px]
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-[var(--color-heading)]
            via-[var(--color-heading-dark)]
            to-[var(--color-violet-600)]
            px-5 py-12
            text-center
            sm:px-10 sm:py-14
            lg:px-16 lg:py-16
          "
        >
          {/* WAVE DECORATION */}

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-[300px] w-[560px] rounded-[50%] border border-white/10 rotate-[10deg]" />

          <div className="pointer-events-none absolute -bottom-48 -left-10 h-[300px] w-[560px] rounded-[50%] border border-white/10 rotate-[10deg]" />

          <div className="relative z-10 mx-auto max-w-[800px]">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/80 sm:text-[10px]">
              Ready to Rank Higher?
            </p>

            <h2
              className="
                mt-3
                text-[28px] font-extrabold
                tracking-[-0.04em]
                text-white
                sm:text-[35px]
                lg:text-[39px]
              "
            >
              Let&apos;s Grow Your Business with AI SEO
            </h2>

            <p className="mt-3 text-[12px] text-white/80 sm:text-[14px]">
              Get a custom AI SEO strategy tailored to your business
              goals.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#consultation"
                className="
                  inline-flex min-h-[50px]
                  items-center justify-center gap-2
                  rounded-xl
                  bg-white
                  px-6 py-3
                  text-[11px] font-extrabold
                  text-[var(--color-heading)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[var(--color-blue-50)]
                "
              >
                Book a Free Consultation
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/ai-digital-marketing"
                className="
                  inline-flex min-h-[50px]
                  items-center justify-center gap-2
                  rounded-xl
                  border border-white/50
                  bg-white/5
                  px-6 py-3
                  text-[11px] font-extrabold
                  text-white
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/10
                "
              >
                Explore AI Digital Marketing
              </Link>
            </div>
          </div>

          {/* CTA HANDWRITTEN */}

          <div className="absolute bottom-8 right-7 hidden rotate-[-7deg] font-hand text-lg leading-5 text-white/90 lg:block">
            <span className="block">Higher Rankings</span>
            <span className="block">Brighter Futures</span>

            <svg
              className="absolute -left-10 top-8 h-12 w-12"
              viewBox="0 0 55 55"
              fill="none"
            >
              <path
                d="M50 5C39 18 27 30 10 46"
                stroke="white"
                strokeWidth="1.4"
              />

              <path
                d="M10 46L13 35M10 46L21 43"
                stroke="white"
                strokeWidth="1.4"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-white">
        {/* FOOTER TOP */}

        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            {/* LOGO */}

            <Link
              href="/"
              className="flex flex-col leading-none"
            >
              <span className="text-[17px] font-extrabold tracking-[-0.04em] text-[var(--color-heading)]">
                <span className="text-[var(--color-primary)]">
                  AI
                </span>{" "}
                WorksForce
              </span>

              <span className="mt-1 text-[7px] font-medium text-[var(--color-text-muted)]">
                Automate. Accelerate. Grow.
              </span>
            </Link>

            {/* LINKS */}

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:gap-x-7">
              {[
                ["Home", "/"],
                ["What AIWorksForce?", "/what-is-ai-workforce"],
                ["How it Works", "/how-it-works"],
                ["Our AI Workflow", "/our-ai-workflow"],
                ["Solutions", "/solutions"],
                ["Industries", "/industries"],
                ["Resources", "/resources"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[9px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* SOCIAL */}

            <div className="flex items-center gap-3">
              <Link
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-heading)] transition-colors hover:bg-[var(--color-blue-50)] hover:text-[var(--color-primary)]"
              >
                <span className="text-[11px] font-extrabold">
                  in
                </span>
              </Link>

              <Link
                href="#twitter"
                aria-label="Twitter"
                className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-heading)] transition-colors hover:bg-[var(--color-blue-50)] hover:text-[var(--color-primary)]"
              >
                <span className="text-[10px] font-extrabold">
                  𝕏
                </span>
              </Link>

              <Link
                href="#youtube"
                aria-label="YouTube"
                className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-heading)] transition-colors hover:bg-[var(--color-blue-50)] hover:text-[var(--color-primary)]"
              >
                <Play size={13} fill="currentColor" />
              </Link>

              <Link
                href="#instagram"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-heading)] transition-colors hover:bg-[var(--color-blue-50)] hover:text-[var(--color-primary)]"
              >
                <Globe2 size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}

        <div className="border-t border-[var(--color-border)]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-16">
            <p className="text-[9px] text-[var(--color-text-muted)]">
              © 2024 AI WorksForce. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/privacy-policy"
                className="text-[9px] text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="text-[9px] text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="text-[9px] text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}