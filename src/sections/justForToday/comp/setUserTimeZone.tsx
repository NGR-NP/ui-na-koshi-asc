"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { ActionSetUserTimeZone } from "../server/action/ActionSetUserTimeZone";

interface UserTimeZoneProps {
  defTimeZone: string;
}
export default function UserTimeZone({ defTimeZone }: UserTimeZoneProps) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log("userTimeZone", timeZone);
  const route = useRouter();

  useEffect(() => {
    if (defTimeZone == timeZone) return;
    async function updateTimeZone() {
      await ActionSetUserTimeZone(timeZone);
      route.refresh();
    }
    updateTimeZone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
