import Link from "next/link";
import Image from "next/image";
import { Document } from "@/data/types";
import { getWebsiteById } from "@/data/websites";

export function DocumentCard({ document: doc }: { document: Document }) {
  const agency = getWebsiteById(doc.issuingAgencyId);

  return (
    <Link href={`/documents/${doc.slug}`} className="group block">
      <div className="h-full rounded-[32px] bg-[#fafafa] border border-black/5 flex items-center gap-6 overflow-hidden pl-4 pr-6 py-4 transition-all duration-200 hover:shadow-md">
        {/* Cover image */}
        <div className="flex size-[120px] sm:size-[140px] lg:size-[160px] shrink-0 items-center justify-center rounded-[24px] border-2 border-black/5 bg-white overflow-hidden">
          <Image
            src={doc.coverImage}
            alt={doc.abbreviation ?? doc.name}
            width={160}
            height={160}
            className="size-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2.5 min-w-0 flex-1">
          {agency && (
            <span className="inline-flex self-start items-center rounded-full bg-[#e0ffe8] px-4 py-1 text-sm font-medium text-[#00493e]">
              Issued by {agency.abbreviation}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-[-0.24px]">
            {doc.name}
          </h3>
          <p className="text-sm sm:text-base font-medium text-black/55 line-clamp-2">
            {doc.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
