"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutPage from "./index";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
