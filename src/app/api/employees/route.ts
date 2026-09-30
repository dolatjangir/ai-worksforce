import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Generates an Employee ID like "EMP-2026-483920" and keeps
// regenerating until it finds one that doesn't already exist in DB
async function generateUniqueEmployeeId(): Promise<string> {
  let employeeId: string;
  let exists = true;

  do {
    const year = new Date().getFullYear();
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit
    employeeId = `EMP-${year}-${randomNumber}`;

    const existing = await prisma.employeeIdCard.findUnique({
      where: { employeeId },
    });

    exists = !!existing;
  } while (exists);

  return employeeId;
}

export async function GET() {
  try {
    const employees = await prisma.employeeIdCard.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(employees, { status: 200 });
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json({ error: "Failed to fetch employees" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check if employee already applied
    const existing = await prisma.employeeIdCard.findUnique({
      where: { email: body.email },
    });

    if (existing) {
      return NextResponse.json({ error: "An application with this email already exists." }, { status: 400 });
    }

    // Auto-generate unique employee ID (no manual field, no config file)
    const employeeId = await generateUniqueEmployeeId();

    const newEmployee = await prisma.employeeIdCard.create({
      data: {
        employeeId,
        employeeName: body.employeeName,
        email: body.email,
        phone: body.phone || null,
        jobTitle: body.jobTitle || null,
        qualifications: body.qualifications,
        dateOfBirth: new Date(body.dateOfBirth),
        skills: body.skills || [],
        imageUrl: body.imageUrl || null,
        hasVerified: false,
        hasCertificate: false,
      },
    });

    return NextResponse.json(newEmployee, { status: 201 });
  } catch (error) {
    console.error("Error submitting employee details:", error);
    return NextResponse.json({ error: "Failed to submit details" }, { status: 500 });
  }
}