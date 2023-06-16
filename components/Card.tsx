import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { CardsProp } from "@/types";

export default function Card({ tools, prompts, datasets }: CardsProp) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="w-[20.5rem] h-64 p-6 mt-3 border border-[--dark-bg] dark:border-[--light-bg]  rounded-3xl flex flex-col m-3 text-[--dark-bg] dark:text-[--light-bg]">
      <h1 className="text-2xl font-semibold">ChatYouTube</h1>
      <span className="font-light mt-3 text-sm line-clamp-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
        temporibus ullam consequuntur laborum, sint magnam quia eum
        reprehenderit quibusdam praesentium voluptatem magni reiciendis culpa
        officia tempora quod eveniet officia tempora quod eveniet officia tempora
        quod eveniet officia tempora quod eveniet officia tempora quod eveniet
        officia tempora quod eveniet
      </span>
      {tools || datasets ? (
        <div className="mt-8">
          <a className="font-bold p-1 text-xs border py-[8px] px-4 hover:bg-[--primary-color] border-[--dark-bg] dark:border-[--light-bg] rounded-3xl" href="">
            GO TO SITE
          </a>
        </div>
      ) : (
        <div className="mt-6">
          {/* <div className="border p-2 rounded"> */}
          <button onClick={() => {
            setCopied(true);
            setInterval(() => { setCopied(false) }, 1000);
          }} className="border p-2 border-[--dark-bg] dark:border-[--light-bg] hover:bg-[--primary-color] rounded-lg">
            {copied ? (<FiCheck className="" size={20} />) : (<FiCopy className="" size={20} />)}
          </button>
        </div>
        // </div>
      )}
    </div>
  );
}
