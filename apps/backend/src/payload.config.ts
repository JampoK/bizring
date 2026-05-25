import path from 'path'
import { fileURLToPath } from 'url'

import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './collections/Users'
import { Businesses } from './collections/Businesses'
import { FranchiseOpportunities } from './collections/FranchiseOpportunities'
import { VerificationDocuments } from './collections/VerificationDocuments'
import { DataRooms } from './collections/DataRooms'
import { Media } from './collections/Media'
import Categories from './collections/Categories'
import Locations from './collections/Locations'
import { Insights } from './collections/Insights'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Businesses,
    FranchiseOpportunities,
    VerificationDocuments,
    DataRooms,
    Media,
    Categories,
    Locations,
    Insights,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL ||
        `postgres://${process.env.DB_USER}:***@${process.env.DB_HOST}:${process.env.DB_PORT}/bizring`,
    },
  }),
  cors: [
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  ],
  csrf: [
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    'http://localhost:3001',
  ],
  cookiePrefix: 'bizring-payload',
})
