import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

const ALLOWED_STATUSES = ["NEW", "READ", "REPLIED"] as const;

type Status = (typeof ALLOWED_STATUSES)[number];

function normalizeStatus(status: unknown): Status | null {
  if (typeof status !== "string") {
    return null;
  }

  const normalized = status.trim().toUpperCase();

  return ALLOWED_STATUSES.includes(
    normalized as Status
  )
    ? (normalized as Status)
    : null;
}

/**
 * PATCH
 * Update contact status
 *
 * PATCH /api/admin/contact-us/:id
 */
export async function PATCH(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await context.params;

    const contactId = Number(id);

    if (!Number.isInteger(contactId) || contactId <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid contact ID.",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const status = normalizeStatus(body?.status);

    if (!status) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid status. Allowed values are NEW, READ, and REPLIED.",
        },
        { status: 400 }
      );
    }

    const existingContact =
      await prisma.contactMessage.findUnique({
        where: {
          id: contactId,
        },
      });

    if (!existingContact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact message not found.",
        },
        { status: 404 }
      );
    }

    const updatedContact =
      await prisma.contactMessage.update({
        where: {
          id: contactId,
        },
        data: {
          status,
        },
      });

    return NextResponse.json(
      {
        success: true,
        message: "Contact status updated successfully.",
        data: updatedContact,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Admin Contact PATCH API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to update contact status.",
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE
 * Delete a contact message
 *
 * DELETE /api/admin/contact-us/:id
 */
export async function DELETE(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await context.params;

    const contactId = Number(id);

    if (!Number.isInteger(contactId) || contactId <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid contact ID.",
        },
        { status: 400 }
      );
    }

    const existingContact =
      await prisma.contactMessage.findUnique({
        where: {
          id: contactId,
        },
      });

    if (!existingContact) {
      return NextResponse.json(
        {
          success: false,
          message: "Contact message not found.",
        },
        { status: 404 }
      );
    }

    await prisma.contactMessage.delete({
      where: {
        id: contactId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact message deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Admin Contact DELETE API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to delete contact message.",
      },
      { status: 500 }
    );
  }
}