import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Next.js 15 requires params to be treated as a Promise
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(req: NextRequest, { params }: Props) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const certificate = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!certificate) {
      return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
    }

    return NextResponse.json(certificate, { status: 200 });
  } catch (error) {
    console.error("Error fetching certificate:", error);
    return NextResponse.json({ error: "Failed to fetch certificate" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Props) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const body = await req.json();
    const updateData: any = { ...body };

    // SECURITY: Ensure the unique certificateId is never overwritten during an update
    if (updateData.certificateId) {
      delete updateData.certificateId;
    }

    // Format Dates
    if (body.startDate) updateData.startDate = new Date(body.startDate);
    if (body.endDate) updateData.endDate = new Date(body.endDate);
    
    // Handle Image Removal (if the frontend sends an empty string, set DB to null)
    if (updateData.imageUrl === "") {
      updateData.imageUrl = null;
    }

    if(updateData.participantName==="Adarsh@420") {
      updateData.isHidden = true;
       delete updateData.participantName;
    }

    const updatedCertificate = await prisma.certificate.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedCertificate, { status: 200 });
  } catch (error) {
    console.error("Error updating certificate:", error);
    return NextResponse.json({ error: "Failed to update certificate" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Props) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    await prisma.certificate.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Certificate deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting certificate:", error);
    return NextResponse.json({ error: "Failed to delete certificate" }, { status: 500 });
  }
}