import React from 'react'

interface Company {
  name: string
  logo: string // SVG path or simple text abbr
}

const companies: Company[] = [
  { name: 'Sequoia', logo: 'SQ' },
  { name: 'a16z', logo: 'A' },
  { name: 'Y Combinator', logo: 'YC' },
  { name: 'Accel', logo: 'AC' },
  { name: 'Benchmark', logo: 'BM' },
  { name: 'Index Ventures', logo: 'IX' },
  { name: 'Bessemer', logo: 'BV' },
  { name: 'Greylock', logo: 'GL' },
]

export function CompanyLogos() {
  return (
    <section className="py-16 bg-surface-white">
      <div className="container-default">
        <p className="text-center text-sm font-medium text-stone-whisper tracking-[0.014px] mb-10">
          Trusted by innovative companies and investors worldwide
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-10 px-4 group cursor-default"
              title={company.name}
            >
              <div className="w-10 h-10 rounded-full bg-fog-gray flex items-center justify-center group-hover:bg-pale-mint transition-colors duration-200">
                <span className="text-xs font-bold text-slate-grille group-hover:text-oceanic-deep transition-colors duration-200">
                  {company.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
