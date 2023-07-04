"use client";
import { theme } from "@/types";
import { useThemeContext } from "./context/store";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import pageNotFound from "../public/page404.png";
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
    <div className="flex flex-col items-center xl:flex-row xl:items-start  justify-around bg-[--light-bg] dark:bg-[--dark-bg] text-[--dark-bg] dark:text-[--light-bg] md:ms-16 md:my-16 mt-10 m-5">
      <div>
        <h1 className="md:w-[42rem] font-bold text-3xl md:text-5xl">Sorry, we can't find that page</h1>
        <div className="md:w-[30rem]">
          <p className="text-xl md:text-2xl mt-7">
            Ahoy, it seems you've ventured into uncharted territory.
          </p>
          <p className="text-xl md:text-2xl mt-7">Feel free to navigate back to the <Link className="underline hover:decoration-[--primary-color] decoration-0 underline-offset-2" href="/">
            Homepage
          </Link> or click on any of the tabs above.</p>
        </div>

      </div>
      <div className="mt-24">
        <Image
          src={pageNotFound}
          alt="404 page image"
          width={600}
          height={300}
        />
      </div>
    </div>
  );
}
