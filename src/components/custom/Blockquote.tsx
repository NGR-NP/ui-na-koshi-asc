import React from "react";

import { cn } from "@/lib/utils";

type BlockquoteProps = React.BlockquoteHTMLAttributes<HTMLQuoteElement>;
const BlockQuote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, ...props }) => {
    return (
      <blockquote
        className={cn(
          "mt-6 w-fit rounded-e-md border-l-2 bg-muted/10 px-6 py-5 italic shadow-sm",
          className
        )}
        {...props}
      />
    );
  }
);
BlockQuote.displayName = "BlockQuote";
export { BlockQuote };

// “After all,” he said, “everyone enjoys a good joke, so it&apos;s only fair
// that they should pay for the privilege.”
