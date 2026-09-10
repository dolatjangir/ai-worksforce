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
      "Generate engaging posts, captions, and visuals in minutes.",
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

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
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
            href="/how-it-works"
            className="
              text-[11px]
              font-medium
              text-slate-600
              transition-colors
              hover:text-brand-purple
            "
          >
            How it Works
          </Link>

          <Link
            href="/our-ai-workflow"
            className="
              text-[11px]
              font-medium
              text-slate-600
              transition-colors
              hover:text-brand-purple
            "
          >
            Our AI Workflow
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

        {/* Header CTA */}
        <Link
          href="#contact"
          className="
            hidden
            min-h-[42px]
            items-center
            justify-center
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
      {/* Decorative background glows */}
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
          left-[35%]
          top-[5%]
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
          min-h-[590px]
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
            HERO LEFT
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
            Social Media. Smarter with AI.
          </p>

          <h1
            className="
              mt-4
              text-[49px]
              font-extrabold
              leading-[0.95]
              tracking-[-0.055em]
              text-brand-dark
              sm:text-[60px]
              md:text-[65px]
              lg:text-[58px]
              xl:text-[70px]
            "
          >
            <span className="block bg-gradient-heading bg-clip-text text-transparent">
              AI Social Media
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
              Plan. Create. Post. Engage. Grow.
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
              lg:text-[17px]
              lg:leading-7
            "
          >
            Let AI handle your social media, so you can focus on your
            business. From content creation and scheduling to engagement
            and performance tracking — our AI-powered social media
            solutions help you build a stronger brand and drive real
            results.
          </p>

          {/* Buttons */}
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

          {/* Hero metrics */}
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
            <div className="border-r border-brand-dark/10 pr-4">
              <p
                className="
                  text-2xl
                  font-extrabold
                  text-brand-purple
                  sm:text-3xl
                "
              >
                3x
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  leading-4
                  text-slate-500
                  sm:text-xs
                "
              >
                More Engagement
              </p>
            </div>

            <div className="border-r border-brand-dark/10 px-4">
              <p
                className="
                  text-2xl
                  font-extrabold
                  text-brand-purple
                  sm:text-3xl
                "
              >
                70%
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  leading-4
                  text-slate-500
                  sm:text-xs
                "
              >
                Less Time Spent
              </p>
            </div>

            <div className="pl-4">
              <p
                className="
                  text-2xl
                  font-extrabold
                  text-brand-purple
                  sm:text-3xl
                "
              >
                5x
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  leading-4
                  text-slate-500
                  sm:text-xs
                "
              >
                Faster Content Creation
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            HERO RIGHT
        ================================================= */}

        <div
          className="
            relative
            mt-14
            min-h-[470px]
            lg:mt-0
            lg:min-h-[570px]
            xl:min-h-[620px]
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[380px]
              w-[380px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-brand-purple/15
              blur-[75px]
              sm:h-[490px]
              sm:w-[490px]
            "
          />

          {/* Orbital circle */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[430px]
              w-[430px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-brand-purple/10
              sm:h-[540px]
              sm:w-[540px]
            "
          />

          {/* =================================================
              WOMAN IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
              absolute
              bottom-[-45px]
              left-1/2
              z-20
              w-[300px]
              -translate-x-1/2
              sm:w-[365px]
              lg:w-[410px]
              xl:w-[455px]
            "
          >
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=90"
              alt="Social media professional working with AI"
              width={1000}
              height={1200}
              priority
              className="
                h-auto
                w-full
                object-cover
                object-top
                [mask-image:linear-gradient(to_bottom,black_83%,transparent_100%)]
              "
            />
          </motion.div>

          {/* =================================================
              SOCIAL ICON ORBIT
          ================================================= */}

          {/* Instagram */}
          <div
            className="
              absolute
              left-[17%]
              top-[9%]
              z-30
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-pink-500
              via-purple-500
              to-orange-400
              text-white
              shadow-lg
              sm:h-16
              sm:w-16
            "
          >
            <Instagram size={30} />
          </div>

          {/* LinkedIn */}
          <div
            className="
              absolute
              left-[39%]
              top-[0%]
              z-30
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-brand-blue
              text-white
              shadow-lg
              sm:h-16
              sm:w-16
            "
          >
            <Linkedin size={31} />
          </div>

          {/* X */}
          <div
            className="
              absolute
              right-[25%]
              top-[10%]
              z-30
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-black
              text-white
              shadow-lg
              sm:h-16
              sm:w-16
            "
          >
            <Twitter size={27} />
          </div>

          {/* Facebook */}
          <div
            className="
              absolute
              left-[18%]
              top-[25%]
              z-30
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-[#1877f2]
              text-white
              shadow-lg
              sm:h-16
              sm:w-16
            "
          >
            <span className="text-[32px] font-bold">f</span>
          </div>

          {/* YouTube */}
          <div
            className="
              absolute
              right-[21%]
              top-[30%]
              z-30
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-red-600
              text-white
              shadow-lg
              sm:h-14
              sm:w-14
            "
          >
            <Youtube size={27} fill="currentColor" />
          </div>

          {/* Pinterest */}
          <div
            className="
              absolute
              left-[16%]
              top-[43%]
              z-30
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-red-600
              text-white
              shadow-lg
              sm:h-14
              sm:w-14
            "
          >
            <span className="text-xl font-bold">P</span>
          </div>

          {/* TikTok */}
          <div
            className="
              absolute
              right-[20%]
              top-[46%]
              z-30
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-black
              text-white
              shadow-lg
              sm:h-14
              sm:w-14
            "
          >
            <span className="text-xl font-bold">♪</span>
          </div>

          {/* =================================================
              LEFT INFO CARD
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[0%]
              top-[28%]
              z-40
              w-[135px]
              rounded-xl
              border
              border-white
              bg-white/95
              px-3
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.13)]
              backdrop-blur
              sm:left-[1%]
              sm:w-[150px]
              lg:left-[2%]
              lg:w-[160px]
            "
          >
            <p
              className="
                text-[11px]
                font-bold
                leading-5
                text-brand-dark
                sm:text-xs
              "
            >
              Create
              <br />
              Post
              <br />
              Schedule
              <br />
              Engage
              <br />
              Grow 🚀
            </p>
          </motion.div>

          {/* =================================================
              RIGHT GROWTH CARD
          ================================================= */}

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[0%]
              top-[2%]
              z-40
              w-[155px]
              rounded-xl
              border
              border-white
              bg-white/95
              px-4
              py-3
              shadow-[0_15px_40px_rgba(30,70,140,0.13)]
              backdrop-blur
              sm:right-[1%]
              sm:w-[175px]
              lg:right-[2%]
              lg:w-[185px]
            "
          >
            <p className="text-xs font-bold text-brand-dark">
              Social Growth
            </p>

            <p className="mt-1 text-xl font-extrabold text-brand-green">
              ↑ 256%
            </p>

            {/* mini chart */}
            <div className="mt-2 h-[55px]">
              <svg
                viewBox="0 0 180 60"
                className="h-full w-full"
                fill="none"
              >
                <path
                  d="
                    M2 52
                    L25 48
                    L50 43
                    L75 39
                    L95 32
                    L115 27
                    L135 17
                    L155 12
                    L178 4
                  "
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-brand-purple"
                />

                <path
                  d="M178 4L164 8M178 4L176 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-brand-purple"
                />
              </svg>
            </div>

            <div className="mt-1 flex justify-between text-[7px] text-slate-400">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT FEATURE LIST
          ================================================= */}

          <div
            className="
              absolute
              right-[0%]
              top-[37%]
              z-40
              w-[165px]
              space-y-2
              sm:right-[1%]
              sm:w-[180px]
              lg:right-[2%]
              lg:w-[190px]
            "
          >
            {[
              {
                title: "AI Content Creation",
                icon: PenTool,
                color: "text-brand-purple",
                bg: "bg-brand-purple-soft",
              },
              {
                title: "Smart Scheduling",
                icon: CalendarDays,
                color: "text-brand-green",
                bg: "bg-brand-green-soft",
              },
              {
                title: "Audience Engagement",
                icon: Users,
                color: "text-brand-purple",
                bg: "bg-brand-purple-soft",
              },
              {
                title: "Analytics & Insights",
                icon: BarChart3,
                color: "text-brand-blue",
                bg: "bg-brand-blue-soft",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white
                    bg-white/95
                    px-3
                    py-2
                    shadow-[0_8px_25px_rgba(30,70,140,0.10)]
                    backdrop-blur
                  "
                >
                  <div
                    className={`
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      ${item.bg}
                    `}
                  >
                    <Icon
                      size={14}
                      className={item.color}
                    />
                  </div>

                  <p className="text-[9px] font-bold text-brand-dark sm:text-[10px]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =================================================
              ROBOT
          ================================================= */}

          <div
            className="
              absolute
              bottom-[3%]
              left-[7%]
              z-30
              hidden
              h-[100px]
              w-[100px]
              items-center
              justify-center
              rounded-[45%]
              bg-gradient-to-br
              from-white
              to-brand-blue-soft
              shadow-[0_15px_35px_rgba(30,70,140,0.16)]
              lg:flex
            "
          >
            <div
              className="
                relative
                flex
                h-[56px]
                w-[68px]
                items-center
                justify-center
                rounded-2xl
                bg-brand-navy
                shadow-inner
              "
            >
              <div
                className="
                  h-[13px]
                  w-[13px]
                  rounded-full
                  bg-brand-blue
                  shadow-[0_0_15px_rgba(8,118,237,0.8)]
                "
              />

              <div
                className="
                  absolute
                  -bottom-2
                  left-1/2
                  h-3
                  w-8
                  -translate-x-1/2
                  rounded-full
                  bg-brand-blue
                "
              />
            </div>
          </div>

          {/* Handwritten note */}
          <div
            className="
              absolute
              bottom-[1%]
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
            <span className="block">Smarter</span>
            <span className="block">Social Media</span>
            <span className="block">Bigger</span>
            <span className="block">Opportunities</span>

            <svg
              className="
                absolute
                -left-12
                top-8
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
              text-[10px]
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
              leading-tight
              tracking-[-0.045em]
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
              text-[10px]
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
                    text-[10px]
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
                text-[10px]
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
                        text-[10px]
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
                    text-[10px]
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
              text-[10px]
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
        {/* Top Footer */}
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
              ["Case Studies", "/case-studies"],
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

          {/* Social links */}
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
              aria-label="Twitter"
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

        {/* Bottom Footer */}
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
   MAIN PAGE
========================================================= */

export default function AISocialMediaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-brand-dark">
      {/* <Header /> */}

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