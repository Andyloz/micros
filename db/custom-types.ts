import { customType } from 'drizzle-orm/mysql-core'
import { Temporal } from 'temporal-polyfill'

export const plainDate =
  (name: string) =>
    customType<{ data: Temporal.PlainDate; driverData: string }>(
      {
        dataType() {
          return `date`
        },
        toDriver(value: Temporal.PlainDate) {
          return value.toString()
        },
        fromDriver(value: string) {
          return Temporal.PlainDate.from(value)
        }
      }
    )(name)
