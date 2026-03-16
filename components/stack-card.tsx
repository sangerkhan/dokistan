import Link from "next/link";
import { Stack } from "@/data/types";

export function StackCard({ stack }: { stack: Stack }) {
  return (
    <Link href={`/stacks/${stack.slug}`} className="group block">
      <div className="h-full rounded-[32px] bg-[#fafafa] border border-black/5 flex items-center gap-6 overflow-hidden pl-4 pr-6 py-4 transition-all duration-200 hover:shadow-md">
        {/* Emoji placeholder */}
        <div className="flex size-[100px] sm:size-[120px] shrink-0 items-center justify-center rounded-[24px] border-2 border-black/5 bg-white text-4xl sm:text-5xl">
          {stack.emoji}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
            {stack.name}
          </h3>
          <p className="text-sm sm:text-base font-medium text-black/55 line-clamp-2">
            {stack.description}
          </p>
          <span className="inline-flex self-start items-center rounded-full bg-black text-white px-4 py-1 text-sm font-medium mt-1">
            {stack.documentIds.length} Documents
          </span>
        </div>
      </div>
    </Link>
  );
}
