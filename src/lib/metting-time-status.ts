import {
  addMinutes,
  differenceInMinutes,
  format,
  formatDistanceToNow,
  isAfter,
  isBefore,
  parse,
  startOfWeek,
} from "date-fns";

// Constants
const MEETING_TIME_FORMAT = "yyyy-MM-dd hh:mm a";
const MINUTES_BEFORE_MEETING_START_TO_NOTIFY = 59;
const MINUTES_BEFORE_MEETING_END_TO_NOTIFY = 15;
const MINUTES_AFTER_MEETING_START_TO_SHOW_ONGOING = 15;

function parseDateTime(date: string, time: string) {
  return parse(`${date} ${time}`, MEETING_TIME_FORMAT, new Date());
}

export function checkMeetingStatus(meeting: MettingListType) {
  const now = new Date();
  const todayDate = format(now, "yyyy-MM-dd");
  const todayDay = now.getDay(); // Get the current day of the week (0-6)

  // Check if today is the day of the meeting
  if (meeting.day !== todayDay) {
    return {
      message: "No meetings scheduled for today.",
      remainingTime: null,
      live: 0,
    };
  }

  const startTime = parseDateTime(todayDate, meeting.from);
  const endTime = parseDateTime(todayDate, meeting.to);

  // Ensure both startTime and endTime are valid dates
  if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
    return {
      message: "Invalid meeting time.",
      remainingTime: null,
      live: 0,
    };
  }

  // Check meeting status
  if (isBefore(now, startTime)) {
    const remainingTime = differenceInMinutes(startTime, now);
    const timeMessage =
      remainingTime <= MINUTES_BEFORE_MEETING_START_TO_NOTIFY
        ? `Starts in ${remainingTime} minutes!`
        : `Will start in about ${formatDistanceToNow(startTime, { includeSeconds: true })}`;

    return {
      message: `🌟 ${meeting.name} ${timeMessage}`,
      shortMessage: `Metting ${timeMessage}!`,
      remainingTime,
      live: 1,
    };
  }

  if (isAfter(now, endTime)) {
    return {
      message: `❌ ${meeting.name} metting on ${getDayName(meeting.day)} has ended.`,
      shortMessage: "Meeting has ended.",
      remainingTime: null,
      live: 0,
    };
  }

  const remainingTime = differenceInMinutes(endTime, now);
  const remainingTimes = formatDistanceToNow(endTime, { includeSeconds: true });

  if (remainingTime <= MINUTES_BEFORE_MEETING_END_TO_NOTIFY) {
    return {
      message: `⚠️ Ongoing meeting "${meeting.name}". Ends in ${remainingTime} minutes.`,
      shortMessage: `Meeting ends in ${remainingTime} minutes.`,
      remainingTime: remainingTimes,
      live: 3,
    };
  }

  // Show ongoing meeting message after meeting starts for 15 minutes
  const ongoingThreshold = addMinutes(
    startTime,
    MINUTES_AFTER_MEETING_START_TO_SHOW_ONGOING
  );
  if (isAfter(now, ongoingThreshold)) {
    return {
      message: `🔵 Ongoing meeting "${meeting.name}". Ends in ${remainingTimes}.`,
      shortMessage: `Meeting ongoing. Ends in ${remainingTimes}.`,
      remainingTime: remainingTimes,
      live: 2,
    };
  }

  // Meeting has started but not yet 15 minutes in
  return {
    message: `🟢 Meeting "${meeting.name}" has started. Ends in ${remainingTimes}.`,
    shortMessage: "Meeting in progress.",
    remainingTime: remainingTimes,
    live: 2,
  };
}

export function getDayName(dayIndex: number) {
  const date = startOfWeek(new Date(), { weekStartsOn: 0 });
  return format(new Date(date.setDate(date.getDate() + dayIndex)), "EEEE");
}
