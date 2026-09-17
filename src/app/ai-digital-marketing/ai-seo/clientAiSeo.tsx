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
import DigitalMarketingHero from "@/components/digital-marketing-hero/reusable-hero";

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
          HERO
      ===================================================== */}

    <DigitalMarketingHero
  eyebrow="RANK HIGHER. GROW FASTER."
  title="AI"
  highlightedTitle="SEO"
  subtitle="Smarter SEO. Real Business Growth."
  description="Leverage the power of AI to create data-driven SEO strategies, automate content optimization, and achieve higher rankings with less effort. Let AI do the heavy lifting while you focus on growing your business."
  imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=90"
  imageAlt="Professional using AI SEO"
  primaryLabel="Book a Free Consultation"
  primaryHref="#consultation"
  secondaryLabel="See How It Works"
  secondaryHref="#process"
  metrics={[
    {
      value: "3x",
      label: "Faster SEO Results",
      icon: "chart",
      tone: "purple",
    },
    {
      value: "70%",
      label: "Less Manual Work",
      icon: "clock",
      tone: "green",
    },
    {
      value: "100%",
      label: "Data-Driven Strategy",
      icon: "target",
      tone: "orange",
    },
  ]}
/>

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

    </main>
  );
}