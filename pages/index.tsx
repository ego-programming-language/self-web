import { Root } from "@/components/root";
import { getPostSerialized } from "@/lib/mdx";
import { GetStaticProps } from "next";

export default function RooPage(props: any) {
  return <Root {...props} />
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
