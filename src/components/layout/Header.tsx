"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex mx-auto max-w-6xl h-16 items-center justify-between">
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

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <Button variant="default" size="sm">
              İletişime Geç
            </Button>
          </div>
      </div>
    </header>
  );
}
