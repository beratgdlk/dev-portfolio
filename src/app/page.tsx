import Header from "@/components/layout/Header";
import HomePage from "@/features/home";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HomePage />
    </div>
  );
}