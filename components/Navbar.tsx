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
    <div className="flex min-w-full h-20 items-center justify-between  dark:bg-[--dark-bg] text-[--dark-bg] dark:text-[--light-bg] ">
      <Link className="mx-5 max-w-sm my-4 h-auto w-40 md:w-96 md:max-w-xl" href={"/"}>
        <Image src={logo} alt={"vercel"} width={180} height={280} />
      </Link>
      <div className="w-20  flex flex-row justify-between items-center">
        <div className="">
          <button onClick={() => handleThemeSwitch()}>
            {theme === "dark" ? (
              <BsToggleOn size={30} />
            ) : (
              <BsToggleOn size={30} className="text-[color:var(--primary-color)] rotate-180"/>
            )}
          </button>
        </div>
        <div className="relative hidden bottom-1  text-[--dark-bg] dark:text-[--light-bg]  hover:text-[color:var(--primary-color)]  transition md:block ">
          <a href="https://github.com/PriyansuMaurya/AI-Fusion">
            <BsGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
