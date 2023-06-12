"use client"
import { useEffect } from "react";
import { useThemeContext } from "./context/store"

export default function Home() {
  const {theme} = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <main className="flex min-h-screen bg-white dark:bg-[--dark-bg] dark:text-white flex-col items-center justify-between ">
    </main>
    
  )
}
