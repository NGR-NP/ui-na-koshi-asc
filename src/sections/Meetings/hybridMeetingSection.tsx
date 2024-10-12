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
    (item) => item.type === "hybrid"
  );
  return datas;
}
interface HybridMeetingsSectionProps {
  className?: string;
}
export default async function HybridMeetingsSection({
  className,
}: HybridMeetingsSectionProps) {
  const res = await GetMeetingLists();

  const HybridMeetingData = HelperSortMeetings({ data: res });
  return (
    <WrapperSection>
      <Section className={cn("py-4", className)}>
        {!HybridMeetingData.length && (
          <Paragraph>There aren’t any Hybrid meetingsa</Paragraph>
        )}
        <div
          className={cn(
            "grid grid-cols-1 place-items-center gap-2 lg:grid-cols-2 xl:grid-cols-3"
          )}
        >
          {HybridMeetingData?.map((item, idx) => (
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
