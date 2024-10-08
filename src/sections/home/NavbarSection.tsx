import Image from "next/image";
import Link from "next/link";

import { CircleUser } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ToggleTheme from "@/components/ThemeSwitcher";
import { NavMenu } from "@/components/nav/home/NavMenu";

import { LogoNAKoshiWhite, LogoNaKoshi } from "@/constant/images";

import SideNavbar from "./SideNavbar";

export default function NavbarSection() {
  return (
    <div className="sticky top-0 z-50 h-16 border-b bg-background/50 backdrop-blur-md">
      <header className="mx-auto flex h-full max-w-screen-2xl items-center gap-4 px-section-sm lg:px-section-md 2xl:px-0">
        <nav className="hidden max-w-screen-2xl flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/" className="flex items-center space-x-3 py-2">
            <Image
              quality={25}
              width={50}
              height={50}
              src={LogoNAKoshiWhite.src}
              className="hidden size-10 rounded-full dark:block lg:size-12 xl:size-14"
              alt="NA koshi area service committee logo"
            />
            <Image
              width={50}
              height={50}
              src={LogoNaKoshi.src}
              className="size-10 rounded-full mix-blend-multiply dark:hidden lg:size-12 xl:size-14"
              alt="NA koshi area service committee logo"
            />
            <div>
              <p className="hidden self-center whitespace-nowrap font-serif text-base font-bold max-[370px]:text-sm lg:block">
                Narcotics Anonymous
              </p>
              <p className="self-center whitespace-nowrap font-serif text-base font-bold max-[370px]:text-sm lg:hidden">
                NA
              </p>
              <p className="self-center whitespace-nowrap font-sans text-sm font-semibold text-foreground/70 md:text-[1.5dvw] lg:text-sm">
                Koshi Area
              </p>
            </div>
          </Link>
          <NavMenu />
        </nav>
        <SideNavbar />
        <div className="flex w-full items-center gap-4 md:ml-auto md:flex-[0.5] md:gap-2 lg:gap-4">
          <div className="ml-auto sm:flex-initial">
            <ToggleTheme className="bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="size-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}
