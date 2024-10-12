import {
  PAGE_ABOUT,
  PAGE_CONTACT,
  PAGE_EVENT,
  PAGE_HOME,
  PAGE_LITERATURE,
  PAGE_MERCHANDISE,
  PAGE_Meeting,
  Sub_PAGE_ABOUT,
  Sub_PAGE_EVENT,
  Sub_PAGE_Meeting,
} from "@/constant/Links";

export const Route_Home = {
  name: "Home",
  href: PAGE_HOME,
};
export const Route_About = {
  name: "About",
  href: PAGE_ABOUT,
};

export const Route_Merchandise = {
  name: "Merchandise",
  href: PAGE_MERCHANDISE,
};
export const Route_Literature = {
  name: "Literature",
  href: PAGE_LITERATURE,
};
export const Route_Contact = {
  name: "Contact",
  href: PAGE_CONTACT,
};

export const APP_ROUTES = [
  Route_Home,
  Route_About,
  Route_Merchandise,
  Route_Literature,
  Route_Contact,
];

/// about sub link
export const Route_NepalRegion = {
  name: "Nepal Region",
  href: Sub_PAGE_ABOUT.NEPAL_REGION,
};
export const Route_AboutNA = {
  name: "NA",
  href: Sub_PAGE_ABOUT.NA,
};

export const Route_SubAbout = [Route_NepalRegion, Route_AboutNA];

// contact routes

export const Route_FacebookPage = {
  name: "Facebook",
  href: "https://www.facebook.com/profile.php?id=61551765308946",
};
export const Route_InstagramPage = {
  name: "Instagram",
  href: "https://www.instagram.com/narcoticsanonymousnepal",
};

export const HelpCenterLinks = [
  Route_FacebookPage,
  Route_InstagramPage,
  Route_Contact,
];

// events routes

export const Route_UpcommingEvents = {
  name: "Upcoming Events",
  href: Sub_PAGE_EVENT.UPCOMING,
};
export const Route_PastEvents = {
  name: "Past Events",
  href: Sub_PAGE_EVENT.PAST,
};
export const Route_CurrentEvents = {
  name: "Current Events",
  href: PAGE_EVENT,
};
export const Route_Workshop = {
  name: "Workshop",
  href: Sub_PAGE_EVENT.WORKSHOP,
};

export const Route_Events = [
  Route_UpcommingEvents,
  Route_CurrentEvents,
  Route_Workshop,
];

// meeting routes
export const Route_Meeting = {
  name: "Meeting",
  href: PAGE_Meeting,
};
export const Route_TodayMeeting = {
  name: "Today",
  href: Sub_PAGE_Meeting.TODAY,
};
export const Route_OnlineMeeting = {
  name: "Online",
  href: Sub_PAGE_Meeting.ONLINE,
};
export const Route_PhysicalMeeting = {
  name: "Physical",
  href: Sub_PAGE_Meeting.PHYSICAL,
};
export const Route_HybridMeeting = {
  name: "Hybrid",
  href: Sub_PAGE_Meeting.HYBRID,
};

export const Route_Meetings = [
  Route_OnlineMeeting,
  Route_PhysicalMeeting,
  Route_HybridMeeting,
];
