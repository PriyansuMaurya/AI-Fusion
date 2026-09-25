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
      <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-20 pt-10 text-[--ink] sm:px-8 lg:px-12">
        <div className="border-b border-[--line] pb-8">
          <p className="eyebrow">Resource library</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
            <h1 className="text-5xl font-semibold tracking-[-.07em] sm:text-6xl">AI tools</h1>
            <p className="max-w-sm text-sm leading-relaxed text-[--muted]">{sortedTools.length} curated tools for making, testing, and shipping.</p>
          </div>
        </div>
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </main>
      {modalActive && modalData && (
        <Modal data={modalData} tools={true} setModalActive={setModalActive} />
      )}
    </div>
  );
}
