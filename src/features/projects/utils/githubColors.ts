/**
 * GitHub Programming Language Colors
 * Kaynak: https://github.com/ozh/github-colors
 */

export const GITHUB_LANGUAGE_COLORS: Record<string, string> = {
  // Popular Languages
  'JavaScript': '#f1e05a',
  'TypeScript': '#2b7489', 
  'Python': '#3572A5',
  'Java': '#b07219',
  'C++': '#f34b7d',
  'C': '#555555',
  'C#': '#239120',
  'PHP': '#4F5D95',
  'Ruby': '#701516',
  'Go': '#00ADD8',
  'Rust': '#dea584',
  'Swift': '#ffac45',
  'Kotlin': '#F18E33',
  'Scala': '#c22d40',
  'R': '#198CE7',
  'MATLAB': '#e16737',
  'Dart': '#00B4AB',
  'Shell': '#89e051',
  'PowerShell': '#012456',
  
  // Web Technologies
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'SCSS': '#c6538c',
  'Sass': '#a53b70',
  'Less': '#1d365d',
  'Vue': '#2c3e50',
  'Svelte': '#ff3e00',
  'Astro': '#ff5d01',
  
  // Data & Config
  'JSON': '#292929',
  'YAML': '#cb171e',
  'XML': '#0060ac',
  'Markdown': '#083fa1',
  'LaTeX': '#3D6117',
  
  // Database
  'SQL': '#336791',
  'PLpgSQL': '#336791',
  'TSQL': '#e38c00',
  
  // Others
  'Dockerfile': '#384d54',
  'Makefile': '#427819',
  'CMake': '#DA3434',
  'Jupyter Notebook': '#DA5B0B',
  'Perl': '#0298c3',
  'Lua': '#000080',
  'Haskell': '#5e5086',
  'Elixir': '#6e4a7e',
  'Erlang': '#B83998',
  'Clojure': '#db5855',
  'F#': '#b845fc',
  'OCaml': '#3be133',
  'Vim script': '#199f4b',
  'Emacs Lisp': '#c065db',
  
  // Assembly
  'Assembly': '#6E4C13',
  'WebAssembly': '#04133b',
  
  // Mobile
  'Objective-C': '#438eff',
  'Objective-C++': '#6866fb'
};

/**
 * Dil adından GitHub rengini getir
 * @param language Programlama dili adı
 * @returns Hex renk kodu veya null
 */
export function getLanguageColor(language: string): string | null {
  // Normalize language name
  const normalizedLang = language.trim();
  return GITHUB_LANGUAGE_COLORS[normalizedLang] || null;
}

/**
 * Dil rengini CSS style objesine çevir
 * @param language Programlama dili adı
 * @returns CSS style objesi
 */
export function getLanguageStyle(language: string): React.CSSProperties {
  const color = getLanguageColor(language);
  if (!color) return {};
  
  return {
    backgroundColor: color,
    color: getContrastTextColor(color)
  };
}

/**
 * Verilen hex renge göre kontrast metin rengi belirle
 * @param hexColor Hex renk kodu (#rrggbb)
 * @returns 'white' veya 'black'
 */
function getContrastTextColor(hexColor: string): string {
  // Hex'i RGB'ye çevir
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);  
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Luminance hesapla
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? 'black' : 'white';
}
