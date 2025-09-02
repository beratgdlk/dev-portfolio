"use client";

import { Loader2 } from "lucide-react";

interface ProjectsLoadingProps {
  message?: string;
}

export default function ProjectsLoading({ message = "GitHub'dan projeler yükleniyor..." }: ProjectsLoadingProps) {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-6" />
        <h3 className="text-lg font-semibold mb-2">
          Lütfen Bekleyin
        </h3>
        <p className="text-muted-foreground">
          {message}
        </p>
        
        {/* Skeleton cards preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border border-border/50 rounded-xl p-6 animate-pulse">
              <div className="h-4 bg-muted rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-muted rounded w-full mb-2"></div>
              <div className="h-3 bg-muted rounded w-2/3 mb-4"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-6 bg-muted rounded-full w-16"></div>
                <div className="h-6 bg-muted rounded-full w-20"></div>
                <div className="h-6 bg-muted rounded-full w-14"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 bg-muted rounded w-20"></div>
                <div className="h-8 bg-muted rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
