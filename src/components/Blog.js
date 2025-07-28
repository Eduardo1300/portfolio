import { useTranslation } from "next-i18next";
import Link from "next/link";

const posts = [
  { titleKey: "blog_post_1", slug: "crud-react-springboot" },
  { titleKey: "blog_post_2", slug: "consejos-practicos-dev" },
];

const Blog = () => {
  const { t } = useTranslation("common");

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center">{t("ultimos_articulos")}</h2>
      <div className="max-w-3xl mx-auto grid gap-6">
        {posts.map((post, i) => (
          <Link
            key={i}
            href={`/blog/${post.slug}`}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold">{t(post.titleKey)}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
