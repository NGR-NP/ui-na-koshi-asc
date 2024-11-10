import { format, toZonedTime } from "date-fns-tz";

export function formatDate(
  date: Date,
  type?: string,
  timeZone?: string | "Asia/Kathmandu"
): string {
  console.log(format(date, type || "yyyy-MM-dd", { timeZone }));
  return format(date, type || "yyyy-MM-dd", { timeZone });
}

// Function to convert a time string (e.g., "17:00" in NPT) to a Date object in Nepal Time (NPT)
export function convertToNepalTime(time: string): Date {
  const now = new Date();
  const [hours, minutes] = time.split(":");

  // Set the time for today in Nepal timezone (UTC+5:45)
  now.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

  // Convert the time to Nepal Time using toZonedTime
  return toZonedTime(now, "Asia/Kathmandu"); // Convert to Nepal Time (NPT)
}

// Function to format time in the user's local time zone, based on Nepal time input
export function formatTimeToUserTimezone(time: string): string {
  const nepalTime = convertToNepalTime(time); // Convert time from Nepal timezone to UTC

  // Get the user's local timezone automatically
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Convert the Nepal Time to the user's local time and format it in 12-hour AM/PM format
  return format(nepalTime, "hh:mm a", { timeZone: userTimezone });
}
