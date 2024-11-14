"use server";

import { cookies, headers } from "next/headers";

const rateLimitStore = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 6 * 60 * 60 * 1000; 
const MAX_REQUESTS = 2;

export async function ActionSetUserTimeZone(timeZone: string) {
  const ip = headers().get("x-forwarded-for") || "unknown";
  
  const now = Date.now();
  const userLimit = rateLimitStore.get(ip);
  
  if (userLimit) {
    if (now - userLimit.timestamp < RATE_LIMIT_WINDOW) {
      if (userLimit.count >= MAX_REQUESTS) {
        throw new Error("Rate limit exceeded. You can only update your timezone twice every 6 hours.");
      }
      userLimit.count++;
    } else {
      rateLimitStore.set(ip, { count: 1, timestamp: now });
    }
  } else {
    rateLimitStore.set(ip, { count: 1, timestamp: now });
  }

  cookies().set("timeZone", timeZone, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}
