"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function NavigationLinks() {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (section: string) => {
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


  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, title: string) => {
    event.preventDefault();

    document.title = `AI Fusion | ${title}`;
  };

  return (
    <motion.div
      className="flex text-[--dark-bg] bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-col items-center justify-between "
      whileHover="hover"
      variants={linkVariant}
    >
      <div className="w-50 border border-[--dark-bg] dark:border-[--light-bg] rounded-3xl flex flex-row justify-evenly items-center">
        <Link
          className={`w-24 text-center font-semibold ${activeSection === "tools"
            ? "bg-green-500 text-white"
            : "hover:bg-[color:var(--primary-color)] hover:text-white focus:bg-[--primary-color]"
            } rounded-l-3xl transition px-4 py-2`}
          href="/tools"
          onClick={(event) => {
            handleSectionClick("tools");
            handleClick(event, "Tools");
          }}
        >
          Tools
        </Link>
        <Link
          className={`w-24 text-center font-semibold ${activeSection === "prompts"
            ? "bg-green-500 text-white"
            : "hover:bg-[color:var(--primary-color)] hover:text-white focus:bg-[--primary-color]"
            } transition px-4 py-2`}
          href="/prompts"
          onClick={(event) => {
            handleSectionClick("prompts");
            handleClick(event, "Prompts");
          }}
        >
          Prompts
        </Link>
        <Link
          className={`w-24 text-center font-semibold ${activeSection === "datasets"
            ? "bg-green-500 text-white"
            : "hover:bg-[color:var(--primary-color)] hover:text-white focus:bg-[--primary-color]"
            } rounded-r-3xl transition px-4 py-2`}
          href="/datasets"
          onClick={(event) => {
            handleSectionClick("datasets");
            handleClick(event, "Datasets");
          }}
        >
          Datasets
        </Link>
      </div>
    </motion.div>
  );
}
