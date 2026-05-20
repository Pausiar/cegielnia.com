import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.SITE_URL ?? "https://cegielnia.com";

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ceramika Sośnica — cegielnia od 1925 roku",
    template: "%s | Ceramika Sośnica",
  },
  description:
    "Cegielnia Sośnica — producent cegły pełnej, plakietek licowych ciętych oraz mączki ceglanej i glinianej. Skład opału, usługi transportowe i ładowarek kołowych. Tradycja od 1925 roku, własne złoża gliny, atestowane wyroby.",
  keywords: [
    "cegielnia", "Sośnica", "ceramika budowlana", "cegła pełna",
    "plakietki licowe cięte", "mączka ceglana", "mączka gliniana",
    "skład opału", "ładowarki kołowe", "Kąty Wrocławskie",
  ],
  authors: [{ name: "Ceramika Sośnica Sp. z o.o." }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Ceramika Sośnica",
    title: "Ceramika Sośnica — cegielnia od 1925 roku",
    description:
      "Producent ceramiki budowlanej najwyższej jakości. Sośnica 24, Kąty Wrocławskie.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0d0a",
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
