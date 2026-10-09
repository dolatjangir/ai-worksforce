import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/providers/AOSProvider";

import LayoutWrapper from "@/components/layoutwrapper/layoutwrapper";
import SchemaMarkup from "@/components/seo/schema-markup";

export const metadata: Metadata = {
  title: "AI WorksForce",
  description: "AI-powered worksForce platform",

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://aiworksforce.com"
  ),

  verification: {
    google: "2yhg8GCNrG11l1huT8ZaPrChumFmRGHwTK43YpEjCrg",
  },

  manifest: "/manifest.json",
};

export function generateViewport() {
  return {
    themeColor: "#1E88E5",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
    
      <AOSProvider />

      <body className="text-gray-900 antialiased hide-scrollbar">
         <SchemaMarkup />
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </div>
      </body>
    </html>
  );
}