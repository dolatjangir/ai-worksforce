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

/* ---------------------------------------------
   Props
--------------------------------------------- */

export type WorkforceHeroProps = {
  /**
   * Responsive hero background images.
   *
   * Laptop:
   * lg → < xl
   *
   * Desktop:
   * xl → < 2xl
   *
   * Ultrawide:
   * 2xl and above
   */
  backgroundImages: {
    laptop: string;
    desktop: string;
    ultrawide: string;
    digitalBoard: string;
  };

  /**
   * Alt text for the hero background.
   */
  backgroundAlt?: string;

  /**
   * Controls the focal point of all background images.
   */
  backgroundPosition?: CSSProperties["objectPosition"];

  /**
   * Controls how the images fit inside the hero.
   */
  backgroundFit?: "contain" | "cover";

  /**
   * Primary button URL.
   */
  primaryHref: string;

  /**
   * Secondary button URL.
   */
  demoHref: string;

  /**
   * Optional handwritten font.
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
   Benefits Data
--------------------------------------------- */

const benefits: Array<{
  icon: IconName;
  title: string;
  description: string;
}> = [
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
  backgroundImages,
  backgroundAlt = "",
  backgroundPosition = "right bottom",
  backgroundFit = "cover",
  primaryHref,
  demoHref,
  handwrittenFont = '"Caveat", "Segoe Script", cursive',
}: WorkforceHeroProps) {
  return (
    <section
      aria-label="Build your AI workforce"
      className="relative isolate w-full min-w-0 overflow-x-clip bg-white font-sans text-[#05072d]"
    >
      {/* ---------------------------------------------
          Hero Section
      --------------------------------------------- */}

      <div className="relative isolate flex w-full items-center overflow-hidden bg-[#edf5ff] lg:min-h-[100dvh]">
        {/* ---------------------------------------------
            Responsive Background Images

            lg       → Laptop
            xl       → Desktop
            2xl      → Ultrawide
            2560px+ → Digital Board
        --------------------------------------------- */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block"
        >
          {/* Laptop */}
          <div className="absolute inset-0 block xl:hidden">
            <Image
              src={backgroundImages.laptop}
              alt=""
              fill
              sizes="100vw"
              priority
              className="select-none"
              draggable={false}
              style={{
                objectFit: backgroundFit,
                objectPosition: backgroundPosition,
              }}
            />
          </div>

          {/* Desktop */}
          <div className="absolute inset-0 hidden xl:block 2xl:hidden">
            <Image
              src={backgroundImages.desktop}
              alt=""
              fill
              sizes="100vw"
              priority
              className="select-none"
              draggable={false}
              style={{
                objectFit: backgroundFit,
                objectPosition: backgroundPosition,
              }}
            />
          </div>

          {/* Ultrawide */}
          <div className="absolute inset-0 hidden 2xl:block">
            <Image
              src={backgroundImages.ultrawide}
              alt=""
              fill
              sizes="100vw"
              priority
              className="select-none"
              draggable={false}
              style={{
                objectFit: backgroundFit,
                objectPosition: backgroundPosition,
              }}
            />
          </div>
          {/* Digital Board / 4K */} 
          <div className="absolute inset-0 hidden min-[2560px]:block">
             <Image 
             src={backgroundImages.digitalBoard} 
             alt="" 
             fill 
             sizes="100vw" 
             priority 
             className="select-none" 
             draggable={false} 
             style={{ 
              objectFit: backgroundFit, 
              objectPosition: backgroundPosition,
               }} 
               />
           </div>
        </div>

        {/* ---------------------------------------------
            Content Container
        --------------------------------------------- */}

        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[1600px] items-center px-5 sm:px-8 md:px-10 lg:px-[clamp(32px,4.5vw,72px)]">
          <div className="flex w-full min-w-0 flex-col justify-center py-8 sm:py-10 lg:w-[52%] lg:py-8 xl:w-[48%]">
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

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0759ff]">
                Boost Your Business with AWFI <span className="font-extrabold text-md bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Expert
</span>
              </p>

              {/* ---------------------------------------------
                  Heading
              --------------------------------------------- */}

              <h1 className="mt-4 pb-2 text-[clamp(2.25rem,6vw,3rem)] font-extrabold leading-[1.2] tracking-[-0.045em] lg:text-[clamp(2.5rem,3.2vw,3rem)]">
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

              <p className="mt-2 max-w-[38rem] text-base leading-[1.5] text-[#07184f]">
                We analyze your business and processes, identify the right
                data sources, AI tools, AI agents, and automation. And then
                build and manage a complete AI workforce for your business -
                powered by AWFI Engine™.
              </p>

              {/* ---------------------------------------------
                  Key Advantages
              --------------------------------------------- */}

              <ul
                aria-label="Key advantages"
                className="mt-4 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-3 sm:gap-3"
              >
                {[
                  {
                    icon: "database" as IconName,
                    line1: "Lower",
                    line2: "Operating Cost",
                  },
                  {
                    icon: "bolt" as IconName,
                    line1: "Higher",
                    line2: "Productivity",
                  },
                  {
                    icon: "chart" as IconName,
                    line1: "Real",
                    line2: "Business Growth",
                  },
                ].map((item, index) => (
                  <li
                    key={`${item.line1}-${item.line2}`}
                    className={`flex min-w-0 items-center gap-3 ${
                      index > 0
                        ? "sm:border-l sm:border-[#0759ff]/20 sm:pl-3"
                        : ""
                    }`}
                  >
                    <Icon
                      name={item.icon}
                      className="size-7 text-[#0764ff]"
                    />

                    <p className="text-base font-medium leading-snug">
                      <span className="block">{item.line1}</span>
                      {item.line2}
                    </p>
                  </li>
                ))}
              </ul>

              {/* ---------------------------------------------
                  CTA Buttons
              --------------------------------------------- */}

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-6">
                {/* Primary CTA */}

                <a
                  href={primaryHref}
                  className={`${focus} inline-flex min-h-14 w-full max-w-full items-center justify-center gap-3 rounded-xl bg-[#0759ff] px-5 py-4 text-center text-lg font-semibold text-white shadow-[0_8px_24px_rgba(7,89,255,0.12)] transition-colors hover:bg-[#0649d5] motion-reduce:transition-none sm:w-auto xl:px-6`}
                >
                  Get Your AI Assessment

                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 shrink-0"
                    strokeWidth={2}
                  />
                </a>

                {/* Secondary CTA */}

                <a
                  href={demoHref}
                  className={`${focus} inline-flex min-h-14 w-full max-w-full items-center justify-center gap-3 rounded-xl border border-[#0759ff]/25 bg-white/65 px-5 py-4 text-center text-lg font-semibold text-[#071c75] transition-colors hover:bg-white motion-reduce:transition-none sm:w-auto`}
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
              className="ml-2 mt-8 w-fit max-w-full -rotate-8 pb-2 text-center text-[#08134e] lg:mt-6"
              style={{
                fontFamily: handwrittenFont,
              }}
            >
              <p className="text-3xl leading-[1.1]">
                Humans with AI
                <br />
                Go Further
              </p>

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

      <div className="flex w-full items-center border-t border-[#0759ff]/5 bg-linear-to-b from-white to-[#f5faff]">
        <ul className="mx-auto grid w-full max-w-[1600px] list-none grid-cols-1 items-center gap-y-7 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-0 lg:px-[clamp(32px,4.5vw,72px)]">
          {benefits.map((item, index) => (
            <li
              key={item.title}
              className={`flex min-w-0 items-center gap-4 py-2 ${
                index > 0
                  ? "lg:border-l lg:border-[#0759ff]/20 lg:pl-5"
                  : ""
              } ${index < 3 ? "lg:pr-4" : ""}`}
            >
              <Icon
                name={item.icon}
                className="size-10 text-[#0764ff]"
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