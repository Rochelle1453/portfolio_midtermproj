import { BLOG_POSTS } from "@/constants/blog";
import { BlogListContent } from "@/components/features/blog/BlogListContent";

export default function BlogPage() {
  return <BlogListContent posts={BLOG_POSTS} />;
}