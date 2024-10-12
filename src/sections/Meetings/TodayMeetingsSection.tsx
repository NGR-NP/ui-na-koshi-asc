import { startOfToday } from "date-fns";

import { cn } from "@/lib/utils";

import { MeetingCard } from "@/components/card/meetingsCard";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section } from "@/components/custom/Section";

import CacheTags from "@/constant/CacheTags";

async function GetMeetingLists() {
  const res = await fetch(
    "https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json",
    { next: { revalidate: 286400, tags: [CacheTags.MeetingList] } }
  );

  const data: Array<MeetingListType> = await res.json();
  return data;
}
interface TodayMeetingListProps {
  className?: string;
}
export default async function TodayMeetingListSection({
  className,
}: TodayMeetingListProps) {
  const MeetingListData = await GetMeetingLists();
  const today = startOfToday();
  const todayIndex = today.getDay();

  const todayMeetingList = MeetingListData.filter(
    (item) => Number(item.day) === todayIndex
  );
  return (
    <Section className={cn("py-4", className)}>
      {todayMeetingList.length < 1 && (
        <Paragraph>There aren’t any meetings scheduled for today</Paragraph>
      )}
      <div
        className={cn(
          "grid grid-cols-1 place-items-center gap-2 lg:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {todayMeetingList?.map((item, idx) => (
          <MeetingCard key={idx} item={item} className="h-full max-w-[700px]" />
        ))}
      </div>
    </Section>
  );
}
