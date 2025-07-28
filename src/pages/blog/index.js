import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const markdown = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data: frontmatter } = matter(markdown);

    return { slug, frontmatter };
  });

  return {
    props: { posts },
  };
}

export default function BlogIndex({ posts }) {
  const { locale } = useRouter();

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Blog</h2>
      <div className="grid gap-6">
        {posts.map(({ slug, frontmatter }) => (
          <Link
            key={slug}
            href={`/${locale}/blog/${slug}`}
            className="block bg-gray-100 dark:bg-gray-800 p-6 rounded shadow"
          >
            <h3 className="text-xl font-semibold">{frontmatter.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{frontmatter.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
