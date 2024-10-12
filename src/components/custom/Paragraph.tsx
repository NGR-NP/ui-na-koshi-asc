import React from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// class varient authrity
const paragraphVariants = cva(
  "text-pretty text-base leading-7 text-foreground/85 ",
  {
    variants: {
      multiParagraph: {
        true: "[&:not(:first-child)]:mt-6",
        sm: "[&:not(:first-child)]:mt-2",
        md: "[&:not(:first-child)]:mt-4",
        lg: "[&:not(:first-child)]:mt-6",
      },
      centerOnMobile: {
        default: "max-sm:text-center",
        false: "max-sm:text-start",
      },
    },
    defaultVariants: {
      centerOnMobile: "default",
    },
  }
);

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    { className, multiParagraph, centerOnMobile, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        ref={ref}
        className={cn(
          paragraphVariants({ multiParagraph, centerOnMobile, className })
        )}
        {...props}
      />
    );
  }
);
Paragraph.displayName = "Paragraph";

export { Paragraph };
