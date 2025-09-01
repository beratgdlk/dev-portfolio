import { BlogPost, HeroData } from "../types";

// Hero Data
export const heroData: HeroData = {
  name: "Emre Seferoğlu",
  title: "Fullstack Mobile Developer",
  description: "Here, I share through my work my experience as a fullstack developer and everything I'm learning about Web Development, Mobile Apps, and modern technologies.",
  resumeUrl: "#resume"
};

// Blog Data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "React Native ile Cross-Platform Geliştirme",
    description: "React Native kullanarak hem iOS hem de Android için tek kod tabanıyla uygulama geliştirme sürecini ve en iyi uygulamaları keşfedin.",
    date: "2024-01-15",
    readTime: "8 dk okuma",
    slug: "react-native-cross-platform",
    tags: ["React Native", "Mobile", "JavaScript"]
  },
  {
    id: "2", 
    title: "Next.js 14 ile Modern Web Uygulamaları",
    description: "Next.js 14'ün yeni özellikleri ile server-side rendering, static generation ve app router kullanarak performanslı web uygulamaları geliştirme.",
    date: "2024-01-10",
    readTime: "12 dk okuma", 
    slug: "nextjs-14-modern-web-apps",
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    id: "3",
    title: "TypeScript ile Tip Güvenli Backend API'ları",
    description: "Node.js ve TypeScript kullanarak güvenli, ölçeklenebilir ve bakımı kolay REST API'ları geliştirme teknikleri ve en iyi uygulamalar.",
    date: "2024-01-05",
    readTime: "10 dk okuma",
    slug: "typescript-backend-api",
    tags: ["TypeScript", "Node.js", "Backend"]
  },
  {
    id: "4",
    title: "MongoDB ile NoSQL Veri Modelleme",
    description: "MongoDB'de etkili veri modelleme stratejileri, performans optimizasyonu ve aggregation pipeline kullanımı üzerine kapsamlı rehber.",
    date: "2024-01-01",
    readTime: "15 dk okuma",
    slug: "mongodb-veri-modelleme", 
    tags: ["MongoDB", "Database", "NoSQL"]
  }
];
