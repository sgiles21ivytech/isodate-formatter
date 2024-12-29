import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js"

dayjs.extend(relativeTime)

// 1. Converting ISO date to Standard Date and Time format 
const formatIsoDate = (isoDate) => dayjs(isoDate).format("MMMM D, YYYY, h:mm:ss A [UTC]");
/*console.log(formatIsoDate("2024-12-21T10:00:00Z"));
console.log(formatIsoDate("2024-07-15T14:30:00Z"));
console.log(formatIsoDate("2024-03-10T08:45:00Z"));
console.log(formatIsoDate("2023-12-28T12:00:00Z"));
console.log(formatIsoDate("1945-12-10T00:00:00Z"));*/

// 2. relative time from current date
const formatRelativeTime = (isoDate) => isoDate ? dayjs(isoDate).fromNow() : "Invaild date"
/*console.log(formatRelativeTime("2024-12-21T10:00:00Z"));
console.log(formatRelativeTime("2024-07-15T14:30:00Z"));
console.log(formatRelativeTime("2024-03-10T08:45:00Z"));
console.log(formatRelativeTime("2023-12-28T12:00:00Z"));
console.log(formatRelativeTime("1945-12-10T00:00:00Z"));*/

// 3. Adding Alpha Day of the week to Month, Day, and Year
const formatCurrentDay = (getAlphaDate) => dayjs(getAlphaDate).format("dddd MMMM D, YYYY");
/*console.log(formatCurrentDay("2024-12-21T10:00:00Z"));
console.log(formatCurrentDay("2024-07-15T14:30:00Z"));
console.log(formatCurrentDay("2024-03-10T08:45:00Z"));
console.log(formatCurrentDay("2023-12-28T12:00:00Z"));
console.log(formatCurrentDay("1945-12-10T00:00:00Z"));*/

// 4. Alternative Format to Month, Day, and Year
const formatShortDate = (getAbbreviatedDate) => dayjs(getAbbreviatedDate).format("MM/DD/YYYY") ;
/*console.log(formatMonthDayYear("2024-12-21T10:00:00Z"));
console.log(formatMonthDayYear("2024-07-15T14:30:00Z"));
console.log(formatMonthDayYear("2024-03-10T08:45:00Z"));
console.log(formatMonthDayYear("2023-12-28T12:00:00Z"));
console.log(formatMonthDayYear("1945-12-10T00:00:00Z"));*/

// Exporting functions with readable string dates
export {formatIsoDate, formatRelativeTime, formatCurrentDay, formatShortDate}
