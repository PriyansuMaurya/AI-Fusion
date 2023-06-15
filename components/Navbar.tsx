"use client";
import React from "react";
import { BsToggleOn, BsToggleOff, BsGithub } from "react-icons/bs";
import { useThemeContext } from "@/app/context/store";
import Link from "next/link";
import { NavbarContext } from "@/types";
import logo from "../public/logo.png";
import Image from "next/image";

export default function Navbar() {
  const { theme, handleThemeSwitch }: NavbarContext = useThemeContext();

  return (
    <div className="flex min-w-full h-20 flex-row items-center justify-between  dark:bg-[--dark-bg] dark:text-[--light-bg]">
      <Link className="m-4" href={"/"}>
        <Image src={logo} alt={"vercel"} width={180} height={280} />
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
        <div className="relative hidden bottom-1 hover:text-[color:var(--primary-color)] transition md:block ">
          <a href="https://github.com/PriyansuMaurya/AI-Fusion">
            <BsGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
