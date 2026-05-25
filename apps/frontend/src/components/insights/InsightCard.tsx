import React from 'react';
import Link from 'next/link';

export const InsightCard = ({ insight }: { insight: any }) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition-all duration-300">
      <div className="h-48 bg-slate-100 overflow-hidden">
        {/* Placeholder image interaction */}
        <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{insight.category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-blue-700 transition-colors">
          <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
        </h3>
        <p className="text-slate-600 text-sm line-clamp-3">{insight.excerpt}</p>
        <div className="mt-4 flex items-center text-xs text-slate-400 gap-4">
          <span>{insight.author}</span>
          <span>{insight.readingTime} min read</span>
        </div>
      </div>
    </div>
  );
};
