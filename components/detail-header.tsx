"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, FileText, Compass, Monitor, ArrowLeft } from "lucide-react";

export function DetailHeader() {
  const router = useRouter();

  return (
    <>
      {/* Floating Navbar — same as home */}
      <nav className="fixed top-[26px] left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-40px)] sm:w-[calc(100vw-80px)] max-w-[1360px] backdrop-blur-[5px] bg-white/92 rounded-[78px] shadow-[0_4px_40px_rgba(0,0,0,0.25)] px-6 sm:px-10 py-4 flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.png"
              alt="Dokistan"
              width={180}
              height={44}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Tab Pills — desktop (link back to home with tab param) */}
        <div className="hidden md:flex bg-black/8 rounded-full p-1 gap-1">
          <Link
            href="/"
            className="flex items-center gap-2.5 pl-6 pr-8 py-3 rounded-full text-lg font-medium leading-none text-black hover:text-black/70 transition-all whitespace-nowrap"
          >
            <FileText className="size-5" />
            Citizen Documents
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2.5 pl-6 pr-8 py-3 rounded-full text-lg font-medium leading-none text-black hover:text-black/70 transition-all whitespace-nowrap"
          >
            <Compass className="size-5" />
            By Purpose
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2.5 pl-6 pr-8 py-3 rounded-full text-lg font-medium leading-none text-black hover:text-black/70 transition-all whitespace-nowrap"
          >
            <Monitor className="size-5" />
            Websites
          </Link>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="flex items-center justify-center size-11 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.25)] border border-black/5">
            <Search className="size-5" />
          </div>
        </div>
      </nav>

      {/* Back button — inside green header area */}
      <button
        onClick={() => router.back()}
        className="absolute top-[100px] sm:top-[110px] left-3 sm:left-6 z-40 flex items-center justify-center size-8 sm:size-10 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white"
      >
        <ArrowLeft className="size-4 sm:size-5" />
      </button>
    </>
  );
}
