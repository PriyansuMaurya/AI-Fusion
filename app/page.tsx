"use client";
import { useEffect } from "react";
import { useThemeContext } from "./context/store";
import Image from "next/image";
import PoweredByVercel from "../public/powered-by-vercel.svg";

export default function Home() {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="m-3 font-sm flex flex-col bg-[--light-bg] dark:bg-[--dark-bg] text-[--dark-bg] dark:text-[--light-bg] xl:space-y-24">
      <div className="m-5 flex flex-col items-center space-y-12 md:flex-row md:justify-around md:my-12 md:mx-7 xl:space-x-8">
        <div className="w-96  ">
          <p className="m-5 text-2xl md:text-3xl md:max-mr-24 md:max-m-3">
            Your{" "}
            <span className="px-1 bg-[color:var(--primary-color)] text-[--dark-bg]">
              ultimate destination
            </span>{" "}
            for streamlined access to a curated collection of powerful AI tools,
            prompts and datasets.
          </p>
        </div>
        <div className="h-72 w-72 md:h-96 md:w-auto lg:max-w-full">
          <Image src={"/undraw.png"} width={500} height={500} alt={""} />
        </div>
      </div>
      <div className="mt-3 md:mt-8  flex flex-col items-center space-y-10 lg:space-y-12">
        <div className="mt-8 md:mt-10">
          <p className="font-bold text-4xl text-center md:text-6xl" >Proudly Open-Source</p>
        </div>
        <div className="mx-auto w-52 md:w-52 lg:w-64">
          <Image src={PoweredByVercel} alt={"vercel"} width={380} height={480} />
        </div>

      </div>
    </main>
  );
}
