/**
 * Devicons'dan teknoloji ikonlarını getiren utility fonksiyonları
 * Kaynak: https://raw.githubusercontent.com/devicons/devicon/master/icons/
 */

interface TechIconConfig {
  name: string; // devicons'daki klasör adı
  variant?: 'original' | 'plain' | 'line'; // ikon varyantı
  colored?: boolean; // renkli mi sade mi
}

// Teknoloji adlarını devicons mapping'ine çevir
const TECH_ICON_MAPPING: Record<string, TechIconConfig> = {
  // Frontend
  'javascript': { name: 'javascript', variant: 'original' },
  'typescript': { name: 'typescript', variant: 'original' },
  'react': { name: 'react', variant: 'original' },
  'nextjs': { name: 'nextjs', variant: 'original' },
  'vue': { name: 'vuejs', variant: 'original' },
  'vuejs': { name: 'vuejs', variant: 'original' },
  'angular': { name: 'angularjs', variant: 'original' },
  'svelte': { name: 'svelte', variant: 'original' },
  'html': { name: 'html5', variant: 'original' },
  'css': { name: 'css3', variant: 'original' },
  'sass': { name: 'sass', variant: 'original' },
  'scss': { name: 'sass', variant: 'original' },
  'tailwindcss': { name: 'tailwindcss', variant: 'plain' },
  'tailwind': { name: 'tailwindcss', variant: 'plain' },
  
  // Backend
  'nodejs': { name: 'nodejs', variant: 'original' },
  'express': { name: 'express', variant: 'original' },
  'python': { name: 'python', variant: 'original' },
  'django': { name: 'django', variant: 'plain' },
  'flask': { name: 'flask', variant: 'original' },
  'php': { name: 'php', variant: 'original' },
  'laravel': { name: 'laravel', variant: 'plain' },
  'ruby': { name: 'ruby', variant: 'original' },
  'rails': { name: 'rails', variant: 'plain' },
  'java': { name: 'java', variant: 'original' },
  'spring': { name: 'spring', variant: 'original' },
  'go': { name: 'go', variant: 'original' },
  'rust': { name: 'rust', variant: 'plain' },
  'csharp': { name: 'csharp', variant: 'original' },
  'dotnet': { name: 'dot-net', variant: 'original' },
  
  // Database
  'mongodb': { name: 'mongodb', variant: 'original' },
  'mysql': { name: 'mysql', variant: 'original' },
  'postgresql': { name: 'postgresql', variant: 'original' },
  'redis': { name: 'redis', variant: 'original' },
  'sqlite': { name: 'sqlite', variant: 'original' },
  'firebase': { name: 'firebase', variant: 'plain' },
  
  // Tools & DevOps
  'docker': { name: 'docker', variant: 'original' },
  'kubernetes': { name: 'kubernetes', variant: 'plain' },
  'git': { name: 'git', variant: 'original' },
  'github': { name: 'github', variant: 'original' },
  'gitlab': { name: 'gitlab', variant: 'original' },
  'aws': { name: 'amazonwebservices', variant: 'original' },
  'gcp': { name: 'googlecloud', variant: 'original' },
  'azure': { name: 'azure', variant: 'original' },
  'vercel': { name: 'vercel', variant: 'original' },
  'netlify': { name: 'netlify', variant: 'original' },
  
  // Mobile
  'react-native': { name: 'react', variant: 'original' }, // React Native için React icon
  'flutter': { name: 'flutter', variant: 'original' },
  'dart': { name: 'dart', variant: 'original' },
  'swift': { name: 'swift', variant: 'original' },
  'kotlin': { name: 'kotlin', variant: 'original' },
  
  // Testing
  'jest': { name: 'jest', variant: 'plain' },
  'cypress': { name: 'cypressio', variant: 'original' },
  
  // Others
  'webpack': { name: 'webpack', variant: 'original' },
  'vite': { name: 'vitejs', variant: 'original' },
  'eslint': { name: 'eslint', variant: 'original' },
  'prettier': { name: 'prettier', variant: 'original' }
};

/**
 * Teknoloji adından devicons URL'si oluştur
 * @param tech Teknoloji adı
 * @returns Devicons SVG URL'si
 */
export function getTechIconUrl(tech: string): string | null {
  const normalizedTech = tech.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9-]/g, '');
  const config = TECH_ICON_MAPPING[normalizedTech];
  
  if (!config) {
    // Fallback: Teknoloji adını direkt dene
    return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${normalizedTech}/${normalizedTech}-original.svg`;
  }
  
  const { name, variant = 'original' } = config;
  return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${name}/${name}-${variant}.svg`;
}

/**
 * Teknoloji adından emoji fallback'i getir
 * @param tech Teknoloji adı
 * @returns Emoji string
 */
export function getTechEmoji(tech: string): string {
  const emojiMap: Record<string, string> = {
    'javascript': '📜',
    'typescript': '🔷',
    'react': '⚛️',
    'nextjs': '▲',
    'vue': '💚',
    'angular': '🅰️',
    'python': '🐍',
    'nodejs': '🟢',
    'html': '📄',
    'css': '🎨',
    'sass': '🎨',
    'tailwind': '🌊',
    'mongodb': '🍃',
    'mysql': '🐬',
    'postgresql': '🐘',
    'firebase': '🔥',
    'docker': '🐳',
    'git': '📝',
    'github': '🐱',
    'aws': '☁️',
    'vercel': '▲'
  };
  
  const normalizedTech = tech.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9-]/g, '');
  return emojiMap[normalizedTech] || '🔧';
}

/**
 * Teknoloji ikon URL'sini test et, yoksa emoji döndür
 * @param tech Teknoloji adı
 * @returns Promise<string> - URL veya emoji
 */
export async function getTechIcon(tech: string): Promise<string> {
  const iconUrl = getTechIconUrl(tech);
  
  if (!iconUrl) {
    return getTechEmoji(tech);
  }
  
  // Basit check - production'da her zaman URL döndür, client'da error handling
  return iconUrl;
}
