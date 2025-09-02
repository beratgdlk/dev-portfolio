"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { ProjectData } from "../types";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: ProjectData[];
  className?: string;
  showFeaturedFirst?: boolean;
}

export default function ProjectGrid({ 
  projects, 
  className,
  showFeaturedFirst = true 
}: ProjectGridProps) {
  console.log(`🎯 ProjectGrid render edildi. ${projects.length} proje var:`, projects);
  
  // Projeleri sırala - en son commit atılanlar önce
  const sortedProjects = React.useMemo(() => {
    return [...projects].sort((a, b) => {
      // Eğer showFeaturedFirst true ise, featured olanlar önce
      if (showFeaturedFirst) {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
      }
      
      // Son commit tarihine göre sırala (pushed_at varsa onu kullan, yoksa updated_at)
      const aTime = a.pushedAt ? new Date(a.pushedAt).getTime() : new Date(a.updatedAt || a.date).getTime();
      const bTime = b.pushedAt ? new Date(b.pushedAt).getTime() : new Date(b.updatedAt || b.date).getTime();
      
      return bTime - aTime; // Yeni olanlar önce
    });
  }, [projects, showFeaturedFirst]);

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold mb-2">
            Henüz Proje Yok
          </h3>
          <p className="text-muted-foreground">
            Yakında harika projeler burada görünecek!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Responsive Grid Layout */}
      <div className={cn(
        // Mobil: 1 kolon
        "grid grid-cols-1 gap-6",
        // Tablet: 2 kolon (md breakpoint)
        "md:grid-cols-2 md:gap-8",
        // Desktop: 3 kolon (lg breakpoint)
        "lg:grid-cols-3 lg:gap-10",
        // Auto-fit for very large screens
        "2xl:grid-cols-3"
      )}>
        {sortedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            className={cn(
              // Animasyon gecikmesi için staggered loading effect
              "animate-in fade-in slide-in-from-bottom-4 duration-500",
              // Her kart için farklı gecikme
              index === 0 && "delay-0",
              index === 1 && "delay-100",
              index === 2 && "delay-200",
              index === 3 && "delay-300",
              index === 4 && "delay-400",
              index >= 5 && "delay-500",
              // Öne çıkan projeler için özel stil
              project.featured && "ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
            )}
          />
        ))}
      </div>
      
      {/* Grid istatistikleri */}
      {projects.length > 0 && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Toplam <strong>{projects.length}</strong> proje
            {projects.some(p => p.featured) && (
              <span> • <strong>{projects.filter(p => p.featured).length}</strong> öne çıkan</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
