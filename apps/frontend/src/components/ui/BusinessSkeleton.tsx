import React from 'react'
import { ContentCard } from './ContentCard'

export function BusinessSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <ContentCard key={i} className="h-48 bg-fog-gray" />
      ))}
    </div>
  )
}
