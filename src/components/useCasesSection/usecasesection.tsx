import { LucideIcon } from "lucide-react";
import React from "react";

export interface UseCaseItem {
  title: string;
  desc: string;
  image: string;
  icon?: LucideIcon;
  href?: string;
  ctaLabel?: string;
}

interface UseCasesSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: UseCaseItem[];

  defaultHref?: string;
  defaultCtaLabel?: string;

  showCta?: boolean;
  showIcon?: boolean;

  className?: string;
  containerClassName?: string;
  gridClassName?: string;

  cardClassName?: string;
  imageClassName?: string;

  imageHeight?: string;

  animation?: boolean;
}

export default function UseCasesSection({
  eyebrow = "Use Cases",
  title,
  description,
  items,

  defaultHref = "#contact",
  defaultCtaLabel = "Learn More",

  showCta = true,
  showIcon = true,

  className = "bg-white py-16 lg:py-20",

  containerClassName = "mx-auto max-w-[1400px] px-5 lg:px-8",

  gridClassName = "mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",

  cardClassName = "",

  imageClassName = "",

  imageHeight = "h-[108px]",

  animation = true,
}: UseCasesSectionProps) {
  return (
    <section className={className}>
      <div className={containerClassName}>

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0876ed]">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-3 text-[29px] font-extrabold tracking-tight text-[#06235a] sm:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="mt-3 text-[14px] text-slate-500 sm:text-[15px]">
              {description}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className={gridClassName}>
          {items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`
                group flex h-full flex-col overflow-hidden
                rounded-2xl border border-slate-100
                bg-white
                shadow-[0_8px_30px_rgba(24,74,140,0.06)]
                transition-all duration-300
                hover:-translate-y-1.5
                hover:shadow-[0_18px_45px_rgba(24,74,140,0.12)]
                ${animation ? "animate-[fadeIn_0.5s_ease-out]" : ""}
                ${cardClassName}
              `}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${imageHeight}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`
                    h-full w-full object-cover
                    transition duration-500
                    group-hover:scale-105
                    ${imageClassName}
                  `}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06235a]/40 to-transparent" />

                {/* Top Right Icon */}
                {showIcon && item.icon && (
                  <span className="absolute right-3 top-3 text-white/90">
                   <item.icon size={20} strokeWidth={2} />
                  </span>
                )}

                {/* Bottom Icon */}
                {showIcon && item.icon && (
                  <span className="absolute bottom-0 left-4 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded-xl bg-[#0876ed] text-white shadow-lg">
                   <item.icon size={20} strokeWidth={2} />
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-4 pb-5 pt-8">
                <h3 className="text-[14px] font-extrabold text-[#06235a]">
                  {item.title}
                </h3>

                <p className="mt-1.5 flex-1 text-[11.5px] leading-relaxed text-slate-500">
                  {item.desc}
                </p>

                {/* CTA */}
                {showCta && (
                  <a
                    href={item.href || defaultHref}
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0876ed] transition-all group-hover:gap-2.5"
                  >
                    {item.ctaLabel || defaultCtaLabel}

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300"
                    >
                      →
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}