"use client"
import { useEffect } from "react";
import { useThemeContext } from "../context/store";
import Card from "@/components/Card";
import { theme } from "@/types";

export default function Tools() {
  const {theme}: theme = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <main className="flex bg-white dark:bg-[--dark-bg] dark:text-white flex-row flex-wrap justify-center px-32 p-4">
      <Card tools={true} prompts={false} datasets={false}/>
      <Card tools={true} prompts={false} datasets={false}/>
      <Card tools={true} prompts={false} datasets={false}/>
      <Card tools={true} prompts={false} datasets={false}/>
      <Card tools={true} prompts={false} datasets={false}/>
      <Card tools={true} prompts={false} datasets={false}/>
    </main>
  )
}
