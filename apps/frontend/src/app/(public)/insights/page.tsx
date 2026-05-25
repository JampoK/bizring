import { getPayload } from 'payload';
import config from '../../payload.config';
import { InsightCard } from '@/components/insights/InsightCard';
import { NewsletterCTA } from '@/components/insights/NewsletterCTA';

export default async function InsightsPage() {
  const payload = await getPayload({ config });
  
  const insights = await payload.find({
    collection: 'insights',
    limit: 10,
    sort: '-createdAt',
  });

  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Business Insights</h1>
      
      {/* Featured Section */}
      <section className="mb-16">
        {/* Placeholder for featured article component */}
      </section>

      {/* Grid Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {insights.docs.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </section>

      <NewsletterCTA />
    </main>
  );
}
