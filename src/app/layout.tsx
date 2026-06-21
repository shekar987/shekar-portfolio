import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aria Vance — Product Engineer & Founder",
  description:
    "Product-minded engineer turning zero-to-one ideas into resilient, scalable systems. I build many products — fast, and built to last.",
  keywords: [
    "Product Engineer",
    "Founder",
    "Full-Stack",
    "Systems Design",
    "AI Infrastructure",
    "Portfolio",
  ],
  authors: [{ name: "Aria Vance" }],
  openGraph: {
    title: "Aria Vance — Product Engineer & Founder",
    description:
      "I ship ambitious products — many of them, fast, and at scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aria Vance — Product Engineer & Founder",
    description:
      "I ship ambitious products — many of them, fast, and at scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
