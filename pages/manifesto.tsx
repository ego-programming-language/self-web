import { useSize } from "@/components/hooks/useSize";
import { Badge } from "@/components/vultui/Badge";
import { getPostSerialized } from "@/lib/mdx";
import { MDXComponents } from "@/pages/entries";
import { GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { jetbrains } from "./_app";

export default function Page({ mdxSource }: any) {
  const size = useSize()
  const sizes = {
    "s": 0.3,
    "m": 0.6,
    "l": 1,
  }

  return <main className={"relative h-full w-full flex flex-col justify-start items-center z-0 gap-5 overflow-y-scroll pt-40 pb-20 " + jetbrains.className}>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const serialized = await getPostSerialized("self.mdx" as string);
  if (!serialized) return { props: {} }
  const { mdxSource, frontmatter } = serialized
  return {
    props: {
      mdxSource,
      frontmatter,
    },
  };
};
