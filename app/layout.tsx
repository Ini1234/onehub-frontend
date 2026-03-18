import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#f6f4f0]/90 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <Link href="/" className="group flex items-baseline text-2xl tracking-tight text-black" aria-label="onehub home">
                <span className="logo-wordmark-one">one</span>
                <span className="logo-wordmark-hub">hub</span>
              </Link>
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105"
                >
                  Discover
                </Link>
                <Link
                  href="/add"
                  className="bg-[#540619] text-white hover:bg-[#6d0822] px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#540619]/25 hover:shadow-[#540619]/40 hover:scale-105"
                >
                  Add Business
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
