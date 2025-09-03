/**
 * GitHub GraphQL API servisleri
 * Pinned repositories ve daha detaylı repo bilgileri için
 */

import { ProjectData } from '../types';

// GraphQL Query - Kullanıcının tüm repoları + pinned bilgisi
const GET_USER_REPOSITORIES = `
  query GetUserRepositories($login: String!, $first: Int!, $after: String) {
    user(login: $login) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            id
            name
            nameWithOwner
            description
            url
            homepageUrl
            isPrivate
            isFork
            isArchived
            primaryLanguage {
              name
              color
            }
            repositoryTopics(first: 20) {
              nodes {
                topic {
                  name
                }
              }
            }
            stargazerCount
            forkCount
            createdAt
            updatedAt
            pushedAt
            defaultBranchRef {
              target {
                ... on Commit {
                  committedDate
                  message
                  author {
                    name
                    date
                  }
                }
              }
            }
          }
        }
      }
      repositories(first: $first, after: $after, orderBy: {field: PUSHED_AT, direction: DESC}, ownerAffiliations: [OWNER]) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          nameWithOwner
          description
          url
          homepageUrl
          isPrivate
          isFork
          isArchived
          primaryLanguage {
            name
            color
          }
          repositoryTopics(first: 20) {
            nodes {
              topic {
                name
              }
            }
          }
          stargazerCount
          forkCount
          createdAt
          updatedAt
          pushedAt
          defaultBranchRef {
            target {
              ... on Commit {
                committedDate
                message
                author {
                  name
                  date
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface GitHubGraphQLRepo {
  id: string;
  name: string;
  nameWithOwner: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  isPrivate: boolean;
  isFork: boolean;
  isArchived: boolean;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  repositoryTopics: {
    nodes: Array<{
      topic: {
        name: string;
      };
    }>;
  };
  stargazerCount: number;
  forkCount: number;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  defaultBranchRef: {
    target: {
      committedDate: string;
      message: string;
      author: {
        name: string;
        date: string;
      };
    };
  } | null;
}

export interface GitHubGraphQLResponse {
  user: {
    pinnedItems: {
      nodes: GitHubGraphQLRepo[];
    };
    repositories: {
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
      nodes: GitHubGraphQLRepo[];
    };
  };
}

export class GitHubGraphQLError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = 'GitHubGraphQLError';
  }
}

/**
 * GitHub GraphQL API'den kullanıcı repolarını çeker
 */
export async function fetchGitHubRepositoriesGraphQL(
  username: string,
  first: number = 50,
  after?: string
): Promise<GitHubGraphQLResponse> { 
  try {
    console.log(`🔄 GitHub GraphQL: ${username} kullanıcısının repolarını çekiliyor...`);
    
    // İstemci doğrudan GitHub'a değil, sunucu API route'una istek atar
    const response = await fetch('/api/github', {
      method: 'POST',   
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        first,
        after
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ GitHub GraphQL API hatası:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      
      throw new GitHubGraphQLError(
        `GitHub GraphQL API hatası: ${response.status} ${response.statusText}`,
        response.status
      );
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('❌ GraphQL sorgu hataları:', data.errors);
      throw new GitHubGraphQLError(
        `GraphQL hatası: ${data.errors[0]?.message || 'Bilinmeyen hata'}`,
        400
      );
    }

    console.log(`✅ GraphQL başarılı! Pinned: ${data.data.user.pinnedItems.nodes.length}, Repos: ${data.data.user.repositories.nodes.length}`);
    
    return data.data as GitHubGraphQLResponse;

  } catch (error) {
    console.error('❌ GitHub GraphQL fetch hatası:', error);
    
    if (error instanceof GitHubGraphQLError) {
      throw error;
    }
    
    throw new GitHubGraphQLError(
      `GraphQL isteği başarısız: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`,
      0
    );
  }
}

/**
 * GraphQL Repository'yi ProjectData'ya çevirir
 */
export function mapGraphQLRepoToProject(repo: GitHubGraphQLRepo, isPinned: boolean = false): ProjectData {
  const topics = repo.repositoryTopics.nodes.map(node => node.topic.name);
  
  const getProjectStatus = (repo: GitHubGraphQLRepo): ProjectData['status'] => {
    if (repo.isArchived) return 'completed';
    
    // Son commit 30 günden eskiyse completed
    const lastPush = new Date(repo.pushedAt);
    const now = new Date();
    const daysDiff = (now.getTime() - lastPush.getTime()) / (1000 * 3600 * 24);
    
    if (daysDiff > 90) return 'completed';
    if (daysDiff > 30) return 'in-progress';
    return 'in-progress';
  };

  const formatDate = (dateString: string): string => {
    try {
      return new Date(dateString).toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Tarih bulunamadı';
    }
  };

  return {
    id: repo.nameWithOwner,
    repoName: repo.name,
    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: repo.description || 'Bu proje için açıklama eklenmemiş.',
    longDescription: repo.description || undefined,
    technologies: topics.length > 0 ? topics : [],
    language: repo.primaryLanguage?.name || undefined,
    topics: topics.length > 0 ? topics : undefined,
    image: null,
    liveUrl: repo.homepageUrl || undefined,
    githubUrl: repo.url,
    featured: repo.stargazerCount >= 5 || isPinned,
    isPinned,
    status: getProjectStatus(repo),
    date: formatDate(repo.createdAt),
    createdAt: repo.createdAt,
    updatedAt: repo.updatedAt,
    pushedAt: repo.pushedAt,
    starCount: repo.stargazerCount,
    forkCount: repo.forkCount
  };
}

/**
 * Repoları filtreler ve sıralar
 */
export function filterAndSortGraphQLRepos(
  allRepos: GitHubGraphQLRepo[],
  pinnedRepos: GitHubGraphQLRepo[]
): { pinned: GitHubGraphQLRepo[]; others: GitHubGraphQLRepo[] } {
  // Pinned repo ID'lerini al
  const pinnedIds = new Set(pinnedRepos.map(repo => repo.id));
  
  // Filtreleme kriterleri
  const filtered = allRepos.filter(repo => 
    !repo.isFork && 
    !repo.isPrivate && 
    !repo.isArchived &&
    repo.name !== repo.nameWithOwner.split('/')[0] // Profile repo hariç
  );
  
  // Pinned ve diğerlerini ayır
  const pinned = filtered.filter(repo => pinnedIds.has(repo.id));
  const others = filtered.filter(repo => !pinnedIds.has(repo.id));
  
  // Her ikisini de son commit tarihine göre sırala
  const sortByPushedAt = (a: GitHubGraphQLRepo, b: GitHubGraphQLRepo) => 
    new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime();
  
  return {
    pinned: pinned.sort(sortByPushedAt),
    others: others.sort(sortByPushedAt)
  };
}