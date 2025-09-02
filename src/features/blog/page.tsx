"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BlogPage from "./index";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <BlogPage />
      </main>
      <Footer />
    </div>
  );
}
