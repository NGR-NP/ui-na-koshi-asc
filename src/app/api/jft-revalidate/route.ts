import { revalidatePath } from "next/cache";

import CacheTags from "@/constant/CacheTags";

export async function GET() {
  revalidatePath(CacheTags.JFT);

  return new Response("OK", {
    status: 200,
  });
}
