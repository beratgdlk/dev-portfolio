"use client";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Emre Seferoğlu</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#about" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Hakkımda
          </a>
          <a 
            href="#projects" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projeler
          </a>
          <a 
            href="#blog" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            İletişim
          </a>
        </nav>

        <Button variant="default" size="sm">
          İletişime Geç
        </Button>
      </div>
    </header>
  );
}
