import Image from "next/image";
import Link from "next/link";

import { Home, ScrollText, ShoppingBag, TicketPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import ActivePathnameHighliter from "@/components/Footer/ActivePathnameHighliter";
import {
  IconAboutUsOutline,
  IconHandburgermenu,
  IconIdentificationCardOutline,
  IconUserGroupOutline,
} from "@/components/Svg/svgicons";

import NaKoshiAscLogo from "@/assets/logo/na_koshi_asc_logo.jpg";
import {
  PAGE_ABOUT,
  PAGE_CONTACT,
  PAGE_EVENT,
  PAGE_HOME,
  PAGE_LITERATURE,
  PAGE_MERCHANDISE,
  PAGE_Meeting,
} from "@/constant/Links";

export default function SideNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <IconHandburgermenu className="size-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 py-6 text-lg font-medium">
          <SheetTrigger asChild>
            <Link
              href="/"
              className="flex w-fit items-center gap-x-2.5 text-lg font-semibold"
            >
              <Image
                width={50}
                height={50}
                src={NaKoshiAscLogo}
                className="size-14 rounded-full max-[380px]:size-10"
                alt="NA koshi area service committee logo"
              />
              <div>
                <p className="self-center whitespace-nowrap pr-2 font-serif text-lg font-bold max-[380px]:text-[4.5dvw] sm:text-xl">
                  Narcotics Anonymous
                </p>
                <p className="self-center whitespace-nowrap font-sans text-base font-semibold text-foreground/70 max-[380px]:text-sm">
                  Koshi Area
                </p>
              </div>
              <span className="sr-only">
                Narcotics Anonymous Koshi Area Service Committee
              </span>
            </Link>
          </SheetTrigger>

          {Links.map((link) => {
            return (
              <ActivePathnameHighliter
                asChild
                key={link.link}
                href={link.link}
                activeStyle="bg-muted"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl hover:bg-muted/80 focus-visible:bg-muted/80"
              >
                <SheetTrigger asChild>
                  <Link
                    href={link.link}
                    className={
                      "flex w-full items-center gap-4 rounded-xl px-3 py-2 text-foreground/80 hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground group-[.isActive]:text-foreground"
                    }
                  >
                    <link.icon className="size-5" />
                    {link.name}
                  </Link>
                </SheetTrigger>
              </ActivePathnameHighliter>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
const Links = [
  { name: "Home", icon: Home, link: PAGE_HOME },
  { name: "Meetings", icon: IconUserGroupOutline, link: PAGE_Meeting },
  { name: "Events", icon: TicketPlus, link: PAGE_EVENT },
  { name: "Literature", icon: ScrollText, link: PAGE_LITERATURE },
  { name: "Merchandise", icon: ShoppingBag, link: PAGE_MERCHANDISE },
  { name: "About", icon: IconAboutUsOutline, link: PAGE_ABOUT },
  { name: "Contact", icon: IconIdentificationCardOutline, link: PAGE_CONTACT },
];
