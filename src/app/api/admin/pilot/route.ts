import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "../../../../../lib/prisma";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json(
        {
          success: false,
          message: "Forbidden",
        },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);

    const pageParam = Number(searchParams.get("page") || "1");
    const limitParam = Number(searchParams.get("limit") || "20");

    const page =
      Number.isFinite(pageParam) && pageParam > 0
        ? Math.floor(pageParam)
        : 1;

    const limit =
      Number.isFinite(limitParam) && limitParam > 0
        ? Math.min(Math.floor(limitParam), 100)
        : 20;

    const skip = (page - 1) * limit;

    const [requests, total] = await prisma.$transaction([
      prisma.pilotRequest.findMany({
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),

      prisma.pilotRequest.count(),
    ]);

    return NextResponse.json({
      success: true,
      data: requests,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Admin pilot GET error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch pilot requests.",
      },
      { status: 500 }
    );
  }
}