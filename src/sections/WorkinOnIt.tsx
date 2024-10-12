import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Heading } from "@/components/custom/Heading";
import { Paragraph } from "@/components/custom/Paragraph";

import Facebook from "@/assets/icons/3d/facebook-small.png";
import { Route_FacebookPage } from "@/constant/RoutesWithName";
import { NUMBER } from "@/constant/contact";

export default function WorkingOnItSection({
  className,
}: {
  className?: string;
}) {
  return (
    <main
      className={cn(
        "grid min-h-[50dvh] place-items-center content-center space-y-2 py-4",
        className
      )}
    >
      <Heading>Working on it</Heading>
      <div className="text-center">
        <Paragraph multiParagraph={"sm"}>
          If you have any suggestion contact use by whatsapp {NUMBER}
        </Paragraph>
        <Paragraph multiParagraph={"sm"}>
          Or if you want to contribute to this project you can contact me by
          9810423036 or email me at tejbkarki2056@gmail.com
        </Paragraph>
      </div>
      <div>
        <Link href={Route_FacebookPage.href} target="_blank" rel="noreferrer">
          <Image
            className="pointer-events-none select-none"
            src={Facebook}
            alt="facebook"
          />
        </Link>
      </div>
    </main>
  );
}
