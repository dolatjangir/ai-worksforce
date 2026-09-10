"use client";

import { useState } from "react";

type IconName =
  | "image"
  | "video"
  | "megaphone"
  | "palette"
  | "instagram"
  | "pen"
  | "calendar"
  | "text"
  | "share"
  | "settings"
  | "bulb"
  | "file"
  | "play"
  | "chart"
  | "growth"
  | "users"
  | "clock"
  | "arrow";

const assets = {
  woman:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=90",
  fitness:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=90",
  profile:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=90",
};

function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  const icons: Record<IconName, React.ReactNode> = {
    image: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8" cy="9" r="1.4" />
        <path d="m4 17 5-5 3 3 3-3 5 5" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),
    megaphone: (
      <>
        <path d="m3 12 13-6v12L3 12Z" />
        <path d="M16 10h3a2 2 0 0 1 0 4h-3M6 14l1.5 5H11l-1-4" />
      </>
    ),
    palette: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18h1.2c1.5 0 2.1-1.8 1-2.8-.8-.8-.3-2.2.8-2.2h1A5 5 0 0 0 12 3Z" />
        <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
        <circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="14" cy="8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    pen: <path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Zm9-12 3 3" />,
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4m8-4v4M4 10h16m-11 4h6m-6 3h4" />
      </>
    ),
    text: (
      <>
        <path d="M5 4h14M12 4v16M8 20h8" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="19" r="2" />
        <path d="m8 11 8-5m-8 7 8 5" />
      </>
    ),
    settings: (
      <>
        <path d="m12 2 1.1 2.8 3 .4 1.8 2.5-1.4 2.7 1.4 2.7-1.8 2.5-3 .4L12 22l-1.1-2.8-3-.4-1.8-2.5 1.4-2.7-1.4-2.7 1.8-2.5 3-.4L12 2Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    bulb: (
      <>
        <path d="M9 18h6m-5 3h4m3-10a5 5 0 1 0-10 0c0 2 1.2 3.1 2.2 4.2.6.7.8 1.4.8 2.3h4c0-.9.2-1.6.8-2.3C15.8 14.1 17 13 17 11Z" />
        <path d="M12 2V1m7 4 .7-.7M5 5l-.7-.7" />
      </>
    ),
    file: (
      <>
        <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5M8 13h8M8 17h6" />
      </>
    ),
    play: <path d="m8 5 11 7-11 7V5Z" fill="currentColor" stroke="none" />,
    chart: (
      <>
        <path d="M4 20V13M10 20V9M16 20V4M22 20H2" />
      </>
    ),
    growth: <path d="M4 19 10 13l4 3 6-9M15 7h5v5" />,
    users: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21v-2.5a7 7 0 0 1 14 0V21M5 7a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function IconBubble({
  icon,
  tone = "bg-[#eae7ff] text-brand-purple",
  small = false,
}: {
  icon: IconName;
  tone?: string;
  small?: boolean;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${
        small ? "size-10" : "size-14"
      } ${tone}`}
    >
      <Icon name={icon} className={small ? "size-5" : "size-7"} />
    </span>
  );
}

export default function AICreativeVideoPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    "Home",
    "What AIWorksForce?",
    "How it Works",
    "Our AI WorkFlow",
    "Solutions",
    "Industries",
    "Case Studies",
    "Resources",
    "About",
  ];

  const solutions = [
    {
      icon: "pen" as IconName,
      tone: "bg-rose-100 text-rose-500",
      title: "AI Image Generation",
      text: "Create high-quality, on-brand images for social media, ads, and websites.",
    },
    {
      icon: "video" as IconName,
      tone: "bg-violet-100 text-brand-purple",
      title: "AI Video Production",
      text: "Turn ideas into professional videos with AI — scripts, visuals, voiceovers, and more.",
    },
    {
      icon: "calendar" as IconName,
      tone: "bg-emerald-100 text-emerald-500",
      title: "Ad Creatives",
      text: "Design high-converting creatives for Google Ads, Meta Ads, LinkedIn Ads and more.",
    },
    {
      icon: "text" as IconName,
      tone: "bg-orange-100 text-orange-500",
      title: "Brand Consistency",
      text: "Maintain a consistent brand style across all your visual content with AI.",
    },
    {
      icon: "share" as IconName,
      tone: "bg-sky-100 text-brand-sky",
      title: "Social Media Content",
      text: "Generate engaging posts, reels, carousels, and stories in minutes.",
    },
    {
      icon: "settings" as IconName,
      tone: "bg-rose-100 text-rose-500",
      title: "Creative Optimization",
      text: "A/B test and optimize creatives for better performance and ROI.",
    },
  ];

  const process = [
    {
      number: "01",
      icon: "bulb" as IconName,
      title: "Discover",
      text: "We understand your goals, audience, and brand style.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      number: "02",
      icon: "file" as IconName,
      title: "Plan",
      text: "Our AI and creative experts create a tailored content plan.",
      tone: "bg-emerald-100 text-emerald-500",
    },
    {
      number: "03",
      icon: "image" as IconName,
      title: "Create",
      text: "We generate images, videos, and ad creatives using AI.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      number: "04",
      icon: "play" as IconName,
      title: "Review",
      text: "You review and fine-tune the content with our team.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      number: "05",
      icon: "chart" as IconName,
      title: "Launch & Optimize",
      text: "We publish, track performance, and keep improving.",
      tone: "bg-rose-100 text-rose-500",
    },
  ];

  const button =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 text-[12px] font-bold transition duration-200 hover:-translate-y-0.5";

  return (
    <div className="overflow-x-hidden bg-white font-sans text-brand-dark">
    

      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden rounded-b-[20px] bg-[linear-gradient(112deg,#fafbff_0%,#f5f7ff_48%,#f0efff_100%)]"
        >
          <div className="absolute top-[-130px] right-[-75px] -z-10 size-[690px] rounded-full bg-[radial-gradient(circle,#b5acff95_0%,#d9dcff40_42%,transparent_70%)]" />

          <div className="relative mx-auto grid min-h-[430px] max-w-[1220px] lg:grid-cols-[1.02fr_1fr]">
            <div className="z-10 px-6 pt-8 pb-6 lg:pl-6">
              <p className="text-[10px] font-bold tracking-[0.28em] text-brand-purple">
                IDEAS THAT MOVE PEOPLE
              </p>

              <h1 className="mt-2 text-[49px] leading-[0.92] font-bold tracking-[-2px] sm:text-[61px] lg:text-[63px]">
                AI <span className="text-brand-purple">Creative &</span>
                <br />
                Video
              </h1>

              <h2 className="mt-3 text-[18px] font-bold tracking-[-0.5px] sm:text-[20px]">
                Stunning content. Smarter production. Bigger impact.
              </h2>

              <p className="mt-2 max-w-[510px] text-[15px] leading-[1.5] text-brand-text">
                Let AI bring your ideas to life. From eye-catching graphics to scroll-stopping
                videos, we create high-quality, on-brand creatives that engage your audience,
                boost your campaigns, and drive real business results — faster and at lower costs.
              </p>

              <div className="mt-3 flex flex-wrap gap-4">
                <a href="#contact" className={`${button} bg-brand-purple text-white hover:bg-[#4820cc]`}>
                  Book a Free Consultation <span>→</span>
                </a>
                <a
                  href="#how-it-works"
                  className={`${button} border border-[#7774af] bg-white/50 text-brand-dark hover:bg-white`}
                >
                  <span className="grid size-5 place-items-center rounded-full bg-violet-100 text-[9px] text-brand-purple">
                    ▶
                  </span>
                  See It in Action
                </a>
              </div>

              <div className="mt-6 grid max-w-[530px] grid-cols-3 gap-3">
                {[
                  ["growth", "3x", "Faster Production"],
                  ["calendar", "70%", "Lower Creative Costs"],
                  ["chart", "5x", "Higher Engagement"],
                ].map(([icon, value, label], index) => (
                  <div
                    key={label}
                    className={`flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left ${
                      index > 0 ? "border-l border-indigo-100 pl-3" : ""
                    }`}
                  >
                    <IconBubble icon={icon as IconName} small />
                    <div>
                      <p className="text-[25px] leading-none font-bold text-brand-purple">{value}</p>
                      <p className="mt-1 text-[10px] text-brand-text-muted">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-[425px] w-full max-w-[610px] lg:h-auto">
              <div className="absolute top-[45px] left-1/2 size-[365px] -translate-x-1/2 rounded-full border-[20px] border-white/15 bg-[#b7afff]/15" />
              <div className="absolute top-[86px] left-1/2 size-[278px] -translate-x-1/2 rounded-full border-[18px] border-white/20" />

              <img
                src={assets.woman}
                alt="AI creative strategist"
                className="absolute bottom-0 left-[25%] z-10 h-[82%] w-[47%] rounded-t-[100px] object-cover object-top shadow-[0_15px_45px_rgba(48,42,185,.15)]"
              />

              <div className="absolute top-8 left-2 z-20 grid gap-2">
                {[
                  ["image", "AI Image Generation"],
                  ["play", "AI Video Creation"],
                  ["megaphone", "AI Ad Creatives"],
                  ["palette", "Brand Consistency"],
                  ["instagram", "Social Media Content"],
                ].map(([icon, text], index) => (
                  <div
                    key={text}
                    className={`flex items-center gap-3 rounded-xl bg-white/90 px-3 py-2.5 shadow-[0_5px_20px_rgba(51,42,157,.1)] ${
                      index < 2 ? "w-[170px]" : "w-[185px]"
                    }`}
                  >
                    <span
                      className={`grid size-8 place-items-center rounded-md ${
                        icon === "play"
                          ? "bg-rose-500 text-white"
                          : icon === "instagram"
                            ? "bg-gradient-to-br from-orange-400 via-rose-500 to-violet-600 text-white"
                            : "text-brand-purple"
                      }`}
                    >
                      <Icon name={icon as IconName} className="size-5" />
                    </span>
                    <span className="text-[10px] font-bold">{text}</span>
                  </div>
                ))}
              </div>

              <div className="absolute top-5 right-3 z-20 w-[180px] space-y-2">
                <div className="rounded-[14px] bg-white/90 p-2 shadow-[0_5px_20px_rgba(51,42,157,.1)]">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold">
                    <span className="text-[23px] text-brand-purple">✦</span>
                    AI-Powered
                    <br />
                    Video Creation
                  </div>
                  <div className="relative h-[117px] overflow-hidden rounded-lg bg-[linear-gradient(135deg,#0b0b45,#5629ff,#c3c4ff)]">
                    <p className="absolute top-3 left-3 z-10 text-[13px] leading-[0.9] font-bold text-white">
                      Turn Ideas
                      <br />
                      Into Impact
                    </p>
                    <span className="absolute bottom-3 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border-2 border-white text-white">
                      ▶
                    </span>
                    <span className="absolute bottom-1 left-3 right-3 h-1 rounded-full bg-white/35">
                      <span className="block h-full w-1/2 rounded-full bg-white" />
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-[14px] bg-white/90 p-2 shadow-[0_5px_20px_rgba(51,42,157,.1)]">
                  <img src={assets.woman} alt="" className="size-[60px] rounded-lg object-cover object-top" />
                  <p className="text-[10px] leading-tight font-bold">
                    Engaging
                    <br />
                    Creatives
                    <br />
                    Higher Sales
                  </p>
                </div>
              </div>

              <div className="absolute right-5 bottom-5 z-20 rotate-[-13deg] font-hand text-[19px] leading-tight text-brand-purple">
                Better
                <br />
                Creatives
                <br />
                Bigger
                <br />
                Results
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 pt-5">
          <p className="text-center text-[9px] font-bold tracking-[0.28em] text-brand-purple">
            COMPLETE AI CREATIVE & VIDEO SOLUTIONS
          </p>
          <h2 className="mt-1 text-center text-[25px] leading-tight font-bold tracking-[-1px] sm:text-[29px]">
            Everything You Need for High-Impact Visual Content
          </h2>
          <p className="mt-1 text-center text-[14px] text-brand-text">
            From concept to final cut, our AI-powered creative solutions cover it all.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {solutions.map((item) => (
              <article
                key={item.title}
                className="rounded-[13px] bg-[linear-gradient(135deg,#fafbff,#f7f8ff)] px-3 py-4 text-center"
              >
                <IconBubble icon={item.icon} tone={item.tone} />
                <h3 className="mt-3 text-[13px] leading-[1.25] font-bold">{item.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.45] text-brand-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto mt-4 max-w-[1240px] px-5">
          <div className="rounded-[14px] bg-[linear-gradient(135deg,#fafcff,#f5f7ff)] px-4 py-3">
            <p className="text-center text-[9px] font-bold tracking-[0.28em] text-brand-purple">
              HOW IT WORKS
            </p>
            <h2 className="mt-1 text-center text-[26px] leading-tight font-bold tracking-[-0.8px]">
              From Idea to Impact
            </h2>
            <p className="mt-1 text-center text-[14px] text-brand-text">
              A simple, streamlined process to create stunning visuals and videos with AI.
            </p>

            <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {process.map((item, index) => (
                <article key={item.title} className="relative rounded-xl bg-white/40 px-3 py-2 text-center">
                  <IconBubble icon={item.icon} tone={item.tone} />
                  {index < process.length - 1 && (
                    <span className="absolute top-4 -right-4 hidden text-[29px] text-brand-purple lg:block">
                      →
                    </span>
                  )}
                  <p className="mt-1.5 text-[12px] font-bold">{item.number}</p>
                  <h3 className="text-[13px] font-bold">{item.title}</h3>
                  <p className="mt-1 text-[12px] leading-[1.4] text-brand-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-3 max-w-[1240px] px-5">
          <p className="text-[9px] font-bold tracking-[0.28em] text-brand-purple">OUR AI CREATIVE WORK</p>
          <h2 className="mt-1 text-[25px] leading-tight font-bold">Real Content, Real Results.</h2>
          <p className="mt-1 text-[13px] text-brand-text">
            Stunning visuals and videos created with AI for real businesses.
          </p>

          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              ["MOVE FURTHER", "bg-[linear-gradient(135deg,#230043,#7621dc,#6572ff)]"],
              ["NATURAL BEAUTY", "bg-[linear-gradient(135deg,#e2bc75,#f8ecd0,#b47a30)]"],
              ["DRIVE THE FUTURE", "bg-[linear-gradient(135deg,#0b1c32,#172f4e,#69829a)]"],
              ["EXPLORE MORE", "bg-[linear-gradient(135deg,#1988c4,#64cae8,#246781)]"],
              ["GOOD FOOD", "bg-[linear-gradient(135deg,#75220b,#dc7c20,#f5b04d)]"],
              ["STYLE THAT SPEAKS", "bg-[linear-gradient(135deg,#8c4f2c,#e5b289,#f4ddcd)]"],
            ].map(([title, background]) => (
              <article
                key={title}
                className={`relative flex h-[95px] items-start overflow-hidden rounded-lg p-3 text-[15px] leading-[0.9] font-bold text-white ${background}`}
              >
                <span className="max-w-[88px]">{title}</span>
                <span className="absolute bottom-2 left-1/2 grid size-8 -translate-x-1/2 place-items-center rounded-full border border-white text-[10px]">
                  ▶
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-3 grid max-w-[1240px] gap-4 px-5 lg:grid-cols-2">
          <div>
            <p className="text-[9px] font-bold tracking-[0.28em] text-brand-purple">
              REAL RESULTS. REAL BUSINESSES.
            </p>
            <h2 className="mt-1 text-[25px] leading-tight font-bold">Creative Success with AI</h2>
            <p className="mt-1 text-[13px] leading-[1.4] text-brand-text">
              See how businesses like yours are getting better engagement, more conversions, and higher ROI.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["growth", "312%", "Increased Ad Engagement", "bg-emerald-100 text-emerald-500"],
                ["users", "3x", "More Clicks", "bg-violet-100 text-brand-purple"],
                ["clock", "70%", "Less Production Time", "bg-orange-100 text-orange-500"],
                ["chart", "5x", "Higher Conversions", "bg-rose-100 text-rose-500"],
              ].map(([icon, value, label, tone]) => (
                <div key={label} className="rounded-xl bg-[#fafbff] p-3 text-center">
                  <IconBubble icon={icon as IconName} tone={tone} small />
                  <p className="mt-1.5 text-[23px] leading-none font-bold">{value}</p>
                  <p className="mt-1 text-[10px] leading-tight text-brand-text">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <article className="flex flex-col gap-5 rounded-[15px] bg-[#f8f9ff] p-5 sm:flex-row sm:items-center">
            <div className="relative h-[145px] w-full overflow-hidden rounded-xl bg-[#090d28] sm:w-[155px]">
              <img src={assets.fitness} alt="Fitness campaign" className="h-full w-full object-cover opacity-75" />
              <span className="absolute top-4 left-3 text-[18px] leading-none font-bold text-white">
                FITNESS
                <br />
                REDEFINED
              </span>
              <span className="absolute bottom-3 left-1/2 grid size-9 -translate-x-1/2 place-items-center rounded-full border border-white text-white">
                ▶
              </span>
            </div>

            <div>
              <span className="rounded-full bg-violet-100 px-2 py-1 text-[8px] font-bold tracking-wider text-brand-purple">
                CASE STUDY
              </span>
              <h3 className="mt-2 text-[16px] leading-tight font-bold">
                Fitness Brand: 4x Sales with AI Video Ads
              </h3>
              <p className="mt-2 text-[11px] leading-[1.4] text-brand-text">
                With our AI creative and video strategy, this fitness brand launched high-converting video ads,
                increased engagement by 312%, and achieved 4x more sales in just 2 months.
              </p>
              <div className="mt-3 flex gap-6">
                {[
                  ["312%", "More Engagement"],
                  ["4x", "More Sales"],
                  ["70%", "Less Production Time"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-[20px] leading-none font-bold text-brand-purple">{value}</p>
                    <p className="mt-1 text-[9px] text-brand-text">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-3 max-w-[1240px] px-5">
          <div className="flex flex-col items-center gap-5 rounded-[15px] bg-[linear-gradient(110deg,#f6f8ff,#f3f6ff)] px-5 py-4 lg:flex-row">
            <img
              src={assets.profile}
              alt="Karan Mehta"
              className="size-[105px] shrink-0 rounded-full border-4 border-indigo-100 object-cover"
            />

            <div className="flex-1">
              <span className="grid size-8 place-items-center rounded-full bg-white text-[31px] leading-none font-bold text-brand-purple">
                “
              </span>
              <p className="mt-1 text-[12px] leading-[1.45] text-brand-text">
                “AI WorksForce completely transformed our creative process. We now produce high-quality
                videos and ad creatives in a fraction of the time — and the results have never been better.”
              </p>
              <p className="mt-2 text-[11px] font-bold">Karan Mehta</p>
              <p className="text-[10px] text-brand-text">Marketing Director, FitLife (Fitness Brand)</p>
            </div>

            <div className="grid w-full grid-cols-3 divide-x divide-indigo-100 lg:w-[390px]">
              {[
                ["growth", "3x", "More Revenue", "bg-emerald-100 text-emerald-500"],
                ["clock", "70%", "Time Saved", "bg-violet-100 text-brand-purple"],
                ["users", "5x", "Higher Engagement", "bg-violet-100 text-brand-purple"],
              ].map(([icon, value, label, tone]) => (
                <div key={label} className="px-2 text-center">
                  <IconBubble icon={icon as IconName} tone={tone} small />
                  <p className="mt-1.5 text-[23px] leading-none font-bold">{value}</p>
                  <p className="mt-1 text-[10px] text-brand-text">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative isolate mx-1 mt-3 overflow-hidden rounded-[14px] bg-[linear-gradient(110deg,#07154d,#0c1772_55%,#2836e4)] px-5 py-5 text-center text-white"
        >
          <div className="absolute inset-0 -z-10 opacity-30 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_10px,#7180ff_11px_12px)]" />
          <p className="text-[9px] tracking-[0.27em]">READY TO CREATE STUNNING CONTENT?</p>
          <h2 className="mt-2 text-[25px] leading-tight font-semibold">Let’s Bring Your Ideas to Life with AI</h2>
          <p className="mt-1 text-[12px]">
            Get a custom AI creative & video strategy tailored to your business goals.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@example.com" className={`${button} bg-white text-brand-dark`}>
              Book a Free Consultation <span>→</span>
            </a>
            <a href="#home" className={`${button} border border-white/60 text-white`}>
              Explore Our Creative Solutions
            </a>
          </div>
        </section>
      </main>

     
    </div>
  );
}