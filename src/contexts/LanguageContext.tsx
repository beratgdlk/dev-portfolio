"use client";

import { createContext, ReactNode, useContext, useState } from 'react';

type Language = 'tr' | 'en';

interface Translations {
  // Navigation
  blog: string;
  projects: string;
  about: string;
  
  // Hero Section
  heroGreeting: string;
  heroName: string;
  heroPortfolio: string;
  heroDescription: string;
  
  // Blog Page
  blogTitle: string;
  blogDescription: string;
  searchPlaceholder: string;
  readMore: string;
  noResults: string;
  allPosts: string;
  
  // About Page
  aboutTitle: string;
  aboutDescription: string;
  aboutCurrentWork: string;
  aboutFreeTime: string;
  backToBlog: string;
  
  // Footer
  copyright: string;
  
  // Page Titles
  pageTitleHome: string;
  pageTitleBlog: string;
  pageTitleProjects: string;
  pageTitleAbout: string;

  // Projects Page
  projectsDescription: string;
  featuredProjectsTitle: string;
  otherProjectsTitle: string;
  otherProjectsSubtitle: string; // uses {count}
  showLess: string;
  showAll: string;
  showAllMore: string; // uses {count}
  noProjectsFound: string;

  // Common/API Errors
  githubApiErrorTitle: string;
  retryChecking: string;
  retryAfterToken: string;

  // Blog Coming Soon
  blogComingSoonTitle: string;
  blogComingSoonDescription: string;
  backToHome: string;
  notifyByEmail: string;
  emailSubject: string;
  emailBody: string;
}

const translations: Record<Language, Translations> = {
  tr: {
    // Navigation
    blog: 'Blog',
    projects: 'Projeler',
    about: 'Hakkımda',
    
    // Hero Section
    heroGreeting: 'Merhaba',
    heroName: 'Ben Berat,',
    heroPortfolio: 've burası benim portfolyom.',
    heroDescription: 'Burada, yazılarım aracılığıyla bir fullstack web developer olarak deneyimlerimi ve daha fazlasını paylaşıyorum. Şu sıralar mobil app development öğreniyorum ve bunları da yazıyor olacağım.',
    
    // Blog Page
    blogTitle: 'Blog Yazıları',
    blogDescription: 'Teknoloji, geliştirme süreçleri ve öğrendiklerim hakkında yazdığım makaleler.',
    searchPlaceholder: 'Blog yazılarında ara...',
    readMore: 'Devamını Oku',
    noResults: 'Aradığınız kriterlere uygun yazı bulunamadı.',
    allPosts: 'Tüm Yazılar',
    
    // About Page
    aboutTitle: 'Hakkımda',
    aboutDescription: 'Mühendislikten yazılıma geçiş yaptıktan sonra bugün full‑stack bir geliştiriciyim. OnlyJs Software Academy’den edindiğim altyapıyla hem frontend hem de backend tarafında üretim yapıyor, kendimi her geçen gün geliştirip güncel tutuyorum. Ayrıca mobil uygulama geliştirme üzerine çalışıyor ve öğrenmeye devam ediyorum.',
    aboutCurrentWork: '2024 Mart’tan beri web geliştirme alanını tek odak noktam yaparak kendimi geliştiriyor ve alaylı bir yazılımcı olarak gelişimimi sürdürüyorum. Yeni sistemlere hızla adapte olabileceğime ve sürekli öğrenmeyle etkili çözümler üreteceğime güveniyorum.',
    aboutFreeTime: 'Üniversitenin ilk yıllarında otostopla Türkiye’yi gezerek Marmara, Ege, Akdeniz ve İç Anadolu’nun bir kısmını keşfettim. Çocukluğumdan beri özellikle gezi belgesellerine meraklıyım. En büyük hayalim; kariyerimi keşfetme tutkumla birleştirip, dünyayı gezerken etkili çözümler üreten bir dijital göçebe olarak yaşamak.',
    backToBlog: 'Blog\'a Dön',
    
    // Footer
    copyright: 'Berat Güdelek • © {year} • beratgdlk.com',
    
    // Page Titles
    pageTitleHome: 'Berat Güdelek - Fullstack Web Developer',
    pageTitleBlog: 'Blog-beratgdlk',
    pageTitleProjects: 'Projeler-beratgdlk',
    pageTitleAbout: 'Hakkımda-beratgdlk',

    // Projects Page
    projectsDescription: 'GitHub GraphQL ile çekilen gerçek projelerim. Son commit tarihine göre sıralanmış, pinli projeler en üstte.',
    featuredProjectsTitle: 'Öne Çıkan Projeler',
    otherProjectsTitle: 'Diğer Projeler',
    otherProjectsSubtitle: 'Son commit tarihine göre sıralanmış {count} proje',
    showLess: 'Daha Az Göster',
    showAll: 'Tümünü Göster',
    showAllMore: 'Tümünü Göster ({count} proje daha)',
    noProjectsFound: 'Henüz proje bulunamadı',

    // Common/API Errors
    githubApiErrorTitle: '🔑 GitHub API Hatası',
    retryChecking: 'Tekrar Kontrol Ediliyor...',
    retryAfterToken: "Token'ı Ekledim, Tekrar Dene",

    // Blog Coming Soon
    blogComingSoonTitle: 'Blog çok yakında',
    blogComingSoonDescription: 'Yeni yazılar üzerinde çalışıyorum. Çok yakında burada olacaklar.',
    backToHome: 'Anasayfaya dön',
    notifyByEmail: 'Mail ile haberdar et',
    emailSubject: 'Blog Güncelleme Aboneliği',
    emailBody: 'Merhaba, blog yazıları yayınlandığında haberdar olmak istiyorum.'
  },
  en: {
    // Navigation
    blog: 'Blog',
    projects: 'Projects',
    about: 'About',
    
    // Hero Section
    heroGreeting: 'Hi',
    heroName: "I'm Berat,",
    heroPortfolio: 'and this is my portfolio.',
    heroDescription: 'Here, I share through my writing my experience as a fullstack web developer and more. Currently learning mobile app development and will be writing about it.',
    
    // Blog Page
    blogTitle: 'Blog Posts',
    blogDescription: 'Articles about technology, development processes, and everything I\'m learning.',
    searchPlaceholder: 'Search blog posts...',
    readMore: 'Read More',
    noResults: 'No posts found matching your criteria.',
    allPosts: 'All Posts',
    
    // About Page
    aboutTitle: 'About',
    aboutDescription: 'After transitioning from engineering into software, I am now a full‑stack developer. With the foundation I built at the OnlyJs Software Academy, I deliver across both frontend and backend, continuously improving myself and staying up to date. I am also learning mobile application development.',
    aboutCurrentWork: 'Since March 2024, I have been developing myself with a single focus on web development and continue to grow as a self-taught developer. I have full confidence in my ability to adapt to new systems and pursue continuous learning to build impactful solutions.',
    aboutFreeTime: 'During my early university years, I hitchhiked across Turkey—exploring regions like Marmara, the Aegean, the Mediterranean, and parts of Central Anatolia. Since childhood, I have been deeply passionate about travel documentaries, and my biggest dream is to combine my career with my love for exploration: to live as a digital nomad, building impactful solutions while traveling the world.',
    backToBlog: 'Back to Blog',
    
    // Footer
    copyright: 'Berat Güdelek • © {year} • beratgdlk.com',
    
    // Page Titles
    pageTitleHome: 'Berat Gudelek - Fullstack Web Developer',
    pageTitleBlog: 'Blog-beratgdlk',
    pageTitleProjects: 'Projects-beratgdlk',
    pageTitleAbout: 'About-beratgdlk',

    // Projects Page
    projectsDescription: 'Real projects fetched via GitHub GraphQL. Sorted by last commit date, pinned projects first.',
    featuredProjectsTitle: 'Featured Projects',
    otherProjectsTitle: 'Other Projects',
    otherProjectsSubtitle: 'Sorted by last commit date, {count} projects',
    showLess: 'Show Less',
    showAll: 'Show All',
    showAllMore: 'Show All ({count} more projects)',
    noProjectsFound: 'No projects found yet',

    // Common/API Errors
    githubApiErrorTitle: '🔑 GitHub API Error',
    retryChecking: 'Checking again...',
    retryAfterToken: 'I added the token, try again',

    // Blog Coming Soon
    blogComingSoonTitle: 'Blog is coming soon',
    blogComingSoonDescription: "I'm working on new articles. They'll be here very soon.",
    backToHome: 'Back to Home',
    notifyByEmail: 'Notify me by email',
    emailSubject: 'Blog Updates Subscription',
    emailBody: 'Hello, I would like to be notified when blog posts are published.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
