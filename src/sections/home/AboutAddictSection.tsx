import { Heading } from "@/components/custom/Heading";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section, WrapperSection } from "@/components/custom/Section";

export default function AboutAddictSection() {
  return (
    <WrapperSection className="bg-primary dark:bg-primary/60">
      <Section>
        <div className="space-y-2">
          <Paragraph className="text-start font-mono text-xl font-bold text-primary-foreground/50">
            About
          </Paragraph>
          <Heading
            variant={"h2"}
            centerOnMobile
            className="font-serif text-primary-foreground"
          >
            Addiction and Recovery
          </Heading>
          <div className="py-2">
            <Paragraph className="text-primary-foreground/90" multiParagraph>
              Addiction is a complex disease that affects individuals of all
              backgrounds. It’s characterized by compulsive drug seeking and
              use, despite negative consequences. Many people struggle with
              addiction due to genetic, environmental, and psychological
              factors.
            </Paragraph>
            <Paragraph className="text-primary-foreground/90" multiParagraph>
              While addiction can be a challenging journey, recovery is
              possible. Through treatment, support, and personal commitment,
              individuals can break free from the grip of addiction and rebuild
              their lives. If you or someone you know is struggling with
              addiction, know that help is available.
            </Paragraph>
          </div>
        </div>
      </Section>
    </WrapperSection>
  );
}
