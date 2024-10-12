import { Heading } from "@/components/custom/Heading";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section, WrapperSection } from "@/components/custom/Section";

export default function AboutNAProgramSection() {
  return (
    <WrapperSection className="bg-primary dark:bg-primary/60">
      <Section>
        <div className="space-y-8">
          <Heading
            asChild
            centerOnMobile
            variant={"h1"}
            className="text-primary-foreground"
          >
            <h2>{aboutNaData.title}</h2>
          </Heading>
          <div>
            {aboutNaData.description.map((desc, index) => (
              <Paragraph
                multiParagraph
                key={index}
                className="text-primary-foreground/85"
              >
                {desc}
              </Paragraph>
            ))}
          </div>
        </div>
      </Section>
    </WrapperSection>
  );
}

const aboutNaData = {
  title: "What is the Narcotics Anonymous Program?",
  shortDesc:
    "Narcotics Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from addiction to drugs.",
  description: [
    "Narcotics Anonymous (NA) is a nonprofit group for people who have problems with drugs. We are recovering addicts who meet regularly to help each other stay clean. Our program is about completely stopping all drug use. The only requirement to join is a desire to stop using drugs.",

    "We encourage new members to keep an open mind and to be kind to themselves. Our program is based on simple ideas that we can use in our daily lives. The most important thing is that these ideas work.",

    "There are no strings attached to NA. We are independent and not connected to any other organizations. You do not have to pay any fees, sign any promises, or make commitments. We are not linked to political, religious, or law enforcement groups, and no one is watching us.",

    "Anyone can join us, no matter their age, race, gender, beliefs, or religion. We do not care about your past drug use or what you have done; we only care about what you want to do to solve your problem and how we can help you.",

    "In our meetings, newcomers are the most important people because we believe that we can only stay clean by helping others. From our experience, we have learned that people who come to our meetings regularly are more likely to stay clean.",
  ],
  // description: "Narcotics Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from addiction to drugs. The only requirement for membership is a desire to stop using drugs. There are no dues or fees for membership. Narcotics Anonymous is not allied with any sect, denomination, politics, organization or institution; does not wish to engage in any controversy; neither endorses nor opposes any causes. Our common welfare should come first; personal recovery depends upon NA unity. Narcotics Anonymous has no opinion on outside issues; hence the NA name ought never be drawn into public controversy. Narcotics Anonymous has no opinion on outside issues; hence the NA name ought never be drawn into public controversy. Narcotics Anonymous has no opinion on outside issues; hence the NA name ought never be drawn into public controversy.",
};
