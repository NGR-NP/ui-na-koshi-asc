import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { ExternalLinkIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const ExternalLinkVariants = cva("", {
  variants: {
    variant: {
      default: "",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof ExternalLinkVariants> {
  href?: string;
  icon?: React.ReactNode;
}

const ExternalLink = React.forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ className, variant, href, icon, ...props }, ref) => {
    const Icon = icon ? (
      icon
    ) : (
      <ExternalLinkIcon size={18} className="h-4 w-6 items-center" />
    );
    return (
      <div className="flex items-center justify-end gap-4 text-end">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref}
          className={cn(ExternalLinkVariants({ variant, className }))}
        >
          {props.children}
        </a>
        {Icon && href && Icon}
      </div>
    );
  }
);
ExternalLink.displayName = "ExternalLink";

export { ExternalLink, ExternalLinkVariants };
