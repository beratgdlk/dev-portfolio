"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { HeroData } from "../types";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpo,
  SiExpress,
  SiNestjs,
  SiPassport,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiSass,
  SiRedis,
  SiBun,
} from "react-icons/si";
import { FiShield, FiGitBranch, FiLayout } from "react-icons/fi";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="py-9 px-3">
      <div className="container mx-auto max-w-6xl">
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <div className="space-y-6 px-0">
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
                <Button variant="ghost" size="icon" className="hover:bg-blue-500 hover:scale-110 cursor-pointer transition-all duration-200 hover:shadow-md">
                  <Github className="h-7   w-7  " />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-blue-500 hover:scale-105 cursor-pointer transition-all duration-200 hover:shadow-md">
                  <Linkedin className="h-7   w-7  " />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-blue-500 hover:scale-105 cursor-pointer transition-all duration-200 hover:shadow-md">
                  <Mail className="h-7   w-7  " />
                </Button>
              </div>
            </div>

            <div className="space-y-6 px-0">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Hakkımda</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.description}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Uzmanlık Alanlarım</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="gap-1.5">
                    <SiReact className="h-4 w-4" /> React Native
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiExpo className="h-4 w-4" /> Expo
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiReact className="h-4 w-4" /> React
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiNextdotjs className="h-4 w-4" /> Next.js
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiTypescript className="h-4 w-4" /> TypeScript
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiNodedotjs className="h-4 w-4" /> Node.js
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiExpress className="h-4 w-4" /> Express.js
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiBun className="h-4 w-4" /> ElysiaJS
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiNestjs className="h-4 w-4" /> NestJS
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiPassport className="h-4 w-4" /> Passport.js
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <FiShield className="h-4 w-4" /> Better Auth
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiPrisma className="h-4 w-4" /> Prisma
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiPostgresql className="h-4 w-4" /> PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiMongodb className="h-4 w-4" /> MongoDB
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiReact className="h-4 w-4" /> shadcn/ui
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiTailwindcss className="h-4 w-4" /> Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiSass className="h-4 w-4" /> Sass
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiReact className="h-4 w-4" /> TanStack Router
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <SiRedis className="h-4 w-4" /> Redis
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
