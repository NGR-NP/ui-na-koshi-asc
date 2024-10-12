import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  ActivePathnameHomeNavHighliter,
  ActivePathnameNavItemHighliter,
} from "@/components/Footer/ActivePathnameHighliter";
import { UserGroup } from "@/components/Svg/Other";
import { Paragraph } from "@/components/custom/Paragraph";

import {
  PAGE_ABOUT,
  PAGE_CONTACT,
  PAGE_Meeting,
  Sub_PAGE_ABOUT,
  Sub_PAGE_EVENT,
  Sub_PAGE_Meeting,
} from "@/constant/Links";
import { Route_NepalRegion } from "@/constant/RoutesWithName";
import { LogoNAKoshiWhite, LogoNaKoshi } from "@/constant/images";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <ActivePathnameHomeNavHighliter href={PAGE_ABOUT}>
            <NavigationMenuTrigger className="bg-transparent">
              About
            </NavigationMenuTrigger>
          </ActivePathnameHomeNavHighliter>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[650px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-3">
                <ActivePathnameNavItemHighliter href={PAGE_ABOUT}>
                  <Link
                    className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/50 to-muted p-6 no-underline shadow-md outline-none focus:shadow-md"
                    href={PAGE_ABOUT}
                  >
                    <Image
                      src={LogoNAKoshiWhite}
                      height="100"
                      width="100"
                      className="hidden size-16 rounded-full dark:block"
                      alt="NA koshi area service committee logo"
                    />
                    <Image
                      src={LogoNaKoshi}
                      height="100"
                      width="100"
                      className="size-16 rounded-full dark:hidden"
                      alt="NA koshi area service committee logo"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      About NA Koshi ASC
                    </div>
                    <p className="text-balance text-sm leading-snug text-muted-foreground">
                      NA Koshi Area Service Committee was established in 2023,
                      with the aim of providing a platform for individuals
                      struggling with addiction to seek support, guidance, and
                      recovery.
                    </p>
                  </Link>
                </ActivePathnameNavItemHighliter>
              </li>
              <ListItem href={Sub_PAGE_ABOUT.NA} title="About NA">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem
                href={Route_NepalRegion.href}
                title={Route_NepalRegion.name}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href={PAGE_CONTACT} title="Contact Us">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Members
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {Members.map((member) => (
                <ListItem
                  key={member.title}
                  title={member.title}
                  href={member.href}
                >
                  {member.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Meetings
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-4">
                <ActivePathnameNavItemHighliter href={PAGE_Meeting}>
                  <Link
                    className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={PAGE_Meeting}
                  >
                    <UserGroup />
                    <Paragraph className="mb-2 mt-4 text-pretty text-lg font-medium text-foreground">
                      Find Meetings in Koshi Area
                    </Paragraph>
                    <Paragraph className="text-wrap text-sm leading-snug">
                      We understand that staying clean can be incredibly
                      challenging, especially without the support of a
                      community. That&apos;s why we&apos;ve compiled a list of
                      meetings happening in the Koshi area. We&apos;re here to
                      help you stay clean and sober as you navigate your journey
                      to recovery.
                    </Paragraph>
                  </Link>
                </ActivePathnameNavItemHighliter>
              </li>
              <ListItem href={Sub_PAGE_Meeting.TODAY} title="Today Meetings">
                Join our online meetings from the comfort of your home.
              </ListItem>
              <ListItem href={Sub_PAGE_Meeting.ONLINE} title="Online Meetings">
                Join our online meetings from the comfort of your home.
              </ListItem>
              <ListItem
                href={Sub_PAGE_Meeting.PHYSICAL}
                title="Physical Meetings"
              >
                Find in-person meetings happening across the Koshi area.
              </ListItem>
              <ListItem href={Sub_PAGE_Meeting.HYBRID} title="Hybrid Meetings">
                Attend hybrid meetings, both in-person and online.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Events
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {Events.map((Event) => (
                <ListItem
                  key={Event.title}
                  title={Event.title}
                  href={Event.href}
                >
                  {Event.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href={CONTACT} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <ActivePathnameNavItemHighliter href={href || "#"}>
        <Link
          href={href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md bg-popover p-3 leading-none no-underline shadow-sm outline-none transition-colors hover:bg-accent/50 hover:text-popover-foreground hover:shadow-md focus-visible:bg-accent focus-visible:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-data-[active]:font-bold">
            {title}
          </div>
          <Paragraph className="line-clamp-2 text-sm leading-snug focus-visible:text-accent-foreground">
            {children}
          </Paragraph>
        </Link>
      </ActivePathnameNavItemHighliter>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Events: { title: string; href: string; description: string }[] = [
  {
    title: "upcoming events",
    href: Sub_PAGE_EVENT.UPCOMING,
    description: "Find upcoming events in Koshi Area",
  },
  {
    title: "past events",
    href: Sub_PAGE_EVENT.PAST,
    description: "Events that was held in Koshi Area",
  },
  {
    title: "Workshop",
    href: Sub_PAGE_EVENT.WORKSHOP,
    description: "Find all workshop's in Koshi Area",
  },
];

const Members: { title: string; href: string; description: string }[] = [
  {
    title: "Committee Report",
    href: "#",
    description: "Committee Report",
  },
  {
    title: "History",
    href: "#",
    description: "History",
  },
];
