import React from "react";

import { cn } from "@/lib/utils";

type MainProps = React.HTMLAttributes<HTMLDivElement>;

const Main = React.forwardRef<HTMLDivElement, MainProps>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "flex min-h-[55dvh] flex-col items-center justify-between bg-background",
          className
        )}
        {...props}
      />
    );
  }
);
Main.displayName = "Main";

export { Main };
