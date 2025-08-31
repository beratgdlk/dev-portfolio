import Header from "@/components/layout/Header";
import Hero from "@/features/hero";
import Blog from "@/features/blog";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Blog />
      </main>
    </div>
  );
}