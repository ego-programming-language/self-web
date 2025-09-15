import { MDXComponents } from "@/pages/entries";
import { useSize } from "./hooks/useSize";
import { MDXRemote } from "next-mdx-remote";
import { Badge } from "./vultui/Badge";
import { grotesk } from "@/pages/_app";
import { c, colors } from "@/theme";
import { useState } from "react";

export function Root() {
  const size = useSize()
  const sizes = {
    "s": 0.3,
    "m": 0.6,
    "l": 1,
  }
  const [downloadHover, setDownloadHover] = useState(false)

  const files = ["arm64_darwin_self", "x86_64_linux_self", "x86_64_windows_self.exe"]

  return <main className="relative h-full w-full flex flex-col justify-center items-center z-0 gap-5 overflow-y-scroll">
    <img src="/self.png" className="h-[100px] opacity-0 animate-[appear-logo_0.4s_ease-in-out_forwards] [animation-delay:0.3s]" />
    <div className="flex flex-col justify-center items-center h-fit opacity-0 animate-[appear_0.5s_ease-in-out_forwards] [animation-delay:0.5s]">
      <h1 className={"text-center text-6xl font-[300] " + grotesk.className}>the AI native <br /> virtual machine</h1>
      <div className="flex flex-row gap-3 mt-5">
        <Badge
          bg={colors.secondary}
          color={colors.background}
          style={{ cursor: "pointer", position: "relative", overflow: "visible", color: "#ffffffcc", justifyContent: "center", alignItems: "center" }}
          onMouseEnter={() => setDownloadHover(true)}
          onMouseLeave={() => setDownloadHover(false)}
        >
          download*
          {downloadHover && <div
            style={{
              transformOrigin: "top left"
            }}
            className="absolute top-[100%] left-1/2 transform-[translateX(-50%)] flex items-center animate-[appear-with-scale_0.1s_ease-in-out_forwards] pt-3">
            <div
              className="flex flex-col whitespace-nowrap relative px-3 py-3 rounded-md gap-2 text-center"
              style={{
                fontSize: c.xs.fontSize,
                backgroundColor: colors.secondary,
                color: colors.background
              }}
            >
              <p
                className="underline"
                style={{
                  fontSize: c.xs.fontSize,
                  backgroundColor: colors.secondary,
                  color: colors.background
                }}
              >experimental releases</p>
              <span
                className="absolute  left-1/2 transform-[translateX(-50%)] bottom-full w-0 h-0
                 border-l-4 border-r-4 border-b-4
                 border-l-transparent border-r-transparent"
                style={{
                  borderBottomColor: colors.secondary
                }}
              />

              {files.map(f => {
                return <a
                  href={"/downloads/" + f}
                  target="_blank"
                  className="w-full opacity-75 px-2 hover:underline"
                >{f}</a>
              })}
            </div>
          </div>}
        </Badge>
        <Badge
        >
          <a
            href="/manifesto"
          >philosophy</a>
        </Badge>
      </div>
    </div>
  </main >
}