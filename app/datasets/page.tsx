"use client";
import { useState, useEffect } from "react";
import { useThemeContext } from "../context/store";
import Card from "@/components/Card";
import { theme, Data } from "@/types";
import datasets from "../../database/datasets.json";
import Modal from "@/components/Modal";

export default function Datasets() {
  //Modal
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

  return (
    <div className="flex">
      <main className="mt-8 flex bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-row justify-center flex-wrap md:m-12">
        {datasets.map((dataset: Data, index: number) => (
          <Card id={index} datasets={true} data={dataset} setModalActive={setModalActive} setModalData={setModalData} />
        ))}
      </main>
      {modalActive && <Modal data={modalData} datasets={true} setModalActive={setModalActive} />}
    </div>
  );
}
