import React, { useEffect, useRef, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { CardsProp } from "@/types";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Card({
  id,
  tools,
  prompts,
  datasets,
  data,
  setModalData,
  setModalActive,
}: CardsProp) {
  const { title, description, url, tags } = data;
  const [copied, setCopied] = useState(false);
  const resetCopied = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    if (resetCopied.current) clearTimeout(resetCopied.current);
  }, []);

  function handleReadMore() {
    setModalActive(true);
    setModalData(data);
  }

  return (
    <div
      className="m-3 flex h-64 w-[20.5rem] flex-col rounded-3xl border border-[--dark-bg] p-6 text-[--dark-bg] dark:border-[--light-bg] dark:text-[--light-bg]"
    >
      <h2 className="line-clamp-1 text-2xl font-semibold">{title}</h2>
      <p className="mt-3 line-clamp-5 text-sm font-light">
        {description}
      </p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        {tools || datasets ? (
          <a
            className="max-h-9 rounded-3xl border border-[--dark-bg] px-4 py-[8px] text-center text-xs font-bold hover:bg-[--primary-color] dark:border-[--light-bg]"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GO TO SITE
          </a>
        ) : (
          <CopyToClipboard text={description}>
            <button
              type="button"
              aria-label={`Copy ${title} prompt`}
              title="Copy prompt"
              onClick={() => {
                setCopied(true);
                if (resetCopied.current) clearTimeout(resetCopied.current);
                resetCopied.current = setTimeout(() => {
                  setCopied(false);
                }, 1000);
              }}
              className="border p-2 border-[--dark-bg] dark:border-[--light-bg] hover:bg-[--primary-color] rounded-lg"
            >
              {copied ? (
                <FiCheck className="" size={20} />
              ) : (
                <FiCopy className="" size={20} />
              )}
            </button>
          </CopyToClipboard>
        )}
        {description.length > 210 ? (
          <button
            type="button"
            onClick={handleReadMore}
            aria-label={`Read more about ${title}`}
            className="font-bold max-h-9 text-center p-1 text-xs bg-[--primary-color] border border-[--primary-color] text-[--dark-bg] py-[8px] px-4 hover:bg-[--light-bg] dark:hover:text-[--light-bg] hover:text-[--dark-bg] hover:border-[--dark-bg] dark:border-[--primary-color] dark:hover:border-[--light-bg]  dark:hover:bg-[--dark-bg]  rounded-3xl"
          >
            READ MORE
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
