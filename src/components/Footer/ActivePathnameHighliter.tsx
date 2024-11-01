"use client";

import { usePathname } from "next/navigation";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import { NavigationMenuLink } from "../ui/navigation-menu";

interface ActivePathnameHighliterProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeStyle?: string;
  asChild?: boolean;
}
export default function ActivePathnameHighliter({
  children,
  href,
  className,
  activeStyle,
  asChild = false,
}: ActivePathnameHighliterProps) {
  const pathname = usePathname();
  const active = pathname === href;
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={cn(
        className,
        active && `isActive text-primary ${activeStyle}`,
        "group"
      )}
      data-active={active}
    >
      {children}
    </Comp>
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
