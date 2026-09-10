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
        text-sm
        font-bold
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
   HEADER
========================================================= */

function Header() {
  return (
    <header
      className="
        relative
        z-50
        border-b
        border-brand-blue/5
        bg-white/95
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[68px]
          max-w-[1440px]
          items-center
          justify-between
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          aria-label="AI WorksForce home"
        >
          <div
            className="
              text-[20px]
              font-extrabold
              leading-none
              tracking-[-0.045em]
              text-brand-dark
            "
          >
            <span className="text-brand-blue">AI</span>{" "}
            WorksForce
          </div>

          <div
            className="
              mt-1
              text-[7px]
              font-medium
              leading-none
              tracking-wide
              text-slate-500
            "
          >
            Automate. Accelerate. Grow.
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            href="/"
            className="
              text-[11px]
              font-medium
              text-slate-600
              transition-colors
              hover:text-brand-purple
            "
          >
            Home
          </Link>

          <Link
            href="/what-is-ai-workforce"
            className="
              text-[11px]
              font-medium
              text-slate-600
              transition-colors
              hover:text-brand-purple
            "
          >
            What AIWorksForce?
          </Link>

          <Link
            href="/solutions"
            className="
              flex
              items-center
              gap-1
              border-b-2
              border-brand-purple
              py-[25px]
              text-[11px]
              font-bold
              text-brand-purple
            "
          >
            Solutions
            <ChevronDown size={11} />
          </Link>

          <Link
            href="/industries"
            className="
              text-[11px]
              font-medium
              text-slate-600
              transition-colors
              hover:text-brand-purple
            "
          >
            Industries
          </Link>

          <Link
            href="/case-studies"
            className="
              text-[11px]
              font-medium
              text-slate-600
              transition-colors
              hover:text-brand-purple
            "
          >
            Case Studies
          </Link>

          <Link
            href="/resources"
            className="
              text-[11px]
              font-medium
              text-slate-600
              transition-colors
              hover:text-brand-purple
            "
          >
            Resources
          </Link>

          <Link
            href="/about"
            className="
              text-[11px]
              font-medium
              text-slate-600
              transition-colors
              hover:text-brand-purple
            "
          >
            About
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="
            hidden
            min-h-[42px]
            items-center
            gap-2
            rounded-xl
            bg-brand-purple
            px-5
            text-[11px]
            font-bold
            text-white
            shadow-[0_8px_20px_rgba(92,43,234,0.18)]
            transition-all
            duration-300
            hover:bg-brand-blue
            sm:inline-flex
          "
        >
          Book a Free Consultation
          <ArrowRight size={14} />
        </Link>
      </div>
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-section">
      {/* Background glows */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-48
          h-[650px]
          w-[650px]
          rounded-full
          bg-brand-purple/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[38%]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-brand-blue/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1440px]
          min-h-[600px]
          items-center
          px-6
          py-12
          sm:px-8
          lg:grid-cols-[0.96fr_1.04fr]
          lg:px-12
          lg:py-14
          xl:min-h-[650px]
          xl:px-16
        "
      >
        {/* =================================================
            LEFT
        ================================================= */}

        <div className="relative z-30 max-w-[610px]">
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.32em]
              text-brand-purple
              sm:text-xs
            "
          >
            Content That Works Smarter
          </p>

          <h1
            className="
              mt-4
              text-[50px]
              font-extrabold
              leading-[0.96]
              tracking-[-0.055em]
              text-brand-dark
              sm:text-[60px]
              md:text-[66px]
              lg:text-[58px]
              xl:text-[70px]
            "
          >
            <span className="block bg-gradient-heading bg-clip-text text-transparent">
              AI Content
            </span>

            <span className="block text-brand-dark">
              Marketing
            </span>

            <span
              className="
                mt-2
                block
                text-[20px]
                leading-tight
                tracking-[-0.025em]
                text-brand-dark
                sm:text-[23px]
                lg:text-[24px]
              "
            >
              Create. Optimize. Engage. Grow.
            </span>
          </h1>

          <p
            className="
              mt-5
              max-w-[590px]
              text-[15px]
              leading-7
              text-slate-600
              sm:text-[16px]
              sm:leading-7
              lg:text-[17px]
            "
          >
            Leverage AI to plan, create, optimize, and distribute
            high-quality content at scale. From blogs and social media
            to emails and landing pages — we help you tell your brand
            story, drive engagement, and generate real business results.
          </p>

          {/* Hero Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#contact">
              Book a Free Consultation
            </PrimaryButton>

            <SecondaryButton href="#process">
              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-purple/10
                "
              >
                <Play
                  size={10}
                  fill="currentColor"
                  className="ml-0.5 text-brand-purple"
                />
              </span>

              See It in Action
            </SecondaryButton>
          </div>

          {/* Hero Stats */}
          <div
            className="
              mt-9
              grid
              grid-cols-3
              border-t
              border-brand-dark/10
              pt-6
              sm:mt-10
              sm:pt-7
            "
          >
            {/* Stat 1 */}
            <div className="flex items-center gap-3 border-r border-brand-dark/10 pr-4">
              <div
                className="
                  hidden
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-purple-soft
                  sm:flex
                "
              >
                <FileText
                  size={18}
                  className="text-brand-purple"
                />
              </div>

              <div>
                <p className="text-2xl font-extrabold text-brand-purple sm:text-3xl">
                  3x
                </p>

                <p className="mt-0.5 text-[9px] leading-4 text-slate-500 sm:text-xs">
                  More Content Output
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 border-r border-brand-dark/10 px-4">
              <div
                className="
                  hidden
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-green-soft
                  sm:flex
                "
              >
                <Zap
                  size={18}
                  className="text-brand-green"
                />
              </div>

              <div>
                <p className="text-2xl font-extrabold text-brand-purple sm:text-3xl">
                  60%
                </p>

                <p className="mt-0.5 text-[9px] leading-4 text-slate-500 sm:text-xs">
                  Lower Content Costs
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 pl-4">
              <div
                className="
                  hidden
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-purple-soft
                  sm:flex
                "
              >
                <BarChart3
                  size={18}
                  className="text-brand-purple"
                />
              </div>

              <div>
                <p className="text-2xl font-extrabold text-brand-purple sm:text-3xl">
                  5x
                </p>

                <p className="mt-0.5 text-[9px] leading-4 text-slate-500 sm:text-xs">
                  Higher Engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT HERO VISUAL
        ================================================= */}

        <div
          className="
            relative
            mt-14
            min-h-[470px]
            lg:mt-0
            lg:min-h-[570px]
            xl:min-h-[610px]
          "
        >
          {/* Main glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[370px]
              w-[370px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-brand-purple/15
              blur-[75px]
              sm:h-[480px]
              sm:w-[480px]
            "
          />

          {/* Orbital circle */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[410px]
              w-[410px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-brand-purple/10
              sm:h-[530px]
              sm:w-[530px]
            "
          />

          {/* Woman */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              absolute
              bottom-[-40px]
              left-1/2
              z-20
              w-[300px]
              -translate-x-1/2
              sm:w-[365px]
              lg:w-[405px]
              xl:w-[455px]
            "
          >
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=90"
              alt="Content marketing professional using AI"
              width={1000}
              height={1200}
              priority
              className="
                h-auto
                w-full
                object-cover
                object-top
                [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]
              "
            />
          </motion.div>

          {/* =================================================
              LEFT FLOATING CARDS
          ================================================= */}

          {/* Blog */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[0%]
              top-[7%]
              z-40
              w-[145px]
              rounded-xl
              border
              border-white
              bg-white/95
              px-3
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.12)]
              backdrop-blur
              sm:left-[2%]
              sm:w-[165px]
              lg:left-[4%]
              lg:w-[175px]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-purple-soft
                "
              >
                <FileText
                  size={19}
                  className="text-brand-purple"
                />
              </div>

              <p className="text-[10px] font-bold leading-4 text-brand-dark sm:text-xs">
                Blog Articles
                <br />
                <span className="font-medium">
                  with AI
                </span>
              </p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[0%]
              top-[22%]
              z-40
              w-[145px]
              rounded-xl
              border
              border-white
              bg-white/95
              px-3
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.12)]
              backdrop-blur
              sm:left-[1%]
              sm:w-[165px]
              lg:left-[2%]
              lg:w-[175px]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-pink-100
                "
              >
                <Megaphone
                  size={19}
                  className="text-pink-500"
                />
              </div>

              <p className="text-[10px] font-bold leading-4 text-brand-dark sm:text-xs">
                Social Media
                <br />
                Content
              </p>
            </div>
          </motion.div>

          {/* Email */}
          <div
            className="
              absolute
              left-[0%]
              top-[37%]
              z-40
              w-[145px]
              rounded-xl
              border
              border-white
              bg-white/95
              px-3
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.12)]
              backdrop-blur
              sm:left-[1%]
              sm:w-[165px]
              lg:left-[2%]
              lg:w-[175px]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-blue-soft
                "
              >
                <Mail
                  size={19}
                  className="text-brand-blue"
                />
              </div>

              <p className="text-[10px] font-bold leading-4 text-brand-dark sm:text-xs">
                Email Campaigns
              </p>
            </div>
          </div>

          {/* Landing Page */}
          <div
            className="
              absolute
              left-[0%]
              top-[52%]
              z-40
              w-[145px]
              rounded-xl
              border
              border-white
              bg-white/95
              px-3
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.12)]
              backdrop-blur
              sm:left-[1%]
              sm:w-[165px]
              lg:left-[2%]
              lg:w-[175px]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-blue-soft
                "
              >
                <Target
                  size={19}
                  className="text-brand-blue"
                />
              </div>

              <p className="text-[10px] font-bold leading-4 text-brand-dark sm:text-xs">
                Landing Pages
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT FLOATING CARDS
          ================================================= */}

          {/* Audience */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[0%]
              top-[7%]
              z-40
              w-[145px]
              rounded-xl
              border
              border-white
              bg-white/95
              px-3
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.12)]
              backdrop-blur
              sm:right-[1%]
              sm:w-[165px]
              lg:right-[2%]
              lg:w-[175px]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-purple-soft
                "
              >
                <TrendingUp
                  size={19}
                  className="text-brand-purple"
                />
              </div>

              <p className="text-[10px] font-bold leading-4 text-brand-dark sm:text-xs">
                Engage
                <br />
                Your Audience
              </p>
            </div>
          </motion.div>

          {/* Brand */}
          <div
            className="
              absolute
              right-[0%]
              top-[23%]
              z-40
              w-[145px]
              rounded-xl
              border
              border-white
              bg-white/95
              px-3
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.12)]
              backdrop-blur
              sm:right-[1%]
              sm:w-[165px]
              lg:right-[2%]
              lg:w-[175px]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-blue-soft
                "
              >
                <Users
                  size={19}
                  className="text-brand-blue"
                />
              </div>

              <p className="text-[10px] font-bold leading-4 text-brand-dark sm:text-xs">
                Stronger Brand
                <br />
                Presence
              </p>
            </div>
          </div>

          {/* Leads */}
          <div
            className="
              absolute
              right-[0%]
              top-[39%]
              z-40
              w-[145px]
              rounded-xl
              border
              border-white
              bg-white/95
              px-3
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.12)]
              backdrop-blur
              sm:right-[1%]
              sm:w-[165px]
              lg:right-[2%]
              lg:w-[175px]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-brand-purple-soft
                "
              >
                <BarChart3
                  size={19}
                  className="text-brand-purple"
                />
              </div>

              <p className="text-[10px] font-bold leading-4 text-brand-dark sm:text-xs">
                More Leads
                <br />
                & Revenue
              </p>
            </div>
          </div>

          {/* Laptop content overlay */}
          <div
            className="
              absolute
              bottom-[5%]
              left-1/2
              z-50
              flex
              w-[180px]
              -translate-x-1/2
              items-center
              justify-between
              rounded-xl
              border
              border-white
              bg-white/95
              px-4
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.15)]
              backdrop-blur
              sm:w-[210px]
              lg:bottom-[4%]
            "
          >
            <div>
              <p className="text-[11px] font-extrabold leading-4 text-brand-dark sm:text-xs">
                Content
                <br />
                Opportunities
              </p>
            </div>

            <BarChart3
              size={30}
              className="text-brand-blue"
            />
          </div>

          {/* Handwritten note */}
          <div
            className="
              absolute
              bottom-[0%]
              right-[0%]
              z-50
              hidden
              rotate-[-7deg]
              font-hand
              text-lg
              leading-5
              text-brand-purple
              lg:block
              xl:text-xl
            "
          >
            <span className="block">Better</span>
            <span className="block">Content</span>
            <span className="block">Brighter</span>
            <span className="block">Growth</span>

            <svg
              className="
                absolute
                -left-10
                top-7
                h-12
                w-12
              "
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M45 5C32 13 20 25 12 42"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M12 42L11 33M12 42L21 39"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SOLUTIONS
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
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-brand-purple
              sm:text-xs
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
              mt-3
              max-w-[820px]
              text-sm
              leading-6
              text-slate-600
              sm:text-base
              sm:leading-7
            "
          >
            Everything you need to plan, create, optimize, and distribute
            content that drives real business impact.
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
                  min-h-[205px]
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
                    min-h-[42px]
                    whitespace-pre-line
                    text-sm
                    font-extrabold
                    leading-5
                    text-brand-dark
                    sm:text-[15px]
                  "
                >
                  {solution.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[12px]
                    leading-5
                    text-slate-600
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
              text-[10px]
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
            A simple, streamlined process to turn your ideas into
            high-performing content.
          </p>
        </div>

        {/* Steps */}
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
              <div
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
                {/* Arrow */}
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
                    text-[10px]
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
                    sm:text-[15px]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-[190px]
                    text-[11px]
                    leading-5
                    text-slate-600
                    sm:text-xs
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
        {/* Main Results */}
        <div
          className="
            grid
            items-stretch
            gap-7
            lg:grid-cols-[1.03fr_0.97fr]
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-brand-purple
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
                mt-2
                max-w-[570px]
                text-sm
                leading-6
                text-slate-600
                sm:text-base
              "
            >
              Businesses using AI-powered content marketing see higher
              engagement, more website traffic, and increased revenue.
            </p>

            {/* Metric Cards */}
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
                  <div
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
                        text-[10px]
                        leading-4
                        text-slate-600
                        sm:text-xs
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
              min-h-[350px]
              overflow-hidden
              rounded-2xl
              bg-gradient-to-br
              from-brand-navy
              via-brand-dark
              to-brand-purple
              p-6
              text-white
              sm:min-h-[390px]
              sm:p-7
              lg:min-h-[405px]
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
            <div className="relative z-20 space-y-2">
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
                      h-[52px]
                      w-[210px]
                      items-center
                      gap-3
                      rounded-lg
                      border
                      border-white/20
                      bg-white/10
                      px-2
                      backdrop-blur-md
                      sm:w-[230px]
                    "
                  >
                    <div className="relative h-10 w-12 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <Icon size={12} />

                        <p className="truncate text-[10px] font-bold">
                          {item.title}
                        </p>
                      </div>

                      <p className="mt-0.5 text-[9px] text-white/70">
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
                gap-2
                sm:gap-3
              "
            >
              {[45, 70, 95, 125, 155].map(
                (height, index) => (
                  <div
                    key={index}
                    className="
                      w-5
                      rounded-t-sm
                      bg-brand-blue
                      shadow-[0_0_22px_rgba(8,118,237,0.35)]
                      sm:w-7
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
                bottom-6
                left-6
                z-30
                rounded-xl
                bg-white
                px-4
                py-3
                text-brand-dark
                shadow-xl
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-brand-purple-soft
                  "
                >
                  <BarChart3
                    size={18}
                    className="text-brand-purple"
                  />
                </div>

                <p className="text-[10px] font-extrabold leading-4 sm:text-xs">
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
                right-5
                top-7
                z-30
                hidden
                rotate-[-6deg]
                font-hand
                text-lg
                leading-5
                text-white
                lg:block
              "
            >
              <span className="block">One Strategy</span>
              <span className="block">Multiple Channels</span>
              <span className="block">Real Results</span>

              <svg
                className="absolute -bottom-14 right-2 h-12 w-12"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M44 4C35 16 25 25 10 38"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M10 38L12 28M10 38L20 36"
                  stroke="currentColor"
                  strokeWidth="1.5"
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
            mt-6
            grid
            items-center
            gap-6
            rounded-2xl
            border
            border-brand-blue/10
            bg-gradient-section
            px-5
            py-5
            sm:px-7
            sm:py-6
            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          {/* Person + quote */}
          <div className="flex items-center gap-4">
            <div
              className="
                relative
                h-[92px]
                w-[92px]
                shrink-0
                overflow-hidden
                rounded-full
                border-4
                border-white
                shadow-md
                sm:h-[105px]
                sm:w-[105px]
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85"
                alt="Marketing leader testimonial"
                fill
                sizes="105px"
                className="object-cover"
              />
            </div>

            <div>
              <div className="mb-1 text-3xl font-extrabold leading-none text-brand-purple">
                “
              </div>

              <p
                className="
                  max-w-[600px]
                  text-xs
                  leading-5
                  text-slate-600
                  sm:text-sm
                  sm:leading-6
                "
              >
                “AI WorksForce transformed our content strategy. We're
                now publishing high-quality content 3x faster and seeing
                a significant increase in leads and revenue.”
              </p>

              <p className="mt-2 text-xs font-extrabold text-brand-dark">
                Rohit Sharma
              </p>

              <p className="text-[10px] text-slate-500">
                Marketing Head, GrowthTech
              </p>
            </div>
          </div>

          {/* Testimonial metrics */}
          <div
            className="
              grid
              grid-cols-3
              border-t
              border-brand-dark/10
              pt-5
              lg:border-l
              lg:border-t-0
              lg:pl-7
              lg:pt-0
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-purple-soft
                "
              >
                <BarChart3
                  size={17}
                  className="text-brand-purple"
                />
              </div>

              <p className="mt-2 text-xl font-extrabold text-brand-purple sm:text-2xl">
                3x
              </p>

              <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                Faster Publishing
              </p>
            </div>

            <div className="border-x border-brand-dark/10 text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-blue-soft
                "
              >
                <Clock3
                  size={17}
                  className="text-brand-blue"
                />
              </div>

              <p className="mt-2 text-xl font-extrabold text-brand-purple sm:text-2xl">
                60%
              </p>

              <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                More Engagement
              </p>
            </div>

            <div className="text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-pink-100
                "
              >
                <TrendingUp
                  size={17}
                  className="text-pink-500"
                />
              </div>

              <p className="mt-2 text-xl font-extrabold text-brand-purple sm:text-2xl">
                2x
              </p>

              <p className="text-[9px] leading-4 text-slate-500 sm:text-[10px]">
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
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-white/80
            "
          >
            Ready to Create Impactful Content?
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
            Let’s Build Your AI Content Strategy
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
            High-quality content. Smarter marketing. Real business growth.
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
              href="/ai-digital-marketing"
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
              Explore Our Digital Marketing Solutions
            </Link>
          </div>
        </div>

        {/* Handwriting */}
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
          <span className="block">Ideas</span>
          <span className="block">Content</span>
          <span className="block">Growth</span>

          <svg
            className="
              absolute
              -left-12
              top-7
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
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-white">
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-6
          py-8
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* Top */}
        <div
          className="
            flex
            flex-col
            gap-7
            border-b
            border-brand-dark/10
            pb-7
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div
              className="
                text-[18px]
                font-extrabold
                leading-none
                tracking-[-0.04em]
                text-brand-dark
              "
            >
              <span className="text-brand-blue">AI</span>{" "}
              WorksForce
            </div>

            <div
              className="
                mt-1
                text-[7px]
                font-medium
                text-slate-500
              "
            >
              Automate. Accelerate. Grow.
            </div>
          </Link>

          {/* Links */}
          <nav
            className="
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
            "
          >
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
                key={label}
                href={href}
                className="
                  text-[9px]
                  font-medium
                  text-slate-500
                  transition-colors
                  hover:text-brand-purple
                "
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-md
                bg-brand-dark
                text-[10px]
                font-bold
                text-white
                transition-colors
                hover:bg-brand-purple
              "
            >
              in
            </Link>

            <Link
              href="#"
              aria-label="X"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-md
                bg-brand-blue-50
                text-xs
                font-bold
                text-brand-dark
                transition-colors
                hover:bg-brand-purple-soft
              "
            >
              𝕏
            </Link>

            <Link
              href="#"
              aria-label="YouTube"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-md
                bg-brand-blue-50
                text-[10px]
                text-brand-dark
                transition-colors
                hover:bg-brand-purple-soft
              "
            >
              ▶
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-md
                bg-brand-blue-50
                text-sm
                text-brand-dark
                transition-colors
                hover:bg-brand-purple-soft
              "
            >
              ◎
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-3
            pt-5
            text-[9px]
            text-slate-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © 2024 AI WorksForce. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-brand-purple"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-brand-purple"
            >
              Terms of Service
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-brand-purple"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AIContentMarketingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-brand-dark">
      {/* <Header /> */}

      <Hero />

      <SolutionsSection />

      <ProcessSection />

      <ResultsSection />

      <CTASection />

      {/* <Footer /> */}
    </main>
  );
}