"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Search,
  RefreshCw,
  Users,
  Clock3,
  CheckCircle2,
  Mail,
  Building2,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  X,
  CalendarDays,
  MessageSquareText,
  Eye,
  Filter,
  Inbox,
} from "lucide-react";

type PilotStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "CONVERTED"
  | "CLOSED";

type PilotRequest = {
  id: number;
  fullName: string;
  email: string;
  company: string;
  useCase: string;
  goals: string | null;
  status: PilotStatus;
  createdAt: string;
  updatedAt: string;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

type ApiResponse = {
  success: boolean;
  data: PilotRequest[];
  pagination: Pagination;
  message?: string;
};

const PAGE_SIZE = 10;

const statusConfig: Record<
  PilotStatus,
  {
    label: string;
    className: string;
    dotClassName: string;
  }
> = {
  NEW: {
    label: "New",
    className:
      "border-blue-200 bg-blue-50 text-blue-700",
    dotClassName: "bg-blue-500",
  },
  CONTACTED: {
    label: "Contacted",
    className:
      "border-amber-200 bg-amber-50 text-amber-700",
    dotClassName: "bg-amber-500",
  },
  QUALIFIED: {
    label: "Qualified",
    className:
      "border-violet-200 bg-violet-50 text-violet-700",
    dotClassName: "bg-violet-500",
  },
  CONVERTED: {
    label: "Converted",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    dotClassName: "bg-emerald-500",
  },
  CLOSED: {
    label: "Closed",
    className:
      "border-slate-200 bg-slate-50 text-slate-600",
    dotClassName: "bg-slate-400",
  },
};

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatDateTime(dateString: string) {
  const date = new Date(dateString);

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

function StatusBadge({ status }: { status: PilotStatus }) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-bold ${config.className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dotClassName}`} />
      {config.label}
    </span>
  );
}

function StatCard({
  title,
  value,
  icon,
  helper,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  helper: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_24px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-50 blur-2xl transition group-hover:bg-indigo-50" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-black tracking-tight text-[#10204f]">
            {value}
          </p>

          <p className="mt-1 text-xs font-medium text-slate-400">
            {helper}
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
        <Inbox className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-[#10204f]">
        No pilot requests found
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        New pilot requests submitted from your Start Pilot page
        will appear here.
      </p>
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="space-y-3 p-4 sm:p-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="grid animate-pulse grid-cols-6 gap-4 rounded-xl border border-slate-100 p-4"
        >
          <div className="h-4 rounded bg-slate-100" />
          <div className="h-4 rounded bg-slate-100" />
          <div className="h-4 rounded bg-slate-100" />
          <div className="h-4 rounded bg-slate-100" />
          <div className="h-4 rounded bg-slate-100" />
          <div className="h-4 rounded bg-slate-100" />
        </div>
      ))}
    </div>
  );
}

function DetailModal({
  item,
  onClose,
}: {
  item: PilotRequest;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.2)]">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-6">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Pilot Request
              </p>

              <StatusBadge status={item.status} />
            </div>

            <h2 className="mt-2 text-xl font-black tracking-tight text-[#10204f] sm:text-2xl">
              {item.fullName}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <Mail className="h-4 w-4" />
                Email
              </div>

              <a
                href={`mailto:${item.email}`}
                className="mt-2 block break-all text-sm font-bold text-blue-600 hover:underline"
              >
                {item.email}
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <Building2 className="h-4 w-4" />
                Company
              </div>

              <p className="mt-2 text-sm font-bold text-[#10204f]">
                {item.company}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <BriefcaseBusiness className="h-4 w-4" />
                Use Case
              </div>

              <p className="mt-2 text-sm font-bold text-[#10204f]">
                {item.useCase}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                <CalendarDays className="h-4 w-4" />
                Submitted
              </div>

              <p className="mt-2 text-sm font-bold text-[#10204f]">
                {formatDateTime(item.createdAt)}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
              <MessageSquareText className="h-4 w-4" />
              Goals
            </div>

            <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-600">
              {item.goals?.trim() || "No goals were provided."}
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-blue-500">
                  Request ID
                </p>

                <p className="mt-1 text-sm font-black text-[#10204f]">
                  #{item.id}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-blue-500">
                  Last Updated
                </p>

                <p className="mt-1 text-sm font-black text-[#10204f]">
                  {formatDateTime(item.updatedAt)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <a
            href={`mailto:${item.email}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Mail className="h-4 w-4" />
            Contact Lead
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
  );
}

export default function PilotAdminPanel() {
  const [requests, setRequests] = useState<PilotRequest[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: PAGE_SIZE,
    total: 0,
    totalPages: 0,
  });

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | PilotStatus>(
    "ALL"
  );

  const [selectedRequest, setSelectedRequest] =
    useState<PilotRequest | null>(null);

  const fetchRequests = useCallback(
    async (page = 1, isRefresh = false) => {
      try {
        if (isRefresh) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }

        setError("");

        const response = await fetch(
          `/api/admin/pilot?page=${page}&limit=${PAGE_SIZE}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const result: ApiResponse = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Unable to load pilot requests."
          );
        }

        setRequests(result.data);
        setPagination(result.pagination);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load pilot requests."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchRequests(1);
  }, [fetchRequests]);

  const filteredRequests = useMemo(() => {
    const query = search.trim().toLowerCase();

    return requests.filter((request) => {
      const matchesStatus =
        statusFilter === "ALL" ||
        request.status === statusFilter;

      if (!matchesStatus) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [
        request.fullName,
        request.email,
        request.company,
        request.useCase,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [requests, search, statusFilter]);

  const stats = useMemo(() => {
    const newCount = requests.filter(
      (item) => item.status === "NEW"
    ).length;

    const contactedCount = requests.filter(
      (item) => item.status === "CONTACTED"
    ).length;

    const qualifiedCount = requests.filter(
      (item) => item.status === "QUALIFIED"
    ).length;

    return {
      total: pagination.total,
      newCount,
      contactedCount,
      qualifiedCount,
    };
  }, [requests, pagination.total]);

  const pageStart =
    pagination.total === 0
      ? 0
      : (pagination.page - 1) * pagination.limit + 1;

  const pageEnd = Math.min(
    pagination.page * pagination.limit,
    pagination.total
  );

  return (
    <>
      <div className="w-full p-4">
        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600 sm:text-sm">
                Lead Management
              </span>
            </div>

            <h1 className="text-2xl font-black tracking-tight text-[#10204f] sm:text-3xl lg:text-4xl">
              Pilot Requests
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Manage and review businesses that have requested an
              AI Workforce pilot.
            </p>
          </div>

          <button
            type="button"
            onClick={() => fetchRequests(pagination.page, true)}
            disabled={refreshing}
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-60 lg:self-auto"
          >
            <RefreshCw
              className={`h-4 w-4 ${
                refreshing ? "animate-spin" : ""
              }`}
            />
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {/* STATS */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Requests"
            value={stats.total}
            helper="All pilot submissions"
            icon={<Users className="h-5 w-5" />}
          />

          <StatCard
            title="New"
            value={stats.newCount}
            helper="Waiting for follow-up"
            icon={<Inbox className="h-5 w-5" />}
          />

          <StatCard
            title="Contacted"
            value={stats.contactedCount}
            helper="Currently being followed up"
            icon={<Clock3 className="h-5 w-5" />}
          />

          <StatCard
            title="Qualified"
            value={stats.qualifiedCount}
            helper="Ready for next step"
            icon={<CheckCircle2 className="h-5 w-5" />}
          />
        </div>

        {/* MAIN CARD */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.05)]">
          {/* TOOLBAR */}
          <div className="border-b border-slate-100 p-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search name, email, company..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-[#10204f] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="flex w-full items-center gap-2 overflow-x-auto lg:w-auto">
                <div className="flex h-11 shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-500">
                  <Filter className="h-4 w-4" />
                  Status
                </div>

                <select
                  value={statusFilter}
                  onChange={(event) => {
                    setStatusFilter(
                      event.target.value as "ALL" | PilotStatus
                    );
                  }}
                  className="h-11 min-w-[150px] shrink-0 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-bold text-[#10204f] outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="NEW">New</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="QUALIFIED">Qualified</option>
                  <option value="CONVERTED">Converted</option>
                  <option value="CLOSED">Closed</option>
                </select>
              </div>
            </div>
          </div>

          {/* ERROR */}
          {error && (
            <div className="m-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}

          {/* DESKTOP TABLE */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80">
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Lead
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Company
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-wide text-slate-400">
                    Use Case
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
                    <td colSpan={6}>
                      <TableSkeleton />
                    </td>
                  </tr>
                ) : filteredRequests.length === 0 ? (
                  <tr>
                    <td colSpan={6}>
                      <EmptyState />
                    </td>
                  </tr>
                ) : (
                  filteredRequests.map((request) => (
                    <tr
                      key={request.id}
                      className="border-b border-slate-100 transition hover:bg-slate-50/70"
                    >
                      <td className="px-5 py-4">
                        <div className="flex min-w-[240px] items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-black text-white">
                            {request.fullName
                              .split(" ")
                              .map((part) => part[0])
                              .slice(0, 2)
                              .join("")
                              .toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-extrabold text-[#10204f]">
                              {request.fullName}
                            </p>

                            <p className="mt-0.5 truncate text-xs font-medium text-slate-400">
                              {request.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <p className="max-w-[180px] truncate text-sm font-bold text-slate-700">
                          {request.company}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <span className="inline-flex max-w-[180px] truncate rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                          {request.useCase}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={request.status} />
                      </td>

                      <td className="px-5 py-4">
                        <p className="whitespace-nowrap text-sm font-semibold text-slate-600">
                          {formatDate(request.createdAt)}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedRequest(request)
                          }
                          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Eye className="h-4 w-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARDS */}
          <div className="md:hidden">
            {loading ? (
              <div className="space-y-3 p-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse rounded-2xl border border-slate-100 p-4"
                  >
                    <div className="flex gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-100" />

                      <div className="flex-1">
                        <div className="h-4 w-40 rounded bg-slate-100" />
                        <div className="mt-2 h-3 w-52 rounded bg-slate-100" />
                      </div>
                    </div>

                    <div className="mt-4 h-10 rounded bg-slate-100" />
                  </div>
                ))}
              </div>
            ) : filteredRequests.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-3 p-4">
                {filteredRequests.map((request) => (
                  <div
                    key={request.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-black text-white">
                          {request.fullName
                            .split(" ")
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-extrabold text-[#10204f]">
                            {request.fullName}
                          </p>

                          <p className="truncate text-xs font-medium text-slate-400">
                            {request.email}
                          </p>
                        </div>
                      </div>

                      <StatusBadge status={request.status} />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                          Company
                        </p>

                        <p className="mt-1 truncate text-xs font-bold text-slate-700">
                          {request.company}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                          Use Case
                        </p>

                        <p className="mt-1 truncate text-xs font-bold text-slate-700">
                          {request.useCase}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold text-slate-400">
                        {formatDate(request.createdAt)}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedRequest(request)
                        }
                        className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Eye className="h-4 w-4" />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FOOTER / PAGINATION */}
          {!loading && pagination.total > 0 && (
            <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                Showing{" "}
                <span className="font-black text-slate-700">
                  {pageStart}
                </span>{" "}
                to{" "}
                <span className="font-black text-slate-700">
                  {pageEnd}
                </span>{" "}
                of{" "}
                <span className="font-black text-slate-700">
                  {pagination.total}
                </span>{" "}
                requests
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={pagination.page <= 1}
                  onClick={() =>
                    fetchRequests(pagination.page - 1)
                  }
                  className="inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    Previous
                  </span>
                </button>

                <div className="flex h-10 min-w-10 items-center justify-center rounded-lg bg-[#10204f] px-3 text-sm font-black text-white">
                  {pagination.page}
                </div>

                <button
                  type="button"
                  disabled={
                    pagination.page >= pagination.totalPages
                  }
                  onClick={() =>
                    fetchRequests(pagination.page + 1)
                  }
                  className="inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
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

      {selectedRequest && (
        <DetailModal
          item={selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </>
  );
}