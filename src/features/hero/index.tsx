import HeroSection from "./components/HeroSection";
import { heroData } from "./data";

export default function Hero() {
  return <HeroSection data={heroData} />;
}

export { HeroSection };
export type { HeroData } from "./types";