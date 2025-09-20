import { ProjectData } from "../types";

// Pinned projeler için ek meta (konular/teknolojiler) eşlemeleri
const PINNED_PROJECT_META: Record<string, Partial<ProjectData>> = {
  // OjsNutrition / OjsNutrition Boilerplate için olası anahtarlar
  "beratgdlk/ojsnutrition": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "ojsnutrition": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "beratgdlk/ojs-nutrition": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "ojs-nutrition": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "beratgdlk/ojsnutrition-boilerplate": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "ojsnutrition-boilerplate": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "beratgdlk/ojs-nutrition-boilerplate": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "ojs-nutrition-boilerplate": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "beratgdlk/OjsNutrition": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "OjsNutrition": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "beratgdlk/OjsNutrition-Boilerplate": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  },
  "OjsNutrition-Boilerplate": {
    topics: ["ecommerce", "nutrition", "elysia", "prisma", "nextjs", "react", "bun"],
    technologies: [
      "Elysia",
      "Bun",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Stripe",
      "Resend",
      "UploadThing",
      "Redis"
    ]
  }
};

export function applyPinnedMeta(project: ProjectData): ProjectData {
  const keysToTry = [project.id, project.repoName ?? "", project.id.toLowerCase(), (project.repoName ?? "").toLowerCase()];
  for (const key of keysToTry) {
    if (!key) continue;
    const meta = PINNED_PROJECT_META[key];
    if (meta) {
      return {
        ...project,
        ...meta,
        technologies: meta.technologies ?? project.technologies,
        topics: meta.topics ?? project.topics
      };
    }
  }
  return project;
}


