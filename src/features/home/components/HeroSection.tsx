"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { HeroData } from "../types";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-6 py-12">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Ana Başlık */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi 👋 I'm <span className="text-primary">{data.name.split(' ')[0]}</span>,
            <br />
            and this is my portfolio.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
            {data.description}
          </p>
        </div>

        {/* Sosyal Linkler */}
        <div className="flex justify-center space-x-6 pt-8">
          <a 
            href="https://github.com/emreseferoglu" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </a>
          
          <a 
            href="https://linkedin.com/in/emreseferoglu" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </a>
          
          <a 
            href="mailto:emre@example.com" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            Email
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
