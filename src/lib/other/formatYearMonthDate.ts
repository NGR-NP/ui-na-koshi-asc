export function getUserFormattedDate(timeZone: string): string {
  const options: Intl.DateTimeFormatOptions = {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const userDate = new Date().toLocaleString("en-US", options);
  const [month, day, year] = userDate.split("/");
  return `${year}-${month}-${day}`;
}
