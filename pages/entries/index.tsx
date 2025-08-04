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

export default function BlogPost({ entries }: any) {
  const size = useSize()

  return (
    <main
      className='h-full w-full flex flex-col justify-start items-center  overflow-scroll'>
      <section
        className='h-fit flex flex-col justify-start items-start py-12 gap-10'
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
        <div className='w-full h-fit flex flex-col gap-6'>
          {
            entries.map((entry: any) => {
              return <div className='h-fit flex flex-row w-full justify-between gap-4'>
                <div className='w-full h-fit flex flex-row gap-4'>
                  <p className='min-w-fit font-extralight'
                    style={{
                      color: "#898989"
                    }}>[{entry.date}]</p>
                  <a href={'/entries/' + entry.title}>
                    <p className='min-w-fit hover:underline'
                      style={{
                        color: "#0a0a0a"
                      }}>{entry.title}</p>
                  </a>
                </div>
                <div>
                  {
                    entry.authors.map((author: any) => {
                      return <p className='min-w-fit font-extralight'
                        style={{
                          color: "#898989"
                        }}>{author.name}</p>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>
      </section>
    </main >
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugs = getPostSlugs().map(slug => slug.replace(/\.mdx$/, ''));
  const entries = []
  for (let i = 0; i < slugs.length; i++) {
    const { frontmatter } = await getPostSerialized(slugs[i] as string);
    entries.push(frontmatter)
  }
  return {
    props: {
      entries,
    },
  };
};