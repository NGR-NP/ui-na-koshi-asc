import { Mail, Phone } from "lucide-react";

import { EMAIL, NUMBER } from "@/constant/contact";

export default function TopHelplineSection() {
  return (
    <div className="hidden bg-muted px-section-sm py-2 sm:block">
      <div className="ml-auto flex max-w-screen-2xl items-center justify-end gap-4">
        <div className="flex items-center gap-1">
          <Phone className="mx-1 size-4" /> helpline number:{" "}
          <a href={`tel:${NUMBER}`} className="font-bold">
            {NUMBER}
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Mail className="mx-1 size-4" />
          <a href="mail:nakoshiasc@gmail.com" className="font-bold">
            {EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
