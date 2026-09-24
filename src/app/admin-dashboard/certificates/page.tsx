'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  Plus, Pencil, Trash2, X, Search, 
  Award, Calendar, Clock, CheckCircle2, 
  XCircle, Copy, Check, FileCheck, RefreshCw, AlertTriangle, Lock, User, ImagePlus, Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MasterProtectedRoute from '@/utils/masterProtectedRoute';
import { uploadToCloudinary } from '@/utils/cloudinary';

// Types
interface Certificate {
  id: string;
  certificateId: string;
  participantName: string;
  courseName: string;
  duration: string;
  startDate: string;
  endDate: string;
  imageUrl?: string;
  instructorName?: string;
  skills: string[];
  status: 'VALID' | 'REVOKED' | 'EXPIRED';
}

interface CertificateFormData {
  certificateId: string;
  participantName: string;
  courseName: string;
  duration: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  instructorName: string;
  skills: string;
  status: 'VALID' | 'REVOKED' | 'EXPIRED';
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
      className={`fixed top-6 left-1/2 z-[100] px-6 py-3.5 rounded-xl shadow-2xl border flex items-center gap-3 ${
        type === 'success' 
          ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
          : 'bg-red-50 text-red-800 border-red-200'
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

// Premium Certificate Card
const CertificateCard = ({
  cert, onEdit, onDelete
}: {
  cert: Certificate; 
  onEdit: (cert: Certificate) => void; 
  onDelete: (id: string, name: string) => void;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(cert.certificateId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const statusColors = {
    VALID: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    REVOKED: 'bg-red-100 text-red-800 border-red-200',
    EXPIRED: 'bg-amber-100 text-amber-800 border-amber-200'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[var(--color-primary-400)] to-[var(--color-primary-700)]" />
      
      <div className="p-7">
        <div className="flex justify-between items-start mb-5">
          <div 
            onClick={handleCopy}
            className="flex items-center cursor-pointer gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors group/copy"
            title="Copy ID"
          >
            <span className="text-xs font-mono font-bold text-slate-700 tracking-wide">{cert.certificateId}</span>
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400 group-hover/copy:text-slate-600" />}
          </div>
          <span className={`px-3 py-1 text-xs font-bold rounded-full border shadow-sm ${statusColors[cert.status]}`}>
            {cert.status}
          </span>
        </div>

        {/* User Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          {cert.imageUrl ? (
            <img 
              src={cert.imageUrl} 
              alt={cert.participantName} 
              className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 shadow-sm"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-200 text-slate-400">
              <User className="w-6 h-6" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1 line-clamp-1">{cert.participantName}</h3>
            <p className="text-[var(--color-primary-600)] font-semibold flex items-center gap-1.5 text-sm">
              <Award className="w-4 h-4" /> {cert.courseName}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-600 border-t border-slate-100 pt-5">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="font-medium">{new Date(cert.endDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="font-medium">{cert.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {cert.skills.slice(0, 3).map((skill, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-700 text-xs rounded-lg font-semibold border border-slate-200">
              {skill}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-bold border border-slate-200">
              +{cert.skills.length - 3}
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-end gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
          <button
            onClick={() => onEdit(cert)}
            className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-slate-50 rounded-xl hover:bg-[var(--color-primary-50)] text-slate-600 hover:text-[var(--color-primary-700)] font-semibold transition-colors border border-slate-200"
          >
            <Pencil className="w-4 h-4" /> Edit
          </button>
          <button
            onClick={() => onDelete(cert.id, cert.participantName)}
            className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-slate-50 rounded-xl hover:bg-red-50 text-slate-600 hover:text-red-700 font-semibold transition-colors border border-slate-200"
          >
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Form Modal
const CertificateFormModal = ({
  isOpen, onClose, onSubmit, initialData, isEditing, existingCertificates
}: {
  isOpen: boolean; onClose: () => void; onSubmit: (data: CertificateFormData) => void | Promise<void>; initialData?: Certificate | null; isEditing: boolean; existingCertificates: Certificate[];
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState<CertificateFormData>({
    certificateId: '', participantName: '', courseName: '', duration: '', startDate: '', endDate: '', imageUrl: '', instructorName: '', skills: '', status: 'VALID'
  });

  const generateUniqueId = useCallback(() => {
    let newId = '';
    let isDuplicate = true;
    while (isDuplicate) {
      const part1 = Math.floor(1000 + Math.random() * 9000);
      const part2 = Math.floor(1000 + Math.random() * 9000);
      newId = `CR-${part1}-${part2}`;
      isDuplicate = existingCertificates.some(cert => cert.certificateId === newId);
    }
    return newId;
  }, [existingCertificates]);

  // Forces manual entry into the CR-0000-0000 format as the user types
  const formatCertificateId = (raw: string) => {
    let digits = raw.toUpperCase().replace(/^CR-?/, '').replace(/[^0-9]/g, '').slice(0, 8);
    if (digits.length === 0) return '';
    let formatted = 'CR-' + digits.slice(0, 4);
    if (digits.length > 4) {
      formatted += '-' + digits.slice(4, 8);
    }
    return formatted;
  };

  useEffect(() => {
    if (initialData) {
      setFormData({
        certificateId: initialData.certificateId,
        participantName: initialData.participantName,
        courseName: initialData.courseName,
        duration: initialData.duration,
        startDate: initialData.startDate.split('T')[0],
        endDate: initialData.endDate.split('T')[0],
        imageUrl: initialData.imageUrl || '',
        instructorName: initialData.instructorName || '',
        skills: initialData.skills.join(', '),
        status: initialData.status,
      });
      setPreviewUrl(initialData.imageUrl || null);
    } else if (isOpen) {
      setFormData({ 
        certificateId: generateUniqueId(), participantName: '', courseName: '', duration: '', startDate: '', endDate: '', imageUrl: '', instructorName: '', skills: '', status: 'VALID' 
      });
      setPreviewUrl(null);
    }
    setSelectedFile(null);
  }, [initialData, isOpen, generateUniqueId]);

  const handleIdGenerate = () => {
    setFormData(prev => ({ ...prev, certificateId: generateUniqueId() }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const isDuplicateId = !isEditing && existingCertificates.some(cert => cert.certificateId === formData.certificateId);
  const isValidId = /^CR-\d{4}-\d{4}$/.test(formData.certificateId);
  const isSubmitDisabled = !isValidId || isDuplicateId || isUploading;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (isSubmitDisabled) return;

    let finalImageUrl = formData.imageUrl;

    // Handle Cloudinary upload if a new file was selected
    if (selectedFile) {
      setIsUploading(true);
      const uploadedUrl = await uploadToCloudinary(selectedFile);
      setIsUploading(false);
      
      if (uploadedUrl) {
        finalImageUrl = uploadedUrl;
      } else {
        alert("Image upload failed. Submitting without new image.");
      }
    }

    onSubmit({ ...formData, imageUrl: finalImageUrl });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 cursor-pointer bg-slate-900/40 backdrop-blur-sm z-40" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl bg-white rounded-3xl shadow-2xl z-50 flex flex-col max-h-[90vh] overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--color-primary-100)] text-[var(--color-primary-600)] rounded-xl shadow-inner">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">{isEditing ? 'Edit Certificate Details' : 'Issue New Certificate'}</h2>
                  <p className="text-slate-500 text-sm mt-1">{isEditing ? 'Update student and course information' : 'Fill in the details to generate a verified credential'}</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 cursor-pointer"><X className="w-6 h-6" /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-white">
              
              {/* Image Upload Section */}
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
                    <button 
                      type="button" 
                      onClick={() => { setPreviewUrl(null); setSelectedFile(null); setFormData({...formData, imageUrl: ''}); }}
                      className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full shadow-sm hover:bg-red-600 transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="flex-1 w-full text-center sm:text-left">
                  <h4 className="text-sm font-bold text-slate-700 mb-1">Participant Photo (Optional)</h4>
                  <p className="text-xs text-slate-500 mb-3">Upload a square image for best results.</p>
                  <label className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-colors cursor-pointer shadow-sm text-sm">
                    <ImagePlus className="w-4 h-4" />
                    {previewUrl ? 'Change Image' : 'Browse Files'}
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>

              {/* Conditional ID Section */}
              {isEditing ? (
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Certificate ID</label>
                    <p className="text-sm text-slate-500">This unique identifier cannot be changed.</p>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-200/50 px-4 py-2 rounded-lg border border-slate-200">
                    <Lock className="w-4 h-4 text-slate-500" />
                    <span className="font-mono font-bold text-slate-700 tracking-wide">{formData.certificateId}</span>
                  </div>
                </div>
              ) : (
                <div className={`p-5 rounded-2xl border transition-colors ${isDuplicateId ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Certificate ID (Format: CR-0000-0000)</label>
                  <div className="flex gap-3">
                    <input 
                      required 
                      type="text" 
                      value={formData.certificateId} 
                      onChange={e => setFormData({...formData, certificateId: formatCertificateId(e.target.value)})} 
                      className={`flex-1 px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all font-mono font-semibold text-slate-800 ${
                        isDuplicateId 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-100 bg-white' 
                          : 'border-slate-300 focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-100)]'
                      }`} 
                      placeholder="Enter Numbers or generate an ID" 
                    />
                    <button 
                      type="button" 
                      onClick={handleIdGenerate}
                      className="px-4 py-3 bg-white cursor-pointer border border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
                    >
                      <RefreshCw className="w-4 h-4" /> Generate
                    </button>
                  </div>
                  {isDuplicateId && (
                    <p className="text-red-600 text-sm font-semibold mt-2 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" /> This ID already exists in the database.
                    </p>
                  )}
                  {!isValidId && formData.certificateId.length > 0 && (
                    <p className="text-amber-600 text-sm font-semibold mt-2">ID must follow the format CR-0000-0000.</p>
                  )}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Participant Name</label>
                  <input required type="text" value={formData.participantName} onChange={e => setFormData({...formData, participantName: e.target.value})} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary-100)] outline-none transition-all font-medium text-slate-800" placeholder="e.g. John Doe" />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Course Name</label>
                  <input required type="text" value={formData.courseName} onChange={e => setFormData({...formData, courseName: e.target.value})} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary-100)] outline-none transition-all font-medium text-slate-800" placeholder="e.g. Advanced AI Development" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Duration</label>
                  <input required type="text" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary-100)] outline-none transition-all font-medium text-slate-800" placeholder="e.g. 12 Weeks" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Status</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as 'VALID' | 'REVOKED' | 'EXPIRED'})} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary-100)] outline-none transition-all font-bold text-slate-800 appearance-none cursor-pointer">
                    <option value="VALID">VALID</option>
                    <option value="REVOKED">REVOKED</option>
                    <option value="EXPIRED">EXPIRED</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Start Date</label>
                  <input required type="date" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary-100)] outline-none transition-all font-medium text-slate-800 cursor-pointer" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">End Date</label>
                  <input required type="date" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary-100)] outline-none transition-all font-medium text-slate-800 cursor-pointer" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Skills Acquired (Comma separated)</label>
                  <input type="text" value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})} className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary-100)] outline-none transition-all font-medium text-slate-800" placeholder="React, Node.js, Next.js" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Authorized Signatory</label>
                  <input type="text" value={formData.instructorName} onChange={e => setFormData({...formData, instructorName: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[var(--color-primary-500)] focus:ring-2 outline-none transition-all" />
                </div>
              </div>
            </form>
            
            <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50 flex gap-4">
              <button type="button" onClick={onClose} className="flex-1 px-6 py-4 cursor-pointer bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-sm text-lg">Cancel</button>
              <button 
                onClick={handleSubmit} 
                disabled={isSubmitDisabled}
                className="flex-1 px-6 py-4 flex items-center justify-center gap-2 cursor-pointer bg-[var(--color-primary-600)] text-white rounded-xl font-bold hover:bg-[var(--color-primary-700)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
              >
                {isUploading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Uploading...</>
                ) : (
                  isEditing ? 'Save Changes' : 'Issue Certificate'
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Secure Delete Confirmation Modal
const DeleteConfirmModal = ({
  isOpen, onClose, onConfirm, studentName
}: {
  isOpen: boolean; 
  onClose: () => void; 
  onConfirm: () => void | Promise<void>; 
  studentName: string;
}) => {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-red-50/50">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Delete Certificate?</h3>
              <p className="text-slate-600 mb-6">
                You are about to delete the certificate for <strong className="text-slate-900">{studentName}</strong>. This will permanently break their public verification link.
              </p>
              
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6 text-left">
                <label className="block text-sm font-bold text-slate-700 mb-3 text-center">
                  Type <span className="text-red-600 select-none font-mono text-lg bg-red-100 px-2 py-0.5 rounded tracking-widest mx-1">{captchaCode}</span> to confirm
                </label>
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                  placeholder="Enter code here"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all font-mono font-bold text-center text-xl tracking-widest uppercase"
                />
              </div>

              <div className="flex gap-4">
                <button onClick={onClose} className="flex-1 px-4 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
                <button 
                  onClick={onConfirm} 
                  disabled={inputCode !== captchaCode}
                  className="flex-1 px-4 py-3.5 bg-red-600 cursor-pointer text-white rounded-xl font-bold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-600/20"
                >
                  Confirm Delete
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
export default function CertificatesPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState<Certificate | null>(null);
  
  // Delete State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [certToDelete, setCertToDelete] = useState<{id: string, name: string} | null>(null);
  
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const fetchCertificates = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/certificates');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setCertificates(data);
    } catch (error) {
      setToast({ message: 'Failed to load certificates', type: 'error' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchCertificates(); }, [fetchCertificates]);

  const handleSave = async (formData: CertificateFormData) => {
    try {
      const payload = { ...formData, skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean) };
      const url = editingCert ? `/api/certificates/${editingCert.id}` : '/api/certificates';
      const method = editingCert ? 'PUT' : 'POST';

      const response = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error('Failed to save');
      
      await fetchCertificates();
      setIsFormModalOpen(false);
      setToast({ message: `Certificate ${editingCert ? 'updated' : 'issued'} successfully`, type: 'success' });
    } catch (error) {
      setToast({ message: 'Operation failed.', type: 'error' });
    }
  };

  const triggerDelete = (id: string, name: string) => {
    setCertToDelete({ id, name });
    setIsDeleteModalOpen(true);
  };

  const executeDelete = async () => {
    if (!certToDelete) return;
    try {
      const response = await fetch(`/api/certificates/${certToDelete.id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete');
      
      setCertificates(prev => prev.filter(c => c.id !== certToDelete.id));
      setToast({ message: 'Certificate permanently deleted', type: 'success' });
      setIsDeleteModalOpen(false);
    } catch (error) {
      setToast({ message: 'Delete failed', type: 'error' });
    }
  };

  const filteredCerts = certificates.filter(cert => 
    cert.participantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.certificateId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MasterProtectedRoute>
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <AnimatePresence>{toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}</AnimatePresence>

      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Certificate Management</h1>
              <p className="text-slate-500 mt-2 font-medium text-lg">Issue, verify, and manage student credentials.</p>
            </div>
            
            <button
              onClick={() => { setEditingCert(null); setIsFormModalOpen(true); }}
              className="inline-flex items-center justify-center cursor-pointer gap-2 px-8 py-4 bg-[var(--color-primary-600)] text-white rounded-2xl font-bold hover:bg-[var(--color-primary-700)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
            >
              <Plus className="w-6 h-6" />
              Issue Certificate
            </button>
          </div>
          
          <div className="mt-8">
            <div className="relative group max-w-2xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-[var(--color-primary-500)] transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student, ID, or course..."
                className="w-full pl-14 pr-6 py-4 bg-slate-100/50 hover:bg-slate-100 focus:bg-white rounded-2xl border border-slate-200 focus:border-[var(--color-primary-500)] focus:ring-4 focus:ring-[var(--color-primary-100)] outline-none transition-all font-semibold text-slate-800 text-lg shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => <div key={i} className="h-64 bg-slate-200/50 rounded-2xl animate-pulse" />)}
          </div>
        ) : filteredCerts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm">
            <div className="w-24 h-24 bg-[var(--color-primary-50)] rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-12 h-12 text-[var(--color-primary-500)]" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">No Certificates Found</h3>
            <p className="text-slate-500 max-w-md mx-auto font-medium text-lg">
              {searchQuery ? "No records matched your search term." : "Your vault is empty. Issue a certificate to see it here."}
            </p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  cert={cert}
                  onEdit={(c) => { setEditingCert(c); setIsFormModalOpen(true); }}
                  onDelete={triggerDelete}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <CertificateFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSubmit={handleSave}
        initialData={editingCert}
        isEditing={!!editingCert}
        existingCertificates={certificates}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={executeDelete}
        studentName={certToDelete?.name || ''}
      />
    </div>
    </MasterProtectedRoute>
  );
}