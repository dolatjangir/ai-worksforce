'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Plus, Search, User, Loader2, AlertTriangle, ImagePlus, RefreshCw, Award, CheckCircle2, XCircle, X, ShieldCheck, ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MasterProtectedRoute from '@/utils/masterProtectedRoute';
import { uploadToCloudinary } from '@/utils/cloudinary';

// Import everything from your reusable component!
import { 
  CompanyIdCard, 
  PrintableIdCard, 
  IdCardPrintStyles, 
  EmployeeCardData 
} from '@/components/EmployeeIdCard'; // Adjust this path if necessary

interface EmployeeFormData {
  employeeName: string;
  email: string;
  phone: string;
  jobTitle: string;
  qualifications: string;
  dateOfBirth: string;
  skills: string;
  imageUrl: string;
}

// Toast Notification
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: -50, x: '-50%' }}
      className={`fixed top-6 left-1/2 z-[100] px-6 py-3.5 rounded-xl shadow-2xl border flex items-center gap-3 ${type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-red-50 text-red-800 border-red-200'
        }`}
    >
      {type === 'success' ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
      <span className="text-sm font-semibold">{message}</span>
      <button onClick={onClose} className="ml-2 cursor-pointer hover:bg-black/5 p-1 rounded-md transition-colors">
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

// Auto-Generate Certificate Modal
const GenerateCertModal = ({
  isOpen, onClose, onSubmit, emp
}: {
  isOpen: boolean; onClose: () => void; onSubmit: (data: any) => Promise<void>; emp: EmployeeCardData | null;
}) => {
  const [certData, setCertData] = useState({
    certificateId: '', courseName: '', duration: 'Permanent', startDate: '', endDate: '', instructorName: 'Platform Director', skills: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && emp) {
      const today = new Date().toISOString().split('T')[0];
      setCertData({
        certificateId: `cr${Math.floor(100000 + Math.random() * 900000)}`,
        courseName: emp.jobTitle || 'Employee Role',
        duration: 'Permanent',
        startDate: new Date(emp.createdAt).toISOString().split('T')[0],
        endDate: today,
        instructorName: 'Platform Director',
        // TS Fix: Handle optional skills array
        skills: emp.skills ? emp.skills.join(', ') : ''
      });
    }
  }, [isOpen, emp]);

  if (!emp) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit({
      certificateId: certData.certificateId,
      participantName: emp.employeeName,
      courseName: certData.courseName,
      duration: certData.duration,
      startDate: certData.startDate,
      endDate: certData.endDate,
      imageUrl: emp.imageUrl || null,
      instructorName: certData.instructorName,
      skills: certData.skills,
      status: 'VALID'
    });
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/60 cursor-pointer backdrop-blur-sm z-50" onClick={onClose} />
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-50 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl shadow-inner">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Issue Employee Certificate</h3>
                  <p className="text-sm text-slate-500">Auto-generating credentials for {emp.employeeName}</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Generated Cert ID</span>
                  <span className="font-mono text-lg font-bold text-slate-800">{certData.certificateId}</span>
                </div>
                <button type="button" onClick={() => setCertData(prev => ({ ...prev, certificateId: `cr${Math.floor(100000 + Math.random() * 900000)}` }))} className="p-2 bg-white text-blue-600 rounded-lg shadow-sm border border-blue-100 hover:bg-blue-50 cursor-pointer">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Certificate Title / Job Role</label>
                  <input required type="text" value={certData.courseName} onChange={e => setCertData({ ...certData, courseName: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Skills (Comma separated)</label>
                  <input required type="text" value={certData.skills} onChange={e => setCertData({ ...certData, skills: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Start Date</label>
                  <input required type="date" value={certData.startDate} onChange={e => setCertData({ ...certData, startDate: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">End Date</label>
                  <input required type="date" value={certData.endDate} onChange={e => setCertData({ ...certData, endDate: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Duration</label>
                  <input required type="text" value={certData.duration} onChange={e => setCertData({ ...certData, duration: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Director / Authorized Signatory</label>
                  <input required type="text" value={certData.instructorName} onChange={e => setCertData({ ...certData, instructorName: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-100">
                <button type="button" onClick={onClose} className="flex-1 px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 cursor-pointer">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-blue-700 cursor-pointer disabled:opacity-50">
                  {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</> : <><Award className="w-5 h-5" /> Generate & Save Certificate</>}
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Form Modal (Add / Edit Employee)
const EmployeeFormModal = ({
  isOpen, onClose, onSubmit, initialData, isEditing
}: {
  isOpen: boolean; onClose: () => void; onSubmit: (data: EmployeeFormData) => void | Promise<void>; initialData?: EmployeeCardData | null; isEditing: boolean;
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState<EmployeeFormData>({
    employeeName: '', email: '', jobTitle: '', qualifications: '', dateOfBirth: '', skills: '', imageUrl: '', phone: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        employeeName: initialData.employeeName,
        email: initialData.email,
        jobTitle: initialData.jobTitle,
        phone: initialData.phone || '',
        // TS Fix: Handle optional qualifications and skills
        qualifications: initialData.qualifications || '',
        dateOfBirth: initialData.dateOfBirth.split('T')[0],
        skills: initialData.skills ? initialData.skills.join(', ') : '',
        imageUrl: initialData.imageUrl || ''
      });
      setPreviewUrl(initialData.imageUrl || null);
    } else if (isOpen) {
      setFormData({ employeeName: '', email: '', jobTitle: '', phone: '', qualifications: '', dateOfBirth: '', skills: '', imageUrl: '' });
      setPreviewUrl(null);
    }
    setSelectedFile(null);
  }, [initialData, isOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (isUploading) return;

    let finalImageUrl = formData.imageUrl;
    if (selectedFile) {
      setIsUploading(true);
      const uploadedUrl = await uploadToCloudinary(selectedFile);
      setIsUploading(false);
      if (uploadedUrl) finalImageUrl = uploadedUrl;
    }

    onSubmit({ ...formData, imageUrl: finalImageUrl });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 cursor-pointer bg-slate-900/60 backdrop-blur-sm z-40" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl bg-white rounded-3xl shadow-2xl z-50 flex flex-col max-h-[90vh] overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--color-primary-100)] text-[var(--color-primary-600)] rounded-xl shadow-inner">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">{isEditing ? 'Update Employee Card' : 'Generate New ID Card'}</h2>
                  <p className="text-slate-500 text-sm mt-1">{isEditing ? 'Modify existing staff credentials' : 'Add a new employee to the database'}</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 cursor-pointer"><X className="w-6 h-6" /></button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
              
              {/* Image Upload */}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="relative shrink-0">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center border-4 border-white shadow-md text-slate-400">
                      <User className="w-10 h-10" />
                    </div>
                  )}
                  {previewUrl && (
                    <button type="button" onClick={() => { setPreviewUrl(null); setSelectedFile(null); setFormData({ ...formData, imageUrl: '' }); }} className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full shadow-sm hover:bg-red-600 cursor-pointer">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="flex-1 w-full text-center sm:text-left">
                  <h4 className="text-sm font-bold text-slate-700 mb-1">ID Photo</h4>
                  <p className="text-xs text-slate-500 mb-3">Upload a square headshot for the ID card.</p>
                  <label className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-colors cursor-pointer shadow-sm text-sm">
                    <ImagePlus className="w-4 h-4" /> {previewUrl ? 'Change Image' : 'Browse Files'}
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input required type="text" value={formData.employeeName} onChange={e => setFormData({ ...formData, employeeName: e.target.value })} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email (Unique)</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} disabled={isEditing} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 outline-none transition-all font-medium text-slate-800 disabled:opacity-60 disabled:cursor-not-allowed" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Job Title</label>
                  <input required type="text" value={formData.jobTitle} onChange={e => setFormData({ ...formData, jobTitle: e.target.value })} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Date of Birth</label>
                  <input required type="date" value={formData.dateOfBirth} onChange={e => setFormData({ ...formData, dateOfBirth: e.target.value })} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 outline-none transition-all font-medium text-slate-800 cursor-pointer" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Highest Qualification</label>
                  <input required type="text" value={formData.qualifications} onChange={e => setFormData({ ...formData, qualifications: e.target.value })} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Skills (Comma separated)</label>
                  <input type="text" value={formData.skills} onChange={e => setFormData({ ...formData, skills: e.target.value })} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 outline-none transition-all font-medium text-slate-800" />
                </div>
              </div>
            </form>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-4">
              <button type="button" onClick={onClose} className="flex-1 px-6 py-4 cursor-pointer bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-sm text-lg">Cancel</button>
              <button onClick={handleSubmit} disabled={isUploading} className="flex-1 px-6 py-4 flex items-center justify-center gap-2 cursor-pointer bg-[var(--color-primary-600)] text-white rounded-xl font-bold hover:bg-[var(--color-primary-700)] transition-all shadow-lg text-lg disabled:opacity-50">
                {isUploading ? <><Loader2 className="w-5 h-5 animate-spin" /> Uploading...</> : (isEditing ? 'Save Details' : 'Generate ID Card')}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Delete Confirmation Modal
const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, empName }: { isOpen: boolean; onClose: () => void; onConfirm: () => void | Promise<void>; empName: string; }) => {
  const [captchaCode, setCaptchaCode] = useState('');
  const [inputCode, setInputCode] = useState('');

  useEffect(() => {
    if (isOpen) {
      setCaptchaCode(Math.random().toString(36).substring(2, 8).toUpperCase());
      setInputCode('');
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/60 cursor-pointer backdrop-blur-sm z-50" onClick={onClose} />
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-red-50/50">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Revoke ID Card?</h3>
              <p className="text-slate-600 mb-6">You are about to delete the ID profile for <strong className="text-slate-900">{empName}</strong>. This is permanent.</p>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6 text-left">
                <label className="block text-sm font-bold text-slate-700 mb-3 text-center">Type <span className="text-red-600 select-none font-mono text-lg bg-red-100 px-2 py-0.5 rounded tracking-widest mx-1">{captchaCode}</span></label>
                <input type="text" value={inputCode} onChange={(e) => setInputCode(e.target.value.toUpperCase())} placeholder="Enter code" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all font-mono font-bold text-center text-xl tracking-widest uppercase" />
              </div>

              <div className="flex gap-4">
                <button onClick={onClose} className="flex-1 px-4 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
                <button onClick={onConfirm} disabled={inputCode !== captchaCode} className="flex-1 px-4 py-3.5 bg-red-600 cursor-pointer text-white rounded-xl font-bold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">Delete</button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Verification Dialog
const VerifyConfirmModal = ({ isOpen, onClose, onConfirm, emp }: { isOpen: boolean; onClose: () => void; onConfirm: () => void | Promise<void>; emp: EmployeeCardData | null; }) => {
  if (!emp) return null;
  const isVerifying = !emp.hasVerified;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/60 cursor-pointer backdrop-blur-sm z-50" onClick={onClose} />
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden">
            <div className="p-8 text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-8 ${isVerifying ? 'bg-emerald-50 border-emerald-50/50' : 'bg-amber-50 border-amber-50/50'}`}>
                {isVerifying ? <ShieldCheck className="w-10 h-10 text-emerald-500" /> : <ShieldAlert className="w-10 h-10 text-amber-500" />}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{isVerifying ? 'Verify ID Card?' : 'Revoke Verification?'}</h3>
              <p className="text-slate-600 mb-6">
                Are you sure you want to {isVerifying ? 'approve' : 'revoke'} the company ID for <strong className="text-slate-900">{emp.employeeName}</strong>?
              </p>

              <div className="flex gap-4">
                <button onClick={onClose} className="flex-1 px-4 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
                <button onClick={onConfirm} className={`flex-1 px-4 py-3.5 cursor-pointer text-white rounded-xl font-bold transition-all shadow-lg ${isVerifying ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-amber-500 hover:bg-amber-600'}`}>
                  {isVerifying ? 'Yes, Verify' : 'Yes, Revoke'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Main Page
export default function AdminEmployeeManagement() {
  const [employees, setEmployees] = useState<EmployeeCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals State
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingEmp, setEditingEmp] = useState<EmployeeCardData | null>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [empToDelete, setEmpToDelete] = useState<{ id: string, name: string } | null>(null);

  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [empToVerify, setEmpToVerify] = useState<EmployeeCardData | null>(null);

  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [empToCertify, setEmpToCertify] = useState<EmployeeCardData | null>(null);

  const [printEmp, setPrintEmp] = useState<EmployeeCardData | null>(null);

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const fetchEmployees = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/employees');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      setToast({ message: 'Failed to load employees', type: 'error' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchEmployees(); }, [fetchEmployees]);

  const handleSave = async (formData: EmployeeFormData) => {
    try {
      const payload = { ...formData, skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean) };
      const url = editingEmp ? `/api/employees/${editingEmp.id}` : '/api/employees';
      const method = editingEmp ? 'PUT' : 'POST';

      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('Failed to save');

      await fetchEmployees();
      setIsFormModalOpen(false);
      setToast({ message: `ID Card ${editingEmp ? 'updated' : 'generated'} successfully`, type: 'success' });
    } catch (error) {
      setToast({ message: 'Operation failed. Email might already exist.', type: 'error' });
    }
  };

  const executeDelete = async () => {
    if (!empToDelete) return;
    try {
      const res = await fetch(`/api/employees/${empToDelete.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');

      setEmployees(prev => prev.filter(e => e.id !== empToDelete.id));
      setToast({ message: 'ID Card permanently deleted', type: 'success' });
      setIsDeleteModalOpen(false);
    } catch (error) {
      setToast({ message: 'Delete failed', type: 'error' });
    }
  };

  const executeVerify = async () => {
    if (!empToVerify) return;
    try {
      const newStatus = !empToVerify.hasVerified;
      // Optimistic update
      setEmployees(prev => prev.map(e => e.id === empToVerify.id ? { ...e, hasVerified: newStatus } : e));
      setIsVerifyModalOpen(false);
      setToast({ message: `Employee ${newStatus ? 'verified' : 'unverified'}`, type: 'success' });

      await fetch(`/api/employees/${empToVerify.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hasVerified: newStatus })
      });
    } catch (error) {
      fetchEmployees(); // Revert on fail
      setToast({ message: 'Verification toggle failed', type: 'error' });
    }
  };

  const handlePrint = (emp: EmployeeCardData) => {
    setPrintEmp(emp);
  };

  useEffect(() => {
    if (printEmp) {
      const timer = setTimeout(() => window.print(), 150);
      return () => clearTimeout(timer);
    }
  }, [printEmp]);

  useEffect(() => {
    const handleAfterPrint = () => setPrintEmp(null);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => window.removeEventListener('afterprint', handleAfterPrint);
  }, []);

  // Generate Certificate Submission
  const handleGenerateCertificate = async (certData: any) => {
    if (!empToCertify) return;
    try {
      const certRes = await fetch('/api/certificates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...certData,
          skills: certData.skills.split(',').map((s: string) => s.trim()).filter(Boolean)
        })
      });
      if (!certRes.ok) throw new Error('Failed to create certificate record');

      await fetch(`/api/employees/${empToCertify.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hasCertificate: true })
      });

      setEmployees(prev => prev.map(e => e.id === empToCertify.id ? { ...e, hasCertificate: true } : e));
      setIsCertModalOpen(false);
      setToast({ message: 'Certificate successfully generated and linked!', type: 'success' });

    } catch (error) {
      console.error(error);
      setToast({ message: 'Failed to generate certificate', type: 'error' });
    }
  };

  const filtered = employees.filter(emp =>
    emp.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MasterProtectedRoute>
      <div className="min-h-screen bg-slate-50/50 pb-20 print:bg-white print:min-h-0 print:pb-0">
        <AnimatePresence>{toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}</AnimatePresence>

        <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm print:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">ID Card Management</h1>
                <p className="text-slate-500 mt-2 font-medium text-lg">Verify, edit, and manage employee company ID cards.</p>
              </div>

              <button
                onClick={() => { setEditingEmp(null); setIsFormModalOpen(true); }}
                className="inline-flex items-center justify-center cursor-pointer gap-2 px-8 py-4 bg-[var(--color-primary-600)] text-white rounded-2xl font-bold hover:bg-[var(--color-primary-700)] transition-all shadow-lg hover:-translate-y-1 text-lg"
              >
                <Plus className="w-6 h-6" />
                Generate ID Card
              </button>
            </div>

            <div className="mt-8 relative max-w-2xl group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-[var(--color-primary-500)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, role, or email..."
                className="w-full pl-14 pr-6 py-4 bg-slate-100/50 hover:bg-slate-100 focus:bg-white rounded-2xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-100)] outline-none transition-all font-semibold text-slate-800 text-lg shadow-inner"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:hidden">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => <div key={i} className="h-96 bg-slate-200/50 rounded-[2rem] animate-pulse max-w-[300px] w-full mx-auto" />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm max-w-3xl mx-auto">
              <div className="w-24 h-24 bg-[var(--color-primary-50)] rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-12 h-12 text-[var(--color-primary-500)]" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">No ID Cards Found</h3>
              <p className="text-slate-500 font-medium text-lg">
                {searchQuery ? "No employees matched your search." : "No employee IDs generated yet."}
              </p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((emp) => (
                  <CompanyIdCard
                    key={emp.id}
                    emp={emp}
                    onEdit={(e) => { setEditingEmp(e); setIsFormModalOpen(true); }}
                    onVerifyToggle={(e) => { setEmpToVerify(e); setIsVerifyModalOpen(true); }}
                    onDelete={(id, name) => { setEmpToDelete({ id, name }); setIsDeleteModalOpen(true); }}
                    onGenerateCert={(e) => { setEmpToCertify(e); setIsCertModalOpen(true); }}
                    onPrint={handlePrint}
                    showCopyButton={true}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Modals */}
        <EmployeeFormModal
          isOpen={isFormModalOpen}
          onClose={() => setIsFormModalOpen(false)}
          onSubmit={handleSave}
          initialData={editingEmp}
          isEditing={!!editingEmp}
        />

        <GenerateCertModal
          isOpen={isCertModalOpen}
          onClose={() => setIsCertModalOpen(false)}
          onSubmit={handleGenerateCertificate}
          emp={empToCertify}
        />

        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={executeDelete}
          empName={empToDelete?.name || ''}
        />

        <VerifyConfirmModal
          isOpen={isVerifyModalOpen}
          onClose={() => setIsVerifyModalOpen(false)}
          onConfirm={executeVerify}
          emp={empToVerify}
        />
        
        <IdCardPrintStyles />

        <div id="print-id-card">
          {printEmp && <PrintableIdCard emp={printEmp} />}
        </div>
      </div>
    </MasterProtectedRoute>
  );
}