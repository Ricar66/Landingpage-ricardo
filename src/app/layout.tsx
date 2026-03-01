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

export const metadata: Metadata = {
  title: "Ricardo Moretti | Software Engineer & Entrepreneur",
  description:
    "Portfolio de Ricardo De Marco Moretti — Engenheiro de Software, fundador da CodeCraftGenZ e criador do Ecossistema Craft. Desenvolvimento web e desktop com React, Next.js, C#, Tauri e mais.",
  keywords: [
    "Ricardo Moretti",
    "Software Engineer",
    "CodeCraftGenZ",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Desenvolvedor Full Stack",
  ],
  openGraph: {
    title: "Ricardo Moretti | Software Engineer & Entrepreneur",
    description:
      "Engenheiro de Software, fundador da CodeCraftGenZ e criador do Ecossistema Craft.",
    type: "website",
    locale: "pt_BR",
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
