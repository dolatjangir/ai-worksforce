"use client";

import PageHero from "@/components/resources-hero/reusable-hero";
import { useMemo, useState, type ReactNode } from "react";

/* ============================================================
   TYPES
============================================================ */

type IconName =
  | "activity"
  | "cart"
  | "settings"
  | "home"
  | "file"
  | "graduation"
  | "plane"
  | "grid"
  | "users"
  | "message"
  | "target"
  | "chart"
  | "document"
  | "pen"
  | "search"
  | "arrow-up"
  | "arrow-right"
  | "dollar"
  | "lightning"
  | "menu"
  | "close"
  | "play"
  | "trophy"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "instagram";

type CaseStudy = {
  category: string;
  title: string;
  description: string;
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
};

/* ============================================================
   ICON COMPONENT
============================================================ */

function Icon({
  name,
  className = "size-6",
}: {
  name: IconName;
  className?: string;
}) {
  const icons: Record<IconName, ReactNode> = {
    activity: (
      <path d="M3 12h4l2.2-7 4.2 14 2.2-7H21" />
    ),

    cart: (
      <>
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
        <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" />
      </>
    ),

    settings: (
      <>
        <path d="M12 2.5 13.4 5l2.8.7.7 2.8 2.5 1.4-1.1 2.7 1.1 2.7-2.5 1.4-.7 2.8-2.8.7L12 22l-1.4-2.5-2.8-.7-.7-2.8-2.5-1.4 1.1-2.7-1.1-2.7 2.5-1.4.7-2.8 2.8-.7L12 2.5Z" />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ),

    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),

    file: (
      <>
        <path d="M6 3h8l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5M8 13h8M8 17h6" />
      </>
    ),

    graduation: (
      <>
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="M7 11.2V16c2.8 2.1 7.2 2.1 10 0v-4.8" />
        <path d="M21 9v6" />
      </>
    ),

    plane: (
      <>
        <path d="m3 11 18-7-7 18-3-8-8-3Z" />
        <path d="m11 14 4-4" />
      </>
    ),

    grid: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),

    users: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21v-2.2a7 7 0 0 1 14 0V21" />
        <path d="M5.5 7.5a3 3 0 0 0 0 5.5M18.5 7.5a3 3 0 0 1 0 5.5" />
      </>
    ),

    message: (
      <>
        <path d="M5 5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H11l-5 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path d="M8 10h8M8 14h5" />
      </>
    ),

    target: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle
          cx="12"
          cy="12"
          r="1.3"
          fill="currentColor"
          stroke="none"
        />
        <path d="m16.5 7.5 4-4M17 4h3.5v3.5" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V12M10 20V8M16 20V4M22 20H2" />
      </>
    ),

    document: (
      <>
        <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5M9 13h6M9 17h4" />
      </>
    ),

    pen: (
      <>
        <path d="m4 20 4.5-1 10-10a2.2 2.2 0 0 0-3-3l-10 10L4 20Z" />
        <path d="m13 7 4 4" />
      </>
    ),

    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </>
    ),

    "arrow-up": (
      <>
        <path d="M5 19 19 5" />
        <path d="M8 5h11v11" />
      </>
    ),

    "arrow-right": (
      <>
        <path d="M4 12h16" />
        <path d="m13 5 7 7-7 7" />
      </>
    ),

    dollar: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 8.5c-.7-.8-1.7-1.2-3-1.2-1.7 0-2.8.8-2.8 2 0 1.4 1.2 1.8 3 2.2 1.8.4 3.5.9 3.5 2.8 0 1.5-1.4 2.6-3.4 2.6-1.4 0-2.6-.5-3.4-1.4M12 5.5v13" />
      </>
    ),

    lightning: (
      <path d="M13.2 2 5 13h6l-.8 9L19 10h-6l.2-8Z" />
    ),

    trophy: (
      <>
        <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
        <path d="M8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 12v5M8 21h8M9 17h6" />
      </>
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

    play: (
      <path
        d="m9 6 9 6-9 6V6Z"
        fill="currentColor"
        stroke="none"
      />
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

/* ============================================================
   ICON BUBBLE
============================================================ */

function IconBubble({
  icon,
  className,
}: {
  icon: IconName;
  className: string;
}) {
  return (
    <span
      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full sm:size-12 ${className}`}
    >
      <Icon name={icon} className="size-5 sm:size-6" />
    </span>
  );
}

/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-brand-dark sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   CASE STUDY CARD
============================================================ */

function CaseStudyCard({
  study,
}: {
  study: CaseStudy;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-blue-50 bg-white shadow-[0_4px_18px_rgba(24,74,140,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(24,74,140,0.1)]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden sm:h-52 lg:h-56">
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />

        <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-brand-blue shadow-md sm:text-sm">
          {study.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-bold leading-tight tracking-tight text-brand-dark sm:text-xl">
          {study.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-brand-text sm:text-base">
          {study.description}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-blue-100">
          {study.stats.map((stat) => (
            <div
              key={stat.label}
              className="px-2 text-center first:pl-0 last:pr-0"
            >
              <p className="text-xl font-bold leading-none text-brand-blue sm:text-2xl">
                {stat.value}
              </p>

              <p className="mt-1 text-xs leading-snug text-brand-text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
        >
          Read Case Study

          <Icon
            name="arrow-right"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}

/* ============================================================
   MAIN PAGE
============================================================ */

export default function CaseStudiesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  /* ----------------------------------------------------------
     NAVIGATION
  ---------------------------------------------------------- */

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

  /* ----------------------------------------------------------
     CATEGORIES
  ---------------------------------------------------------- */

  const categories = [
    "All",
    "Healthcare",
    "E-commerce",
    "Finance",
    "Real Estate",
    "Manufacturing",
    "Education",
    "SaaS",
    "Travel",
  ];

  /* ----------------------------------------------------------
     CASE STUDIES DATA
  ---------------------------------------------------------- */

  const caseStudies: CaseStudy[] = [
    {
      category: "Healthcare",
      title: "Automating Patient Support for a Healthcare Provider",
      description:
        "Implemented an AI-powered customer support system to handle patient inquiries, reducing response time by 70%.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=90",
      stats: [
        {
          value: "70%",
          label: "Faster Response",
        },
        {
          value: "3x",
          label: "More Patients",
        },
        {
          value: "50%",
          label: "Lower Support Costs",
        },
      ],
    },

    {
      category: "E-commerce",
      title: "3x More Sales with AI Automation for a D2C Brand",
      description:
        "Built an AI-driven lead generation and follow-up system, resulting in 3x higher sales in just 6 months.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=90",
      stats: [
        {
          value: "3x",
          label: "Higher Sales",
        },
        {
          value: "70%",
          label: "Lower CPL",
        },
        {
          value: "312%",
          label: "ROI Increase",
        },
      ],
    },

    {
      category: "Finance",
      title: "Intelligent Data Processing for a Financial Services Firm",
      description:
        "Automated data extraction and reporting, saving 200+ hours per month and improving accuracy by 99%.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90",
      stats: [
        {
          value: "200+",
          label: "Hours Saved",
        },
        {
          value: "99%",
          label: "Accuracy",
        },
        {
          value: "60%",
          label: "Faster Reporting",
        },
      ],
    },

    {
      category: "Real Estate",
      title: "AI-Powered Lead Generation for a Real Estate Company",
      description:
        "Implemented an AI lead engine to capture, qualify, and nurture leads, resulting in 4x more qualified leads.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
      stats: [
        {
          value: "4x",
          label: "More Qualified Leads",
        },
        {
          value: "70%",
          label: "Lower Cost per Lead",
        },
        {
          value: "3x",
          label: "Faster Conversions",
        },
      ],
    },

    {
      category: "Manufacturing",
      title: "Predictive Maintenance for a Manufacturing Business",
      description:
        "Used AI and data analytics to predict equipment failures, reducing downtime by 60%.",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=90",
      stats: [
        {
          value: "60%",
          label: "Less Downtime",
        },
        {
          value: "35%",
          label: "Lower Maintenance Costs",
        },
        {
          value: "2x",
          label: "Higher Productivity",
        },
      ],
    },

    {
      category: "SaaS",
      title: "Scaling Customer Support for a SaaS Company",
      description:
        "Deployed an AI support agent to handle common queries, improving customer satisfaction and reducing support costs by 70%.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90",
      stats: [
        {
          value: "70%",
          label: "Lower Support Costs",
        },
        {
          value: "3x",
          label: "Faster Response",
        },
        {
          value: "95%",
          label: "Customer Satisfaction",
        },
      ],
    },
  ];

  /* ----------------------------------------------------------
     FILTERED DATA
  ---------------------------------------------------------- */

  const filteredStudies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return caseStudies.filter((study) => {
      const categoryMatch =
        activeCategory === "All" ||
        study.category === activeCategory;

      const searchMatch =
        query.length === 0 ||
        study.title.toLowerCase().includes(query) ||
        study.description.toLowerCase().includes(query) ||
        study.category.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  /* ==========================================================
     RETURN
  ========================================================== */

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
   

      <main>
        {/* ======================================================
            HERO
        ======================================================= */}
<PageHero
  titleId="case-studies-hero-title"
  eyebrow="Real Businesses. Real Results."
  title="Case"
  highlightedTitle="Studies"
  description="See how businesses like yours are using AI to solve real challenges and achieve measurable growth. Explore real-world examples of how AI WorksForce helps companies automate operations, improve efficiency, and unlock new opportunities with AI."
  image="/resources-images/case-studies-resources-hero.png"
  imageAlt="Business team collaborating"
  primaryAction={{
    label: "Book a Free Consultation",
    href: "#contact",
    icon: "arrow",
  }}
  secondaryAction={{
    label: "Watch Success Stories",
    href: "#case-studies",
    icon: "play",
  }}
  stats={[
    {
      icon: "chart",
      value: "50+",
      label: "Successful Projects",
    },
    {
      icon: "users",
      value: "25+",
      label: "Industries Served",
    },
    {
      icon: "trophy",
      value: "95%",
      label: "Client Satisfaction",
    },
  ]}
  benefitCards={[
    {
      title: "3x",
      description: "Faster Growth",
      icon: "arrow-up",
      position: "left-0 top-8",
      variant: "green",
    },
    {
      title: "70%",
      description: "Cost Reduction",
      icon: "settings",
      position: "left-0 top-[30%]",
    },
    {
      title: "5x",
      description: "Higher Productivity",
      icon: "users",
      position: "left-0 top-[52%]",
    },
  ]}
 
  handwrittenNote={{
    lines: [
      "Real", 
      "Companies",
      "Real Impact",
    ],
      position: "right-[2%] top-[10%]",
  rotate: "-rotate-12",
   
  }}
/>

        {/* ======================================================
            TRUSTED BRANDS
        ======================================================= */}

        <section className="mx-auto max-w-7xl px-5 pt-7 sm:px-7 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-purple sm:text-sm">
            Trusted by Innovative Businesses
          </p>

          <div className="mt-5 grid grid-cols-2 items-center gap-x-5 gap-y-6 sm:grid-cols-5 lg:grid-cols-10">
            {[
              "HubSpot",
              "salesforce",
              "Google",
              "Microsoft",
              "shopify",
              "AWS",
              "Notion",
              "zapier",
              "slack",
              "OpenAI",
            ].map((brand) => (
              <div
                key={brand}
                className="text-center text-base font-bold tracking-tight text-brand-dark/80 transition hover:text-brand-blue sm:text-lg lg:text-xl"
              >
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================
            CASE STUDIES SECTION
        ======================================================= */}

        <section
          id="case-studies"
          className="mx-auto max-w-7xl px-5 pt-10 sm:px-7 lg:px-8"
        >
          <SectionHeading
            eyebrow="Featured Case Studies"
            title="Real Results Across Industries"
            description="Explore how we've helped businesses solve complex challenges with AI-powered solutions."
          />

          {/* Filters + Search */}
          <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Category buttons */}
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0">
              {categories.map((category) => {
                const active =
                  category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      active
                        ? "bg-brand-blue text-white shadow-[0_6px_16px_rgba(37,99,235,0.2)]"
                        : "bg-blue-50/70 text-brand-dark hover:bg-blue-100"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative w-full lg:max-w-xs">
              <Icon
                name="search"
                className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-brand-blue"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search case studies..."
                className="h-11 w-full rounded-lg border border-blue-100 bg-white pl-10 pr-4 text-sm text-brand-dark outline-none transition placeholder:text-brand-text-muted focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
              />
            </div>
          </div>

          {/* Cards */}
          {filteredStudies.length > 0 ? (
            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredStudies.map((study) => (
                <CaseStudyCard
                  key={study.title}
                  study={study}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/50 px-6 py-12 text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-white text-brand-blue shadow-sm">
                <Icon
                  name="search"
                  className="size-6"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold text-brand-dark">
                No case studies found
              </h3>

              <p className="mt-2 text-sm text-brand-text sm:text-base">
                Try another category or search term.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-5 text-sm font-bold text-brand-blue transition-colors hover:text-brand-purple"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* ======================================================
            TESTIMONIAL
        ======================================================= */}

        <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-7 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#f7f9ff,#f1f5ff)] lg:grid-cols-[1.5fr_1fr]">
            {/* Testimonial */}
            <div className="flex items-center gap-5 p-5 sm:p-7 lg:p-8">
              <div className="relative hidden size-28 shrink-0 overflow-hidden rounded-full border-4 border-violet-100 sm:block">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=90"
                  alt="Client testimonial"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative">
                <span className="absolute -top-5 left-0 text-5xl font-bold leading-none text-brand-blue">
                  “
                </span>

                <p className="text-sm leading-relaxed text-brand-text sm:text-base lg:text-lg">
                  AI WorksForce helped us transform our operations. Their AI
                  solutions not only saved us time and costs but also unlocked
                  new growth opportunities we hadn&apos;t imagined.
                </p>

                <div className="mt-3">
                  <p className="text-sm font-bold text-brand-dark sm:text-base">
                    Rahul Mehta
                  </p>

                  <p className="text-xs text-brand-text-muted sm:text-sm">
                    CEO, GrowthTech (SaaS)
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 border-t border-blue-100 lg:border-l lg:border-t-0">
              {[
                {
                  icon: "target" as IconName,
                  title: "Proven Results",
                  text: "Measurable impact across industries",
                  tone: "bg-violet-100 text-brand-purple",
                },
                {
                  icon: "users" as IconName,
                  title: "Expert Team",
                  text: "AI specialists with real-world experience",
                  tone: "bg-indigo-100 text-brand-purple",
                },
                {
                  icon: "lightning" as IconName,
                  title: "Tailored Solutions",
                  text: "Custom strategies for your business",
                  tone: "bg-violet-100 text-brand-purple",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center justify-center border-r border-blue-100 px-3 py-6 text-center last:border-r-0 sm:px-5"
                >
                  <IconBubble
                    icon={item.icon}
                    className={item.tone}
                  />

                  <h3 className="mt-3 text-sm font-bold leading-tight text-brand-dark sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-brand-text sm:text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            CTA
        ======================================================= */}

        <section
          id="contact"
          className="relative isolate mx-1 mt-8 overflow-hidden rounded-2xl bg-[linear-gradient(110deg,#07154d,#0c1772_55%,#2836e4)] px-5 py-8 text-center text-white sm:mx-3 sm:px-8 sm:py-10"
        >
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

          <div className="pointer-events-none absolute -bottom-32 -right-24 -z-10 size-72 rounded-full bg-brand-blue/20 blur-3xl" />

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
            Ready to Write Your Success Story?
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Let&apos;s Create Your AI Success Story Together
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
            Get expert guidance on how AI can help your business achieve
            similar results.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@aiworksforce.com"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-brand-dark shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Book a Free Consultation

              <Icon
                name="arrow-right"
                className="size-4"
              />
            </a>

            <a
              href="/solutions"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/60 bg-white/5 px-6 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Explore Our Solutions
            </a>
          </div>

          {/* Handwritten note */}
          <div className="absolute bottom-7 right-8 hidden rotate-[-8deg] font-hand text-2xl leading-[0.9] text-white md:block">
            Ideas
            <br />
            Strategies
            <br />
            Results
            <br />
            Your Growth
          </div>

          <svg
            className="absolute bottom-3 right-8 hidden h-14 w-20 text-white md:block"
            viewBox="0 0 80 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M69 5C62 25 44 40 10 47"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="m16 40-7 7 10 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </section>
      </main>


    </div>
  );
}