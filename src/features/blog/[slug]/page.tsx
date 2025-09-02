"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { notFound } from "next/navigation";
import BlogDetail from "../components/BlogDetail";
import { blogPosts } from "../data";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <BlogDetail post={post} />
      </main>
      <Footer />
    </div>
  );
}
