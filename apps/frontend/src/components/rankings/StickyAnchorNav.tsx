import React from 'react';

export const StickyAnchorNav = () => {
  const links = [
    { label: 'Ranking', href: '#rankings' },
    { label: 'Metodologi', href: '#methodology' },
    { label: 'Pilar Penilaian', href: '#pillars' },
    { label: 'Disclaimer', href: '#disclaimer' },
  ];

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-10 py-4 mb-8">
      <div className="container mx-auto px-4 flex gap-6 overflow-x-auto">
        {links.map((link) => (
          <a 
            key={link.href} 
            href={link.href}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
