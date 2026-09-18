import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesCombined,
  ChevronRight,
  Database,
  Play,
  Zap,
} from "lucide-react";

export type HeroBreadcrumb = {
  label: string;
  href?: string;
};

export type HeroBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

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
  benefits?: readonly [HeroBenefit, HeroBenefit, HeroBenefit];
};

const defaultBenefits = [
  {
    icon: Zap,
    title: "Faster Operations",
    description: "Automate repetitive tasks in minutes",
  },
  {
    icon: Database,
    title: "Reduce Costs",
    description: "Cut operational costs by up to 70%",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Higher Productivity",
    description: "Get more done with the same team",
  },
] as const satisfies readonly [HeroBenefit, HeroBenefit, HeroBenefit];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1600ff]";

export default function SolutionsHero({
  ariaLabel = "AI automation",
  breadcrumbs = [],
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
  videoHref = "#how-it-works",
  benefitsLabel = "Automation benefits",
  benefits = defaultBenefits,
}: SolutionsHeroProps = {}) {
  return (
    <section
      aria-label={ariaLabel}
      className="relative isolate min-h-[80dvh] overflow-hidden rounded-2xl bg-white font-sans text-[#080044]"
    >
      {/* Background artwork — same placement as the company hero */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full lg:w-[65%]">
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="65vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover object-right"
          />
        </div>

        <div className="absolute inset-0 lg:hidden">
          <Image
            src={imageSrc}
            alt={mobileImageAlt}
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover object-right"
          />
        </div>

        {/* White blend behind the content */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/40 lg:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.95)_10%,rgba(255,255,255,0.45)_28%,transparent_48%)]"
        />

        {/* Bottom fade behind the benefits */}
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[24%] bg-linear-to-t from-white/95 to-transparent"
        /> */}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80dvh] w-full max-w-[1440px] flex-col px-5 py-6 sm:px-8 lg:px-[5.3%] lg:py-7">
        {/* Hero copy */}
        <div className="relative w-full min-w-0 pt-8 lg:max-w-[49%] lg:pt-[7vh]">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex list-none flex-wrap items-center gap-2 p-0 text-xs text-[#59529c] sm:text-sm">
                {breadcrumbs.map((breadcrumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <li
                      key={`${breadcrumb.label}-${index}`}
                      className="flex items-center gap-2"
                    >
                      {index > 0 && (
                        <ChevronRight
                          aria-hidden="true"
                          className="size-3.5 shrink-0"
                        />
                      )}

                      {breadcrumb.href && !isLast ? (
                        <a
                          href={breadcrumb.href}
                          className={`${focus} rounded-sm transition-colors hover:text-[#1600ff] motion-reduce:transition-none`}
                        >
                          {breadcrumb.label}
                        </a>
                      ) : (
                        <span aria-current={isLast ? "page" : undefined}>
                          {breadcrumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {badge && (
            <p className="text-[9px] font-bold uppercase leading-relaxed tracking-[0.16em] text-[#1600ff] sm:text-xs">
              {badge}
            </p>
          )}

          <h1 className="mt-4 text-[clamp(2rem,5.8vw,5.25rem)] font-bold leading-[0.99] tracking-[-0.045em] text-[#080044]">
            {title}

            {highlightedTitle && (
              <span className="block text-[#1600ff]">
                {highlightedTitle}
              </span>
            )}
          </h1>

          {description && (
            <p className="mt-3 max-w-[470px] text-base leading-[1.25] tracking-[-0.012em] text-[#37308b] sm:text-lg">
              {description}
            </p>
          )}

          {/* Actions */}
          {(assessmentLabel || videoLabel) && (
            <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-5">
              {assessmentLabel && (
                <a
                  href={assessmentHref}
                  className={`${focus} inline-flex min-h-11 min-w-[158px] max-w-full items-center justify-center gap-2 rounded-md border border-[#4936ff] bg-[#1600ff] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-[0_3px_0_rgba(22,0,255,0.12)] transition-colors hover:bg-[#1000d9] motion-reduce:transition-none`}
                >
                  {assessmentLabel}

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 shrink-0"
                  />
                </a>
              )}

              {videoLabel && (
                <a
                  href={videoHref}
                  className={`${focus} inline-flex min-h-11 min-w-[176px] max-w-full items-center justify-center gap-3 rounded-md border border-[#a395ff] bg-white/80 px-4 py-2.5 text-center text-sm font-bold text-[#080044] transition-colors hover:bg-white motion-reduce:transition-none`}
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#eae7ff] text-[#1600ff]">
                    <Play
                      aria-hidden="true"
                      className="ml-0.5 size-3 fill-current"
                    />
                  </span>

                  {videoLabel}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Bottom benefits — same position as company hero statistics */}
        <div className="relative mt-auto pt-5">
          <ul
            aria-label={benefitsLabel}
            className="m-0 grid w-full list-none grid-cols-1 gap-x-4 gap-y-5 p-0 sm:grid-cols-3 sm:gap-x-0 lg:w-[54%]"
          >
            {benefits.map(
              ({ icon: BenefitIcon, title: benefitTitle, description: benefitDescription }, index) => (
                <li
                  key={`${benefitTitle}-${index}`}
                  className={[
                    "flex min-w-0 items-center gap-2.5",
                    index > 0
                      ? "sm:border-l sm:border-[#e7e4ff] sm:pl-3"
                      : "",
                    index < benefits.length - 1 ? "sm:pr-3" : "",
                  ].join(" ")}
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eeebff] text-[#1600ff] sm:size-10">
                    <BenefitIcon
                      aria-hidden="true"
                      className="size-5 sm:size-6"
                      strokeWidth={2}
                    />
                  </span>

                  <div className="min-w-0">
                    <h2 className="text-xl font-bold leading-tight tracking-tight text-[#1600ff] xl:text-lg">
                      {benefitTitle}
                    </h2>

                    <p className="mt-1 text-[10px] leading-tight tracking-tight text-[#59529c] xl:text-xs">
                      {benefitDescription}
                    </p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}