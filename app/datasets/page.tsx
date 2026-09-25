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
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-20 pt-10 text-[--ink] sm:px-8 lg:px-12">
        <div className="border-b border-[--line] pb-8">
          <p className="eyebrow">Resource library</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
            <h1 className="text-5xl font-semibold tracking-[-.07em] sm:text-6xl">Datasets</h1>
            <p className="max-w-sm text-sm leading-relaxed text-[--muted]">{sortedDatasets.length} places to find useful training and research data.</p>
          </div>
        </div>
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
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
