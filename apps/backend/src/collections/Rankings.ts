import type { CollectionConfig } from 'payload'

export const Rankings: CollectionConfig = {
  slug: 'rankings',
  admin: {
    useAsTitle: 'businessName',
    defaultColumns: ['rankNumber', 'businessName', 'score', '_status'],
    group: 'Ranking',
  },
  fields: [
    { name: 'businessName', type: 'text', required: true },
    { name: 'business', type: 'relationship', relationTo: 'businesses', required: true },
    { name: 'rankNumber', type: 'number', required: true },
    { name: 'score', type: 'number', required: true },
    { 
      name: 'scoreBreakdown', 
      type: 'json', 
      label: 'Score Breakdown (JSON)',
      admin: { description: 'Pillar scores: Cost, Support, Financial, Growth, Brand' }
    },
    { name: 'summary', type: 'textarea', label: 'Editorial Summary' },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'editorNotes', type: 'textarea', admin: { position: 'sidebar' } },
  ],
}
