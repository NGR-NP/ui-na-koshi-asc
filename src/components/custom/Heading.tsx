import React from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const titleVariants = cva(
  "scroll-m-20 text-balance font-semibold leading-none tracking-tight",
  {
    variants: {
      variant: {
        h1: "text-4xl font-extrabold lg:text-5xl ",
        h2: "text-3xl",
        default: "text-2xl",
        h4: "text-xl ",
        h5: "text-sm font-medium",
        h6: "text-xs font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3";
    return (
      <Comp
        ref={ref}
        className={cn(titleVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

export { Heading };
