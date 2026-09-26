// src/auth.config.ts

import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const pathname = request.nextUrl.pathname;

      // Protect the complete admin dashboard
      if (pathname.startsWith("/admin-dashboard")) {
        return isLoggedIn;
      }

      // Prevent authenticated users from opening login again
      if (pathname === "/login" && isLoggedIn) {
        return Response.redirect(
          new URL("/admin-dashboard", request.nextUrl),
        );
      }

      return true;
    },
  },

  providers: [],
} satisfies NextAuthConfig;