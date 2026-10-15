"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Database,
  DollarSign,
  FileSearch,
  Megaphone,
  MessageCircle,
  Play,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import AIWorkflowHero from "@/components/ai-workflow-hero/reusable-hero";

/* =========================================================
   TYPES
========================================================= */

type Agent = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  position: string;
};

type Benefit = {
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
};

/* =========================================================
   DATA
========================================================= */

const agents: Agent[] = [
  {
    title: "Customer Support",
    subtitle: "AI Agent",
    icon: MessageCircle,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
    position:
      "left-[2%] top-[20%] lg:left-[4%] lg:top-[23%] xl:left-[5%]",
  },
  {
    title: "Sales & Outreach",
    subtitle: "AI Agent",
    icon: TrendingUp,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
    position:
      "right-[21%] top-[3%] lg:right-[23%] lg:top-[5%] xl:right-[24%]",
  },
  {
    title: "Marketing",
    subtitle: "AI Agent",
    icon: Megaphone,
    iconColor: "text-brand-orange",
    iconBg: "bg-brand-orange-soft",
    position:
      "right-[0%] top-[20%] lg:right-[1%] lg:top-[23%] xl:right-[2%]",
  },
  {
    title: "Data & Research",
    subtitle: "AI Agent",
    icon: Search,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
    position:
      "left-[2%] bottom-[19%] lg:left-[4%] lg:bottom-[20%] xl:left-[5%]",
  },
  {
    title: "Operations",
    subtitle: "AI Agent",
    icon: Settings,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
    position:
      "right-[0%] bottom-[19%] lg:right-[1%] lg:bottom-[20%] xl:right-[2%]",
  },
];

const benefits: Benefit[] = [
  {
    title: "Save Time with AI Automation",
    description: "Reduce repetitive manual tasks with AI-powered workflows so your team can focus on higher-value activities.",
    icon: Zap,
    iconColor: "text-brand-orange",
    iconBg: "bg-brand-orange-soft",
  },
  {
    title: "Improve Operational Efficiency",
    description: "Streamline business processes and reduce unnecessary manual effort while maintaining your operational standards.",
    icon: DollarSign,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
  {
    title: "Increase Business Productivity",
    description: "Use AI agents to support routine business activities and help your team work more efficiently.",
    icon: BarChart3,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    title: "Scale Your Business with AI Workforce Solutions",
    description: "Adapt your AI workforce as business needs change and new opportunities emerge.",
    icon: Users,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
];

const workforceCards = [
  {
    title: "AI Agents for",
    suffix: "Customer Support",
    description:
      "Support customer inquiries, respond to common questions, and streamline customer service workflows with AI-powered agents.",
    icon: MessageCircle,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    title: "AI Agents for Sales &",
    suffix: "Outreach",
    description:
      "Support lead research, prospect engagement, and sales follow-ups with AI agents designed to streamline your sales workflow.",
    icon: TrendingUp,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
  {
    title: "AI Marketing",
    suffix: "Agents",
    description:
      "Assist with content creation, campaign workflows, and marketing tasks using AI-powered marketing agents.",
    icon: Megaphone,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-100",
  },
  {
    title: "AI Data & Research",
    suffix: "Agents",
    description:
      "Organize business data, research information, and identify useful insights to support informed business decisions.",
    icon: FileSearch,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
  },
  {
    title: "AI Agents for Business",
    suffix: "Operations",
    description:
      "Streamline routine workflows, support task management, and reduce manual effort across business operations with AI automation.",
    icon: Settings,
    iconColor: "text-brand-orange",
    iconBg: "bg-brand-orange-soft",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function PrimaryButton({
  children,
  href = "#contact",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="
        group inline-flex min-h-[52px] items-center justify-center
        gap-2 rounded-xl bg-brand-purple px-6 py-3
        text-sm font-bold text-white
        shadow-[0_12px_30px_rgba(92,43,234,0.22)]
        transition-all duration-300
        hover:-translate-y-0.5 hover:bg-brand-blue
        hover:shadow-[0_16px_35px_rgba(37,99,235,0.25)]
        active:translate-y-0
      "
    >
      {children}
      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

function SecondaryButton({
  children,
  href = "#how-it-works",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="
        group inline-flex min-h-[52px] items-center justify-center
        gap-2 rounded-xl border border-brand-dark/20
        bg-white/80 px-6 py-3
        text-sm font-bold text-brand-dark
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-0.5 hover:border-brand-purple
        hover:bg-white hover:text-brand-purple
      "
    >
      {children}
    </Link>
  );
}

/* =========================================================
   AGENT FLOATING CARD
========================================================= */

function AgentCard({ agent }: { agent: Agent }) {
  const Icon = agent.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`absolute z-20 ${agent.position}`}
    >
      <div
        className="
          flex w-[132px] flex-col items-center
          rounded-2xl border border-white/80
          bg-white/90 px-3 py-3
          shadow-[0_15px_45px_rgba(38,73,150,0.12)]
          backdrop-blur-xl
          sm:w-[145px] sm:px-4
          lg:w-[155px]
          xl:w-[165px]
        "
      >
        <div
          className={`
            mb-2 flex h-10 w-10 items-center justify-center
            rounded-full ${agent.iconBg}
            sm:h-11 sm:w-11
          `}
        >
          <Icon size={21} className={agent.iconColor} />
        </div>

        <p className="text-center text-[11px] font-bold leading-tight text-brand-dark sm:text-xs lg:text-sm">
          {agent.title}
        </p>

        <p className="mt-0.5 text-center text-[10px] text-brand-text-muted sm:text-[11px]">
          {agent.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function AIWorkforcePage() {
  return (
    <main className="overflow-hidden bg-white text-brand-dark">
      {/* =====================================================
          HERO
      ===================================================== */}

    <AIWorkflowHero
  eyebrow="AI WORKFORCE EXPERTS FOR YOUR BUSINESS"
  title="Hire AI Workforce Experts"
  highlightedTitle="for Your Business"
  subtitle=""
  description="Hire AI workforce experts to help automate business operations, streamline workflows, and improve productivity. Our AI workforce solutions combine intelligent AI agents, automation technology, and human expertise to support your business goals."
  imageSrc="https://res.cloudinary.com/fvsobjbv/image/upload/v1789724360/ai-workforce-main-hero.png"
  imageAlt="AI workforce professional"
  primaryLabel="Hire AI Workforce Experts"
  primaryHref="/get-your-assessment"
  secondaryLabel="See How AWFi Works"
  secondaryHref="#how-it-works"
/>

      {/* =====================================================
          WORKFORCE CARDS
      ===================================================== */}

      <section className="relative bg-white py-10">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
              Your AI Workforce Experts
            </p>

            <h2
              className="
                text-3xl font-extrabold leading-tight
                tracking-[-0.035em] text-brand-dark
                sm:text-4xl
                lg:text-[42px]
              "
            >
              AI Workforce Solutions for Every Part of Your Business
            </h2>

            <p className="mx-auto mt-4 max-w-[760px] text-sm leading-6 text-brand-text sm:text-base">
              Discover AI workforce solutions that bring together specialized AI agents to support customer service, sales, marketing, research, and business operations.
            </p>
          </div>

          <div
            className="
              mt-12 grid gap-4
              sm:grid-cols-2
              lg:grid-cols-5
              lg:gap-4
              xl:gap-5
            "
          >
            {workforceCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="
                    group rounded-2xl
                    border border-brand-blue/10
                    bg-gradient-to-b from-brand-blue-50/50 to-white
                    px-6 py-7 text-center
                    shadow-[0_10px_35px_rgba(24,74,140,0.035)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-brand-purple/15
                    hover:shadow-[0_18px_45px_rgba(24,74,140,0.09)]
                  "
                >
                  <div
                    className={`
                      mx-auto flex h-16 w-16
                      items-center justify-center
                      rounded-full ${card.iconBg}
                      transition-transform duration-300
                      group-hover:scale-110
                    `}
                  >
                    <Icon
                      size={28}
                      strokeWidth={2}
                      className={card.iconColor}
                    />
                  </div>

                  <h3 className="mt-6 text-XL font-extrabold leading-5 text-brand-dark">
                    {card.title}
                    <br />
                    {card.suffix}
                  </h3>

                  <p className="mt-4 text-sm leading-5 text-brand-text">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY AI WORKFORCE
      ===================================================== */}

      <section
        id="how-it-works"
        className="relative bg-white pb-20 pt-4 sm:pb-24 lg:pb-28"
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div
            className="
              grid items-center gap-12
              lg:grid-cols-[0.88fr_1.12fr]
              lg:gap-16
              xl:gap-20
            "
          >
            {/* LEFT */}
            <div className="max-w-[570px]">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                Business Benefits
              </p>

              <h2
                className="
                  text-3xl font-extrabold leading-tight
                  tracking-[-0.035em] text-brand-dark
                  sm:text-4xl
                  lg:text-[42px]
                "
              >
                Why Hire AI Workforce Experts?
              </h2>

              <p className="mt-4 max-w-[530px] text-sm leading-6 text-brand-text sm:text-base sm:leading-7">
                Get more than individual AI tools. Build a connected AI workforce that combines intelligent agents and automation to support your business operations and goals.
              </p>

              <div className="mt-8 space-y-5">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4"
                    >
                      <div
                        className={`
                          flex h-12 w-12 shrink-0
                          items-center justify-center
                          rounded-xl ${benefit.iconBg}
                        `}
                      >
                        <Icon
                          size={23}
                          className={benefit.iconColor}
                        />
                      </div>

                      <div className="pt-0.5">
                        <h3 className="text-sm font-extrabold text-brand-dark sm:text-base">
                          {benefit.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-brand-text sm:text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <div className="relative min-h-[430px] overflow-hidden rounded-2xl sm:min-h-[500px] lg:min-h-[540px]">
                <img
                  src="https://res.cloudinary.com/fvsobjbv/image/upload/v1789724360/ai-workforce-main-bottom.png"
                  alt="Business professional using AI workforce"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                {/* Image overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/75 via-brand-dark/35 to-brand-purple/35" /> */}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section id="contact" className="px-4 pb-10 sm:px-6 lg:px-8">
        <div
          className="
            relative mx-auto max-w-[1420px]
            overflow-hidden rounded-2xl
            bg-gradient-to-r
            from-brand-navy via-brand-dark to-brand-purple
            px-6 py-12
            text-white
            shadow-[0_20px_60px_rgba(7,23,68,0.18)]
            sm:px-10 sm:py-14
            lg:px-16 lg:py-16
          "
        >
          {/* Decorative waves */}
          <div
            className="
              pointer-events-none absolute
              -bottom-32 -left-20
              h-72 w-[500px]
              rounded-[50%]
              border border-white/10
              rotate-[12deg]
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-40 -left-10
              h-72 w-[500px]
              rounded-[50%]
              border border-white/10
              rotate-[12deg]
            "
          />

          <div className="relative z-10 mx-auto max-w-[850px] text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/75 sm:text-xs">
              Ready to Hire AI Workforce Experts?
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              Hire AI Workforce Experts for Your Business Today
            </h2>

            <p className="mt-3 text-sm text-white/80 sm:text-base">
              Discover how AI workforce experts, intelligent agents, and automation can help streamline your business operations and support growth.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/get-your-assessment"
                className="
                  inline-flex min-h-[52px]
                  items-center justify-center gap-2
                  rounded-xl bg-white px-7 py-3
                  text-sm font-extrabold
                  text-brand-dark
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-brand-blue-50
                "
              >
                Hire AI Workforce Experts
                <ArrowRight size={17} />
              </Link>

              <a
                href="tel:+919649902000"
                className="
                  inline-flex min-h-[52px]
                  items-center justify-center gap-2
                  rounded-xl border border-white/50
                  bg-white/5 px-7 py-3
                  text-sm font-extrabold text-white
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/10
                "
              >
                Talk to Our AI Workforce Experts
              </a>
            </div>
          </div>

          {/* Handwritten annotation */}
          <div
            className="
              absolute bottom-8 right-7
              hidden rotate-[-7deg]
              font-hand text-xl leading-5 text-white/90
              lg:block
            "
          >
            <span className="block">Turn</span>
            <span className="block">Possibilities</span>
            <span className="block">into Progress</span>

            <svg
              className="absolute -left-12 top-8 h-14 w-14"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M54 8C38 18 25 30 12 48"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 48L14 37M12 48L23 45"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </section>

  
    </main>
  );
}