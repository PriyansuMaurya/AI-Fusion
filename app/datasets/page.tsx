"use client";
import { useState } from "react";
import Card from "@/components/Card";
import { Data } from "@/types";
import datasets from "../../database/datasets.json";
import Modal from "@/components/Modal";

export default function Datasets() {
  //Modal
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState<Data>({});

  // Sort datasets by title in alphabetical order
  const sortedDatasets = [...datasets].sort((a: Data, b: Data) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="flex">
      <main className="mt-8 flex bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-row justify-center flex-wrap md:m-12">
        {sortedDatasets.map((dataset: Data, index: number) => (
          <Card
            key={index}
            id={index}
            datasets={true}
            data={dataset}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />
        ))}
      </main>
      {modalActive && (
        <Modal
          data={modalData}
          datasets={true}
          setModalActive={setModalActive}
        />
      )}
    </div>
  );
}
