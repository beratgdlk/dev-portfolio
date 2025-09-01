import HeroSection from "./components/HeroSection";
import { heroData } from "./data";

export default function HomePage() {
  return (
    <>
      <HeroSection data={heroData} />
    </>
  );
}

export type { HeroData } from "./types";
export { HeroSection };
