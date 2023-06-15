"use client";
import React from "react";
import { BsToggleOn, BsToggleOff, BsGithub } from "react-icons/bs";
import { useThemeContext } from "@/app/context/store";
import Link from "next/link";
import { NavbarContext } from "@/types";

export default function Navbar() {
  const { theme, handleThemeSwitch } : NavbarContext = useThemeContext();

  return (
    <div className="flex min-w-full h-20 flex-row items-center justify-between px-20 dark:bg-[--dark-bg] dark:text-white">
      <Link className="flex flex-row" href={"/"}>
        <svg
          width="38"
          height="38"
          viewBox="0 0 48 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.8056 30.6297C39.4128 31.9355 37.1542 31.9355 35.7614 30.6297L29.6119 24.8643C28.2188 23.5585 28.2188 21.4413 29.6119 20.1353L35.7614 14.3701C37.1542 13.0643 39.4128 13.0643 40.8056 14.3701L46.9554 20.1353C48.3482 21.4413 48.3482 23.5585 46.9554 24.8643L40.8056 30.6297ZM12.2386 30.6297C10.8457 31.9355 8.58716 31.9355 7.19405 30.6297L1.04483 24.8643C-0.348276 23.5585 -0.348276 21.4413 1.04483 20.1353L7.19431 14.3701C8.58716 13.0643 10.8457 13.0643 12.2386 14.3701L18.3881 20.1353C19.7812 21.4413 19.7812 23.5585 18.3881 24.8643L12.2386 30.6297ZM26.5222 44.0205C25.1291 45.3265 22.8708 45.3265 21.4777 44.0205L15.3282 38.2553C13.9354 36.9495 13.9354 34.8321 15.3282 33.5263L21.478 27.7611C22.8708 26.4551 25.1291 26.4551 26.5222 27.7611L32.6717 33.5263C34.0646 34.8321 34.0646 36.9495 32.6717 38.2553L26.5222 44.0205ZM26.5222 17.2387C25.1291 18.5448 22.8708 18.5448 21.4777 17.2387L15.3282 11.4735C13.9354 10.1675 13.9354 8.05032 15.3282 6.74428L21.478 0.979353C22.8708 -0.326451 25.1291 -0.326451 26.5222 0.979353L32.6717 6.74476C34.0646 8.05056 34.0646 10.1677 32.6717 11.4738L26.5222 17.2387Z"
            fill="#22C55E"
          />
        </svg>
        <h1 className="ml-2 text-3xl font-bold text-[color:var(--primary-color)]">
          AI Fusion
        </h1>
      </Link>
      <div className="w-20  flex flex-row justify-between items-center">
        <div className="">
          <button onClick={() => handleThemeSwitch()}>
            {theme === "dark" ? (
              <BsToggleOn size={30} />
            ) : (
              <BsToggleOff size={30} />
            )}
          </button>
        </div>
        <div className="relative bottom-1 hover:text-[color:var(--primary-color)] transition ">
          <a href="https://github.com/PriyansuMaurya/AI-Fusion">
            <BsGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
