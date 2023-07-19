import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeContextProvider } from "./context/store";
import NavigationLinks from "@/components/NavigationLinks";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  template: "AI Fusion | %s",
  default: "AI Fusion",
  description:
    "A website where essential tools, prompts, and datasets are thoughtfully curated and combined in one place for your convenience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Open Graph meta data --> */}
        <meta property="og:url" content="https://aifusion.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AI-Fusion - Resources For AI" />
        <meta property="og:title" content="AI-Fusion" />
        <meta
          property="og:description"
          content="AI Fusion is your ultimate destination for streamlined access to a curated collection of powerful AI tools and prompts. With direct links to a variety of resources, our website eliminates the hassle and empowers you to effortlessly enhance your productivity."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://aifusion.vercel.app/ai_fusion_preview.png"
        />

        {/* twitter meta tags */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrianshuMaurya" />
        <meta name="twitter:creator" content="@PrianshuMaurya" />
        <meta property="twitter:domain" content="https://aifusion.vercel.app" />
        <meta property="twitter:url" content="https://aifusion.vercel.app" />
        <meta name="twitter:title" content="AI-Fusion" />
        <meta
          name="twitter:description"
          content="AI Fusion is your ultimate destination for streamlined access to a curated collection of powerful AI tools and prompts. With direct links to a variety of resources, our website eliminates the hassle and empowers you to effortlessly enhance your productivity."
        />
        <meta name="twitter:image" content="https://aifusion.vercel.app/ai_fusion_preview.png" />
        <meta data-rh="true" name="twitter:image:alt" content="AI-Fusion" />
      </head>
      <body
        className={
          inter.className +
          "m-10 bg-[--light-bg] dark:bg-[--dark-bg] min-h-screen space-y-auto md:mx-10"
        }
      >
        <ThemeContextProvider>
          <Navbar />
          <NavigationLinks />
          {children}
        </ThemeContextProvider>
        <Footer />
      </body>
    </html>
  );
}
