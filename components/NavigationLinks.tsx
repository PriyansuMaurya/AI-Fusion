"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function NavigationLinks() {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const isMobile = useMediaQuery("(max-width: 600px)");

  const linkVariant = {
    hover: {
      scale: isMobile ? 1.1 : 1.02,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const handleToolsClick = () => {
    document.title = "AI Fusion - Tools";
  };

  const handlePromptsClick = () => {
    document.title = "AI Fusion - Prompts";
  };

  const handleDatasetsClick = () => {
    document.title = "AI Fusion - Datasets";
  };

  return (
    <motion.nav
      aria-label="Primary navigation"
      className="flex items-center justify-between border-b border-[--line] py-4 text-[--ink]"
      whileHover="hover"
      variants={linkVariant}
    >
      <span className="eyebrow hidden sm:block">Explore the collection</span>
      <div className="flex items-center gap-1 border border-[--line] p-1">
        <Link
          className={`w-24 text-center text-xs font-semibold uppercase tracking-[.12em] ${
            activeSection === "tools"
              ? "bg-green-500 text-white"
              : "hover:bg-[color:var(--primary-color)] hover:text-[--ink] focus:bg-[--primary-color]"
          } rounded-l-3xl transition px-4 py-2`}
          href="/tools"
          onClick={() => {
            handleSectionClick("tools");
            handleToolsClick();
          }}
        >
          Tools
        </Link>
        <Link
          className={`w-24 text-center text-xs font-semibold uppercase tracking-[.12em] ${
            activeSection === "prompts"
              ? "bg-green-500 text-white"
              : "hover:bg-[color:var(--primary-color)] hover:text-[--ink] focus:bg-[--primary-color]"
          } transition px-4 py-2`}
          href="/prompts"
          onClick={() => {
            handleSectionClick("prompts");
            handlePromptsClick();
          }}
        >
          Prompts
        </Link>
        <Link
          className={`w-24 text-center text-xs font-semibold uppercase tracking-[.12em] ${
            activeSection === "datasets"
              ? "bg-green-500 text-white"
              : "hover:bg-[color:var(--primary-color)] hover:text-[--ink] focus:bg-[--primary-color]"
          } rounded-r-3xl transition px-4 py-2`}
          href="/datasets"
          onClick={() => {
            handleSectionClick("datasets");
            handleDatasetsClick();
          }}
        >
          Datasets
        </Link>
      </div>
    </motion.nav>
  );
}
