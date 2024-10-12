import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLDivElement>;

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "mx-auto max-w-screen-2xl space-y-8 px-4 sm:px-section-sm md:px-section-md",
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
      <div className="w-full">
        <div
          ref={ref}
          className={cn("w-full bg-background py-16", className)}
          {...props}
        />
      </div>
    );
  }
);
WrapperSection.displayName = "WrapperSection";
export { Section, WrapperSection };
