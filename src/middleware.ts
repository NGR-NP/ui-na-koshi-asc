import { NextRequest, NextResponse } from "next/server";
import { getUserFormattedDate } from "./lib/other/formatYearMonthDate";
import { getTimeZone } from "./lib/other/getUserTimeZone";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/jft")) {
    const timeZone = await getTimeZone(request);
    const formattedDate = getUserFormattedDate(timeZone);

    const now = new Date();
    const nextMidnight = new Date(now.toLocaleString("en-US", { timeZone }));
    nextMidnight.setHours(24, 0, 0, 0); 
    const cacheDuration = (nextMidnight.getTime() - now.getTime()) / 1000; 

    const url = request.nextUrl.clone();
    const searchParams = url.searchParams;

    searchParams.delete("today");
    searchParams.delete("timeZone");
    searchParams.set("today", formattedDate);
    searchParams.set("timeZone", timeZone);

    url.search = searchParams.toString();

    const response = NextResponse.rewrite(url);
    response.headers.set("Cache-Control", `public, max-age=${cacheDuration}, stale-while-revalidate`);


    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/|_next/static/|_next/image/|assets/|icons/|manifest\\.json|sw\\.js|workbox-.*\\.js|na_koshi_banner\\.png|apple-touch-icon.*\\.png|sitemap\\.xml|robots\\.txt|favicon.*|web-app-manifest-.*\\.png).*)",
    "/jft(.*)",
  ],
};
