import Link from "next/link";

import { PhoneCall } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { LoadingImg, NextImage } from "@/components/custom/LoadingImage";

import MountainView from "@/assets/img/nepal-mountain.jpg";
import { PHONE_NUMBER } from "@/constant/contact";

export default function IntroSection() {
  return (
    <section className="h-[650px] w-full overflow-hidden transition-all ease-in-out xl:h-[700px] 2xl:h-[84dvh]">
      <AspectRatio
        ratio={16 / 9}
        className="h-[650px] w-full transition-all duration-1000 xl:h-[700px] 2xl:h-[84dvh]"
      >
        <LoadingImg>
          <NextImage
            fill
            src={MountainView}
            alt="Nepal Mountain view"
            loadingClassName=" brightness-[0.3] dark:brightness-[0.1]"
            className="size-full object-cover object-top bg-blend-soft-light blur-sm transition-all duration-500"
          />
          <div className="absolute size-full bg-black/70" />
        </LoadingImg>

        <div className="absolute left-0 top-0 flex size-full flex-col justify-center space-y-5 px-section-sm md:px-section-md">
          <div className="max-w-screen-md space-y-3">
            <h1 className="animate-slide-down text-pretty bg-transparent text-[6vw] font-bold leading-snug text-slate-50 sm:text-3xl sm:leading-normal md:text-4xl lg:text-5xl">
              WELCOME TO{" "}
              <span className="sm:text-nowrap">NARCOTICS ANONYMOUS</span>{" "}
              <span className="text-nowrap">KOSHI ASC</span>
            </h1>
            <p className="text-pretty text-sm text-slate-200 animate-in slide-in-from-bottom-4 max-[450px]:text-[3.2dvw] md:text-base">
              If you think you might have a drug problem and want to stop using
              them, we can help.
            </p>
          </div>
          <Separator className="max-w-screen-md bg-slate-400" />
          <div className="max-w-screen-md space-y-6">
            <p className="text-pretty text-sm text-slate-400 animate-in slide-in-from-top-4 max-[450px]:text-[3.2dvw] sm:text-slate-300 md:text-base">
              Narcotics Anonymous (NA) is a nonprofit fellowship of men and
              women for whom drugs have become a major problem. We are
              recovering addicts who meet regularly to support each other in
              staying clean.
            </p>
            <Button asChild animation={"scale-up"}>
              <Link href={`tel:${PHONE_NUMBER}`}>
                <PhoneCall className="mr-2 size-4" />
                HelpLine 9704503606
              </Link>
            </Button>
          </div>
        </div>
      </AspectRatio>
    </section>
  );
}
