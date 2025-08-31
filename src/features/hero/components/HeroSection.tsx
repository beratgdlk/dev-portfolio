"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { HeroData } from "../types";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12">
          <div className="text-center space-y-6">
            <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">
                {data.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">{data.name}</h1>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {data.title}
              </Badge>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                İletişime Geç
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                CV İndir
              </Button>
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
