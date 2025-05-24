import type { Metadata } from "next";
import "./globals.scss";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "NEXGEN Auto Detail | Home",
  description:
    "A Warren, Howland, Youngstown, Canfield, Trumbull County & Surrounding Area Local.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>NEXGEN Auto Detail | Home</title>
        <meta
          name="description"
          content="Trumbull County & Surrounding Area's Auto Detailing & Car Care local service."
        />
        <meta property="og:title" content="NEXGEN Auto Detail | Home" />
        <meta
          property="og:description"
          content="Trumbull County & Surrounding Area's Auto Detailing & Car Care local service."
        />
        <meta property="og:url" content="https://www.nexgenautodetail.com" />
        <meta property="og:site_name" content="NEXGEN Auto Detail" />
        <meta
          property="og:image"
          content="https://www.nexgenautodetail.com/logo.png"
        />
        <meta property="og:image:alt" content="NEXGEN Auto Detail Logo" />
        <meta property="og:locale" content="en_US" />

        {/* Unique locales only */}
        {[
          "en_GB",
          "fr_FR",
          "es_ES",
          "de_DE",
          "it_IT",
          "pt_PT",
          "nl_NL",
          "fr_BE",
          "es_MX",
          "de_AT",
          "it_CH",
          "pt_BR",
          "nl_BE",
          "fr_CH",
          "es_CL",
          "de_CH",
          "it_AT",
        ].map((locale) => (
          <meta key={locale} property="og:locale:alternate" content={locale} />
        ))}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
