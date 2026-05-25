import React from 'react';
import { EmailShell } from '../components/EmailShell';
import { EmailButton } from '../components/EmailButton';
import { Heading, Text, Section } from '@react-email/components';

export const BusinessInsightsNewsletter = ({ articles }: { articles: any[] }) => (
  <EmailShell>
    <Heading className="text-2xl font-bold text-slate-900">Weekly Business Insights</Heading>
    <Text className="text-slate-600">Terima kasih telah berlangganan. Berikut adalah ringkasan peluang bisnis dan tren pasar minggu ini:</Text>
    
    {articles.map((article, i) => (
      <Section key={i} className="my-6 border-b border-slate-100 pb-4">
        <Heading className="text-lg font-bold text-slate-800">{article.title}</Heading>
        <Text className="text-slate-600 text-sm">{article.excerpt}</Text>
        <EmailButton href={`https://bizring.com/insights/${article.slug}`}>Baca Selengkapnya</EmailButton>
      </Section>
    ))}
    
    <Text className="text-slate-500 text-xs mt-8">Anda menerima email ini karena Anda berlangganan insight bisnis BizRing. <a href="https://bizring.com/unsubscribe">Berhenti Berlangganan</a></Text>
  </EmailShell>
);
