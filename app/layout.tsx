import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeContextProvider } from './context/store'


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
      <body className={inter.className}>
        <ThemeContextProvider>
          <Navbar />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
