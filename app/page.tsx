"use client";
export default function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-24 px-5 pb-24 pt-12 text-[--ink] sm:px-8 lg:gap-32 lg:px-12 lg:pt-20">
      <section className="grid items-end gap-12">
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
      </section>
    </main>
  );
}

