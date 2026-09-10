"use client";

import { useState, type ReactNode } from "react";

type IconName =
  | "database"
  | "chart"
  | "brain"
  | "users"
  | "target"
  | "report"
  | "search"
  | "bulb"
  | "settings"
  | "growth"
  | "clock"
  | "mail"
  | "arrow";

const images = {
  analyst:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=90",
  caseStudy:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=90",
  testimonial:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=90",
};

function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    database: (
      <>
        <ellipse cx="12" cy="5.5" rx="7" ry="3" />
        <path d="M5 5.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5M5 10.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
      </>
    ),
    chart: <path d="M4 20V13M10 20V8M16 20V3M22 20H2" />,
    brain: (
      <>
        <path d="M9.5 4.5A3.5 3.5 0 0 0 4 7.4a3.5 3.5 0 0 0 .4 6.7A3.6 3.6 0 0 0 8 19h1.5m5-14.5A3.5 3.5 0 0 1 20 7.4a3.5 3.5 0 0 1-.4 6.7A3.6 3.6 0 0 1 16 19h-1.5" />
        <path d="M12 3v18M9.5 8.5c1.5-.3 2.5.3 2.5 1.5m2-1.5c-1.5-.3-2.5.3-2.5 1.5m-2 4c1.5.3 2.5-.3 2.5-1.5m2 1.5c-1.5.3-2.5-.3-2.5-1.5" />
      </>
    ),
    users: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21v-2.5a7 7 0 0 1 14 0V21M5 7a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="m15 9 6-6M17 3h4v4" />
      </>
    ),
    report: (
      <>
        <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5M8 13h8M8 17h6" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    bulb: (
      <>
        <path d="M9 18h6m-5 3h4m3-10a5 5 0 1 0-10 0c0 2 1.2 3.1 2.2 4.2.6.7.8 1.4.8 2.3h4c0-.9.2-1.6.8-2.3C15.8 14.1 17 13 17 11Z" />
        <path d="M12 2V1m7 4 .7-.7M5 5l-.7-.7" />
      </>
    ),
    settings: (
      <>
        <path d="m12 2 1.1 2.8 3 .4 1.8 2.5-1.4 2.7 1.4 2.7-1.8 2.5-3 .4L12 22l-1.1-2.8-3-.4-1.8-2.5 1.4-2.7-1.4-2.7 1.8-2.5 3-.4L12 2Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    growth: <path d="M4 19 10 13l4 3 6-9M15 7h5v5" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
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
      {paths[name]}
    </svg>
  );
}

function Bubble({
  icon,
  tone = "bg-[#eae8ff] text-brand-purple",
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

export default function AIMarketingAnalyticsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
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
      icon: "database" as IconName,
      title: "Data Integration",
      text: "Connect all your marketing data from multiple platforms in one place.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      icon: "chart" as IconName,
      title: "Real-Time Analytics",
      text: "Get live insights into campaign performance, audience behavior, and revenue impact.",
      tone: "bg-emerald-100 text-emerald-500",
    },
    {
      icon: "brain" as IconName,
      title: "Predictive Insights",
      text: "Use AI to predict trends, identify opportunities, and prevent under-performance.",
      tone: "bg-rose-100 text-rose-500",
    },
    {
      icon: "users" as IconName,
      title: "Audience Intelligence",
      text: "Understand your audience better with AI-powered segmentation and behavior analysis.",
      tone: "bg-orange-100 text-orange-500",
    },
    {
      icon: "target" as IconName,
      title: "Campaign Optimization",
      text: "Get AI-driven recommendations to improve performance and maximize ROI.",
      tone: "bg-sky-100 text-brand-sky",
    },
    {
      icon: "report" as IconName,
      title: "Custom Reporting",
      text: "Automate reports and get easy-to-understand insights tailored to your goals.",
      tone: "bg-emerald-100 text-emerald-500",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: "search" as IconName,
      title: "Connect",
      text: "We integrate your marketing data from all channels.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      number: "02",
      icon: "database" as IconName,
      title: "Analyze",
      text: "Our AI analyzes data to find patterns and insights.",
      tone: "bg-emerald-100 text-emerald-500",
    },
    {
      number: "03",
      icon: "bulb" as IconName,
      title: "Discover",
      text: "We uncover opportunities, trends, and areas for improvement.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      number: "04",
      icon: "settings" as IconName,
      title: "Optimize",
      text: "Get AI-driven recommendations to take action.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      number: "05",
      icon: "chart" as IconName,
      title: "Grow",
      text: "Implement changes and achieve higher ROI with measurable results.",
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

          <div className="relative mx-auto grid min-h-[440px] max-w-[1220px] lg:grid-cols-[1.02fr_1fr]">
            <div className="z-10 px-6 pt-8 pb-6 lg:pl-6">
              <p className="text-[10px] font-bold tracking-[0.28em] text-brand-purple">
                DATA-DRIVEN GROWTH. SMARTER DECISIONS.
              </p>

              <h1 className="mt-2 text-[49px] leading-[0.92] font-bold tracking-[-2px] sm:text-[61px] lg:text-[63px]">
                AI Marketing
                <br />
                <span className="text-brand-purple">Analytics</span>
              </h1>

              <h2 className="mt-3 text-[18px] font-bold tracking-[-0.5px] sm:text-[20px]">
                Turn data into growth with AI.
              </h2>

              <p className="mt-2 max-w-[510px] text-[15px] leading-[1.5] text-brand-text">
                Let AI analyze your marketing data, uncover insights, and predict what works — so
                you can make smarter decisions, optimize your campaigns, and achieve higher ROI with less effort.
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
                  ["chart", "3x", "Faster Insights", "bg-emerald-100 text-emerald-500"],
                  ["clock", "70%", "Less Time on Reporting", "bg-violet-100 text-brand-purple"],
                  ["growth", "5x", "Higher ROI", "bg-orange-100 text-orange-500"],
                ].map(([icon, value, label, tone], index) => (
                  <div
                    key={label}
                    className={`flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left ${
                      index > 0 ? "border-l border-indigo-100 pl-3" : ""
                    }`}
                  >
                    <Bubble icon={icon as IconName} tone={tone} small />
                    <div>
                      <p className="text-[25px] leading-none font-bold text-brand-purple">{value}</p>
                      <p className="mt-1 text-[10px] text-brand-text-muted">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-[435px] w-full max-w-[610px] lg:h-auto">
              <div className="absolute top-[45px] left-1/2 size-[365px] -translate-x-1/2 rounded-full border-[20px] border-white/15 bg-[#b7afff]/15" />
              <div className="absolute top-[86px] left-1/2 size-[278px] -translate-x-1/2 rounded-full border-[18px] border-white/20" />

              <img
                src={images.analyst}
                alt="Marketing data analyst"
                className="absolute bottom-0 left-[25%] z-10 h-[82%] w-[47%] rounded-t-[100px] object-cover object-top shadow-[0_15px_45px_rgba(48,42,185,.15)]"
              />

              <div className="absolute top-7 left-2 z-20 grid gap-2">
                <div className="w-[164px] rounded-xl bg-white/90 p-3 shadow-[0_5px_20px_rgba(51,42,157,.1)]">
                  <p className="text-[10px] font-bold">Marketing Overview</p>
                  <p className="mt-1 text-[19px] font-bold text-emerald-500">↑ 256%</p>
                  <p className="text-[9px] text-brand-text-muted">Growth in Leads</p>
                  <svg viewBox="0 0 140 52" className="mt-2 h-10 w-full">
                    <path
                      d="M5 42 30 32 56 35 78 30 101 10 123 17 138 3"
                      fill="none"
                      stroke="#3124ff"
                      strokeWidth="2"
                    />
                    {[5, 30, 56, 78, 101, 123, 138].map((x, i) => (
                      <circle key={x} cx={x} cy={[42, 32, 35, 30, 10, 17, 3][i]} r="2.6" fill="#3124ff" />
                    ))}
                  </svg>
                </div>

                {[
                  ["brain", "Campaign Insights"],
                  ["users", "Audience Analysis"],
                  ["target", "Predictive Analytics"],
                  ["chart", "ROI Tracking"],
                ].map(([icon, text]) => (
                  <div
                    key={text}
                    className="flex w-[164px] items-center gap-3 rounded-lg bg-white/90 px-3 py-2 shadow-[0_5px_20px_rgba(51,42,157,.1)]"
                  >
                    <Icon name={icon as IconName} className="size-6 text-brand-purple" />
                    <span className="text-[9px] font-bold">{text}</span>
                  </div>
                ))}
              </div>

              <div className="absolute top-4 right-3 z-20 w-[178px] space-y-2">
                <div className="rounded-[14px] bg-white/90 p-3 shadow-[0_5px_20px_rgba(51,42,157,.1)]">
                  <p className="mb-2 text-[10px] font-bold">Channel Performance</p>
                  {[
                    ["Google Ads", "89%", "from-blue-500 to-indigo-400", "w-[89%]"],
                    ["Social Media", "72%", "from-sky-500 to-blue-300", "w-[72%]"],
                    ["Email", "68%", "from-emerald-500 to-emerald-200", "w-[68%]"],
                    ["SEO", "62%", "from-yellow-400 to-amber-200", "w-[62%]"],
                    ["Paid Social", "58%", "from-rose-500 to-pink-300", "w-[58%]"],
                  ].map(([label, value, gradient, width]) => (
                    <div key={label} className="mt-1.5">
                      <div className="mb-1 flex justify-between text-[8px]">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#eef0ff]">
                        <div className={`h-full rounded-full bg-gradient-to-r ${gradient} ${width}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[14px] bg-white/90 p-3 shadow-[0_5px_20px_rgba(51,42,157,.1)]">
                  <p className="mb-2 text-[10px] font-bold">AI Recommendations</p>
                  {[
                    "Increase ad spend on top performing channels",
                    "Target high-converting audiences",
                    "Optimize content for better engagement",
                  ].map((item) => (
                    <p key={item} className="mt-2 flex gap-2 text-[9px] leading-[1.3] text-brand-text">
                      <span className="grid size-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-500">
                        ✓
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-8 left-[39%] z-20 w-[130px] rounded-xl bg-white/90 p-3 shadow-[0_5px_20px_rgba(51,42,157,.12)]">
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-full bg-sky-100 text-xl">🤖</span>
                  <p className="text-[10px] font-bold">
                    Your AI
                    <br />
                    Marketing Analyst
                  </p>
                </div>
                <p className="mt-2 text-[9px] leading-[1.3] text-brand-text">
                  Find Insights
                  <br />
                  Predict Trends
                  <br />
                  Drive Growth
                </p>
              </div>

              <div className="absolute right-5 bottom-4 z-20 rotate-[-13deg] font-hand text-[19px] leading-tight text-brand-purple">
                Smarter
                <br />
                Data
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
            COMPLETE AI MARKETING ANALYTICS SOLUTIONS
          </p>
          <h2 className="mt-1 text-center text-[25px] leading-tight font-bold tracking-[-1px] sm:text-[29px]">
            Everything You Need to Understand, Optimize & Grow
          </h2>
          <p className="mt-1 text-center text-[14px] text-brand-text">
            From data collection to actionable insights, our AI-powered analytics solutions cover it all.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {solutions.map((item) => (
              <article
                key={item.title}
                className="rounded-[13px] bg-[linear-gradient(135deg,#fafbff,#f7f8ff)] px-3 py-4 text-center"
              >
                <Bubble icon={item.icon} tone={item.tone} />
                <h3 className="mt-3 text-[13px] leading-[1.2] font-bold">{item.title}</h3>
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
              From Data to Decisions
            </h2>
            <p className="mt-1 text-center text-[14px] text-brand-text">
              A simple, streamlined process to turn your marketing data into measurable growth.
            </p>

            <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {steps.map((item, index) => (
                <article key={item.title} className="relative rounded-xl bg-white/40 px-3 py-2 text-center">
                  <Bubble icon={item.icon} tone={item.tone} />
                  {index < steps.length - 1 && (
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

        <section className="mx-auto mt-3 grid max-w-[1240px] gap-4 px-5 lg:grid-cols-2">
          <div>
            <p className="text-[9px] font-bold tracking-[0.28em] text-brand-purple">
              REAL RESULTS. REAL BUSINESSES.
            </p>
            <h2 className="mt-1 text-[25px] leading-tight font-bold">Marketing Analytics Success with AI</h2>
            <p className="mt-1 text-[13px] leading-[1.4] text-brand-text">
              See how businesses like yours are making smarter decisions and achieving better results with AI WorksForce.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["growth", "312%", "Increase in Marketing ROI", "bg-emerald-100 text-emerald-500"],
                ["users", "3x", "More Qualified Leads", "bg-violet-100 text-brand-purple"],
                ["clock", "70%", "Less Time on Reporting", "bg-orange-100 text-orange-500"],
                ["chart", "5x", "Faster Decision-Making", "bg-rose-100 text-rose-500"],
              ].map(([icon, value, label, tone]) => (
                <div key={label} className="rounded-xl bg-[#fafbff] p-3 text-center">
                  <Bubble icon={icon as IconName} tone={tone} small />
                  <p className="mt-1.5 text-[23px] leading-none font-bold">{value}</p>
                  <p className="mt-1 text-[10px] leading-tight text-brand-text">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <article className="flex flex-col gap-5 rounded-[15px] bg-[#f8f9ff] p-5 sm:flex-row sm:items-center">
            <img
              src={images.caseStudy}
              alt="SaaS analytics dashboard"
              className="h-[150px] w-full rounded-xl object-cover sm:w-[155px]"
            />
            <div>
              <span className="rounded-full bg-violet-100 px-2 py-1 text-[8px] font-bold tracking-wider text-brand-purple">
                CASE STUDY
              </span>
              <h3 className="mt-2 text-[16px] leading-tight font-bold">
                SaaS Brand: 4x Revenue with AI Marketing Analytics
              </h3>
              <p className="mt-2 text-[11px] leading-[1.4] text-brand-text">
                With our AI marketing analytics solution, this SaaS brand identified high-performing channels,
                optimized their campaigns, and achieved 4x revenue growth in just 6 months.
              </p>
              <div className="mt-3 flex gap-6">
                {[
                  ["312%", "More Revenue"],
                  ["4x", "ROI Growth"],
                  ["70%", "Less Reporting Time"],
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
              src={images.testimonial}
              alt="Vikram Sethi"
              className="size-[105px] shrink-0 rounded-full border-4 border-indigo-100 object-cover"
            />

            <div className="flex-1">
              <span className="grid size-8 place-items-center rounded-full bg-white text-[31px] leading-none font-bold text-brand-purple">
                “
              </span>
              <p className="mt-1 text-[12px] leading-[1.45] text-brand-text">
                “AI WorksForce gave us complete visibility into our marketing performance. The AI insights
                helped us make smarter decisions, save hours of analysis, and significantly increase our ROI.”
              </p>
              <p className="mt-2 text-[11px] font-bold">Vikram Sethi</p>
              <p className="text-[10px] text-brand-text">CMO, GrowthTech (SaaS)</p>
            </div>

            <div className="w-full border-t border-indigo-100 pt-3 lg:w-[460px] lg:border-t-0 lg:border-l lg:pl-4 lg:pt-0">
              <p className="text-center text-[8px] font-bold tracking-[0.2em] text-brand-purple">
                WORKS WITH YOUR FAVORITE PLATFORMS
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                {["Google Analytics", "Google Ads", "Meta Ads", "LinkedIn", "HubSpot", "Salesforce"].map((tool, index) => (
                  <div key={tool} className="rounded-lg bg-white p-2 text-center">
                    <span className={`text-[20px] ${index === 0 ? "text-orange-500" : "text-brand-purple"}`}>
                      {index === 0 ? "▮▮▮" : index === 1 ? "▲" : index === 2 ? "∞" : index === 3 ? "in" : "●"}
                    </span>
                    <p className="mt-1 text-[8px] text-brand-text">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative isolate mx-1 mt-3 overflow-hidden rounded-[14px] bg-[linear-gradient(110deg,#07154d,#0c1772_55%,#2836e4)] px-5 py-5 text-center text-white"
        >
          <div className="absolute inset-0 -z-10 opacity-30 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_10px,#7180ff_11px_12px)]" />
          <p className="text-[9px] tracking-[0.27em]">READY TO TURN YOUR DATA INTO GROWTH?</p>
          <h2 className="mt-2 text-[25px] leading-tight font-semibold">
            Let’s Build a Smarter Marketing Strategy with AI
          </h2>
          <p className="mt-1 text-[12px]">
            Get a custom AI marketing analytics strategy tailored to your business goals.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@example.com" className={`${button} bg-white text-brand-dark`}>
              Book a Free Consultation <span>→</span>
            </a>
            <a href="#home" className={`${button} border border-white/60 text-white`}>
              Talk to Our Analytics Experts
            </a>
          </div>
        </section>
      </main>

   
    </div>
  );
}