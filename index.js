import {formatIsoDate, formatRelativeTime, formatCurrentDay, formatShortDate} from './utils/formatDate.js';

// All ISO dates
const dates = [
  "2024-12-21T10:00:00Z",
  "2024-07-15T14:30:00Z",
  "2024-03-10T08:45:00Z",
  "2023-12-28T12:00:00Z",
  "1945-12-10T00:00:00Z",
];

console.log("Date and Time")
dates.forEach(date => console.log(`${formatIsoDate(date)}`))

console.log("\nRelative Time")
dates.forEach(date => console.log(`${formatRelativeTime(date)}`))

console.log("\nCurrent Day")
dates.forEach(date => console.log(`${formatCurrentDay(date)}`))

console.log("\nShort Date")
dates.forEach(date => console.log(`${formatShortDate(date)}`))

