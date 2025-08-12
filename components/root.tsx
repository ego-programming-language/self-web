import { MDXComponents } from "@/pages/entries";
import { useSize } from "./hooks/useSize";
import { MDXRemote } from "next-mdx-remote";
import { Badge } from "./vultui/Badge";

export function Root({ mdxSource }: any) {
  const size = useSize()
  const sizes = {
    "s": 0.3,
    "m": 0.6,
    "l": 1,
  }

  return <main className="relative h-full w-full flex flex-col justify-start items-center z-0 gap-14 overflow-y-scroll">
    <div className="relative flex flex-col h-fit w-full justify-start items-center pt-40">
      <img src="/self.png" className="opacity-0 w-[100px] h-[100px] animate-[appear_0.4s_ease-in-out_forwards] [animation-delay:0.5s]" />
      <Badge
        bg="#ffa719"
        style={{ color: "#7a500d", fontSize: "16px", fontWeight: "200", marginTop: "20px" }}
        translucent={true}>
        implemented research
      </Badge>
    </div>
    <div className="flex flex-col px-52">
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </div>
  </main >
}