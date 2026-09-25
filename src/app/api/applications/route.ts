import { NextResponse } from "next/server";
import { Readable } from "node:stream";


import { getGoogleDrive } from "../../../../lib/google-drive";
import { prisma } from "../../../../lib/prisma";
import { jobs } from "../../../../data/jobs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_EXTENSIONS = new Set([
  "pdf",
  "doc",
  "docx",
]);

const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function textValue(
  value: FormDataEntryValue | null,
  maxLength: number
) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .replace(/\u0000/g, "")
    .slice(0, maxLength);
}

function getExtension(filename: string) {
  const parts = filename.toLowerCase().split(".");

  return parts.length > 1
    ? parts[parts.length - 1]
    : "";
}

function sanitizeFilename(filename: string) {
  return filename
    .normalize("NFKC")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 180);
}

function isValidUrl(value: string) {
  if (!value) {
    return true;
  }

  try {
    const url = new URL(value);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );
  } catch {
    return false;
  }
}

function hasValidFileSignature(
  bytes: Uint8Array,
  extension: string
) {
  // PDF
  if (extension === "pdf") {
    return (
      bytes.length >= 5 &&
      bytes[0] === 0x25 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x44 &&
      bytes[3] === 0x46 &&
      bytes[4] === 0x2d
    );
  }

  // DOC
  if (extension === "doc") {
    return (
      bytes.length >= 8 &&
      bytes[0] === 0xd0 &&
      bytes[1] === 0xcf &&
      bytes[2] === 0x11 &&
      bytes[3] === 0xe0 &&
      bytes[4] === 0xa1 &&
      bytes[5] === 0xb1 &&
      bytes[6] === 0x1a &&
      bytes[7] === 0xe1
    );
  }

  // DOCX = ZIP
  if (extension === "docx") {
    return (
      bytes.length >= 4 &&
      bytes[0] === 0x50 &&
      bytes[1] === 0x4b &&
      (
        (
          bytes[2] === 0x03 &&
          bytes[3] === 0x04
        ) ||
        (
          bytes[2] === 0x05 &&
          bytes[3] === 0x06
        ) ||
        (
          bytes[2] === 0x07 &&
          bytes[3] === 0x08
        )
      )
    );
  }

  return false;
}

export async function POST(request: Request) {
  let uploadedFileId: string | null = null;

  try {
    const formData =
      await request.formData();

    // -----------------------------------------
    // CANDIDATE DATA
    // -----------------------------------------

    const name = textValue(
      formData.get("name"),
      160
    );

    const email = textValue(
      formData.get("email"),
      160
    ).toLowerCase();

    const phone = textValue(
      formData.get("phone"),
      30
    );

    const candidateLocation =
      textValue(
        formData.get("location"),
        120
      );

    const linkedin = textValue(
      formData.get("linkedin"),
      500
    );

    const portfolio = textValue(
      formData.get("portfolio"),
      500
    );

    const motivation = textValue(
      formData.get("motivation"),
      5000
    );

    const consent =
      formData.get("consent") === "on";

    // -----------------------------------------
    // JOB
    // -----------------------------------------

    const jobSlug = textValue(
      formData.get("jobSlug"),
      191
    );

    /*
     * IMPORTANT:
     *
     * Do not trust job title, department,
     * location or type from the browser.
     *
     * Find the real job on the server.
     */

    const selectedJob = jobs.find(
      (job) => job.slug === jobSlug
    );

    // -----------------------------------------
    // VALIDATION
    // -----------------------------------------

    if (!name) {
      return NextResponse.json(
        {
          error:
            "Full name is required.",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          error:
            "Email address is required.",
        },
        { status: 400 }
      );
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        {
          error:
            "Phone number is required.",
        },
        { status: 400 }
      );
    }

    if (!candidateLocation) {
      return NextResponse.json(
        {
          error:
            "Location is required.",
        },
        { status: 400 }
      );
    }

    if (!motivation) {
      return NextResponse.json(
        {
          error:
            "Motivation is required.",
        },
        { status: 400 }
      );
    }

    if (motivation.length < 10) {
      return NextResponse.json(
        {
          error:
            "Motivation must contain at least 10 characters.",
        },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        {
          error:
            "Please accept the Privacy Policy.",
        },
        { status: 400 }
      );
    }

    if (!selectedJob) {
      return NextResponse.json(
        {
          error:
            "The selected job is invalid or no longer available.",
        },
        { status: 400 }
      );
    }

    if (!isValidUrl(linkedin)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid LinkedIn URL.",
        },
        { status: 400 }
      );
    }

    if (!isValidUrl(portfolio)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid portfolio URL.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // RESUME
    // -----------------------------------------

    const resume =
      formData.get("resume");

    if (!(resume instanceof File)) {
      return NextResponse.json(
        {
          error:
            "Please upload your résumé.",
        },
        { status: 400 }
      );
    }

    if (resume.size <= 0) {
      return NextResponse.json(
        {
          error:
            "The uploaded resume is empty.",
        },
        { status: 400 }
      );
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error:
            "Resume must be 5MB or smaller.",
        },
        { status: 400 }
      );
    }

    const extension =
      getExtension(resume.name);

    if (
      !ALLOWED_EXTENSIONS.has(
        extension
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Only PDF, DOC and DOCX files are allowed.",
        },
        { status: 400 }
      );
    }

    if (
      resume.type &&
      !ALLOWED_MIME_TYPES.has(
        resume.type
      )
    ) {
      return NextResponse.json(
        {
          error:
            "The uploaded file type is not supported.",
        },
        { status: 400 }
      );
    }

    const resumeBytes = new Uint8Array(
      await resume.arrayBuffer()
    );

    if (
      !hasValidFileSignature(
        resumeBytes,
        extension
      )
    ) {
      return NextResponse.json(
        {
          error:
            "The uploaded file does not appear to be a valid document.",
        },
        { status: 400 }
      );
    }

    // -----------------------------------------
    // GOOGLE DRIVE
    // -----------------------------------------

    const folderId =
      process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!folderId) {
      throw new Error(
        "GOOGLE_DRIVE_FOLDER_ID is not configured."
      );
    }

    const drive = getGoogleDrive();

    const safeFilename =
      sanitizeFilename(resume.name);

    const driveFilename =
      `${new Date().getFullYear()}-${crypto.randomUUID()}-${safeFilename}`;

    const fileBuffer = Buffer.from(
      resumeBytes
    );

    const driveResponse =
      await drive.files.create({
        supportsAllDrives: true,

        requestBody: {
          name: driveFilename,
          parents: [folderId],
          description:
            `AI WorksForce application | Job: ${selectedJob.title} | Candidate: ${name} | Email: ${email}`,
        },

        media: {
          mimeType:
            resume.type ||
            "application/octet-stream",

          body: Readable.from(
            fileBuffer
          ),
        },

        fields:
          "id,name,mimeType,size,webViewLink",
      });

    const driveFile =
      driveResponse.data;

    if (!driveFile.id) {
      throw new Error(
        "Google Drive upload failed."
      );
    }

    uploadedFileId =
      driveFile.id;

    // -----------------------------------------
    // DATABASE
    // -----------------------------------------

    const application =
      await prisma.jobApplication.create({
        data: {
          name,
          email,
          phone,

          candidateLocation,

          linkedin:
            linkedin || null,

          portfolio:
            portfolio || null,

          motivation,

          consent,

          // Trusted job data
          jobSlug:
            selectedJob.slug,

          jobTitle:
            selectedJob.title,

          department:
            selectedJob.department,

          jobLocation:
            selectedJob.location,

          jobType:
            selectedJob.type,

          // Google Drive
          resumeName:
            resume.name,

          resumeDriveId:
            driveFile.id,

          resumeViewLink:
            driveFile.webViewLink ??
            null,

          resumeMimeType:
            resume.type ||
            "application/octet-stream",

          resumeSize:
            resume.size,

          status: "NEW",
        },

        select: {
          id: true,
          createdAt: true,
        },
      });

    // -----------------------------------------
    // SUCCESS
    // -----------------------------------------

    return NextResponse.json(
      {
        success: true,

        message:
          "Application submitted successfully.",

        applicationId:
          application.id,

        submittedAt:
          application.createdAt,
      },
      {
        status: 201,
        headers: {
          "Cache-Control":
            "no-store",
        },
      }
    );
  } catch (error) {
    console.error(
      "APPLICATION_SUBMISSION_ERROR:",
      error
    );

    /*
     * If Google Drive upload worked,
     * but MySQL failed, remove the file
     * so we don't leave an orphan CV.
     */

    if (uploadedFileId) {
      try {
        const drive =
          getGoogleDrive();

        await drive.files.delete({
          fileId:
            uploadedFileId,

          supportsAllDrives: true,
        });
      } catch (cleanupError) {
        console.error(
          "GOOGLE_DRIVE_CLEANUP_ERROR:",
          cleanupError
        );
      }
    }

    return NextResponse.json(
      {
        error:
          "Unable to submit your application right now. Please try again.",
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