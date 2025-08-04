import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getPostSlugs, getPostSerialized } from '../../lib/mdx';
import { sized, useSize } from '@/components/hooks/useSize';
import Link from 'next/link';

export const MDXComponents = {
  //h1: (props: any) => <h1 style={{ color: 'tomato', fontSize: '3rem' }} {...props} />,
  p: (props: any) => <p style={{ fontWeight: "normal" }}{...props} />,
  //code: (props: any) => <code style={{ background: '#eee', padding: '2px 4px' }} {...props} />,
  //ul: (props: any) => <ul style={{ listStyle: 'square inside' }} {...props} />,
};

export default function BlogPost({ mdxSource, frontmatter }: any) {
  const size = useSize()

  return (
    <main
      className='h-full w-full flex flex-col justify-start items-center'>
      <section
        className='h-full flex flex-col justify-start items-start py-12 gap-10'
        style={{
          width: sized(size, "100%", "650px", "650px"),
          paddingInline: sized(size, "30px", "0px", "0px")
        }}
      >
        <Link href={"/"}>
          <p
            className='hover:underline'
            style={{
              color: "#0a0a0a"
            }}
          >&lt; back</p>
        </Link>
        <div className='w-full flex flex-row justify-between items-start'>
          <div className='flex flex-col'>
            <p className='font-light'>THE CREAT0RS BLOG</p>
            <p className='font-light'>category: {frontmatter.category}</p>
          </div>
          <div className='flex flex-col items-end'>
            {
              frontmatter.authors.map((author: any) => {
                return <p className='font-light'>{author.name}</p>
              })
            }
            <p className='font-light'>{frontmatter.date}</p>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <p className='font-light'>{frontmatter.title}</p>
        </div>
        <article className='w-full'>
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
      </section>
    </main >
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs().map(slug => slug.replace(/\.mdx$/, ''));
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { mdxSource, frontmatter } = await getPostSerialized(params?.slug as string);
  return {
    props: {
      mdxSource,
      frontmatter,
    },
  };
};
