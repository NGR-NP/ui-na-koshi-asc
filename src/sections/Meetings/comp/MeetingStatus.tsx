"use client";

import { checkMeetingStatus } from "@/lib/meeting-time-status";
import { cn } from "@/lib/utils";

import SimpleTooltipComp from "@/components/custom/SimpleTooltip";

interface itemProps {
  item: MeetingListType;
}
export function MeetingStatusTooltip({ item }: itemProps) {
  const status = checkMeetingStatus(item);

  return (
    <>
      {status.live == 0 && (
        <SimpleTooltipComp content={status.message}>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {status.shortMessage}
          </p>
        </SimpleTooltipComp>
      )}
    </>
  );
}

export function MeetingStatusIndecator({ item }: itemProps) {
  const status = checkMeetingStatus(item);

  return (
    <IconDot
      content={status.message}
      danger={status.live === 0 && true}
      success={status.live === 2 && true}
      yellow={status.live === 1 && true}
    />
  );
}

interface iconDotProps {
  className?: string;
  danger?: boolean;
  success?: boolean;
  yellow?: boolean;
  content?: string;
}

export const IconDot = ({
  className,
  danger,
  success,
  yellow,
  content,
}: iconDotProps) => {
  return (
    <SimpleTooltipComp content={content}>
      <div
        className={cn(
          "size-2 rounded-full border-none bg-gray-400 ring-1 ring-gray-500 ring-offset-2 ring-offset-card",
          success && "bg-green-400 ring-green-500",
          danger && "bg-red-600 ring-red-600",
          yellow && "bg-yellow-400 ring-yellow-500",
          className
        )}
      />
    </SimpleTooltipComp>
  );
};
