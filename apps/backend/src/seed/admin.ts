// apps/backend/src/seed/admin.ts
import payload from 'payload'
import config from '../payload.config'

export const seedAdmin = async () => {
  const adminEmail = process.env.PAYLOAD_ADMIN_EMAIL || 'admin@bizring.com'
  const adminPassword = process.env.PAYLOAD_ADMIN_PASSWORD || 'admin'

  const userCount = await payload.count({
    collection: 'users',
    where: { email: { equals: adminEmail } },
  })

  if (userCount.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        name: 'Admin User',
        email: adminEmail,
        password: adminPassword,
        roles: ['admin'],
      },
    })
    payload.logger.info('Admin user seeded successfully.')
  }
}
