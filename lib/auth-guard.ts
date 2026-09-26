// src/lib/auth-guard.ts

import { auth } from "@/auth";
import { prisma } from "./prisma";


export async function getCurrentAdmin() {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const adminId = Number(session.user.id);

  if (!Number.isInteger(adminId)) {
    return null;
  }

  const admin = await prisma.adminUser.findFirst({
    where: {
      id: adminId,
      role: "ADMIN",
      isActive: true,
    },

    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      isActive: true,
      lastLoginAt: true,
    },
  });

  return admin;
}