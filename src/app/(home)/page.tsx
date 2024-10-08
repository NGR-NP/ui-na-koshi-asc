import MeetingSection from "@/sections/MeetingSection";
import MerchandiseSection from "@/sections/MerchandiseSection";
import AboutAddictSection from "@/sections/home/AboutAddictSection";
import IntroSection from "@/sections/home/IntroSection";
import NeedHelpSection from "@/sections/home/NeedHelpSection";
import JustForToDaySection from "@/sections/justForToday/JustForTodaySection";

export default function Home() {
  return (
    <main className="flex min-h-[55dvh] flex-col items-center justify-between space-y-10 bg-background">
      <IntroSection />
      <NeedHelpSection />
      <AboutAddictSection />
      <JustForToDaySection className="mt-14" />

      <MeetingSection className="mt-14 2xl:px-0" />
      <MerchandiseSection />
    </main>
  );
}
