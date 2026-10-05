import { NextResponse } from "next/server";

import { pilotRequestSchema } from "../../../../lib/validations/pilots";
import { prisma } from "../../../../lib/prisma";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = pilotRequestSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the submitted information.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, company, useCase, goals } = validation.data;

    const pilotRequest = await prisma.pilotRequest.create({
      data: {
        fullName,
        email,
        company,
        useCase,
        goals: goals || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your pilot request has been submitted successfully.",
        data: {
          id: pilotRequest.id,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/pilot error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your request right now.",
      },
      { status: 500 }
    );
  }
}