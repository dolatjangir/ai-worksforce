import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";


export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function requireAdmin(request: Request) {
  // Replace with your existing admin authentication.
  return true;
}

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext
) {
  try {
    const isAdmin =
      await requireAdmin(request);

    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const { id } =
      await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Application ID is required.",
        },
        { status: 400 }
      );
    }

    const application =
      await prisma.jobApplication.findUnique({
        where: {
          id,
        },

        select: {
          id: true,

          name: true,
          email: true,
          phone: true,
          candidateLocation: true,

          linkedin: true,
          portfolio: true,

          motivation: true,
          consent: true,

          jobSlug: true,
          jobTitle: true,
          department: true,
          jobLocation: true,
          jobType: true,

          resumeName: true,
          resumeDriveId: true,
          resumeMimeType: true,
          resumeSize: true,

          status: true,

          createdAt: true,
          updatedAt: true,
        },
      });

    if (!application) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Application not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: application,
      },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error) {
    console.error(
      "ADMIN_APPLICATION_GET_ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to fetch application.",
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