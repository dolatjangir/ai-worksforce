"use client";

import React from "react";

const heroImage =
  "/aiworkforce-hero-img.png";

const deliveryImage =
  "/home-cta-right-img.png";

const industries = [
  ["◈", "AI & Technology Companies"],
  ["⌘", "Digital & AI Agencies"],
  ["▥", "Real Estate"],
  ["♙", "Recruitment"],
  ["▣", "Ecommerce"],
  ["◇", "Education"],
  ["♙", "Professional Services"],
  ["✣", "BPO & KPO Companies"],
];

const services = [
  {
    icon: "◉",
    color: "blue",
    title: "AI Data Operations",
    items: [
      "Data annotation",
      "Data validation",
      "Data enrichment",
      "Content classification",
      "Document processing",
    ],
    link: "Learn More",
  },
  {
    icon: "⌕",
    color: "green",
    title: "AI Research & KPO",
    items: [
      "Market research",
      "Web research",
      "Competitive Intelligence",
      "Lead intelligence",
      "Business research",
    ],
    link: "Learn More",
  },
  {
    icon: "⚙",
    color: "purple",
    title: "AI Automation",
    items: [
      "AI agents",
      "CRM automation",
      "WhatsApp automation",
      "Voice AI",
      "Workflow automation",
    ],
    link: "Learn More",
  },
  {
    icon: "◖",
    color: "orange",
    title: "AI Customer Operations",
    items: [
      "Lead qualification",
      "Customer support",
      "Appointment setting",
      "CRM operations",
      "Back-office operations",
    ],
    link: "Learn More",
  },
  {
    icon: "↗",
    color: "pink",
    title: "AI Evaluation",
    items: [
      "LLM response evaluation",
      "Factuality checking",
      "Prompt testing",
      "AI testing & QA",
      "Multilingual evaluation",
    ],
    link: "Learn More",
  },
  {
    icon: "●",
    color: "cyan",
    title: "White-Label AI Delivery",
    items: [
      "For AI agencies",
      "For digital agencies",
      "For BPO/KPO companies",
      "You sell, we deliver",
      "Dedicated teams",
    ],
    link: "Become a Partner",
  },
];

const teamPackages = [
  {
    icon: "▤",
    title: "5 People",
    subtitle: "Pilot Team",
    description: "Best for testing and specific tasks.",
    action: "Start a Pilot →",
  },
  {
    icon: "♟",
    title: "10 People",
    subtitle: "AI Pod",
    description: "For new operations and small projects.",
    action: "Build Your Pod →",
    popular: true,
  },
  {
    icon: "♟",
    title: "25 People",
    subtitle: "Growing Team",
    description: "For established operations.",
    action: "Talk to Us →",
  },
  {
    icon: "♟",
    title: "50 People",
    subtitle: "Delivery Team",
    description: "For large projects and multiple workflows.",
    action: "Build Your Team →",
  },
  {
    icon: "▣",
    title: "100+ People",
    subtitle: "Dedicated Center",
    description: "Your own AI delivery center in India.",
    action: "Discuss Enterprise →",
  },
];

const ecosystem = [
  {
    logo: "C",
    title: "Creatikai",
    subtitle: "AI Agents & Automation",
    description: "AI agents, automation and integrations.",
    link: "Visit Creatikai →",
    color: "purple",
  },
  {
    logo: "iB",
    title: "IBigData",
    subtitle: "Data & CRM Intelligence",
    description: "Data platforms, analytics and CRMs.",
    link: "Visit IBigData →",
    color: "blue",
  },
  {
    logo: "M",
    title: "MakeMyLeads",
    subtitle: "Lead Intelligence",
    description: "AI-powered lead generation and enrichment.",
    link: "Visit MakeMyLeads →",
    color: "pink",
  },
];

function Arrow() {
  return <span className="ml-1">→</span>;
}

function Check() {
  return (
    <span className="mr-2 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
      ✓
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-blue-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-extrabold leading-tight tracking-[-0.5px] text-[#0b2344] md:text-[28px]">
        {title}
      </h2>

      {description && (
        <p className="mt-1.5 max-w-3xl text-sm leading-5 text-slate-600 md:text-[15px]">
          {description}
        </p>
      )}
    </div>
  );
}

export default function AIWorkforcePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#10294c]">


      {/* =========================================================
          NAVBAR
      ========================================================= */}
    

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#f5f9ff] via-[#f4f8ff] to-[#e9f1fc]">
        <div className="mx-auto grid min-h-[390px] max-w-[1280px] grid-cols-1 lg:grid-cols-[49%_51%]">
          <div className="relative z-10 px-5 py-10 md:px-10 lg:py-12">
            <div className="mb-3 inline-flex rounded-full bg-[#dcd7ff] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#6755d8]">
              AI + HUMAN DELIVERY · JAIPUR, INDIA
            </div>

            <h1 className="max-w-[570px] text-[40px] font-extrabold leading-[1.05] tracking-[-1.7px] text-[#092348] md:text-[52px]">
              Build Your AI Workforce
              <br />
              <span className="text-[#126fe7]">
                Without Building an AI Team.
              </span>
            </h1>

            <p className="mt-4 max-w-[570px] text-base leading-[1.6] text-[#455972]">
              We help businesses and agencies scale AI-powered operations with
              <br className="hidden md:block" />
              <strong className="text-[#213b5e]">
                trained teams, AI agents, automation and managed delivery from
                India.
              </strong>
            </p>

            <div className="mt-4 flex flex-wrap gap-5 text-sm font-semibold text-[#23466e]">
              <span>♙ AI Data</span>
              <span>⌕ AI Research</span>
              <span>⚙ AI Automation</span>
              <span>◉ Customer Operations</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-md bg-[#1475ec] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200">
                Start a Pilot <Arrow />
              </button>

              <button className="rounded-md border border-blue-400 bg-white px-7 py-3 text-sm font-bold text-[#1475ec]">
                Talk to Our Team
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[#365375]">
              <span>● Flexible Team Scaling</span>
              <span>● Secure & Reliable</span>
              <span>● High Quality Delivery</span>
              <span>● Cost Efficient</span>
            </div>
          </div>

          <div className="relative min-h-[330px] lg:min-h-full">
            <img
              src={heroImage}
              alt="AI workforce delivery center"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#eef5ff] via-transparent to-transparent" />

            <div className="absolute right-6 top-8 rounded-xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="text-2xl text-blue-500">♙</div>
                <div>
                  <div className="text-base font-extrabold text-[#193557]">
                    100-Seat
                  </div>
                  <div className="text-xs text-slate-500">
                    Delivery Capacity
                  </div>
                  <div className="text-xs text-slate-500">
                    Jaipur, India
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-5 rounded-lg bg-[#0b2344]/75 px-5 py-3 text-white backdrop-blur-sm">
              <div className="font-serif text-lg italic">
                Real People
              </div>
              <div className="font-serif text-lg italic">
                Real Impact
              </div>
            </div>

            <div className="absolute -bottom-1 left-1/2 hidden w-[90%] -translate-x-1/2 translate-y-1/2 grid-cols-4 rounded-lg bg-white px-3 py-4 shadow-xl md:grid">
              <div className="text-center">
                <div className="text-lg text-blue-500">♙</div>
                <div className="text-xs font-bold">100-Seat</div>
                <div className="text-[11px] text-slate-500">Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-lg text-purple-500">♙</div>
                <div className="text-xs font-bold">AI + Human</div>
                <div className="text-[11px] text-slate-500">Operations</div>
              </div>
              <div className="text-center">
                <div className="text-lg text-blue-500">◷</div>
                <div className="text-xs font-bold">24/7</div>
                <div className="text-[11px] text-slate-500">Scalable Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-lg text-blue-500">◎</div>
                <div className="text-xs font-bold">Global</div>
                <div className="text-[11px] text-slate-500">Partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section id="solutions" className="bg-white px-5 py-10 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-end justify-between">
            <SectionTitle
              eyebrow="WHAT WE DO"
              title="What Can We Operate for You?"
              description="From data to automation, our teams combine human expertise with AI technology to deliver scalable business outcomes."
            />

            <a
              href="#services"
              className="hidden text-sm font-bold text-[#1475ec] md:block"
            >
              Explore All Services <Arrow />
            </a>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="min-h-[225px] rounded-lg border border-[#dfe7f1] bg-white p-4 shadow-[0_2px_8px_rgba(20,50,90,0.03)]"
              >
                <div
                  className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full text-lg
                    ${
                      service.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : service.color === "green"
                          ? "bg-green-100 text-green-600"
                          : service.color === "purple"
                            ? "bg-purple-100 text-purple-600"
                            : service.color === "orange"
                              ? "bg-orange-100 text-orange-600"
                              : service.color === "pink"
                                ? "bg-pink-100 text-pink-600"
                                : "bg-cyan-100 text-cyan-600"
                    }`}
                >
                  {service.icon}
                </div>

                <h3 className="min-h-[32px] text-sm font-extrabold text-[#18375d]">
                  {service.title}
                </h3>

                <ul className="mt-3 space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-xs leading-[1.35] text-slate-600"
                    >
                      <span className="mr-1 text-blue-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="mt-4 block text-xs font-bold text-blue-600"
                >
                  {service.link} <Arrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HUMAN + AI
      ========================================================= */}
      <section id="agents" className="bg-[#eef6ff]">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-[57%_43%]">
          <div className="px-5 py-10 md:px-10">
            <SectionTitle
              title="One Workforce. Two Powerful Capabilities."
              description="AI handles speed and automation. Our trained teams handle judgment, verification and execution. Together, they create scalable operations."
            />

            <div className="mt-7 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
              <div className="rounded-lg border border-[#dce6f3] bg-white p-5 text-center shadow-sm">
                <div className="text-3xl text-blue-600">♟</div>
                <div className="mt-2 text-sm font-extrabold">
                  AI Agents
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Speed & Automation
                </div>
              </div>

              <div className="text-2xl font-bold text-blue-600">+</div>

              <div className="rounded-lg border border-[#dce6f3] bg-white p-5 text-center shadow-sm">
                <div className="text-3xl text-purple-600">♟</div>
                <div className="mt-2 text-sm font-extrabold">
                  Human Experts
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Judgment & Execution
                </div>
              </div>

              <div className="text-2xl font-bold text-blue-600">=</div>

              <div className="rounded-lg border border-[#dce6f3] bg-white p-5 text-center shadow-sm">
                <div className="text-3xl text-green-500">↗</div>
                <div className="mt-2 text-sm font-extrabold">
                  Managed Results
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Scale Your Business
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[310px] overflow-hidden">
            <img
              src={deliveryImage}
              alt="AI workforce delivery center"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#071c3b]/65" />

            <div className="relative z-10 p-10 text-white">
              <div className="text-xl font-extrabold leading-tight">
                Technology
                <br />
                Meets People.
                <br />
                That’s the Difference.
              </div>

              <button className="mt-6 rounded-md bg-[#1475ec] px-5 py-3 text-xs font-bold">
                See Our Delivery Center <Arrow />
              </button>

              <div className="mt-7 text-sm font-semibold opacity-90">
                From
                <br />
                Jaipur
                <br />
                to the
                <br />
                World
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PILOT PROCESS
      ========================================================= */}
      <section className="bg-[#06204a] px-5 py-9 text-white md:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold">From Pilot to Scale</h2>
            <p className="mt-1 text-sm text-blue-100">
              A simple, proven process to get your AI team working.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-6 md:grid-cols-5">
              {[
                ["▤", "1. DISCOVER", "Understand your workflow and goals."],
                ["♟", "2. TRAIN", "Train the team and set up AI workflows."],
                ["▶", "3. DEPLOY", "Launch a pilot team with defined processes."],
                ["⚙", "4. OPERATE", "We manage delivery, QA and reporting."],
                ["▥", "5. SCALE", "Expand from 5 to 100+ seats."],
              ].map(([icon, title, desc], index) => (
                <div key={title} className="relative text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-[#0c3977] text-lg shadow-[0_0_20px_rgba(0,110,255,0.25)]">
                    {icon}
                  </div>

                  <div className="mt-3 text-xs font-extrabold">{title}</div>

                  <p className="mx-auto mt-1 max-w-[130px] text-[11px] leading-4 text-blue-100">
                    {desc}
                  </p>

                  {index < 4 && (
                    <span className="absolute right-[-18px] top-5 hidden text-lg text-blue-500 md:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full rounded-lg bg-white p-5 text-[#10294c] shadow-xl lg:w-[260px]">
            <div className="text-lg font-extrabold">
              Start With a 30-Day Pilot
            </div>

            <p className="mt-2 text-xs leading-4 text-slate-500">
              Test our team, process and delivery model before scaling.
            </p>

            <button className="mt-4 w-full rounded-md bg-[#1475ec] py-3 text-xs font-bold text-white">
              Request a Pilot <Arrow />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          MANAGED TEAMS
      ========================================================= */}
      <section id="teams" className="bg-white px-5 py-9 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-2xl font-extrabold text-[#10294c]">
                Managed AI Teams
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Start small. Scale fast. Dedicated teams for your AI and
                business operations.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-xs font-semibold text-slate-600">
              <span>✓ Trained professionals</span>
              <span>✓ Team management</span>
              <span>✓ Flexible scaling</span>
              <span>✓ AI tools & infrastructure</span>
              <span>✓ QA & reporting</span>
              <span>✓ Cost-effective delivery</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {teamPackages.map((team) => (
              <div
                key={team.title}
                className={`relative rounded-lg border bg-white p-4 ${
                  team.popular
                    ? "border-blue-400 shadow-[0_4px_15px_rgba(37,99,235,0.12)]"
                    : "border-slate-200"
                }`}
              >
                {team.popular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold text-white">
                    Most Popular
                  </div>
                )}

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    {team.icon}
                  </div>

                  <div>
                    <div className="text-sm font-extrabold text-[#19375b]">
                      {team.title}
                    </div>
                    <div className="text-xs font-bold text-slate-500">
                      {team.subtitle}
                    </div>
                  </div>
                </div>

                <p className="mt-4 min-h-[32px] text-xs leading-4 text-slate-500">
                  {team.description}
                </p>

                <a
                  href="#"
                  className="mt-3 block text-xs font-bold text-blue-600"
                >
                  {team.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ECOSYSTEM
      ========================================================= */}
      <section className="bg-[#f0f7ff] px-5 py-8 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-[#10294c]">
                Powered by Our Technology Ecosystem
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Our teams operate and deploy solutions from our in-house
                technology brands.
              </p>
            </div>

            <div className="hidden text-right text-xs text-slate-500 md:block">
              <strong className="text-blue-600">Stronger Together</strong>
              <br />
              People + Products + Possibilities
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {ecosystem.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-5 py-4"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center text-3xl font-black ${
                    item.color === "purple"
                      ? "text-purple-600"
                      : item.color === "blue"
                        ? "text-blue-600"
                        : "text-pink-600"
                  }`}
                >
                  {item.logo}
                </div>

                <div>
                  <div className="text-sm font-extrabold text-[#16365a]">
                    {item.title}
                  </div>

                  <div className="text-xs font-semibold text-blue-600">
                    {item.subtitle}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {item.description}
                  </div>

                  <a
                    href="#"
                    className="mt-2 inline-block text-xs font-bold text-blue-600"
                  >
                    {item.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section className="bg-white px-5 py-6 md:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-extrabold text-[#10294c]">
              Industries We Help
            </h2>

            <p className="text-xs text-slate-500">
              We work with fast-growing businesses and agencies across
              multiple industries.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {industries.map(([icon, title]) => (
              <div
                key={title}
                className="flex items-center gap-2 text-xs font-semibold text-slate-600"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                  {icon}
                </span>

                <span className="whitespace-pre-line">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#061d42]">
        <div className="mx-auto grid min-h-[150px] max-w-[1280px] md:grid-cols-[42%_58%]">
          <div className="relative min-h-[170px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590055531615-f16d36d7d7c7?auto=format&fit=crop&w=1000&q=80"
              alt="Jaipur architecture"
              className="absolute inset-0 h-full w-full object-cover opacity-55"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#061d42]/60 to-[#061d42]" />

            <div className="relative z-10 flex h-full items-center justify-center p-8">
              <div className="font-serif text-xl italic leading-tight text-white">
                From Jaipur
                <br />
                to a Smarter World
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-8 md:px-12">
            <h2 className="text-2xl font-extrabold text-white">
              Ready to Build Your AI Workforce?
            </h2>

            <p className="mt-1 text-xs text-blue-100">
              Start with a pilot, build a dedicated team or explore a
              partnership.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-md bg-[#1475ec] px-5 py-3 text-xs font-bold text-white">
                Start a Pilot <Arrow />
              </button>

              <button className="rounded-md border border-white/60 px-5 py-3 text-xs font-bold text-white">
                Talk to Our Team
              </button>

              <button className="rounded-md border border-white/60 px-5 py-3 text-xs font-bold text-white">
                ◉ WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
