"use client";

import { useEffect, useState } from 'react';
import {
  fetchGitHubRepositoriesGraphQL,
  filterAndSortGraphQLRepos,
  GitHubGraphQLError,
  mapGraphQLRepoToProject
} from '../services/githubGraphQL';
import { ProjectData } from '../types';

export interface UseGitHubProjectsGraphQLResult {
  pinnedProjects: ProjectData[];
  otherProjects: ProjectData[];
  allProjects: ProjectData[];
  loading: boolean;
  error: GitHubGraphQLError | null;
  refetch: () => Promise<void>;
  showingAll: boolean;
  toggleShowAll: () => void;
}

export function useGitHubProjectsGraphQL(username: string): UseGitHubProjectsGraphQLResult {
  const [pinnedProjects, setPinnedProjects] = useState<ProjectData[]>([]);
  const [otherProjects, setOtherProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<GitHubGraphQLError | null>(null);
  const [showingAll, setShowingAll] = useState<boolean>(false);

  const fetchProjects = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      console.log(`🔄 GraphQL ile ${username} kullanıcısının projelerini çekiliyor...`);
      
      // İlk 100 repo çek (genelde yeterli olur)
      const response = await fetchGitHubRepositoriesGraphQL(username, 100);
      
      console.log(`✅ GraphQL'den veri geldi:`, {
        pinnedCount: response.user.pinnedItems.nodes.length,
        repoCount: response.user.repositories.nodes.length
      });

      // Pinned ve normal repoları filtrele/sırala
      const { pinned, others } = filterAndSortGraphQLRepos(
        response.user.repositories.nodes,
        response.user.pinnedItems.nodes
      );

      console.log(`🔧 Filtrelendi:`, {
        pinned: pinned.length,
        others: others.length
      });

      // ProjectData formatına çevir
      const mappedPinned = pinned.map(repo => mapGraphQLRepoToProject(repo, true));
      const mappedOthers = others.map(repo => mapGraphQLRepoToProject(repo, false));

      console.log(`📦 Projeler hazırlandı:`, {
        pinnedProjects: mappedPinned.length,
        otherProjects: mappedOthers.length,
        pinnedNames: mappedPinned.map(p => p.title),
        latestOthers: mappedOthers.slice(0, 5).map(p => `${p.title} (${new Date(p.pushedAt!).toLocaleDateString()})`)
      });

      setPinnedProjects(mappedPinned);
      setOtherProjects(mappedOthers);

    } catch (err) {
      console.error('❌ GraphQL projeleri çekerken hata:', err);

      // TEMP: Fallback test data
      console.log('🔧 FALLBACK: GraphQL test projelerini gösteriliyor...');
      const testPinnedProjects: ProjectData[] = [
        {
          id: 'test-pinned-1',
          repoName: 'dev-portfolio',
          title: 'Pinned Test Project',
          description: 'Bu pinned bir test projesidir. GraphQL token ayarlandığında gerçek veriler gelecek.',
          technologies: ['graphql', 'test'],
          language: 'TypeScript',
          topics: ['pinned', 'featured'],
          githubUrl: 'https://github.com/beratgdlk',
          featured: true,
          isPinned: true,
          status: 'completed',
          date: 'Test Tarihi',
          starCount: 10,
          forkCount: 3
        }
      ];

      const testOtherProjects: ProjectData[] = [
        {
          id: 'test-other-1',
          title: 'Other Test Project 2025',
          description: 'Bu 2025 repo test projesidir. GraphQL ile en üstte görünmesi gerekiyor.',
          technologies: ['test', '2025'],
          language: 'JavaScript',
          topics: ['recent', 'test'],
          githubUrl: 'https://github.com/beratgdlk',
          featured: false,
          isPinned: false,
          status: 'in-progress',
          date: 'Test Tarihi',
          pushedAt: '2025-01-01T00:00:00Z',
          starCount: 1,
          forkCount: 0
        }
      ];

      setPinnedProjects(testPinnedProjects);
      setOtherProjects(testOtherProjects);

      if (err instanceof GitHubGraphQLError) {
        setError(err);
      } else {
        setError(new GitHubGraphQLError(
          'GraphQL isteği başarısız oldu',
          0
        ));
      }
      
      console.log('🎯 Test projeleri (GraphQL) state\'e set edildi!');
    } finally {
      setLoading(false);
    }
  };

  const refetch = async (): Promise<void> => {
    await fetchProjects();
  };

  const toggleShowAll = () => {
    setShowingAll(prev => !prev);
  };

  // Tüm projeler (pinned + others)
  const allProjects = [...pinnedProjects, ...otherProjects];

  useEffect(() => {
    if (username) {
      fetchProjects();
    }
  }, [username]);

  return {
    pinnedProjects,
    otherProjects,
    allProjects,
    loading,
    error,
    refetch,
    showingAll,
    toggleShowAll
  };
}

export function getGraphQLErrorMessage(error: GitHubGraphQLError): string {
  switch (error.status) {
    case 401:
      return 'GitHub token geçersiz veya eksik. Lütfen .env.local dosyasını kontrol edin.';
    case 403:
      return 'GitHub API rate limit aşıldı. Lütfen birkaç dakika bekleyin.';
    case 404:
      return 'Kullanıcı bulunamadı. GitHub kullanıcı adını kontrol edin.';
    case 0:
      return 'İnternet bağlantınızı kontrol edin.';
    default:
      return error.message || 'GitHub GraphQL API\'den veri çekilirken bilinmeyen bir hata oluştu.';
  }
}
