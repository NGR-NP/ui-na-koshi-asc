import { cn } from "@/lib/utils";

import { BlockQuote } from "@/components/custom/Blockquote";
import { Heading } from "@/components/custom/Heading";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section } from "@/components/custom/Section";

interface JustForTodaySectionProps {
  className?: string;
}
export default function JustForToDaySection({
  className,
}: JustForTodaySectionProps) {
  return (
    <Section className={cn("w-full", className)}>
      <div className="space-y-6">
        <Heading className="w-fit py-2 font-serif text-3xl font-bold text-foreground/70">
          Just For Today
        </Heading>
        <div className="flex flex-wrap justify-between">
          <Paragraph className="font-mono text-xl font-semibold" asChild>
            <time>October 7</time>
          </Paragraph>
          <Paragraph className="text-nowrap font-mono text-lg font-medium italic">
            <span className="font-normal text-muted-foreground/70">Page</span>{" "}
            293
          </Paragraph>
        </div>
        <Heading className="py-4 text-center font-serif text-4xl font-bold text-foreground/90">
          Depending on our Higher Power
        </Heading>
        <BlockQuote className="w-fit text-pretty lg:ml-16">
          <b className="text-xl font-black text-muted-foreground">“</b>As
          recovering addicts, we find that we are still dependent, but our
          dependence has shifted from the things around us to a loving God and
          the inner strength we get in our relationship with Him.
          <b className="text-xl font-black text-muted-foreground">”</b>
        </BlockQuote>
        <Paragraph className="pt-6 text-center">Basic Text, p. 71</Paragraph>
        <div className="">
          <Paragraph className="text-pretty text-foreground" multiParagraph>
            For many addicts, rebelliousness is second nature. We didn&apos;t
            want to depend on anyone or anything, and especially not on God. The
            beauty of using, we thought, was that it gave us the power to be and
            feel anything we wanted, all by ourselves. But the price we paid for
            this illusory freedom was a dependence beyond our worst nightmares.
            Rather than freeing us, using enslaved us.
          </Paragraph>
          <Paragraph className="text-pretty text-foreground" multiParagraph>
            When we came to Narcotics Anonymous, we learned that dependence on
            God didn&apos;t have to mean what we may have thought it meant. Yes,
            if we wanted to be restored to sanity, we would need to tap “a Power
            greater than ourselves.” However, we could choose our own concept of
            this Higher Power--we could even make one up. Dependence on a Higher
            Power would not limit us, we discovered; it would free us.
          </Paragraph>
          <Paragraph className="text-pretty text-foreground" multiParagraph>
            The Power we find in recovery is the power we lacked on our own. It
            is the love we were afraid to depend on others for. It is the sense
            of personal direction we never had, the guidance we couldn&apos;t
            humble ourselves to ask for or trust others to give. It is all these
            things, and it is our own. Today, we are grateful to have a Higher
            Power to depend on.
          </Paragraph>
        </div>
        <div>
          <BlockQuote className="mt-16 flex flex-wrap items-end gap-x-3 gap-y-2">
            <p className="font-serif text-xl font-semibold leading-none tracking-tight">
              Just for Today:{" "}
            </p>
            <Paragraph className="text-pretty text-base text-foreground/80">
              {" "}
              I will depend on the love and inner strength I draw from the God
              of my own understanding.
            </Paragraph>
          </BlockQuote>
        </div>
      </div>
    </Section>
  );
}
