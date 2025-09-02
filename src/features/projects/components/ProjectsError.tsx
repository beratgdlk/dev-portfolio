"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import { getGraphQLErrorMessage } from "../hooks/useGitHubProjectsGraphQL";
import { GitHubGraphQLError } from "../services/githubGraphQL";

interface ProjectsErrorProps {
  error: GitHubGraphQLError;
  onRetry: () => void;
  isRetrying?: boolean;
}

export default function ProjectsError({ error, onRetry, isRetrying = false }: ProjectsErrorProps) {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-4 text-destructive">
          Projeler Yüklenemedi
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {getGraphQLErrorMessage(error)}
        </p>
        
        <button
          onClick={onRetry}
          disabled={isRetrying}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <RefreshCw className={`h-4 w-4 ${isRetrying ? 'animate-spin' : ''}`} />
          {isRetrying ? 'Yeniden Deniyor...' : 'Tekrar Dene'}
        </button>
        
        <div className="mt-6 text-sm text-muted-foreground">
          <p>Sorun devam ederse:</p>
          <a 
            href="mailto:beratgdlk@gmail.com"
            className="text-primary hover:text-primary/80 underline"
          >
            beratgdlk@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
