"use client";

import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import MerchandiseCard from "./merchandiseCard";

interface MerchCarouselProps {
  merchs: merchType[];
}
export default function MerchCarousel({ merchs }: MerchCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="mx-auto w-full overflow-hidden py-8">
      <Carousel
        plugins={[plugin.current]}
        className="mx-auto w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselPrevious className="left-5 z-10 max-sm:hidden min-[1600px]:hidden" />
        <CarouselNext className="right-5 z-10 max-sm:hidden min-[1600px]:hidden" />

        <CarouselContent className="py-4">
          {merchs.map((merch) => {
            return (
              <CarouselItem
                key={merch.id}
                className="basis-auto min-[374px]:min-w-80 min-[400px]:min-w-96"
              >
                <MerchandiseCard merch={merch} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
