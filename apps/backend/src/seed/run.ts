import { getPayload } from 'payload'
import config from '../payload.config'

const main = async () => {
  const payload = await getPayload({ config })

  // 1. Reset/Create Admin
  const adminExists = await payload.count({ collection: 'users', where: { email: { equals: 'admin@bizring.com' } } })
  if (adminExists.totalDocs === 0) {
    await payload.create({ collection: 'users', data: { name: 'Admin', email: 'admin@bizring.com', password: 'admin123456', roles: ['admin'] } })
  }

  // 2. Create Dummy Business Owner
  const owner = await payload.create({
    collection: 'users',
    data: { name: 'Franchise Owner', email: 'owner@bizring.com', password: 'password123', roles: ['business_owner'] }
  })

  // 3. Create Dummy Business
  const business = await payload.create({
    collection: 'businesses',
    data: {
      name: 'Kopi Nusantara',
      slug: 'kopi-nusantara',
      category: 1, // Using ID
      location: 1, // Using ID
      status: 'verified',
      owner: owner.id,
    }
  })

  console.log('✅ Seed data created')
  process.exit(0)
}

main().catch((e) => { console.error(e); process.exit(1) })
