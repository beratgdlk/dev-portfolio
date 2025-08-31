import BlogSection from "./components/BlogSection";
import { blogPosts } from "./data";

export default function Blog() {
  return <BlogSection posts={blogPosts} />;
}

export { BlogSection } from "./components/BlogSection";
export { default as BlogCard } from "./components/BlogCard";
export type { BlogPost } from "./types";
