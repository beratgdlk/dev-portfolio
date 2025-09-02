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
  
  // Footer
  copyright: string;
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
    
    // Footer
    copyright: 'Berat Güdelek • © {year} • beratgdlk.com'
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
    
    // Footer
    copyright: 'Berat Güdelek • © {year} • beratgdlk.com'
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
