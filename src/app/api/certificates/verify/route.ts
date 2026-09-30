import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const certificateId = searchParams.get("certificateId");

    if (!certificateId) {
      return NextResponse.json({ error: "Certificate ID is required" }, { status: 400 });
    }

    const certificate = await prisma.certificate.findUnique({
      where: { certificateId: certificateId.trim() },
    });

    if (!certificate) {
      return NextResponse.json({ error: "Invalid Certificate ID. No record found." }, { status: 404 });
    }

    // Check if certificate is valid
    if (certificate.status !== "VALID") {
      return NextResponse.json({ 
        error: `This certificate is currently marked as ${certificate.status}`,
        certificate 
      }, { status: 400 });
    }

    return NextResponse.json(certificate, { status: 200 });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}