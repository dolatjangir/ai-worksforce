import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, ChevronRight, Database, Play, Zap } from "lucide-react";

export type HeroBreadcrumb = { label: string; href?: string };
export type HeroBenefit = { icon: LucideIcon; title: string; description: string };

export type SolutionsHeroProps = {
  ariaLabel?: string;
  breadcrumbs?: readonly HeroBreadcrumb[];
  badge?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  mobileImageAlt?: string;
  assessmentLabel?: string;
  assessmentHref?: string;
  videoLabel?: string;
  videoHref?: string;
  benefitsLabel?: string;
  /** Exactly three benefits preserve the original three-column layout. */
  benefits?: readonly [HeroBenefit, HeroBenefit, HeroBenefit];
};



const defaultBenefits = [
  { icon: Zap, title: "Faster Operations", description: "Automate repetitive tasks in minutes" },
  { icon: Database, title: "Reduce Costs", description: "Cut operational costs by up to 70%" },
  { icon: ChartNoAxesCombined, title: "Higher Productivity", description: "Get more done with the same team" },
] as const;

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0876ed]";

/** Place the right-hand artwork (without the left copy) at public/solutions.png. */
export default function SolutionsHero({
  ariaLabel = "AI automation",
  
  badge = "AI AUTOMATION",
  title = "Automate Today.",
  highlightedTitle = "Grow Tomorrow.",
  description = "Streamline your processes, eliminate manual work, and unlock new possibilities with intelligent AI automation. We help businesses build faster, smarter and more efficient operations.",
  imageSrc = "/solutions/ai-automation.png",
  imageAlt = "AI automation specialist working on a laptop with workflow and productivity graphics",
  mobileImageAlt = imageAlt,
  assessmentLabel = "Get a Free Automation Assessment",
  assessmentHref = "#contact",
  videoLabel = "Watch How It Works",
  benefitsLabel = "Automation benefits",
  benefits = defaultBenefits,
  videoHref = "#how-it-works",
}: SolutionsHeroProps = {}) {
  return (
    <section aria-label={ariaLabel} className="relative isolate overflow-hidden bg-[#f3f9fd] font-sans text-[#071744]">
      {/* On desktop, the artwork blends into the copy's pale background. */}
    {/* Stable desktop artwork dimensions across pages */}
<div className="pointer-events-none absolute right-0 top-1/2 hidden h-[560px] w-[60%] -translate-y-1/2 lg:block xl:h-[620px]">
  <Image
    src={imageSrc}
    alt={imageAlt}
    fill
    sizes="60vw"
    loading="eager"
    fetchPriority="high"
    className="object-contain object-right"
  />

  <div
    aria-hidden="true"
    className="absolute inset-y-0 left-0 w-[22%] bg-linear-to-r from-[#f3f9fd] via-[#f3f9fd]/70 to-transparent"
  />
</div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-[6.1%]">
        <div className="flex min-w-0 flex-col py-6 sm:py-8 lg:min-h-[560px] lg:w-[47%] lg:py-7 xl:min-h-[620px] xl:py-8">
         

          <div className="my-auto min-w-0">
            <p className="inline-flex rounded-full border border-[#cbdfe9] bg-[#eaf6fb] px-3 py-0.5 text-xs font-bold tracking-[0.04em] text-[#0965b8] sm:text-sm">
              {badge}
            </p>

            <h1 className="mt-3 text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold leading-[1.04] tracking-[-0.045em]">
              <span className="block">{title}</span>
              <span className="block text-[#0876ed]">{highlightedTitle}</span>
            </h1>

            <p className="mt-4 max-w-[34rem] text-base leading-[1.55] text-[#263247] xl:text-lg">
              {description}
            </p>

            <div className="mt-5 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
              <a href={assessmentHref} className={`${focus} inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#0876ed] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(8,118,237,0.12)] transition-colors hover:bg-[#0663c9] motion-reduce:transition-none`}>
                {assessmentLabel}
                <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </a>
              <a href={videoHref} className={`${focus} inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/80 bg-white/90 px-4 py-3 text-sm font-bold text-[#071744] shadow-[0_4px_14px_rgba(7,23,68,0.04)] transition-colors hover:bg-white motion-reduce:transition-none`}>
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#0876ed] text-white">
                  <Play aria-hidden="true" className="ml-0.5 size-3 fill-current" />
                </span>
                {videoLabel}
              </a>
            </div>

            <ul aria-label={benefitsLabel} className="mt-8 grid list-none grid-cols-1 gap-5 p-0 min-[480px]:grid-cols-3 min-[480px]:gap-0 xl:mt-10">
              {benefits.map(({ icon: Icon, title, description }, index) => (
                <li key={title} className={`min-w-0 ${index ? "min-[480px]:border-l min-[480px]:border-[#ccdae5] min-[480px]:pl-4" : ""} ${index < benefits.length - 1 ? "min-[480px]:pr-3" : ""}`}>
                  <span className="mb-2 grid size-10 place-items-center rounded-full bg-[#e5f2fb] text-[#0876ed]">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={2.5} />
                  </span>
                  <h2 className="text-sm font-bold leading-snug xl:text-base">{title}</h2>
                  <p className="mt-2 max-w-[12rem] text-xs leading-[1.45] text-[#334155] xl:text-sm">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* A separate visual row keeps the complete artwork visible on smaller screens. */}
      <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl lg:hidden">
        <Image
          src={imageSrc}
          alt={mobileImageAlt}
          fill
          sizes="(max-width: 672px) 100vw, 672px"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
