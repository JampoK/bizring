import { getPayload } from 'payload'
import config from '../payload.config'

const main = async () => {
  const payload = await getPayload({ config })

  const count = await payload.count({
    collection: 'users',
    where: { email: { equals: 'admin@bizring.com' } },
  })

  if (count.totalDocs === 0) {
    const admin = await payload.create({
      collection: 'users',
      data: {
        name: 'Admin User',
        email: 'admin@bizring.com',
        password: 'admin123456',
        roles: ['admin'],
      },
    })
    console.log('✅ Admin created:', admin.email)
  } else {
    console.log('ℹ️  Admin already exists')
  }

  process.exit(0)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
