"use client"
import { useEffect } from "react";
import { useThemeContext } from "../context/store";
import Card from "@/components/Card";

export default function Tools() {
  const {theme} = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <main className="flex bg-white dark:bg-[--dark-bg] dark:text-white flex-row flex-wrap justify-between px-36">
      <Card tools={true}/>
      <Card tools={true}/>
      <Card tools={true}/>
      <Card tools={true}/>
      <Card tools={true}/>
    </main>
    
  )
}
