import React from "react";
import { AiFillCopy } from "react-icons/ai";
import { CardsProp } from "@/types";

export default function Card({ tools, prompts, datasets } : CardsProp) {
  return (
    <div className="w-[21rem] h-64 p-3 mt-3 border rounded-xl flex flex-col m-2">
      <h1 className="text-2xl font-semibold">ChatYouTube</h1>
      <p className="font-light mt-3 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
        temporibus ullam consequuntur laborum, sint magnam quia eum
        reprehenderit quibusdam praesentium voluptatem magni reiciendis culpa
        officia tempora quod eveniet possimus deleniti dolores in excepturi et.
      </p>
      {tools || datasets ? (
        <div className="mt-4">
          <a className="font-semibold text-sm border p-2 rounded-2xl" href="">
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
