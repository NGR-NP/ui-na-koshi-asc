import Link from "next/link";

import { IconWhatsapp } from "@/components/Svg/svgicons";
import { Heading } from "@/components/custom/Heading";
import { Paragraph } from "@/components/custom/Paragraph";
import { Section } from "@/components/custom/Section";

export default function NeedHelpSection() {
  return (
    <div className="relative h-44 w-full max-[400px]:h-48 max-[350px]:h-56">
      <Section className="absolute inset-x-0 -top-12 z-10 mx-auto w-full max-w-screen-md space-y-4 rounded-t-3xl bg-background py-8 ring-[12px] ring-background/20 ring-offset-[12px] ring-offset-background/25 transition-none duration-500 animate-in slide-in-from-bottom-10 dark:ring-0 dark:ring-offset-0 sm:shadow-xl dark:sm:shadow-none md:rounded-xl md:px-9 2xl:-top-24">
        <Heading
          centerOnMobile
          className="text-primary dark:text-foreground"
          asChild
        >
          <h5>Need Help?</h5>
        </Heading>
        <Paragraph>
          For immediate assistance, please call or send a message via{" "}
          <span className="text-nowrap">
            WhatsApp
            <sup className="inline-block brightness-90 duration-300 hover:scale-105 hover:brightness-100 hover:duration-200 dark:brightness-75">
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
