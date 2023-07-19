"use client";
import { useState, useEffect } from "react";
import { useThemeContext } from "../context/store";
import Card from "@/components/Card";
import { theme, Data } from "@/types";
import tools from "../../database/tools.json";
import Modal from "@/components/Modal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools"
};

interface Tool {
  // Define the interface for your tool object
  id: number;
  // Add other properties based on your data structure
  // For example: title, description, url, tags, etc.
}

export default function Tools() {
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState<Data>({});

  // Dark mode
  const { theme }: theme = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex">
      <main className="mt-8 flex bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-row justify-center flex-wrap md:m-12">
        {tools.map((tool: Data, index: number) => (
          <Card id={index} tools={true} data={tool} setModalActive={setModalActive} setModalData={setModalData} />
        ))}
      </main>
      {modalActive && <Modal data={modalData} tools={true} setModalActive={setModalActive} />}
    </div>
  );
}
