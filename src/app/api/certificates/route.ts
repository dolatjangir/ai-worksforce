import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const certificates = await prisma.certificate.findMany({
       where: {
       isHidden: false, // Exclude hidden certificates
      },
      orderBy: { createdAt: "desc" },
    });
    
    return NextResponse.json(certificates, { status: 200 });
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return NextResponse.json({ error: "Failed to fetch certificates" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Generate a unique 'cr' ID if not provided manually
    const generatedCertificateId = `cr${Math.floor(100000 + Math.random() * 900000)}`;
    const certificateId = body.certificateId || generatedCertificateId;

    const newCertificate = await prisma.certificate.create({
      data: {
        certificateId,
        participantName: body.participantName,
        courseName: body.courseName,
        duration: body.duration,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate),
        // Convert empty strings to null for the database
        imageUrl: body.imageUrl ? body.imageUrl : null,
        instructorName: body.instructorName || null,
        skills: body.skills || [],
        status: body.status || "VALID",
      },
    });

    return NextResponse.json(newCertificate, { status: 201 });
  } catch (error) {
    console.error("Error creating certificate:", error);
    return NextResponse.json({ error: "Failed to create certificate" }, { status: 500 });
  }
}