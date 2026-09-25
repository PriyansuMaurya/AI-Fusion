import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Fusion",
  description:
    "A website where essential tools, prompts, and datasets are thoughtfully curated and combined in one place for your convenience.",
  metadataBase: new URL("https://aifusion.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "AI-Fusion - Resources For AI",
    title: "AI-Fusion",
    description:
      "A curated collection of useful AI tools, prompts, and datasets for curious builders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Fusion",
    description:
      "A curated collection of useful AI tools, prompts, and datasets for curious builders.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-[--light-bg] text-[--ink] dark:bg-[--dark-bg]`}
      >
        <div className="flex-1 md:mx-10">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

