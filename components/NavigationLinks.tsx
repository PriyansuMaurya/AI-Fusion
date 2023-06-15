import Link from "next/link"

export default function NavigationLinks() {
  return (
    <div className='flex bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-col items-center justify-between '>
        <div className="w-50 border rounded-3xl flex flex-row justify-evenly items-center">
            <Link className="hover:bg-[color:var(--primary-color)] hover:text-[--dark-bg] rounded-l-3xl transition px-4 py-2" href={"/tools"}>Tools</Link>
            <Link className="hover:bg-[color:var(--primary-color)] hover:text-[--dark-bg] transition px-4 py-2" href={"/prompts"}>Prompts</Link>
            <Link className="hover:bg-[color:var(--primary-color)] hover:text-[--dark-bg] rounded-r-3xl transition px-4 py-2" href={"/datasets"}>Datasets</Link>
        </div>
    </div>
  )
}
