import { getPayload } from 'payload'
import config from '../payload.config'

const seedEditorial = async () => {
  const payload = await getPayload({ config })

  // 1. Create Editorial User
  const editorialUser = await payload.create({
    collection: 'users',
    data: {
      email: 'editor@bizring.com',
      password: 'password123',
      role: 'editorial',
    },
  })
  console.log('Editorial user created:', editorialUser.email)

  // 2. Create Dummy Article
  await payload.create({
    collection: 'insights',
    data: {
      title: 'Tren Waralaba di Indonesia 2026',
      slug: 'tren-waralaba-indonesia-2026',
      category: 'Franchise',
      excerpt: 'Melihat peluang besar di sektor F&B dan layanan jasa waralaba pasca pemulihan ekonomi.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'text',
              text: 'Pasar waralaba Indonesia menunjukkan ketahanan yang luar biasa...',
            },
          ],
        },
      },
      author: 'BizRing Editorial Team',
      readingTime: 5,
      isFeatured: true,
    },
  })
  console.log('Dummy article created.')
}

seedEditorial()
