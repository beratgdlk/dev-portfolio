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
  
  // ControlHub AdminPanel - olası varyasyonlar
  "beratgdlk/controlhub": "/assets/images/controlhub-image.png",
  "controlhub": "/assets/images/controlhub-image.png",
  "beratgdlk/controlhub-adminpanel": "/assets/images/controlhub-image.png",
  "controlhub-adminpanel": "/assets/images/controlhub-image.png",
  "beratgdlk/controlhub-admin-panel": "/assets/images/controlhub-image.png",
  "controlhub-admin-panel": "/assets/images/controlhub-image.png",

  // OjsNutrition - repo isimleri için olası varyasyonlar
  "beratgdlk/ojsnutrition": "/assets/images/homepage-ojs-nutrition.png",
  "ojsnutrition": "/assets/images/homepage-ojs-nutrition.png",
  "beratgdlk/ojs-nutrition": "/assets/images/homepage-ojs-nutrition.png",
  "ojs-nutrition": "/assets/images/homepage-ojs-nutrition.png",
  "beratgdlk/ojsnutrition-boilerplate": "/assets/images/homepage-ojs-nutrition.png",
  "ojsnutrition-boilerplate": "/assets/images/homepage-ojs-nutrition.png",
  "beratgdlk/ojs-nutrition-boilerplate": "/assets/images/homepage-ojs-nutrition.png",
  "ojs-nutrition-boilerplate": "/assets/images/homepage-ojs-nutrition.png",
  "beratgdlk/OjsNutrition": "/assets/images/homepage-ojs-nutrition.png",
  "OjsNutrition": "/assets/images/homepage-ojs-nutrition.png",
  "beratgdlk/OjsNutrition-Boilerplate": "/assets/images/homepage-ojs-nutrition.png",
  "OjsNutrition-Boilerplate": "/assets/images/homepage-ojs-nutrition.png",
  
  // Magio - olası varyasyonlar
  "beratgdlk/magio": "/assets/images/magio.png",
  "magio": "/assets/images/magio.png",
  "beratgdlk/Magio": "/assets/images/magio.png",
  "Magio": "/assets/images/magio.png",
  
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


