"use client";
import { useEffect } from "react";
import Link from "next/link";
import logo from "../public/logo.webp";
import compactLogo from "../public/logo - priyanshu maurya.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navSections = [
  { id: "tools", label: "Tools", href: "/tools", title: "AI FUSION | Tools" },
  { id: "prompts", label: "Prompts", href: "/prompts", title: "AI FUSION | Prompts" },
  { id: "datasets", label: "Datasets", href: "/datasets", title: "AI FUSION | Datasets" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const activeMatch = navSections.find(
    (section) => pathname === section.href || pathname === section.href + "/"
  );

  // Keep the page title in sync with the route (direct visits, reloads, back/forward).
  useEffect(() => {
    document.title = activeMatch ? activeMatch.title : "AI FUSION";
  }, [activeMatch]);

  return (
    <header className="mx-auto flex min-w-full max-w-7xl flex-wrap items-center gap-y-4 border-b border-[--line] px-5 py-4 text-[--ink] dark:bg-[--dark-bg] sm:px-8 lg:px-12">
      <div className="flex flex-1 justify-start">
        <Link
          className="max-w-[12rem] rounded-sm transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--primary-color] sm:max-w-[14rem] md:max-w-[16rem]"
          href="/"
          aria-label="AI FUSION home"
          aria-current={isHome ? "page" : undefined}
        >
          <Image
            src={logo}
            alt="AI Fusion"
            width={406}
            height={70}
            priority
            className="hidden h-auto w-full sm:block"
          />
          <Image
            src={compactLogo}
            alt=""
            width={48}
            height={48}
            priority
            aria-hidden="true"
            className="block h-11 w-11 object-contain sm:hidden"
          />
        </Link>
      </div>

      <nav aria-label="Resources" className="order-3 flex w-full items-center justify-center gap-5 border-t border-[--line] pt-4 sm:gap-7 md:order-none md:w-auto md:border-t-0 md:pt-0">
        {navSections.map((section) => {
          const isActive = activeMatch?.id === section.id;
          return (
            <Link
              key={section.id}
              href={section.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "relative text-sm font-medium text-[--ink] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[--ink]"
                  : "rounded-sm text-sm text-[--muted] transition-colors hover:text-[--ink] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--primary-color]"
              }
            >
              {section.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden flex-1 justify-end md:flex">
        <span className="eyebrow">Open source / curated</span>
      </div>
    </header>
  );
}
