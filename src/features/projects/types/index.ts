export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[]; // Genel teknolojiler
  language?: string; // Ana programlama dili (GitHub'dan)
  topics?: string[]; // GitHub topics/konular
  image?: string | null;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  isPinned?: boolean; // GraphQL pinned projects için
  status: "completed" | "in-progress" | "planned";
  date: string;
  // GitHub API'den gelen ek bilgiler
  createdAt?: string;
  updatedAt?: string;
  pushedAt?: string;
  starCount?: number;
  forkCount?: number;
}

export interface ProjectsPageProps {
  projects: ProjectData[];
}
