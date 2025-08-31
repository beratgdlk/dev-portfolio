export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime?: string;
  slug: string;
  tags?: string[];
}
