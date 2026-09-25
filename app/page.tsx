"use client";
import { useEffect } from "react";
import { useThemeContext } from "./context/store";
import Image from "next/image";
import PoweredByVercel from "../public/powered-by-vercel.svg";
import Undraw from "../public/undraw.svg";

export default function Home() {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-24 px-5 pb-24 pt-12 text-[--ink] sm:px-8 lg:gap-32 lg:px-12 lg:pt-20">
      <section className="grid items-end gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div className="animate-rise flex flex-col gap-8">
          <p className="eyebrow">A considered collection for curious builders</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[.94] tracking-[-.07em] sm:text-7xl lg:text-[6.8rem]">
            Better inputs.
            <br />
            <span className="accent-mark">Better outputs.</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-[--muted] sm:text-xl">
            Your ultimate destination for streamlined access to a curated collection of powerful AI tools, prompts and datasets.
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <a href="/tools" className="button-arrow">Explore the library <span aria-hidden="true">↗</span></a>
            <span className="text-xs font-medium uppercase tracking-[.16em] text-[--muted]">Open source / 2024</span>
          </div>
        </div>
        <div className="relative flex min-h-[22rem] items-end justify-center overflow-hidden border border-[--line] bg-[--surface] p-8 sm:min-h-[29rem] lg:min-h-[34rem] lg:p-12">
          <span className="absolute left-6 top-6 eyebrow">01 / Index</span>
          <Image className="relative z-10 h-auto w-full max-w-md object-contain transition-transform duration-700 hover:scale-105" src={Undraw} width={500} height={500} alt="Abstract illustration representing AI tools and ideas" />
          <span className="absolute bottom-6 right-6 max-w-32 text-right text-xs leading-relaxed text-[--muted]">Tools for the next iteration of your work.</span>
        </div>
      </section>
      <section className="grid gap-10 border-t border-[--line] pt-10 md:grid-cols-[.7fr_1.3fr] md:gap-20">
        <div className="flex flex-col gap-3"><p className="eyebrow">Built in public</p><p className="text-sm leading-relaxed text-[--muted]">A small, useful corner of the internet—made better by its contributors.</p></div>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><h2 className="max-w-xl text-4xl font-semibold leading-none tracking-[-.05em] sm:text-6xl">Proudly<br /><span className="text-[--muted]">Open-Source</span></h2><a className="shrink-0 transition-transform duration-300 hover:-translate-y-1" href="https://vercel.com/?utm_source=discordjs&utm_campaign=oss" target="_blank" rel="noopener"><Image src={PoweredByVercel} alt="Vercel" width={190} height={240} /></a></div>
      </section>
    </main>
  );
}

