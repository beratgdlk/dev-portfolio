"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="w-full py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto">
        {/* Sosyal İkonlar */}
                 <div className="flex justify-center space-x-8 mb-4">
                    <a 
            href="mailto:berat@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          
          <a 
            href="https://github.com/beratgdlk"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          
          <a 
            href="https://linkedin.com/in/beratgdlk"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          
          <a 
            href="/resume.pdf"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="Download CV"
          >
            <Download className="h-6 w-6" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-base text-muted-foreground">
          {t.copyright.replace('{year}', new Date().getFullYear().toString())}
        </div>
      </div>
    </footer>
  );
}
