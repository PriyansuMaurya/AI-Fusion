"use client"
import { useEffect } from "react";
import { useThemeContext } from "../context/store";
import Card from "@/components/Card";
import { theme, Data } from "@/types";
import datasets from '../../database/datasets.json'

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
    <main className="flex min-h-screen bg-white dark:bg-[--dark-bg] dark:text-white flex-row justify-center flex-wrap px-36 py-4">
      {

        datasets.map((dataset: Data, index: number) => (
          <Card id={index} datasets={true} data={dataset} />
        ))

      }
    </main>

  )
}