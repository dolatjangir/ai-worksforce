import type { ReactNode } from "react";

/**
 * Next.js App Router · Tailwind CSS v4 · Server Component.
 * Save as app/privacy-policy/page.tsx, or import into an existing page.
 * Uses your global brand tokens with matching fallback colors.
 * Your existing layout.tsx supplies the shared website header/footer.
 * Illustration is self-contained SVG; no image files or icon packages needed.
 */
type IconName = "shield" | "document" | "settings" | "share" | "cookie" | "globe" | "user" | "edit" | "mail" | "lock" | "home" | "arrow";

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
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  };
  return <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>;
}

const sections: readonly { title: string; icon: IconName; text: string }[] = [
  { title: "Information We Collect", icon: "document", text: "We collect information you provide directly to us, such as your name, email address, phone number, company details, and any other information you share through our website forms or communications." },
  { title: "How We Use Your Information", icon: "settings", text: "We use your information to provide and improve our services, respond to your inquiries, communicate with you, send relevant updates, and deliver personalized experiences." },
  { title: "Data Protection", icon: "shield", text: "We implement industry-standard security measures to protect your information from unauthorized access, misuse, or disclosure." },
  { title: "Sharing of Information", icon: "share", text: "We do not sell your personal information. We may share your information with trusted service providers who help us operate our website and deliver our services, under strict confidentiality agreements." },
  { title: "Cookies & Tracking Technologies", icon: "cookie", text: "We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can manage your cookie preferences through your browser settings." },
  { title: "Third-Party Links", icon: "globe", text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites." },
  { title: "Your Rights", icon: "user", text: "You have the right to access, update, or request deletion of your personal information. You can also opt out of marketing communications at any time." },
  { title: "Changes to This Policy", icon: "edit", text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date." },
];

/** Decorative vector approximation of the supplied hero artwork. */
function PrivacyArtwork() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 560 420" fill="none" className="block h-auto w-full">
      <defs>
        <linearGradient id="pp-glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="white" stopOpacity=".85" /><stop offset="1" stopColor="#94c9ff" stopOpacity=".45" /></linearGradient>
        <linearGradient id="pp-blue" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#43bdff" /><stop offset=".5" stopColor="#0666ff" /><stop offset="1" stopColor="#2624dc" /></linearGradient>
        <linearGradient id="pp-paper" x1="0" y1="0" x2="1" y2="1"><stop stopColor="white" /><stop offset="1" stopColor="#c8ddff" /></linearGradient>
        <filter id="pp-shadow" x="-40%" y="-30%" width="190%" height="190%"><feDropShadow dx="8" dy="13" stdDeviation="11" floodColor="#236cec" floodOpacity=".22" /></filter>
      </defs>
      <ellipse cx="300" cy="292" rx="242" ry="84" stroke="white" strokeWidth="5" opacity=".8" transform="rotate(-12 300 292)" />
      <g transform="skewY(12)">
        <rect x="212" y="-28" width="252" height="284" rx="20" fill="url(#pp-glass)" stroke="white" strokeOpacity=".7" />
        <rect x="145" y="56" width="363" height="213" rx="14" fill="#8cc3ff" fillOpacity=".18" stroke="#88c0ff" />
        <rect x="241" y="-1" width="195" height="264" rx="17" fill="url(#pp-paper)" stroke="white" strokeWidth="3" filter="url(#pp-shadow)" />
        <text x="261" y="41" fill="#0634a4" fontSize="19" fontWeight="700" fontFamily="Arial, sans-serif">PRIVACY</text>
        {[65, 88, 111, 134, 157, 180].map((y) => <rect key={y} x="261" y={y} width="151" height="8" rx="4" fill="#adcaff" opacity=".6" />)}
      </g>
      <g filter="url(#pp-shadow)">
        <path d="M242 144c-35 23-64 30-97 31v89c0 62 42 109 97 138 55-29 97-76 97-138v-89c-33-1-62-8-97-31Z" fill="url(#pp-paper)" stroke="white" strokeWidth="6" />
        <path d="M242 162c-28 18-52 26-79 29v74c0 50 34 91 79 118 45-27 79-68 79-118v-74c-27-3-51-11-79-29Z" fill="url(#pp-blue)" stroke="#9edbff" strokeWidth="3" />
        <path d="M242 168v209c43-27 73-65 73-112v-69c-25-4-47-11-73-28Z" fill="#1532d9" opacity=".25" />
        <path d="M219 254v-19a23 23 0 0 1 46 0v19" stroke="#b3cbff" strokeWidth="12" />
        <path d="M216 252v-19a23 23 0 0 1 46 0v19" stroke="white" strokeWidth="9" />
        <rect x="204" y="250" width="73" height="66" rx="12" fill="url(#pp-paper)" stroke="white" strokeWidth="2" />
        <circle cx="240" cy="274" r="8" fill="#1734c2" /><path d="M240 278v17" stroke="#1734c2" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g transform="translate(413 191) skewY(12)"><rect width="74" height="82" rx="11" fill="url(#pp-blue)" stroke="#c5eeff" strokeWidth="2" /><circle cx="37" cy="28" r="11" fill="white" /><path d="M19 65v-5a18 15 0 0 1 36 0v5Z" fill="#e0f0ff" /></g>
      <g transform="translate(364 301) skewY(12)"><rect x="-15" y="-15" width="101" height="104" rx="13" fill="url(#pp-glass)" stroke="white" /><rect width="71" height="73" rx="9" fill="url(#pp-blue)" stroke="#bce2ff" strokeWidth="2" /><path d="m19 36 12 12 23-26" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></g>
    </svg>
  );
}

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand-blue,#0876ed)]";
const container = "mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white font-sans text-[var(--color-brand-dark,#071744)] antialiased">
      <section aria-labelledby="privacy-title" className="overflow-hidden bg-[linear-gradient(110deg,#f1f7ff_0%,#edf5ff_48%,#dceeff_100%)]">
        <div className={`${container} grid items-center gap-2 pt-9 md:min-h-[450px] md:grid-cols-[1.02fr_1fr] md:gap-4 md:py-5 lg:min-h-[470px]`}>
          <div className="relative z-10 pb-4 md:py-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--color-brand-text,#475569)] sm:mb-7">

            </nav>
            <h1 id="privacy-title" className="text-[clamp(2.5rem,5.9vw,5rem)] font-bold leading-[1.08] tracking-[-0.045em]">Privacy <span className="text-[var(--color-brand-blue,#0876ed)]">Policy</span></h1>
            <p className="mt-5 max-w-[540px] text-base leading-[1.55] text-[var(--color-brand-text,#475569)] sm:text-lg lg:text-[21px]">Your privacy is important to us. This policy explains how we collect, use, protect, and manage your information at AIWorksForce.</p>
          </div>
          <div className="mx-auto w-full max-w-[460px] md:max-w-none"><PrivacyArtwork /></div>
        </div>
      </section>

      <div className={`${container} space-y-5 py-7 sm:space-y-6 sm:py-8`}>
        <section aria-labelledby="commitment-title" className="grid gap-5 rounded-2xl border border-blue-50 bg-[linear-gradient(110deg,#f2f7ff,#f3f8ff)] p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div className="flex items-start gap-4 sm:items-center sm:gap-6">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:size-[86px]"><Icon name="shield" className="size-8 text-[var(--color-brand-blue,#0876ed)] sm:size-10" /></span>
            <div><h2 id="commitment-title" className="text-xl font-bold tracking-tight">Our Commitment</h2><p className="mt-1.5 max-w-[640px] text-[15px] leading-relaxed text-[var(--color-brand-text,#475569)]">We are committed to protecting your personal information and ensuring transparency about how we handle your data.</p></div>
          </div>
          <div className="flex flex-wrap items-center gap-3 border-t border-blue-200/70 pt-4 text-sm sm:text-[15px] lg:min-h-18 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"><span className="grid size-10 place-items-center rounded-full bg-blue-100/50"><Icon name="lock" className="size-6" /></span><p>Secure <span aria-hidden="true" className="mx-1.5 text-slate-400">|</span> Transparent <span aria-hidden="true" className="mx-1.5 text-slate-400">|</span> Responsible</p></div>
        </section>

        <div className="grid gap-5 md:grid-cols-2 sm:gap-6">
          {sections.map((section, index) => (
            <section key={section.title} aria-labelledby={`policy-section-${index + 1}`} className="grid grid-cols-[2rem_1fr] content-start gap-x-3 gap-y-3 rounded-2xl border border-[#e6edf7] bg-white p-5 shadow-[0_3px_20px_rgba(24,74,140,0.025)] sm:grid-cols-[2rem_3.75rem_minmax(0,1fr)] sm:gap-x-4 sm:p-6 lg:min-h-[190px]">
              <span aria-hidden="true" className="mt-2.5 grid size-8 place-items-center rounded-full bg-blue-50 text-sm font-medium text-[var(--color-brand-blue,#0876ed)]">{String(index + 1).padStart(2, "0")}</span>
              <span className="grid size-14 place-items-center rounded-full bg-[#eaf3ff] text-[var(--color-brand-blue,#0876ed)] sm:size-15"><Icon name={section.icon} className="size-8 sm:size-9" /></span>
              <div className="col-span-2 min-w-0 sm:col-span-1 sm:pt-1.5"><h2 id={`policy-section-${index + 1}`} className="text-lg font-bold leading-snug tracking-[-0.025em] lg:text-xl">{section.title}</h2><p className="mt-2.5 text-[15px] leading-[1.6] text-[var(--color-brand-text,#475569)]">{section.text}</p></div>
            </section>
          ))}
        </div>

        <section aria-labelledby="privacy-contact-title" className="grid gap-5 rounded-2xl border border-blue-50 bg-[linear-gradient(110deg,#f2f7ff,#f3f8ff)] p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div className="flex items-start gap-4 sm:items-center sm:gap-6"><span className="grid size-14 shrink-0 place-items-center rounded-full bg-blue-100 text-[var(--color-brand-blue,#0876ed)] sm:size-[86px]"><Icon name="mail" className="size-8 sm:size-10" /></span><div><h2 id="privacy-contact-title" className="text-xl font-bold tracking-tight">Contact Us</h2><p className="mt-1.5 max-w-[620px] text-[15px] leading-relaxed text-[var(--color-brand-text,#475569)]">If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p></div></div>
          <div className="border-t border-blue-200/70 pt-4 lg:flex lg:min-h-20 lg:items-center lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"><a href="mailto:business@aiworksforce.com" className={`inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-medium text-[var(--color-brand-blue,#0876ed)] hover:underline sm:gap-5 sm:text-base ${focus}`}><Icon name="mail" className="size-6 shrink-0 text-[var(--color-brand-dark,#071744)]" /><span className="break-all">business@aiworksforce.com</span></a></div>
        </section>
      </div>

      <section aria-labelledby="privacy-cta-title" className="relative isolate overflow-hidden rounded-t-[32px] bg-[linear-gradient(110deg,#0c2457,#03102f_75%)] py-10 text-white sm:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 -bottom-28 -z-10 h-72 w-[60%] rotate-[-18deg] rounded-[50%] opacity-40 [background-image:radial-gradient(#0876ed_1.5px,transparent_1.5px)] [background-size:12px_12px] [mask-image:linear-gradient(transparent,black)]" />
        <div className={`${container} flex flex-col items-start justify-between gap-7 md:flex-row md:items-center md:gap-10`}><div><p className="text-xs font-medium uppercase tracking-[0.06em] text-blue-100 sm:text-sm">Your Trust Matters</p><h2 id="privacy-cta-title" className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.035em]">Have Questions About Your Data?</h2><p className="mt-3 text-base leading-relaxed text-blue-50">We&apos;re here to help. Reach out to our team for any privacy-related queries.</p></div><a href="mailto:business@aiworksforce.com" className={`inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-6 rounded-xl bg-[var(--color-brand-blue,#0876ed)] px-9 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-brand-blue-dark,#0663c9)] motion-reduce:transition-none sm:w-auto ${focus}`}>Contact Us<Icon name="arrow" className="size-5" /></a></div>
      </section>
    </main>
  );
}
