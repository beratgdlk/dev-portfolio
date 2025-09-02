"use client";

import AboutSection from "./components/AboutSection";
import { aboutData } from "./data";

export default function AboutPage() {
  return <AboutSection data={aboutData} />;
}

export type { AboutData } from "./types";
export { AboutSection };
