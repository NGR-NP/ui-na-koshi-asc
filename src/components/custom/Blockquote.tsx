import React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

interface BlockquoteProps
  extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  asChild?: boolean;
}

const BlockQuote: React.FC<BlockquoteProps> = ({
  className,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "blockquote";
  return (
    <Comp
      className={cn(
        "mt-6 w-fit rounded-e-md border-l-2 border-primary/80 bg-primary/5 px-6 py-5 italic shadow-sm dark:border-border dark:bg-primary/10",
        className
      )}
      {...props}
    />
  );
};

export { BlockQuote };

// “After all,” he said, “everyone enjoys a good joke, so it&apos;s only fair
// that they should pay for the privilege.”
