"use client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


async function getCurrentVersion() {
    const response = await fetch(
        "https://api.github.com/repos/PriyansuMaurya/AI-Fusion/releases/latest"
    );
    const data = await response.json();
    return data.tag_name;
    // return v1.2.4-beta
}


export default function Announcement() {
    const [announcement, setAnnouncement] = useState(true);

    return (
        announcement &&
        <div className="flex items-center justify-between bg-[--primary-color] text-[--light-bg] ease-out duration-300 undefined">
            <div className="mx-3 md:mx-5" />
            <div className=" px-4 py-2 text-center text-sm "> {
                [
                    <>Check what has changed in the <strong className="underline underline-offset-1"><a href="https://github.com/PriyansuMaurya/AI-Fusion/releases/latest" rel="external noopener noreferrer" target="_blank">{getCurrentVersion()}</a></strong></>,
                    <>⭐️ If you like AI Fusion, give it a star on <a className="underline underline-offset-1" href="https://github.com/PriyansuMaurya/AI-Fusion/" rel="external noopener noreferrer" target="_blank">GitHub</a></>
                ][Math.floor(Math.random() * 2)]
            }
            </div>
            {/* <div className="mx-3 md:mx-5" /> */}

            <button onClick={() => setAnnouncement(false)}><RxCross2 className="mx-3 md:mx-5 hover:text-[--dark-bg] ease-out duration-300" size={20} /></button>

        </div>
    )
}

