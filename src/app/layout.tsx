import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

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

const siteUrl = "https://soma-keesari.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Soma Shekar Keesari — Backend Engineer · Full-Stack & AI",
    template: "%s — Soma Shekar Keesari",
  },
  description:
    "Backend engineer with 2+ years building Spring Boot microservices, now shipping full-stack and AI products. MSc Computer Science (AWS-accredited) at the University of East London. Based in London, open to work.",
  keywords: [
    "Backend Engineer",
    "Full-Stack Engineer",
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "AWS",
    "AI",
    "Anthropic Claude",
    "London",
  ],
  authors: [{ name: "Soma Shekar Keesari" }],
  creator: "Soma Shekar Keesari",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Soma Shekar Keesari — Backend Engineer · Full-Stack & AI",
    description:
      "2+ years building Spring Boot microservices, now shipping full-stack and AI products. MSc CS (AWS-accredited), University of East London. London, UK.",
    url: siteUrl,
    siteName: "Soma Shekar Keesari",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soma Shekar Keesari — Backend Engineer · Full-Stack & AI",
    description:
      "2+ years building Spring Boot microservices, now shipping full-stack and AI products. London, UK.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: hasJsScript }} />
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
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
