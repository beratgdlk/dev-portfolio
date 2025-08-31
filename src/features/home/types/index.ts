// Hero Section Types
export interface HeroData {
  name: string;
  title: string;
  description: string;
  avatar?: string;
  resumeUrl?: string;
}

// Blog Section Types
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime?: string;
  slug: string;
  tags?: string[];
}
