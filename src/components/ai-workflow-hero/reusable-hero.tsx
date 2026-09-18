import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export type AIWorkflowHeroProps = {
  titleId?: string;
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary,#3525df)]";

export default function AIWorkflowHero({
  titleId,
  eyebrow = "A SMARTER WAY TO WORK",
  title = "Our",
  highlightedTitle = "AI WorkFlow",
  subtitle = "AI agents, experts and operators",
  description = "A structured, collaborative workflow where AI agents, human experts, and operators work together to turn your business goals into real results — faster, smarter, and at scale.",
  imageSrc = "/our-ai-workflow-hero-right-img.png",
  imageAlt = "AI agents, experts and operators collaborate around your business growth, with smarter operations, better results and continuous improvement.",
  primaryLabel = "Book a Free Consultation",
  primaryHref = "#contact",
  secondaryLabel = "See It in Action",
  secondaryHref = "#how-it-works",
  className = "",
}: AIWorkflowHeroProps = {}) {
  return (
    <section
      aria-labelledby={titleId || undefined}
      aria-label={
        titleId ? undefined : `${title} ${highlightedTitle}`.trim()
      }
className={`relative isolate overflow-hidden rounded-2xl bg-white font-sans text-[var(--color-heading,#080b37)] ${className}`}    >
      {/* Background matching the reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_73%_40%,#dcd8ff_0%,#eef0ff_32%,#ffffff_73%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-6 px-5 sm:px-8 lg:min-h-[70dvh] lg:grid-cols-[48%_52%] lg:gap-0 lg:px-[5.3%]">
        {/* Hero copy */}
        <div className="relative z-20 min-w-0 pt-12 sm:pt-14 lg:py-12 lg:pr-6">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary,#3525df)] sm:text-sm">
              {eyebrow}
            </p>
          )}

          <h1
            id={titleId || undefined}
            className="mt-4 text-[clamp(2.75rem,5.3vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.055em] text-[var(--color-heading,#080b37)]"
          >
            {title}
            {highlightedTitle && (
              <>
                {" "}
                <span className="bg-linear-to-r from-[var(--color-primary,#3525df)] via-[var(--color-violet-600,#7c3aed)] to-[var(--color-primary,#3525df)] bg-clip-text text-transparent">
                  {highlightedTitle}
                </span>
              </>
            )}
          </h1>

          {subtitle && (
            <p className="mt-2 text-sm font-semibold leading-[1.25] tracking-[-0.02em]">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--color-text,#515669)] sm:text-lg">
              {description}
            </p>
          )}

          {/* Actions */}
          {(primaryLabel || secondaryLabel) && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              {primaryLabel && (
                <a
                  href={primaryHref}
                  className={`${focus} inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[var(--color-primary,#3525df)] to-[var(--color-violet-600,#7c3aed)] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,0.2)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,99,235,0.25)] motion-reduce:transform-none motion-reduce:transition-none sm:px-6 sm:text-base`}
                >
                  {primaryLabel}

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 shrink-0"
                  />
                </a>
              )}

              {secondaryLabel && (
                <a
                  href={secondaryHref}
                  className={`${focus} inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#a398ff] bg-white/60 px-5 py-3 text-center text-sm font-bold text-[var(--color-heading,#080b37)] transition-colors hover:bg-white motion-reduce:transition-none sm:px-6 sm:text-base`}
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#eae6ff] text-[var(--color-primary,#3525df)]">
                    <Play
                      aria-hidden="true"
                      className="ml-0.5 size-3 fill-current"
                    />
                  </span>

                  {secondaryLabel}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Hero visual */}
       {/* Hero visual */}
<div
  className="
    relative isolate mx-auto
    h-[clamp(240px,65vw,510px)]
    w-full min-w-0 max-w-[720px]
    self-end overflow-hidden
    lg:mx-0 lg:h-[70dvh] lg:max-w-none
  "
>
  {/* Pink-purple background circle */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
  >
    <div
      className="
        absolute bottom-0 left-1/2
        aspect-square w-[92%] -translate-x-1/2
        rounded-full
        bg-[linear-gradient(135deg,#fbcfe8_0%,#e9d5ff_55%,#c4b5fd_100%)]
        opacity-20
      "
    />
  </div>

  <Image
    src={imageSrc}
    alt={imageAlt}
    fill
    sizes="(min-width: 1024px) 47vw, (min-width: 784px) 720px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
    loading="eager"
    fetchPriority="high"
    className="z-10 object-contain object-bottom"
    style={{
      objectFit: "contain",
      objectPosition: "center bottom",
      transform: "none",
    }}
  />
</div>
      </div>
    </section>
  );
}