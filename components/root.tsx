import { MDXComponents } from "@/pages/entries";
import { useSize } from "./hooks/useSize";
import { MDXRemote } from "next-mdx-remote";

export function Root({ mdxSource }: any) {
  const size = useSize()
  const sizes = {
    "s": 0.3,
    "m": 0.6,
    "l": 1,
  }

  return <main className="relative h-full w-full flex flex-col justify-center items-center z-0 gap-3 overflow-y-scroll">
    <div className="relative flex flex-col h-[100vh] w-full justify-center items-center">
      <img src="/self.png" className="opacity-0 w-[100px] h-[100px] animate-[appear_0.4s_ease-in-out_forwards] [animation-delay:0.5s]" />
    </div>
  </main >
}