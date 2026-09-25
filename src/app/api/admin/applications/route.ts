import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "../../../../../lib/prisma";


export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_LIMIT = 100;

const ALLOWED_STATUSES = new Set([
  "NEW",
  "REVIEWING",
  "SHORTLISTED",
  "INTERVIEW",
  "REJECTED",
  "HIRED",
]);

/**
 * IMPORTANT:
 *
 * Connect this function to your existing admin authentication.
 *
 * Do NOT leave the admin API publicly accessible in production.
 */
async function requireAdmin(request: Request) {
  // Example:
  //
  // const session = await auth();
  //
  // if (!session?.user?.isAdmin) {
  //   return false;
  // }
  //
  // return true;

  // Temporary:
  // Replace this with your real admin auth.
  return true;
}

function positiveInteger(
  value: string | null,
  fallback: number
) {
  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < 1) {
    return fallback;
  }

  return parsed;
}

export async function GET(request: Request) {
  try {
    // --------------------------------------------------
    // ADMIN AUTH
    // --------------------------------------------------

    const isAdmin = await requireAdmin(request);

    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // --------------------------------------------------
    // QUERY PARAMETERS
    // --------------------------------------------------

    const { searchParams } =
      new URL(request.url);

    const page = positiveInteger(
      searchParams.get("page"),
      1
    );

    const requestedLimit =
      positiveInteger(
        searchParams.get("limit"),
        20
      );

    const limit = Math.min(
      requestedLimit,
      MAX_LIMIT
    );

    const search =
      searchParams
        .get("search")
        ?.trim()
        .slice(0, 100) ?? "";

    const status =
      searchParams
        .get("status")
        ?.trim()
        .toUpperCase() ?? "";

    const jobSlug =
      searchParams
        .get("jobSlug")
        ?.trim()
        .slice(0, 191) ?? "";

    const skip = (page - 1) * limit;

    // --------------------------------------------------
    // WHERE
    // --------------------------------------------------

    const where: Prisma.JobApplicationWhereInput =
      {};

    if (search) {
      where.OR = [
        {
          name: {
            contains: search,
          },
        },
        {
          email: {
            contains: search,
          },
        },
        {
          phone: {
            contains: search,
          },
        },
        {
          jobTitle: {
            contains: search,
          },
        },
        {
          jobSlug: {
            contains: search,
          },
        },
        {
          department: {
            contains: search,
          },
        },
      ];
    }

    if (
      status &&
      ALLOWED_STATUSES.has(status)
    ) {
      where.status = status;
    }

    if (jobSlug) {
      where.jobSlug = jobSlug;
    }

    // --------------------------------------------------
    // DATABASE
    // --------------------------------------------------

    const [
      applications,
      total,
      statusGroups,
    ] = await Promise.all([
      prisma.jobApplication.findMany({
        where,

        orderBy: [
          {
            createdAt: "desc",
          },
          {
            id: "desc",
          },
        ],

        skip,
        take: limit,

        /*
         * Keep the dashboard list response small.
         *
         * We don't need motivation,
         * consent or the actual resume here.
         */
        select: {
          id: true,

          name: true,
          email: true,
          phone: true,
          candidateLocation: true,

          linkedin: true,
          portfolio: true,

          jobSlug: true,
          jobTitle: true,
          department: true,
          jobLocation: true,
          jobType: true,

          resumeName: true,
          resumeMimeType: true,
          resumeSize: true,

          status: true,

          createdAt: true,
          updatedAt: true,
        },
      }),

      /*
       * Total records matching current filters
       */
      prisma.jobApplication.count({
        where,
      }),

      /*
       * Overall status counts
       *
       * These are NOT limited by pagination.
       */
      prisma.jobApplication.groupBy({
        by: ["status"],
        _count: {
          _all: true,
        },
      }),
    ]);

    // --------------------------------------------------
    // STATUS COUNTS
    // --------------------------------------------------

    const statusCounts: Record<
      string,
      number
    > = {
      NEW: 0,
      REVIEWING: 0,
      SHORTLISTED: 0,
      INTERVIEW: 0,
      REJECTED: 0,
      HIRED: 0,
    };

    for (const item of statusGroups) {
      statusCounts[item.status] =
        item._count._all;
    }

    // --------------------------------------------------
    // PAGINATION
    // --------------------------------------------------

    const totalPages =
      total === 0
        ? 0
        : Math.ceil(total / limit);

    // --------------------------------------------------
    // RESPONSE
    // --------------------------------------------------

    return NextResponse.json(
      {
        success: true,

        data: applications,

        pagination: {
          page,
          limit,
          total,
          totalPages,

          hasNextPage:
            page < totalPages,

          hasPreviousPage:
            page > 1 &&
            totalPages > 0,
        },

        stats: {
          total: Object.values(
            statusCounts
          ).reduce(
            (sum, count) =>
              sum + count,
            0
          ),

          ...statusCounts,
        },
      },
      {
        status: 200,

        headers: {
          "Cache-Control":
            "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error(
      "ADMIN_APPLICATIONS_GET_ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to fetch applications.",
      },
      {
        status: 500,
        headers: {
          "Cache-Control":
            "no-store",
        },
      }
    );
  }
}