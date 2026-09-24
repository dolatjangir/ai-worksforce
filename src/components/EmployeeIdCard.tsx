'use client';

import { useState } from 'react';
import {
  User, Award, ShieldCheck, ShieldAlert, RotateCw, RotateCcw,
  Copy, Check, CheckCircle2, XCircle, Pencil, Trash2, Printer
} from 'lucide-react';
import { motion } from 'framer-motion';

/* ============================================================
   1. BRAND CONFIG — change company details/colors here ONLY.
   ============================================================ */
export const BRAND_FROM = '#7C3AED';
export const BRAND_VIA = '#5B4FE0';
export const BRAND_TO = '#2563EB';
export const BRAND_TEXT = '#4338CA';
export const BRAND_GRADIENT = `linear-gradient(135deg, ${BRAND_FROM}, ${BRAND_VIA}, ${BRAND_TO})`;

export const COMPANY_INFO = {
  name: 'Creatik AI',
  shortName: 'Creatik Ai',
  logoUrl: '/creatikai-logo.png',
  website: 'www.creatikai.com',
  email: 'helloworld@creatikai.com',
  address: 'Jaipur, Rajasthan, India',
  signatoryLabel: 'Authorized signatory',
  termsAndConditions: [
    'This card is the property of Creatik AI and must be returned upon request or when employment ends.',
    'If found, please return it to the nearest Creatik AI office or reach out using the details below.',
    'Non-transferable. Must be presented for building access and identity checks.',
  ],
};

/* ============================================================
   2. SHARED TYPE
   ============================================================ */
export interface EmployeeCardData {
  id?: string;
  employeeId: string;
  employeeName: string;
  email: string;
  phone: string;
  jobTitle: string;
  qualifications?: string;
  dateOfBirth: string;
  skills?: string[];
  imageUrl: string | null;
  hasVerified: boolean;
  hasCertificate: boolean;
  createdAt: string;
}

/* ============================================================
   3. COMPANY ID CARD — flip card for screen use.
   ============================================================ */
interface CompanyIdCardProps {
  emp: EmployeeCardData;
  onEdit?: (emp: EmployeeCardData) => void;
  onDelete?: (id: string, name: string) => void;
  onVerifyToggle?: (emp: EmployeeCardData) => void;
  onGenerateCert?: (emp: EmployeeCardData) => void;
  onPrint?: (emp: EmployeeCardData) => void;
  showCopyButton?: boolean;
}

export const CompanyIdCard = ({
  emp, onEdit, onDelete, onVerifyToggle, onGenerateCert, onPrint, showCopyButton = true
}: CompanyIdCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const shortId = emp.employeeId;
  const barcodeId = emp.employeeId;

  const handleCopyId = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(emp.employeeId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy Employee ID', err);
    }
  };

  const showCertButton = !!onGenerateCert && emp.hasVerified && !emp.hasCertificate;
  const showCertIssuedBadge = !!onGenerateCert && emp.hasCertificate;
  const showVerifyButton = !!onVerifyToggle;
  const showPrintButton = !!onPrint && emp.hasVerified;
  const showEditButton = !!onEdit;
  const showDeleteButton = !!onDelete && !!emp.id;
  const hasActions = showCertButton || showCertIssuedBadge || showVerifyButton ||
    showPrintButton || showEditButton || showDeleteButton;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      // FIX: Removed fixed h-[440px] from here so it doesn't overlap DOM siblings.
      className="relative w-full max-w-[280px] mx-auto select-none"
    >
      <div className="flex flex-col items-center relative z-0">
        <div
          className="w-9 h-11 shadow-sm"
          style={{ background: `linear-gradient(180deg, ${BRAND_FROM}, ${BRAND_TO})`, clipPath: 'polygon(22% 0%, 78% 0%, 100% 100%, 0% 100%)' }}
        />
        <div className="w-7 h-7 -mt-1 rounded-full bg-gradient-to-b from-slate-200 to-slate-400 ring-4 ring-white shadow" />
      </div>

      <div className="relative -mt-1 w-full h-[440px]" style={{ perspective: '1800px' }}>
        <div
          className="relative grid w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* ==========================================
              FRONT FACE
             ========================================== */}
          <div
            className="col-start-1 row-start-1 relative bg-white rounded-[1.75rem] shadow-md hover:shadow-2xl ring-1 ring-slate-200 overflow-hidden group transition-shadow duration-300 w-full h-full"
            style={{ backfaceVisibility: 'hidden', pointerEvents: isFlipped ? 'none' : 'auto' }}
          >
            {/* SVG WAVY BACKGROUND (FRONT) */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 280 440" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="brandWaveFront" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={BRAND_FROM} />
                  <stop offset="50%" stopColor={BRAND_VIA} />
                  <stop offset="100%" stopColor={BRAND_TO} />
                </linearGradient>
              </defs>
              {/* Single smooth ~ wave filling the bottom */}
              <path d="M0,220 C80,160 200,260 280,200 L280,440 L0,440 Z" fill="url(#brandWaveFront)" />
            </svg>

            {/* HEADER */}
            <div className="absolute top-6 w-full flex items-start justify-between px-5 z-10">
              <div className="flex items-center gap-1.5">
                <img src={COMPANY_INFO.logoUrl} alt={COMPANY_INFO.name} className="w-8 h-8 rounded-full bg-white object-contain border border-slate-100 shadow-sm" />
                <span className="font-extrabold text-slate-800 text-[16px] uppercase tracking-tight leading-none">{COMPANY_INFO.shortName}</span>
              </div>
              <div className="flex flex-col gap-1.5 mt-1 mr-1">
                {emp.hasCertificate && <Award className="w-5 h-5 text-amber-500 drop-shadow-sm" />}
                {emp.hasVerified ? <ShieldCheck className="w-5 h-5 text-emerald-500 drop-shadow-sm" /> : <ShieldAlert className="w-5 h-5 text-amber-400 drop-shadow-sm" />}
              </div>
            </div>

            {/* AVATAR */}
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 z-20">
              <div className="w-[110px] h-[110px] rounded-full border-[5px] border-white bg-slate-100 overflow-hidden shadow-lg flex items-center justify-center">
                {emp.imageUrl ? (
                  <img src={emp.imageUrl} alt={emp.employeeName} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-slate-300" />
                )}
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="absolute bottom-10 w-full px-6 flex flex-col items-center z-20 text-white">
              <h3 className="text-[20px] font-extrabold leading-tight uppercase text-center w-full line-clamp-2 drop-shadow-md">{emp.employeeName}</h3>
              <span className="text-[12px] text-white/90 font-medium mb-5">{emp.jobTitle || 'Employee'}</span>

              <div className="w-full grid grid-cols-[45px_10px_1fr] gap-y-1 text-[11px]">
                <span className="font-bold uppercase tracking-wide">ID</span> <span>:</span> <span className="font-mono">{shortId}</span>
                <span className="font-bold uppercase tracking-wide">DOB</span> <span>:</span> <span>{new Date(emp.dateOfBirth).toLocaleDateString()}</span>
                <span className="font-bold uppercase tracking-wide">Email</span> <span>:</span> <span className="truncate">{emp.email}</span>
                <span className="font-bold uppercase tracking-wide">Phone</span> <span>:</span> <span className="font-mono">{emp.phone}</span>
              </div>
            </div>

            {/* INTERACTIVE CONTROLS */}
            {showCopyButton && (
              <button
                onClick={handleCopyId}
                className="absolute top-3 right-14 opacity-0 group-hover:opacity-100 z-50 w-8 h-8 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center text-slate-500 hover:scale-110 transition-all cursor-pointer"
                title="Copy Employee ID"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" style={{ color: BRAND_TEXT }} />}
              </button>
            )}

            <button
              onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 z-50 w-8 h-8 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center text-slate-500 hover:scale-110 transition-all cursor-pointer"
              title="View back of card"
            >
              <RotateCw className="w-3.5 h-3.5" style={{ color: BRAND_TEXT }} />
            </button>

            {/* ACTION OVERLAY */}
            {hasActions && (
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-40 rounded-[1.75rem]">
                {showCertButton && (
                  <button onClick={() => onGenerateCert!(emp)} className="w-3/4 py-2.5 bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105 shadow-lg">
                    <Award className="w-4 h-4" /> Issue cert
                  </button>
                )}
                {showCertIssuedBadge && (
                  <div className="w-3/4 py-2.5 bg-slate-800/80 text-white rounded-xl font-bold flex items-center justify-center gap-2 cursor-default shadow-lg border border-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Issued
                  </div>
                )}
                {showVerifyButton && (
                  <button onClick={() => onVerifyToggle!(emp)} className={`w-3/4 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105 shadow-lg ${emp.hasVerified ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'}`}>
                    {emp.hasVerified ? <><XCircle className="w-4 h-4" /> Revoke</> : <><ShieldCheck className="w-4 h-4" /> Verify</>}
                  </button>
                )}
                {showPrintButton && (
                  <button onClick={() => onPrint!(emp)} className="w-3/4 py-2.5 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105 shadow-lg">
                    <Printer className="w-4 h-4" /> Print
                  </button>
                )}
                {showEditButton && (
                  <button onClick={() => onEdit!(emp)} className="w-3/4 py-2.5 bg-white text-slate-800 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105 shadow-lg">
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                )}
                {showDeleteButton && (
                  <button onClick={() => onDelete!(emp.id!, emp.employeeName)} className="w-3/4 py-2.5 bg-red-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105 shadow-lg">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                )}
              </div>
            )}
          </div>

          {/* ==========================================
              BACK FACE
             ========================================== */}
          <div
            className="col-start-1 row-start-1 relative group bg-white w-full h-full rounded-[1.75rem] shadow-md ring-1 ring-slate-200 overflow-hidden flex flex-col cursor-pointer"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', pointerEvents: isFlipped ? 'auto' : 'none' }}
            onClick={() => setIsFlipped(false)}
          >
            {/* SVG WAVY BACKGROUND (BACK) */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 280 440" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="brandWaveBack" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={BRAND_FROM} />
                  <stop offset="50%" stopColor={BRAND_VIA} />
                  <stop offset="100%" stopColor={BRAND_TO} />
                </linearGradient>
              </defs>
              {/* Single smooth ~ wave filling the top */}
              <path d="M0,0 L280,0 L280,120 C200,160 80,80 0,130 Z" fill="url(#brandWaveBack)" />
            </svg>

            {/* HEADER */}
            <div className="absolute top-6 right-5 z-10 flex items-center gap-2 flex-row-reverse">
              <img src={COMPANY_INFO.logoUrl} alt={COMPANY_INFO.name} className="w-9 h-9 rounded-full bg-white object-contain p-1 border border-slate-100" />
              <span className="font-extrabold text-white text-[16px] uppercase tracking-tight leading-none drop-shadow-md">{COMPANY_INFO.shortName}</span>
            </div>

            {/* CONTENT BLOCK */}
            <div className="absolute top-[155px] bottom-6 w-full px-6 flex flex-col justify-between z-20">
              
              <ul className="space-y-1.5 text-[9px] text-slate-600 leading-snug list-disc pl-3">
                {COMPANY_INFO.termsAndConditions.slice(0, 2).map((term, i) => <li key={i}>{term}</li>)}
              </ul>

              <div className="flex flex-col items-center my-1">
                <div className="flex gap-[2px] h-6 items-end justify-center w-full">
                  {[...Array(34)].map((_, i) => (
                    <div key={i} className={`bg-slate-800 ${i % 4 === 0 ? 'w-[3px] h-full' : i % 3 === 0 ? 'w-[2px] h-4/5' : 'w-[1.5px] h-2/3'}`} />
                  ))}
                </div>
                <span className="text-[8px] font-mono text-slate-500 mt-1">{barcodeId}</span>
              </div>

              <div className="w-full">
                <h4 className="text-[11px] font-bold mb-1" style={{ color: BRAND_TEXT }}>Contact Us:</h4>
                <div className="grid grid-cols-[45px_5px_1fr] gap-y-0.5 text-[9.5px] text-slate-800 font-medium leading-tight">
                  <span className="text-slate-500">Website</span> <span>:</span> <span>{COMPANY_INFO.website}</span>
                  <span className="text-slate-500">Email</span> <span>:</span> <span>{COMPANY_INFO.email}</span>
                  <span className="text-slate-500">Address</span> <span>:</span> <span>{COMPANY_INFO.address}</span>
                </div>
              </div>

              <div className="flex justify-end w-full">
                <div className="border-t border-slate-300 w-28 flex flex-col items-center pt-1.5">
                  <span className="font-serif italic text-xs text-slate-800 mb-0.5">{COMPANY_INFO.name}</span>
                  <span className="text-[7.5px] text-slate-400 text-center leading-tight">{COMPANY_INFO.signatoryLabel}</span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE CONTROLS */}
            <button
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
              className="absolute top-3 left-3 z-50 w-8 h-8 opacity-0 group-hover:opacity-100 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center text-slate-500 hover:scale-110 transition-all cursor-pointer"
              title="View front of card"
            >
              <RotateCcw className="w-3.5 h-3.5" style={{ color: BRAND_TEXT }} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ============================================================
   4. PRINTABLE ID CARD — front (left) + back (right)
   ============================================================ */
export const PrintableIdCard = ({ emp }: { emp: EmployeeCardData }) => {
  const shortId = emp.employeeId;
  const barcodeId = emp.employeeId;

  return (
    <div className="print-card-row">
      {/* PRINT FRONT FACE */}
      <div className="print-card-face relative bg-white rounded-[1.75rem] ring-1 ring-slate-200 overflow-hidden w-[280px] h-[440px]">
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 280 440" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="brandWavePrintFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={BRAND_FROM} />
              <stop offset="50%" stopColor={BRAND_VIA} />
              <stop offset="100%" stopColor={BRAND_TO} />
            </linearGradient>
          </defs>
          <path d="M0,220 C80,160 200,260 280,200 L280,440 L0,440 Z" fill="url(#brandWavePrintFront)" />
        </svg>

        <div className="absolute top-6 w-full flex items-start justify-between px-5 z-10">
          <div className="flex items-center gap-1.5">
            <img src={COMPANY_INFO.logoUrl} alt={COMPANY_INFO.name} className="w-8 h-8 rounded-full bg-white object-contain border border-slate-100 shadow-sm" />
            <span className="font-extrabold text-slate-800 text-[16px] uppercase tracking-tight leading-none">{COMPANY_INFO.shortName}</span>
          </div>
          <div className="flex flex-col gap-1.5 mt-1 mr-1">
            {emp.hasCertificate && <Award className="w-5 h-5 text-amber-500 drop-shadow-sm" />}
            {emp.hasVerified ? <ShieldCheck className="w-5 h-5 text-emerald-500 drop-shadow-sm" /> : <ShieldAlert className="w-5 h-5 text-amber-400 drop-shadow-sm" />}
          </div>
        </div>

        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 z-20">
          <div className="w-[110px] h-[110px] rounded-full border-[5px] border-white bg-slate-100 overflow-hidden shadow-lg flex items-center justify-center">
            {emp.imageUrl ? (
              <img src={emp.imageUrl} alt={emp.employeeName} className="w-full h-full object-cover" />
            ) : (
              <User className="w-12 h-12 text-slate-300" />
            )}
          </div>
        </div>

        <div className="absolute bottom-10 w-full px-6 flex flex-col items-center z-20 text-white">
          <h3 className="text-[20px] font-extrabold leading-tight uppercase text-center w-full line-clamp-2 drop-shadow-md">{emp.employeeName}</h3>
          <span className="text-[12px] text-white/90 font-medium mb-5">{emp.jobTitle || 'Employee'}</span>

          <div className="w-full grid grid-cols-[45px_10px_1fr] gap-y-1 text-[11px]">
            <span className="font-bold uppercase tracking-wide">ID</span> <span>:</span> <span className="font-mono">{shortId}</span>
            <span className="font-bold uppercase tracking-wide">DOB</span> <span>:</span> <span>{new Date(emp.dateOfBirth).toLocaleDateString()}</span>
            <span className="font-bold uppercase tracking-wide">Email</span> <span>:</span> <span className="truncate">{emp.email}</span>
            <span className="font-bold uppercase tracking-wide">Phone</span> <span>:</span> <span className="font-mono">{emp.phone}</span>
          </div>
        </div>
      </div>

      {/* PRINT BACK FACE */}
      <div className="print-card-face relative bg-white rounded-[1.75rem] ring-1 ring-slate-200 overflow-hidden w-[280px] h-[440px]">
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 280 440" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="brandWavePrintBack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={BRAND_FROM} />
              <stop offset="50%" stopColor={BRAND_VIA} />
              <stop offset="100%" stopColor={BRAND_TO} />
            </linearGradient>
          </defs>
          <path d="M0,0 L280,0 L280,120 C200,160 80,80 0,130 Z" fill="url(#brandWavePrintBack)" />
        </svg>

        <div className="absolute top-6 right-5 z-10 flex items-center gap-2 flex-row-reverse">
          <img src={COMPANY_INFO.logoUrl} alt={COMPANY_INFO.name} className="w-9 h-9 rounded-full bg-white object-contain p-1 border border-slate-100" />
          <span className="font-extrabold text-white text-[16px] uppercase tracking-tight leading-none drop-shadow-md">{COMPANY_INFO.shortName}</span>
        </div>

        <div className="absolute top-[155px] bottom-6 w-full px-6 flex flex-col justify-between z-20">
          <ul className="space-y-1.5 text-[9px] text-slate-600 leading-snug list-disc pl-3">
            {COMPANY_INFO.termsAndConditions.slice(0, 2).map((term, i) => <li key={i}>{term}</li>)}
          </ul>

          <div className="flex flex-col items-center my-1">
            <div className="flex gap-[2px] h-6 items-end justify-center w-full">
              {[...Array(34)].map((_, i) => (
                <div key={i} className={`bg-slate-800 ${i % 4 === 0 ? 'w-[3px] h-full' : i % 3 === 0 ? 'w-[2px] h-4/5' : 'w-[1.5px] h-2/3'}`} />
              ))}
            </div>
            <span className="text-[8px] font-mono text-slate-500 mt-1">{barcodeId}</span>
          </div>

          <div className="w-full">
            <h4 className="text-[11px] font-bold mb-1" style={{ color: BRAND_TEXT }}>Contact Us:</h4>
            <div className="grid grid-cols-[45px_5px_1fr] gap-y-0.5 text-[9.5px] text-slate-800 font-medium leading-tight">
              <span className="text-slate-500">Website</span> <span>:</span> <span>{COMPANY_INFO.website}</span>
              <span className="text-slate-500">Email</span> <span>:</span> <span>{COMPANY_INFO.email}</span>
              <span className="text-slate-500">Address</span> <span>:</span> <span>{COMPANY_INFO.address}</span>
            </div>
          </div>

          <div className="flex justify-end w-full">
            <div className="border-t border-slate-300 w-28 flex flex-col items-center pt-1.5">
              <span className="font-serif italic text-xs text-slate-800 mb-0.5">{COMPANY_INFO.name}</span>
              <span className="text-[7.5px] text-slate-400 text-center leading-tight">{COMPANY_INFO.signatoryLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   5. PRINT STYLES — drop <IdCardPrintStyles /> once per page
   ============================================================ */
export const IdCardPrintStyles = () => (
  <style>{`
    @media print {
      @page { margin: 0.4in; }
      html, body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
      body * { visibility: hidden; }
      #print-id-card, #print-id-card * {
        visibility: visible;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
      #print-id-card {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        display: flex !important;
        align-items: center;
        justify-content: center;
        margin: 0;
      }
      .print-card-row {
        display: grid;
        grid-template-columns: 280px 280px;
        gap: 64px;
        justify-content: center;
      }
      .print-card-face { width: 280px; height: 440px; }
    }
    @media screen {
      #print-id-card { display: none; }
    }
  `}</style>
);