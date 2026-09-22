import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";


const ALLOWED_SERVICES = new Set([
  "automation",
  "agents",
  "customer-operations",
  "sales",
  "marketing",
  "data",
  "other",
]);

function clean(value: unknown): string {
  return String(value ?? "").trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = clean(body.fullName);
    const email = clean(body.email).toLowerCase();
    const company = clean(body.company);
    const phone = clean(body.phone);
    const service = clean(body.service);
    const message = clean(body.message);

    // -----------------------------
    // Required field validation
    // -----------------------------

    if (
      !fullName ||
      !email ||
      !company ||
      !service ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Length validation
    // -----------------------------

    if (fullName.length > 120) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name is too long.",
        },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is too long.",
        },
        { status: 400 }
      );
    }

    if (company.length > 160) {
      return NextResponse.json(
        {
          success: false,
          message: "Company name is too long.",
        },
        { status: 400 }
      );
    }

    if (phone.length > 30) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is too long.",
        },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        {
          success: false,
          message: "Message cannot exceed 500 characters.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Email validation
    // -----------------------------

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Service validation
    // -----------------------------

    if (!ALLOWED_SERVICES.has(service)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid service selected.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Save to MySQL
    // -----------------------------

    const contact = await prisma.contactMessage.create({
      data: {
        fullName,
        email,
        company,
        phone: phone || null,
        service,
        message,
        status: "NEW",
      },
    });

    console.log(
      `New contact message saved: ${contact.id}`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
        id: contact.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your message. Please try again.",
      },
      { status: 500 }
    );
  }
}