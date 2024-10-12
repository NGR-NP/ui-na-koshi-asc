import { HelperSortMeetings } from "@/lib/other/helperMeeting";
import { cn } from "@/lib/utils";

import { MeetingCard } from "@/components/card/meetingsCard";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section, WrapperSection } from "@/components/custom/Section";

import CacheTags from "@/constant/CacheTags";

async function GetMeetingLists() {
  const res = await fetch(
    "https://gist.githubusercontent.com/Alinalamakarki/5c4ce5ccc26c636cbda2e37a190962eb/raw/na-koshi-asc-metting-list.json",
    { next: { revalidate: 286400, tags: [CacheTags.MeetingList] } }
  );

  const data: MeetingListType[] = await res.json();
  const datas: MeetingListType[] = data.filter(
    (item) => item.type !== "physical"
  );
  return datas;
}
interface OnlineMeetingsSectionProps {
  className?: string;
}
export default async function OnlineMeetingsSection({
  className,
}: OnlineMeetingsSectionProps) {
  const res = await GetMeetingLists();

  const onlineMeetingData = HelperSortMeetings({ data: res });
  return (
    <WrapperSection>
      <Section className={cn("py-4", className)}>
        {!onlineMeetingData.length && (
          <Paragraph>There aren’t any online meetingsa</Paragraph>
        )}
        <div
          className={cn(
            "grid grid-cols-1 place-items-center gap-2 lg:grid-cols-2 xl:grid-cols-3"
          )}
        >
          {onlineMeetingData?.map((item, idx) => (
            <MeetingCard
              key={idx}
              item={item}
              className="h-full max-w-[700px]"
            />
          ))}
        </div>
      </Section>
    </WrapperSection>
  );
}
