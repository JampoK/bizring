import React from 'react';
import BusinessCard from './BusinessCard';

interface Business {
  name: string;
  logo?: string;
  tags: string[];
  status: "open" | "closed";
}

interface MarketplaceGridProps {
  businesses: Business[];
}

export default function MarketplaceGrid({ businesses }: MarketplaceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {businesses.map((b, i) => (
        <BusinessCard key={i} {...b} />
      ))}
    </div>
  );
}