import { CollectionConfig } from 'payload'

/**
 * Custom dashboard view for Business Team
 */
export const BusinessDashboard: CollectionConfig = {
  slug: 'business-dashboard',
  admin: {
    group: 'Operational',
    description: 'Ringkasan operasional bisnis (Leads & Moderasi)',
  },
  // Custom dashboard fields...
  fields: [],
}
