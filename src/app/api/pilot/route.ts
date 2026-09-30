import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { pilotRequestSchema } from "../../../../lib/validations/pilots";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = pilotRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the submitted information.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const pilotRequest = await prisma.pilotRequest.create({
      data: {
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        company: parsed.data.company,
        useCase: parsed.data.useCase,
        goals: parsed.data.goals || null,
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
    console.error("Pilot request POST error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your request right now. Please try again.",
      },
      { status: 500 }
    );
  }
}