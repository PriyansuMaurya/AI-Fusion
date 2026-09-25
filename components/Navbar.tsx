"use client";
import React from "react";
import { BsGithub, BsToggleOn } from "react-icons/bs";
import { useThemeContext } from "@/app/context/store";
import Link from "next/link";
import { NavbarContext } from "@/types";
import logo from "../public/logo.png";
import Image from "next/image";

export default function Navbar() {
  const { theme, handleThemeSwitch }: NavbarContext = useThemeContext();

  return (
    <header className="flex min-w-full items-center justify-between border-b border-[--line] py-5 text-[--ink] dark:bg-[--dark-bg]">
      <Link
        className="max-w-[12rem] transition-opacity duration-300 hover:opacity-70 md:max-w-[15rem]"
        href={"/"}
      >
        <Image src={logo} alt={"AI Fusion"} width={180} height={280} />
      </Link>
      <div className="flex items-center gap-5">
        <div>
          <button aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="transition-transform duration-300 hover:rotate-12" onClick={() => handleThemeSwitch()}>
            {theme === "dark" ? (
              <BsToggleOn title="Light mode" size={30} />
            ) : (
              <BsToggleOn
                title="Dark mode"
                size={30}
                className="text-[color:var(--primary-color)] rotate-180"
              />
            )}
          </button>
        </div>
        <div
          title="Go to Github"
          className="relative hidden bottom-1  text-[--dark-bg] dark:text-[--light-bg]  hover:text-[color:var(--primary-color)] dark:hover:text-[color:var(--primary-color)]   transition md:block "
        >
          <a href="https://github.com/PriyansuMaurya/AI-Fusion" target="_blank">
            <BsGithub size={25} />
          </a>
        </div>
      </div>
    </header>
  );
}
