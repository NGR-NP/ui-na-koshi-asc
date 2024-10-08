import React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
  multiParagraph?: boolean;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, multiParagraph = false, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        ref={ref}
        className={cn(
          "text-pretty text-base leading-7 text-muted-foreground",
          multiParagraph ? "[&:not(:first-child)]:mt-6" : "",
          className
        )}
        {...props}
      />
    );
  }
);
Paragraph.displayName = "Paragraph";

export { Paragraph };
