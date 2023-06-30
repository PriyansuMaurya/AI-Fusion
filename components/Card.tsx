import React, { useState } from "react";
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

  function handleReadMore() {
    setModalActive(true);
    setModalData(data);
  }

  return (
    <div
      key={id}
      className="w-[20.5rem] h-64 p-6 mt-3 border border-[--dark-bg] dark:border-[--light-bg]  rounded-3xl flex flex-col m-3 text-[--dark-bg] dark:text-[--light-bg]"
    >
      <h1 className="text-2xl font-semibold line-clamp-1">{title}</h1>
      <span className="font-light mt-3 text-sm line-clamp-5">
        {description}
      </span>
      {tools || datasets ? (
        <div className="mt-8 flex flex-row justify-between items-center">
          <a
            className="font-bold p-1 text-xs border py-[8px] px-4 hover:bg-[--primary-color] border-[--dark-bg] dark:border-[--light-bg] rounded-3xl"
            href={url}
            target="_blank"
            rel="noopener"
          >
            GO TO SITE
          </a>

          <button
            onClick={handleReadMore}
            className="bg-[--primary-color] text-black p-1.5 rounded-2xl font-bold"
          >
            Read More
          </button>
        </div>
      ) : (
        <div className="mt-6 flex flex-row justify-between">
          {/* <div className="border p-2 rounded"> */}
          <CopyToClipboard text={description}>
            <button
              onClick={() => {
                setCopied(true);
                setInterval(() => {
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
          <button
            onClick={handleReadMore}
            className="bg-[--primary-color] text-black px-2 rounded-2xl font-bold"
          >
            Read More
          </button>
        </div>
      )}
    </div>
  );
}
