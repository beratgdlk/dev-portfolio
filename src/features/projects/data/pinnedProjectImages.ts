// Pinned projelere özel görsel eşlemesi
// Anahtar olarak nameWithOwner (ör. "beratgdlk/dev-portfolio") veya repo adı (ör. "dev-portfolio") kullanılabilir

export const PINNED_PROJECT_IMAGES: Record<string, string> = {
  // Örnek: Dev Portfolio
  "beratgdlk/dev-portfolio": "/assets/images/dev-portfolio.png",
  "dev-portfolio": "/assets/images/dev-portfolio.png",
  // Yeni projeler için buraya ekleme yapılabilir
};

export function getPinnedImageForRepo(nameWithOwner: string, name: string): string | null {
  const key1 = nameWithOwner.toLowerCase();
  const key2 = name.toLowerCase();
  return PINNED_PROJECT_IMAGES[key1] || PINNED_PROJECT_IMAGES[key2] || null;
}


