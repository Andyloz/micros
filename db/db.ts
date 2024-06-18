import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from '@/db/schema'

export const dbAccessSettings = {
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
}

const poolConnection = mysql.createPool(dbAccessSettings)

const db = drizzle(poolConnection, { schema, mode: 'default' })

export default db
