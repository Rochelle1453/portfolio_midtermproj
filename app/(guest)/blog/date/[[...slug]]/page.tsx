import { BLOG_POSTS } from "@/constants/blog";
import { BlogListContent } from "@/components/features/blog/BlogListContent";

type Props = { params: Promise<{ slug?: string[] }> };

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const segments = slug || [];
  const year = segments[0];
  const month = segments[1];
  const day = segments[2];

  const filtered = BLOG_POSTS.filter((post) => {
    if (!year) return true;

    const d = new Date(post.date);

    const y = d.getFullYear().toString();
    const m = (d.getMonth() + 1).toString().padStart(2, "0");
    const da = d.getDate().toString().padStart(2, "0");

    if (day) return y === year && m === month && da === day;
    if (month) return y === year && m === month;
    return y === year;
  });

  return (
    <>
      <BlogListContent posts={filtered} />
    </>
  );
}