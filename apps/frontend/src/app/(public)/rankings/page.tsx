import { getRankedBusinesses } from '@/api/rankings';
import { RankingCard } from '@/components/rankings/RankingCard';
import { StickyAnchorNav } from '@/components/rankings/StickyAnchorNav';
import { NewsletterCTA } from '@/components/insights/NewsletterCTA';

export default async function Top100Page() {
  const rankings = await getRankedBusinesses();

  return (
    <main>
      <header className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Top 100 Bisnis Indonesia 2026</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Panduan kurasi bisnis, franchise, dan peluang usaha paling potensial tahun ini.
          </p>
        </div>
      </header>

      <StickyAnchorNav />

      <section id="rankings" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Daftar Ranking</h2>
        <div className="grid gap-6">
          {rankings.map((entry) => (
            <RankingCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      <section id="methodology" className="container mx-auto px-4 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-6">Tentang Metodologi</h2>
        {/* Placeholder: Render markdown content here */}
      </section>

      <section className="container mx-auto px-4 py-12">
        <NewsletterCTA />
      </section>
    </main>
  );
}
