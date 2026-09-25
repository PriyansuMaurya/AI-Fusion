import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import datasets from "../database/datasets.json";
import prompts from "../database/prompts.json";
import tools from "../database/tools.json";

const resourceGroups = [
  {
    label: "Tools",
    href: "/tools",
    count: tools.length,
    description: "Products and services for building, making, and shipping.",
  },
  {
    label: "Prompts",
    href: "/prompts",
    count: prompts.length,
    description: "Reusable starting points for clearer, better conversations.",
  },
  {
    label: "Datasets",
    href: "/datasets",
    count: datasets.length,
    description: "Public data sources for research, experiments, and models.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col px-5 pb-20 pt-6 text-[--ink] sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
      <section className="grid items-start gap-14 pb-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,.6fr)] lg:gap-16 lg:pb-24">
        <div className="animate-rise flex flex-col gap-8">
          <p className="eyebrow">A considered collection for curious builders</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[.94] tracking-[-.07em] sm:text-7xl lg:text-[6.8rem]">
            Better inputs.
            <br />
            <span className="accent-mark">Better outputs.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[--muted] sm:text-xl">
            Find the tools, prompts, and datasets that make your next idea easier to start and sharper to finish.
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Link href="/tools" className="button-arrow">
              Explore the library <FiArrowUpRight aria-hidden="true" />
            </Link>
            <span className="text-xs font-medium uppercase tracking-[.16em] text-[--muted]">Open source / 2024</span>
          </div>
        </div>

        <aside className="border-t border-[--line] pt-5 lg:border-l lg:border-t-0 lg:pb-2 lg:pl-10 lg:pt-0" aria-label="Library overview">
          <p className="eyebrow">The library at a glance</p>
          <div className="mt-8 divide-y divide-[--line] border-y border-[--line]">
            {resourceGroups.map((resource) => (
              <div key={resource.label} className="flex items-baseline justify-between gap-5 py-4">
                <span className="text-sm text-[--muted]">{resource.label}</span>
                <span className="text-3xl font-semibold tracking-[-.05em]">{resource.count.toString().padStart(2, "0")}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[--muted]">
            Curated links, practical starting points, and useful places to look next.
          </p>
        </aside>
      </section>

      <section className="border-t border-[--line] pt-8" aria-labelledby="browse-heading">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Start somewhere</p>
            <h2 id="browse-heading" className="mt-2 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">Browse by need</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[--muted]">Three focused shelves. One less tab to search for.</p>
        </div>

        <div className="mt-10 grid border-y border-[--line] md:grid-cols-3 md:divide-x md:divide-[--line]">
          {resourceGroups.map((resource) => (
            <Link
              key={resource.label}
              href={resource.href}
              className="group flex min-h-48 flex-col justify-between border-b border-[--line] p-5 transition-colors hover:bg-[--surface] md:border-b-0 md:p-7"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-2xl font-semibold tracking-[-.04em]">{resource.label}</span>
                <FiArrowUpRight aria-hidden="true" className="text-xl text-[--muted] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div>
                <p className="max-w-xs text-sm leading-relaxed text-[--muted]">{resource.description}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-[--muted]">{resource.count} resources</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

