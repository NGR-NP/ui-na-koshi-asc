import { ReactNode } from "react";

import Link from "next/link";

import ActivePathnameHighliter from "@/components/Footer/ActivePathnameHighliter";
import FooterCTAButton from "@/components/FooterCTAButton";

import {
  APP_ROUTES,
  HelpCenterLinks,
  Route_Events,
  Route_Meetings,
} from "@/constant/RoutesWithName";

export default function FooterSection() {
  return (
    <footer className="static bg-accent px-section-sm text-secondary-foreground md:px-section-md">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="relative grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
          <div>
            <FooterLinkTitle>Links</FooterLinkTitle>
            <FooterLinks map={APP_ROUTES} />
          </div>
          <div>
            <Link href="/Meetings">
              <FooterLinkTitle>Meetings</FooterLinkTitle>
            </Link>

            <FooterLinks map={Route_Meetings} />
          </div>
          <div>
            <Link href="/events">
              <FooterLinkTitle>Events</FooterLinkTitle>
            </Link>

            <FooterLinks map={Route_Events} />
          </div>
          <div>
            <FooterLinkTitle>Help center</FooterLinkTitle>
            <FooterLinks map={HelpCenterLinks} />
          </div>
          <FooterCTAButton />
        </div>
        <div className="bg-popover/70 px-4 py-6 md:flex md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground max-sm:text-center sm:text-center">
            © 2023{" "}
            <Link href="/" className="font-serif font-bold">
              Narcotics Anonymous Koshi Area
            </Link>
            .&nbsp;&nbsp;
            <span className="text-center max-md:mt-2 max-md:block md:text-center">
              develop & maintain by &nbsp;
              <a
                href="https://tejbahadurkarki.com.np"
                target="_blank"
                className="font-serif font-bold"
              >
                Tej K
              </a>
            </span>
          </p>
          <div className="mt-4 flex justify-center gap-4 md:mt-0">
            <a
              href={HelpCenterLinks[0].href}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <svg
                className="size-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://github.com/ngr-np/narcotics-anonymous-koshi-asc-web"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
            >
              <svg
                className="size-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">project repo in Github</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLinkTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="mb-6 text-sm font-semibold uppercase text-accent-foreground">
      {children}
    </h2>
  );
};
const FooterLinks = ({ map }: { map: typeof APP_ROUTES }) => {
  return (
    <ul className="font-medium">
      {map.map((link) => {
        const isExternal = link.href.startsWith("http");
        return (
          <ActivePathnameHighliter
            key={link.href}
            href={link.href}
            className="text-secondary-foreground/50"
            activeStyle="text-secondary-foreground"
          >
            <li
              key={link.href}
              className="mb-4 hover:text-secondary-foreground"
            >
              {isExternal ? (
                <a href={link.href} target="_blank" className="hover:underline">
                  {link.name}
                </a>
              ) : (
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              )}
            </li>
          </ActivePathnameHighliter>
        );
      })}
    </ul>
  );
};
