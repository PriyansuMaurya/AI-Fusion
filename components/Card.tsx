import React from "react";
import { AiFillCopy } from "react-icons/ai";

export default function Card({ tools, datasets }) {
  return (
    <div className="w-96 h-60 p-3 mt-5 border rounded-xl flex flex-col">
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
          <div className="border p-2 rounded">
            <AiFillCopy className="" size={20} />
          </div>
        </div>
      )}
    </div>
  );
}
