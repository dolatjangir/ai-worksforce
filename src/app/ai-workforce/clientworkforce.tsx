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
    title: "Save Time",
    description: "Automate repetitive work and focus on what matters.",
    icon: Zap,
    iconColor: "text-brand-orange",
    iconBg: "bg-brand-orange-soft",
  },
  {
    title: "Reduce Costs",
    description: "Do more with less, without compromising quality.",
    icon: DollarSign,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
  {
    title: "Increase Productivity",
    description: "Your AI team works around the clock.",
    icon: BarChart3,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    title: "Scale Faster",
    description: "Easily expand your capabilities as you grow.",
    icon: Users,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
];

const workforceCards = [
  {
    title: "Customer Support",
    suffix: "AI Agents",
    description:
      "Handle inquiries, resolve issues, and keep your customers happy 24/7.",
    icon: MessageCircle,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    title: "Sales & Outreach",
    suffix: "AI Agents",
    description:
      "Find leads, engage prospects, and boost your sales pipeline.",
    icon: TrendingUp,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
  {
    title: "Marketing",
    suffix: "AI Agents",
    description:
      "Create content, run campaigns, and grow your brand.",
    icon: Megaphone,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-100",
  },
  {
    title: "Data & Research",
    suffix: "AI Agents",
    description:
      "Analyze data, find insights, and support smarter decisions.",
    icon: FileSearch,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
  },
  {
    title: "Operations",
    suffix: "AI Agents",
    description:
      "Automate workflows, manage tasks, and keep your business running smoothly.",
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

      <section className="relative overflow-hidden bg-gradient-section">
        {/* Decorative background */}
        <div
          className="
            pointer-events-none absolute -right-40 -top-48
            h-[650px] w-[650px] rounded-full
            bg-brand-purple/10 blur-3xl
          "
        />

        <div
          className="
            pointer-events-none absolute left-[35%] top-[5%]
            h-[420px] w-[420px] rounded-full
            bg-brand-blue/10 blur-3xl
          "
        />

        <div
          className="
            pointer-events-none absolute bottom-[-180px] left-[25%]
            h-[500px] w-[500px] rounded-full
            bg-cyan-400/10 blur-3xl
          "
        />

        <div
          className="
            relative mx-auto grid max-w-[1440px]
            min-h-[610px] items-center
            px-6 pb-14 pt-14
            sm:px-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:px-12 lg:pb-16 lg:pt-16
            xl:min-h-[680px] xl:px-16
            2xl:px-20
          "
        >
          {/* LEFT */}
          <div className="relative z-30 max-w-[620px]">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-purple sm:text-xs">
                One Team. Endless Possibilities.
              </p>
            </div>

            <h1
              className="
                max-w-[600px]
                text-[48px] font-extrabold leading-[0.98]
                tracking-[-0.045em] text-brand-dark
                sm:text-[58px]
                md:text-[64px]
                lg:text-[58px]
                xl:text-[70px]
                2xl:text-[76px]
              "
            >
              Get your all
              <span
                className="
                  mt-1 block
                  bg-gradient-heading bg-clip-text
                  text-transparent
                "
              >
                AI workforce
              </span>
            </h1>

            <p
              className="
                mt-7 max-w-[560px]
                text-[16px] leading-7 text-brand-text
                sm:text-[17px] sm:leading-7
                lg:text-[18px] lg:leading-8
              "
            >
              A complete team of AI agents working together to automate your
              operations, drive growth, and give you more time to focus on
              what matters most.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#contact">
                Get Your AI Workforce
              </PrimaryButton>

              <SecondaryButton href="#how-it-works">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-purple/10">
                  <Play
                    size={10}
                    fill="currentColor"
                    className="ml-0.5 text-brand-purple"
                  />
                </span>
                See How It Works
              </SecondaryButton>
            </div>

            {/* STATS */}
            <div
              className="
                mt-10 grid max-w-[600px]
                grid-cols-3 gap-5
                border-t border-brand-dark/10 pt-7
                sm:mt-12 sm:gap-8
              "
            >
              <div>
                <p className="text-2xl font-extrabold tracking-tight text-brand-purple sm:text-3xl">
                  50+
                </p>
                <p className="mt-1 text-[11px] font-medium text-brand-text-muted sm:text-xs">
                  Businesses Empowered
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold tracking-tight text-brand-purple sm:text-3xl">
                  2M+
                </p>
                <p className="mt-1 text-[11px] font-medium text-brand-text-muted sm:text-xs">
                  Tasks Automated
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold tracking-tight text-brand-purple sm:text-3xl">
                  99%
                </p>
                <p className="mt-1 text-[11px] font-medium text-brand-text-muted sm:text-xs">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT HERO VISUAL */}
          <div
            className="
              relative mt-14 min-h-[430px]
              lg:mt-0 lg:min-h-[560px]
              xl:min-h-[610px]
            "
          >
            {/* Large glow */}
            <div
              className="
                absolute left-1/2 top-1/2
                h-[330px] w-[330px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-brand-purple/20 blur-[70px]
                sm:h-[420px] sm:w-[420px]
              "
            />

            {/* Orbital lines */}
            <div
              className="
                absolute left-1/2 top-1/2
                h-[330px] w-[330px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full border border-brand-purple/10
                sm:h-[430px] sm:w-[430px]
              "
            />

            <div
              className="
                absolute left-1/2 top-1/2
                h-[450px] w-[450px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full border border-brand-blue/10
                sm:h-[560px] sm:w-[560px]
              "
            />

            {/* Connecting lines */}
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute left-[22%] top-[42%] h-px w-[23%] rotate-[15deg] bg-gradient-to-r from-transparent via-brand-purple/40 to-brand-purple/20" />
              <span className="absolute right-[18%] top-[40%] h-px w-[25%] -rotate-[15deg] bg-gradient-to-r from-brand-purple/20 via-brand-purple/40 to-transparent" />
              <span className="absolute left-[25%] bottom-[34%] h-px w-[25%] -rotate-[10deg] bg-gradient-to-r from-transparent via-brand-blue/30 to-brand-blue/10" />
              <span className="absolute right-[19%] bottom-[34%] h-px w-[25%] rotate-[10deg] bg-gradient-to-r from-brand-blue/10 via-brand-blue/30 to-transparent" />
            </div>

            {/* AI Workforce Orb */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute left-1/2 top-1/2 z-10
                flex h-[190px] w-[190px]
                -translate-x-1/2 -translate-y-1/2
                items-center justify-center
                rounded-full
                bg-gradient-to-br
                from-brand-purple via-brand-purple to-brand-blue
                p-[3px]
                shadow-[0_0_80px_rgba(92,43,234,0.45)]
                sm:h-[230px] sm:w-[230px]
                lg:h-[250px] lg:w-[250px]
              "
            >
              <div
                className="
                  flex h-full w-full flex-col
                  items-center justify-center
                  rounded-full
                  bg-gradient-to-br from-brand-purple
                  via-[#3520b9] to-brand-blue
                  text-center text-white
                "
              >
                <Bot
                  size={30}
                  className="mb-2 text-white/90 sm:hidden"
                />

                <p className="text-[19px] font-extrabold leading-tight sm:text-[24px] lg:text-[26px]">
                  Your
                  <br />
                  AI Workforce
                </p>

                <p className="mt-2 max-w-[130px] text-[10px] leading-4 text-white/90 sm:max-w-[160px] sm:text-xs">
                  Always On.
                  <br />
                  Always Working.
                </p>
              </div>
            </motion.div>

            {/* Agent cards */}
            {agents.map((agent) => (
              <AgentCard key={agent.title} agent={agent} />
            ))}

            {/* Person image */}
            <div
              className="
                absolute bottom-[-20px] left-1/2 z-30
                hidden w-[280px]
                -translate-x-1/2
                sm:block sm:w-[330px]
                lg:bottom-[-50px] lg:w-[380px]
                xl:w-[430px]
              "
            >
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 h-[160px] w-[240px] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-3xl" />

                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85"
                  alt="AI workforce professional"
                  width={900}
                  height={1100}
                  className="
                    relative z-10
                    h-auto w-full
                    object-cover
                    object-top
                    [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]
                  "
                />
              </div>
            </div>

            {/* Handwritten annotation */}
            <div
              className="
                absolute bottom-[2%] right-[1%] z-40
                hidden rotate-[-8deg]
                font-hand text-xl font-semibold
                leading-5 text-brand-purple
                lg:block xl:text-2xl
              "
            >
              <span className="block">Smarter</span>
              <span className="block">Teams</span>
              <span className="block">Happier</span>
              <span className="block">Businesses</span>

              <svg
                className="absolute -left-10 top-8 h-12 w-12"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M44 7C29 11 17 22 13 40"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M13 40L10 32M13 40L21 37"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFORCE CARDS
      ===================================================== */}

      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
              One Connected Team
            </p>

            <h2
              className="
                text-3xl font-extrabold leading-tight
                tracking-[-0.035em] text-brand-dark
                sm:text-4xl
                lg:text-[42px]
              "
            >
              A Complete AI Team for Every Part of Your Business
            </h2>

            <p className="mx-auto mt-4 max-w-[760px] text-sm leading-6 text-brand-text sm:text-base">
              Specialized AI agents working together like a real workforce —
              built to solve your biggest challenges.
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

                  <h3 className="mt-6 text-[15px] font-extrabold leading-5 text-brand-dark">
                    {card.title}
                    <br />
                    {card.suffix}
                  </h3>

                  <p className="mt-4 text-xs leading-5 text-brand-text">
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
                Built for Business
              </p>

              <h2
                className="
                  text-3xl font-extrabold leading-tight
                  tracking-[-0.035em] text-brand-dark
                  sm:text-4xl
                  lg:text-[42px]
                "
              >
                Why Get Your AI Workforce?
              </h2>

              <p className="mt-4 max-w-[530px] text-sm leading-6 text-brand-text sm:text-base sm:leading-7">
                More than just tools — it’s a complete, collaborative team
                designed to deliver real business impact.
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
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                  alt="Business professional using AI workforce"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/75 via-brand-dark/35 to-brand-purple/35" />

                {/* UI panel */}
                <div className="absolute left-5 top-5 w-[245px] rounded-2xl border border-white/20 bg-brand-navy/55 p-4 shadow-2xl backdrop-blur-md sm:left-7 sm:top-7 sm:w-[290px]">
                  <div className="mb-4 flex items-center gap-2 text-white">
                    <Sparkles size={18} />
                    <span className="text-sm font-bold">
                      AI Workforce
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      "Customer Support",
                      "Sales & Outreach",
                      "Marketing",
                      "Data & Research",
                      "Operations",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex items-center gap-3 rounded-lg
                          border border-white/10
                          bg-white/10 px-3 py-2.5
                          text-xs font-medium text-white
                          backdrop-blur-sm
                        "
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                          <CheckCircle2 size={13} />
                        </span>

                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact badge */}
                <div className="absolute bottom-7 right-6 max-w-[180px] text-right sm:bottom-10 sm:right-8">
                  <p className="text-xl font-extrabold leading-tight text-white sm:text-2xl">
                    One Team
                    <br />
                    Infinite Impact
                  </p>

                  <div className="ml-auto mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md">
                    <ArrowRight size={17} />
                  </div>
                </div>

                {/* Quote */}
                <div
                  className="
                    absolute bottom-5 left-1/2
                    w-[80%] max-w-[310px]
                    -translate-x-1/2
                    rounded-xl bg-white/95 px-5 py-4
                    shadow-2xl backdrop-blur
                    sm:bottom-7 sm:left-7
                    sm:w-[300px]
                    sm:translate-x-0
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-purple-soft">
                      <BarChart3
                        size={19}
                        className="text-brand-purple"
                      />
                    </div>

                    <p className="text-xs font-medium leading-5 text-brand-dark">
                      “It’s like having a dedicated team that never sleeps.”
                    </p>
                  </div>
                </div>
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
              Ready to Build Your AI Team?
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              Get Your All AI Workforce Today
            </h2>

            <p className="mt-3 text-sm text-white/80 sm:text-base">
              Step into a smarter, more efficient future with AI WorksForce.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#contact"
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
                Get Your AI Workforce
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#contact"
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
                Talk to Our Experts
              </Link>
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

      {/* =====================================================
          TRUSTED BRANDS
      ===================================================== */}

      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-7 px-6 sm:px-8 lg:flex-row lg:justify-between lg:px-12 xl:px-16">
          <p className="shrink-0 text-sm font-bold text-brand-dark">
            Trusted by growing businesses
          </p>

          <div
            className="
              flex w-full
              flex-wrap items-center
              justify-center gap-x-8 gap-y-5
              lg:justify-end
              xl:gap-x-12
            "
          >
            {/* Shopify */}
            <div className="flex items-center gap-1.5 text-xl font-bold text-slate-500">
              <BriefcaseBusiness size={22} />
              <span>shopify</span>
            </div>

            {/* HubSpot */}
            <div className="text-lg font-bold text-slate-500">
              HubSpot
            </div>

            {/* Slack */}
            <div className="flex items-center gap-1 text-lg font-bold text-slate-500">
              <span className="grid grid-cols-2 gap-0.5">
                <span className="h-2 w-2 rounded-full bg-current" />
                <span className="h-2 w-2 rounded-full bg-current" />
                <span className="h-2 w-2 rounded-full bg-current" />
                <span className="h-2 w-2 rounded-full bg-current" />
              </span>
              slack
            </div>

            {/* Google */}
            <div className="text-xl font-semibold text-slate-500">
              Google
            </div>

            {/* Meta */}
            <div className="text-xl font-semibold tracking-tight text-slate-500">
              ∞ Meta
            </div>

            {/* Microsoft */}
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-500">
              <span className="grid grid-cols-2 gap-0.5">
                <span className="h-2.5 w-2.5 bg-current" />
                <span className="h-2.5 w-2.5 bg-current" />
                <span className="h-2.5 w-2.5 bg-current" />
                <span className="h-2.5 w-2.5 bg-current" />
              </span>
              Microsoft
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}