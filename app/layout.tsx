import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "MATTER VISION MECHANICS | Advanced Research & Development",
    template: "%s | MATTER VISION MECHANICS",
  },
  description:
    "Pioneering research company specializing in Robotics, AI, Rural Engineering, Sustainable Ceramics, Bio Remediation, Agrotech, Consumer Products, Healthcare Technology, Assistive Tech, and Industrial Design",
  keywords: [
    "research",
    "engineering",
    "robotics",
    "AI",
    "sustainable ceramics",
    "rural engineering",
    "matter vision mechanics",
    "matter",
    "vision",
    "mechanics"
  ],
  openGraph: {
    title: "MATTER VISION MECHANICS",
    description:
      "Explore cutting-edge research in engineering, AI, and sustainable technologies.",
    url: "https://matter.vision",
    siteName: "MATTER VISION MECHANICS",
    // images: [
    //   {
    //     url: "/og-image.png", // put image in public folder
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
