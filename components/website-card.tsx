import Link from "next/link";
import { Building2 } from "lucide-react";
import { Website } from "@/data/types";

export function WebsiteCard({ website }: { website: Website }) {
  return (
    <Link href={`/websites/${website.slug}`} className="group block">
      <div className="h-full rounded-[32px] bg-[#fafafa] border border-black/5 flex items-center gap-6 overflow-hidden pl-4 pr-6 py-4 transition-all duration-200 hover:shadow-md">
        {/* Logo placeholder */}
        <div className="flex size-[100px] sm:size-[120px] shrink-0 items-center justify-center rounded-[24px] border-2 border-black/5 bg-white">
          <Building2 className="size-10 sm:size-12 text-muted-foreground" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1.5 min-w-0 flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
            {website.abbreviation}
          </h3>
          <p className="text-sm sm:text-base font-medium text-black/55 line-clamp-2">
            {website.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
