import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { AmbientParticles } from "@/components/site/ambient-particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://shekar-portfolio-eight.vercel.app";
const siteTitle = "Soma Shekar Keesari — Full-Stack & AI Engineer";
const siteDescription =
  "AWS Certified AI & Cloud Practitioner with 2+ years building production Python/FastAPI and React systems, now shipping end-to-end LLM products (Jobhuntz, RideX). MSc Computer Science (AWS-accredited), University of East London. London, UK — immediately available.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Soma Shekar Keesari",
  },
  description: siteDescription,
  keywords: [
    "Full-Stack Engineer",
    "AI Engineer",
    "Python",
    "FastAPI",
    "React",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "Supabase",
    "AWS Certified",
    "LLM",
    "RAG",
    "Anthropic Claude",
    "London",
  ],
  authors: [{ name: "Soma Shekar Keesari" }],
  creator: "Soma Shekar Keesari",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description:
      "2+ years on production Python/FastAPI + React systems. Now shipping end-to-end AI products. AWS Certified ×2. MSc CS, University of East London. London, UK.",
    url: siteUrl,
    siteName: "Soma Shekar Keesari",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "2+ years on production Python/FastAPI + React systems. Now shipping end-to-end AI products. London, UK.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
};

// Inline script — runs before paint so [data-reveal] elements start hidden
// only when JS is available. Without JS, .has-js is never added and all
// content stays visible (no-JS resilience).
const hasJsScript = `try{document.documentElement.classList.add('has-js')}catch(e){}`;

// No-JS resilience: Framer Motion outputs inline `opacity:0` during SSR for
// elements with initial="hidden". Without JS these never animate to 1, so the
// page would be blank. This noscript rule forces them visible. With JS,
// noscript doesn't render and FM controls the animation normally.
const noJsStyle = `[style*="opacity:0"]{opacity:1!important;transform:none!important}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: hasJsScript }} />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noJsStyle }} />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} grain antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ambient particle field — fixed, z-[-10], pointer-events-none.
              Pure decoration; no-JS safe (renders nothing without JS). */}
          <AmbientParticles />
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
