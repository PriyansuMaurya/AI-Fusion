'use client'
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function NavigationLinks() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const linkVariant = {
    hover: {
      scale: isMobile ? 1.1 : 1.02,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }

  const handleToolsClick = () => {
    document.title = "AI Fusion - Tools";
  }

  const handlePromptsClick = () => {
    document.title = "AI Fusion - Prompts";
  }

  const handleDatasetsClick = () => {
    document.title = "AI Fusion - Datasets";
  }

  return (
    <motion.div className='flex text-[--dark-bg] bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-col items-center justify-between ' whileHover='hover' variants={linkVariant}>
      <div className="w-50 border border-[--dark-bg] dark:border-[--light-bg] rounded-3xl flex flex-row justify-evenly items-center">
        <Link className="w-24 text-center font-semibold hover:bg-[color:var(--primary-color)] hover:text-[--dark-bg] focus:bg-[--primary-color] rounded-l-3xl transition px-4 py-2" href={"/tools"} onClick={handleToolsClick}>Tools</Link>
        <Link className="w-24 text-center font-semibold hover:bg-[color:var(--primary-color)] hover:text-[--dark-bg] focus:bg-[--primary-color] transition px-4 py-2" href={"/prompts"} onClick={handlePromptsClick}>Prompts</Link>
        <Link className="w-24 text-center font-semibold hover:bg-[color:var(--primary-color)] hover:text-[--dark-bg] focus:bg-[--primary-color] rounded-r-3xl transition px-4 py-2" href={"/datasets"} onClick={handleDatasetsClick}>Datasets</Link>
      </div>
    </motion.div>
  )
}
