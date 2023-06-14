"use client"
import { useEffect } from "react";
import { useThemeContext } from "../context/store";
import Card from "@/components/Card";

export default function Datasets() {
  const {theme} = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <main className="flex min-h-screen bg-white dark:bg-[--dark-bg] dark:text-white flex-row justify-center flex-wrap px-36 py-4">
      <Card datasets={true}/> 
      <Card datasets={true}/> 
    </main>
    
  )
}