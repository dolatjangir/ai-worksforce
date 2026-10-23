"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Mail,
  Search,
  Plus,
  Trash2,
  Download,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  TrendingUp,
  TrendingDown,
  Inbox,
  RefreshCw,
  MoreHorizontal,
  Check,
  Copy,
  ArrowUpDown,
  Eye,
  BarChart3,
  Clock,
  Sparkles,
  ShieldCheck,
  UserPlus,
  FileSpreadsheet
} from "lucide-react";
import MasterProtectedRoute from "@/utils/masterProtectedRoute";

// ─── Types ──────────────────────────────────────────────────────────

interface Subscriber {
  id: string | number;
  email: string;
  createdAt: string;
  updatedAt?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

interface Toast {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

// ─── Constants ──────────────────────────────────────────────────────

const API_BASE = "/api/subscribe";
const ITEMS_PER_PAGE = 10;

// ─── Component ───────────────────────────────────────────────────────

export default function SubscriberAdminPanel() {
  // ─── State ────────────────────────────────────────────────────────
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<"email" | "createdAt">("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [addingSubscriber, setAddingSubscriber] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | number | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [dateFilter, setDateFilter] = useState<"all" | "today" | "week" | "month">("all");
  const [refreshing, setRefreshing] = useState(false);

  // ─── Fetch Subscribers ────────────────────────────────────────────
  const fetchSubscribers = useCallback(async (showRefresh = false) => {
    if (showRefresh) setRefreshing(true);
    else setLoading(true);
    try {
      const res = await fetch(API_BASE);
      const data: ApiResponse<Subscriber[]> = await res.json();
      if (data.success && data.data) {
        setSubscribers(data.data);
      } else {
        addToast("error", data.message || "Failed to load subscribers");
      }
    } catch (err) {
      addToast("error", "Network error. Please try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchSubscribers();
  }, [fetchSubscribers]);

  // ─── Toast System ─────────────────────────────────────────────────
  const addToast = (type: Toast["type"], message: string) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // ─── Filtered & Sorted Data ───────────────────────────────────────
  const filteredSubscribers = useMemo(() => {
    let result = [...subscribers];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s) => s.email.toLowerCase().includes(q));
    }

    // Date filter
    const now = new Date();
    if (dateFilter === "today") {
      result = result.filter((s) => {
        const d = new Date(s.createdAt);
        return d.toDateString() === now.toDateString();
      });
    } else if (dateFilter === "week") {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      result = result.filter((s) => new Date(s.createdAt) >= weekAgo);
    } else if (dateFilter === "month") {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      result = result.filter((s) => new Date(s.createdAt) >= monthAgo);
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === "email") {
        comparison = a.email.localeCompare(b.email);
      } else {
        comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return result;
  }, [subscribers, searchQuery, dateFilter, sortField, sortOrder]);

  // ─── Pagination ───────────────────────────────────────────────────
  const totalPages = Math.ceil(filteredSubscribers.length / ITEMS_PER_PAGE);
  const paginatedData = filteredSubscribers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, dateFilter]);

  // ─── Add Subscriber ───────────────────────────────────────────────
  const handleAddSubscriber = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim() || !newEmail.includes("@")) {
      addToast("error", "Please enter a valid email address");
      return;
    }

    setAddingSubscriber(true);
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail.trim() }),
      });
      const data: ApiResponse<unknown> = await res.json();

      if (data.success) {
        addToast("success", data.message || "Subscriber added successfully");
        setNewEmail("");
        setShowAddModal(false);
        fetchSubscribers(true);
      } else {
        addToast("error", data.message || "Failed to add subscriber");
      }
    } catch (err) {
      addToast("error", "Network error. Please try again.");
    } finally {
      setAddingSubscriber(false);
    }
  };

  // ─── Delete Subscriber ────────────────────────────────────────────
  const handleDelete = async (id: string | number) => {
    setDeleting(true);
    try {
      // Note: Your API doesn't have DELETE, but this is for future-proofing
      // For now, we'll simulate with a fetch that would hit DELETE /api/subscribers/:id
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (res.ok) {
        addToast("success", "Subscriber removed successfully");
        setSubscribers((prev) => prev.filter((s) => s.id !== id));
        setSelectedRows((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      } else {
        addToast("error", "Failed to remove subscriber");
      }
    } catch (err) {
      addToast("error", "Network error. Please try again.");
    } finally {
      setDeleting(false);
      setDeleteConfirm(null);
    }
  };

  // ─── Bulk Delete ──────────────────────────────────────────────────
  const handleBulkDelete = async () => {
    if (selectedRows.size === 0) return;
    // In a real app, you'd batch delete. For now, sequential.
    const ids = Array.from(selectedRows);
    for (const id of ids) {
      await handleDelete(id);
    }
    setSelectedRows(new Set());
  };

  // ─── Export CSV ───────────────────────────────────────────────────
  const exportCSV = () => {
    const headers = ["ID", "Email", "Subscribed Date"];
    const rows = filteredSubscribers.map((s) => [
      s.id,
      s.email,
      new Date(s.createdAt).toLocaleString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    addToast("success", "CSV exported successfully");
  };

  // ─── Copy Email ───────────────────────────────────────────────────
  const copyEmail = async (email: string) => {
    await navigator.clipboard.writeText(email);
    addToast("success", "Email copied to clipboard");
  };

  // ─── Toggle Selection ─────────────────────────────────────────────
  const toggleSelect = (id: string | number) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map((s) => s.id)));
    }
  };

  // ─── Stats ──────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const total = subscribers.length;
    const today = subscribers.filter((s) => {
      const d = new Date(s.createdAt);
      return d.toDateString() === new Date().toDateString();
    }).length;
    const thisWeek = subscribers.filter((s) => {
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      return new Date(s.createdAt) >= weekAgo;
    }).length;
    const thisMonth = subscribers.filter((s) => {
      const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      return new Date(s.createdAt) >= monthAgo;
    }).length;
    return { total, today, thisWeek, thisMonth };
  }, [subscribers]);

  // ─── Render ───────────────────────────────────────────────────────

  return (
  

<div className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-6 lg:p-8 font-sans">
  {/* Background decorative */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-100 opacity-30 blur-[100px]" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-200 opacity-20 blur-[120px]" />
  </div>

  {/* Toast Container */}
  <div className="fixed right-4 top-4 z-50 space-y-2 sm:right-6 sm:top-6">
    <AnimatePresence>
      {toasts.map((toast) => (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.9 }}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-xl shadow-slate-900/10 border text-sm font-medium min-w-[280px] ${
            toast.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
              : toast.type === "error"
              ? "bg-rose-50 border-rose-200 text-rose-700"
              : "bg-white border-slate-200 text-slate-900"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 shrink-0" />
          ) : toast.type === "error" ? (
            <AlertCircle className="w-4 h-4 shrink-0" />
          ) : (
            <Sparkles className="w-4 h-4 shrink-0" />
          )}
          {toast.message}
        </motion.div>
      ))}
    </AnimatePresence>
  </div>

  <div className="relative mx-auto max-w-7xl px-0 py-6 sm:py-8 lg:py-10">
    {/* ─── Header ─────────────────────────────────────────────── */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 sm:mb-10"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-900/10">
              <Users className="w-5 h-5 text-white" />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Subscribers
              </h1>

              <p className="text-sm text-slate-500">
                Manage your newsletter subscribers
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
          >
            <UserPlus className="w-4 h-4" />
            Add Subscriber
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={exportCSV}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-blue-200 hover:text-blue-700 transition-all duration-300"
          >
            <FileSpreadsheet className="w-4 h-4" />
            Export CSV
          </motion.button>
        </div>
      </div>
    </motion.div>

    {/* ─── Stats Cards ────────────────────────────────────────── */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {[
        {
          label: "Total Subscribers",
          value: stats.total,
          icon: Users,
          color: "primary",
          bg: "#eff6ff",
          iconColor: "#2563eb",
        },
        {
          label: "Today",
          value: stats.today,
          icon: Clock,
          color: "emerald",
          bg: "#ecfdf5",
          iconColor: "#047857",
        },
        {
          label: "This Week",
          value: stats.thisWeek,
          icon: TrendingUp,
          color: "amber",
          bg: "#fff7ed",
          iconColor: "#c2410c",
        },
        {
          label: "This Month",
          value: stats.thisMonth,
          icon: BarChart3,
          color: "purple",
          bg: "#f5f3ff",
          iconColor: "#7c3aed",
        },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.05 }}
          className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md shadow-blue-900/10 transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: stat.bg }}
            >
              <stat.icon
                className="w-4.5 h-4.5"
                style={{ color: stat.iconColor }}
              />
            </div>

            {stat.value > 0 && stat.label !== "Total Subscribers" && (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                +{stat.value}
              </span>
            )}
          </div>

          <p className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {stat.value.toLocaleString()}
          </p>

          <p className="text-xs text-slate-500 mt-1">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* ─── Toolbar ──────────────────────────────────────────────── */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
    >
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by email..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-100 transition-all"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer border text-sm font-medium transition-all ${
              showFilters || dateFilter !== "all"
                ? "border-blue-200 bg-slate-50 text-blue-800"
                : "border-slate-200 bg-white text-slate-700 hover:border-blue-200"
            }`}
          >
            <Filter className="w-4 h-4" />
            Filters

            {dateFilter !== "all" && (
              <span className="w-2 h-2 rounded-full bg-blue-600" />
            )}
          </button>

          <button
            onClick={() => fetchSubscribers(true)}
            className={`p-2.5 rounded-lg border border-slate-200 cursor-pointer text-slate-500 hover:text-blue-700 hover:border-blue-200 transition-all ${
              refreshing ? "animate-spin" : ""
            }`}
            title="Refresh"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200"
          >
            <div className="p-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                Date:
              </span>

              {(["all", "today", "week", "month"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDateFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                    dateFilter === filter
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-200"
                  }`}
                >
                  {filter === "all"
                    ? "All Time"
                    : filter === "today"
                    ? "Today"
                    : filter === "week"
                    ? "Last 7 Days"
                    : "Last 30 Days"}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

    {/* ─── Table ────────────────────────────────────────────────── */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
    >
      {/* Bulk Actions Bar */}
      {selectedRows.size > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-4 py-3 bg-slate-50 border-b border-blue-100 flex items-center justify-between"
        >
          <span className="text-sm font-medium text-blue-800">
            {selectedRows.size} selected
          </span>

          <button
            onClick={handleBulkDelete}
            className="flex items-center gap-1.5 px-3 py-1.5 cursor-pointer rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-50 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Delete Selected
          </button>
        </motion.div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/90">
              <th className="px-4 py-3.5 w-12">
                <input
                  type="checkbox"
                  checked={
                    paginatedData.length > 0 &&
                    paginatedData.every((s) => selectedRows.has(s.id))
                  }
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-slate-200 text-blue-700 focus:ring-blue-200 cursor-pointer"
                />
              </th>

              <th className="px-4 py-3.5 text-left">
                <button
                  onClick={() => {
                    if (sortField === "email")
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    else {
                      setSortField("email");
                      setSortOrder("asc");
                    }
                  }}
                  className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer text-slate-500 uppercase tracking-wider hover:text-slate-900 transition-colors"
                >
                  Email

                  <ArrowUpDown
                    className={`w-3.5 h-3.5 ${
                      sortField === "email"
                        ? "text-blue-700"
                        : ""
                    }`}
                  />
                </button>
              </th>

              <th className="px-4 py-3.5 text-left">
                <button
                  onClick={() => {
                    if (sortField === "createdAt")
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    else {
                      setSortField("createdAt");
                      setSortOrder("desc");
                    }
                  }}
                  className="flex items-center gap-1.5 text-xs cursor-pointer font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-900 transition-colors"
                >
                  Subscribed Date

                  <ArrowUpDown
                    className={`w-3.5 h-3.5 ${
                      sortField === "createdAt"
                        ? "text-blue-700"
                        : ""
                    }`}
                  />
                </button>
              </th>

              <th className="px-4 py-3.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Status
              </th>

              <th className="px-4 py-3.5 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              // Skeleton Loading
              Array.from({ length: 5 }).map((_, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-200"
                >
                  <td className="px-4 py-4">
                    <div className="w-4 h-4 rounded bg-blue-100 animate-pulse" />
                  </td>

                  <td className="px-4 py-4">
                    <div className="h-4 w-48 rounded bg-blue-100 animate-pulse" />
                  </td>

                  <td className="px-4 py-4">
                    <div className="h-4 w-32 rounded bg-blue-100 animate-pulse" />
                  </td>

                  <td className="px-4 py-4">
                    <div className="h-5 w-16 rounded-full bg-blue-100 animate-pulse" />
                  </td>

                  <td className="px-4 py-4">
                    <div className="h-8 w-8 rounded-lg bg-blue-100 animate-pulse ml-auto" />
                  </td>
                </tr>
              ))
            ) : paginatedData.length === 0 ? (
              // Empty State
              <tr>
                <td colSpan={5} className="px-4 py-16 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
                      <Inbox className="w-8 h-8 text-slate-400" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {searchQuery
                        ? "No matches found"
                        : "No subscribers yet"}
                    </h3>

                    <p className="text-sm text-slate-500 max-w-xs mx-auto">
                      {searchQuery
                        ? "Try adjusting your search or filters"
                        : "Start building your audience by adding your first subscriber"}
                    </p>

                    {!searchQuery && (
                      <button
                        onClick={() => setShowAddModal(true)}
                        className="mt-4 flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg bg-slate-50 text-blue-800 text-sm font-semibold hover:bg-blue-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        Add First Subscriber
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.map((subscriber, index) => (
                <motion.tr
                  key={subscriber.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                    selectedRows.has(subscriber.id)
                      ? "bg-slate-50"
                      : ""
                  }`}
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(subscriber.id)}
                      onChange={() => toggleSelect(subscriber.id)}
                      className="w-4 h-4 rounded border-slate-200 text-blue-700 focus:ring-blue-200 cursor-pointer"
                    />
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-blue-700" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {subscriber.email}
                        </p>

                        <p className="text-xs text-slate-400">
                          ID: {String(subscriber.id).slice(0, 8)}...
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />

                      {new Date(
                        subscriber.createdAt
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>

                    <p className="text-xs text-slate-400 mt-0.5">
                      {new Date(
                        subscriber.createdAt
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </td>

                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <ShieldCheck className="w-3 h-3" />
                      Active
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => copyEmail(subscriber.email)}
                        className="p-2 rounded-lg text-slate-400 cursor-pointer hover:text-blue-700 hover:bg-slate-50 transition-all"
                        title="Copy email"
                      >
                        <Copy className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setDeleteConfirm(subscriber.id)}
                        className="p-2 rounded-lg text-slate-400 cursor-pointer hover:text-rose-700 hover:bg-rose-50 transition-all"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ─── Pagination ─────────────────────────────────────────── */}
      {!loading && filteredSubscribers.length > 0 && (
        <div className="px-4 py-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-medium text-slate-900">
              {(currentPage - 1) * ITEMS_PER_PAGE + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium text-slate-900">
              {Math.min(
                currentPage * ITEMS_PER_PAGE,
                filteredSubscribers.length
              )}
            </span>{" "}
            of{" "}
            <span className="font-medium text-slate-900">
              {filteredSubscribers.length}
            </span>{" "}
            subscribers
          </p>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() =>
                setCurrentPage((p) => Math.max(1, p - 1))
              }
              disabled={currentPage === 1}
              className="p-2 rounded-lg cursor-pointer border border-slate-200 text-slate-700 hover:border-blue-200 hover:text-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from(
              { length: Math.min(5, totalPages) },
              (_, i) => {
                let pageNum: number;

                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 px-2.5 rounded-full cursor-pointer text-sm font-medium transition-all ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white shadow-sm"
                        : "border border-slate-200 text-slate-700 hover:border-blue-200 hover:text-blue-700"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              }
            )}

            <button
              onClick={() =>
                setCurrentPage((p) =>
                  Math.min(totalPages, p + 1)
                )
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:border-blue-200 hover:text-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  </div>

  {/* ═══════════════════════════════════════════════════════════
      ADD SUBSCRIBER MODAL
      ═══════════════════════════════════════════════════════════ */}
  <AnimatePresence>
    {showAddModal && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-slate-950/45 backdrop-blur-sm"
        onClick={() => setShowAddModal(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/15 w-full max-w-md overflow-hidden"
        >
          {/* Modal Header */}
          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-blue-700" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Add Subscriber
                </h3>

                <p className="text-xs text-slate-500">
                  Manually add a new email subscriber
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowAddModal(false)}
              className="p-2 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <form
            onSubmit={handleAddSubscriber}
            className="p-6 space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address{" "}
                <span className="text-rose-700">
                  *
                </span>
              </label>

              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="subscriber@example.com"
                  autoFocus
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-200 focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </div>

              <p className="text-xs text-slate-400 mt-1.5">
                We will verify this email is not already subscribed.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-3 px-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-200 hover:text-blue-700 transition-all"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={addingSubscriber || !newEmail.trim()}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl shadow-blue-600/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {addingSubscriber ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    Add Subscriber
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* ═══════════════════════════════════════════════════════════
      DELETE CONFIRMATION MODAL
      ═══════════════════════════════════════════════════════════ */}
  <AnimatePresence>
    {deleteConfirm && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-slate-950/45 backdrop-blur-sm"
        onClick={() => setDeleteConfirm(null)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/15 w-full max-w-sm p-6"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center mb-4">
              <AlertCircle className="w-7 h-7 text-rose-700" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Remove Subscriber?
            </h3>

            <p className="text-sm text-slate-700 mb-6">
              This action cannot be undone. The subscriber will be permanently removed from your list.
            </p>

            <div className="flex gap-3 w-full">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 cursor-pointer text-slate-700 font-semibold text-sm hover:border-blue-200 transition-all"
              >
                Cancel
              </button>

              <button
                onClick={() => handleDelete(deleteConfirm)}
                disabled={deleting}
                className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 border border-rose-600 cursor-pointer text-white font-semibold text-sm hover:bg-rose-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {deleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
                Delete
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</div>


  );
}