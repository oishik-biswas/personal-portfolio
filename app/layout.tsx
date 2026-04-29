import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CursorTrail from "@/components/CursorTrail";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
  title: "Oishik's Portfolio",
  description: "Personal portfolio of Oishik Biswas",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full text-gray-200 font-sans">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <CursorTrail />
      </body>
    </html>
  );
}
