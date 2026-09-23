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
    title: "AI keyword research",
    description:
      "Find keywords that people are looking for and find chances with AI.",
    icon: Search,
    iconBg: "bg-[var(--color-blue-100)]",
    iconColor: "text-[var(--color-primary)]",
  },
  {
    title: "Content optimization",
    description:
      "Improve content that is good for SEO and gets ranked.",
    icon: FileSearch,
    iconBg: "bg-[var(--color-cyan-50)]",
    iconColor: "text-[var(--color-cyan-500)]",
  },
  {
    title: "Technical SEO",
    description:
      "Fix technical issues automatically.",
    icon: Settings,
    iconBg: "bg-[var(--color-indigo-50)]",
    iconColor: "text-[var(--color-violet-600)]",
  },
  {
    title: "Link building and outreach",
    description:
      "Connect with good chances for backlinks.",
    icon: Link2,
    iconBg: "bg-[var(--color-purple-soft)]",
    iconColor: "text-[var(--color-violet-600)]",
  },
  {
    title: "Rank tracking and analytics",
    description:
      "Keep track of progress with time AI insights.",
    icon: BarChart3,
    iconBg: "bg-[var(--color-orange-soft)]",
    iconColor: "text-[var(--color-orange)]",
  },
  {
    title: "Competitor analysis",
    description:
      "Stay ahead with AI-based insights about your competitors.",
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
      "We use AI to look at your website, your industry and your competitors.",
    icon: Search,
    iconBg: "bg-[var(--color-blue-100)]",
    iconColor: "text-[var(--color-primary)]",
  },
  {
    number: "02",
    title: "Optimize",
    description:
      "Our AI makes your content, technical SEO and strategy better.",
    icon: Settings,
    iconBg: "bg-[var(--color-green-soft)]",
    iconColor: "text-[var(--color-green)]",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "We put the plan into action with automated steps and expert help.",
    icon: Play,
    iconBg: "bg-[var(--color-indigo-50)]",
    iconColor: "text-[var(--color-violet-600)]",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Reach More People, Drive More Traffic, and Grow Your Business.",
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
  eyebrow="Rank higher. Grow faster."
  title=""
  highlightedTitle="AI SEO"
  subtitle="Smarter SEO. Real business growth."
  description="Use the power of AI to create strategies that are based on data automate the work of making content and get better rankings with less effort. Let AI do the work while you focus on growing your business."
  imageSrc="/digital-marketing/ai-seo-hero.png"
  imageAlt="Professional using AI SEO"
  primaryLabel="Book a consultation"
  primaryHref="#consultation"
  secondaryLabel="See how it works"
  secondaryHref="#process"
  metrics={[
    {
      value: "3x",
      label: "Faster SEO results",
      icon: "chart",
      tone: "purple",
    },
    {
      value: "70%",
      label: "Less manual work",
      icon: "clock",
      tone: "green",
    },
    {
      value: "100%",
      label: "Data-driven strategy",
      icon: "target",
      tone: "orange",
    },
  ]}
/>

      {/* =====================================================
          SOLUTIONS SECTION
      ===================================================== */}

      <section className="bg-white py-10">
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
              className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-violet-600)] sm:text-base sm:tracking-[0.24em]"
            >
              Complete AI-powered SEO solutions
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                mt-3
                text-3xl font-extrabold leading-[1.15]
                tracking-[-0.025em]
                text-[var(--color-heading)]
                sm:text-4xl lg:text-[48px]
              "
            >
              Everything you need to rank higher
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mx-auto mt-3 max-w-[720px]
                text-base sm:text-base leading-6
                text-[var(--color-text)]
                sm:text-base
              "
            >
              From strategy to action our AI-based SEO solutions
              cover all parts of your online growth.
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
              grid-cols-1 gap-3
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
              xl:gap-4
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
                    px-2 py-3
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
                      text-base font-extrabold sm:text-lg
                      leading-[1.35]
                      text-[var(--color-heading)]
                      sm:text-base sm:text-base
                    "
                  >
                    {solution.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-base
                      leading-[1.65]
                      text-[var(--color-text-muted)]
                      sm:text-base
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
        className="px-4 pb-10 sm:px-6 sm:pb-10 lg:px-8 lg:pb-10"
      >
        <div className="mx-auto max-w-[1390px] rounded-2xl bg-gradient-to-br from-[var(--color-blue-50)] via-white to-[var(--color-indigo-50)] px-4 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-violet-600)] sm:text-base sm:tracking-[0.24em]">
              How our AI SEO works
            </p>

            <h2
              className="
                mt-3
                text-3xl font-extrabold leading-[1.15]
                tracking-[-0.025em]
                text-[var(--color-heading)]
                sm:text-4xl lg:text-[48px]
              "
            >
              A process. Powerful results.
            </h2>

            <p className="mt-3 text-base sm:text-base text-[var(--color-text)] sm:text-base">
              We use AI technology with SEO knowledge to give you growth.
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

                    <p className="mt-3 text-sm font-extrabold text-[var(--color-heading)] sm:text-base">
                      {step.number}
                    </p>

                    <h3 className="mt-0.5 text-lg font-extrabold sm:text-xl text-[var(--color-heading)]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[190px] text-base leading-[1.6] text-[var(--color-text-muted)] sm:text-base">
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

      <section className="bg-white pb-10 ">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 xl:gap-12">
            {/* LEFT SUCCESS STORY */}

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-violet-600)] sm:text-base sm:tracking-[0.24em]">
                Real results. Real businesses.
              </p>

              <h2
                className="
                  mt-3
                  text-[28px]         font-extrabold sm:text-[44px] lg:text-[48px]
                  tracking-[-0.04em]
                  text-[var(--color-heading)]
                       sm:text-[44px] lg:text-[44px]
                   sm:text-[42px] lg:text-[46px]
                "
              >
                SEO success with AI
              </h2>

              <p className="mt-2 max-w-[620px] text-base sm:text-base leading-6 text-[var(--color-text)] sm:text-base">
                See how businesses like yours are getting rankings more visitors and more money with AI WorksForce.
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
                    <span className="inline-flex rounded-md bg-[var(--color-indigo-50)] px-2.5 py-1 text-xs sm:text-sm font-bold text-[var(--color-violet-600)]">
                      E-commerce brand
                    </span>

                    <h3 className="mt-2 text-lg font-extrabold leading-[1.3] tracking-tight text-[var(--color-heading)] sm:text-xl">
                      From page 5 to the top in 3 months
                    </h3>

                    <p className="mt-2 text-base leading-[1.6] text-[var(--color-text-muted)] sm:text-base">
                      Our AI-based SEO strategy helped get a 312% increase in visitors from search and number one rankings for 25+ important keywords.
                    </p>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-2xl font-extrabold sm:text-3xl text-[var(--color-primary)]">
                          312%
                        </p>
                        <p className="mt-0.5 text-sm sm:text-base text-[var(--color-text-muted)]">
                          Increase in traffic
                        </p>
                      </div>

                      <div>
                        <p className="text-2xl font-extrabold sm:text-3xl text-[var(--color-primary)]">
                          25+
                        </p>
                        <p className="mt-0.5 text-sm sm:text-base text-[var(--color-text-muted)]">
                          Keywords, in top 3
                        </p>
                      </div>

                      <div>
                        <p className="text-2xl font-extrabold sm:text-3xl text-[var(--color-primary)]">
                          3x
                        </p>
                        <p className="mt-0.5 text-sm sm:text-base text-[var(--color-text-muted)]">
                          More revenue
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
                
               
               
              "
            >
              {/* Grid */}
        <img src="/digital-marketing/ai-seo-bottom.png" alt="AI SEO Graphic" className="w-full h-full object-cover" />
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
            px-5 py-8
            text-center
            sm:px-10 sm:py-10
            
          "
        >
          {/* WAVE DECORATION */}

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-[300px] w-[560px] rounded-[50%] border border-white/10 rotate-[10deg]" />

          <div className="pointer-events-none absolute -bottom-48 -left-10 h-[300px] w-[560px] rounded-[50%] border border-white/10 rotate-[10deg]" />

          <div className="relative z-10 mx-auto max-w-[800px]">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-white/80 sm:text-xs sm:text-sm">
              Ready to rank higher?
            </p>

            <h2
              className="
                mt-3
                text-3xl font-extrabold leading-[1.15]
                tracking-[-0.025em]
                text-white
                sm:text-4xl lg:text-[44px]
              "
            >
              Lets grow your business with AI SEO
            </h2>

            <p className="mt-3 text-sm sm:text-base text-white/80 sm:text-sm sm:text-base">
              Get an AI SEO strategy made for your business goals.
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
                  text-sm sm:text-base font-extrabold
                  text-[var(--color-heading)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[var(--color-blue-50)]
                "
              >
                Book a consultation
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
                  text-sm sm:text-base font-extrabold
                  text-white
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/10
                "
              >
                Explore AI marketing
              </Link>
            </div>
          </div>

          {/* CTA HANDWRITTEN */}

          <div className="absolute bottom-28 right-7 hidden rotate-[-7deg] font-hand text-lg leading-5 text-white/90 lg:block">
            <span className="block">Higher rankings</span>
            <span className="block">Brighter futures</span>

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