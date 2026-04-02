export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string[];
  date: string;
  author: string;
  image: string;
};

export type BlogCategory = {
  slug: string;
  name: string;
  parent?: string;
  image: string;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "development", name: "Development", image: "/categories/development.png" },
  { slug: "ui-ux", name: "UI/UX Design", image: "/categories/ui-ux.png" },
  { slug: "performance", name: "Optimization", image: "/categories/performance.png" },
  { slug: "workflow", name: "Dev Workflow", image: "/categories/workflow.png" },
  { slug: "projects", name: "Systems & Projects", image: "/categories/project.png" },

];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and build your first app.",
    content: "Next.js is a React framework that makes it easy to build full-stack applications. It provides file-based routing, server components, and more. Whether you are coming from plain React or starting fresh, Next.js gives you the structure and tooling to ship production-ready apps with confidence.",
    category: ["development"],
    date: "2025-02-01",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    slug: "react-hooks-deep-dive",
    title: "React Hooks Deep Dive",
    excerpt: "Understanding useState, useEffect, and custom hooks.",
    content: "React Hooks changed the way we write components forever. In this post, we explore the most commonly used hooks — useState, useEffect, useRef, and useCallback — and how to build your own custom hooks for reusable, clean logic across your codebase.",
    category: ["development"],
    date: "2025-04-15",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox",
    excerpt: "When to use each layout method and why it matters.",
    content: "Both CSS Grid and Flexbox are powerful layout tools, but they solve different problems. Flexbox is best for one-dimensional layouts while Grid shines in two dimensions. This post breaks down when to reach for each one and how to combine them effectively in real projects.",
    category: ["development"],
    date: "2025-06-20",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    slug: "building-accessible-components",
    title: "Building Accessible Components",
    excerpt: "Writing inclusive UI from scratch using semantic HTML.",
    content: "Accessibility is not an afterthought — it is a core part of good frontend work. Learn how to build components that work for everyone using proper ARIA roles, labels, focus management, and keyboard navigation patterns that meet WCAG standards.",
    category: ["development", "ui-ux"],
    date: "2025-09-08",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    slug: "how-i-built-my-portfolio",
    title: "How I Built My Portfolio",
    excerpt: "Decisions, challenges, and lessons from building this site.",
    content: "Every portfolio has a story behind it. Here is a behind-the-scenes look at why I chose Next.js and Tailwind, the design decisions I made along the way, the challenges I ran into, and what I would do differently if I were starting over today.",
    category: ["projects"],
    date: "2025-11-03",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    slug: "from-figma-to-code",
    title: "From Figma to Code",
    excerpt: "My end-to-end frontend workflow from design to deployment.",
    content: "A good frontend process starts long before you open your editor. I walk through how I go from a Figma file to a fully deployed, responsive interface — covering component mapping, token systems, responsive breakpoints, and deployment steps.",
    category: ["workflow", "ui-ux"],
    date: "2025-12-18",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    slug: "improving-site-performance-score",
    title: "Improving a Site's Performance Score",
    excerpt: "How I went from 60 to 98 on Lighthouse — step by step.",
    content: "Performance is a feature. In this post, I share the exact changes I made to dramatically improve a site's Lighthouse score — from image optimization and lazy loading to font strategies, code splitting, and eliminating render-blocking resources.",
    category: ["projects", "performance"],
    date: "2026-01-05",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    slug: "my-frontend-dev-setup",
    title: "My Frontend Dev Setup",
    excerpt: "The tools, extensions, and configs I use every single day.",
    content: "A great setup makes a big difference in how fast and confidently you work. Here is everything in my current frontend environment — from VS Code extensions and themes to terminal tools, Git aliases, and the dotfiles I always bring to a new machine.",
    category: ["workflow"],
    date: "2026-01-19",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
  },
  {
    id: "9",
    slug: "minimal-design-principles",
    title: "Minimal Design Principles",
    excerpt: "Why less is more in UI and product design.",
    content: "The best interfaces get out of the user's way. This post explores the core principles of minimal design — purposeful whitespace, clear hierarchy, and intentional color — and how applying them consistently leads to cleaner, more usable, and more trustworthy products.",
    category: ["ui-ux"],
    date: "2026-02-02",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop",
  },
  {
    id: "10",
    slug: "how-i-organize-figma-files",
    title: "How I Organize Figma Files",
    excerpt: "My process before writing a single line of code.",
    content: "Jumping straight into code without a clear design plan often leads to rework and inconsistency. I share how I structure my Figma files — from page naming conventions and component libraries to auto layout usage and handoff annotations — to keep everything developer-friendly.",
    category: ["workflow", "ui-ux"],
    date: "2026-02-14",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop",
  },
  {
    id: "11",
    slug: "why-i-still-write-plain-css",
    title: "Why I Still Write Plain CSS",
    excerpt: "Cases where I prefer vanilla CSS over utility frameworks.",
    content: "Tailwind is a great tool, but it is not always the right one. There are projects where plain CSS gives me more control, better readability, and a cleaner separation of concerns. I make the case for vanilla CSS and share the situations where I always reach for it first.",
    category: ["development"],
    date: "2026-03-17",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&auto=format&fit=crop",
  },
  {
    id: "12",
    slug: "frontend-tools-im-excited-about",
    title: "Frontend Tools I'm Excited About",
    excerpt: "A look at what's shaping the frontend landscape this year.",
    content: "The frontend ecosystem moves incredibly fast. In this post I highlight the tools, frameworks, and techniques I have been closely watching — from new build tools and component libraries to AI-assisted development workflows — and why I think they are worth your attention.",
    category: ["development"],
    date: "2026-03-24",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
  },
  {
    id: "13",
    slug: "nextjs-app-router-explained",
    title: "Next.js App Router Explained",
    excerpt: "File-based routing, layouts, and server components unpacked.",
    content: "The App Router introduced a fundamentally different way of thinking about routing in Next.js. This post breaks down the key concepts — nested layouts, loading and error states, route groups, and the distinction between server and client components — in plain, practical terms.",
    category: ["development"],
    date: "2026-03-31",
    author: "Rochelle Andales",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop",
  },
];