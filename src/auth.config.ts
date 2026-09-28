// src/auth.config.ts

import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request }) {
      const pathname = request.nextUrl.pathname;

      // Protect every admin-dashboard route.
      if (pathname.startsWith("/admin-dashboard")) {
        return Boolean(auth?.user);
      }

      // Never redirect /login from proxy.
      return true;
    },
  },

  providers: [],
};