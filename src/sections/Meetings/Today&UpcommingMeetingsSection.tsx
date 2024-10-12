import { compareAsc, startOfToday } from "date-fns";

import { cn } from "@/lib/utils";

import { MeetingCard } from "@/components/card/meetingsCard";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section, WrapperSection } from "@/components/custom/Section";

import CacheTags from "@/constant/CacheTags";

interface MeetingListProps {
  className?: string;
}

export async function GetMeetingLists() {
  const res = await fetch(
    "https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json",
    { next: { revalidate: 286400, tags: [CacheTags.MeetingList] } }
  );

  const data: Array<MeetingListType> = await res.json();
  return data;
}

const getNextDateForDay = (dayIndex: number): Date => {
  const today = new Date();
  const todayIndex = today.getDay();
  const daysUntilNext = (dayIndex - todayIndex + 7) % 7 || 7;

  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntilNext);

  return nextDate;
};

export default async function TodayAndUpcommingMeetingSection({
  className,
}: MeetingListProps) {
  const MeetingListData = await GetMeetingLists();
  const today = startOfToday();
  const todayIndex = today.getDay();

  // Filter for meetings scheduled today
  const todayMeetingList = MeetingListData.filter(
    (item) => Number(item.day) === todayIndex
  );

  const upcomingMeetingList = MeetingListData.filter(
    (item) => Number(item.day) > todayIndex
  ).sort((a, b) =>
    compareAsc(
      getNextDateForDay(Number(a.day)),
      getNextDateForDay(Number(b.day))
    )
  );

  // Determine which meetings to display
  const displayMeetings = todayMeetingList.length
    ? todayMeetingList
    : upcomingMeetingList.slice(0, 3);
  return (
    <WrapperSection>
      <Section className={className}>
        {todayMeetingList.length < 1 && (
          <Paragraph>
            There aren’t any meetings scheduled for today but here are some
            upcomming Meetings
          </Paragraph>
        )}
        {todayMeetingList.length > 0 && (
          <Paragraph>Here are the meetings scheduled for today</Paragraph>
        )}
        <div
          className={cn(
            "grid grid-cols-1 place-items-center gap-2 lg:grid-cols-2 xl:grid-cols-3"
          )}
        >
          {displayMeetings?.map((item, idx) => (
            <MeetingCard
              key={idx}
              item={item}
              className="size-full max-w-[550px]"
            />
          ))}
        </div>
      </Section>
    </WrapperSection>
  );
}
