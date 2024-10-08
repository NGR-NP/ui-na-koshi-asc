import Link from "next/link";

import { IconWhatsapp } from "@/components/Svg/svgicons";
import { Heading } from "@/components/custom/Heading";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section } from "@/components/custom/Section";

export default function NeedHelpSection() {
  return (
    <div className="relative h-36 w-full max-[400px]:h-48 max-[350px]:h-56">
      <Section
        // style={{ marginTop: "-3rem" }}
        className="absolute inset-x-0 -top-24 z-10 mx-auto w-full max-w-screen-md space-y-4 rounded-t-3xl bg-background py-8 shadow-xl ring-8 ring-secondary/10 ring-offset-[12px] ring-offset-secondary/15 dark:shadow-none dark:ring-0 dark:ring-offset-0 md:rounded-xl md:px-9"
      >
        <Heading className="text-primary dark:text-foreground" asChild>
          <h5>Need Help?</h5>
        </Heading>
        <Paragraph>
          For immediate assistance, please call or send a message via{" "}
          <span className="text-nowrap">
            WhatsApp
            <sup className="inline-block">
              <Link
                href="https://api.whatsapp.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <IconWhatsapp className="rounded-full" />
              </Link>
            </sup>{" "}
          </span>{" "}
          to 9704503606. We’re here to help you on your journey to recovery.
        </Paragraph>
      </Section>
    </div>
  );
}
