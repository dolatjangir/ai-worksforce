import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


type Props = { params: Promise<{ id: string }> };

export async function PUT(req: NextRequest, { params }: Props) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const body = await req.json();

    const updateData: any = { ...body };
    if (body.dateOfBirth) updateData.dateOfBirth = new Date(body.dateOfBirth);
    if (updateData.imageUrl === "") updateData.imageUrl = null;

    const updatedEmployee = await prisma.employeeIdCard.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedEmployee, { status: 200 });
  } catch (error) {
    console.error("Error updating employee:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Props) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    await prisma.employeeIdCard.delete({ where: { id } });
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}