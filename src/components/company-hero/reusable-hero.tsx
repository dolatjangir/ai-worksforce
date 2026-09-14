"use client";

import type { ReactNode } from "react";

/* =========================================================
   TYPES
========================================================= */

export type IconName =
  | "users"
  | "settings"
  | "chart"
  | "globe"
  | "target"
  | "eye"
  | "diamond"
  | "rocket"
  | "lightbulb"
  | "heart"
  | "star"
  | "arrow"
  | "play"
  | "menu"
  | "close"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram"
  | "check"
  | "clock"
  | "shield";

/* =========================================================
   ICON SYSTEM
   Self-contained SVG icons so no icon dependency is required.
========================================================= */

export function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const icons: Record<IconName, ReactNode> = {
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M15 15a5 5 0 0 1 6 5" />
      </>
    ),

    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.06.06-1.82 1.82-.06-.06a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.1 1.65V22h-2.58v-.09a1.8 1.8 0 0 0-1.1-1.65 1.8 1.8 0 0 0-1.98.36l-.06.06-1.82-1.82.06-.06A1.8 1.8 0 0 0 7.76 17a1.8 1.8 0 0 0-1.65-1.1H6V13.3h.11a1.8 1.8 0 0 0 1.65-1.1 1.8 1.8 0 0 0-.36-1.98l-.06-.06 1.82-1.82.06.06a1.8 1.8 0 0 0 1.98.36 1.8 1.8 0 0 0 1.1-1.65V6h2.58v.11a1.8 1.8 0 0 0 1.1 1.65 1.8 1.8 0 0 0 1.98-.36l.06-.06 1.82 1.82-.06.06A1.8 1.8 0 0 0 19.4 11c.25.67.9 1.1 1.61 1.1h.1v2.6h-.1c-.71 0-1.36.43-1.61 1.1Z" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V12" />
        <path d="M10 20V8" />
        <path d="M16 20V4" />
        <path d="M22 20H2" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </>
    ),

    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="m16.5 7.5 4-4" />
        <path d="M17 3.5h3.5V7" />
      </>
    ),

    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),

    diamond: (
      <>
        <path d="m12 3 7 4-7 14L5 7l7-4Z" />
        <path d="M5 7h14" />
        <path d="m8.5 5 3.5 2 3.5-2" />
      </>
    ),

    rocket: (
      <>
        <path d="M14 4c2.8-1.8 5.1-2.1 6-2 .1.9-.2 3.2-2 6-1.4 2.1-3.4 4-5.6 5.4l-2.8-2.8C11 8.4 12 5.4 14 4Z" />
        <path d="m9.6 10.6-3.4.8-2.5 2.5 4.2.8.8 4.2 2.5-2.5.8-3.4" />
        <circle cx="16.5" cy="6.5" r="1.2" />
        <path d="M7 17c-1.3.3-2.5 1-3.2 2.3" />
      </>
    ),

    lightbulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14.5a7 7 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
      </>
    ),

    heart: (
      <path d="M20.8 8.9c0 5.5-8.8 10.1-8.8 10.1S3.2 14.4 3.2 8.9A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.6Z" />
    ),

    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),

    arrow: (
      <>
        <path d="M4 12h16" />
        <path d="m13 5 7 7-7 7" />
      </>
    ),

    play: (
      <path
        d="m9 6 9 6-9 6V6Z"
        fill="currentColor"
        stroke="none"
      />
    ),

    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),

    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),

    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 10v6M8 8v.1M12 16v-6M12 13c0-2 4-2 4 0v3" />
      </>
    ),

    twitter: (
      <path d="M21 6.5c-.7.3-1.4.5-2.2.6A3.7 3.7 0 0 0 20.4 5c-.7.4-1.5.7-2.4.9A3.7 3.7 0 0 0 11.7 9c0 .3 0 .6.1.9A10.5 10.5 0 0 1 4 5.3a3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5v.1a3.7 3.7 0 0 0 3 3.6c-.6.2-1.2.2-1.7.1a3.7 3.7 0 0 0 3.5 2.6A7.4 7.4 0 0 1 3.6 18a10.5 10.5 0 0 0 5.7 1.7c6.9 0 10.7-5.7 10.7-10.7v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
    ),

    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path
          d="m10 9 5 3-5 3V9Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle
          cx="17"
          cy="7"
          r=".8"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    check: (
      <path
        d="m7 12 3 3 7-7"
        strokeWidth="2.5"
      />
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    shield: (
      <path d="M12 3 20 6v5c0 5.2-3.4 8.8-8 10-4.6-1.2-8-4.8-8-10V6l8-3Z" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

/* =========================================================
   SMALL ICON CIRCLE
========================================================= */

export function IconCircle({
  icon,
  className = "bg-indigo-100 text-brand-blue",
  size = "normal",
}: {
  icon: IconName;
  className?: string;
  size?: "normal" | "large";
}) {
  return (
    <span
      className={[
        "inline-flex shrink-0 items-center justify-center rounded-full",
        size === "large"
          ? "size-12 sm:size-14"
          : "size-10 sm:size-12",
        className,
      ].join(" ")}
    >
      <Icon
        name={icon}
        className={
          size === "large"
            ? "size-6 sm:size-7"
            : "size-5 sm:size-6"
        }
      />
    </span>
  );
}

/* =========================================================
   REUSABLE PAGE HERO
========================================================= */

export type HeroStat = {
  icon: IconName;
  value: string;
  label: string;
};

export type HeroAction = {
  label: string;
  href: string;
  icon?: IconName;
};

export type HeroResultCard = {
  icon: IconName;
  lines: string[];
};

export type PageHeroProps = {
  titleId: string;
  eyebrow: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  image: string;
  imageAlt?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  stats?: HeroStat[];
  resultCard?: HeroResultCard;
};

export default function PageHero({
  titleId,
  eyebrow,
  title,
  highlightedTitle,
  description,
  image,
  imageAlt = "",
  primaryAction,
  secondaryAction,
  stats = [],
  resultCard,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby={titleId}
      className="relative isolate min-h-[80dvh] overflow-hidden rounded-2xl bg-white"
    >
      {/* Right-side hero image */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full lg:w-[65%]">
        <img
          src={image}
          alt={imageAlt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-right"
        />

        {/* Blend the image into the white content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 lg:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.95)_10%,rgba(255,255,255,0.45)_28%,transparent_48%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-white/95 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[80dvh] w-full max-w-[1440px] flex-col px-5 py-6 sm:px-8 lg:px-[5.3%] lg:py-7">
        {/* Hero copy */}
        <div className="relative w-full pt-8 lg:max-w-[49%] lg:pt-[7vh]">
          <p className="text-[9px] font-bold uppercase leading-relaxed tracking-[0.16em] text-[#1600ff] sm:text-xs">
            {eyebrow}
          </p>

          <h1
            id={titleId}
            className="mt-4 text-[clamp(2rem,5.8vw,5.25rem)] font-bold leading-[0.99] tracking-[-0.045em] text-[#080044]"
          >
            {title}

            {highlightedTitle && (
              <span className="block text-[#1600ff]">
                {highlightedTitle}
              </span>
            )}
          </h1>

          <p className="mt-3 max-w-[470px] text-base leading-[1.25] tracking-[-0.012em] text-[#37308b] sm:text-lg">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-5">
              {primaryAction && (
                <a
                  href={primaryAction.href}
                  className="inline-flex min-h-11 min-w-[158px] items-center justify-center gap-2 rounded-md border border-[#4936ff] bg-[#1600ff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_3px_0_rgba(22,0,255,0.12)] transition-colors hover:bg-[#1000d9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1600ff]"
                >
                  {primaryAction.label}

                  <span aria-hidden="true">
                    <Icon
                      name={primaryAction.icon ?? "arrow"}
                      className="size-4"
                    />
                  </span>
                </a>
              )}

              {secondaryAction && (
                <a
                  href={secondaryAction.href}
                  className="inline-flex min-h-11 min-w-[176px] items-center justify-center gap-3 rounded-md border border-[#a395ff] bg-white/80 px-4 py-2.5 text-sm font-bold text-[#080044] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1600ff]"
                >
                  {secondaryAction.icon && (
                    <span
                      aria-hidden="true"
                      className="grid size-[20px] shrink-0 place-items-center rounded-full bg-[#eae7ff] text-[#1600ff]"
                    >
                      <Icon
                        name={secondaryAction.icon}
                        className="size-4"
                      />
                    </span>
                  )}

                  {secondaryAction.label}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Bottom statistics and result card */}
        {(stats.length > 0 || resultCard) && (
          <div className="relative mt-auto flex flex-col gap-4 pt-5 lg:flex-row lg:items-end lg:justify-between lg:gap-5">
            {stats.length > 0 && (
              <div className="grid w-full grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-0 lg:w-[74%]">
                {stats.map((stat, index) => (
                  <div
                    key={`${stat.label}-${index}`}
                    className={[
                      "flex min-w-0 items-center gap-2.5",
                      index === 1
                        ? "sm:border-l sm:border-[#e7e4ff] sm:px-3"
                        : "",
                      index === 2 ? "sm:px-3" : "",
                      index === 3
                        ? "sm:pl-3"
                        : "sm:pr-3",
                    ].join(" ")}
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <IconCircle
                        icon={stat.icon}
                        className="bg-[#eeebff] text-[#1600ff]"
                      />
                    </span>

                    <div className="min-w-0">
                      <p className="text-xl font-bold leading-none tracking-tight text-[#1600ff] xl:text-2xl">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[10px] leading-tight tracking-tight text-[#59529c] xl:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {resultCard && (
              <div className="w-full rounded-xl border border-white/40 bg-[#eeedff]/85 px-3 py-3 shadow-[0_10px_30px_rgba(43,38,119,0.14)] backdrop-blur-md sm:w-[194px] sm:self-end lg:shrink-0">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid size-[52px] shrink-0 place-items-center rounded-full bg-[#d9d8ff] text-[#1600ff]"
                  >
                    <Icon
                      name={resultCard.icon}
                      className="size-8"
                    />
                  </span>

                  <p className="text-xs font-medium leading-[1.4] tracking-tight text-[#080044]">
                    {resultCard.lines.map((line, index) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index <
                        resultCard.lines.length - 1 ? (
                          <br />
                        ) : null}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
