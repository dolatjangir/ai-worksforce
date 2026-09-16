"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

import {
  ArrowRight,
  BarChart3,
  Database,
  IndianRupee,
  Play,
  Users,
  Zap,
} from "lucide-react";

export type WorkforceHeroProps = {
  /**
   * Clean background artwork:
   * Office, people/robot and right-hand AI WorksForce graphic.
   *
   * Do not use the full page screenshot.
   * Otherwise, left-side text will appear twice.
   */
  backgroundImage: string;

  backgroundAlt?: string;

  /**
   * Adjust image focal point without changing layout.
   */
  backgroundPosition?: CSSProperties["objectPosition"];

  /** Use contain for the complete artwork, or cover for edge-to-edge cropping. */
  backgroundFit?: "contain" | "cover";

  primaryHref: string;

  demoHref: string;

  /**
   * Optional handwritten font.
   * Example: "Caveat", "Segoe Script", cursive
   */
  handwrittenFont?: string;
};

/* ---------------------------------------------
   Icon Components
--------------------------------------------- */

type IconName =
  | "database"
  | "bolt"
  | "chart"
  | "people"
  | "rupee";

const iconMap = {
  database: Database,
  bolt: Zap,
  chart: BarChart3,
  people: Users,
  rupee: IndianRupee,
} as const;

function Icon({
  name,
  className = "size-10",
}: {
  name: IconName;
  className?: string;
}) {
  const LucideIcon = iconMap[name];

  return (
    <LucideIcon
      aria-hidden="true"
      className={`shrink-0 ${className}`}
      strokeWidth={2}
    />
  );
}

/* ---------------------------------------------
   Data
--------------------------------------------- */

const benefits: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "people",
    title: "AI + Human Teams",
    description: "Best of both worlds",
  },
  {
    icon: "bolt",
    title: "Faster Execution",
    description: "From idea to results",
  },
  {
    icon: "rupee",
    title: "Lower Operational Cost",
    description: "Without compromising quality",
  },
  {
    icon: "chart",
    title: "Scalable Growth",
    description: "For any business size",
  },
];

/* ---------------------------------------------
   Focus Styles
--------------------------------------------- */

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0759ff]";

/* ---------------------------------------------
   Workforce Hero
--------------------------------------------- */

export default function WorkforceHero({
  backgroundImage,
  backgroundAlt = "",
  backgroundPosition = "center right",
  backgroundFit = "contain",
  primaryHref,
  demoHref,
  handwrittenFont = '"Caveat", "Segoe Script", cursive',
}: WorkforceHeroProps) {
  return (
    <section
      aria-label="Build your AI workforce"
      className="isolate overflow-x-clip bg-white font-sans text-[#05072d]"
    >
      {/* ---------------------------------------------
          Hero Section
      --------------------------------------------- */}

      <div className="relative isolate grid min-h-[90vh] supports-[height:90dvh]:min-h-[90dvh] bg-[#edf5ff]">

        {/* Background Image */}

        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className="select-none"
            style={{
              objectPosition: backgroundPosition,
              objectFit: backgroundFit,
            }}
          />
        </div>

        {/* The grid stretches to 90dvh and grows only when content needs more room. */}

        <div className="mx-auto flex min-w-0 w-full max-w-[1600px] items-center px-5 sm:px-8 md:px-10 lg:px-[4.5%]">

          <div className="flex min-w-0 w-full flex-col justify-center py-8 sm:py-10 lg:w-[45%]">

            <div className="relative isolate">

              {/* ---------------------------------------------
                  Background Shade
              --------------------------------------------- */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 -left-[50vw] right-[-15%] bottom-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.96)_70%,rgba(255,255,255,0.72)_85%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_0%,black_65%,rgba(0,0,0,0.85)_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_65%,rgba(0,0,0,0.85)_82%,transparent_100%)]"
              />

              {/* ---------------------------------------------
                  Eyebrow
              --------------------------------------------- */}

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0759ff] ">
             Boost Your Business with AI
              </p>

              {/* ---------------------------------------------
                  Heading
              --------------------------------------------- */}

              <h1 className="mt-4 text-5xl font-extrabold  leading-[1.02] tracking-[-0.045em] [overflow-wrap:anywhere]">

                <span className="block">
                  Build Your AI Workforce
                </span>

                <span className="block bg-linear-to-r from-[#065bff] via-[#6640ff] to-[#8200ea] bg-clip-text text-transparent">
                  Without Building an AI Team
                </span>

              </h1>

              {/* ---------------------------------------------
                  Description
              --------------------------------------------- */}

              <p className="mt-4 max-w-[38rem] text-md leading-[1.5] text-[#07184f] ">
                we analyze your business and processes, identify the right data sources, AI tools, and AI agents, and automation,and then build and manage a complete AI workforce for you business- Powered by AWFI EngineTM.

              </p>

              {/* ---------------------------------------------
                  Key Advantages
              --------------------------------------------- */}

              <ul
                aria-label="Key advantages"
                className="mt-4 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-3 sm:gap-3 "
              >

                {[
                  {
                    icon: "database",
                    line1: "Lower",
                    line2: "Operating Cost",
                  },
                  {
                    icon: "bolt",
                    line1: "Higher",
                    line2: "Productivity",
                  },
                  {
                    icon: "chart",
                    line1: "Real",
                    line2: "Business Growth",
                  },
                ].map((item, index) => (

                  <li
                    key={item.line1}
                    className={`flex min-w-0 items-center gap-3 ${
                      index
                        ? "sm:border-l sm:border-[#0759ff]/20 sm:pl-3"
                        : ""
                    }`}
                  >

                    <Icon
                      name={item.icon as IconName}
                      className="size-7 text-[#0764ff] "
                    />

                    <p className="text-base font-medium leading-snug ">
                      <span className="block">
                        {item.line1}
                      </span>

                      {item.line2}
                    </p>

                  </li>

                ))}

              </ul>

              {/* ---------------------------------------------
                  CTA Buttons
              --------------------------------------------- */}

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:mt-6">

                {/* Primary CTA */}

                <a
                  href={primaryHref}
                  className={`${focus} inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#0759ff] px-6 py-4 text-lg font-semibold text-white sm:px-7 xl:px-8  shadow-[0_8px_24px_rgba(7,89,255,0.12)] transition-colors hover:bg-[#0649d5] sm:w-auto`}
                >

                 Get Your Ai Assessment

                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 shrink-0"
                    strokeWidth={2}
                  />

                </a>

                {/* Secondary CTA */}

                <a
                  href={demoHref}
                  className={`${focus} inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-[#0759ff]/25 bg-white/65 px-5 py-4 text-lg font-semibold text-[#071c75] transition-colors hover:bg-white sm:w-auto `}
                >

                  <span className="grid size-6 shrink-0 place-items-center rounded-full border-2 border-[#0759ff] text-[#0759ff]">

                    <Play
                      aria-hidden="true"
                      className="ml-0.5 size-4 fill-current"
                      strokeWidth={2}
                    />

                  </span>

                  See How It Works

                </a>

              </div>

            </div>

            {/* ---------------------------------------------
                Handwritten Note
            --------------------------------------------- */}

            <div
              className="mt-8 w-fit -rotate-8 pb-2 text-center text-[#08134e] lg:mt-6"
              style={{
                fontFamily: handwrittenFont,
              }}
            >

              <p className="text-3xl leading-[1.1]">
                Humans with AI
                <br />
                Go Further
              </p>

              {/* CSS Underline — No SVG */}

              <div
                aria-hidden="true"
                className="relative ml-7 mt-1 h-3 w-40"
              >
                <span className="absolute left-0 top-1/2 block h-[3px] w-full -rotate-3 rounded-full bg-[#0759ff]" />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ---------------------------------------------
          Benefits Section
      --------------------------------------------- */}

      <div className="border-t border-[#0759ff]/5 bg-linear-to-b from-white to-[#f5faff]">

        <ul className="mx-auto grid max-w-[1600px] list-none grid-cols-1 gap-y-7 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-0 lg:px-[4.5%]">

          {benefits.map((item, index) => (

            <li
              key={item.title}
              className={`flex min-w-0 items-center gap-4 py-2 ${
                index
                  ? "lg:border-l lg:border-[#0759ff]/20 lg:pl-5"
                  : ""
              } ${
                index < 3
                  ? "lg:pr-4"
                  : ""
              }`}
            >

              <Icon
                name={item.icon}
                className="size-10 text-[#0764ff] "
              />

              <div className="min-w-0">

                <h2 className="text-lg font-bold leading-snug tracking-tight">
                  {item.title}
                </h2>

                <p className="mt-1 text-base leading-relaxed text-[#07184f]">
                  {item.description}
                </p>

              </div>

            </li>

          ))}

        </ul>

      </div>

    </section>
  );
}



// // app/components/sections/HeroSection.tsx
// "use client";

// import { motion, useReducedMotion, type Variants } from "framer-motion";
// import Image from "next/image";
// import type { LucideIcon } from "lucide-react";
// import {
//   Users,
//   Bot,
//   Settings,
//   Target,
//   ArrowRight,
//   LocateFixed,
// } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /* Types                                                                      */
// /* -------------------------------------------------------------------------- */

// export type HeroTag = {
//   icon: LucideIcon;
//   text: string;
// };

// export type HeroCTA = {
//   label: string;
//   href: string;
//   variant?: "primary" | "secondary";
//   icon?: LucideIcon;
// };

// export type HeroSectionProps = {
//   badge?: string;

//   title?: string;

//   highlightedTitle?: string;

//   description?: string;

//   tags?: HeroTag[];

//   ctas?: HeroCTA[];

//   bottomTagline?: string;

//   bottomTaglineIcon?: LucideIcon;

//   image: {
//     src: string;
//     alt: string;
//     priority?: boolean;
//     sizes?: string;
//   };

//   quote?: {
//     lines: string[];
//   };

//   stats?: {
//     value: string;
//     label: string;
//     location?: string;
//   };

//   className?: string;
// };

// /* -------------------------------------------------------------------------- */
// /* Default Data                                                               */
// /* -------------------------------------------------------------------------- */

// export const defaultHeroTags: HeroTag[] = [
//   { icon: Users, text: "AI Strategy" },
//   { icon: Bot, text: "AI Tools" },
//   { icon: Settings, text: "AI Agents" },
//   { icon: Target, text: "Expert Workforce" },
// ];

// export const defaultHeroCTAs: HeroCTA[] = [
//   {
//     label: "Get Your AI Assessment",
//     href: "#contact",
//     variant: "primary",
//     icon: ArrowRight,
//   },
//   {
//     label: "Talk to an AI Expert",
//     href: "#contact",
//     variant: "secondary",
//   },
// ];

// /* -------------------------------------------------------------------------- */
// /* Animations                                                                 */
// /* -------------------------------------------------------------------------- */

// const containerVariants: Variants = {
//   hidden: {
//     opacity: 0,
//   },

//   visible: {
//     opacity: 1,

//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 16,
//   },

//   visible: {
//     opacity: 1,
//     y: 0,

//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// /* -------------------------------------------------------------------------- */
// /* Component                                                                  */
// /* -------------------------------------------------------------------------- */

// export default function HeroSection({
//   badge = "Your Outsource AI Department",

//   title = "Build Your AI Workforce",

//   highlightedTitle = "Without Building an AI Team.",

//   description = `We analyze your business and processes, identify the right data,
// AI tools, and AI agents, and then build and manage a complete
// AI-powered workforce for you from our India delivery center.`,

//   tags = defaultHeroTags,

//   ctas = defaultHeroCTAs,

//   bottomTagline = `From business analysis to daily operations — AIWorkForce
// manages it for you.`,

//   bottomTaglineIcon: BottomTaglineIcon = LocateFixed,

//   image,

//   quote = {
//     lines: ["Your extended", "team in India."],
//   },

//   stats = {
//     value: "150+",
//     label: "Delivery Seats",
//     location: "Jaipur, India",
//   },

//   className = "",
// }: HeroSectionProps) {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section
//       className={`relative isolate  overflow-x-clip bg-[#f4faff] ${className}`}
//     >
//       <div className="mx-auto grid w-full grid-cols-1 min-h-[80dvh] lg:grid-cols-[48%_52%]">
//         {/* ---------------------------------------------------------------- */}
//         {/* Hero Copy                                                        */}
//         {/* ---------------------------------------------------------------- */}

//         <motion.div
//           initial={false}
//           animate="visible"
//           variants={reduceMotion ? undefined : containerVariants}
//           className="relative z-20 flex min-w-0 items-center px-5 pb-32 pt-12 sm:px-8 sm:pb-40 sm:pt-14 lg:px-8 lg:py-4 xl:px-12 xl:py-1 2xl:pl-[max(4rem,calc((100vw-1600px)/2))] 2xl:pr-16"
//         >
//           <div className="w-full min-w-0">
//             {/* Badge */}

//             {badge && (
//               <motion.div variants={reduceMotion ? undefined : itemVariants}>
//                 <span className="mb-4 inline-flex max-w-full rounded-full bg-[#eaf5ff] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.05em] text-[#1476e5]">
//                   {badge}
//                 </span>
//               </motion.div>
//             )}

//             {/* Headline */}

//             <motion.h1
//               variants={reduceMotion ? undefined : itemVariants}
//               className="max-w-[650px] text-[clamp(2.125rem,6.5vw,3.125rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#071744] [overflow-wrap:anywhere] lg:text-[clamp(2.375rem,3.5vw,3.5rem)]"
//             >
//               {title}

//               {highlightedTitle && (
//                 <>
//                   <br />

//                   <span className="text-[#0876ed]">
//                     {highlightedTitle}
//                   </span>
//                 </>
//               )}
//             </motion.h1>

//             {/* Description */}

//             {description && (
//               <motion.p
//                 variants={reduceMotion ? undefined : itemVariants}
//                 className="mt-5 max-w-[570px] text-sm leading-[1.75] text-[#26395f] [overflow-wrap:anywhere] sm:text-base"
//               >
//                 {description}
//               </motion.p>
//             )}

//             {/* Tags */}

//             {tags.length > 0 && (
//               <motion.div
//                 variants={reduceMotion ? undefined : itemVariants}
//                 className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"
//               >
//                 {tags.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={item.text}
//                       className="flex max-w-full items-center gap-2 text-sm font-bold [overflow-wrap:anywhere] text-[#142652]"
//                     >
//                       <Icon
//                         aria-hidden="true"
//                         size={17}
//                         strokeWidth={2.2}
//                         className="shrink-0 text-[#0876ed]"
//                       />

//                       {item.text}
//                     </div>
//                   );
//                 })}
//               </motion.div>
//             )}

//             {/* CTAs */}

//             {ctas.length > 0 && (
//               <motion.div
//                 variants={reduceMotion ? undefined : itemVariants}
//                 className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
//               >
//                 {ctas.map((cta) => {
//                   const Icon = cta.icon;

//                   const isPrimary = cta.variant !== "secondary";

//                   return (
//                     <a
//                       key={`${cta.label}-${cta.href}`}
//                       href={cta.href}
//                       className={
//                         isPrimary
//                           ? "inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-md text-center [overflow-wrap:anywhere] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#071744] motion-reduce:transform-none motion-reduce:transition-none bg-[#0876ed] px-5 py-3.5 xl:px-7 text-base font-bold text-white shadow-[0_8px_20px_rgba(8,118,237,.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0668d5] hover:shadow-[0_12px_28px_rgba(8,118,237,.25)] active:translate-y-0"
//                           : "inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-md text-center [overflow-wrap:anywhere] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#071744] motion-reduce:transform-none motion-reduce:transition-none border border-[#0876ed] bg-white px-5 py-3.5 xl:px-7 text-base font-bold text-[#0876ed] transition-colors duration-200 hover:bg-[#eff7ff]"
//                       }
//                     >
//                       {cta.label}

//                       {Icon && (
//                         <Icon
//                         aria-hidden="true"
//                           size={15}
//                           strokeWidth={2.5}
//                         />
//                       )}
//                     </a>
//                   );
//                 })}
//               </motion.div>
//             )}

//             {/* Bottom Tagline */}

//             {bottomTagline && (
//               <motion.p
//                 variants={reduceMotion ? undefined : itemVariants}
//                 className="flex items-start gap-2 pt-2 text-sm font-semibold text-[#142652]"
//               >
//                 <BottomTaglineIcon
//                   aria-hidden="true"
//                   size={20}
//                   strokeWidth={2.2}
//                   className="mt-0.5 shrink-0 text-[#0876ed]"
//                 />

//                 <span>{bottomTagline}</span>
//               </motion.p>
//             )}
//           </div>
//         </motion.div>

//         {/* ---------------------------------------------------------------- */}
//         {/* Hero Image                                                       */}
//         {/* ---------------------------------------------------------------- */}

//         <div className="absolute inset-0 z-0 overflow-hidden lg:relative lg:h-full lg:min-h-0 lg:min-w-0">
//           <Image
//             src={image.src}
//             alt={image.alt}
//             fill
//             priority={image.priority ?? true}
//             sizes={image.sizes ?? "(min-width: 1024px) 52vw, 100vw"}
//             className="object-cover object-center"
//           />

//           {/* Mobile Overlay */}

//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f4faff] via-[#f4faff]/90 to-[#f4faff]/25 lg:hidden" />

//           {/* Desktop Overlay */}

//           <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#f4faff] via-[#f4faff]/40 to-transparent lg:block lg:w-[40%]" />

//           {/* ---------------------------------------------------------------- */}
//           {/* Quote Card                                                       */}
//           {/* ---------------------------------------------------------------- */}

//           {/* {quote && quote.lines.length > 0 && (
//             <div className="absolute bottom-24 left-4 rounded-lg bg-white/90 px-4 py-3 shadow-xl backdrop-blur-sm sm:px-5 sm:py-4 lg:bottom-8 lg:left-8">
//               {quote.lines.map((line, index) => (
//                 <div
//                   key={`${line}-${index}`}
//                   className="font-serif text-sm italic text-[#142652] sm:text-base"
//                 >
//                   {line}
//                 </div>
//               ))}
//             </div>
//           )} */}

//           {/* ---------------------------------------------------------------- */}
//           {/* Stats Card                                                       */}
//           {/* ---------------------------------------------------------------- */}

//           {/* {stats && (
//             <div className="absolute bottom-4 right-4 rounded-xl border border-white/60 bg-white px-4 py-3 shadow-2xl backdrop-blur-sm sm:bottom-8 sm:right-8 sm:px-5 sm:py-4">
//               <div className="flex items-center gap-2 sm:gap-3">
//                 <span className="text-2xl font-extrabold tracking-tight text-[#071744] sm:text-[30px]">
//                   {stats.value}
//                 </span>

//                 <span className="text-xs font-bold leading-tight text-[#142652] sm:text-sm">
//                   {stats.label}

//                   {stats.location && (
//                     <>
//                       <br />

//                       <span className="font-medium text-slate-500">
//                         {stats.location}
//                       </span>
//                     </>
//                   )}
//                 </span>
//               </div>
//             </div>
//           )} */}
//         </div>
//       </div>
//     </section>
//   );
// }