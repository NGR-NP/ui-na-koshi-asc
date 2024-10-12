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
    (item) => item.type !== "online"
  );
  return datas;
}
interface PhysicalMeetingsSectionProps {
  className?: string;
}
export default async function PhysicalMeetingsSection({
  className,
}: PhysicalMeetingsSectionProps) {
  const res = await GetMeetingLists();

  const physicalMeetingData = HelperSortMeetings({ data: res });
  return (
    <WrapperSection>
      <Section className={cn("py-4", className)}>
        {!physicalMeetingData.length && (
          <Paragraph>There aren’t any physical meetingsa</Paragraph>
        )}
        <div
          className={cn(
            "grid grid-cols-1 place-items-center gap-2 lg:grid-cols-2 xl:grid-cols-3"
          )}
        >
          {physicalMeetingData?.map((item, idx) => (
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
