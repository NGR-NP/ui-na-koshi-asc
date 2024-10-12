import { Main } from "@/components/custom/MainComp";

import TodayAndUpcommingMeetingSection from "@/sections/Meetings/Today&UpcommingMeetingsSection";
import AboutAddictSection from "@/sections/home/AboutAddictSection";
import AboutNAProgramSection from "@/sections/home/AboutNAProgramSection";
import IntroSection from "@/sections/home/IntroSection";
import NeedHelpSection from "@/sections/home/NeedHelpSection";
import JustForToDaySection from "@/sections/justForToday/JustForTodaySection";

export default function Home() {
  return (
    <Main>
      <IntroSection />
      <NeedHelpSection />
      <AboutAddictSection />
      <JustForToDaySection />
      <AboutNAProgramSection />

      <TodayAndUpcommingMeetingSection />
      {/* <MerchandiseSection /> */}
    </Main>
  );
}
