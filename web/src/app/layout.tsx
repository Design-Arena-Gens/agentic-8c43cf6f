import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rowan Carter · Frontend Engineer",
  description:
    "Portfolio for Rowan Carter, a React and Angular-focused frontend engineer with 3 years of experience building design systems, dashboards, and accessible interfaces.",
  openGraph: {
    title: "Rowan Carter · Frontend Engineer",
    description:
      "React and Angular specialist crafting resilient product experiences, design systems, and accessible workflows.",
    url: "https://agentic-8c43cf6f.vercel.app",
    siteName: "Rowan Carter Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rowan Carter · Frontend Engineer",
    description:
      "Three years of React and Angular delivery excellence across design systems and data-rich products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050510] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
