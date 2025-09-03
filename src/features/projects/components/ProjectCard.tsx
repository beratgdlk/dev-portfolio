"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, Clock, GitFork, Github, Pin, Star } from "lucide-react";
import Image from "next/image";
import { ProjectData } from "../types";
import { getLanguageStyle } from "../utils/githubColors";
import { getTechEmoji, getTechIconUrl } from "../utils/techIcons";

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

// Teknoloji ikon komponenti
const TechIcon = ({ tech, size = 16 }: { tech: string; size?: number }) => {
  const iconUrl = getTechIconUrl(tech);
  const fallbackEmoji = getTechEmoji(tech);
  
  if (iconUrl) {
    return (
      <img 
        src={iconUrl}
        alt={`${tech} icon`}
        width={size}
        height={size}
        className="flex-shrink-0"
        onError={(e) => {
          // Eğer ikon yüklenemezse emoji göster
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('hidden');
        }}
      />
    );
  }
  
  return <span className="text-sm">{fallbackEmoji}</span>;
};

// Durum rozetleri kaldırıldı; renk ve metin yardımcıları artık kullanılmıyor.

// Göreceli zaman hesaplama
const getRelativeTime = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  
  if (diffDays > 30) {
    return date.toLocaleDateString('tr-TR', { month: 'short', day: 'numeric' });
  } else if (diffDays > 0) {
    return `${diffDays} gün önce`;
  } else if (diffHours > 0) {
    return `${diffHours} saat önce`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} dk önce`;
  } else {
    return 'Az önce';
  }
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={cn(
      "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 backdrop-blur-sm",
      "h-full flex flex-col relative",
      // Featured projects için ring efekti
      project.featured && "ring-2 ring-primary/20 ring-offset-2 ring-offset-background",
      className
    )}>
      {/* Global pinned badge - always visible (even without image) */}
      {project.isPinned && (
        <div className="absolute top-3 right-3 z-10">
          <div className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground/90 h-7 w-7 shadow-sm ring-1 ring-primary/40">
            <Pin className="h-4 w-4" />
          </div>
        </div>
      )}
      {/* Header with Image */}
      {project.image && (
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}


      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </CardTitle>
        
        {/* Date and Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            {/* Created Date */}
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{project.date}</span>
            </div>
            
            {/* Last Update */}
            {project.pushedAt && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span title={`Son güncelleme: ${new Date(project.pushedAt).toLocaleDateString('tr-TR')}`}>
                  {getRelativeTime(project.pushedAt)}
                </span>
              </div>
            )}
          </div>
          
          {/* Stars and Forks */}
          <div className="flex items-center gap-2">
            {project.starCount !== undefined && project.starCount > 0 && (
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3" />
                <span>{project.starCount}</span>
              </div>
            )}
            {project.forkCount !== undefined && project.forkCount > 0 && (
              <div className="flex items-center gap-1">
                <GitFork className="h-3 w-3" />
                <span>{project.forkCount}</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Primary Language */}
        {project.language && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Ana Dil</h4>
            <Badge 
              className="text-xs font-semibold flex items-center gap-1.5 border-0"
              style={getLanguageStyle(project.language)}
            >
              <TechIcon tech={project.language} size={14} />
              <span className="hidden">{getTechEmoji(project.language)}</span>
              {project.language}
            </Badge>
          </div>
        )}

        {/* Topics */}
        {project.topics && project.topics.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Konular</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.topics.map((topic, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-xs bg-background/50 hover:bg-secondary/50 transition-colors cursor-default"
                >
                  #{topic}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Additional Technologies (if any exist beyond topics) */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Teknolojiler</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="text-xs bg-secondary/80 hover:bg-secondary transition-colors cursor-default flex items-center gap-1.5"
                >
                  <TechIcon tech={tech} size={14} />
                  <span className="hidden">{getTechEmoji(tech)}</span>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      {/* Footer with Links */}
      {(project.liveUrl || project.githubUrl) && (
        <CardFooter className="pt-4 gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 rounded-md text-sm font-medium text-center transition-colors"
            >
              🌐 Canlı Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-3 py-1.5 rounded-md text-sm font-medium text-center transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
