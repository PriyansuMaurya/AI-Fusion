import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeContextProvider } from "./context/store";
import NavigationLinks from "@/components/NavigationLinks";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI-Fusion",
  description: "AI-Prompt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "m-10 bg-[--dark-bg] h-screen md:mx-10"}>
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
