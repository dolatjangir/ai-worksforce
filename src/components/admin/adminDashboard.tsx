"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AlertCircle,
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Loader2,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  User,
  Users,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ApplicationStatus =
  | "NEW"
  | "REVIEWING"
  | "SHORTLISTED"
  | "INTERVIEW"
  | "REJECTED"
  | "HIRED"
  | string;

type Application = {
  id: string;

  name: string;
  email: string;
  phone: string;
  candidateLocation: string;

  linkedin: string | null;
  portfolio: string | null;

  jobSlug: string;
  jobTitle: string;
  department: string;
  jobLocation: string;
  jobType: string;

  resumeName: string;
  resumeMimeType: string;
  resumeSize: number;

  status: ApplicationStatus;

  createdAt: string;
  updatedAt: string;
};

type ApplicationDetail = Application & {
  motivation: string;
  consent: boolean;

  resumeDriveId: string;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type Stats = {
  total: number;
  NEW: number;
  REVIEWING: number;
  SHORTLISTED: number;
  INTERVIEW: number;
  REJECTED: number;
  HIRED: number;
};

type ListResponse = {
  success: boolean;
  data: Application[];
  pagination: Pagination;
  stats: Stats;
  error?: string;
};

type DetailResponse = {
  success: boolean;
  data: ApplicationDetail;
  error?: string;
};

/* =========================================================
   CONSTANTS
========================================================= */

const STATUS_OPTIONS = [
  "ALL",
  "NEW",
  "REVIEWING",
  "SHORTLISTED",
  "INTERVIEW",
  "REJECTED",
  "HIRED",
] as const;

const PAGE_SIZE = 20;

/* =========================================================
   HELPERS
========================================================= */

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function formatShortDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function formatFileSize(bytes: number) {
  if (!bytes || bytes <= 0) {
    return "0 B";
  }

  const units = [
    "B",
    "KB",
    "MB",
    "GB",
  ];

  const index = Math.floor(
    Math.log(bytes) / Math.log(1024)
  );

  const safeIndex = Math.min(
    index,
    units.length - 1
  );

  return `${(
    bytes /
    Math.pow(1024, safeIndex)
  ).toFixed(safeIndex === 0 ? 0 : 1)} ${
    units[safeIndex]
  }`;
}

function statusLabel(status: string) {
  switch (status) {
    case "NEW":
      return "New";

    case "REVIEWING":
      return "Reviewing";

    case "SHORTLISTED":
      return "Shortlisted";

    case "INTERVIEW":
      return "Interview";

    case "REJECTED":
      return "Rejected";

    case "HIRED":
      return "Hired";

    default:
      return status;
  }
}

function getInitials(name: string) {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "U"
  );
}

function isPdf(mimeType?: string | null) {
  return mimeType === "application/pdf";
}

function statusClasses(status: string) {
  switch (status) {
    case "NEW":
      return "border-brand-blue/20 bg-brand-blue-soft text-brand-blue";

    case "REVIEWING":
      return "border-brand-purple/20 bg-brand-purple-soft text-brand-purple";

    case "SHORTLISTED":
      return "border-green-200 bg-green-50 text-brand-green";

    case "INTERVIEW":
      return "border-violet-200 bg-violet-50 text-violet-700";

    case "REJECTED":
      return "border-red-200 bg-red-50 text-red-700";

    case "HIRED":
      return "border-green-300 bg-green-100 text-green-800";

    default:
      return "border-slate-200 bg-slate-50 text-slate-600";
  }
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AdminApplicationsDashboard() {
  const [applications, setApplications] =
    useState<Application[]>([]);

  const [selectedApplication, setSelectedApplication] =
    useState<ApplicationDetail | null>(null);

  const [searchInput, setSearchInput] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("ALL");

  const [jobSlug, setJobSlug] =
    useState("ALL");

  const [page, setPage] =
    useState(1);

  const [pagination, setPagination] =
    useState<Pagination>({
      page: 1,
      limit: PAGE_SIZE,
      total: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    });

  const [stats, setStats] =
    useState<Stats>({
      total: 0,
      NEW: 0,
      REVIEWING: 0,
      SHORTLISTED: 0,
      INTERVIEW: 0,
      REJECTED: 0,
      HIRED: 0,
    });

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [detailLoading, setDetailLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [detailError, setDetailError] =
    useState("");

  const [resumePreview, setResumePreview] =
    useState(false);

  /* =======================================================
     DEBOUNCE SEARCH
  ======================================================= */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearch(searchInput.trim());
      setPage(1);
    }, 400);

    return () => {
      window.clearTimeout(timer);
    };
  }, [searchInput]);

  /* =======================================================
     GET APPLICATION LIST
  ======================================================= */

  const fetchApplications = useCallback(
    async (showRefreshLoader = false) => {
      const controller =
        new AbortController();

      try {
        if (showRefreshLoader) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }

        setError("");

        const params =
          new URLSearchParams();

        params.set(
          "page",
          String(page)
        );

        params.set(
          "limit",
          String(PAGE_SIZE)
        );

        if (search) {
          params.set(
            "search",
            search
          );
        }

        if (status !== "ALL") {
          params.set(
            "status",
            status
          );
        }

        if (jobSlug !== "ALL") {
          params.set(
            "jobSlug",
            jobSlug
          );
        }

        const response =
          await fetch(
            `/api/admin/applications?${params.toString()}`,
            {
              method: "GET",
              credentials: "include",
              cache: "no-store",
              signal:
                controller.signal,
              headers: {
                Accept:
                  "application/json",
              },
            }
          );

        const result =
          (await response.json()) as ListResponse;

        if (!response.ok) {
          throw new Error(
            result.error ||
              "Unable to load applications."
          );
        }

        if (!result.success) {
          throw new Error(
            result.error ||
              "Unable to load applications."
          );
        }

        setApplications(
          result.data ?? []
        );

        setPagination(
          result.pagination
        );

        setStats(
          result.stats
        );
      } catch (err) {
        if (
          err instanceof DOMException &&
          err.name === "AbortError"
        ) {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load applications."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }

      return () => {
        controller.abort();
      };
    },
    [
      page,
      search,
      status,
      jobSlug,
    ]
  );

  useEffect(() => {
    fetchApplications();

    return () => {
      // request cleanup handled
      // by browser/navigation
    };
  }, [fetchApplications]);

  /* =======================================================
     UNIQUE JOBS FROM CURRENT DATA
  ======================================================= */

  const jobOptions = useMemo(() => {
    const map = new Map<
      string,
      string
    >();

    for (const application of applications) {
      if (
        application.jobSlug &&
        application.jobTitle
      ) {
        map.set(
          application.jobSlug,
          application.jobTitle
        );
      }
    }

    return Array.from(
      map.entries()
    ).sort((a, b) =>
      a[1].localeCompare(b[1])
    );
  }, [applications]);

  /* =======================================================
     GET SINGLE APPLICATION
  ======================================================= */

  const openApplication = async (
    applicationId: string
  ) => {
    try {
      setSelectedApplication(null);
      setDetailLoading(true);
      setDetailError("");
      setResumePreview(false);

      const response =
        await fetch(
          `/api/admin/applications/${encodeURIComponent(
            applicationId
          )}`,
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
            headers: {
              Accept:
                "application/json",
            },
          }
        );

      const result =
        (await response.json()) as DetailResponse;

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to load application."
        );
      }

      if (!result.success) {
        throw new Error(
          result.error ||
            "Unable to load application."
        );
      }

      setSelectedApplication(
        result.data
      );
    } catch (err) {
      setDetailError(
        err instanceof Error
          ? err.message
          : "Unable to load application."
      );
    } finally {
      setDetailLoading(false);
    }
  };

  /* =======================================================
     RESET FILTERS
  ======================================================= */

  const resetFilters = () => {
    setSearchInput("");
    setSearch("");
    setStatus("ALL");
    setJobSlug("ALL");
    setPage(1);
  };

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const goNext = () => {
    if (
      pagination.hasNextPage
    ) {
      setPage((current) =>
        current + 1
      );
    }
  };

  const goPrevious = () => {
    if (
      pagination.hasPreviousPage
    ) {
      setPage((current) =>
        Math.max(1, current - 1)
      );
    }
  };

  /* =======================================================
     CLOSE DETAIL
  ======================================================= */

  const closeDetail = () => {
    setSelectedApplication(null);
    setDetailError("");
    setResumePreview(false);
  };

  /* =======================================================
     RESUME URL
  ======================================================= */

  const resumeUrl =
    selectedApplication
      ? `/api/admin/applications/${encodeURIComponent(
          selectedApplication.id
        )}/resume`
      : "";

  const resumeDownloadUrl =
    selectedApplication
      ? `/api/admin/applications/${encodeURIComponent(
          selectedApplication.id
        )}/resume?download=true`
      : "";

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue-soft px-3 py-1 text-xs font-semibold text-brand-blue">
              <BriefcaseBusiness className="size-3.5" />
              Recruitment Management
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl lg:text-4xl">
              Job Applications
            </h1>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-brand-text-muted sm:text-base">
              Manage candidate applications,
              review candidate information and
              securely access submitted resumes.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              fetchApplications(true)
            }
            disabled={
              loading || refreshing
            }
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-dark shadow-sm transition hover:border-brand-blue/30 hover:bg-brand-blue-soft/30 disabled:cursor-wait disabled:opacity-60 sm:text-base"
          >
            <RefreshCw
              className={`size-4 ${
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

        {/* =================================================
            ERROR
        ================================================= */}

        {error && (
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            <AlertCircle className="mt-0.5 size-5 shrink-0" />

            <div className="min-w-0 flex-1">
              <p className="font-semibold">
                Unable to load applications
              </p>

              <p className="mt-1 text-sm">
                {error}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                fetchApplications(true)
              }
              className="shrink-0 rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-semibold hover:bg-red-50"
            >
              Retry
            </button>
          </div>
        )}

        {/* =================================================
            STAT CARDS
        ================================================= */}

        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7">
          <StatCard
            icon={
              <Users className="size-5" />
            }
            title="Total"
            value={stats.total}
            tone="blue"
          />

          <StatCard
            icon={
              <Clock3 className="size-5" />
            }
            title="New"
            value={stats.NEW}
            tone="blue"
          />

          <StatCard
            icon={
              <Search className="size-5" />
            }
            title="Reviewing"
            value={
              stats.REVIEWING
            }
            tone="purple"
          />

          <StatCard
            icon={
              <CheckCircle2 className="size-5" />
            }
            title="Shortlisted"
            value={
              stats.SHORTLISTED
            }
            tone="green"
          />

          <StatCard
            icon={
              <CalendarDays className="size-5" />
            }
            title="Interview"
            value={
              stats.INTERVIEW
            }
            tone="purple"
          />

          <StatCard
            icon={
              <X className="size-5" />
            }
            title="Rejected"
            value={
              stats.REJECTED
            }
            tone="red"
          />

          <StatCard
            icon={
              <CheckCircle2 className="size-5" />
            }
            title="Hired"
            value={stats.HIRED}
            tone="green"
          />
        </div>

        {/* =================================================
            FILTER BAR
        ================================================= */}

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-4 sm:p-5">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
              {/* Search */}
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="search"
                  value={
                    searchInput
                  }
                  onChange={(event) =>
                    setSearchInput(
                      event.target
                        .value
                    )
                  }
                  placeholder="Search by candidate, email, phone, job or department..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-brand-dark outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10 sm:text-base"
                />
              </div>

              {/* Status */}
              <div className="relative">
                <Filter className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                <select
                  value={status}
                  onChange={(event) => {
                    setStatus(
                      event.target
                        .value
                    );
                    setPage(1);
                  }}
                  className="h-11 min-w-[170px] appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-9 text-sm font-medium text-brand-dark outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10"
                >
                  {STATUS_OPTIONS.map(
                    (item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item === "ALL"
                          ? "All Status"
                          : statusLabel(
                              item
                            )}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Job */}
              <div className="relative">
                <BriefcaseBusiness className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                <select
                  value={jobSlug}
                  onChange={(event) => {
                    setJobSlug(
                      event.target
                        .value
                    );
                    setPage(1);
                  }}
                  className="h-11 min-w-[220px] max-w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-9 text-sm font-medium text-brand-dark outline-none transition focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/10"
                >
                  <option value="ALL">
                    All Jobs
                  </option>

                  {jobOptions.map(
                    ([slug, title]) => (
                      <option
                        key={slug}
                        value={slug}
                      >
                        {title}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Reset */}
              {(searchInput ||
                search ||
                status !== "ALL" ||
                jobSlug !== "ALL") && (
                <button
                  type="button"
                  onClick={
                    resetFilters
                  }
                  className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 transition hover:border-brand-blue/30 hover:bg-brand-blue-soft/20 hover:text-brand-blue"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* =================================================
              TABLE
          ================================================= */}

          <div className="overflow-x-auto">
            {loading ? (
              <LoadingTable />
            ) : applications.length ===
              0 ? (
              <EmptyState
                hasFilters={
                  Boolean(
                    search ||
                      status !==
                        "ALL" ||
                      jobSlug !==
                        "ALL"
                  )
                }
                onReset={
                  resetFilters
                }
              />
            ) : (
              <>
                <table className="min-w-[1000px] w-full">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/70 text-left">
                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Candidate
                      </th>

                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Job
                      </th>

                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Location
                      </th>

                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Resume
                      </th>

                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Status
                      </th>

                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Applied
                      </th>

                      <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {applications.map(
                      (
                        application
                      ) => (
                        <ApplicationRow
                          key={
                            application.id
                          }
                          application={
                            application
                          }
                          onOpen={() =>
                            openApplication(
                              application.id
                            )
                          }
                        />
                      )
                    )}
                  </tbody>
                </table>

                {/* =================================================
                    PAGINATION
                ================================================= */}

                <div className="flex flex-col gap-3 border-t border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-500">
                    Showing{" "}
                    <span className="font-semibold text-brand-dark">
                      {applications.length}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-brand-dark">
                      {
                        pagination.total
                      }
                    </span>{" "}
                    applications
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={
                        !pagination.hasPreviousPage ||
                        loading
                      }
                      onClick={
                        goPrevious
                      }
                      className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 transition hover:border-brand-blue/30 hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft className="size-4" />
                      Previous
                    </button>

                    <div className="rounded-lg bg-brand-blue-soft px-3 py-2 text-sm font-bold text-brand-blue">
                      {pagination.page}
                      {" / "}
                      {
                        pagination.totalPages
                      }
                    </div>

                    <button
                      type="button"
                      disabled={
                        !pagination.hasNextPage ||
                        loading
                      }
                      onClick={
                        goNext
                      }
                      className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 transition hover:border-brand-blue/30 hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>

      {/* =====================================================
          DETAIL DRAWER
      ===================================================== */}

      {(selectedApplication ||
        detailLoading ||
        detailError) && (
        <>
          <div
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[2px]"
            onClick={closeDetail}
          />

          <aside className="fixed inset-y-0 right-0 z-50 flex w-full max-w-2xl flex-col border-l border-slate-200 bg-white shadow-2xl">
            {/* Drawer Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  <FileText className="size-3.5" />
                  Application Details
                </div>

                <h2 className="truncate text-xl font-bold text-brand-dark sm:text-2xl">
                  {selectedApplication?.name ??
                    (detailLoading
                      ? "Loading..."
                      : "Application")}
                </h2>
              </div>

              <button
                type="button"
                onClick={
                  closeDetail
                }
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto">
              {detailLoading ? (
                <div className="flex min-h-[50vh] items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="mx-auto size-8 animate-spin text-brand-blue" />

                    <p className="mt-3 text-sm text-slate-500">
                      Loading application...
                    </p>
                  </div>
                </div>
              ) : detailError ? (
                <div className="p-6">
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="size-5 shrink-0" />

                      <div>
                        <p className="font-semibold">
                          Unable to load application
                        </p>

                        <p className="mt-1 text-sm">
                          {detailError}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : selectedApplication ? (
                <div className="space-y-6 p-5 sm:p-6">
                  {/* Candidate */}
                  <DetailSection
                    title="Candidate"
                    icon={
                      <User className="size-4" />
                    }
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-soft to-brand-purple-soft text-sm font-bold text-brand-blue">
                        {getInitials(
                          selectedApplication.name
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="text-lg font-bold text-brand-dark">
                          {
                            selectedApplication.name
                          }
                        </p>

                        <p className="text-sm text-slate-500">
                          {
                            selectedApplication.email
                          }
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <InfoItem
                        icon={
                          <Mail className="size-4" />
                        }
                        label="Email"
                        value={
                          selectedApplication.email
                        }
                        href={`mailto:${selectedApplication.email}`}
                      />

                      <InfoItem
                        icon={
                          <Phone className="size-4" />
                        }
                        label="Phone"
                        value={
                          selectedApplication.phone
                        }
                        href={`tel:${selectedApplication.phone}`}
                      />

                      <InfoItem
                        icon={
                          <MapPin className="size-4" />
                        }
                        label="Candidate Location"
                        value={
                          selectedApplication.candidateLocation
                        }
                      />

                      <InfoItem
                        icon={
                          <CalendarDays className="size-4" />
                        }
                        label="Applied"
                        value={formatDate(
                          selectedApplication.createdAt
                        )}
                      />
                    </div>
                  </DetailSection>

                  {/* Job */}
                  <DetailSection
                    title="Job"
                    icon={
                      <BriefcaseBusiness className="size-4" />
                    }
                  >
                    <div className="rounded-xl border border-brand-blue/10 bg-gradient-to-br from-brand-blue-soft/70 to-brand-purple-soft/50 p-4">
                      <p className="text-lg font-bold text-brand-dark">
                        {
                          selectedApplication.jobTitle
                        }
                      </p>

                      <p className="mt-1 text-sm text-slate-600">
                        {
                          selectedApplication.department
                        }
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Tag>
                          {
                            selectedApplication.jobType
                          }
                        </Tag>

                        <Tag>
                          {
                            selectedApplication.jobLocation
                          }
                        </Tag>
                      </div>
                    </div>
                  </DetailSection>

                  {/* Status */}
                  <DetailSection
                    title="Application Status"
                    icon={
                      <CheckCircle2 className="size-4" />
                    }
                  >
                    <span
                      className={`inline-flex rounded-full border px-3 py-1.5 text-sm font-bold ${statusClasses(
                        selectedApplication.status
                      )}`}
                    >
                      {statusLabel(
                        selectedApplication.status
                      )}
                    </span>
                  </DetailSection>

                  {/* Resume */}
                  <DetailSection
                    title="Resume / CV"
                    icon={
                      <FileText className="size-4" />
                    }
                  >
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue shadow-sm ring-1 ring-slate-200">
                          <FileText className="size-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="break-all text-sm font-bold text-brand-dark">
                            {
                              selectedApplication.resumeName
                            }
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {formatFileSize(
                              selectedApplication.resumeSize
                            )}
                            {" • "}
                            {selectedApplication.resumeMimeType}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        {isPdf(
                          selectedApplication.resumeMimeType
                        ) && (
                          <button
                            type="button"
                            onClick={() =>
                              setResumePreview(
                                (
                                  current
                                ) =>
                                  !current
                              )
                            }
                            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                          >
                            <FileText className="size-4" />

                            {resumePreview
                              ? "Hide Preview"
                              : "View Resume"}
                          </button>
                        )}

                        <a
                          href={
                            resumeDownloadUrl
                          }
                          className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-brand-dark transition hover:border-brand-blue/30 hover:bg-brand-blue-soft/20"
                        >
                          <Download className="size-4" />
                          Download
                        </a>
                      </div>

                      {!isPdf(
                        selectedApplication.resumeMimeType
                      ) && (
                        <p className="mt-3 text-xs leading-5 text-slate-500">
                          DOC and DOCX resumes are
                          downloaded securely from
                          Google Drive instead of being
                          rendered directly in the browser.
                        </p>
                      )}

                      {/* PDF PREVIEW */}
                      {resumePreview &&
                        isPdf(
                          selectedApplication.resumeMimeType
                        ) && (
                          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-950">
                            <iframe
                              src={
                                resumeUrl
                              }
                              title={`Resume of ${selectedApplication.name}`}
                              className="h-[70vh] min-h-[500px] w-full bg-white"
                            />
                          </div>
                        )}
                    </div>
                  </DetailSection>

                  {/* Motivation */}
                  <DetailSection
                    title="Why do you want to join AI WorksForce?"
                    icon={
                      <FileText className="size-4" />
                    }
                  >
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
                        {
                          selectedApplication.motivation
                        }
                      </p>
                    </div>
                  </DetailSection>

                  {/* Links */}
                  <DetailSection
                    title="Candidate Links"
                    icon={
                      <ExternalLink className="size-4" />
                    }
                  >
                    <div className="grid gap-2 sm:grid-cols-2">
                      {selectedApplication.linkedin ? (
                        <a
                          href={
                            selectedApplication.linkedin
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand-blue/30 hover:bg-brand-blue-soft/20 hover:text-brand-blue"
                        >
                          LinkedIn
                          <ExternalLink className="size-4" />
                        </a>
                      ) : (
                        <DisabledLink label="LinkedIn not provided" />
                      )}

                      {selectedApplication.portfolio ? (
                        <a
                          href={
                            selectedApplication.portfolio
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand-blue/30 hover:bg-brand-blue-soft/20 hover:text-brand-blue"
                        >
                          Portfolio / Website
                          <ExternalLink className="size-4" />
                        </a>
                      ) : (
                        <DisabledLink label="Portfolio not provided" />
                      )}
                    </div>
                  </DetailSection>

                  {/* Meta */}
                  <DetailSection
                    title="Application Information"
                    icon={
                      <Clock3 className="size-4" />
                    }
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <MetaItem
                        label="Application ID"
                        value={
                          selectedApplication.id
                        }
                      />

                      <MetaItem
                        label="Created"
                        value={formatDate(
                          selectedApplication.createdAt
                        )}
                      />

                      <MetaItem
                        label="Last Updated"
                        value={formatDate(
                          selectedApplication.updatedAt
                        )}
                      />

                      <MetaItem
                        label="Consent"
                        value={
                          selectedApplication.consent
                            ? "Accepted"
                            : "Not accepted"
                        }
                      />
                    </div>
                  </DetailSection>

                  {/* Back / close */}
                  <div className="pb-4">
                    <button
                      type="button"
                      onClick={
                        closeDetail
                      }
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:border-brand-blue/30 hover:bg-brand-blue-soft/20 hover:text-brand-blue"
                    >
                      <ArrowLeft className="size-4" />
                      Back to Applications
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </aside>
        </>
      )}
    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  title,
  value,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  value: number;
  tone:
    | "blue"
    | "purple"
    | "green"
    | "red";
}) {
  const styles = {
    blue: {
      icon: "bg-brand-blue-soft text-brand-blue",
      value: "text-brand-blue",
    },

    purple: {
      icon: "bg-brand-purple-soft text-brand-purple",
      value: "text-brand-purple",
    },

    green: {
      icon: "bg-green-50 text-brand-green",
      value: "text-brand-green",
    },

    red: {
      icon: "bg-red-50 text-red-600",
      value: "text-red-600",
    },
  }[tone];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
      <div
        className={`mb-4 flex size-10 items-center justify-center rounded-xl ${styles.icon}`}
      >
        {icon}
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <p
        className={`mt-1 text-2xl font-black ${styles.value} sm:text-3xl`}
      >
        {value.toLocaleString(
          "en-IN"
        )}
      </p>
    </div>
  );
}

/* =========================================================
   TABLE ROW
========================================================= */

function ApplicationRow({
  application,
  onOpen,
}: {
  application: Application;
  onOpen: () => void;
}) {
  return (
    <tr className="transition hover:bg-slate-50/80">
      {/* Candidate */}
      <td className="px-5 py-4">
        <div className="flex min-w-[250px] items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-soft to-brand-purple-soft text-xs font-black text-brand-blue">
            {getInitials(
              application.name
            )}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-brand-dark">
              {application.name}
            </p>

            <a
              href={`mailto:${application.email}`}
              className="mt-0.5 block truncate text-xs text-slate-500 hover:text-brand-blue"
            >
              {application.email}
            </a>
          </div>
        </div>
      </td>

      {/* Job */}
      <td className="px-5 py-4">
        <div className="max-w-[250px]">
          <p className="truncate text-sm font-semibold text-brand-dark">
            {application.jobTitle}
          </p>

          <p className="mt-0.5 truncate text-xs text-slate-500">
            {application.department}
          </p>
        </div>
      </td>

      {/* Location */}
      <td className="px-5 py-4">
        <div className="flex min-w-[160px] items-center gap-2 text-sm text-slate-600">
          <MapPin className="size-4 text-brand-blue" />
          <span className="truncate">
            {
              application.candidateLocation
            }
          </span>
        </div>
      </td>

      {/* Resume */}
      <td className="px-5 py-4">
        <div className="flex min-w-[180px] items-center gap-2">
          <FileText className="size-4 shrink-0 text-brand-purple" />

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-brand-dark">
              {application.resumeName}
            </p>

            <p className="text-[11px] text-slate-400">
              {formatFileSize(
                application.resumeSize
              )}
            </p>
          </div>
        </div>
      </td>

      {/* Status */}
      <td className="px-5 py-4">
        <span
          className={`inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-bold ${statusClasses(
            application.status
          )}`}
        >
          {statusLabel(
            application.status
          )}
        </span>
      </td>

      {/* Applied */}
      <td className="px-5 py-4">
        <p className="whitespace-nowrap text-sm text-slate-600">
          {formatShortDate(
            application.createdAt
          )}
        </p>
      </td>

      {/* Action */}
      <td className="px-5 py-4 text-right">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-brand-blue px-3.5 py-2 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
        >
          View
          <ExternalLink className="size-4" />
        </button>
      </td>
    </tr>
  );
}

/* =========================================================
   DETAIL SECTION
========================================================= */

function DetailSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-brand-blue-soft text-brand-blue">
          {icon}
        </div>

        <h3 className="text-sm font-bold text-brand-dark sm:text-base">
          {title}
        </h3>
      </div>

      {children}
    </section>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue-soft text-brand-blue">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 break-all text-sm font-semibold text-brand-dark">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-brand-blue/30 hover:bg-brand-blue-soft/20"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
      {content}
    </div>
  );
}

/* =========================================================
   TAG
========================================================= */

function Tag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="rounded-full border border-white/70 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm">
      {children}
    </span>
  );
}

/* =========================================================
   META
========================================================= */

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 break-all text-sm font-semibold text-brand-dark">
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   DISABLED LINK
========================================================= */

function DisabledLink({
  label,
}: {
  label: string;
}) {
  return (
    <div className="inline-flex min-h-11 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-400">
      {label}
    </div>
  );
}

/* =========================================================
   LOADING
========================================================= */

function LoadingTable() {
  return (
    <div className="p-5">
      <div className="space-y-3">
        {Array.from({
          length: 6,
        }).map((_, index) => (
          <div
            key={index}
            className="h-16 animate-pulse rounded-xl bg-slate-100"
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({
  hasFilters,
  onReset,
}: {
  hasFilters: boolean;
  onReset: () => void;
}) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-soft to-brand-purple-soft text-brand-blue">
        <Users className="size-7" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-brand-dark">
        No applications found
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        {hasFilters
          ? "No applications match your current search or filters."
          : "There are no job applications available yet."}
      </p>

      {hasFilters && (
        <button
          type="button"
          onClick={onReset}
          className="mt-5 rounded-xl bg-brand-blue px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-blue-dark"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}