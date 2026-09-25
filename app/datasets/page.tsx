"use client";
import { useState } from "react";
import Card from "@/components/Card";
import { Data } from "@/types";
import datasets from "../../database/datasets.json";
import Modal from "@/components/Modal";

export default function Datasets() {
  //Modal
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState<Data | null>(null);

  // Sort datasets by title in alphabetical order
  const sortedDatasets = [...datasets].sort((a: Data, b: Data) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="flex">
      <main className="mx-auto mt-8 flex w-full max-w-7xl flex-row flex-wrap justify-center bg-[--light-bg] px-2 pb-12 dark:bg-[--dark-bg] dark:text-[--light-bg] md:mt-12 md:px-8">
        <div className="mb-5 w-full px-3">
          <p className="eyebrow">Resource library</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-.04em]">Datasets</h1>
          <p className="mt-2 text-sm text-[--muted]">{sortedDatasets.length} places to find useful training and research data.</p>
        </div>
        {sortedDatasets.map((dataset: Data) => (
          <Card
            key={dataset.title}
            id={dataset.title.length}
            datasets={true}
            data={dataset}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />
        ))}
      </main>
      {modalActive && modalData && (
        <Modal
          data={modalData}
          datasets={true}
          setModalActive={setModalActive}
        />
      )}
    </div>
  );
}
