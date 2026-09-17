import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export type AIWorkflowHeroProps = {
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
};

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3525df]";

/**
 * Place the complete right-side diagram at public/our-ai-workflow-hero-right-img.png.
 * Desktop height: 70dvh. Small/short screens use natural height to prevent clipping.
 * No client-side JavaScript is required by this component.
 */
export default function AIWorkflowHero({
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
}: AIWorkflowHeroProps = {}) {
  return (
    <section
      aria-label={`${title} ${highlightedTitle}`}
      className="relative isolate bg-[#f7f8ff] font-sans text-[#080b37]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_77%_50%,rgba(222,225,255,0.5)_0%,rgba(247,248,255,0)_62%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-5 px-5 py-10 sm:px-8 sm:py-12 lg:h-[70dvh] lg:grid-cols-[49%_51%] lg:gap-0 lg:px-[5.5%] lg:py-6 [@media(min-width:1024px)_and_(max-height:700px)]:h-auto [@media(min-width:1024px)_and_(max-height:700px)]:min-h-[70dvh]">
        <div className="relative z-10 min-w-0 lg:pr-2">
          <p className="text-[10px] font-semibold uppercase leading-relaxed tracking-[0.25em] text-[#5147ad] sm:text-xs">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-[clamp(2.25rem,4.4vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.035em]">
            {title}{" "}
            <span className="text-[#3525df]">{highlightedTitle}</span>
          </h1>

          <p className="mt-2 text-[clamp(1.25rem,2.25vw,2.125rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
            {subtitle}
          </p>

          <p className="mt-4 max-w-[38rem] text-base leading-[1.6] text-[#515669] sm:text-lg xl:text-xl">
            {description}
          </p>

          <div className="mt-5 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap xl:mt-6 xl:gap-4">
            <a
              href={primaryHref}
              className={`${focus} inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-transparent bg-[#3525df] px-5 py-3 text-sm font-semibold text-white shadow-[0_3px_10px_rgba(53,37,223,0.08)] transition-colors hover:bg-[#2b1dbf] motion-reduce:transition-none xl:px-6`}
            >
              {primaryLabel}
              <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
            </a>

            <a
              href={secondaryHref}
              className={`${focus} inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#777c89] bg-white/25 px-5 py-3 text-sm font-semibold text-[#080b37] transition-colors hover:bg-white/80 motion-reduce:transition-none xl:px-6`}
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#e7e6ff] text-[#3525df]">
                <Play aria-hidden="true" className="ml-0.5 size-3" strokeWidth={2.5} />
              </span>
              {secondaryLabel}
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[1.4/1] w-full max-w-[720px] min-w-0 lg:h-full lg:min-h-0 lg:max-w-none lg:aspect-auto [@media(min-width:1024px)_and_(max-height:700px)]:aspect-[1.4/1] [@media(min-width:1024px)_and_(max-height:700px)]:h-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1600px) 726px, (min-width: 1024px) 46vw, (min-width: 768px) 720px, 100vw"
            loading="eager"
            fetchPriority="high"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
