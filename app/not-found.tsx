"use client";
import { theme } from "@/types";
import { useThemeContext } from "./context/store";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  // Dark Mode
  const { theme }: theme = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="flex bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-row justify-center flex-wrap md:m-12 m-5">
      <div>
        <h1 className="text-[2rem]">Sorry, we can’t find that page</h1>
        <p className="text-2xl mt-7">
          Ahoy, it seems you've ventured into uncharted territory
        </p>
        <p className="text-2xl mt-7">Feel free to navigate back to the </p>
        <Link className="text-2xl underline" href="/">
          Homepage
        </Link>
      </div>
      <div className="relative top-10"> 
        <Image
          src="/page404.png"
          alt="404 page image"
          width={600}
          height={500}
        />
      </div>
    </div>
  );
}
