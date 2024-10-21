import { revalidateTag } from "next/cache";

import CacheTags from "@/constant/CacheTags";

export async function GET() {
  revalidateTag(CacheTags.JFT);

  return new Response("OK", {
    status: 200,
  });
}
