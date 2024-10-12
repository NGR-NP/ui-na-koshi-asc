"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { NavigationMenuLink } from "../ui/navigation-menu";

interface ActivePathnameHighliterProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeStyle?: string;
}
export default function ActivePathnameHighliter({
  children,
  href,
  className,
  activeStyle,
}: ActivePathnameHighliterProps) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={cn(
        className,
        active && `isActive text-primary ${activeStyle}`,
        "group"
      )}
      data-active={active}
    >
      {children}
    </div>
  );
}

export function ActivePathnameHomeNavHighliter({
  children,
  href,
  className,
}: ActivePathnameHighliterProps) {
  const pathname = usePathname();
  const active =
    pathname === href &&
    "rounded-md transition-colors  text-accent-foreground   bg-accent/50";
  return <div className={cn(active, className)}>{children}</div>;
}
export function ActivePathnameNavItemHighliter({
  children,
  href,
}: ActivePathnameHighliterProps) {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <NavigationMenuLink asChild active={isActive}>
      {children}
    </NavigationMenuLink>
  );
}
