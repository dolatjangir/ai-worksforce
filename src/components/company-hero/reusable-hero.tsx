// import type { ReactNode } from "react";

// type HeroStat = {
//   value: string;
//   label: string;
//   icon: string;
// };

// type HeroButton = {
//   label: string;
//   href: string;
//   variant: "primary" | "secondary";
//   icon?: string;
// };

// type HeroResultCard = {
//   icon: string;
//   lines: string[];
// };

// type ResponsiveHeroProps = {
//   eyebrow: string;
//   title: ReactNode;
//   description: string;

//   image: {
//     src: string;
//     alt?: string;
//   };

//   buttons?: HeroButton[];

//   stats?: HeroStat[];

//   resultCard?: HeroResultCard;

//   titleId?: string;

//   className?: string;
// };

// export function ResponsiveHero({
//   eyebrow,
//   title,
//   description,
//   image,
//   buttons = [],
//   stats = [],
//   resultCard,
//   titleId = "hero-title",
//   className = "",
// }: ResponsiveHeroProps) {
//   return (
//     <section
//       aria-labelledby={titleId}
//       className={`relative isolate min-h-[85dvh] overflow-hidden rounded-2xl bg-white ${className}`}
//     >
//       {/* =====================================================
//           RIGHT-SIDE HERO IMAGE
//       ====================================================== */}
//       <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full lg:w-[65%]">
//         <img
//           src={image.src}
//           alt={image.alt ?? ""}
//           loading="eager"
//           fetchPriority="high"
//           decoding="async"
//           className="h-full w-full object-cover object-right"
//         />

//         {/* Image → content blend */}
//         <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 lg:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.95)_10%,rgba(255,255,255,0.45)_28%,transparent_48%)]" />

//         {/* Bottom image fade */}
//         <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-white/95 to-transparent" />
//       </div>

//       {/* =====================================================
//           HERO CONTAINER
//       ====================================================== */}
//       <div className="mx-auto flex min-h-[85dvh] w-full max-w-[1440px] flex-col px-5 py-7 sm:px-8 lg:px-[5.3%] lg:py-8">
//         {/* =================================================
//             HERO COPY
//         ================================================== */}
//         <div className="relative w-full pt-14 lg:max-w-[49%] lg:pt-[12vh]">
//           {/* Eyebrow */}
//           <p className="text-[9px] font-bold uppercase leading-relaxed tracking-[0.16em] text-[#1600ff] sm:text-xs">
//             {eyebrow}
//           </p>

//           {/* Title */}
//           <h1
//             id={titleId}
//             className="mt-4 text-[clamp(2rem,5.8vw,5.25rem)] font-bold leading-[0.99] tracking-[-0.045em] text-[#080044]"
//           >
//             {title}
//           </h1>

//           {/* Description */}
//           <p className="mt-3 max-w-[470px] text-base leading-[1.25] tracking-[-0.012em] text-[#37308b] sm:text-lg">
//             {description}
//           </p>

//           {/* =================================================
//               BUTTONS
//           ================================================== */}
//           {buttons.length > 0 && (
//             <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-5">
//               {buttons.map((button) => {
//                 const isPrimary = button.variant === "primary";

//                 return (
//                   <a
//                     key={`${button.label}-${button.href}`}
//                     href={button.href}
//                     className={
//                       isPrimary
//                         ? "inline-flex min-h-11 min-w-[158px] items-center justify-center gap-2 rounded-md border border-[#4936ff] bg-[#1600ff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_3px_0_rgba(22,0,255,0.12)] transition-colors hover:bg-[#1000d9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1600ff]"
//                         : "inline-flex min-h-11 min-w-[176px] items-center justify-center gap-3 rounded-md border border-[#a395ff] bg-white/80 px-4 py-2.5 text-sm font-bold text-[#080044] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1600ff]"
//                     }
//                   >
//                     {!isPrimary && (
//                       <span
//                         aria-hidden="true"
//                         className="grid size-[20px] shrink-0 place-items-center rounded-full bg-[#eae7ff] text-[#1600ff]"
//                       >
//                         <Icon
//                           name={button.icon ?? "play"}
//                           className="size-4"
//                         />
//                       </span>
//                     )}

//                     {button.label}

//                     {isPrimary && button.icon && (
//                       <span aria-hidden="true">
//                         <Icon
//                           name={button.icon}
//                           className="size-4"
//                         />
//                       </span>
//                     )}
//                   </a>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* =================================================
//             BOTTOM STATS + RESULT CARD
//         ================================================== */}
//         {(stats.length > 0 || resultCard) && (
//           <div className="relative mt-auto flex flex-col gap-6 pt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-5">
//             {/* Stats */}
//             {stats.length > 0 && (
//               <div className="grid w-full grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-0 lg:w-[74%]">
//                 {stats.map((stat, index) => (
//                   <div
//                     key={`${stat.value}-${stat.label}`}
//                     className={[
//                       "flex min-w-0 items-center gap-2.5",
//                       index === 0 ? "sm:pr-3" : "",
//                       index === 1
//                         ? "sm:border-l sm:border-[#e7e4ff] sm:px-3"
//                         : "",
//                       index === 2 ? "sm:px-3" : "",
//                       index === 3 ? "sm:pl-3" : "",
//                     ].join(" ")}
//                   >
//                     <span
//                       aria-hidden="true"
//                       className="shrink-0"
//                     >
//                       <IconCircle
//                         icon={stat.icon}
//                         className="bg-[#eeebff] text-[#1600ff]"
//                       />
//                     </span>

//                     <div className="min-w-0">
//                       <p className="text-xl font-bold leading-none tracking-tight text-[#1600ff] xl:text-2xl">
//                         {stat.value}
//                       </p>

//                       <p className="mt-1 text-[10px] leading-tight tracking-tight text-[#59529c] xl:text-xs">
//                         {stat.label}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Result card */}
//             {resultCard && (
//               <div className="w-full rounded-xl border border-white/40 bg-[#eeedff]/85 px-3 py-3 shadow-[0_10px_30px_rgba(43,38,119,0.14)] backdrop-blur-md sm:w-[194px] sm:self-end lg:shrink-0">
//                 <div className="flex items-center gap-3">
//                   <span
//                     aria-hidden="true"
//                     className="grid size-[52px] shrink-0 place-items-center rounded-full bg-[#d9d8ff] text-[#1600ff]"
//                   >
//                     <Icon
//                       name={resultCard.icon}
//                       className="size-8"
//                     />
//                   </span>

//                   <p className="text-xs font-medium leading-[1.4] tracking-tight text-[#080044]">
//                     {resultCard.lines.map((line, index) => (
//                       <span key={`${line}-${index}`}>
//                         {line}
//                         {index < resultCard.lines.length - 1 && (
//                           <br />
//                         )}
//                       </span>
//                     ))}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }