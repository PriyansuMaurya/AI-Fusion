import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy, FiCheck } from "react-icons/fi";
import { ModalProps } from "@/types";

export default function Modal({
  data,
  tools,
  prompts,
  datasets,
  setModalActive,
}: ModalProps) {
  // copy to clipboard
  const { title, description, url, tags } = data;
  const [copied, setCopied] = useState(false);

  const mainContent = (<div className="flex flex-col justify-center ">
    {/* Heading */}
    <div className="flex justify-between items-center mb-3">
      <h1 className="p-2 dark:text-[--light-bg] text-2xl font-semibold">{title}</h1>
      <div className="flex justify-between align-middle">
        {tools || datasets ? (
          <a
            className="p-2"
            href={url}
            target="_blank"
            rel="noopener"
          >
            <HiOutlineExternalLink className="dark:text-[--light-bg] text-2xl" />
          </a>
        ) : (
          <CopyToClipboard text={description}>
            <button
              onClick={() => {
                setCopied(true);
                setInterval(() => {
                  setCopied(false);
                }, 1000);
              }}
              className="p-2"
            >
              {copied ? (
                <FiCheck className="dark:text-[--light-bg] text-2xl" />
              ) : (
                <FiCopy className="dark:text-[--light-bg] text-2xl" />
              )}
            </button>
          </CopyToClipboard>
        )}
        {/* close modal button */}
        <button className="ml-3" onClick={() => setModalActive(false)}>
          <MdCancel className="dark:text-[--light-bg] text-2xl hover:text-[--primary-color] dark:hover:text-[--primary-color]" />
        </button>
      </div>
    </div>
    {/* Description */}
    <div className="border border-[--dark-bg] dark:border-[--light-bg] p-5 rounded-3xl my-3">
      <p className="dark:text-[--light-bg]">{description}</p>
    </div>
    {/* Tags */}
    <div className="border border-[--dark-bg] dark:border-[--light-bg] rounded-3xl p-5 my-3">
      <p className="text-xl dark:text-[--light-bg]">Tags</p>
      <div className="pt-2 flex flex-wrap">
        {tags.map((tag: string, index: number) => (
          <div key={index} className="border border-[--dark-bg] dark:border-[--light-bg] text-sm rounded-3xl m-1 px-1">
            <p className="dark:text-[--light-bg] p-1">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  </div>);

  return (
    <>
      <div className="md:w-1/2 block md:my-14 md:py-1 z-10 md:z-0 md:relative md:hidden">
        <div onClick={() => setModalActive(false)} className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity"></div>
          <div className=" fixed inset-0 z-10 md:z-0 -mb-20 overflow-y-auto  ">
            <div className=" flex min-h-full items-end justify-center  text-center md:items-center md:p-0">
              <div className="relative md:sticky bg-[--light-bg] dark:bg-[--dark-bg] mx-4 px-4 pb-32 pt-5 md:p-6 md:pb-4 mt-56 transform overflow-hidden md:overflow-x-hidden md:overflow-y-auto border border-[--dark-bg] dark:border-[--light-bg] rounded-t-3xl md:rounded-3xl text-left transition-all md:my-8  md:max-w-lg md:w-96 md:h-[33.5rem]">
                {mainContent}
              </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden my-14 py-1 relative md:block">
        <div className="ScrollBar sticky top-10 w-96 h-[33.5rem] rounded-3xl p-5 border border-[--dark-bg] dark:text-[--light-bg] dark:border-[--light-bg] overflow-x-hidden">
          {mainContent}
        </div>
      </div>
    </>

  );
}

