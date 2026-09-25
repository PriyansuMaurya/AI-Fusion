"use client";
import { useState } from "react";
import Card from "@/components/Card";
import { Data } from "@/types";
import tools from "../../database/tools.json";
import Modal from "@/components/Modal";

export default function Tools() {
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState<Data | null>(null);

  // Sort tools by title in alphabetical order
  const sortedTools = [...tools].sort((a: Data, b: Data) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="flex">
      <main className="mx-auto mt-8 flex w-full max-w-7xl flex-row flex-wrap justify-center bg-[--light-bg] px-2 pb-12 dark:bg-[--dark-bg] dark:text-[--light-bg] md:mt-12 md:px-8">
        <div className="mb-5 w-full px-3">
          <p className="eyebrow">Resource library</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-.04em]">AI tools</h1>
          <p className="mt-2 text-sm text-[--muted]">{sortedTools.length} curated tools for making and shipping.</p>
        </div>
        {sortedTools.map((tool: Data) => (
          <Card
            key={tool.title}
            id={tool.title.length}
            tools={true}
            data={tool}
            setModalActive={setModalActive}
            setModalData={setModalData}
          />
        ))}
      </main>
      {modalActive && modalData && (
        <Modal data={modalData} tools={true} setModalActive={setModalActive} />
      )}
    </div>
  );
}
