"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import CALL from "@/assets/icons/call.png";
import MAILDARK from "@/assets/icons/mail-dark.png";

export default function FooterCTAButton() {
  return (
    <>
      <Links
        className="m-0 p-0 hover:animate-bounce active:scale-95 active:animate-none max-md:hidden"
        href="mail:nakoshiasc@gmail.com"
      >
        <Image
          width="64"
          height="64"
          src={MAILDARK}
          alt="mail us for support and guidance"
        />
      </Links>
      <Links
        href="tel:+977-9704503606"
        className="-bottom-5 right-3 animate-bounce hover:scale-105 hover:animate-none active:scale-95 md:hidden"
      >
        <Image
          className="rotate-90 -scale-100"
          width="64"
          height="64"
          src={CALL}
          alt="click here to talk with someone who's been there"
        />
      </Links>
    </>
  );
}

const Links = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link href={href} className={cn("absolute bottom-3 right-10", className)}>
      {children}
    </Link>
  );
};
