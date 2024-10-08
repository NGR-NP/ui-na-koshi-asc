import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLDivElement>;

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "mx-auto max-w-screen-2xl space-y-8 px-section-sm md:px-section-md",
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

const WrapperSection = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full bg-secondary py-12", className)}
        {...props}
      />
    );
  }
);
WrapperSection.displayName = "WrapperSection";
export { Section, WrapperSection };
