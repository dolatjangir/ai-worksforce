// src/auth.ts

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import bcrypt from "bcryptjs";

import { authConfig } from "@/auth.config";
import { prisma } from "../lib/prisma";


const providers = [
  Credentials({
    name: "Credentials",

    credentials: {
      email: {
        label: "Email",
        type: "email",
      },

      password: {
        label: "Password",
        type: "password",
      },
    },

    async authorize(credentials) {
      const email = String(credentials?.email ?? "")
        .trim()
        .toLowerCase();

      const password = String(credentials?.password ?? "");

      if (!email || !password) {
        return null;
      }

      const admin = await prisma.adminUser.findUnique({
        where: {
          email,
        },
      });

      if (!admin) {
        return null;
      }

      if (!admin.isActive) {
        return null;
      }

      if (admin.role !== "ADMIN") {
        return null;
      }

      if (!admin.passwordHash) {
        return null;
      }

      const passwordMatches = await bcrypt.compare(
        password,
        admin.passwordHash,
      );

      if (!passwordMatches) {
        return null;
      }

      await prisma.adminUser.update({
        where: {
          id: admin.id,
        },

        data: {
          lastLoginAt: new Date(),
        },
      });

      return {
        id: String(admin.id),
        name: admin.fullName,
        email: admin.email,
        role: "ADMIN",
      };
    },
  }),

  ...(process.env.AUTH_GOOGLE_ID &&
  process.env.AUTH_GOOGLE_SECRET
    ? [Google]
    : []),

  ...(process.env.AUTH_MICROSOFT_ENTRA_ID_ID &&
  process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET &&
  process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER
    ? [
        MicrosoftEntraID({
          clientId:
            process.env.AUTH_MICROSOFT_ENTRA_ID_ID,

          clientSecret:
            process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,

          issuer:
            process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
        }),
      ]
    : []),
];

export const {
  handlers,
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...authConfig,

  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60,
  },

  providers,

 callbacks: {
  async signIn({ user }) {
    const email = user.email
      ?.trim()
      .toLowerCase();

    if (!email) {
      return false;
    }

    const admin =
      await prisma.adminUser.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
          role: true,
          isActive: true,
        },
      });

    if (!admin) {
      return false;
    }

    if (!admin.isActive) {
      return false;
    }

    if (admin.role !== "ADMIN") {
      return false;
    }

    return true;
  },

async jwt({ token, user }) {
  if (user?.email) {
    const admin = await prisma.adminUser.findUnique({
      where: {
        email: user.email.trim().toLowerCase(),
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true,
      },
    });

    if (
      admin &&
      admin.isActive &&
      admin.role === "ADMIN"
    ) {
      token.adminUserId = admin.id;
      token.role = "ADMIN";
      token.name = admin.fullName;
      token.email = admin.email;
    }
  }

  return token;
},

 async session({ session, token }) {
  if (session.user && token.adminUserId) {
    session.user.id = token.adminUserId;
    session.user.role = "ADMIN";
  }

  return session;
},
},
});