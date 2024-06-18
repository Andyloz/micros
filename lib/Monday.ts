import { Temporal } from 'temporal-polyfill'

export default class Monday {

  /**
   * Returns monday of a week.
   * @param relative Takes the origin date from look for the monday
   * @param skip Used to get the previous/next monday of the `relative` week
   * */
  static getMonday({ relative = Temporal.Now.plainDateISO(), skip = 0 } = {}) {
    const daysFromRelativeMonday = relative.dayOfWeek - 1
    const daysToDesiredMonday = skip * 7
    return relative.add({ days: -daysFromRelativeMonday + daysToDesiredMonday })
  }

}