import {
  PAGE_ABOUT,
  PAGE_COMMITTEE,
  PAGE_CONTACT,
  PAGE_EVENT,
  PAGE_HOME,
  PAGE_LITERATURE,
  PAGE_MERCHANDISE,
  Sub_PAGE_EVENT,
  Sub_PAGE_METTING,
} from "@/constant/Links";

export const APP_ROUTES = [
  {
    name: "Home",
    href: PAGE_HOME,
  },
  {
    name: "About",
    href: PAGE_ABOUT,
  },
  {
    name: "Committee",
    href: PAGE_COMMITTEE,
  },
  {
    name: "Merchandise",
    href: PAGE_MERCHANDISE,
  },
  {
    name: "Literature",
    href: PAGE_LITERATURE,
  },
  {
    name: "Contact",
    href: PAGE_CONTACT,
  },
];
export const HelpCenterLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61551765308946",
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/narcoticsanonymousnepal",
  },
  {
    name: "Contact",
    href: PAGE_CONTACT,
  },
];
export const EventLinks = [
  {
    name: "Upcoming Events",
    href: Sub_PAGE_EVENT.UPCOMING,
  },
  {
    name: "Current Events",
    href: PAGE_EVENT,
  },
  {
    name: "Workshop",
    href: Sub_PAGE_EVENT.WORKSHOP,
  },
];

export const MettingLinks = [
  {
    name: "Physical Meetings",
    href: Sub_PAGE_METTING.PHYSICAL,
  },
  {
    name: "Online Meetings",
    href: Sub_PAGE_METTING.ONLINE,
  },
  {
    name: "Hybrid Mettings",
    href: Sub_PAGE_METTING.HYBRID,
  },
];
