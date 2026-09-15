import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

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

const ICONS: Record<IconName, ReactNode> = {
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
      <g transform="translate(1.2 0.4) scale(0.88)">
        <path d="M10 2h4l.6 2.2 2 .9L18.7 4 21.5 6.8l-1.1 2.1.9 2L23.5 12v4l-2.2.6-.9 2 1.1 2.1-2.8 2.8-2.1-1.1-2 .9L14 25h-4l-.6-2.2-2-.9-2.1 1.1-2.8-2.8 1.1-2.1-.9-2L1 16v-4l2.2-.6.9-2L3.5 7.3 6.3 4.5l2.1 1.1 2-.9L10 2Z" />
        <circle cx="12" cy="14" r="3.5" />
      </g>
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

/** Decorative by default; supply a label when the icon conveys meaning alone. */
export function Icon({ name, className = "size-5", label }: {
  name: IconName;
  className?: string;
  label?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      focusable="false"
      width={20}
      height={20}
      className={`shrink-0 ${className}`}
    >
      {ICONS[name]}
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
  /** Above-the-fold hero images should retain the default high priority. */
  imagePriority?: boolean;
  /** Override when the hero is placed inside a narrower container. */
  imageSizes?: string;
  /** Adjust the focal point when the image is cropped to fill its panel. */
  imagePosition?: CSSProperties["objectPosition"];

  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;

  stats?: HeroStat[];

  resultCard?: HeroResultCard;

  benefitCards?: HeroBenefitCard[];

  handwrittenNote?: HeroHandwrittenNote;

  className?: string;
};

const BENEFIT_POSITIONS = [
  "left-0 top-[9%]",
  "left-0 top-[30%]",
  "left-0 top-[51%]",
  "right-0 top-[7%]",
  "right-0 top-[30%]",
] as const;

const ACTION_CLASSES = "inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-base font-bold leading-snug transition-colors sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue";

/**
 * Desktop: exact 90dvh; the image fills the right 50% edge to edge.
 * Long copy scrolls within its own column to keep actions reachable.
 * Mobile/tablet: minimum 90dvh, expanding for stacked content without clipping.
 * Image uses object-cover: proportional cropping fills the panel without distortion.
 * A mask blends the leftmost 10% into the actual section background.
 * Import global.css once in your root layout.
 * Use a unique titleId and render one page-level h1 per page.
 * Remote image URLs must be allowed by images.remotePatterns in next.config.
 * Custom position/rotate classes must appear literally in Tailwind-scanned source.
 */
export default function PageHero({
  titleId,
  eyebrow,
  title,
  highlightedTitle,
  description,
  image,
  imageAlt = "",
  imagePriority = true,
  imageSizes = "(min-width: 1024px) 50vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)",
  imagePosition = "center",
  primaryAction,
  secondaryAction,
  stats = [],
  resultCard,
  benefitCards = [],
  handwrittenNote,
  className = "",
}: PageHeroProps) {
  const hasSpecialVisuals = benefitCards.length > 0 || Boolean(handwrittenNote);
  // More than five cards use a grid so no extra cards share an absolute position.
  const floatBenefits = benefitCards.length > 0 && benefitCards.length <= BENEFIT_POSITIONS.length;

  return (
    <section
      aria-labelledby={titleId}
      className={`relative isolate min-h-[90dvh] overflow-hidden rounded-2xl bg-white text-brand-dark lg:h-[90dvh] lg:min-h-0 ${className}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none   absolute inset-0 -z-10 ${hasSpecialVisuals
          ? "bg-[radial-gradient(ellipse_at_73%_40%,var(--color-brand-purple-soft)_0%,var(--color-brand-blue-soft)_32%,var(--color-white)_73%)]"
          : "bg-[image:var(--gradient-section)]"}`}
      />

      <div className="grid min-h-[90dvh] w-full items-center gap-8 py-8 sm:py-10 lg:h-full lg:min-h-0 lg:grid-cols-2 lg:items-stretch lg:gap-0 lg:py-0">
        <div className="relative z-20 min-h-0 min-w-0 px-5 sm:px-8 lg:flex lg:h-full lg:flex-col lg:overflow-y-auto lg:py-8 lg:pl-[clamp(2rem,5.3vw,6rem)] lg:pr-8">
          <div className="my-auto w-full shrink-0 lg:ml-auto lg:max-w-[640px]">
          <p className="text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-brand-blue sm:text-[11px]">{eyebrow}</p>
          <h1
            id={titleId}
            className={`mt-2 font-bold tracking-tight text-[var(--color-heading)] [overflow-wrap:anywhere] ${hasSpecialVisuals
              ? "text-[clamp(2.5rem,4.2vw,4.25rem)] leading-[1.08]"
              : "text-[clamp(2.5rem,4.2vw,4.25rem)] leading-[1.08]"}`}
          >
            {title}{highlightedTitle && <> <span className="bg-[image:var(--gradient-heading)] bg-clip-text text-transparent">{highlightedTitle}</span></>}
          </h1>
          <p className={`mt-4 max-w-2xl text-base leading-relaxed text-brand-text sm:text-lg lg:text-[clamp(1.0625rem,1.35vw,1.25rem)]`}>
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
              {primaryAction && (
                <a href={primaryAction.href} className={`${ACTION_CLASSES} bg-brand-blue text-white shadow-[0_10px_25px_var(--shadow-blue-medium)] hover:bg-brand-blue-dark`}>
                  <span>{primaryAction.label}</span>
                  {primaryAction.icon && <Icon name={primaryAction.icon} className="size-5" />}
                </a>
              )}
              {secondaryAction && (
                <a href={secondaryAction.href} className={`${ACTION_CLASSES} border border-brand-purple/40 bg-white/80 text-brand-dark hover:bg-brand-purple-soft`}>
                  {secondaryAction.icon && (
                    secondaryAction.icon === "play" ? (
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-purple-soft text-brand-purple">
                        <Icon name="play" className="size-3.5" />
                      </span>
                    ) : <Icon name={secondaryAction.icon} className="size-5" />
                  )}
                  <span>{secondaryAction.label}</span>
                </a>
              )}
            </div>
          )}

          {stats.length > 0 && (
            <ul className="mt-8 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,10rem),1fr))] gap-x-4 gap-y-6 p-0" aria-label="Key benefits">
              {stats.map((stat, index) => (
                <li key={`${stat.value}-${stat.label}-${index}`} className="flex min-w-0 items-start gap-3">
                  <IconCircle className={hasSpecialVisuals && index === 0 ? "bg-brand-green-soft text-brand-green" : "bg-brand-purple-soft text-brand-purple"}>
                    <Icon name={stat.icon} className="size-5 sm:size-6" />
                  </IconCircle>
                  <div className="min-w-0">
                    <p className="text-base font-bold leading-snug text-brand-blue [overflow-wrap:anywhere] sm:text-lg">{stat.value}</p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-text">{stat.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          </div>
        </div>

        <div className="relative mx-5 min-h-0 min-w-0 sm:mx-8 lg:mx-0 lg:h-full">
          <div className="relative isolate h-[clamp(20rem,85vw,30rem)] sm:h-[clamp(24rem,65vw,34rem)] lg:h-full lg:w-full">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes={imageSizes}
              loading={imagePriority ? "eager" : "lazy"}
              fetchPriority={imagePriority ? "high" : "auto"}
              className="object-cover lg:[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_100%)]"
              style={{ objectPosition: imagePosition }}
            />

            {floatBenefits && (
              <div className="absolute inset-x-4 inset-y-6 z-10 hidden lg:block">
                {benefitCards.map((card, index) => (
                  <BenefitCard key={`${card.title}-${index}`} card={card} className={`absolute w-[36%] ${card.position ?? BENEFIT_POSITIONS[index]}`} />
                ))}
              </div>
            )}

            {handwrittenNote && (
              <div className={`pointer-events-none absolute z-20 hidden text-brand-purple sm:block ${handwrittenNote.position ?? "right-[1%] bottom-[15%]"} ${handwrittenNote.rotate ?? "-rotate-12"} ${handwrittenNote.className ?? ""}`}>
                <p className="font-hand text-2xl leading-tight tracking-wide">
                  {handwrittenNote.lines.map((line, index) => <span className="block" key={`${line}-${index}`}>{line}</span>)}
                </p>
                <svg viewBox="0 0 70 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className="absolute -left-16 top-8 h-10 w-16">
                  <path d="M64 5C53 27 27 32 7 24m0 0 11-5M7 24l10 7" />
                </svg>
              </div>
            )}
          </div>

          {benefitCards.length > 0 && (
            <div className={`relative z-10 mt-4 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 ${floatBenefits ? "lg:hidden" : "lg:absolute lg:inset-x-4 lg:bottom-4 lg:max-h-[40%] lg:overflow-y-auto"}`}>
              {benefitCards.map((card, index) => <BenefitCard key={`${card.title}-${index}`} card={card} />)}
            </div>
          )}

          {!hasSpecialVisuals && resultCard && (
            <div className="relative z-20 mt-4 w-full rounded-xl bg-white/95 p-4 shadow-[0_12px_35px_var(--shadow-blue-medium)] sm:absolute sm:bottom-5 sm:right-0 sm:mt-0 sm:w-60">
              <div className="flex items-start gap-3">
                <IconCircle className="bg-brand-blue-soft text-brand-blue"><Icon name={resultCard.icon} className="size-6" /></IconCircle>
                <p className="min-w-0 text-base font-bold leading-snug text-brand-dark">
                  {resultCard.lines.map((line, index) => <span className="block" key={`${line}-${index}`}>{line}</span>)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ card, className = "" }: { card: HeroBenefitCard; className?: string }) {
  return (
    <div className={`flex min-h-18 min-w-0 items-center gap-2 rounded-xl border border-white/70 bg-white/95 p-3 shadow-[0_6px_24px_var(--shadow-blue)] ${className}`}>
      <span className={`flex size-9 shrink-0 items-center justify-center rounded-full ${card.variant === "green" ? "bg-brand-green-soft text-brand-green" : "bg-brand-purple-soft text-brand-purple"}`}>
        <Icon name={card.icon} className="size-5" />
      </span>
      <div className="min-w-0 text-brand-dark [overflow-wrap:anywhere]">
        <p className="text-sm font-bold leading-snug">{card.title}</p>
        <p className="mt-0.5 text-sm leading-snug text-brand-text">{card.description}</p>
      </div>
    </div>
  );
}
