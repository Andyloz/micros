import { defineConfig } from 'drizzle-kit';
import { dbAccessSettings } from '@/db/db'

export default defineConfig({
  schema: './db/schema.ts',
  out: './db/migrations',
  dialect: 'mysql',
  dbCredentials: dbAccessSettings,
})
