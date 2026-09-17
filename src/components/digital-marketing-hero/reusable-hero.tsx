import Image from "next/image";
import { ArrowRight, Calendar, ChartNoAxesColumnIncreasing, Clock3, FileText, Layers, Link, Play, Target, Trophy, Users, Zap } from "lucide-react";
import { GiGrowth } from "react-icons/gi";

export type MarketingMetric = {
  value: string;
  label: string;
  icon: "chart" | "clock" |"users" | "target" | "link" | "trophy" | "file-text" | "zap" | "growth" | "calendar" | "layers";
  tone: "green" | "purple" | "orange";
};

export type DigitalMarketingHeroProps = {
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
  metrics?: readonly [MarketingMetric, MarketingMetric, MarketingMetric];
};

const defaultMetrics: readonly [MarketingMetric, MarketingMetric, MarketingMetric] = [
  { value: "3x", label: "Faster Insights", icon: "chart", tone: "green" },
  { value: "70%", label: "Less Time on Reporting", icon: "clock", tone: "purple" },
  { value: "5x", label: "Higher ROI", icon: "chart", tone: "orange" },
];

const tones = {
  green: "bg-[#dcf5ee] text-[#18ad8d]",
  purple: "bg-[#ebe7ff] text-[#3420dc]",
  orange: "bg-[#fff0dc] text-[#ed991a]",
} as const;
const icons = { chart: ChartNoAxesColumnIncreasing, clock: Clock3, users: Users, target: Target, link: Link, trophy: Trophy , "file-text": FileText, zap: Zap, growth: GiGrowth, calendar: Calendar, layers: Layers } as const;
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3210e8]";

/**
 * Uses the complete right-hand artwork, including its dashboard cards and caption.
 * Place it at public/digital-marketing-hero-right-img.png.
 */
export default function DigitalMarketingHero({
  eyebrow = "DATA-DRIVEN GROWTH. SMARTER DECISIONS.",
  title = "AI Marketing",
  highlightedTitle = "Analytics",
  subtitle = "Turn data into growth with AI.",
  description = "Let AI analyze your marketing data, uncover insights, and predict what works — so you can make smarter decisions, optimize your campaigns, and achieve higher ROI with less effort.",
  imageSrc = "/digital-marketing-hero-right-img.png",
  imageAlt = "AI marketing analyst with marketing overview, campaign insights, audience analysis, predictive analytics, ROI tracking, channel performance and AI recommendations.",
  primaryLabel = "Book a Free Consultation",
  primaryHref = "#contact",
  secondaryLabel = "See It in Action",
  secondaryHref = "#how-it-works",
  metrics = defaultMetrics,
}: DigitalMarketingHeroProps = {}) {
  return (
    <section aria-label={`${title} ${highlightedTitle}`} className="relative isolate overflow-hidden bg-[#f8faff] font-sans text-[#080735]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(218,210,255,0.55)_0%,transparent_60%)]" />

      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-5 px-5 pt-9 sm:px-8 sm:pt-10 lg:grid-cols-[48%_52%] lg:gap-0 lg:py-0 lg:pl-[5.3%] lg:pr-[1.8%]">
        <div className="relative z-10 min-w-0 lg:py-9 lg:pr-2 xl:py-12">
          <p className="text-[9px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-[#312282] sm:text-[10px] xl:text-xs">
            {eyebrow}
          </p>

          <h1 className="mt-2 text-[clamp(2.5rem,5.15vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.045em]">
            <span className="block">{title}</span>
            <span className="block text-[#2e0bdf]">{highlightedTitle}</span>
          </h1>

          <p className="mt-3 text-xl font-bold leading-[1.25] tracking-[-0.025em] xl:text-[1.75rem]">
            {subtitle}
          </p>

          <p className="mt-2 max-w-[39rem] text-base leading-[1.45] text-[#55566e] xl:text-xl">
            {description}
          </p>

          <div className="mt-4 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap xl:mt-5 xl:gap-4">
            <a href={primaryHref} className={`${focus} inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-transparent bg-[#3010e8] px-5 py-3 text-xs font-semibold text-white shadow-[0_3px_10px_rgba(48,16,232,0.1)] transition-colors hover:bg-[#2509c5] motion-reduce:transition-none xl:min-h-12 xl:px-6 xl:text-sm`}>
              {primaryLabel}
              <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
            </a>
            <a href={secondaryHref} className={`${focus} inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#858694] bg-white/40 px-5 py-3 text-xs font-bold text-[#080735] transition-colors hover:bg-white motion-reduce:transition-none xl:min-h-12 xl:px-6 xl:text-sm`}>
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#e8e4ff] text-[#3210e8]">
                <Play aria-hidden="true" className="ml-0.5 size-3" strokeWidth={2.5} />
              </span>
              {secondaryLabel}
            </a>
          </div>

          <ul aria-label="Marketing analytics benefits" className="mt-6 grid list-none grid-cols-1 gap-4 p-0 min-[480px]:grid-cols-[1fr_1.3fr_0.85fr] min-[480px]:gap-3 xl:mt-8">
            {metrics.map((metric, index) => {
              const Icon = icons[metric.icon];
              return (
                <li key={`${metric.label}-${index}`} className="flex min-w-0 items-center gap-2 xl:gap-3">
                  <span className={`grid size-10 shrink-0 place-items-center rounded-full xl:size-12 ${tones[metric.tone]}`}>
                    <Icon aria-hidden="true" className="size-6 xl:size-7" strokeWidth={3} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-2xl font-extrabold leading-none tracking-tight text-[#2e0bdf] xl:text-3xl">{metric.value}</p>
                    <p className="mt-1 text-[11px] leading-snug text-[#55566e] xl:text-sm">{metric.label}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mx-auto aspect-[1.38/1] w-full max-w-[760px] min-w-0 self-stretch lg:aspect-auto lg:max-w-none">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1600px) 773px, (min-width: 1024px) 49vw, (min-width: 824px) 760px, 100vw"
            loading="eager"
            fetchPriority="high"
            className="object-contain object-bottom lg:object-center"
          />
        </div>
      </div>
    </section>
  );
}
