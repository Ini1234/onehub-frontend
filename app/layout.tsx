import type { Metadata } from "next";
import { Suspense } from "react";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NavWrapper } from "./components/NavWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: "400",
});

const playfairDisplayItalic = Playfair_Display({
  variable: "--font-playfair-display-italic",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "One Hub Ottawa | Connect. Discover. Grow.",
  description: "The premier directory for Ottawa businesses. Connect with local entrepreneurs, discover new services, and grow your business network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} ${playfairDisplayItalic.variable} antialiased min-h-screen bg-[#f6f4f0] text-black font-sans`}
      >
        <Suspense fallback={null}>
          <NavWrapper />
        </Suspense>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
