import Link from "next/link"

export default function NavigationLinks() {
  return (
    <div className='flex text-[--dark-bg] bg-[--light-bg] dark:bg-[--dark-bg] dark:text-[--light-bg] flex-col items-center justify-between '>
        <div className="w-50 border border-[--dark-bg] dark:border-[--light-bg] rounded-3xl flex flex-row justify-evenly items-center">
            <Link className="w-24 text-center font-semibold hover:bg-[color:var(--primary-color)] hover:text-[--dark-bg] focus:bg-[--primary-color] rounded-l-3xl transition px-4 py-2" href={"/tools"}>Tools</Link>
            <Link className="w-24 text-center font-semibold hover:bg-[color:var(--primary-color)] hover:text-[--dark-bg] focus:bg-[--primary-color] transition px-4 py-2" href={"/prompts"}>Prompts</Link>
            <Link className="w-24 text-center font-semibold hover:bg-[color:var(--primary-color)] hover:text-[--dark-bg] focus:bg-[--primary-color] rounded-r-3xl transition px-4 py-2" href={"/datasets"}>Datasets</Link>
        </div>
    </div>
  )
}
