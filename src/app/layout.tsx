import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ClientBody } from "./ClientBody";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facilis.AI | Manufacturing Operations Reimagined",
  description: "Transform your industrial operations with Agentic AI that understands your processes, optimizes in real-time, and delivers measurable ROI in days, not months.",
  keywords: "AI, Manufacturing, Industrial AI, Process Optimization, Predictive Maintenance, Digital Transformation",
  authors: [{ name: "Facilis.AI" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Facilis.AI | Manufacturing Operations Reimagined",
    description: "Transform your industrial operations with Agentic AI that understands your processes, optimizes in real-time, and delivers measurable ROI.",
    type: "website",
    url: "https://facilis.ai",
    siteName: "Facilis.AI",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <ClientBody className={inter.className}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </ClientBody>
    </html>
  );
}
