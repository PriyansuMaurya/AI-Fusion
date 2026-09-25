import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-11rem)] max-w-7xl items-center px-5 py-12 text-[--ink] sm:px-8 lg:px-12">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
        <section>
          <p className="eyebrow">Error / 404</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[.95] tracking-[-.07em] sm:text-7xl">
            This page took a wrong turn.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-[--muted]">
            The address is missing or no longer available. Return home and keep exploring the collection.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/" className="button-arrow">
              Back to home <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/tools" className="text-xs font-bold uppercase tracking-[.16em] text-[--muted] underline decoration-[--line] underline-offset-4 transition-colors hover:text-[--ink]">
              Browse tools
            </Link>
          </div>
        </section>

        <div className="relative mx-auto flex aspect-square w-full max-w-[22rem] items-center justify-center border border-[--line] p-5 sm:max-w-[26rem]">
          <div className="absolute inset-5 border border-[--line]" aria-hidden="true" />
          <span className="relative z-10 text-[clamp(6rem,18vw,11rem)] font-semibold leading-none tracking-[-.12em] text-[--ink]" aria-label="404">
            404
          </span>
          <span className="absolute bottom-8 left-8 bg-[--primary-color] px-2 py-1 text-[10px] font-bold uppercase tracking-[.18em]">
            Page not found
          </span>
        </div>
      </div>
    </main>
  );
}
