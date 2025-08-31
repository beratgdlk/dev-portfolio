"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "../types";
import BlogCard from "./BlogCard";

interface BlogSectionProps {
  posts: BlogPost[];
  showAll?: boolean;
}

export default function BlogSection({ posts, showAll = false }: BlogSectionProps) {
  const displayPosts = showAll ? posts : posts.slice(0, 4);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Blog Yazıları</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teknoloji, geliştirme süreçleri ve deneyimlerim hakkında yazdığım makaleler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {displayPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {!showAll && posts.length > 4 && (
          <div className="text-center">
            <Button variant="outline" size="lg">
              Tüm Yazıları Gör
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
