"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useLanguage } from "@/hooks";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  // Blog coming soon sayfası

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <ComingSoonCard />
      </main>
      <Footer />
    </div>
  );
}

function ComingSoonCard() {
  const { t } = useLanguage();
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          {t.blogTitle}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t.blogDescription}
        </p>
      </div>

      <div className="border rounded-xl overflow-hidden bg-muted/5">
        {/* Header with icon background */}
        <div className="relative h-28 md:h-32 bg-gradient-to-r from-primary/15 via-primary/10 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <Mail className="h-12 w-12 md:h-14 md:w-14 text-primary/60" />
          </div>
        </div>

        {/* Body */}
        <div className="p-8 md:p-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">{t.blogComingSoonTitle}</h2>
          <p className="text-muted-foreground mb-6">{t.blogComingSoonDescription}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="mailto:beratgdlk@gmail.com?subject=%5B%20%22+${encodeURIComponent(t.emailSubject)}+%22%5D&body=${encodeURIComponent(t.emailBody)}" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
              <Mail className="h-4 w-4" />
              {t.notifyByEmail}
            </Link>
            <Link href="/" className="inline-flex items-center justify-center px-4 py-2 rounded-md border hover:bg-accent/40">
              {t.backToHome}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { default as BlogDetail } from "./components/BlogDetail";
export type { BlogPost } from "./types";

