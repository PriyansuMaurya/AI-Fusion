"use client";
import { useEffect } from "react";
import { useThemeContext } from "./context/store";
import Image from "next/image";

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
    <main className="m-3 font-sm flex flex-col bg-[--dark-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] px-32">
      <div className="m-5 flex flex-col justify-center items-center space-y-12 md:flex-row md:justify-between md:m-0 ">
        <div className="w-96">
          <p className="m-5 text-2xl md:text-3xl md:m-5">
            Your{" "}
            <span className="px-1 bg-[color:var(--primary-color)] text-[--dark-bg]">
              ultimate destination
            </span>{" "}
            for streamlined access to a curated collection of powerful AI tools,
            prompts and datasets.
          </p>
        </div>
        <div className="h-72 w-72 md:h-full md:w-auto">
          <Image src={"/undraw.png"} width={400} height={400} alt={""} />
        </div>
      </div>
      <div className="mt-3 md:mt-8">
        <div className="flex mt-10 justify-center items-center">
          <p className="font-bold text-5xl md:text-6xl" >Proudly Open-Source</p>
        </div>
        <div className="flex mt-10 justify-center items-center">
          <Image src={"/vercel.png"} alt={"vercel"} width={180} height={280}/>
        </div>

      </div>
    </main>
  );
}
