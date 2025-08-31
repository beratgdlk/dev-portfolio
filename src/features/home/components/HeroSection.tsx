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
  SiJavascript,
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
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-sky-600 border-sky-600 bg-sky-600/10">
                    <SiReact className="h-5 w-5" /> React Native
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-neutral-900 border-neutral-900 bg-neutral-900/5">
                    <SiExpo className="h-5 w-5" /> Expo
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-sky-600 border-sky-600 bg-sky-600/10">
                    <SiReact className="h-5 w-5" /> React
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-neutral-900 border-neutral-900 bg-neutral-900/5">
                    <SiNextdotjs className="h-5 w-5" /> Next.js
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-yellow-500 border-yellow-500 bg-yellow-500/10">
                    <SiJavascript className="h-5 w-5" /> JavaScript
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-blue-600 border-blue-600 bg-blue-600/10">
                    <SiTypescript className="h-5 w-5" /> TypeScript
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-green-600 border-green-600 bg-green-600/10">
                    <SiNodedotjs className="h-5 w-5" /> Node.js
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-zinc-600 border-zinc-600 bg-zinc-600/10">
                    <SiExpress className="h-5 w-5" /> Express.js
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-emerald-600 border-emerald-600 bg-emerald-600/10">
                    <SiBun className="h-5 w-5" /> ElysiaJS
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-red-600 border-red-600 bg-red-600/10">
                    <SiNestjs className="h-5 w-5" /> NestJS
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-emerald-600 border-emerald-600 bg-emerald-600/10">
                    <SiPassport className="h-5 w-5" /> Passport.js
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-violet-600 border-violet-600 bg-violet-600/10">
                    <FiShield className="h-5 w-5" /> Better Auth
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-teal-600 border-teal-600 bg-teal-600/10">
                    <SiPrisma className="h-5 w-5" /> Prisma
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-blue-700 border-blue-700 bg-blue-700/10">
                    <SiPostgresql className="h-5 w-5" /> PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-green-600 border-green-600 bg-green-600/10">
                    <SiMongodb className="h-5 w-5" /> MongoDB
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-neutral-800 border-neutral-800 bg-neutral-800/5">
                    <FiLayout className="h-5 w-5" /> shadcn/ui
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-sky-500 border-sky-500 bg-sky-500/10">
                    <SiTailwindcss className="h-5 w-5" /> Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-pink-500 border-pink-500 bg-pink-500/10">
                    <SiSass className="h-5 w-5" /> Sass
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-orange-500 border-orange-500 bg-orange-500/10">
                    <FiGitBranch className="h-5 w-5" /> TanStack Router
                  </Badge>
                  <Badge variant="outline" className="gap-2 text-sm px-3 py-1.5 text-red-600 border-red-600 bg-red-600/10">
                    <SiRedis className="h-5 w-5" /> Redis
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
