"use client"
import { useEffect } from "react";
import { useThemeContext } from "../context/store";
import Card from "@/components/Card";
import { theme } from "@/types";

export default function Datasets() {
  const { theme }: theme = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <main className="m-8 flex bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-row justify-center flex-wrap md:m-12">
      <Card datasets={true} tools={false} prompts={false} />
      <Card datasets={true} tools={false} prompts={false} />
    </main>

  )
}