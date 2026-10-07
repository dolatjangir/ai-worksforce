import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Next.js App Router · Tailwind CSS v4 · Server Component.
 * Save as app/terms-and-conditions/page.tsx, or import into an existing page.
 * Uses your global brand tokens with matching fallback colors.
 * Your existing layout.tsx supplies the shared website header/footer.
 * Copy the supplied reference PNG to public/legal-images/terms-and-conditions-reference.png.
 * The two illustrations are displayed from that image using CSS clipping.
 * No external icon packages are required.
 */
type IconName = "shield" | "document" | "settings" | "share" | "cookie" | "globe" | "user" | "edit" | "mail" | "lock" | "home" | "arrow" | "browser" | "payment" | "ban" | "refresh";

function Icon({ name, className = "size-7" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
    document: <><path d="M14 3H5v18h14V8l-5-5Z" /><path d="M14 3v5h5M8 7h2M8 12h8M8 16h8" /></>,
    settings: <><path d="m9 3-.6 2.4-2 .9-2.2-.7-2 3.4 1.6 1.8v2.4L2.2 15l2 3.4 2.2-.7 2 .9L9 21h4l.6-2.4 2-.9 2.2.7 2-3.4-1.6-1.8v-2.4L19.8 9l-2-3.4-2.2.7-2-.9L13 3H9Z" /><circle cx="11" cy="12" r="3" /></>,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="5" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8 10.5 7-4M8 13.5l7 4" /></>,
    cookie: <><path d="M20.5 13A9 9 0 1 1 11 3a4 4 0 0 0 5 5 4 4 0 0 0 4.5 5Z" /><path d="M7 9h.01M7 15h.01M12 12h.01M13 17h.01" strokeWidth="3" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6.5h14M5 17.5h14" /></>,
    user: <><circle cx="12" cy="7" r="4" /><path d="M3 21v-2a9 7 0 0 1 18 0v2H3Z" /></>,
    edit: <><path d="M12 3H5v18h7M14 3v5h5V8l-5-5M8 12h6M8 16h3" /><path d="m14 21 1-4 5-5 3 3-5 5-4 1Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
    home: <><path d="m3 10 9-7 9 7M5 9v12h14V9M10 21v-7h4v7" /></>,
    browser: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M6 6.5h.01M18 17h.01" /></>,
    payment: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M6 15h5M17 15h1" /></>,
    ban: <><circle cx="12" cy="12" r="9" /><path d="m6 18 12-12" /></>,
    refresh: <><path d="M20 8a9 9 0 0 0-15-3L3 7m0-4v4h4M4 16a9 9 0 0 0 15 3l2-2m0 4v-4h-4" /></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  };
  return <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>;
}

const sections: readonly { title: string; icon: IconName; text: string }[] = [
  { title: "Acceptance of Terms", icon: "document", text: "By accessing or using our website, products, or services, you agree to these Terms & Conditions. If you do not agree, please do not use our website or services." },
  { title: "Use of Our Services", icon: "user", text: "You agree to use our services only for lawful purposes and in accordance with these terms. You must not misuse, interfere with, or attempt to gain unauthorized access to our systems, data, or services." },
  { title: "Website Content", icon: "browser", text: "All content on this website, including text, graphics, logos, and visuals, is the property of AIWorksForce and is protected by intellectual property laws. You may not copy, reproduce, or use our content without permission." },
  { title: "User Responsibilities", icon: "settings", text: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and up-to-date information." },
  { title: "Payments & Subscriptions", icon: "payment", text: "If you purchase any paid services, you agree to pay all applicable fees as per the agreed terms. Payments are non-refundable unless stated otherwise in a separate agreement." },
  { title: "Intellectual Property", icon: "shield", text: "All AI agents, tools, workflows, and solutions provided by AIWorksForce remain our intellectual property unless otherwise agreed in writing. You may not resell, modify, or redistribute our solutions without permission." },
  { title: "Limitation of Liability", icon: "ban", text: "AIWorksForce shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability shall be limited to the amount paid for the specific service in question." },
  { title: "Changes to These Terms", icon: "refresh", text: "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with the updated effective date. Continued use of our services after changes means you accept the revised terms." },
];

const REFERENCE_IMAGE = "/legal-images/terms-and-conditions-reference.png";

/**
 * Clip only the artwork regions of the supplied 1024 × 1536 reference.
 * The page's headings, paragraphs, cards and controls remain real HTML.
 * Keep the reference image at its original dimensions and proportions.
 */
function TermsArtwork({ placement }: { placement: "hero" | "footer" }) {
  const hero = placement === "hero";
  return (
    <div aria-hidden="true" className={`relative w-full overflow-hidden ${hero ? "aspect-[460/342]" : "aspect-[504/248]"}`}>
      <Image
        src={REFERENCE_IMAGE}
        alt=""
        width={1024}
        height={1536}
        unoptimized
        priority={hero}
        draggable={false}
        className="pointer-events-none absolute block h-auto max-w-none select-none"
        style={hero
          ? { width: "222.608696%", left: "-122.608696%", top: "-16.959064%" }
          : { width: "203.174604%", left: "-103.174604%", top: "-519.354839%" }}
      />
    </div>
  );
}

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-blue,#0876ed)]";
const container = "mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8";

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white font-sans text-[var(--color-brand-dark,#071744)] antialiased">
      <section aria-labelledby="terms-title" className="overflow-hidden bg-[linear-gradient(110deg,#f1f7ff_0%,#edf5ff_48%,#dceeff_100%)]">
        <div className={`${container} grid items-center gap-2 pt-9 md:min-h-[400px] md:grid-cols-[1.12fr_1fr] md:gap-4 md:py-5 lg:min-h-[428px]`}>
          <div className="relative z-10 pb-4 md:py-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--color-brand-text,#475569)] sm:mb-7">
            </nav>
            <h1 id="terms-title" className="text-[clamp(2.25rem,5.2vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.045em]">Terms &amp; <span className="text-[var(--color-brand-blue,#0876ed)]">Conditions</span></h1>
            <p className="mt-5 max-w-[630px] text-base leading-[1.55] text-[var(--color-brand-text,#475569)] sm:text-lg lg:text-[21px]">These Terms &amp; Conditions govern your use of our website, services, and solutions at AIWorksForce. By accessing or using our website or services, you agree to be bound by these terms.</p>
          </div>
          <div className="mx-auto w-full max-w-[460px] md:max-w-none">
            <Image
  src="/terms-hero.png"
  alt="Terms and conditions document with a security shield and pen"
  width={1536}
  height={1024}
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  className="h-auto w-full object-contain"
/>
</div>
        </div>
      </section>

      <div className={`${container} space-y-5 py-7 sm:space-y-6 sm:py-8`}>
        <section aria-labelledby="commitment-title" className="grid gap-5 rounded-2xl border border-blue-50 bg-[linear-gradient(110deg,#f2f7ff,#f3f8ff)] p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div className="flex items-start gap-4 sm:items-center sm:gap-6">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:size-[86px]"><Icon name="document" className="size-8 text-[var(--color-brand-blue,#0876ed)] sm:size-10" /></span>
            <div><h2 id="commitment-title" className="text-xl font-bold tracking-tight">Our Agreement</h2><p className="mt-1.5 max-w-[640px] text-[15px] leading-relaxed text-[var(--color-brand-text,#475569)]">These Terms &amp; Conditions outline the rules, responsibilities, and guidelines for using AIWorksForce’s website and services.</p></div>
          </div>
          <div className="flex flex-wrap items-center gap-3 border-t border-blue-200/70 pt-4 text-sm sm:text-[15px] lg:min-h-18 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"><span className="grid size-10 place-items-center rounded-full bg-blue-100/50"><Icon name="shield" className="size-6 text-[var(--color-brand-blue,#0876ed)]" /></span><p>Fair Use <span aria-hidden="true" className="mx-1.5 text-slate-400">|</span> Transparency <span aria-hidden="true" className="mx-1.5 text-slate-400">|</span> Mutual Trust</p></div>
        </section>

        <div className="grid gap-5 md:grid-cols-2 sm:gap-6">
          {sections.map((section, index) => (
            <section key={section.title} aria-labelledby={`terms-section-${index + 1}`} className="grid grid-cols-[2rem_1fr] content-start gap-x-3 gap-y-3 rounded-2xl border border-[#e6edf7] bg-white p-5 shadow-[0_3px_20px_rgba(24,74,140,0.025)] sm:grid-cols-[2rem_3.75rem_minmax(0,1fr)] sm:gap-x-4 sm:p-6 lg:min-h-[172px]">
              <span aria-hidden="true" className="mt-2.5 grid size-8 place-items-center rounded-full bg-blue-50 text-sm font-medium text-[var(--color-brand-blue,#0876ed)]">{String(index + 1).padStart(2, "0")}</span>
              <span className="grid size-14 place-items-center rounded-full bg-[#eaf3ff] text-[var(--color-brand-blue,#0876ed)] sm:size-15"><Icon name={section.icon} className="size-8 sm:size-9" /></span>
              <div className="col-span-2 min-w-0 sm:col-span-1 sm:pt-1.5"><h2 id={`terms-section-${index + 1}`} className="text-lg font-bold leading-snug tracking-[-0.025em] lg:text-xl">{section.title}</h2><p className="mt-2.5 text-[15px] leading-[1.6] text-[var(--color-brand-text,#475569)]">{section.text}</p></div>
            </section>
          ))}
        </div>

        <section aria-labelledby="terms-contact-title" className="grid gap-5 rounded-2xl border border-blue-50 bg-[linear-gradient(110deg,#f2f7ff,#f3f8ff)] p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div className="flex items-start gap-4 sm:items-center sm:gap-6"><span className="grid size-14 shrink-0 place-items-center rounded-full bg-blue-100 text-[var(--color-brand-blue,#0876ed)] sm:size-[86px]"><Icon name="mail" className="size-8 sm:size-10" /></span><div><h2 id="terms-contact-title" className="text-xl font-bold tracking-tight">Contact Us</h2><p className="mt-1.5 max-w-[620px] text-[15px] leading-relaxed text-[var(--color-brand-text,#475569)]">If you have any questions about these Terms &amp; Conditions, please contact us at:</p></div></div>
          <div className="border-t border-blue-200/70 pt-4 lg:flex lg:min-h-20 lg:items-center lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"><a href="mailto:business@aiworksforce.com" className={`inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-medium text-[var(--color-brand-blue,#0876ed)] hover:underline sm:gap-5 sm:text-base ${focus}`}><Icon name="mail" className="size-6 shrink-0 text-[var(--color-brand-dark,#071744)]" /><span className="break-all">business@aiworksforce.com</span></a></div>
        </section>
      </div>

      <section aria-labelledby="terms-cta-title" className="my-6 relative isolate overflow-hidden rounded-t-[32px] bg-[#041539] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_100%,#06318b_0%,transparent_60%)]" />
        <div className={`${container} grid items-center gap-2 md:grid-cols-[1fr_1fr]`}>
          <div className="relative z-10 py-8 sm:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-blue-50 sm:text-sm">Your Trust Matters</p>
            <h2 id="terms-cta-title" className="mt-3 max-w-[610px] text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em]">Let’s Build a Smarter &amp; More Responsible AI-Driven Future.</h2>
            <p className="mt-3 max-w-[470px] text-base leading-relaxed text-blue-50">If you have any questions about our Terms &amp; Conditions, our team is here to help.</p>
            <a href="mailto:business@aiworksforce.com" className={`mt-4 inline-flex min-h-12 items-center justify-center gap-5 rounded-lg bg-[var(--color-brand-blue,#0876ed)] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-blue-dark,#0663c9)] motion-reduce:transition-none ${focus}`}>Contact Our Team<Icon name="arrow" className="size-5" /></a>
          </div>
          <div className="relative mx-auto w-full max-w-[580px] self-end md:-mr-8">
  <Image
    src="/terms-cta.png"
    alt="Terms document with a blue security shield"
    width={1456}
    height={1088}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="block h-auto w-full object-contain object-bottom"
  />
</div>
        </div>
      </section>
    </main>
  );
}
