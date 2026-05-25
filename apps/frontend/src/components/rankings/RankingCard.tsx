import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge'; // Asumsi komponen ini sudah ada dari Fase sebelumnya

export const RankingCard = ({ entry }: { entry: any }) => {
  return (
    <div className="flex items-center p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
      {/* Rank Number */}
      <div className="flex-shrink-0 w-16 text-3xl font-bold text-slate-300">
        #{entry.rankNumber}
      </div>

      {/* Business Logo/Thumbnail */}
      <div className="w-16 h-16 bg-slate-100 rounded-lg mr-6" />

      {/* Info */}
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xl font-bold">{entry.businessName}</h3>
          {entry.featured && <Badge variant="accent">Featured</Badge>}
        </div>
        <p className="text-slate-600 text-sm">{entry.summary}</p>
      </div>

      {/* Action */}
      <Link 
        href={`/bisnis/${entry.business.slug}`} 
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        View Profile
      </Link>
    </div>
  );
};
