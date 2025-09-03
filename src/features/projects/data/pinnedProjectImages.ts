// Pinned projelere özel görsel eşlemesi
// Anahtar olarak nameWithOwner (ör. "beratgdlk/dev-portfolio") veya repo adı (ör. "dev-portfolio") kullanılabilir

export const PINNED_PROJECT_IMAGES: Record<string, string> = {
  // Örnek: Dev Portfolio
  "beratgdlk/dev-portfolio": "/assets/images/dev-portfolio.png",
  "dev-portfolio": "/assets/images/dev-portfolio.png",
  
  // NovaDesk projesi - tüm olası varyasyonlar
  "beratgdlk/novadesk": "/assets/images/nova-desk.png",
  "novadesk": "/assets/images/nova-desk.png",
  "beratgdlk/NovaDesk": "/assets/images/nova-desk.png",
  "NovaDesk": "/assets/images/nova-desk.png",
  "beratgdlk/novadesk-adminpanel": "/assets/images/nova-desk.png",
  "novadesk-adminpanel": "/assets/images/nova-desk.png",
  "beratgdlk/NovaDesk-AdminPanel": "/assets/images/nova-desk.png",
  "NovaDesk-AdminPanel": "/assets/images/nova-desk.png",
  "beratgdlk/novadesk_adminpanel": "/assets/images/nova-desk.png",
  "novadesk_adminpanel": "/assets/images/nova-desk.png",
  
  // Yeni projeler için buraya ekleme yapılabilir
};

export function getPinnedImageForRepo(nameWithOwner: string, name: string): string | null {
  // Önce orijinal halleriyle dene
  if (PINNED_PROJECT_IMAGES[nameWithOwner]) return PINNED_PROJECT_IMAGES[nameWithOwner];
  if (PINNED_PROJECT_IMAGES[name]) return PINNED_PROJECT_IMAGES[name];
  
  // Sonra küçük harfle dene
  const key1 = nameWithOwner.toLowerCase();
  const key2 = name.toLowerCase();
  return PINNED_PROJECT_IMAGES[key1] || PINNED_PROJECT_IMAGES[key2] || null;
}


