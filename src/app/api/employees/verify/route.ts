import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const employeeId = searchParams.get("employeeId");

    if (!employeeId || !employeeId.trim()) {
      return NextResponse.json({ error: "Employee ID is required" }, { status: 400 });
    }

    const employee = await prisma.employeeIdCard.findUnique({
      where: { employeeId: employeeId.trim() },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "No employee ID card matches that ID." },
        { status: 404 }
      );
    }

    if (!employee.hasVerified) {
      // Found, but not verified — return the card data anyway so the
      // frontend can still render it, styled as "unverified"
      return NextResponse.json(
        { error: "This ID card has not been verified.", employee },
        { status: 403 }
      );
    }

    return NextResponse.json(employee, { status: 200 });
  } catch (error) {
    console.error("Error verifying employee ID:", error);
    return NextResponse.json({ error: "Failed to verify employee ID" }, { status: 500 });
  }
}