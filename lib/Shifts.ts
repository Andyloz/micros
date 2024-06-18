import Monday from '@/lib/Monday'
import db from '@/db/db'

export default class Shifts {

  static async getThisWeek() {
    const monday = Monday.getMonday()
    return db.query.shifts.findMany({
      with: {
        brothersShifts: {
          columns: {},
          with: { brother: true }
        },
      },
      where: (shifts, { eq, and }) => and(
        eq(shifts.weekDate, monday),
        eq(shifts.isLastVersion, true)
      ),
      orderBy: (shifts, { asc }) => [asc(shifts.date)],
    })
  }

}