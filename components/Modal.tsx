import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy, FiCheck } from "react-icons/fi";
import { ModalProps } from "@/types";

export default function Modal({
  title,
  description,
  url,
  tags,
  setModalActive,
}: ModalProps) {
  // copy to clipboard

  const [copied, setCopied] = useState(false);

  return (
    <div className="w-1/2 my-14 py-1 relative">
      <div className="ScrollBar sticky top-10 w-96 h-[30rem] rounded-xl p-5 border border-black dark:border-white overflow-x-hidden">
        {/* Heading */}
        <div className="flex flex-row justify-between items-center">
          <p className="dark:text-white text-2xl">{title}</p>
          <div>
            {/* copy descritpion button */}
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
                  <FiCheck className="dark:text-white" size={20} />
                ) : (
                  <FiCopy className="dark:text-white" size={20} />
                )}
              </button>
            </CopyToClipboard>

            {/* close modal button */}
            <button className="ml-3" onClick={() => setModalActive(false)}>
              <MdCancel className="dark:text-white text-2xl" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="border border-black dark:border-white p-5 rounded-lg my-5">
          <p className="dark:text-white">{description}</p>
        </div>
        {/* Tags */}
        <div className="border border-black dark:border-white rounded-lg p-5 my-5">
          <p className="text-xl dark:text-white">Tags</p>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <div className="border rounded-lg m-1">
                <p className="dark:text-white p-1">{tag}</p>
              </div>
            ))}
          </div>
        </div>

        <a
          className="font-bold p-1 text-xs py-[8px] px-4 bg-[--primary-color] rounded-3xl"
          href={url}
          target="_blank"
          rel="noopener"
        >
          GO TO SITE
        </a>
      </div>
    </div>
  );
}
