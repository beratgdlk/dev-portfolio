import Header from "@/components/layout/Header";
import Hero from "@/features/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Placeholder for future sections */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Daha fazla içerik yakında...</h2>
            <p className="text-muted-foreground">
              Blog yazıları, projeler ve diğer bölümler burada yer alacak.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}