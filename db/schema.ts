import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  varchar,
  primaryKey,
  index,
  foreignKey,
  boolean
} from 'drizzle-orm/mysql-core'
import { relations } from 'drizzle-orm'
import { plainDate } from '@/db/custom-types'

export const brothers = mysqlTable('brothers', {
  id: int('id', { unsigned: true }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull()
})

export const brothersRelations = relations(brothers, ({ many }) => ({
  brothersShifts: many(brothersShifts)
}))

export const shifts = mysqlTable('shifts',
  {
    date: plainDate('date').notNull(),
    version: int('version', { unsigned: true }).notNull().default(1),
    isLastVersion: boolean('is_last_version').notNull(),
    weekDate: plainDate('week_date').notNull(),
    type: mysqlEnum('type', ['midweek', 'weekend', 'other']).notNull(),
    description: text('description'),
  },
  ({ date, version, isLastVersion, weekDate }) => (
    {
      pk: primaryKey({ columns: [date, version] }),
      weekDateIdx: index('week_date_idx').on(weekDate),
      isLastVersionIdx: index('is_last_version_idx').on(isLastVersion),
    }
  )
)

export const shiftsRelations = relations(shifts, ({ many }) => ({
  brothersShifts: many(brothersShifts)
}))

export const brothersShifts = mysqlTable('brothers_shifts',
  {
    brotherId: int('brother_id', { unsigned: true }).notNull().references(() => brothers.id),
    shiftDate: plainDate('shift_date').notNull(),
    shiftVersion: int('shift_version', { unsigned: true }).notNull(),
  },
  ({ brotherId, shiftDate, shiftVersion }) => (
    {
      pk: primaryKey({ columns: [brotherId, shiftDate, shiftVersion] }),
      shiftReference: foreignKey({
          columns: [shiftDate, shiftVersion],
          foreignColumns: [shifts.date, shifts.version]
        }
      )
    }
  )
)

export const brothersToShiftsRelations = relations(brothersShifts, ({ one }) => ({
  brother: one(brothers, {
    fields: [brothersShifts.brotherId],
    references: [brothers.id]
  }),
  shift: one(shifts, {
    fields: [brothersShifts.shiftDate, brothersShifts.shiftVersion],
    references: [shifts.date, shifts.version]
  }),
}))
