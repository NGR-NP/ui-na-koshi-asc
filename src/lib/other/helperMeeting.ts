import { isBefore, parseISO, startOfToday } from "date-fns";

export function HelperSortMeetings({ data }: { data: MeetingListType[] }) {
  if (!data) throw new Error("unable to provide meeting list");
  const today = startOfToday();
  const todayIndex = today.getDay();
  const sortedMeetings = data.sort((a, b) => {
    const isTodayA =
      a.day === todayIndex && !isBefore(parseISO(a.endTime), today);
    const isTodayB =
      b.day === todayIndex && !isBefore(parseISO(b.endTime), today);

    if (isTodayA && !isTodayB) return -1;
    if (!isTodayA && isTodayB) return 1;

    return a.day - b.day;
  });
  return sortedMeetings;
}
