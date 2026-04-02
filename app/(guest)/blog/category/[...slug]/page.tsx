import { BLOG_POSTS } from "@/constants/blog";
import { BlogListContent } from "@/components/features/blog/BlogListContent";

type Props = { params: Promise<{ slug: string[] }> };

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const mainCategory = slug[slug.length - 1];

  const filtered = BLOG_POSTS.filter((post) =>
    post.category.some(
      (c) => c.toLowerCase() === mainCategory.toLowerCase()
    )
  );

  return (
    <>
      <BlogListContent posts={filtered} />
    </>
  );
}