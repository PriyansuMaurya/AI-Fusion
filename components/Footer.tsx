import React from "react";

export default function Footer() {
  return (
    <div className="m-7 bg-[--light-bg] dark:bg-[--dark-bg] text-center text-[--dark-bg] dark:text-[--light-bg] md:text-xl">
      Developed by friends and <a
        className="underline hover:decoration-[--primary-color] decoration-0 underline-offset-2"
        href={"https://github.com/PriyansuMaurya/AI-Fusion/graphs/contributors"}
        target="_blank"
        rel="noopener"
      >
        Open Source Community
      </a>

    </div>
  );
}
