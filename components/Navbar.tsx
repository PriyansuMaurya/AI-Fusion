"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import logo from "../public/logo.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navSections = [
  { id: "tools", label: "Tools", href: "/tools", title: "AI Fusion - Tools" },
  { id: "prompts", label: "Prompts", href: "/prompts", title: "AI Fusion - Prompts" },
  { id: "datasets", label: "Datasets", href: "/datasets", title: "AI Fusion - Datasets" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const activeMatch = navSections.find(
    (section) => pathname === section.href || pathname === section.href + "/"
  );

  // Keep the page title in sync with the route (direct visits, reloads, back/forward).
  useEffect(() => {
    document.title = activeMatch ? activeMatch.title : "AI-Fusion";
  }, [activeMatch]);

  return (
    <header className="flex min-w-full flex-wrap items-center gap-y-3 border-b border-[--line] py-5 text-[--ink] dark:bg-[--dark-bg]">
      <div className="flex flex-1 justify-start">
        <Link
          className="max-w-[14rem] transition-opacity duration-300 hover:opacity-70 md:max-w-[18rem]"
          href={"/"}
        >
          <Image
            src={logo}
            alt={"AI Fusion"}
            width={406}
            height={70}
            priority
            className="h-auto w-full"
          />
        </Link>
      </div>

      <nav aria-label="Resources" className="order-3 flex w-full items-center justify-center gap-6 md:order-none md:w-auto">
        {navSections.map((section) => {
          const isActive = activeMatch?.id === section.id;
          return (
            <Link
              key={section.id}
              href={section.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "relative text-sm font-medium text-[--ink] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-[--line]"
                  : "text-sm text-[--muted] transition-colors hover:text-[--ink]"
              }
            >
              {section.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex-1" />
    </header>
  );
}
