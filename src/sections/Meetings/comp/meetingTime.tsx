"use client";

import { formatTimeToUserTimezone } from "@/sections/justForToday/lib/formatDate";

interface MeetingTimeProp {
  item: MeetingListType;
}
export default function MeetingTime({ item }: MeetingTimeProp) {
  return (
    <>
      <b className="text-nowrap">{formatTimeToUserTimezone(item?.startTime)}</b>
      &nbsp;to&nbsp;
      <b className="text-nowrap">{formatTimeToUserTimezone(item?.endTime)}</b>
    </>
  );
}
