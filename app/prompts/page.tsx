"use client";
import { useState } from "react";
import Card from "@/components/Card";
import { Data } from "@/types";
import prompts from "../../database/prompts.json";
import Modal from "@/components/Modal";

export default function Prompts() {
  // Modal State Data
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState<Data | null>(null);

  // Sort prompts by title in alphabetical order
  const sortedPrompts = [...prompts].sort((a: Data, b: Data) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="flex">
      <main className="mx-auto mt-8 flex w-full max-w-7xl flex-row flex-wrap justify-center bg-[--light-bg] px-2 pb-12 dark:bg-[--dark-bg] dark:text-[--light-bg] md:mt-12 md:px-8">
        <div className="mb-5 w-full px-3">
          <p className="eyebrow">Resource library</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-.04em]">Prompts</h1>
          <p className="mt-2 text-sm text-[--muted]">{sortedPrompts.length} reusable starting points for better conversations.</p>
        </div>
        {sortedPrompts.map((prompt: Data) => (
          <Card
            key={prompt.title}
            id={prompt.title.length}
            prompts={true}
            data={prompt}
            setModalData={setModalData}
            setModalActive={setModalActive}
          />
        ))}
      </main>
      {modalActive && modalData && (
        <Modal
          data={modalData}
          prompts={true}
          setModalActive={setModalActive}
        />
      )}
    </div>
  );
}
