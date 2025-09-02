"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HomePage from "./index";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
