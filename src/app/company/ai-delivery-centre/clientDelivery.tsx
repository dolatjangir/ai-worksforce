"use client";

import PageHero from "@/components/company-hero/reusable-hero";
import { useState, type ReactNode } from "react";

/* =========================================================
   TYPES
========================================================= */

type IconName =
  | "users"
  | "settings"
  | "chart"
  | "globe"
  | "shield"
  | "clock"
  | "database"
  | "handshake"
  | "file"
  | "code"
  | "check"
  | "rocket"
  | "headphones"
  | "arrow"
  | "play"
  | "menu"
  | "close"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram";

/* =========================================================
   ICONS
========================================================= */

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const icons: Record<IconName, ReactNode> = {
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M15 15a5 5 0 0 1 6 5" />
      </>
    ),

    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.06.06-1.82 1.82-.06-.06a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.1 1.65V22h-2.58v-.09a1.8 1.8 0 0 0-1.1-1.65 1.8 1.8 0 0 0-1.98.36l-.06.06-1.82-1.82.06-.06A1.8 1.8 0 0 0 7.76 17a1.8 1.8 0 0 0-1.65-1.1H6V13.3h.11a1.8 1.8 0 0 0 1.65-1.1 1.8 1.8 0 0 0-.36-1.98l-.06-.06 1.82-1.82.06.06a1.8 1.8 0 0 0 1.98.36 1.8 1.8 0 0 0 1.1-1.65V6h2.58v.11a1.8 1.8 0 0 0 1.1 1.65 1.8 1.8 0 0 0 1.98-.36l.06-.06 1.82 1.82-.06.06A1.8 1.8 0 0 0 19.4 11c.25.67.9 1.1 1.61 1.1h.1v2.6h-.1c-.71 0-1.36.43-1.61 1.1Z" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V12" />
        <path d="M10 20V8" />
        <path d="M16 20V4" />
        <path d="M22 20H2" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.3 8.1-8 10-4.7-1.9-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </>
    ),

    handshake: (
      <>
        <path d="m4 12 3-3 4 1 3-3 6 4" />
        <path d="m4 12 5 5c.8.8 2 .8 2.8 0l1.2-1.2" />
        <path d="m13 15 1.2 1.2c.8.8 2 .8 2.8 0l2-2" />
        <path d="m16 10 2 2c.8.8 2 .8 2.8 0l.7-.7" />
      </>
    ),

    file: (
      <>
        <path d="M6 3h8l4 4v14H6V3Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h6" />
      </>
    ),

    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 6-4 12" />
      </>
    ),

    check: (
      <path d="m7 12 3 3 7-7" strokeWidth="2.5" />
    ),

    rocket: (
      <>
        <path d="M14 4c2.8-1.8 5.1-2.1 6-2 .1.9-.2 3.2-2 6-1.4 2.1-3.4 4-5.6 5.4l-2.8-2.8C11 8.4 12 5.4 14 4Z" />
        <path d="m9.6 10.6-3.4.8-2.5 2.5 4.2.8.8 4.2 2.5-2.5.8-3.4" />
        <circle cx="16.5" cy="6.5" r="1.2" />
      </>
    ),

    headphones: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4Z" />
        <path d="M20 14h-3v5h2a1 1 0 0 0 1-1v-4Z" />
      </>
    ),

    arrow: (
      <>
        <path d="M4 12h16" />
        <path d="m13 5 7 7-7 7" />
      </>
    ),

    play: (
      <path
        d="m9 6 9 6-9 6V6Z"
        fill="currentColor"
        stroke="none"
      />
    ),

    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),

    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),

    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 10v6M8 8v.1M12 16v-6M12 13c0-2 4-2 4 0v3" />
      </>
    ),

    twitter: (
      <path d="M21 6.5c-.7.3-1.4.5-2.2.6A3.7 3.7 0 0 0 20.4 5c-.7.4-1.5.7-2.4.9A3.7 3.7 0 0 0 11.7 9c0 .3 0 .6.1.9A10.5 10.5 0 0 1 4 5.3a3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5v.1a3.7 3.7 0 0 0 3 3.6c-.6.2-1.2.2-1.7.1a3.7 3.7 0 0 0 3.5 2.6A7.4 7.4 0 0 1 3.6 18a10.5 10.5 0 0 0 5.7 1.7c6.9 0 10.7-5.7 10.7-10.7v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
    ),

    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path
          d="m10 9 5 3-5 3V9Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle
          cx="17"
          cy="7"
          r=".8"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

/* =========================================================
   ICON CIRCLE
========================================================= */

function IconCircle({
  icon,
  className = "bg-indigo-100 text-brand-blue",
  large = false,
}: {
  icon: IconName;
  className?: string;
  large?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex shrink-0 items-center justify-center rounded-full",
        large
          ? "size-12 sm:size-14"
          : "size-10 sm:size-12",
        className,
      ].join(" ")}
    >
      <Icon
        name={icon}
        className={
          large
            ? "size-6 sm:size-7"
            : "size-5 sm:size-6"
        }
      />
    </span>
  );
}

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  "Home",
  "What AIWorksForce?",
  "How it Works",
  "Our AI Workflow",
  "Solutions",
  "Industries",
  "Case Studies",
  "Resources",
  "About",
];

/* =========================================================
   DELIVERY FEATURES
========================================================= */

const deliveryFeatures = [
  {
    icon: "users" as IconName,
    title: "Expert AI Team",
    description:
      "The AI Delivery Centre has a team of AI engineers, data scientists and automation specialists.",
  },
  {
    icon: "settings" as IconName,
    title: "Advanced Infrastructure",
    description:
      "The AI Delivery Centre offers a scalable and high‑performance environment for AI development and deployment.",
  },
  {
    icon: "shield" as IconName,
    title: "Quality & Security",
    description:
      "The AI Delivery Centre follows practices ensures compliance and applies rigorous quality assurance at every stage.",
  },
  {
    icon: "chart" as IconName,
    title: "Scalable Delivery",
    description:
      "The AI Delivery Centre provides delivery models that meet the needs of startups, SMBs and enterprises.",
  },
];

/* =========================================================
   DELIVERY PROCESS
========================================================= */

const deliveryProcess = [
  {
    icon: "file" as IconName,
    number: "01",
    title: "Plan",
    description:
      "The AI Delivery Centre understands business goals and requirements.",
  },
  {
    icon: "code" as IconName,
    number: "02",
    title: "Build",
    description:
      "The AI Delivery Centre designs. Develops custom AI solutions using best practices.",
  },
  {
    icon: "check" as IconName,
    number: "03",
    title: "Test",
    description:
      "The AI Delivery Centre ensures quality, security and performance.",
  },
  {
    icon: "rocket" as IconName,
    number: "04",
    title: "Deploy",
    description:
      "The AI Delivery Centre. Integrates solutions seamlessly into your operations.",
  },
  {
    icon: "headphones" as IconName,
    number: "05",
    title: "Support",
    description:
      "The AI Delivery Centre continuously. Optimizes solutions.",
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const advantages = [
  {
    icon: "globe" as IconName,
    title: "Global Talent Pool",
    description:
      "The AI Delivery Centre provides access to talent and specialized AI expertise.",
  },
  {
    icon: "database" as IconName,
    title: "Cost-Effective Delivery",
    description:
      "The AI Delivery Centre delivers high‑quality solutions while keeping delivery costs optimized.",
  },
  {
    icon: "clock" as IconName,
    title: "Faster Time-to-Market",
    description:
      "The AI Delivery Centre uses agile processes that deliver solutions quickly.",
  },
  {
    icon: "handshake" as IconName,
    title: "Long-Term Partnership",
    description:
      "The AI Delivery Centre grows with you. Provides ongoing support and innovation.",
  },
];


/* =========================================================
   PAGE
========================================================= */

export default function AIDeliveryCentrePage() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
  

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
<PageHero
  titleId="delivery-centre-hero-title"
  eyebrow="Global Talent. Real Impact."
  title="AI Delivery"
  highlightedTitle="Centre"
  description="The AI Delivery Centre acts as the engine that drives your success. It has a team, advanced infrastructure and proven processes that deliver high‑quality AI solutions at scale."
  image="/company-images/ai-delivery-center-compan-hero.png"
  imageAlt="AI WorksForce delivery centre"
  primaryAction={{
    label: "Take a Virtual Tour",
    href: "#delivery",
    icon: "arrow",
  }}
  secondaryAction={{
    label: "Watch Video",
    href: "#",
    icon: "play",
  }}
  stats={[
    {
      icon: "users",
      value: "200+",
      label: "AI Specialists",
    },
    {
      icon: "clock",
      value: "24/7",
      label: "Delivery Operations",
    },
    {
      icon: "shield",
      value: "99%",
      label: "Quality Assurance",
    },
    {
      icon: "globe",
      value: "Global",
      label: "Client Support",
    },
  ]}
  resultCard={{
    icon: "chart",
    lines: [
      "Delivering",
      "Smarter Solutions",
      "From the AI Delivery Centre to Your Business",
    ],
  }}
/>

        {/* =====================================================
            CENTRE OF EXCELLENCE
        ====================================================== */}

        <section
          id="delivery"
          className="mx-auto max-w-7xl px-5 py-10 sm:px-7 lg:px-8 lg:py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Left */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                Powering Your AI Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                A Centre of Excellence
                <br />
                <span className="text-brand-blue">
                  for AI Delivery
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-text sm:text-lg">
                Our AI Delivery Centre brings together skilled
                professionals, cutting-edge technology, and agile
                processes to design, build, and deploy AI solutions
                that drive real business outcomes.
              </p>

              <a
                href="#"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-brand-blue px-5 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white sm:text-base"
              >
                Learn More About Our Approach

                <Icon
                  name="arrow"
                  className="size-4"
                />
              </a>
            </div>

            {/* Features */}

            <div className="grid gap-4 sm:grid-cols-2">
              {deliveryFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl bg-blue-50/70 p-5 sm:p-6"
                >
                  <div className="flex gap-4">
                    <IconCircle
                      icon={feature.icon}
                      className="bg-indigo-100 text-brand-blue"
                    />

                    <div>
                      <h3 className="text-base font-bold tracking-tight text-brand-dark sm:text-lg">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-brand-text sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DELIVERY PROCESS
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-7 lg:px-8 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Image */}

            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/company-images/ai-delivery-center-company-middle.png"
                alt="AI WorksForce delivery centre team"
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="absolute bottom-4 right-4 hidden rotate-[-6deg] font-hand text-xl leading-tight text-brand-blue sm:block">
                Real People
                <br />
                Real Solutions
              </div>
            </div>

            {/* Process */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
                How We Deliver
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                From Strategy to
                <br />
                <span className="text-brand-blue">
                  Solutions
                </span>
              </h2>

              <p className="mt-3 max-w-3xl text-base leading-relaxed text-brand-text sm:text-lg">
                Our delivery centre follows a proven, agile process
                to ensure faster time-to-value and measurable
                results.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-5 sm:gap-2">
                {deliveryProcess.map(
                  (step, index) => (
                    <div
                      key={step.number}
                      className="relative text-center"
                    >
                      {index <
                        deliveryProcess.length -
                          1 && (
                        <div className="absolute left-[calc(50%+2.5rem)] top-6 hidden w-[calc(100%-3rem)] items-center sm:flex">
                          <span className="h-px flex-1 bg-brand-blue/30" />

                          <Icon
                            name="arrow"
                            className="size-4 shrink-0 text-brand-blue"
                          />
                        </div>
                      )}

                      <IconCircle
                        icon={step.icon}
                        className="mx-auto bg-indigo-100 text-brand-purple"
                      />

                      <p className="mt-2 text-xs font-bold text-brand-blue sm:text-sm">
                        {step.number}
                      </p>

                      <h3 className="mt-1 text-base font-bold text-brand-dark sm:text-lg">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-xs leading-relaxed text-brand-text sm:text-sm">
                        {step.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY CHOOSE US
        ====================================================== */}

        <section className="mx-3 overflow-hidden rounded-2xl bg-blue-50/70 sm:mx-5 lg:mx-auto lg:max-w-7xl">
          <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-purple sm:text-sm">
              Why Choose Our AI Delivery Centre
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Built for Performance. Designed for You.
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl bg-white/80 p-5 sm:p-6"
                >
                  <IconCircle
                    icon={item.icon}
                    className="bg-indigo-100 text-brand-blue"
                  />

                  <h3 className="mt-4 text-base font-bold text-brand-dark sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-brand-text sm:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INSIDE CENTRE
        ====================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:px-8 lg:py-10">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.65fr_0.65fr_0.65fr]">
            {/* Intro */}

            <div className="rounded-xl bg-blue-50/70 p-6 sm:p-7">
              <p className="text-xl font-bold text-brand-blue sm:text-2xl">
                A Glimpse Inside
              </p>

              <h2 className="mt-1 text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">
                Our AI Delivery Centre
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
                A modern, collaborative, and secure workspace where
                innovation meets execution. Designed to empower our
                team and deliver exceptional results for our clients.
              </p>

              <a
                href="#"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-brand-blue px-5 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white sm:text-base"
              >
                View Photos

                <Icon
                  name="arrow"
                  className="size-4"
                />
              </a>
            </div>

            {/* Gallery */}

            {[
              {
                src: "/company-images/ai-delivery-center-company-bottom-1.png",
                alt: "AI WorksForce office entrance",
              },
              {
                src: "/company-images/ai-delivery-center-company-bottom-2.png",
                alt: "AI WorksForce delivery team",
              },
              {
                src: "/company-images/ai-delivery-center-company-bottom-3.png",
                alt: "AI WorksForce workspace",
              },
            ].map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="relative isolate mx-1 my-4 overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#07154d,#0b176f_55%,#2637e8)] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-9">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

          <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
                Ready to Build Together?
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Let&apos;s Leverage Our AI Delivery Centre for Your
                Business
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
                Talk to our team and discover how we can help you
                automate, accelerate, and grow.
              </p>
            </div>

            <a
              href="/book-demo"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-brand-dark shadow-lg transition hover:-translate-y-0.5 sm:text-base"
            >
              Book a Free Consultation

              <Icon
                name="arrow"
                className="size-4"
              />
            </a>
          </div>
        </section>
      </main>

    
    </div>
  );
}