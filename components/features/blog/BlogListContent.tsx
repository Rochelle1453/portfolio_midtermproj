"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost, BLOG_POSTS, BLOG_CATEGORIES } from "@/constants/blog";
import { useMemo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Section } from "@/components/common/Section";
import { ChevronRight, ChevronLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogListContent({ posts }: { posts: BlogPost[] }) {
    const router = useRouter();
    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState(1);

    const articlesPerPage = 3;

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const currentArticles = posts.slice(
        indexOfFirstArticle,
        indexOfLastArticle
    );

    const totalPages = Math.ceil(posts.length / articlesPerPage);

    const categoryMap = useMemo(() => {
        return Object.fromEntries(
            BLOG_CATEGORIES.map((cat) => [cat.slug, cat])
        );
    }, []);

    const years = useMemo(() => {
        return Array.from(
            new Set(BLOG_POSTS.map((p) => new Date(p.date).getFullYear()))
        ).sort((a, b) => b - a);
    }, []);

    const topCategories = useMemo(() => {
        const map: Record<string, number> = {};

        BLOG_POSTS.forEach((post) => {
            post.category.forEach((cat) => {
                map[cat] = (map[cat] || 0) + 1;
            });
        });

        return Object.entries(map)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);
    }, []);

    return (
        <Section className="space-y-12 min-h-screen">
            <SectionHeading
                icon={<MoveRight className="h-8 w-8 text-primary" />}
                title="Blog"
                description="Insights, tutorials, and thoughts on frontend development, Next.js, and building real-world projects."
            />

            <div className="space-y-8 ">
                <div>
                    <div className="flex justify-between items-center mb-4 ">
                        <h2 className="text-xl font-semibold">Top categories</h2>
                        <button
                            onClick={() => router.push("/blog")}
                            className="text-sm px-3 py-1 rounded-lg border hover:bg-muted transition"
                        >
                            See all
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {topCategories.map(([cat, count]) => {
                            const isActive = pathname.includes(cat.toLowerCase());
                            return (
                                <div
                                    key={cat}
                                    onClick={() => router.push(`/blog/category/${cat.toLowerCase()}`)}
                                    className={`group cursor-pointer rounded-xl border p-4 flex items-center gap-4 transition
                                    ${isActive
                                            ? "bg-muted shadow-md dark:shadow-sm shadow-purple-400 dark:shadow-purple-300"
                                            : "hover:bg-muted/40"
                                        }
                                    `}
                                >
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={categoryMap[cat]?.image || "/fallback.jpg"}
                                            alt={cat}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    <div>
                                        <p className="font-medium capitalize">{cat}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {count} articles
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Articles</h2>

                        <select
                            onChange={(e) => {
                                const year = e.target.value;
                                if (!year) return router.push("/blog");
                                router.push(`/blog/date/${year}`);
                            }}
                            className="text-sm px-3 py-2 rounded-lg border bg-background"
                        >
                            <option value="">All Years</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentArticles.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="h-full">
                                <div className="h-full flex flex-col rounded-2xl border overflow-hidden bg-background transition-all hover:shadow-lg hover:-translate-y-1">

                                    <div className="relative h-40 w-full shrink-0">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col flex-1 p-4 space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            {post.category.map((cat) => (
                                                <span
                                                    key={cat}
                                                    className="text-xs px-2 py-1 rounded bg-muted capitalize"
                                                >
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="font-semibold line-clamp-2">{post.title}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex justify-between text-xs text-muted-foreground pt-2 mt-auto">
                                            <span>{post.author}</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {currentArticles.length === 0 && (
                        <p className="text-center text-muted-foreground mt-10">
                            No articles found.
                        </p>
                    )}
                </div>
            </div>
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 ">
                    <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-purple-600 hover:text-white transition-colors"
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft />
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                            key={i}
                            size="sm"
                            variant={currentPage === i + 1 ? "default" : "outline"}
                            className={`transition-colors ${currentPage === i + 1
                                ? "bg-purple-500 text-white hover:bg-purple-500"
                                : "text-muted-foreground hover:bg-purple-100/50"
                                }`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </Button>
                    ))}

                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
        </Section>
    );
}