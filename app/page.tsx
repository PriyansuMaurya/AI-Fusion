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
    <main className="flex bg-white h-[33rem] dark:bg-[--dark-bg] dark:text-white flex-col px-32">
      <div className="mt-16 flex justify-between items-center w-full h-80">
        <div className="w-96">
          <p className="text-3xl">
            Your{" "}
            <span className="bg-[color:var(--primary-color)] text-black">
              ultimate destination
            </span>{" "}
            for streamlined access to a curated collection of powerful AI tools,
            prompts and datasets.
          </p>
        </div>
        <Image src={"/undraw.png"} width={400} height={400} alt={""}></Image>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <p className="text-6xl" >Proudly Open Source</p>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <Image src={"/vercel.png"} alt={"vercel"} width={180} height={280} ></Image>
      </div>
      
    </main>
  );
}
