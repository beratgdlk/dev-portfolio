import HeroSection from "./components/HeroSection";
import BlogSection from "./components/BlogSection";
import { heroData, blogPosts } from "./data";

export default function HomePage() {
  return (
    <>
      <HeroSection data={heroData} />
      <BlogSection posts={blogPosts} />
    </>
  );
}

export { HeroSection, BlogSection };
export type { HeroData, BlogPost } from "./types";