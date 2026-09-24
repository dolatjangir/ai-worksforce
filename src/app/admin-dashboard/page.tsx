
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import {
  Users,
  Layers3,
  Mail,
  Database,
  LayoutGrid,
  ChevronRight,
  Play,
  MessageSquare,
  X,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import MasterProtectedRoute from '@/utils/masterProtectedRoute';
import { useAuth } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

const setupItems = [
  {
    id: 0,
    icon: Users,
    label: 'Invite your team',
    detailsTitle: 'Invite your team',
    detailsText:
      'Stay connected and collaborate with your team members to share sales updates from one platform.',
    buttonText: 'Invite users',
    action: 'invite',
  },
  {
    id: 1,
    icon: Layers3,
    label: 'Configure your deals pipeline',
    detailsTitle: 'Configure your pipeline',
    detailsText:
      'Build a pipeline that matches your sales process and track deals through every stage.',
    buttonText: 'Configure pipeline',
    action: 'link',
  },
  {
    id: 2,
    icon: Mail,
    label: 'Connect to your email account',
    detailsTitle: 'Connect your email',
    detailsText:
      'Sync your inbox to keep every conversation and follow-up linked to the right deal.',
    buttonText: 'Connect email',
    action: 'link',
  },
  {
    id: 3,
    icon: Database,
    label: 'Migrate your existing data',
    detailsTitle: 'Migrate your data',
    detailsText:
      'Import your contacts, deals, and notes from any existing CRM or spreadsheet.',
    buttonText: 'Start migration',
    action: 'link',
  },
  {
    id: 4,
    icon: LayoutGrid,
    label: 'Integration',
    detailsTitle: 'Browse integrations',
    detailsText:
      'Connect the tools you already use — WhatsApp, Zapier, Google Workspace, and more.',
    buttonText: 'Browse integrations',
    action: 'link',
  },
];

const INVITE_LINK = 'https://makemyleads.com/register';

const CitySkyline = () => (
  <svg
    className="absolute bottom-0 left-0 w-full h-24 opacity-60"
    preserveAspectRatio="none"
    viewBox="0 0 1000 100"
    fill="var(--color-cyan-light)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0,100 L0,60 L40,60 L40,30 L90,30 L90,50 L140,50 L140,20 L190,20 L190,40 L250,40 L250,70 L300,70 L300,40 L350,40 L350,80 L400,80 L400,50 L450,50 L450,10 L500,10 L500,60 L550,60 L550,40 L600,40 L600,70 L650,70 L650,30 L700,30 L700,50 L780,50 L780,20 L850,20 L850,60 L900,60 L900,40 L950,40 L950,80 L1000,80 L1000,100 Z" />
  </svg>
);

const InviteModal = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const addEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ',') && email.trim()) {
      e.preventDefault();
      if (!emails.includes(email.trim()))
        setEmails((prev) => [...prev, email.trim()]);
      setEmail('');
    }
  };

  const removeEmail = (em: string) =>
    setEmails(emails.filter((e) => e !== em));

  const copyLink = () => {
    navigator.clipboard.writeText(INVITE_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendInvites = () => {
    const finalEmails = email.trim()
      ? [...emails, email.trim()]
      : emails;

    if (!finalEmails.length) return;

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(15,23,42,0.5)',
        backdropFilter: 'blur(4px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-[28px] shadow-2xl w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={20} />
        </button>

        {sent ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[var(--color-green-soft)] flex items-center justify-center mx-auto mb-4">
              <Check
                size={26}
                className="text-[var(--color-green)]"
              />
            </div>

            <h3 className="text-[20px] font-bold text-[var(--color-heading)] mb-2">
              Invites sent!
            </h3>

            <p className="text-[14px] text-[var(--color-text)]">
              Your team members will receive an email to join.
            </p>

            <button
              onClick={onClose}
              className="mt-6 px-8 py-2.5 bg-[var(--color-violet)] text-white rounded-lg font-medium text-[14px] hover:bg-[var(--color-violet-600)] transition"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-[22px] font-bold text-[var(--color-heading)] mb-1">
              Invite your team
            </h3>

            <p className="text-[14px] text-[var(--color-text)] mb-5">
              Enter email addresses to send invitations.
            </p>

            {/* Email tag input */}
            <div
              className="min-h-[52px] rounded-xl border border-gray-200 px-3 py-2 flex flex-wrap gap-2 items-center focus-within:border-[var(--color-cyan)] focus-within:ring-2 focus-within:ring-[var(--color-cyan)]/20 transition mb-4 cursor-text"
              onClick={(e) =>
                (
                  e.currentTarget.querySelector(
                    'input'
                  ) as HTMLInputElement
                )?.focus()
              }
            >
              {emails.map((em) => (
                <span
                  key={em}
                  className="flex items-center gap-1 bg-[var(--color-cyan-50)] text-[var(--color-violet-600)] text-[13px] font-medium px-2.5 py-1 rounded-full"
                >
                  {em}

                  <button
                    onClick={() => removeEmail(em)}
                    className="hover:text-red-500 transition ml-0.5"
                  >
                    <X size={11} />
                  </button>
                </span>
              ))}

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={addEmail}
                onBlur={() => {
                  if (email.trim()) {
                    setEmails((prev) => [
                      ...prev,
                      email.trim(),
                    ]);
                    setEmail('');
                  }
                }}
                placeholder={
                  emails.length === 0
                    ? 'Enter email, press Enter to add…'
                    : 'Add another…'
                }
                className="flex-1 min-w-[160px] text-[14px] outline-none bg-transparent text-[var(--color-heading)] placeholder-gray-400"
              />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-gray-100"></div>

              <span className="text-[12px] text-gray-400 font-medium">
                or share invite link
              </span>

              <div className="flex-1 h-px bg-gray-100"></div>
            </div>

            {/* Copy link */}
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-6">
              <span className="flex-1 text-[13px] text-gray-500 truncate">
                {INVITE_LINK}
              </span>

              <button
                onClick={copyLink}
                className="flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-violet-600)] hover:text-[var(--color-violet)] transition flex-shrink-0"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <button
              onClick={sendInvites}
              disabled={
                sending ||
                (!emails.length && !email.trim())
              }
              className="w-full py-2.5 bg-[var(--color-violet-600)] hover:bg-[var(--color-primary-dark)] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-[14px] transition shadow-md"
            >
              {sending
                ? 'Sending…'
                : `Send invite${emails.length > 1 ? 's' : ''}`}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default function DashboardPage() {
  const { admin, isLoading, login } = useAuth();

  const [activeItemId, setActiveItemId] = useState(0);
  const [showInviteModal, setShowInviteModal] =
    useState(false);

  const activeItem =
    setupItems.find((item) => item.id === activeItemId) ||
    setupItems[0];

  const handleActionClick = () => {
    if (activeItem.action === 'invite') {
      setShowInviteModal(true);
    } else {
      window.open(
        'https://app.makemyleads.com',
        '_blank'
      );
    }
  };

  return (
    <MasterProtectedRoute>
      {/* h-screen + overflow-hidden locks the page to viewport height on desktop */}
      <main
        className={`h-screen overflow-hidden bg-white text-[var(--color-heading)] flex flex-col ${inter.className}`}
      >
        {showInviteModal && (
          <InviteModal
            onClose={() => setShowInviteModal(false)}
          />
        )}

        <div className="flex-1 flex flex-col min-h-0 max-w-[1400px] w-full mx-auto px-6 py-5 md:px-12">
          {/* Top bar */}
          <div className="flex justify-end items-center gap-3 mb-4 flex-shrink-0 relative z-20">
            {/* Access CRM Button */}
            <a
              href="https://app.makemyleads.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="flex items-center cursor-pointer gap-2 px-5 py-2 text-sm font-semibold text-white rounded-lg shadow-md transition hover:brightness-110 hover:-translate-y-px active:translate-y-0 bg-linear-to-r from-(--color-cyan) via-(--color-primary) to-(--color-violet)"
                style={{
                  boxShadow:
                    '0 4px 14px rgba(14,124,112,0.35)',
                }}
              >
                <ExternalLink size={14} />
                Access CRM
              </button>
            </a>

            <Link href="/">
              <button className="px-6 py-2 text-sm font-medium border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-gray-700 shadow-sm transition">
                Skip
              </button>
            </Link>
          </div>

          {/* MAIN CONTENT — fills remaining height */}
          <div className="flex-1 flex flex-col lg:flex-row items-stretch min-h-0 relative">
            {/* LEFT CARD (Positioned Behind) */}
            <div
              className="relative z-0 w-full lg:w-[42%] rounded-[36px] pt-10 px-10 pb-6 overflow-hidden flex flex-col justify-between"
              style={{
                background:
                  'linear-gradient(180deg, #c0ecec 0%, #d8f7f3 50%, #f0fdf9 100%)',
              }}
            >
              <CitySkyline />

              <div className="relative z-10 max-w-[280px]">
                <h1 className="text-[30px] font-bold leading-[1.15] tracking-tight mb-3 text-[var(--color-heading)]">
                  Hello
                  <br />
                  {admin?.name || 'User'}{' '}
                  <span className="inline-block origin-bottom-left text-2xl">
                    👋
                  </span>
                </h1>

                <p className="text-[14px] text-[var(--color-text)] leading-relaxed mb-6">
                  We&apos;re happy to bring you aboard the
                  world&apos;s favorite CRM!
                </p>

                <div className="mb-6">
                  <p className="text-[14px] font-bold text-[var(--color-heading)]">
                    Let&apos;s get started!
                  </p>

                  <div className="mt-4">
                    <p className="text-[14px] font-bold text-[var(--color-heading)]">
                      Watch a one-minute video
                    </p>

                    <p className="text-[13px] text-[var(--color-text)]">
                      View the key features we offer
                    </p>
                  </div>
                </div>

                {/* Video Illustration */}
                <div className="relative w-[220px] h-[140px]">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-sm border border-[var(--color-cyan-light)] flex items-center justify-center p-4">
                    <div className="absolute top-3 left-3 w-10 h-14 bg-[var(--color-cyan-50)] rounded-md"></div>

                    <div className="absolute bottom-3 right-3 w-14 h-10 bg-[var(--color-cyan-50)] rounded-md"></div>

                    <div className="flex gap-2 relative z-10 items-end h-full pb-2">
                      <div className="w-5 h-12 bg-[var(--color-heading)] rounded-sm"></div>

                      <div className="w-7 h-9 bg-[var(--color-primary)] rounded-sm"></div>
                    </div>

                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-[var(--color-heading)] text-white rounded-full shadow-lg flex items-center justify-center pl-1 z-20 hover:scale-105 transition">
                      <Play
                        size={18}
                        fill="currentColor"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Webinar strip — pinned to bottom of left card */}
              <div className="relative z-10 flex items-center gap-3 mt-4">
                <div
                  className="w-10 h-10 rounded-[12px] flex items-center justify-center relative shadow-sm flex-shrink-0"
                  style={{
                    background:
                      'linear-gradient(135deg, #fce7f3 0%, #dbeafe 100%)',
                  }}
                >
                  <MessageSquare className="w-5 h-5 text-[var(--color-violet-light)]" />

                  <div className="absolute -top-1 -left-1 text-[var(--color-violet-light)] text-[10px]">
                    ✦
                  </div>

                  <div className="absolute -top-1.5 right-0.5 text-[var(--color-cyan-light)] text-[10px]">
                    ✦
                  </div>
                </div>

                <div>
                  <p className="text-[12px] text-[var(--color-text)]">
                    Need a Live Webinar?
                  </p>

                  <Link
                    href="#"
                    className="text-[13px] font-bold text-[var(--color-violet-600)] hover:underline block"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT CARD (Positioned In Front & Overlapping) */}
            <div
              className="relative z-10 w-full lg:w-[68%] lg:-ml-[10%] mt-6 lg:mt-10 rounded-[28px] p-8 lg:p-10 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col"
              style={{
                background:
                  'linear-gradient(135deg, #c4ecee 0%, #f5d0e8 40%, #c6f5f0 100%)',
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 flex-1 min-h-0">
                {/* Setup Menu List */}
                <div className="flex flex-col">
                  <h2 className="text-[22px] font-bold tracking-tight text-[var(--color-heading)] mb-0.5">
                    Set up your CRM
                  </h2>

                  <p className="text-[13px] text-[var(--color-text)] mb-5">
                    Make your CRM smarter and more interactive
                  </p>

                  <ul className="space-y-2.5">
                    {setupItems.map((item) => {
                      const Icon = item.icon;
                      const isActive =
                        item.id === activeItemId;

                      return (
                        <li key={item.id}>
                          {isActive ? (
                            <div className="rounded-xl p-[2px] bg-[var(--gradient-brand)]">
                              <button
                                onClick={() =>
                                  setActiveItemId(item.id)
                                }
                                className="w-full bg-white rounded-[10px] px-4 py-3 flex items-center gap-4 text-left shadow-sm"
                              >
                                <Icon className="h-5 w-5 text-[var(--color-heading)] flex-shrink-0" />

                                <span className="flex-1 font-semibold text-[var(--color-heading)] text-[14px]">
                                  {item.label}
                                </span>

                                <div className="bg-[var(--color-violet-600)] rounded-full p-1 text-white flex items-center justify-center flex-shrink-0">
                                  <ChevronRight
                                    size={13}
                                    strokeWidth={3}
                                  />
                                </div>
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() =>
                                setActiveItemId(item.id)
                              }
                              className="w-full bg-white rounded-xl px-4 py-3 flex items-center gap-4 text-left shadow-sm border border-transparent hover:border-gray-200 transition"
                            >
                              <div className="bg-gray-100 p-1.5 rounded-lg flex-shrink-0">
                                <Icon className="h-4 w-4 text-gray-500" />
                              </div>

                              <span className="flex-1 text-[var(--color-text)] text-[14px] font-medium">
                                {item.label}
                              </span>
                            </button>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Dynamic Detail View */}
                <div className="flex flex-col items-center justify-center text-center px-2">
                  {/* Abstract Blob & Icons */}
                  <div className="relative w-[150px] h-[150px] mb-4 flex items-center justify-center">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-full h-full text-white/90 drop-shadow-md"
                    >
                      <path
                        fill="currentColor"
                        d="M44.7,-76.4C58.3,-69.2,70,-56.9,79.8,-43.3C89.6,-29.7,97.5,-14.8,96.6,-0.5C95.6,13.8,85.8,27.5,75.2,39.8C64.6,52.1,53.2,63.1,39.9,71.1C26.6,79.1,11.3,84.1,-3.5,89.5C-18.4,95,-36.8,101.1,-50.7,94.4C-64.6,87.7,-74.1,68.2,-80.6,50.1C-87.1,32,-90.6,15.1,-89.6,0.6C-88.6,-14,-83.1,-27.9,-75.4,-39.9C-67.7,-51.9,-57.8,-62,-45.5,-70.2C-33.2,-78.4,-18.6,-84.7,-2.1,-81.1C14.4,-77.6,28.8,-64.1,44.7,-76.4Z"
                        transform="translate(100 100)"
                      />
                    </svg>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex -mb-2">
                        <div className="w-9 h-9 rounded-full bg-[var(--color-violet-600)] border-2 border-white z-10"></div>

                        <div className="w-7 h-7 rounded-full bg-[var(--color-cyan-light)] border-2 border-white -ml-3 mt-2"></div>
                      </div>

                      <div className="w-14 h-7 rounded-full bg-[var(--gradient-brand)] border-2 border-white z-20"></div>
                    </div>

                    <div className="absolute top-7 left-5 text-[var(--color-cyan-500)] text-lg">
                      ✦
                    </div>

                    <div className="absolute top-3 right-10 text-[var(--color-green-light)] text-xs">
                      ✦
                    </div>

                    <div className="absolute bottom-7 right-5 text-[var(--color-violet-light)] text-base">
                      ✦
                    </div>
                  </div>

                  <h3 className="text-[17px] font-bold text-[var(--color-heading)] mb-1.5">
                    {activeItem.detailsTitle}
                  </h3>

                  <p className="text-[13px] text-[var(--color-text)] leading-relaxed mb-6 max-w-[230px]">
                    {activeItem.detailsText}
                  </p>

                  <button
                    onClick={handleActionClick}
                    className="px-8 py-2.5 bg-[var(--color-violet-600)] hover:bg-[var(--color-primary-dark)] text-white rounded-lg font-medium shadow-md transition text-[14px]"
                  >
                    {activeItem.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MasterProtectedRoute>
  );
}