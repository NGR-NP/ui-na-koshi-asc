// Base paths
const BASE_PATHS = {
  PAGE_HOME: "/",
  PAGE_ABOUT: "/about",
  PAGE_Meeting: "/meetings",
  PAGE_EVENT: "/events",
  PAGE_MERCHANDISE: "/merchandise",
  PAGE_LITERATURE: "/literature",
  PAGE_CONTACT: "/contact-us",
  PAGE_DONATION: "/donation",
  PAGE_GALLERY: "/gallery",
  PAGE_NEWS: "/news",
};

const createPath = (base: string, ...subPaths: string[]) => {
  return [base, ...subPaths].join("/");
};

const LINKS = {
  Sub_PAGE_ABOUT: {
    NA: createPath(BASE_PATHS.PAGE_ABOUT, "na"),
    NEPAL_REGION: createPath(BASE_PATHS.PAGE_ABOUT, "nepal-region"),
  },
  Sub_PAGE_Meeting: {
    TODAY: createPath(BASE_PATHS.PAGE_Meeting, "today"),
    ONLINE: createPath(BASE_PATHS.PAGE_Meeting, "online"),
    PHYSICAL: createPath(BASE_PATHS.PAGE_Meeting, "physical"),
    HYBRID: createPath(BASE_PATHS.PAGE_Meeting, "hybrid"),
  },
  Sub_PAGE_EVENT: {
    UPCOMING: createPath(BASE_PATHS.PAGE_EVENT, "upcoming"),
    PAST: createPath(BASE_PATHS.PAGE_EVENT, "past"),
    WORKSHOP: createPath(BASE_PATHS.PAGE_EVENT, "workshop"),
  },
  // Sub_PAGE_MERCHANDISE: { DEFAULT: BASE_PATHS.PAGE_MERCHANDISE },
  // Sub_PAGE_LITERATURE: { DEFAULT: BASE_PATHS.PAGE_LITERATURE },
  // Sub_PAGE_COMMITTEE: { DEFAULT: BASE_PATHS.PAGE_COMMITTEE },
};

// Destructure to export individual links
export const { Sub_PAGE_ABOUT, Sub_PAGE_EVENT, Sub_PAGE_Meeting } = LINKS;

export const {
  PAGE_ABOUT,
  PAGE_CONTACT,
  PAGE_DONATION,
  PAGE_EVENT,
  PAGE_GALLERY,
  PAGE_HOME,
  PAGE_LITERATURE,
  PAGE_MERCHANDISE,
  PAGE_Meeting,
  PAGE_NEWS,
} = BASE_PATHS;
