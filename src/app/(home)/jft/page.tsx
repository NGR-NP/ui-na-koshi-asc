import { Main } from "@/components/custom/MainComp";

import JustForToDaySection from "@/sections/justForToday/JustForTodaySection";
import UserTimeZone from "@/sections/justForToday/comp/setUserTimeZone";

export default async function JFTPage({
  searchParams: { today, timeZone },
}: JFTPageProps) {
  console.log(today);

  return (
    <Main>
      <JustForToDaySection date={today} />
      <UserTimeZone defTimeZone={timeZone} />
    </Main>
  );
}
