import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundObjects from "@/components/BackgroundObjects";
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

const themeScript = `
  try {
    var key = "oishik-portfolio-theme";
    var saved = window.localStorage.getItem(key);
    var theme = saved === "light" || saved === "dark"
      ? saved
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    document.documentElement.dataset.theme = theme;
  } catch {}
`;

export const metadata: Metadata = {
  title: "Oishik Biswas | Software Engineer",
  description:
    "Clean, fast portfolio for Oishik Biswas, software engineer and full-stack builder.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <BackgroundObjects />
        <div className="page-shell min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
