import { ReactNode } from "react";

import { Clock, Map, PersonStanding } from "lucide-react";

import { checkMeetingStatus, getDayName } from "@/lib/meeting-time-status";
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import {
  IconCalender,
  IconDot,
  IconGroupUsers,
  IconLocation,
} from "@/components/Svg/svgicons";
import { ExternalLink } from "@/components/custom/ExternalLink";

import { LogoNAKoshiWhite, LogoNaKoshi } from "@/constant/images";

import IconMoniter from "../Svg/MoniterSvgIcon";
import SimpleTooltipComp from "../custom/SimpleTooltip";
import { Separator } from "../ui/separator";

interface MeetingCardProps {
  item: MeetingListType;
  className?: string;
}
export const MeetingCard = ({ item, className }: MeetingCardProps) => {
  const status = checkMeetingStatus(item);
  const shortName = item.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <Card
      className={cn(
        "h-auto max-w-[500px] cursor-pointer overflow-hidden rounded-lg bg-card text-card-foreground shadow-md hover:shadow-lg",
        className
      )}
    >
      <CardHeader>
        <div className="flex flex-col place-items-start gap-4 sm:flex-row">
          <Avatar className="size-14 overflow-visible transition-all duration-300 hover:shadow-2xl">
            <AvatarImage
              src={item.logo || LogoNaKoshi.src}
              alt={`${item.name} logo`}
              className={cn(
                item?.logo ? "" : "mix-blend-multiply dark:hidden",
                "animate-pop-up transition-all duration-100"
              )}
            />
            <AvatarImage
              src={item.logo || LogoNAKoshiWhite.src}
              alt={`${item.name} logo`}
              className={cn(
                item?.logo ? "" : "hidden dark:block",
                "animate-pop-up transition-all duration-200"
              )}
            />
            <div className="absolute bottom-1 right-2 ml-auto font-medium">
              <IconDot
                content={status.message}
                danger={status.live === 0 && true}
                success={status.live === 2 && true}
                yellow={status.live === 1 && true}
              />
            </div>
            <AvatarFallback className="transition-all duration-300">
              {shortName}
            </AvatarFallback>
          </Avatar>
          <div className="w-full space-y-2">
            <div className="flex w-full justify-between">
              <div className="grid gap-1">
                <p className="line-clamp-2 text-base font-medium leading-none">
                  {item?.name}
                </p>
                {status.live == 0 && (
                  <SimpleTooltipComp content={status.message}>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {status.shortMessage}
                    </p>
                  </SimpleTooltipComp>
                )}
              </div>
            </div>
            <ul className="flex w-full flex-col flex-wrap justify-between gap-3 pl-1.5">
              <HeaderDayandCityCOmp item={item} />
            </ul>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="relative flex h-auto w-full flex-auto flex-col overflow-y-auto break-words pt-4 text-left subpixel-antialiased">
          <ul className="flex flex-col gap-y-2">
            <li className="group flex w-full flex-wrap items-start justify-between gap-x-2 gap-y-1 text-foreground/80">
              <CardDescription className="flex items-center gap-2 group-hover:text-foreground">
                {item.type == "physical" ? (
                  <IconGroupUsers className="size-5" />
                ) : item.type === "online" ? (
                  <IconMoniter className="size-[1.1rem]" />
                ) : (
                  <PersonStanding size={18} />
                )}
                Type:&emsp;
              </CardDescription>
              <CardDescription className="text-base group-hover:text-foreground">
                <b>{item.type}</b>
              </CardDescription>
            </li>
            <li className="group flex w-full flex-wrap items-start justify-between gap-x-2 gap-y-1 text-foreground/80">
              <CardDescription className="flex items-center gap-2 group-hover:text-foreground">
                <Clock size={18} /> Time:&emsp;
              </CardDescription>
              <CardDescription className="text-base group-hover:text-foreground">
                <b className="text-nowrap">{item?.startTime}</b>&nbsp;to&nbsp;
                <b className="text-nowrap">{item.endTime}</b>
              </CardDescription>
            </li>
            <li className="group flex w-full items-start justify-between gap-x-2 gap-y-1 text-foreground/80 max-sm:flex-col max-sm:items-stretch">
              <CardDescription className="flex items-center gap-2 group-hover:text-foreground">
                <Map size={18} /> {item?.gMap ? "Direction" : "Address"}:&emsp;
              </CardDescription>
              <ExternalLink
                href={item.gMap}
                className={`line-clamp-2 group-hover:text-foreground ${
                  item?.gMap && "underline focus-visible:underline"
                }`}
              >
                {item.address}
              </ExternalLink>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
interface LionHeadersProps {
  icon: SvgIconComponentType;
  children: ReactNode;
}
const LionHeaders = ({ children, icon }: LionHeadersProps) => {
  const Icon = icon;
  return (
    <li className="group relative flex items-center gap-1 pl-4 text-muted-foreground hover:text-foreground">
      <Icon className="absolute -left-2 top-1 size-4" />
      <p className="text-base">{children}</p>
    </li>
  );
};

const HeaderDayandCityCOmp = ({
  item,
  className,
}: {
  item: MeetingListType;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-wrap justify-between gap-3 gap-x-10 gap-y-1",
        className
      )}
    >
      <LionHeaders icon={IconLocation}>{item?.city}</LionHeaders>
      <LionHeaders icon={IconCalender}>{getDayName(item?.day)}</LionHeaders>
    </div>
  );
};
