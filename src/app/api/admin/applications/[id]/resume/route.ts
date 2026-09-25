import { NextResponse } from "next/server";
import { Readable } from "node:stream";
import { prisma } from "../../../../../../../lib/prisma";
import { getGoogleDrive } from "../../../../../../../lib/google-drive";



export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Replace this with your REAL admin authentication.
 *
 * Example:
 *
 * const session = await auth();
 * return !!session?.user?.isAdmin;
 */
async function requireAdmin(request: Request) {
  // TODO: connect your existing admin auth here
  return true;
}

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

function safeFilename(filename: string) {
  return filename
    .normalize("NFKC")
    .replace(/[\r\n"]/g, "")
    .replace(/[^a-zA-Z0-9._() -]/g, "_")
    .slice(0, 180);
}

export async function GET(
  request: Request,
  context: RouteContext
) {
  try {
    // --------------------------------------------------
    // ADMIN AUTHENTICATION
    // --------------------------------------------------

    const isAdmin =
      await requireAdmin(request);

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
    // APPLICATION ID
    // --------------------------------------------------

    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Application ID is required.",
        },
        {
          status: 400,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // --------------------------------------------------
    // GET APPLICATION FROM MYSQL
    // --------------------------------------------------

    const application =
      await prisma.jobApplication.findUnique({
        where: {
          id,
        },

        select: {
          id: true,
          name: true,

          resumeName: true,
          resumeDriveId: true,
          resumeMimeType: true,
          resumeSize: true,
        },
      });

    if (!application) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Application not found.",
        },
        {
          status: 404,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    if (!application.resumeDriveId) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Resume is not available for this application.",
        },
        {
          status: 404,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // --------------------------------------------------
    // GOOGLE DRIVE
    // --------------------------------------------------

    const drive = getGoogleDrive();

    // First get metadata.
    const metadataResponse =
      await drive.files.get({
        fileId:
          application.resumeDriveId,

        supportsAllDrives: true,

        fields:
          "id,name,mimeType,size,capabilities(canDownload)",
      });

    const driveFile =
      metadataResponse.data;

    // --------------------------------------------------
    // CHECK DOWNLOAD PERMISSION
    // --------------------------------------------------

    if (
      driveFile.capabilities?.canDownload === false
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This resume cannot be downloaded.",
        },
        {
          status: 403,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // --------------------------------------------------
    // DOWNLOAD FROM GOOGLE DRIVE
    // --------------------------------------------------

    const fileResponse =
      await drive.files.get(
        {
          fileId:
            application.resumeDriveId,

          alt: "media",

          supportsAllDrives: true,
        },
        {
          responseType: "stream",
        }
      );

    const stream =
      fileResponse.data;

    // --------------------------------------------------
    // FILE INFORMATION
    // --------------------------------------------------

    const fileName = safeFilename(
      driveFile.name ||
        application.resumeName ||
        "resume"
    );

    const mimeType =
      driveFile.mimeType ||
      application.resumeMimeType ||
      "application/octet-stream";

    const isPdf =
      mimeType === "application/pdf";

    const { searchParams } =
      new URL(request.url);

    const download =
      searchParams.get("download") === "true";

    /*
     * PDF:
     *   default = browser preview
     *
     * DOC/DOCX:
     *   default = download
     *
     * ?download=true
     *   force download
     */

    const disposition =
      download || !isPdf
        ? "attachment"
        : "inline";

    // --------------------------------------------------
    // RETURN FILE
    // --------------------------------------------------

    const webStream =
      Readable.toWeb(
        stream
      ) as ReadableStream;

    const headers = new Headers();

    headers.set(
      "Content-Type",
      mimeType
    );

    headers.set(
      "Content-Disposition",
      `${disposition}; filename="${fileName}"`
    );

    headers.set(
      "Cache-Control",
      "private, no-store, max-age=0"
    );

    headers.set(
      "X-Content-Type-Options",
      "nosniff"
    );

    if (driveFile.size) {
      headers.set(
        "Content-Length",
        driveFile.size
      );
    }

    return new Response(
      webStream,
      {
        status: 200,
        headers,
      }
    );
  } catch (error: any) {
    console.error(
      "ADMIN_RESUME_GET_ERROR:",
      error
    );

    const status =
      error?.code === 404
        ? 404
        : 500;

    return NextResponse.json(
      {
        success: false,
        error:
          status === 404
            ? "Resume not found in Google Drive."
            : "Unable to retrieve resume.",
      },
      {
        status,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}