import type { Metadata } from "next";
import "./globals.css";
import "react-phone-number-input/style.css";
import AOSProvider from "@/providers/AOSProvider";

import LayoutWrapper from "@/components/layoutwrapper/layoutwrapper";
import SchemaMarkup from "@/components/seo/schema-markup";
import Script from "next/script";

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
 
          <meta name="msvalidate.01" content="B21B7B0B45CC9CA250DA05ECC90212D4" />
          <meta name="yandex-verification" content="a287c4619c869cec" />
      
      </head>
    
      <AOSProvider />

      <body className="text-gray-900 antialiased hide-scrollbar">
         <SchemaMarkup />
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </div>

          <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BD31YVM6GF"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BD31YVM6GF');
          `}
        </Script>
      </body>
    </html>
  );
}