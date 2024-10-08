import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SimpleTooltipCompProps {
  content?: string;
  tooltipDir?:
    | "top-start"
    | "top"
    | "top-end"
    | "bottom-start"
    | "bottom"
    | "bottom-end"
    | "left-start"
    | "left"
    | "left-end"
    | "right-start"
    | "right"
    | "right-end";
  children: React.ReactNode;
}
export default function SimpleTooltipComp({
  children,
  content,
  tooltipDir,
}: SimpleTooltipCompProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent data-lide={tooltipDir}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
