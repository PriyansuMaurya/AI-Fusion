import React from "react";
import { AiFillCopy } from "react-icons/ai";
import { CardsProp } from "@/types";

export default function Card({ id, tools, prompts, datasets, data }: CardsProp) {
  const { title, description, url, tags } = data

  return (
    <div key={id} className="w-[21rem] h-64 p-3 mt-3 border rounded-xl flex flex-col m-2">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="font-light mt-3 text-sm">
        {description}
      </p>
      {tools || datasets ? (
        <div className="mt-4">
          <a className="font-semibold text-sm border p-2 rounded-2xl" href={url} target="_blank">
            GO TO SITE
          </a>
        </div>
      ) : (
        <div className="mt-3 flex">
          {/* <div className="border p-2 rounded"> */}
          <button className="border p-1 rounded">
            <AiFillCopy className="" size={20} />
          </button>
        </div>
        // </div>
      )}
    </div>
  );
}

