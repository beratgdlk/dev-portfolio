"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { ProjectGrid, ProjectsError, ProjectsLoading } from "./components";
import { useGitHubProjectsGraphQL } from "./hooks/useGitHubProjectsGraphQL";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [isRetrying, setIsRetrying] = useState(false);
  
  // GitHub GraphQL API'den projeleri çek
  const { 
    pinnedProjects, 
    otherProjects, 
    allProjects, 
    loading, 
    error, 
    refetch,
    showingAll,
    toggleShowAll 
  } = useGitHubProjectsGraphQL('beratgdlk');

  // Retry fonksiyonu
  const handleRetry = async () => {
    setIsRetrying(true);
    await refetch();
    setIsRetrying(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {t.projects}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.projectsDescription}
            </p>
          </div>

          {/* Content based on state */}
          {loading && <ProjectsLoading />}

          {error && !loading && (
            <>
              {error.status === 401 ? (
                // Token setup error component
                <div className="max-w-2xl mx-auto text-center space-y-6 p-8 border border-yellow-200 bg-yellow-50 dark:bg-yellow-950 dark:border-yellow-800 rounded-lg">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">
                      🔑 GitHub API Hatası
                    </h2>
                  </div>
                  
                  

                  <Button onClick={handleRetry} disabled={isRetrying} className="w-full">
                    {isRetrying ? "Tekrar Kontrol Ediliyor..." : "Token'ı Ekledim, Tekrar Dene"}
                  </Button>
                </div>
              ) : (
                <ProjectsError
                  error={error}
                  onRetry={handleRetry}
                  isRetrying={isRetrying}
                />
              )}
            </>
          )}

          {!loading && !error && (
            <div className="space-y-8">
              {/* Pinned Projects */}
              {pinnedProjects.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 justify-center">
                    <h2 className="text-2xl font-bold">{t.featuredProjectsTitle}</h2>
                  </div>
                  <ProjectGrid 
                    projects={pinnedProjects} 
                    showFeaturedFirst={false}
                    className="mb-8"
                  />
                </div>
              )}

              {/* Other Projects */}
              {otherProjects.length > 0 && (
                <div className="space-y-6">
                  {pinnedProjects.length > 0 && (
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-4">{t.otherProjectsTitle}</h2>
                      <p className="text-muted-foreground">
                        {t.otherProjectsSubtitle.replace('{count}', String(otherProjects.length))}
                      </p>
                    </div>
                  )}
                  
                  <ProjectGrid 
                    projects={showingAll ? otherProjects : otherProjects.slice(0, 6)} 
                    showFeaturedFirst={false}
                  />

                  {/* Show More/Less Button */}
                  {otherProjects.length > 6 && (
                    <div className="text-center pt-8">
                      <Button
                        onClick={toggleShowAll}
                        variant="outline"
                        size="lg"
                        className="group"
                      >
                        {showingAll ? (
                          <>
                            <ChevronUp className="mr-2 h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                            {t.showLess}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                            {otherProjects.length > 6 ? t.showAllMore.replace('{count}', String(otherProjects.length - 6)) : t.showAll}
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Empty State */}
              {allProjects.length === 0 && (
                <div className="text-center py-12">
                  <h2 className="text-xl font-semibold mb-2">{t.noProjectsFound}</h2>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export type { ProjectData } from "./types";

