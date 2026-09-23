"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  Megaphone,
  MessageCircle,
  PenTool,
  Play,
  RefreshCw,
  Search,
  Send,
  Share2,
  Target,
  TrendingUp,
  Twitter,
  Users,
  Youtube,
  Zap,
} from "lucide-react";
import DigitalMarketingHero from "@/components/digital-marketing-hero/reusable-hero";

/* =========================================================
   TYPES
========================================================= */

type Solution = {
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

type Platform = {
  name: string;
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

const solutions: Solution[] = [
  {
    title: "Content Strategy",
    description:
      "AI helps create data-driven strategies tailored to your brand and audience.",
    icon: PenTool,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-100",
  },
  {
    title: "AI Content Creation",
    description:
      "Create scroll-stopping content, captions, and visuals in minutes.",
    icon: FileText,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
  },
  {
    title: "Smart Scheduling",
    description:
      "Automatically publish at the best times for maximum reach.",
    icon: CalendarDays,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
  {
    title: "Audience Engagement",
    description:
      "AI monitors comments and messages to keep your audience engaged 24/7.",
    icon: Users,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    title: "Performance Tracking",
    description:
      "Get real-time insights on what’s working and optimize for better results.",
    icon: BarChart3,
    iconColor: "text-brand-orange",
    iconBg: "bg-brand-orange-soft",
  },
  {
    title: "Brand Growth",
    description:
      "Build a stronger online presence and turn followers into customers.",
    icon: Target,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We analyze your brand, industry, and audience goals.",
    icon: Search,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Our AI creates a custom content strategy and calendar.",
    icon: FileText,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Generate engaging content with AI.",
    icon: PenTool,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    number: "04",
    title: "Publish",
    description:
      "Automate posting across all your social media channels.",
    icon: Send,
    iconColor: "text-brand-purple",
    iconBg: "bg-brand-purple-soft",
  },
  {
    number: "05",
    title: "Track & Optimize",
    description:
      "Monitor performance and continuously improve results.",
    icon: BarChart3,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-100",
  },
];

const platforms: Platform[] = [
  {
    name: "Instagram",
    description: "Engaging Reels, Posts & Stories",
    icon: Instagram,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-100",
  },
  {
    name: "Facebook",
    description: "Build Community & Drive Traffic",
    icon: Users,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
  },
  {
    name: "LinkedIn",
    description: "Grow Your Professional Network",
    icon: Linkedin,
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue-soft",
  },
  {
    name: "YouTube",
    description: "AI-Powered Video Content",
    icon: Youtube,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
  },
  {
    name: "TikTok",
    description: "Short Videos, Big Opportunities",
    icon: Zap,
    iconColor: "text-brand-dark",
    iconBg: "bg-slate-100",
  },
  {
    name: "X (Twitter)",
    description: "Real-Time Engagement",
    icon: Twitter,
    iconColor: "text-brand-dark",
    iconBg: "bg-slate-100",
  },
  {
    name: "Pinterest",
    description: "Visual Content That Converts",
    icon: Target,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
  },
];

const resultMetrics: ResultMetric[] = [
  {
    value: "256%",
    label: "Increase in Engagement",
    icon: TrendingUp,
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green-soft",
  },
  {
    value: "3x",
    label: "More Followers",
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
    value: "5x",
    label: "Higher Conversions",
    icon: BarChart3,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-100",
  },
];

/* =========================================================
   REUSABLE BUTTONS
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
        text-sm
        font-bold
        text-white
        shadow-[0_12px_30px_rgba(92,43,234,0.20)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-brand-blue
        hover:shadow-[0_16px_35px_rgba(37,99,235,0.24)]
        active:translate-y-0
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
        text-sm
        font-bold
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
  eyebrow="SOCIAL MEDIA. SMARTER WITH AI."
  title="AI"
  highlightedTitle="Social Media"
  subtitle="Plan. Create. Post. Engage. Grow."
  description="AI takes care of your social presence. You take care of your business. From content creation and scheduling to engagement and performance tracking — our AI-powered social media solutions help you build a stronger brand and drive real results."
  imageSrc="/digital-marketing/ai-social-marketing-hero.png"
  imageAlt="Social media professional working with AI"
  primaryLabel="Book a Free Consultation"
  primaryHref="#contact"
  secondaryLabel="See It in Action"
  secondaryHref="#process"
  metrics={[
    {
      value: "3x",
      label: "More Engagement",
      icon: "users",
      tone: "purple",
    },
    {
      value: "70%",
      label: "Less Time Spent",
      icon: "clock",
      tone: "green",
    },
    {
      value: "5x",
      label: "Faster Content Creation",
      icon: "zap",
      tone: "orange",
    },
  ]}
/>
  );
}

/* =========================================================
   SOLUTIONS SECTION
========================================================= */

function SolutionsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
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
              tracking-[0.3em]
              text-brand-purple
              sm:text-xs
            "
          >
            Complete AI Social Media Solutions
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              leading-[1.15]
              tracking-[-0.025em]
              text-brand-dark
              sm:text-4xl
              lg:text-[40px]
            "
          >
            Everything You Need to Grow on Social Media
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[780px]
              text-sm
              leading-6
              text-slate-600
              sm:text-base
              sm:leading-7
            "
          >
            From strategy to execution, our AI-powered social media
            solutions cover it all.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-11
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-6
          "
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
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
                  min-h-[210px]
                  rounded-xl
                  border
                  border-brand-blue/10
                  bg-gradient-to-b
                  from-brand-blue-50/45
                  to-white
                  px-5
                  py-7
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
                    min-h-[22px]
                    text-base
                    font-extrabold
                    leading-[1.35]
                    text-brand-dark
                    sm:text-lg
                  "
                >
                  {solution.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-[1.5] sm:text-base
                    text-slate-600
                  "
                >
                  {solution.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS SECTION
========================================================= */

function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-white pb-16 sm:pb-20 lg:pb-24"
    >
      <div
        className="
          mx-auto
          max-w-[1400px]
          rounded-2xl
          bg-gradient-section
          px-5
          py-10
          sm:px-8
          sm:py-12
          lg:px-10
          lg:py-14
        "
      >
        {/* Heading */}
        <div className="mx-auto max-w-[800px] text-center">
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-brand-purple
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
              mt-3
              text-sm
              leading-6
              text-slate-600
              sm:text-base
            "
          >
            A simple, streamlined process to grow your social media with AI.
          </p>
        </div>

        {/* Process Cards */}
        <div
          className="
            mt-10
            grid
            gap-3
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="
                  relative
                  rounded-xl
                  border
                  border-white
                  bg-white/85
                  px-5
                  py-6
                  text-center
                  shadow-[0_8px_25px_rgba(24,74,140,0.025)]
                  backdrop-blur
                "
              >
                {/* Connecting arrow */}
                {index < processSteps.length - 1 && (
                  <div
                    className="
                      absolute
                      -right-4
                      top-1/2
                      z-20
                      hidden
                      -translate-y-1/2
                      lg:block
                    "
                  >
                    <ArrowRight
                      size={22}
                      strokeWidth={1.7}
                      className="text-brand-purple"
                    />
                  </div>
                )}

                <div
                  className={`
                    mx-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    ${step.iconBg}
                  `}
                >
                  <Icon
                    size={23}
                    className={step.iconColor}
                  />
                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    font-bold
                    text-brand-dark
                  "
                >
                  {step.number}
                </p>

                <h3
                  className="
                    mt-0.5
                    text-sm
                    font-extrabold
                    text-brand-dark
                    sm:text-sm
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-[190px]
                    text-sm
                    leading-[1.5] sm:text-base
                    text-slate-600
                    sm:text-xs
                  "
                >
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PLATFORMS
========================================================= */

function PlatformsSection() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
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
        <div className="mx-auto max-w-[850px] text-center">
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-brand-purple
            "
          >
            All Major Platforms
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              tracking-[-0.045em]
              text-brand-dark
              sm:text-4xl
            "
          >
            Grow Across Every Platform
          </h2>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-slate-600
              sm:text-base
            "
          >
            One AI-powered solution for all your social media channels.
          </p>
        </div>

        <div
          className="
            mt-10
            grid
            gap-3
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-7
          "
        >
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <article
                key={platform.name}
                className="
                  group
                  rounded-xl
                  border
                  border-brand-blue/10
                  bg-gradient-to-b
                  from-brand-blue-50/40
                  to-white
                  px-4
                  py-5
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_35px_rgba(24,74,140,0.08)]
                "
              >
                <div
                  className={`
                    mx-auto
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    ${platform.iconBg}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon
                    size={22}
                    className={platform.iconColor}
                  />
                </div>

                <h3
                  className="
                    mt-3
                    text-xs
                    font-extrabold
                    text-brand-dark
                    sm:text-sm
                  "
                >
                  {platform.name}
                </h3>

                <p
                  className="
                    mt-1.5
                    text-sm
                    leading-4
                    text-slate-600
                  "
                >
                  {platform.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RESULTS + TESTIMONIAL
========================================================= */

function ResultsSection() {
  return (
    <section className="bg-white pb-8 sm:pb-10 lg:pb-12">
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
        {/* =================================================
            TOP RESULTS AREA
        ================================================= */}

        <div
          className="
            grid
            items-stretch
            gap-7
            lg:grid-cols-[1fr_1fr]
          "
        >
          {/* LEFT RESULTS */}
          <div>
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-brand-purple
              "
            >
              Real Results. Real Businesses.
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
              Social Media Success with AI
            </h2>

            <p
              className="
                mt-2
                max-w-[600px]
                text-sm
                leading-6
                text-slate-600
                sm:text-base
              "
            >
              See how businesses like yours are growing faster with AI
              WorksForce.
            </p>

            {/* Metrics */}
            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-4
              "
            >
              {resultMetrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <article
                    key={metric.value}
                    className="
                      rounded-xl
                      border
                      border-brand-blue/10
                      bg-gradient-to-b
                      from-brand-blue-50/40
                      to-white
                      px-3
                      py-5
                      text-center
                    "
                  >
                    <div
                      className={`
                        mx-auto
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        ${metric.iconBg}
                      `}
                    >
                      <Icon
                        size={20}
                        className={metric.iconColor}
                      />
                    </div>

                    <p
                      className="
                        mt-3
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
                        mt-1
                        text-sm
                        leading-4
                        text-slate-600
                        sm:text-xs
                      "
                    >
                      {metric.label}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* =================================================
              TESTIMONIAL CARD
          ================================================= */}

          <article
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-brand-blue/10
              bg-gradient-section
              p-6
              sm:p-7
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
              "
            >
              {/* Avatar */}
              <div
                className="
                  relative
                  mx-auto
                  h-[125px]
                  w-[125px]
                  shrink-0
                  overflow-hidden
                  rounded-full
                  border-4
                  border-white
                  shadow-lg
                  sm:mx-0
                  sm:h-[140px]
                  sm:w-[140px]
                "
              >
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=85"
                  alt="Priya Sharma testimonial"
                  fill
                  sizes="140px"
                  className="object-cover"
                />
              </div>

              {/* Quote */}
              <div>
                <div
                  className="
                    mb-1
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-2xl
                    font-extrabold
                    text-brand-purple
                    shadow-sm
                  "
                >
                  “
                </div>

                <p
                  className="
                    text-xs
                    leading-5
                    text-slate-600
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  “AI WorksForce completely transformed our social media.
                  We’re now reaching more people, getting better engagement,
                  and saving hours of work every week.”
                </p>

                <p
                  className="
                    mt-3
                    text-xs
                    font-extrabold
                    text-brand-dark
                  "
                >
                  Priya Sharma
                </p>

                <p
                  className="
                    mt-0.5
                    text-sm
                    text-slate-500
                  "
                >
                  Founder, StyleNest (Fashion Brand)
                </p>
              </div>
            </div>

            {/* Slider dots */}
            <div className="mt-5 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/20" />
            </div>

            {/* Right arrow */}
            <button
              type="button"
              aria-label="Next testimonial"
              className="
                absolute
                bottom-6
                right-5
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white
                text-brand-purple
                shadow-md
                transition-all
                hover:bg-brand-purple
                hover:text-white
              "
            >
              <ArrowRight size={15} />
            </button>

            {/* Handwriting */}
            <div
              className="
                absolute
                right-4
                top-5
                hidden
                rotate-[-8deg]
                font-hand
                text-lg
                leading-5
                text-brand-purple
                lg:block
              "
            >
              <span className="block">Real</span>
              <span className="block">People</span>
              <span className="block">Real</span>
              <span className="block">Growth</span>
            </div>
          </article>
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
    <section id="contact" className="px-4 pb-7 sm:px-6 lg:px-8">
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
          py-12
          text-white
          shadow-[0_20px_60px_rgba(7,23,68,0.18)]
          sm:px-10
          sm:py-14
          lg:px-16
          lg:py-14
        "
      >
        {/* Decorative wave lines */}
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

        {/* Content */}
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
              tracking-[0.3em]
              text-white/80
            "
          >
            Ready to Grow Your Social Media?
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              tracking-[-0.045em]
              text-white
              sm:text-4xl
              lg:text-[40px]
            "
          >
            Let’s Take Your Social Media to the Next Level
          </h2>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-white/80
              sm:text-base
            "
          >
            Get a custom AI social media strategy tailored to your business
            goals.
          </p>

          <div
            className="
              mt-7
              flex
              flex-col
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <Link
              href="#contact"
              className="
                inline-flex
                min-h-[50px]
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-7
                text-sm
                font-extrabold
                text-brand-dark
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-brand-blue-50
              "
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                min-h-[50px]
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/50
                bg-white/5
                px-7
                text-sm
                font-extrabold
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/10
              "
            >
              Talk to Our Social Media Experts
            </Link>
          </div>
        </div>

        {/* Handwritten note */}
        <div
          className="
            absolute
            bottom-8
            right-7
            hidden
            rotate-[-7deg]
            font-hand
            text-xl
            leading-5
            text-white/90
            lg:block
          "
        >
          <span className="block">More</span>
          <span className="block">Followers</span>
          <span className="block">More Customers</span>
          <span className="block">Brighter Future</span>

          <svg
            className="
              absolute
              -left-12
              top-8
              h-14
              w-14
            "
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
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

export default function AISocialMediaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-brand-dark">
 

      <Hero />

      <SolutionsSection />

      <ProcessSection />

      <PlatformsSection />

      <ResultsSection />

      <CTASection />

      {/* <Footer /> */}
    </main>
  );
}