import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import bcrypt from "bcryptjs";

import { authConfig } from "@/auth.config";
import { loginSchema } from "../lib/validations/auth";
import { prisma } from "../lib/prisma";



export const {
  auth,
  handlers,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,

  /*
   * Credentials authentication works with JWT sessions.
   */
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours
  },

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "admin@aiworksforce.com",
        },

        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },

      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);

        if (!parsed.success) {
          return null;
        }

        const { email, password } = parsed.data;

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
          role: admin.role,
        };
      },
    }),

    /*
     * Google OAuth
     *
     * Only an email already provisioned as an active ADMIN
     * in AdminUser can authenticate.
     */
    Google,

    /*
     * Microsoft Entra ID OAuth
     */
    MicrosoftEntraID,
  ],

  callbacks: {
    /*
     * Authorization for OAuth users.
     *
     * An arbitrary Google/Microsoft account is NOT enough.
     * The email must already exist in AdminUser.
     */
    async signIn({ user, account, profile }) {
      const email = user.email?.trim().toLowerCase();

      if (!email) {
        return false;
      }

      const admin = await prisma.adminUser.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
          fullName: true,
          email: true,
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

      /*
       * Google provides email_verified.
       * Reject an unverified Google identity.
       */
      if (account?.provider === "google") {
        const googleProfile = profile as
          | { email_verified?: boolean }
          | undefined;

        if (googleProfile?.email_verified !== true) {
          return false;
        }
      }

      await prisma.adminUser.update({
        where: {
          id: admin.id,
        },
        data: {
          lastLoginAt: new Date(),
        },
      });

      return true;
    },

    /*
     * Put our database admin ID and role into the JWT.
     */
    async jwt({ token, user }) {
      if (user?.email) {
        const email = user.email.trim().toLowerCase();

        const admin = await prisma.adminUser.findUnique({
          where: {
            email,
          },
          select: {
            id: true,
            fullName: true,
            email: true,
            role: true,
            isActive: true,
          },
        });

        if (admin && admin.isActive && admin.role === "ADMIN") {
          token.adminUserId = String(admin.id);
          token.role = admin.role;
          token.name = admin.fullName;
          token.email = admin.email;
        }
      }

      return token;
    },

    /*
     * Expose only the information the frontend needs.
     */
    async session({ session, token }) {
      if (session.user && token.adminUserId) {
        session.user.id = String(token.adminUserId);

        session.user.role =
          token.role === "ADMIN"
            ? "ADMIN"
            : "USER";
      }

      return session;
    },
  },
});