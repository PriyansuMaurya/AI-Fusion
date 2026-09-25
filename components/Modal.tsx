import { useEffect, useRef, useState } from "react";
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
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[--dark-bg] bg-[--light-bg] p-5 text-[--dark-bg] shadow-2xl dark:border-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] sm:p-7"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resource-modal-title"
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2 id="resource-modal-title" className="text-2xl font-semibold">
            {data.title}
          </h2>
          <div className="flex shrink-0 items-center gap-2">
            {tools || datasets ? (
              data.url ? (
                <a
                  className="rounded p-2 hover:bg-[--primary-color]"
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${data.title} in a new tab`}
                  title="Open resource"
                >
                  <HiOutlineExternalLink className="text-2xl" />
                </a>
              ) : null
            ) : (
              <CopyToClipboard text={data.description}>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded p-2 hover:bg-[--primary-color]"
                  aria-label={`Copy ${data.title} prompt`}
                  title="Copy prompt"
                >
                  {copied ? <FiCheck className="text-2xl" /> : <FiCopy className="text-2xl" />}
                </button>
              </CopyToClipboard>
            )}
            <button
              type="button"
              className="rounded p-2 hover:text-[--primary-color]"
              onClick={() => setModalActive(false)}
              aria-label="Close dialog"
              title="Close"
            >
              <MdCancel className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="my-3 rounded-3xl border border-[--dark-bg] p-5 dark:border-[--light-bg]">
          <p>{data.description}</p>
        </div>

        <div className="my-3 rounded-3xl border border-[--dark-bg] p-5 dark:border-[--light-bg]">
          <h3 className="text-xl">Tags</h3>
          {data.tags.length > 0 ? (
            <div className="flex flex-wrap pt-2">
              {data.tags.map((tag) => (
                <span key={tag} className="m-1 rounded-3xl border border-[--dark-bg] px-2 py-1 text-sm dark:border-[--light-bg]">
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

