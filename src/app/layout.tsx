import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Oswald } from "next/font/google";
import { Toaster } from "sonner";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { FloatingActions } from "@/components/floating-actions";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name}`,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "Gym in Muthanallur",
    "Gym Near Sarjapur Road",
    "Fitness Center",
    "Weight Loss Gym",
    "Best Gym Near Me"
  ]
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}