"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Lightbulb,
  Mail,
  Megaphone,
  PenTool,
  Play,
  RefreshCw,
  Search,
  Send,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import DigitalMarketingHero from "@/components/digital-marketing-hero/reusable-hero";

/* =========================================================
   TYPES
========================================================= */

type SolutionCard = {
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
};

type ResultMetric = {
  value: string;
  label: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
};

/* =========================================================
   DATA
========================================================= */

const solutions: SolutionCard[] = [
  {
    title: "Content Strategy",
    description:
      "Data-driven strategies tailored to your business goals.",
    icon: Lightbulb,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    title: "AI Content Creation",
    description:
      "High-quality blogs, articles, web pages, and more in minutes.",
    icon: FileText,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
  },
  {
    title: "SEO Optimization",
    description:
      "AI-powered keyword research and on-page optimization.",
    icon: SettingsIcon,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    title: "Multi-Channel Distribution",
    description:
      "Publish across blog, social media, email, and more.",
    icon: Share2,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
  },
  {
    title: "Performance Tracking",
    description:
      "Real-time insights to measure engagement, leads, and ROI.",
    icon: BarChart3,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    title: "Continuous Improvement",
    description:
      "AI analysis to refine content and drive better results.",
    icon: RefreshCw,
    iconColor: "text-brand-sky",
    iconBg: "bg-brand-blue-soft",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, and audience.",
    icon: Search,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Our AI and experts create a tailored content strategy.",
    icon: FileText,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We generate high-quality, SEO-optimized content at scale.",
    icon: PenTool,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    number: "04",
    title: "Distribute",
    description:
      "We publish across the right channels for maximum reach.",
    icon: Send,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    number: "05",
    title: "Measure & Improve",
    description:
      "We track performance and continuously optimize.",
    icon: BarChart3,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-100",
  },
];

const resultMetrics: ResultMetric[] = [
  {
    value: "312%",
    label: "Increase in Website Traffic",
    icon: TrendingUp,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
  {
    value: "5x",
    label: "More Qualified Leads",
    icon: Users,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    value: "70%",
    label: "Less Time Spent",
    icon: Clock3,
    iconColor: "text-brand-orange",
    iconBg: "bg-brand-orange-soft",
  },
  {
    value: "3x",
    label: "Higher Conversions",
    icon: BarChart3,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-100",
  },
];

/* =========================================================
   SETTINGS ICON
========================================================= */

function SettingsIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <ShieldCheck
      size={size}
      strokeWidth={2}
      className={className}
    />
  );
}

/* =========================================================
   BUTTONS
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
        group
        inline-flex
        min-h-[52px]
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-brand-purple
        px-6
        py-3
        text-base
        font-bold
        sm:text-lg
        text-white
        shadow-[0_12px_30px_rgba(92,43,234,0.20)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-brand-blue
        hover:shadow-[0_16px_35px_rgba(37,99,235,0.24)]
      "
    >
      {children}

      <ArrowRight
        size={17}
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </Link>
  );
}

function SecondaryButton({
  children,
  href = "#process",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        min-h-[52px]
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-brand-dark/20
        bg-white/80
        px-6
        py-3
        text-base
        font-bold
        sm:text-lg
        text-brand-dark
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-brand-purple
        hover:text-brand-purple
      "
    >
      {children}
    </Link>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <DigitalMarketingHero
      eyebrow="CONTENT THAT WORKS SMARTER"
      title="AI Content"
      highlightedTitle="Marketing"
      subtitle="Create. Optimize. Engage. Grow."
      description="Leverage AI to plan, create, optimize, and distribute high-quality content at scale. From blogs and social media to emails and landing pages — we help you tell your brand story, drive engagement, and generate real business results."
      imageSrc="/digital-marketing/ai-content-marketing-hero.png"
      imageAlt="Content marketing professional using AI"
      primaryLabel="Book a Free Consultation"
      primaryHref="#contact"
      secondaryLabel="See It in Action"
      secondaryHref="#process"
      metrics={[
        {
          value: "3x",
          label: "More Content Output",
          icon: "file-text",
          tone: "purple",
        },
        {
          value: "60%",
          label: "Lower Content Costs",
          icon: "zap",
          tone: "green",
        },
        {
          value: "5x",
          label: "Higher Engagement",
          icon: "chart",
          tone: "orange",
        },
      ]}
    />
  );
}

/* =========================================================
   SOLUTIONS
========================================================= */

function SolutionsSection() {
  return (
    <section className="bg-white py-8">
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-center">
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-brand-purple
              sm:text-base
            "
          >
            Complete AI Content Marketing Solutions
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              leading-tight
              tracking-[-0.045em]
              text-brand-dark
              sm:text-4xl
              lg:text-[40px]
            "
          >
            End-to-End Content Creation, Powered by AI
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[820px]
              text-base
              leading-relaxed
              text-slate-700
              sm:text-lg
              md:text-xl
            "
          >
            Everything you need to plan, create, optimize, and distribute
            content that drives real business impact.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-4
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-6
          "
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="
                  group
                  min-h-[220px]
                  rounded-xl
                  border
                  border-brand-blue/10
                  bg-gradient-to-b
                  from-brand-blue-50/45
                  to-white
                  px-3
                  py-4
                  text-center
                  shadow-[0_8px_30px_rgba(24,74,140,0.035)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand-purple/15
                  hover:shadow-[0_18px_45px_rgba(24,74,140,0.08)]
                "
              >
                <div
                  className={`
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    ${solution.iconBg}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon
                    size={25}
                    strokeWidth={2.2}
                    className={solution.iconColor}
                  />
                </div>

                <h3
                  className="
                    mt-5
                    min-h-[48px]
                    whitespace-pre-line
                    text-base
                    font-extrabold
                    leading-snug
                    text-brand-dark
                    sm:text-lg
                    xl:text-xl
                  "
                >
                  {solution.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-base
                    leading-relaxed
                    text-slate-700
                  "
                >
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
========================================================= */

function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-white pb-8"
    >
      <div
        className="
          mx-auto
          max-w-[1400px]
          rounded-2xl
          bg-gradient-section
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        {/* Heading */}
        <div className="mx-auto max-w-[800px] text-center">
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-brand-purple
              sm:text-base
            "
          >
            How It Works
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              tracking-[-0.045em]
              text-brand-dark
              sm:text-4xl
              lg:text-[40px]
            "
          >
            From Idea to Impact
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-relaxed
              text-slate-700
              sm:text-lg
              md:text-xl
            "
          >
            A simple, streamlined process to turn your ideas into
            high-performing content.
          </p>
        </div>

        {/* Steps */}
        <div
          className="
            mt-12
            grid
            gap-4
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  relative
                  rounded-xl
                  border
                  border-white
                  bg-white/85
                  px-3
                  py-4
                  text-center
                  shadow-[0_8px_25px_rgba(24,74,140,0.025)]
                  backdrop-blur
                "
              >
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div
                    className="
                      absolute
                      -right-5
                      top-1/2
                      z-20
                      hidden
                      -translate-y-1/2
                      lg:block
                    "
                  >
                    <ArrowRight
                      size={24}
                      strokeWidth={1.7}
                      className="text-brand-purple"
                    />
                  </div>
                )}

                <div
                  className={`
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    ${step.iconBg}
                  `}
                >
                  <Icon
                    size={26}
                    className={step.iconColor}
                  />
                </div>

                <p
                  className="
                    mt-4
                    text-base
                    font-bold
                    text-brand-dark
                    sm:text-lg
                  "
                >
                  {step.number}
                </p>

                <h3
                  className="
                    mt-1
                    text-lg
                    font-extrabold
                    text-brand-dark
                    sm:text-xl
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-[220px]
                    text-base
                    leading-relaxed
                    text-slate-700
                  "
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RESULTS
========================================================= */

function ResultsSection() {
  return (
    <section className="bg-white py-8">
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* Main Results */}
        <div
          className="
            grid
            items-stretch
            gap-10
            lg:grid-cols-[1.03fr_0.97fr]
          "
        >
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-brand-purple
                sm:text-base
              "
            >
              Content That Delivers Results
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                tracking-[-0.045em]
                text-brand-dark
                sm:text-4xl
                lg:text-[40px]
              "
            >
              Real Content. Real Growth.
            </h2>

            <p
              className="
                mt-4
                max-w-[570px]
                text-base
                leading-relaxed
                text-slate-700
                sm:text-lg
                md:text-xl
              "
            >
              Businesses using AI-powered content marketing see higher
              engagement, more website traffic, and increased revenue.
            </p>

            {/* Metric Cards */}
            <div
              className="
                mt-8
                grid
                grid-cols-2
                gap-4
                sm:grid-cols-4
              "
            >
              {resultMetrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.value}
                    className="
                      rounded-xl
                      border
                      border-brand-blue/10
                      bg-gradient-to-b
                      from-brand-blue-50/40
                      to-white
                      px-2
                      py-3
                      text-center
                    "
                  >
                    <div
                      className={`
                        mx-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        ${metric.iconBg}
                      `}
                    >
                      <Icon
                        size={22}
                        className={metric.iconColor}
                      />
                    </div>

                    <p
                      className="
                        mt-4
                        text-2xl
                        font-extrabold
                        text-brand-purple
                        sm:text-3xl
                      "
                    >
                      {metric.value}
                    </p>

                    <p
                      className="
                        mt-2
                        text-base
                        font-medium
                        leading-snug
                        text-slate-700
                      "
                    >
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className="
              relative
              min-h-[400px]
              overflow-hidden
              rounded-2xl
              bg-gradient-to-br
              from-brand-navy
              via-brand-dark
              to-brand-purple
              p-6
              text-white
              sm:min-h-[450px]
              sm:p-8
              lg:min-h-[480px]
            "
          >
            {/* Grid */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-8
                bottom-7
                top-20
                opacity-20
              "
            >
              <div
                className="
                  h-full
                  w-full
                  bg-[linear-gradient(to_right,rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.22)_1px,transparent_1px)]
                  bg-[size:52px_52px]
                "
              />
            </div>

            {/* Content channels */}
            <div className="relative z-20 space-y-3">
              {[
                {
                  title: "Blog Post",
                  subtitle: "Drive organic traffic",
                  icon: FileText,
                  image:
                    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=300&q=80",
                },
                {
                  title: "Social Media",
                  subtitle: "Boost engagement",
                  icon: Megaphone,
                  image:
                    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=300&q=80",
                },
                {
                  title: "Email Campaign",
                  subtitle: "Nurture leads",
                  icon: Mail,
                  image:
                    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300&q=80",
                },
                {
                  title: "Landing Page",
                  subtitle: "Convert visitors",
                  icon: Target,
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      flex
                      h-[64px]
                      w-[240px]
                      items-center
                      gap-4
                      rounded-lg
                      border
                      border-white/20
                      bg-white/10
                      px-3
                      backdrop-blur-md
                      sm:w-[270px]
                    "
                  >
                    <div className="relative h-12 w-14 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Icon size={14} />

                        <p className="truncate text-base font-bold sm:text-lg">
                          {item.title}
                        </p>
                      </div>

                      <p className="mt-0.5 text-sm text-white/80 sm:text-base">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Growth chart */}
            <div
              className="
                absolute
                bottom-8
                left-[23%]
                right-[5%]
                top-[32%]
              "
            >
              <svg
                viewBox="0 0 500 250"
                className="h-full w-full"
                fill="none"
              >
                <path
                  d="
                    M5 220
                    C70 210 100 190 145 180
                    C195 168 210 145 260 132
                    C320 115 335 83 390 55
                    C430 35 455 20 495 5
                  "
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <path
                  d="M495 5L478 10M495 5L490 21"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Bar chart */}
            <div
              className="
                absolute
                bottom-7
                left-[29%]
                flex
                h-[165px]
                items-end
                gap-3
                sm:gap-4
              "
            >
              {[45, 70, 95, 125, 155].map(
                (height, index) => (
                  <div
                    key={index}
                    className="
                      w-6
                      rounded-t-sm
                      bg-brand-blue
                      shadow-[0_0_22px_rgba(8,118,237,0.35)]
                      sm:w-8
                    "
                    style={{ height }}
                  />
                ),
              )}
            </div>

            {/* Bottom white result card */}
            <div
              className="
                absolute
                bottom-8
                left-8
                z-30
                rounded-xl
                bg-white
                px-5
                py-4
                text-brand-dark
                shadow-xl
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-brand-purple-soft
                  "
                >
                  <BarChart3
                    size={20}
                    className="text-brand-purple"
                  />
                </div>

                <p className="text-base font-extrabold leading-snug sm:text-lg">
                  Great Content
                  <br />
                  Builds Great Brands
                </p>
              </div>
            </div>

            {/* Handwriting */}
            <div
              className="
                absolute
                right-6
                top-10
                z-30
                hidden
                rotate-[-6deg]
                font-hand
                text-xl
                leading-relaxed
                text-white
                lg:block
                xl:text-2xl
              "
            >
              <span className="block">One Strategy</span>
              <span className="block">Multiple Channels</span>
              <span className="block">Real Results</span>

              <svg
                className="absolute -bottom-16 right-2 h-14 w-14"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M44 4C35 16 25 25 10 38"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <path
                  d="M10 38L12 28M10 38L20 36"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* =================================================
            TESTIMONIAL
        ================================================= */}

        <div
          className="
            mt-10
            grid
            items-center
            gap-8
            rounded-2xl
            border
            border-brand-blue/10
            bg-gradient-section
            px-3
            py-4
           
            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          {/* Person + quote */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div
              className="
                relative
                h-[100px]
                w-[100px]
                shrink-0
                overflow-hidden
                rounded-full
                border-4
                border-white
                shadow-md
                sm:h-[120px]
                sm:w-[120px]
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85"
                alt="Marketing leader testimonial"
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>

            <div>
              <div className="mb-2 text-4xl font-extrabold leading-none text-brand-purple">
                “
              </div>

              <p
                className="
                  max-w-[650px]
                  text-base
                  italic
                  leading-relaxed
                  text-slate-700
                  sm:text-md
                  sm:leading-loose
                  md:text-lg
                "
              >
                AI WorksForce transformed our content strategy. We're
                now publishing high-quality content 3x faster and seeing
                a significant increase in leads and revenue.
              </p>

              <div className="mt-4">
                <p className="text-md font-extrabold text-brand-dark sm:text-lg">
                  Rohit Sharma
                </p>

                <p className="text-base text-slate-600 sm:text-md">
                  Marketing Head, GrowthTech
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial metrics */}
          <div
            className="
              grid
              grid-cols-3
              border-t
              border-brand-dark/10
              pt-6
              lg:border-l
              lg:border-t-0
              lg:pl-0
              lg:pt-0
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-purple-soft
                "
              >
                <BarChart3
                  size={20}
                  className="text-brand-purple"
                />
              </div>

              <p className="mt-3 text-2xl font-extrabold text-brand-purple ">
                3x
              </p>

              <p className="mt-1 text-base font-medium leading-snug text-slate-700">
                Faster Publishing
              </p>
            </div>

            <div className="border-x border-brand-dark/10 text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-blue-soft
                "
              >
                <Clock3
                  size={20}
                  className="text-brand-blue"
                />
              </div>

              <p className="mt-3 text-2xl font-extrabold text-brand-purple ">
                60%
              </p>

              <p className="mt-1 text-base font-medium leading-snug text-slate-700">
                More Engagement
              </p>
            </div>

            <div className="text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-pink-100
                "
              >
                <TrendingUp
                  size={20}
                  className="text-pink-500"
                />
              </div>

              <p className="mt-3 text-2xl font-extrabold text-brand-purple">
                2x
              </p>

              <p className="mt-1 text-base font-medium leading-snug text-slate-700 ">
                More Revenue
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTASection() {
  return (
    <section id="contact" className="px-4 pb-12 mb-3 sm:px-6 lg:px-8">
      <div
        className="
          relative
          mx-auto
          max-w-[1420px]
          overflow-hidden
          rounded-2xl
          bg-gradient-to-r
          from-brand-navy
          via-brand-dark
          to-brand-purple
          px-6
          py-14
          text-white
          shadow-[0_20px_60px_rgba(7,23,68,0.18)]
        
        "
      >
        {/* Decorative waves */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-36
            -left-20
            h-[290px]
            w-[520px]
            rotate-[12deg]
            rounded-[50%]
            border
            border-white/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-44
            -left-10
            h-[290px]
            w-[520px]
            rotate-[12deg]
            rounded-[50%]
            border
            border-white/10
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[900px]
            text-center
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-white/80
              sm:text-base
            "
          >
            Ready to Create Impactful Content?
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-extrabold
              tracking-[-0.045em]
              text-white
              sm:text-4xl
              lg:text-[40px]
            "
          >
            Let’s Build Your AI Content Strategy
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-relaxed
              text-white/90
              sm:text-lg
              md:text-xl
            "
          >
            High-quality content. Smarter marketing. Real business growth.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <Link
              href="#contact"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-8
                text-base
                font-extrabold
                sm:text-lg
                text-brand-dark
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-brand-blue-50
              "
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/ai-digital-marketing"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/50
                bg-white/5
                px-8
                text-base
                font-extrabold
                sm:text-lg
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/10
              "
            >
              Explore Our Digital Marketing Solutions
            </Link>
          </div>
        </div>

        {/* Handwriting */}
        <div
          className="
            absolute
            bottom-10
            right-10
            hidden
            rotate-[-7deg]
            font-hand
            text-2xl
            leading-relaxed
            text-white/90
            lg:block
          "
        >
          <span className="block">Ideas</span>
          <span className="block">Content</span>
          <span className="block">Growth</span>

          <svg
            className="
              absolute
              -left-14
              top-8
              h-16
              w-16
            "
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M54 8C38 18 25 30 12 48"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="M12 48L14 37M12 48L23 45"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AIContentMarketingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-brand-dark">
      <Hero />

      <SolutionsSection />

      <ProcessSection />

      <ResultsSection />

      <CTASection />

      {/* <Footer /> */}
    </main>
  );
}