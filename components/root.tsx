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

  return <main className="relative h-full w-full flex flex-col justify-start items-center z-0 gap-5 overflow-y-scroll pt-40 pb-20">
    <div className="relative flex flex-col h-fit w-full justify-start items-center">
      <img src="/self.png" className="opacity-0 w-[100px] h-[100px] animate-[appear-logo_0.4s_ease-in-out_forwards] [animation-delay:0.5s]" />
    </div>
    <div className="w-full flex flex-col opacity-0 px-4 md:px-56  animate-[appear_0.4s_ease-in-out_forwards] [animation-delay:0.7s]">
      <Badge
        bg="#ffa719"
        style={{ color: "#7a500d", width: "fit-content", fontSize: "16px", fontWeight: "200", marginBlock: "20px", alignSelf: "center" }}
        translucent={true}>
        implemented research
      </Badge>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </div>
  </main >
}