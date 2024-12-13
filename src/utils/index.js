export function convertTimestamp(timestamp) {
    const date = new Date(timestamp);
    // Define month names array
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    // Get the day, month, and year
    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    // Format the date string
    return `${month} ${day}, ${year}`;
}