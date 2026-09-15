"use client";

import React, { ReactNode } from "react";

export type HeroButton = {
  label: string;
  href: string;
  icon?: ReactNode;
  variant: "primary" | "secondary";
};

export type HeroStat = {
  value: string;
  label: string;
  icon: ReactNode;
};

export type HeroToolCard = {
  label: string;
  symbol: string;
  colorClass?: string;
  subLabel?: string;
};

export type HeroSideCard = {
  title: ReactNode;
  items: string[];
  icon?: ReactNode;
};

export type HeroFloatingCard = {
  label: string;
  symbol: string;
  colorClass?: string;
};

export type ReusableHeroProps = {
  eyebrow: string;

  title: ReactNode;

  subtitle: string;

  description: string;

  buttons: {
    primary: HeroButton;
    secondary: HeroButton;
  };

  stats: HeroStat[];

  heroImageSrc: string;

  heroImageAlt: string;

  leftCards?: HeroToolCard[];

  sideCard?: HeroSideCard;

  rightCards?: HeroFloatingCard[];

  brandCardText?: string;

  handwrittenText?: ReactNode;

  className?: string;
};

export default function ReusableHero({
  eyebrow,
  title,
  subtitle,
  description,
  buttons,
  stats,
  heroImageSrc,
  heroImageAlt,
  leftCards = [],
  sideCard,
  rightCards = [],
 
  handwrittenText,
  className = "",
}: ReusableHeroProps) {
  const primaryButton =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-[9px] bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2";

  const secondaryButton =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-[9px] border border-brand-blue/55 bg-white/70 px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-blue-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2";

  const eyebrowClass =
    "text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-brand-blue sm:text-[11px]";

  return (
    <section
      aria-labelledby="hero-title"
      className={`relative isolate overflow-hidden rounded-b-2xl ${className}`}
      style={{
        background:
          "radial-gradient(ellipse at 73% 36%, var(--color-brand-purple-soft), transparent 48%), linear-gradient(115deg, var(--color-blue-50), white 56%, var(--color-indigo-50))",
      }}
    >
      <div className="mx-auto grid max-w-[1370px] gap-5 px-5 pb-8 pt-10 sm:px-8 lg:min-h-[515px] lg:grid-cols-[1fr_1.08fr] lg:gap-0 lg:px-10 lg:pb-5 lg:pt-10">
        {/* =========================================================
            LEFT CONTENT
        ========================================================= */}
        <div className="relative z-10 pt-10">
          <p className={eyebrowClass}>{eyebrow}</p>

          <h1
            id="hero-title"
            className="mt-2 text-4xl font-bold leading-[1.03] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>

          <h2 className="mt-2 max-w-[580px] text-sm font-semibold leading-[1.25] tracking-[-0.025em] sm:text-lg">
            {subtitle}
          </h2>

          <p className="mt-3 max-w-[570px] text-xs leading-[1.5] text-brand-text sm:text-sm">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={buttons.primary.href}
              className={primaryButton}
            >
              {buttons.primary.label}

              {buttons.primary.icon}
            </a>

            <a
              href={buttons.secondary.href}
              className={secondaryButton}
            >
              {buttons.secondary.icon && (
                <span className="rounded-full bg-brand-purple-soft p-1 text-brand-purple">
                  {buttons.secondary.icon}
                </span>
              )}

              {buttons.secondary.label}
            </a>
          </div>

          {/* =======================================================
              STATS
          ======================================================= */}
          <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-5">
            {stats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start gap-2 border-r border-brand-blue/10 last:border-0 sm:flex-row sm:items-center sm:gap-3"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-purple-soft text-brand-purple sm:size-11">
                  {stat.icon}
                </span>

                <div>
                  <p className="text-xl font-bold leading-none tracking-tight text-brand-blue sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[11px] leading-tight text-brand-text sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            RIGHT HERO VISUAL
        ========================================================= */}
        <div className="relative mx-auto mt-4 h-[415px] w-full max-w-[670px] sm:h-[460px] lg:-mt-3">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[14%] inset-y-6 rounded-full bg-brand-purple-light/15 blur-2xl"
          />

          {/* =======================================================
              MAIN IMAGE
          ======================================================= */}
          <img
            src={heroImageSrc}
            alt={heroImageAlt}
            width={420}
            height={530}
            fetchPriority="high"
            className="absolute bottom-0 left-[7%]  h-full w-[70dvh]  object-cover object-top"
          />

          {/* =======================================================
              AI WORKSFORCE BRAND CARD
          ======================================================= */}
          

          {/* =======================================================
              LEFT FLOATING TOOL CARDS
          ======================================================= */}
          {leftCards.length > 0 && (
            <div className="absolute left-0 top-8 grid gap-3 sm:left-1">
              {leftCards.slice(0, 4).map((tool) => (
                <div
                  key={tool.label}
                  className="flex   items-center gap-3 rounded-xl border border-white bg-white/95  shadow-[0_8px_30px_var(--shadow-blue-soft)] p-3 "
                >
                  <span
                    aria-hidden="true"
                    className={`text-[33px] font-bold leading-none ${
                      tool.colorClass ?? "text-brand-blue"
                    }`}
                  >
                    {tool.symbol}
                  </span>

                  <span className="text-xs font-semibold sm:text-sm">
                    {tool.label}

                    {tool.subLabel && (
                      <small className="block font-normal text-brand-text">
                        {tool.subLabel}
                      </small>
                    )}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* =======================================================
              TOP RIGHT POSSIBILITY CARD
          ======================================================= */}
          {sideCard && (
            <aside className="absolute -right-1 top-0 w-[155px] rounded-xl border border-white bg-white/95 p-3 shadow-[0_8px_30px_var(--shadow-blue-soft)] sm:w-[225px] sm:p-5">
              {sideCard.icon && (
                <span className="absolute right-3 top-3 text-brand-purple">
                  {sideCard.icon}
                </span>
              )}

              <h3 className="pr-3 text-base font-bold leading-tight tracking-tight sm:text-lg">
                {sideCard.title}
              </h3>

              <ul className="mt-3 space-y-2">
                {sideCard.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[10px] sm:text-xs"
                  >
                    <span className="rounded-full bg-brand-green-soft text-brand-green">
                      <span className="flex size-3.5 items-center justify-center">
                        ✓
                      </span>
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* =======================================================
              RIGHT FLOATING CARDS
          ======================================================= */}
          {rightCards.length > 0 && (
            <div className="absolute right-0 top-[205px] grid gap-3 sm:right-8 sm:top-[210px]">
              {rightCards.slice(0, 2).map((card) => (
                <div
                  key={card.label}
                  className="flex items-center gap-2 rounded-xl bg-white/95 px-3 py-3 shadow-sm"
                >
                  <span
                    aria-hidden="true"
                    className={`text-2xl ${
                      card.colorClass ?? "text-brand-purple"
                    }`}
                  >
                    {card.symbol}
                  </span>

                  <span className="text-xs font-semibold sm:text-sm">
                    {card.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* =======================================================
              HANDWRITTEN NOTE
          ======================================================= */}
          {handwrittenText && (
            <p
              aria-hidden="true"
              className="absolute bottom-2 right-0 -rotate-12 font-hand text-[23px] leading-[1.08] text-brand-blue sm:bottom-3 sm:text-[27px]"
            >
              {handwrittenText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}