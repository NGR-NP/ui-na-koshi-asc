import { HelperSortMeetings } from "@/lib/other/helperMeeting";
import { cn } from "@/lib/utils";

import { MeetingCard } from "@/components/card/meetingsCard";
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

export default async function AllMeetingListsSection({
  className,
}: TodayMeetingListProps) {
  const data = await GetMeetingLists();
  const MeetingListData = HelperSortMeetings({ data });
  return (
    <Section className={cn("py-4", className)}>
      <div
        className={cn(
          "grid grid-cols-1 place-items-center gap-2 lg:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {MeetingListData?.map((item, idx) => (
          <MeetingCard key={idx} item={item} className="h-full max-w-[700px]" />
        ))}
      </div>
    </Section>
  );
}
