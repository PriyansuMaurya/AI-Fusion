"use client";
import { useEffect } from "react";
import { useThemeContext } from "../context/store";
import Card from "@/components/Card";
import { theme, Data } from "@/types";
import tools from '../../database/tools.json'


interface Tool {
  // Define the interface for your tool object
  id: number;
  // Add other properties based on your data structure
  // For example: title, description, url, tags, etc.
}

export default function Tools() {
  const { theme }: theme = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="flex bg-white dark:bg-[--dark-bg] dark:text-white flex-row flex-wrap justify-center px-32 p-4">

      {tools.map((tool: Data, index: number) => (
        <Card id={index} tools={true} data={tool} />
      ))}

    </main>
  );
}
