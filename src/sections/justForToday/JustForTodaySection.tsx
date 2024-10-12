import { format } from "date-fns";

import { cn } from "@/lib/utils";

import { BlockQuote } from "@/components/custom/Blockquote";
import { Heading } from "@/components/custom/Heading";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section, WrapperSection } from "@/components/custom/Section";

import CacheTags from "@/constant/CacheTags";

async function GetJFT(date: string) {
  try {
    const res = await fetch(`https://just-for-today.onrender.com/jft/${date}`, {
      next: {
        revalidate: 86400,
        tags: [`${CacheTags.JFT}-${date}`],
      },
    });
    const data: TypeJustForToday = await res.json();
    if (res.status !== 200) return null;
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

interface JustForTodaySectionProps {
  className?: string;
}
function formatdDate(date: Date, type?: string) {
  return format(date, type || "yyyy-MM-dd");
}
export default async function JustForToDaySection({
  className,
}: JustForTodaySectionProps) {
  const data = await GetJFT(formatdDate(new Date()));

  if (!data) return null;
  return (
    <WrapperSection className="bg-background">
      <Section className={cn("w-full", className)}>
        <div className="space-y-6">
          <Heading className="w-fit py-2 font-serif text-3xl font-bold text-foreground/70 transition-none duration-700 animate-in slide-in-from-bottom-5">
            Just For Today
          </Heading>
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-2">
            <Paragraph className="font-mono text-xl font-semibold" asChild>
              <time>{formatdDate(data?.date, "MMMM, dd")}</time>
            </Paragraph>
            <Paragraph className="text-nowrap font-mono text-lg font-medium italic">
              <span className="font-normal text-muted-foreground/70">Page</span>{" "}
              {data?.page}
            </Paragraph>
          </div>
          <Heading
            autoRezide={"h3"}
            className="py-4 text-center font-serif text-5xl font-bold text-foreground/90"
          >
            {data?.title}
          </Heading>
          <BlockQuote className="w-fit text-pretty lg:ml-16">
            <b className="text-xl font-black text-muted-foreground">“</b>
            {data?.quote}
            <b className="text-xl font-black text-muted-foreground">”</b>
          </BlockQuote>
          <Paragraph className="pt-4 text-center">{data?.basic_text}</Paragraph>
          <div className="text-justify">
            {data?.content.map((item, index) => (
              <Paragraph
                key={index}
                className="text-pretty text-foreground"
                multiParagraph
              >
                {item}
              </Paragraph>
            ))}
          </div>
          <div>
            <BlockQuote
              asChild
              className="mt-16 flex flex-wrap items-end gap-x-3 gap-y-2"
            >
              <Heading
                asChild
                className="items-baseline space-x-4 font-serif text-xl font-semibold leading-none tracking-tight text-primary dark:text-foreground"
              >
                <h2>
                  Just for Today:{" "}
                  <Paragraph
                    asChild
                    className="text-pretty text-base text-foreground/80"
                  >
                    <span> {data?.just_for_today}</span>
                  </Paragraph>
                </h2>
              </Heading>
            </BlockQuote>
          </div>
        </div>
      </Section>
    </WrapperSection>
  );
}
