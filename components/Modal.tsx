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

  return (
    <div className="w-1/2 my-14 py-1 relative">
      <div className="ScrollBar sticky top-10 w-96 h-[33.5rem] rounded-3xl p-5 border border-[--dark-bg] dark:text-[--light-bg] dark:border-[--light-bg] overflow-x-hidden">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <p className="p-2 dark:text-[--light-bg] text-2xl">{title}</p>
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
              <MdCancel className="dark:text-[--light-bg] text-2xl" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col justify-center">
          <div className="border border-[--dark-bg] dark:border-[--light-bg] p-5 rounded-3xl my-5">
            <p className="dark:text-[--light-bg]">{description}</p>
          </div>
          {/* Tags */}
          <div className="border border-[--dark-bg] dark:border-[--light-bg] rounded-3xl p-5 my-5">
            <p className="text-xl dark:text-[--light-bg]">Tags</p>
            <div className="pt-2 flex flex-wrap">
              {tags.map((tag) => (
                <div className="border text-sm rounded-3xl m-1 px-1">
                  <p className="dark:text-[--light-bg] p-1">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
