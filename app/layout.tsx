import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WAVE — AI-Powered Business Intelligence",
    template: "%s | WAVE",
  },
  description: "Discover rising trends, uncover overlooked opportunities, and turn promising ideas into businesses that stand out. AI-Powered Business Intelligence for Indonesia.",
  keywords: ["business intelligence", "trend analysis", "opportunity discovery", "Indonesia", "startup", "UMKM", "business ideas"],
  openGraph: {
    title: "WAVE — Find Your Next Business Opportunity",
    description: "Ride the Wave. Build at the Right Time.",
    type: "website",
    siteName: "WAVE",
  },
  twitter: {
    card: "summary_large_image",
    title: "WAVE — AI-Powered Business Intelligence",
    description: "Ride the Wave. Build at the Right Time.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-ivory text-sage antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
