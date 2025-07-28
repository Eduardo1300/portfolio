// src/pages/blog/[slug].js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { i18n } from "../../../next-i18next.config"; // 👈 importante para rutas localizadas

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir);

  const paths = [];

  for (const locale of i18n.locales) {
    for (const file of files) {
      const slug = file.replace(/\.mdx?$/, "");
      paths.push({
        params: { slug },
        locale, // 👈 soporta rutas en /es/ o /en/
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export default function BlogPost({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <article className="prose dark:prose-invert max-w-3xl mx-auto py-12 px-4">
        <h1>{frontMatter.title}</h1>
        <p className="text-gray-500 text-sm">{frontMatter.date}</p>
        <MDXRemote {...source} />
      </article>
    </>
  );
}
