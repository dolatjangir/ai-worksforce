import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { ASSESSMENT_STATUSES, assessmentStatusSchema } from "../../../../../lib/validations/assessment";
import { prisma } from "../../../../../lib/prisma";


export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    // --------------------------------------------------
    // ADMIN AUTHORIZATION
    // --------------------------------------------------
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        { status: 401 }
      );
    }

    // Cast only for compatibility if Session typing
    // does not currently expose your custom role field.
    const userRole = (
      session.user as {
        role?: string;
      }
    ).role;

    if (userRole !== "ADMIN") {
      return NextResponse.json(
        {
          success: false,
          message: "Forbidden.",
        },
        { status: 403 }
      );
    }

    // --------------------------------------------------
    // QUERY PARAMETERS
    // --------------------------------------------------
    const { searchParams } = new URL(request.url);

    const search = searchParams.get("search")?.trim() || "";

    const requestedStatus =
      searchParams.get("status")?.trim() || "";

    const pageRaw = Number(
      searchParams.get("page") || "1"
    );

    const limitRaw = Number(
      searchParams.get("limit") || "10"
    );

    const page =
      Number.isInteger(pageRaw) && pageRaw > 0
        ? pageRaw
        : 1;

    const limit =
      Number.isInteger(limitRaw) && limitRaw > 0
        ? Math.min(limitRaw, 100)
        : 10;

    // --------------------------------------------------
    // VALIDATE STATUS FILTER
    // --------------------------------------------------
    let status:
      | (typeof ASSESSMENT_STATUSES)[number]
      | undefined;

    if (requestedStatus) {
      const parsedStatus =
        assessmentStatusSchema.safeParse(
          requestedStatus
        );

      if (!parsedStatus.success) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid assessment status.",
          },
          { status: 400 }
        );
      }

      status = parsedStatus.data;
    }

    // --------------------------------------------------
    // BUILD FILTER
    // --------------------------------------------------
    const where = {
      ...(status ? { status } : {}),

      ...(search
        ? {
            OR: [
              {
                fullName: {
                  contains: search,
                },
              },
              {
                email: {
                  contains: search,
                },
              },
              {
                company: {
                  contains: search,
                },
              },
              {
                phone: {
                  contains: search,
                },
              },
              {
                industry: {
                  contains: search,
                },
              },
              {
                companySize: {
                  contains: search,
                },
              },
              {
                goals: {
                  contains: search,
                },
              },
            ],
          }
        : {}),
    };

    const skip = (page - 1) * limit;

    // --------------------------------------------------
    // GLOBAL SUMMARY
    // --------------------------------------------------
    const summaryRows = await prisma.assessment.groupBy({
      by: ["status"],
      _count: {
        _all: true,
      },
    });

    const summary = {
      total: 0,
      new: 0,
      contacted: 0,
      qualified: 0,
      converted: 0,
      closed: 0,
    };

    for (const row of summaryRows) {
      const count = row._count._all;

      summary.total += count;

      switch (row.status) {
        case "NEW":
          summary.new = count;
          break;

        case "CONTACTED":
          summary.contacted = count;
          break;

        case "QUALIFIED":
          summary.qualified = count;
          break;

        case "CONVERTED":
          summary.converted = count;
          break;

        case "CLOSED":
          summary.closed = count;
          break;
      }
    }

    // --------------------------------------------------
    // PAGINATED DATA
    // --------------------------------------------------
    const [assessments, totalFiltered] =
      await prisma.$transaction([
        prisma.assessment.findMany({
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
          select: {
            id: true,
            fullName: true,
            email: true,
            company: true,
            phone: true,
            industry: true,
            companySize: true,
            goals: true,
            status: true,
            createdAt: true,
            updatedAt: true,
          },
        }),

        prisma.assessment.count({
          where,
        }),
      ]);

    const totalPages =
      totalFiltered === 0
        ? 0
        : Math.ceil(totalFiltered / limit);

    return NextResponse.json({
      success: true,

      data: assessments,

      summary,

      pagination: {
        page,
        limit,
        total: totalFiltered,
        totalPages,
        hasPreviousPage: page > 1,
        hasNextPage:
          totalPages > 0 && page < totalPages,
      },
    });
  } catch (error) {
    console.error(
      "Admin Assessment GET API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to load assessment requests.",
      },
      { status: 500 }
    );
  }
}