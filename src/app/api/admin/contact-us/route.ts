import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";


export async function GET() {
  try {
    const contacts = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin Contact GET API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch contact messages.",
      },
      { status: 500 }
    );
  }
}