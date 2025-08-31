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
      <div className="container mx-auto max-w-6xl">
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                <img
                  src="https://avatars.githubusercontent.com/u/157003672?v=4"
                  alt="Profile"
                  className="rounded-full"
                  width={190}
                  height={190}
                />
              </div>

              <div className="space-y-3 text-center md:text-left">
                <h1 className="text-4xl md:text-3xl font-bold">{data.name}</h1>
                <Badge variant="secondary" className="text-lg px-6 py-2">
                  {data.title}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button size="lg" className="w-full sm:w-auto">
                  <Mail className="mr-2 h-4 w-4" />
                  İletişime Geç
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  CV İndir
                </Button>
              </div>

              <div className="flex justify-center md:justify-start space-x-4">
                <Button variant="ghost" size="icon">
                  <Github className="h-7   w-7  " />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-7   w-7  " />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-105 transition-all duration-200">
                  <Mail className="h-7   w-7  " />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Hakkımda</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.description}
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Uzmanlık Alanlarım</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
