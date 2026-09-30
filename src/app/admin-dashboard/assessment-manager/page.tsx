"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Search,
  RefreshCw,
  ClipboardCheck,
  Inbox,
  Phone,
  Mail,
  Building2,
  BriefcaseBusiness,
  UsersRound,
  CheckCircle2,
  Clock3,
  XCircle,
  Eye,
  X,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Filter,
  MessageSquareText,
} from "lucide-react";

type AssessmentStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "CONVERTED"
  | "CLOSED";

type Assessment = {
  id: number;
  fullName: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  companySize: string;
  goals: string;
  status: AssessmentStatus | string;
  createdAt: string;
  updatedAt: string;
};

type Summary = {
  total: number;
  new: number;
  contacted: number;
  qualified: number;
  converted: number;
  closed: number;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

type ApiResponse = {
  success: boolean;
  data: Assessment[];
  summary: Summary;
  pagination: Pagination;
  message?: string;
};

const PAGE_SIZE = 10;

const statusConfig: Record<
  AssessmentStatus,
  {
    label: string;
    dot: string;
    classes: string;
  }
> = {
  NEW: {
    label: "New",
    dot: "bg-blue-500",
    classes:
      "border-blue-200 bg-blue-50 text-blue-700",
  },

  CONTACTED: {
    label: "Contacted",
    dot: "bg-amber-500",
    classes:
      "border-amber-200 bg-amber-50 text-amber-700",
  },

  QUALIFIED: {
    label: "Qualified",
    dot: "bg-violet-500",
    classes:
      "border-violet-200 bg-violet-50 text-violet-700",
  },

  CONVERTED: {
    label: "Converted",
    dot: "bg-emerald-500",
    classes:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
  },

  CLOSED: {
    label: "Closed",
    dot: "bg-slate-400",
    classes:
      "border-slate-200 bg-slate-100 text-slate-600",
  },
};

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const config =
    statusConfig[status as AssessmentStatus] ??
    statusConfig.NEW;

  const label =
    statusConfig[status as AssessmentStatus]?.label ??
    status;

  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-bold ${config.classes}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${config.dot}`}
      />
      {label}
    </span>
  );
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatDateTime(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getInitials(name: string) {
  return (
    name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase() || "A"
  );
}

function StatCard({
  title,
  value,
  helper,
  icon,
}: {
  title: string;
  value: number;
  helper: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(7,23,68,0.05)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(7,23,68,0.08)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#e9f3fe] blur-2xl transition duration-300 group-hover:bg-[#f3e8ff]" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-black tracking-tight text-[#071744]">
            {value}
          </p>

          <p className="mt-1 text-xs font-medium text-slate-400">
            {helper}
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-[#e9f3fe] text-[#0876ed]">
          {icon}
        </div>
      </div>
    </div>
  );
}

function LoadingRows() {
  return (
    <div className="space-y-3 p-4 sm:p-5">
      {Array.from({ length: 6 }).map(
        (_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-xl border border-slate-100 p-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 rounded bg-slate-100" />
            </div>
          </div>
        )
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[340px] flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-[#e9f3fe] text-[#0876ed]">
        <ClipboardCheck className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-lg font-black text-[#071744]">
        No assessments found
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        New AI business assessment requests will
        appear here automatically.
      </p>
    </div>
  );
}

function DetailModal({
  assessment,
  onClose,
}: {
  assessment: Assessment;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071744]/45 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_100px_rgba(7,23,68,0.2)]">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0876ed]">
                Assessment Request
              </span>

              <StatusBadge
                status={assessment.status}
              />
            </div>

            <h2 className="mt-2 truncate text-xl font-black tracking-tight text-[#071744] sm:text-2xl">
              {assessment.fullName}
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Request #{assessment.id}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-800"
            aria-label="Close details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
                <Mail className="h-4 w-4" />
                Business Email
              </div>

              <a
                href={`mailto:${assessment.email}`}
                className="mt-2 block break-all text-sm font-bold text-[#0876ed] hover:underline"
              >
                {assessment.email}
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
                <Phone className="h-4 w-4" />
                Phone
              </div>

              <a
                href={`tel:${assessment.phone}`}
                className="mt-2 block text-sm font-bold text-[#071744] hover:text-[#0876ed]"
              >
                {assessment.phone}
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
                <Building2 className="h-4 w-4" />
                Company
              </div>

              <p className="mt-2 text-sm font-bold text-[#071744]">
                {assessment.company}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
                <BriefcaseBusiness className="h-4 w-4" />
                Industry
              </div>

              <p className="mt-2 text-sm font-bold text-[#071744]">
                {assessment.industry}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
                <UsersRound className="h-4 w-4" />
                Company Size
              </div>

              <p className="mt-2 text-sm font-bold text-[#071744]">
                {assessment.companySize}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
                <CalendarDays className="h-4 w-4" />
                Submitted
              </div>

              <p className="mt-2 text-sm font-bold text-[#071744]">
                {formatDateTime(
                  assessment.createdAt
                )}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-400">
              <MessageSquareText className="h-4 w-4" />
              Business Goals
            </div>

            <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-600">
              {assessment.goals ||
                "No business goals provided."}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="text-xs font-medium text-slate-400">
            Updated{" "}
            {formatDateTime(
              assessment.updatedAt
            )}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={`mailto:${assessment.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0876ed] to-[#5c2bea] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AssessmentAdminPanel() {
  const [assessments, setAssessments] =
    useState<Assessment[]>([]);

  const [summary, setSummary] = useState<Summary>({
    total: 0,
    new: 0,
    contacted: 0,
    qualified: 0,
    converted: 0,
    closed: 0,
  });

  const [pagination, setPagination] =
    useState<Pagination>({
      page: 1,
      limit: PAGE_SIZE,
      total: 0,
      totalPages: 0,
      hasPreviousPage: false,
      hasNextPage: false,
    });

  const [searchInput, setSearchInput] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [status, setStatus] = useState<
    "ALL" | AssessmentStatus
  >("ALL");

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [error, setError] =
    useState("");

  const [selectedAssessment, setSelectedAssessment] =
    useState<Assessment | null>(null);

  const fetchAssessments = useCallback(
    async (
      page: number = 1,
      isRefresh = false
    ) => {
      try {
        if (isRefresh) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }

        setError("");

        const params = new URLSearchParams();

        params.set("page", String(page));
        params.set(
          "limit",
          String(PAGE_SIZE)
        );

        if (search) {
          params.set("search", search);
        }

        if (status !== "ALL") {
          params.set("status", status);
        }

        const response = await fetch(
          `/api/admin/assessment?${params.toString()}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const result: ApiResponse =
          await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
              "Unable to load assessments."
          );
        }

        setAssessments(result.data);
        setSummary(result.summary);
        setPagination(result.pagination);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load assessments."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [search, status]
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      fetchAssessments(1);
    }, 350);

    return () => {
      window.clearTimeout(timer);
    };
  }, [search, status, fetchAssessments]);

  const visibleRange = useMemo(() => {
    if (pagination.total === 0) {
      return {
        start: 0,
        end: 0,
      };
    }

    return {
      start:
        (pagination.page - 1) *
          pagination.limit +
        1,

      end: Math.min(
        pagination.page *
          pagination.limit,
        pagination.total
      ),
    };
  }, [pagination]);

  const clearFilters = () => {
    setSearchInput("");
    setSearch("");
    setStatus("ALL");
  };

  return (
    <>
      <div className="w-full min-w-0">
        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0876ed]" />

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0876ed] sm:text-sm">
                AI Business Assessment
              </span>
            </div>

            <h1 className="text-2xl font-black tracking-tight text-[#071744] sm:text-3xl lg:text-4xl">
              Assessment Requests
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Review and manage businesses that have
              requested an AI assessment.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              fetchAssessments(
                pagination.page,
                true
              )
            }
            disabled={refreshing}
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-[#e9f3fe] hover:text-[#0876ed] disabled:cursor-not-allowed disabled:opacity-60 xl:self-auto"
          >
            <RefreshCw
              className={`h-4 w-4 ${
                refreshing
                  ? "animate-spin"
                  : ""
              }`}
            />

            {refreshing
              ? "Refreshing..."
              : "Refresh"}
          </button>
        </div>

        {/* STATS */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard
            title="Total"
            value={summary.total}
            helper="All assessments"
            icon={
              <ClipboardCheck className="h-5 w-5" />
            }
          />

          <StatCard
            title="New"
            value={summary.new}
            helper="Needs follow-up"
            icon={
              <Inbox className="h-5 w-5" />
            }
          />

          <StatCard
            title="Contacted"
            value={summary.contacted}
            helper="Follow-up started"
            icon={
              <Phone className="h-5 w-5" />
            }
          />

          <StatCard
            title="Qualified"
            value={summary.qualified}
            helper="Potential opportunities"
            icon={
              <CheckCircle2 className="h-5 w-5" />
            }
          />

          <StatCard
            title="Converted"
            value={summary.converted}
            helper="Successfully converted"
            icon={
              <CheckCircle2 className="h-5 w-5" />
            }
          />
        </div>

        {/* MAIN CARD */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(7,23,68,0.05)]">
          {/* TOOLBAR */}
          <div className="border-b border-slate-100 p-4 sm:p-5">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative w-full xl:max-w-xl">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="search"
                  value={searchInput}
                  onChange={(event) => {
                    const value =
                      event.target.value;

                    setSearchInput(value);
                    setSearch(value.trim());
                  }}
                  placeholder="Search name, email, company, phone, industry..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-[#071744] outline-none transition placeholder:text-slate-400 focus:border-[#0876ed] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-bold text-slate-500">
                  <Filter className="h-4 w-4" />
                  Status
                </div>

                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(
                      event.target.value as
                        | "ALL"
                        | AssessmentStatus
                    )
                  }
                  className="h-11 min-w-[160px] rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-[#071744] outline-none transition focus:border-[#0876ed] focus:bg-white focus:ring-4 focus:ring-blue-100"
                >
                  <option value="ALL">
                    All Statuses
                  </option>

                  <option value="NEW">
                    New
                  </option>

                  <option value="CONTACTED">
                    Contacted
                  </option>

                  <option value="QUALIFIED">
                    Qualified
                  </option>

                  <option value="CONVERTED">
                    Converted
                  </option>

                  <option value="CLOSED">
                    Closed
                  </option>
                </select>

                {(search || status !== "ALL") && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-600 transition hover:bg-slate-50 hover:text-[#0876ed]"
                  >
                    <X className="h-4 w-4" />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mx-4 mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 sm:mx-5">
              {error}
            </div>
          )}

          {/* DESKTOP TABLE */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[1050px] border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80">
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Applicant
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Company
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Industry
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Company Size
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Status
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Submitted
                  </th>

                  <th className="px-5 py-4 text-right text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7}>
                      <LoadingRows />
                    </td>
                  </tr>
                ) : assessments.length === 0 ? (
                  <tr>
                    <td colSpan={7}>
                      <EmptyState />
                    </td>
                  </tr>
                ) : (
                  assessments.map(
                    (assessment) => (
                      <tr
                        key={
                          assessment.id
                        }
                        className="border-b border-slate-100 transition hover:bg-slate-50/70"
                      >
                        <td className="px-5 py-4">
                          <div className="flex min-w-[260px] items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0876ed] to-[#5c2bea] text-xs font-black text-white">
                              {getInitials(
                                assessment.fullName
                              )}
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-sm font-extrabold text-[#071744]">
                                {
                                  assessment.fullName
                                }
                              </p>

                              <p className="mt-0.5 truncate text-xs font-medium text-slate-400">
                                {
                                  assessment.email
                                }
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <p className="max-w-[180px] truncate text-sm font-bold text-slate-700">
                            {
                              assessment.company
                            }
                          </p>

                          <a
                            href={`tel:${assessment.phone}`}
                            className="mt-1 block text-xs font-medium text-slate-400 hover:text-[#0876ed]"
                          >
                            {
                              assessment.phone
                            }
                          </a>
                        </td>

                        <td className="px-5 py-4">
                          <span className="inline-flex max-w-[180px] truncate rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                            {
                              assessment.industry
                            }
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <p className="whitespace-nowrap text-sm font-semibold text-slate-600">
                            {
                              assessment.companySize
                            }
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <StatusBadge
                            status={
                              assessment.status
                            }
                          />
                        </td>

                        <td className="px-5 py-4">
                          <p className="whitespace-nowrap text-sm font-semibold text-slate-600">
                            {formatDate(
                              assessment.createdAt
                            )}
                          </p>
                        </td>

                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedAssessment(
                                assessment
                              )
                            }
                            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:bg-[#e9f3fe] hover:text-[#0876ed]"
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </button>
                        </td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* TABLET / MOBILE */}
          <div className="lg:hidden">
            {loading ? (
              <LoadingRows />
            ) : assessments.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-3 p-4 sm:p-5">
                {assessments.map(
                  (assessment) => (
                    <div
                      key={assessment.id}
                      className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0876ed] to-[#5c2bea] text-xs font-black text-white">
                            {getInitials(
                              assessment.fullName
                            )}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-extrabold text-[#071744]">
                              {
                                assessment.fullName
                              }
                            </p>

                            <p className="truncate text-xs font-medium text-slate-400">
                              {
                                assessment.email
                              }
                            </p>
                          </div>
                        </div>

                        <StatusBadge
                          status={
                            assessment.status
                          }
                        />
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <div className="rounded-xl bg-slate-50 p-3">
                          <p className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400">
                            Company
                          </p>

                          <p className="mt-1 truncate text-xs font-bold text-slate-700">
                            {
                              assessment.company
                            }
                          </p>
                        </div>

                        <div className="rounded-xl bg-slate-50 p-3">
                          <p className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400">
                            Industry
                          </p>

                          <p className="mt-1 truncate text-xs font-bold text-slate-700">
                            {
                              assessment.industry
                            }
                          </p>
                        </div>

                        <div className="rounded-xl bg-slate-50 p-3">
                          <p className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400">
                            Size
                          </p>

                          <p className="mt-1 truncate text-xs font-bold text-slate-700">
                            {
                              assessment.companySize
                            }
                          </p>
                        </div>

                        <div className="rounded-xl bg-slate-50 p-3">
                          <p className="text-[10px] font-extrabold uppercase tracking-wide text-slate-400">
                            Submitted
                          </p>

                          <p className="mt-1 truncate text-xs font-bold text-slate-700">
                            {formatDate(
                              assessment.createdAt
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex gap-2">
                          <a
                            href={`mailto:${assessment.email}`}
                            className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-bold text-slate-600 hover:border-blue-200 hover:bg-[#e9f3fe] hover:text-[#0876ed]"
                            aria-label="Email applicant"
                          >
                            <Mail className="h-4 w-4" />
                          </a>

                          <a
                            href={`tel:${assessment.phone}`}
                            className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-bold text-slate-600 hover:border-blue-200 hover:bg-[#e9f3fe] hover:text-[#0876ed]"
                            aria-label="Call applicant"
                          >
                            <Phone className="h-4 w-4" />
                          </a>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setSelectedAssessment(
                              assessment
                            )
                          }
                          className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:bg-[#e9f3fe] hover:text-[#0876ed]"
                        >
                          <Eye className="h-4 w-4" />
                          View Details
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* PAGINATION */}
          {!loading &&
            pagination.total > 0 && (
              <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                  Showing{" "}
                  <span className="font-black text-slate-700">
                    {visibleRange.start}
                  </span>{" "}
                  to{" "}
                  <span className="font-black text-slate-700">
                    {visibleRange.end}
                  </span>{" "}
                  of{" "}
                  <span className="font-black text-slate-700">
                    {pagination.total}
                  </span>
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={
                      !pagination.hasPreviousPage
                    }
                    onClick={() =>
                      fetchAssessments(
                        pagination.page - 1
                      )
                    }
                    className="inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:bg-[#e9f3fe] hover:text-[#0876ed] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" />

                    <span className="hidden sm:inline">
                      Previous
                    </span>
                  </button>

                  <div className="flex h-10 min-w-10 items-center justify-center rounded-lg bg-[#071744] px-3 text-sm font-black text-white">
                    {pagination.page}
                  </div>

                  <button
                    type="button"
                    disabled={
                      !pagination.hasNextPage
                    }
                    onClick={() =>
                      fetchAssessments(
                        pagination.page + 1
                      )
                    }
                    className="inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:bg-[#e9f3fe] hover:text-[#0876ed] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="hidden sm:inline">
                      Next
                    </span>

                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>

      {selectedAssessment && (
        <DetailModal
          assessment={selectedAssessment}
          onClose={() =>
            setSelectedAssessment(null)
          }
        />
      )}
    </>
  );
}