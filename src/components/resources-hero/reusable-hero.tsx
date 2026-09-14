"use client";

import type { ReactNode } from "react";

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
  | "shield"
  | "calendar"
  | "trophy"
  | "arrow-up"
  | "book"
  | "file"
  | "pen"
  | "megaphone"
  | "search"
  | "mail"
  | "message"
  | "zap"
  | "help";

export function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const icons: Record<IconName, ReactNode> = {
   search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </>
    ),
     help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.8 9a2.3 2.3 0 1 1 4.2 1.4c-.8 1-2 1.3-2 3" />
        <path d="M12 17h.01" />
      </>
    ),
    zap: (
      <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
    ),
  message: (
      <>
        <path d="M5 5h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H10l-5 3v-3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z" />
      </>
    ),
    users: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21v-2.2a7 7 0 0 1 14 0V21" />
        <path d="M5.5 7.5a3 3 0 0 0 0 5.5M18.5 7.5a3 3 0 0 1 0 5.5" />
      </>
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
        pen: (
      <>
        <path d="m4 20 4.5-1 10-10a2.2 2.2 0 0 0-3-3l-10 10L4 20Z" />
        <path d="m13 7 4 4" />
      </>
    ),

    megaphone: (
      <>
        <path d="M4 14V10a2 2 0 0 1 2-2h3l9-4v16l-9-4H6a2 2 0 0 1-2-2Z" />
        <path d="M8 16v4" />
        <path d="M18 9.5a3.5 3.5 0 0 1 0 5" />
      </>
    ),
     "arrow-up": (
      <>
        <path d="M5 19 19 5" />
        <path d="M8 5h11v11" />
      </>
    ),
      file: (
      <>
        <path d="M6 3h8l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5" />
        <path d="M8 13h8M8 17h6" />
      </>
    ),

    trophy: (
  <>
    <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
    <path d="M8 6H4v2a4 4 0 0 0 4 4M16 6h4v2a4 4 0 0 1-4 4" />
    <path d="M12 13v4M8 21h8M9 17h6" />
  </>
),

    settings: (
      <>
        <path d="M10 2h4l.6 2.2 2 .9L18.7 4 21.5 6.8l-1.1 2.1.9 2L23.5 12v4l-2.2.6-.9 2 1.1 2.1-2.8 2.8-2.1-1.1-2 .9L14 25h-4l-.6-2.2-2-.9-2.1 1.1-2.8-2.8 1.1-2.1-.9-2L1 16v-4l2.2-.6.9-2L3.5 7.3 6.3 4.5l2.1 1.1 2-.9L10 2Z" />
        <circle cx="12" cy="14" r="3.5" />
      </>
    ),

    chart: (
      <>
        <rect x="3" y="14" width="4" height="7" rx="1.5" />
        <rect x="10" y="8" width="4" height="13" rx="1.5" />
        <rect x="17" y="3" width="4" height="18" rx="1.5" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z" />
      </>
    ),
     book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
      </>
    ),

    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),

    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),

    diamond: (
      <path d="m12 2 8 7-8 13L4 9l8-7Zm-6 7h12M9 4l-3 5m9-5 3 5m-9 0 3 13m3-13-3 13" />
    ),

    rocket: (
      <>
        <path d="M14 4c3-3 6-3 6-3s0 3-3 6l-6 6-4-4 7-5Z" />
        <path d="M11 13 6 18l-1-4 3-3m3 5-5 5" />
        <circle cx="16.5" cy="7.5" r="1.5" />
      </>
    ),

    lightbulb: (
      <>
        <path d="M9 18h6M10 22h4" />
        <path d="M8.5 14.5C7.5 13.4 7 12 7 10.5A5 5 0 0 1 12 5a5 5 0 0 1 5 5.5c0 1.5-.5 2.9-1.5 4l-1 1.5h-5l-1-1.5Z" />
      </>
    ),

    heart: (
      <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 8 4c1.7 0 3.2.9 4 2.2A4.8 4.8 0 0 1 16 4a4.8 4.8 0 0 1 4.8 4.8Z" />
    ),

    star: (
      <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
    ),

    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,

    play: <path d="M9 5v14l11-7L9 5Z" fill="currentColor" />,

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
        <path d="M5 8v11" />
        <path d="M5 5.5v.1" />
        <path d="M10 19V8m0 5a4 4 0 0 1 8 0v6" />
      </>
    ),

    twitter: (
      <path d="M4 5.5 10 12l-6 6.5h3l4.5-5 4.5 5H20l-6.5-7L20 5.5h-3l-4 4.5-4-4.5H4Z" />
    ),

    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
      </>
    ),

    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </>
    ),

    check: <path d="m5 12 4 4L19 6" />,

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    shield: (
      <path d="M12 3 20 6v5c0 5.2-3.4 8.8-8 10-4.6-1.2-8-4.8-8-10V6l8-3Z" />
    ),

    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {icons[name]}
    </svg>
  );
}

export function IconCircle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`grid size-11 shrink-0 place-items-center rounded-full sm:size-12 ${className}`}
    >
      {children}
    </span>
  );
}

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

export type HeroBenefitCard = {
  title: string;
  description: string;
  icon: IconName;
  variant?: "default" | "green";
  position?: string;
};

export type HeroHandwrittenNote = {
lines: string[];
  position?: string;
  rotate?: string;
  className?: string;
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

  benefitCards?: HeroBenefitCard[];

  handwrittenNote?: HeroHandwrittenNote;

  className?: string;
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
  benefitCards = [],
  handwrittenNote,
  className = "",
}: PageHeroProps) {
  const hasSpecialVisuals =
    benefitCards.length > 0 || Boolean(handwrittenNote);

  const defaultBenefitPositions = [
    "left-0 top-[9%]",
    "left-0 top-[30%]",
    "left-0 top-[51%]",
    "right-0 top-[7%]",
    "right-0 top-[30%]",
  ];

  return (
    <section
      aria-labelledby={titleId}
      className={`relative isolate min-h-[70dvh] overflow-hidden rounded-2xl bg-white ${className}`}
    >
      {/* Standard background */}
      {!hasSpecialVisuals && (
        <>
          <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full lg:w-[65%]">
            <img
              src={image}
              alt={imageAlt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-right"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 lg:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.95)_10%,rgba(255,255,255,0.45)_28%,transparent_48%)]" />

            <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-white/95 to-transparent" />
          </div>
        </>
      )}

      {/* Special AI Use Cases background */}
      {hasSpecialVisuals && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_73%_40%,#dcd8ff_0%,#eef0ff_32%,#ffffff_73%)]"
        />
      )}

      <div
        className={`mx-auto flex min-h-[70dvh] w-full max-w-[1440px] flex-col ${
          hasSpecialVisuals
            ? "lg:grid lg:grid-cols-[48%_52%] lg:items-center lg:gap-0"
            : ""
        } px-5 py-6 sm:px-8 lg:px-[5.3%] lg:py-7`}
      >
        {/* Hero Copy */}
        <div
          className={`relative z-20 w-full pt-8 lg:pt-[7vh] ${
            hasSpecialVisuals ? "lg:max-w-none lg:py-9 lg:pt-0" : "lg:max-w-[49%]"
          }`}
        >
          <p
            className={`text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm ${
              hasSpecialVisuals ? "tracking-[0.22em]" : ""
            }`}
          >
            {eyebrow}
          </p>

          <h1
            id={titleId}
            className={`mt-4 font-bold tracking-tight text-[var(--color-heading)] ${
              hasSpecialVisuals
                ? "text-[clamp(2.75rem,5.3vw,4.5rem)] leading-[1.04] tracking-[-0.055em]"
                : "max-w-3xl text-5xl leading-[0.94] sm:text-6xl lg:text-7xl"
            }`}
          >
            {title}{" "}
            {highlightedTitle && (
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-violet-600)] to-[var(--color-primary)] bg-clip-text text-transparent">
                {highlightedTitle}
              </span>
            )}
          </h1>

          <p
            className={`mt-5 max-w-2xl leading-relaxed text-[var(--color-text)] ${
              hasSpecialVisuals
                ? "text-base leading-relaxed sm:text-lg"
                : "text-lg sm:text-xl lg:text-2xl"
            }`}
          >
            {description}
          </p>

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div
              className={`flex flex-wrap ${
                hasSpecialVisuals
                  ? "mt-5 flex-col gap-3 sm:flex-row sm:flex-wrap"
                  : "mt-7 gap-3 sm:gap-4"
              }`}
            >
              {primaryAction && (
                <a
                  href={primaryAction.href}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg text-sm font-bold transition sm:text-base ${
                    hasSpecialVisuals
                      ? "bg-[#2800ff] px-5 py-3 text-white hover:bg-[#2000d6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2800ff]"
                      : "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-violet-600)] px-5 text-white shadow-[0_10px_25px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 sm:px-6"
                  }`}
                >
                  {primaryAction.label}
                  {primaryAction.icon && (
                    <Icon name={primaryAction.icon} className="size-4" />
                  )}
                </a>
              )}

              {secondaryAction && (
                <a
                  href={secondaryAction.href}
                  className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-lg text-sm font-bold transition sm:text-base ${
                    hasSpecialVisuals
                      ? "border border-[#a398ff] bg-white/60 px-5 py-3 text-[#09075b] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2800ff]"
                      : "border border-[var(--color-violet-600)]/50 bg-white/80 px-5 text-[var(--color-heading)] hover:bg-white sm:px-6"
                  }`}
                >
                  {secondaryAction.icon === "play" && (
                    <span
                      className={`grid size-6 place-items-center rounded-full ${
                        hasSpecialVisuals
                          ? "bg-[#eae6ff] text-[#2800ff]"
                          : "bg-indigo-50 text-[var(--color-primary)]"
                      }`}
                    >
                      <Icon
                        name="play"
                        className="size-3 fill-current"
                      />
                    </span>
                  )}

                  {secondaryAction.label}
                </a>
              )}
            </div>
          )}

          {/* Statistics */}
          {stats.length > 0 && (
            <div
              className={`grid ${
                hasSpecialVisuals
                  ? "mt-7 grid-cols-1 gap-5 min-[480px]:grid-cols-3 min-[480px]:gap-3"
                  : "mt-5 grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0"
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className={`flex items-center gap-3 ${
                    hasSpecialVisuals
                      ? index > 0
                        ? "min-[480px]:border-l min-[480px]:border-[#e8e8f6] min-[480px]:pl-3"
                        : ""
                      : index > 0
                        ? "border-l border-indigo-100 pl-4 sm:pl-4"
                        : "sm:pr-4"
                  }`}
                >
                  <IconCircle
                    className={
                      hasSpecialVisuals
                        ? index === 0
                          ? "bg-[#e0f7ef] text-[#08bd96]"
                          : "bg-[#ece8ff] text-[#2800ff]"
                        : "bg-indigo-100 text-[var(--color-primary)]"
                    }
                  >
                    <Icon
                      name={stat.icon}
                      className="size-6 sm:size-7"
                    />
                  </IconCircle>

                  <div>
                    <p
                      className={`font-bold leading-none ${
                        hasSpecialVisuals
                          ? "text-2xl tracking-[-0.04em] text-[#2800ff] sm:text-3xl"
                          : "text-2xl text-[var(--color-primary)] sm:text-3xl"
                      }`}
                    >
                      {stat.value}
                    </p>

                    <p
                      className={`mt-1 leading-tight ${
                        hasSpecialVisuals
                          ? "text-sm leading-snug text-[#5950a0]"
                          : "text-xs text-[var(--color-text-muted)] sm:text-sm"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hero Visual */}
        <div
          className={`relative min-h-[22rem] sm:min-h-[30rem] lg:min-h-0 ${
            hasSpecialVisuals
              ? "lg:relative lg:min-h-[30rem]"
              : ""
          }`}
        >
          <div
            className={`absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
              hasSpecialVisuals
                ? "bg-[#c9c2ff]/35"
                : "bg-blue-100/70"
            }`}
          />

          <img
            src={image}
            alt={imageAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={
              hasSpecialVisuals
                ? "absolute inset-0 size-full object-contain object-bottom"
                : "absolute inset-x-0 bottom-0 mx-auto w-full max-w-[40rem] object-contain"
            }
          />

          {/* Optional floating benefit cards */}
          {benefitCards.length > 0 && (
            <div className="absolute inset-0 z-10">
              {benefitCards.map((card, index) => (
                <div
                  key={`${card.title}-${index}`}
                  className={`absolute ${
                    card.position ??
                    defaultBenefitPositions[index] ??
                    "left-0 top-0"
                  } flex min-h-16 w-[36%] items-center gap-2 rounded-xl border border-white/70 bg-white/90 p-2 shadow-[0_6px_24px_rgba(76,62,180,0.08)] backdrop-blur-sm sm:min-h-18 sm:gap-3 sm:p-3`}
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full sm:size-11 ${
                      card.variant === "green"
                        ? "bg-[#dff7ee] text-[#08bd96]"
                        : "bg-[#eeeaff] text-[#2800ff]"
                    }`}
                  >
                    <Icon
                      name={card.icon}
                      className="size-5 sm:size-7"
                    />
                  </span>

                  <div className="min-w-0 text-[#09075b]">
                    <p className="text-xs font-bold leading-snug sm:text-sm">
                      {card.title}
                    </p>

                    <p className="mt-0.5 text-xs leading-snug sm:text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

       {/* Optional handwritten note */}
{handwrittenNote && (
  <div
    className={`absolute z-20 hidden text-[#2800ff] sm:block ${
      handwrittenNote.position ?? "right-[1%] bottom-[15%]"
    } ${
      handwrittenNote.rotate ?? "-rotate-12"
    } ${handwrittenNote.className ?? ""}`}
  >
    <p
      style={{ fontFamily: "'Caveat', cursive" }}
      className="text-2xl leading-tight tracking-wide"
    >
      {handwrittenNote.lines.map((line, index) => (
        <span key={`${line}-${index}`}>
          {line}
          {index < handwrittenNote.lines.length - 1 && <br />}
        </span>
      ))}
    </p>

    <svg
      viewBox="0 0 70 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="absolute -left-16 top-8 h-10 w-16"
    >
      <path d="M64 5C53 27 27 32 7 24m0 0 11-5M7 24l10 7" />
    </svg>
  </div>
)}

          {/* Standard result card */}
          {!hasSpecialVisuals && resultCard && (
            <div className="absolute bottom-5 right-0 z-30 hidden w-52 rounded-xl bg-white/95 p-4 shadow-[0_12px_35px_rgba(24,74,140,0.12)] sm:block">
              <div className="flex gap-3">
                <IconCircle className="bg-indigo-100 text-[var(--color-primary)]">
                  <Icon
                    name={resultCard.icon}
                    className="size-6"
                  />
                </IconCircle>

                <div>
                  <h3 className="text-sm font-bold leading-tight text-[var(--color-heading)] sm:text-base">
                    {resultCard.lines.map((line, index) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index < resultCard.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}