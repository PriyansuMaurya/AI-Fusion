"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiX } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ModalProps } from "@/types";

export default function Modal({ data, tools, datasets, setModalActive }: ModalProps) {
  const [copied, setCopied] = useState(false);
  const resetCopied = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalActive(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
      if (resetCopied.current) clearTimeout(resetCopied.current);
    };
  }, [setModalActive]);

  const handleCopy = () => {
    setCopied(true);
    if (resetCopied.current) clearTimeout(resetCopied.current);
    resetCopied.current = setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-800/75 p-4 sm:items-center"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setModalActive(false);
      }}
    >
      <section
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[--dark-bg] bg-[--light-bg] p-5 text-[--dark-bg] shadow-2xl dark:border-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] sm:p-7"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resource-modal-title"
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2 id="resource-modal-title" className="text-2xl font-semibold tracking-[-.04em]">
            {data.title}
          </h2>
          <div className="flex shrink-0 items-center gap-2">
            {tools || datasets ? (
              data.url ? (
                <a
                  className="rounded-sm p-2 hover:bg-[--primary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--primary-color]"
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${data.title} in a new tab`}
                  title="Open resource"
                >
                  <FiArrowUpRight aria-hidden="true" className="text-xl" />
                </a>
              ) : null
            ) : (
              <CopyToClipboard text={data.description}>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-sm p-2 hover:bg-[--primary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--primary-color]"
                  aria-label={`Copy ${data.title} prompt`}
                  title="Copy prompt"
                >
                  {copied ? <FiCheck aria-hidden="true" className="text-xl" /> : <FiCopy aria-hidden="true" className="text-xl" />}
                </button>
              </CopyToClipboard>
            )}
            <button
              type="button"
              className="rounded-sm p-2 hover:text-[--primary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--primary-color]"
              onClick={() => setModalActive(false)}
              aria-label="Close dialog"
              title="Close"
            >
              <FiX aria-hidden="true" className="text-xl" />
            </button>
          </div>
        </div>

        <div className="my-3 border border-[--dark-bg] p-5 dark:border-[--light-bg]">
          <p>{data.description}</p>
        </div>

        <div className="my-3 border border-[--dark-bg] p-5 dark:border-[--light-bg]">
          <h3 className="text-xl tracking-[-.03em]">Tags</h3>
          {data.tags.length > 0 ? (
            <div className="flex flex-wrap pt-2">
              {data.tags.map((tag) => (
                <span key={tag} className="m-1 border border-[--dark-bg] px-2 py-1 text-sm dark:border-[--light-bg]">
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <p className="pt-2 text-sm text-[--muted]">No tags added yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
