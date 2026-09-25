import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[--line] px-5 py-8 text-center text-xs uppercase tracking-[.12em] text-[--muted] sm:px-8">
      Developed by friends and <a
        className="underline hover:decoration-[--primary-color] decoration-0 underline-offset-2"
        href={"https://github.com/PriyansuMaurya/AI-Fusion/graphs/contributors"}
        target="_blank"
        rel="noopener"
      >
        Open Source Community
      </a>

    </footer>
  );
}
