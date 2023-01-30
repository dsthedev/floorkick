/* Get week number in year based on:
 *  - week starts on Sunday
 *  - week number and year is that of the next Saturday,
 *    or current date if it's Saturday
 *    1st week of 2011 starts on Sunday 26 December, 2010
 *    1st week of 2017 starts on Sunday 1 January, 2017
 *
 * Calculations use UTC to avoid daylight saving issues.
 *
 * @param {Date} date - date to get week number of
 * @returns {number[]} year and week number
 */
const GetWeekNumber = (date) => {
  // Copy date as UTC to avoid DST
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  )
  // Shift to the following Saturday to get the year
  d.setUTCDate(d.getUTCDate() + 6 - d.getUTCDay())
  // Get the first day of the year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  yearStart.setUTCDate(yearStart.getUTCDate() - yearStart.getUTCDay())
  // Get difference between yearStart and d in milliseconds
  // Reduce to whole weeks

  // Helper to format dates
  // const fDate = (d) => {
  //   const opts = {
  //     weekday: 'short',
  //     month: 'short',
  //     day: 'numeric',
  //     year: 'numeric',
  //   }
  //   return d.toLocaleString(undefined, opts)
  // }
  // Parse yyyy-mm-dd as local
  // const pDate = (s) => {
  //   const b = (s + '').split(/\D/)
  //   const d = new Date(b[0], b[1] - 1, b[2])
  //   return d.getMonth() == b[1] - 1 ? d : new Date(NaN)
  // }
  // Handle button click
  // const doButtonClick = () => {
  //   const d = pDate(document.getElementById('inp0').value)
  //   const span = document.getElementById('weekNumber')
  //   if (isNaN(d)) {
  //     span.textContent = 'Invalid date'
  //   } else {
  //     const [y, w] = GetWeekNumber(d)
  //     span.textContent = `${fDate(d)} is in week ${w} of ${y}`
  //   }
  // }

  // return [d.getUTCFullYear(), Math.ceil((d - yearStart) / 6.048e8)]
  return Math.ceil((d - yearStart) / 6.048e8)
}

export default GetWeekNumber
