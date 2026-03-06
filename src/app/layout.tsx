import type { Metadata } from "next";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ricardo-demarco-moretti.com";
const ogImage = `${siteUrl}/images/og-image.png`;

export const metadata: Metadata = {
  title: {
    default: "Ricardo Moretti | Software Engineer & Entrepreneur",
    template: "%s | Ricardo Moretti",
  },
  description:
    "Portfolio de Ricardo De Marco Moretti — Engenheiro de Software, fundador da CodeCraftGenZ e criador do Ecossistema Craft. Especialista em React, Next.js, TypeScript, C#, Tauri e Rust. Desenvolvimento web e desktop de alta performance.",
  keywords: [
    "Ricardo Moretti",
    "Ricardo De Marco Moretti",
    "Software Engineer",
    "Engenheiro de Software",
    "Full Stack Developer",
    "Desenvolvedor Full Stack",
    "CodeCraftGenZ",
    "Ecossistema Craft",
    "React",
    "Next.js",
    "TypeScript",
    "C#",
    "Tauri",
    "Rust",
    "Node.js",
    "Portfolio",
    "Desenvolvedor Web",
    "Desenvolvedor Desktop",
    "Ribeirão Preto",
  ],
  authors: [{ name: "Ricardo De Marco Moretti", url: siteUrl }],
  creator: "Ricardo De Marco Moretti",
  publisher: "Ricardo De Marco Moretti",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ricardo Moretti | Software Engineer & Entrepreneur",
    description:
      "Engenheiro de Software, fundador da CodeCraftGenZ e criador do Ecossistema Craft. Especialista em React, Next.js, TypeScript, C# e Tauri.",
    url: siteUrl,
    siteName: "Ricardo Moretti — Portfolio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Ricardo Moretti — Software Engineer & Entrepreneur",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Moretti | Software Engineer & Entrepreneur",
    description:
      "Engenheiro de Software, fundador da CodeCraftGenZ e criador do Ecossistema Craft.",
    images: [ogImage],
    creator: "@ricardomoretti",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3oGXPDnsCZOxkDpKOFNEZXVcYxhRGB3D3GQvOkvbphw",
  },
  category: "technology",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Ricardo Moretti",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${sourceSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
