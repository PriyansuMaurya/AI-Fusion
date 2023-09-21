"use client";
import { useState, useEffect } from "react";
import { useThemeContext } from "../context/store";
import Card from "@/components/Card";
import { theme, Data } from "@/types";
import prompts from "../../database/prompts.json";
import Modal from "@/components/Modal";

export default function Prompts() {
  // Modal State Data
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState<Data>({});

  // Dark Mode
  const { theme }: theme = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Sort prompts by title in alphabetical order
  const sortedPrompts = [...prompts].sort((a: Data, b: Data) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="flex">
      <main className="mt-8 flex bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-row justify-center flex-wrap md:m-12">
        {sortedPrompts.map((prompt: Data, index: number) => (
          <Card
            key={index}
            id={index}
            prompts={true}
            data={prompt}
            setModalData={setModalData}
            setModalActive={setModalActive}
          />
        ))}
      </main>
      {modalActive && (
        <Modal
          data={modalData}
          prompts={true}
          setModalActive={setModalActive}
        />
      )}
    </div>
  );
}
