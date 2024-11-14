import { NextRequest } from "next/server";

export async function getTimeZone(request: NextRequest): Promise<string> {
  const headerTimeZone = request.cookies.get("timeZone")?.value;
  console.log("cookieTimezone", headerTimeZone)
  if (headerTimeZone) return headerTimeZone;

  return "UTC";
}

// for client side
//   const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//   console.log(timeZone);
