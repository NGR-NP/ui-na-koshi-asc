import { ReactNode } from "react";

import TopHelplineSection from "@/sections/TopHelplineSection";
import FooterSection from "@/sections/home/FooterSection";
import NavbarSection from "@/sections/home/NavbarSection";

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <TopHelplineSection />
      <NavbarSection />
      {children}
      <FooterSection />
    </>
  );
}
