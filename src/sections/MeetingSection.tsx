import { compareAsc, startOfToday } from "date-fns";

import { cn } from "@/lib/utils";

import { MettingCard } from "@/components/card/mettingsCard";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section } from "@/components/custom/Section";

interface MettingListProps {
  className?: string;
}

export async function GetMettingLists() {
  const res = await fetch(
    "https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json",
    { next: { revalidate: 286400, tags: ["metting-lists"] } }
  );

  const data: Array<MettingListType> = await res.json();
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

export default async function MeetingSection({ className }: MettingListProps) {
  const mettingListData = await GetMettingLists();
  const today = startOfToday();
  const todayIndex = today.getDay();

  // Filter for meetings scheduled today
  const todayMettingList = mettingListData.filter(
    (item) => Number(item.day) === todayIndex
  );

  const upcomingMettingList = mettingListData
    .filter((item) => Number(item.day) > todayIndex)
    .sort((a, b) =>
      compareAsc(
        getNextDateForDay(Number(a.day)),
        getNextDateForDay(Number(b.day))
      )
    );

  // Determine which meetings to display
  const displayMettings = todayMettingList.length
    ? todayMettingList
    : upcomingMettingList.slice(0, 3);
  return (
    <Section className={className}>
      {todayMettingList.length < 1 && (
        <Paragraph>
          There aren&apos;t any meetings scheduled but here are some upcomming
          mettings
        </Paragraph>
      )}
      <div
        className={cn(
          "grid grid-cols-1 place-items-center gap-2 lg:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {displayMettings?.map((item, idx) => (
          <MettingCard key={idx} item={item} className="h-full max-w-[700px]" />
        ))}
      </div>
    </Section>
  );
}
