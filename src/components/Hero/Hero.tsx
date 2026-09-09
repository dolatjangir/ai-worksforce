// app/components/sections/HeroSection.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Users,
  Bot,
  Settings,
  Target,
  ArrowRight,
  LocateFixed,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type HeroTag = {
  icon: LucideIcon;
  text: string;
};

export type HeroCTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
};

export type HeroSectionProps = {
  badge?: string;

  title: string;

  highlightedTitle?: string;

  description: string;

  tags?: HeroTag[];

  ctas?: HeroCTA[];

  bottomTagline?: string;

  bottomTaglineIcon?: LucideIcon;

  image: {
    src: string;
    alt: string;
    priority?: boolean;
    sizes?: string;
  };

  quote?: {
    lines: string[];
  };

  stats?: {
    value: string;
    label: string;
    location?: string;
  };

  className?: string;
};

/* -------------------------------------------------------------------------- */
/* Default Data                                                               */
/* -------------------------------------------------------------------------- */

export const defaultHeroTags: HeroTag[] = [
  { icon: Users, text: "AI Strategy" },
  { icon: Bot, text: "AI Tools" },
  { icon: Settings, text: "AI Agents" },
  { icon: Target, text: "Expert Workforce" },
];

export const defaultHeroCTAs: HeroCTA[] = [
  {
    label: "Get Your AI Assessment",
    href: "#contact",
    variant: "primary",
    icon: ArrowRight,
  },
  {
    label: "Talk to an AI Expert",
    href: "#contact",
    variant: "secondary",
  },
];

/* -------------------------------------------------------------------------- */
/* Animations                                                                 */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function HeroSection({
  badge = "Your Outsource AI Department",

  title = "Build Your AI Workforce",

  highlightedTitle = "Without Building an AI Team.",

  description = `We analyze your business and processes, identify the right data,
AI tools, and AI agents, and then build and manage a complete
AI-powered workforce for you from our India delivery center.`,

  tags = defaultHeroTags,

  ctas = defaultHeroCTAs,

  bottomTagline = `From business analysis to daily operations — AIWorkForce
manages it for you.`,

  bottomTaglineIcon: BottomTaglineIcon = LocateFixed,

  image,

  quote = {
    lines: ["Your extended", "team in India."],
  },

  stats = {
    value: "150+",
    label: "Delivery Seats",
    location: "Jaipur, India",
  },

  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-visible bg-[#f4faff] ${className}`}
    >
      <div className="mx-auto grid min-h-[80vh] max-w-full grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[48%_52%] lg:grid-rows-1">
        {/* ---------------------------------------------------------------- */}
        {/* Hero Copy                                                        */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-20 flex items-center px-5 pb-40 pt-12 sm:px-8 lg:px-12 lg:py-12 xl:px-16"
        >
          <div className="w-full">
            {/* Badge */}

            {badge && (
              <motion.div variants={itemVariants}>
                <span className="mb-4 inline-flex rounded-full bg-[#eaf5ff] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.05em] text-[#1476e5]">
                  {badge}
                </span>
              </motion.div>
            )}

            {/* Headline */}

            <motion.h1
              variants={itemVariants}
              className="max-w-[650px] text-5xl font-extrabold leading-[0.99] tracking-[-0.045em] text-[#071744] sm:text-[50px] lg:text-[47px] xl:text-[46px]"
            >
              {title}

              {highlightedTitle && (
                <>
                  <br />

                  <span className="text-[#0876ed]">
                    {highlightedTitle}
                  </span>
                </>
              )}
            </motion.h1>

            {/* Description */}

            {description && (
              <motion.p
                variants={itemVariants}
                className="mt-5 max-w-[570px] whitespace-pre-line text-sm leading-[1.5] text-[#26395f] sm:text-base"
              >
                {description}
              </motion.p>
            )}

            {/* Tags */}

            {tags.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 overflow-visible lg:flex-nowrap"
              >
                {tags.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-bold text-[#142652]"
                    >
                      <Icon
                        size={17}
                        strokeWidth={2.2}
                        className="shrink-0 text-[#0876ed]"
                      />

                      {item.text}
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* CTAs */}

            {ctas.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                {ctas.map((cta) => {
                  const Icon = cta.icon;

                  const isPrimary = cta.variant !== "secondary";

                  return (
                    <a
                      key={`${cta.label}-${cta.href}`}
                      href={cta.href}
                      className={
                        isPrimary
                          ? "inline-flex items-center justify-center gap-2 rounded-md bg-[#0876ed] px-7 py-3.5 text-base font-bold text-white shadow-[0_8px_20px_rgba(8,118,237,.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0668d5] hover:shadow-[0_12px_28px_rgba(8,118,237,.25)] active:translate-y-0"
                          : "inline-flex items-center justify-center gap-2 rounded-md border border-[#0876ed] bg-white px-7 py-3.5 text-base font-bold text-[#0876ed] transition-colors duration-200 hover:bg-[#eff7ff]"
                      }
                    >
                      {cta.label}

                      {Icon && (
                        <Icon
                          size={15}
                          strokeWidth={2.5}
                        />
                      )}
                    </a>
                  );
                })}
              </motion.div>
            )}

            {/* Bottom Tagline */}

            {bottomTagline && (
              <motion.h3
                variants={itemVariants}
                className="flex items-start gap-2 pt-8 text-sm font-semibold text-[#142652]"
              >
                <BottomTaglineIcon
                  size={20}
                  strokeWidth={2.2}
                  className="mt-0.5 shrink-0 text-[#0876ed]"
                />

                <span>{bottomTagline}</span>
              </motion.h3>
            )}
          </div>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* Hero Image                                                       */}
        {/* ---------------------------------------------------------------- */}

        <div className="absolute inset-0 overflow-hidden lg:relative lg:h-full lg:min-h-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={image.priority ?? true}
            sizes={image.sizes ?? "(max-width: 1024px) 100vw, 52vw"}
            className="object-cover"
          />

          {/* Mobile Overlay */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f4faff] via-[#f4faff]/90 to-[#f4faff]/25 lg:hidden" />

          {/* Desktop Overlay */}

          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#f4faff] via-[#f4faff]/40 to-transparent lg:block lg:w-[40%]" />

          {/* ---------------------------------------------------------------- */}
          {/* Quote Card                                                       */}
          {/* ---------------------------------------------------------------- */}

          {/* {quote && quote.lines.length > 0 && (
            <div className="absolute bottom-24 left-4 rounded-lg bg-white/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:px-5 sm:py-4 lg:bottom-8 lg:left-8">
              {quote.lines.map((line, index) => (
                <div
                  key={`${line}-${index}`}
                  className="font-serif text-sm italic text-[#142652] sm:text-base"
                >
                  {line}
                </div>
              ))}
            </div>
          )} */}

          {/* ---------------------------------------------------------------- */}
          {/* Stats Card                                                       */}
          {/* ---------------------------------------------------------------- */}

          {/* {stats && (
            <div className="absolute bottom-4 right-4 rounded-xl border border-white/60 bg-white px-4 py-3 shadow-2xl backdrop-blur-sm sm:bottom-8 sm:right-8 sm:px-5 sm:py-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-2xl font-extrabold tracking-tight text-[#071744] sm:text-[30px]">
                  {stats.value}
                </span>

                <span className="text-xs font-bold leading-tight text-[#142652] sm:text-sm">
                  {stats.label}

                  {stats.location && (
                    <>
                      <br />

                      <span className="font-medium text-slate-500">
                        {stats.location}
                      </span>
                    </>
                  )}
                </span>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}