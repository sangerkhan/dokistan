"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Compass, FileText, Monitor, ChevronDown, ChevronLeft, ChevronRight, X, Check } from "lucide-react";
import { WebsiteCard } from "./website-card";
import { DocumentCard } from "./document-card";
import { StackCard } from "./stack-card";
import { websites } from "@/data/websites";
import { documents } from "@/data/documents";
import { stacks } from "@/data/stacks";
import { Tag } from "@/data/types";

const ITEMS_PER_PAGE = 9;

const allTags: Tag[] = [
  "Identity",
  "Travel",
  "Property",
  "Legal",
  "Finance",
  "Family",
  "Employment",
  "Telecom",
  "Elections",
];

type ActiveTab = "documents" | "stacks" | "websites";
type SortOption = "relevance" | "a-z" | "z-a";

const heroContent: Record<
  ActiveTab,
  { before: string; accent: string; subtitle: string }
> = {
  documents: {
    before: "Pakistani Documents, ",
    accent: "Simplified.",
    subtitle:
      "Essential citizen documents. What they are, requirements, and where to apply.",
  },
  stacks: {
    before: "Documents & Steps, ",
    accent: "For your Purpose.",
    subtitle:
      "Find out about the different documents and steps needed for your specific goal.",
  },
  websites: {
    before: "Websites, ",
    accent: "To navigate Pakistan.",
    subtitle:
      "Essential citizen documents. What they are, requirements, and where to apply.",
  },
};

const filterLabels: Record<ActiveTab, string> = {
  documents: "Filter by departments:",
  stacks: "Filter by category:",
  websites: "Filter by category:",
};

const HERO_BG = "#00493E";

const sortLabels: Record<SortOption, string> = {
  relevance: "Relevance",
  "a-z": "A → Z",
  "z-a": "Z → A",
};

export function HomeView() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("documents");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeTag, setActiveTag] = useState<Tag | null>(null);
  const [sort, setSort] = useState<SortOption>("relevance");
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    }
    if (sortOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [sortOpen]);

  const query = search.toLowerCase();

  function sortItems<T extends { name: string }>(items: T[]): T[] {
    if (sort === "a-z")
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "z-a")
      return [...items].sort((a, b) => b.name.localeCompare(a.name));
    return items;
  }

  const filteredDocuments = useMemo(() => {
    const filtered = documents.filter((doc) => {
      const matchesSearch =
        !query ||
        doc.name.toLowerCase().includes(query) ||
        (doc.abbreviation?.toLowerCase().includes(query) ?? false) ||
        doc.description.toLowerCase().includes(query);
      const matchesTag = !activeTag || doc.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
    return sortItems(filtered);
  }, [query, activeTag, sort]);

  const filteredWebsites = useMemo(() => {
    const filtered = websites.filter((w) => {
      const matchesSearch =
        !query ||
        w.name.toLowerCase().includes(query) ||
        w.abbreviation.toLowerCase().includes(query) ||
        w.description.toLowerCase().includes(query);
      const matchesTag = !activeTag || w.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
    return sortItems(filtered);
  }, [query, activeTag, sort]);

  const filteredStacks = useMemo(() => {
    const filtered = stacks.filter((s) => {
      const matchesSearch =
        !query ||
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query);
      const matchesTag = !activeTag || s.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
    return sortItems(filtered);
  }, [query, activeTag, sort]);

  const relevantTags = useMemo(() => {
    const tagSet = new Set<Tag>();
    if (activeTab === "documents") {
      documents.forEach((d) => d.tags.forEach((t) => tagSet.add(t)));
    } else if (activeTab === "websites") {
      websites.forEach((w) => w.tags.forEach((t) => tagSet.add(t)));
    } else {
      stacks.forEach((s) => s.tags.forEach((t) => tagSet.add(t)));
    }
    return allTags.filter((t) => tagSet.has(t));
  }, [activeTab]);

  const hero = heroContent[activeTab];

  const tabs: { value: ActiveTab; label: string; icon: React.ReactNode }[] = [
    {
      value: "documents",
      label: "Citizen Documents",
      icon: <FileText className="size-5" />,
    },
    {
      value: "stacks",
      label: "By Purpose",
      icon: <Compass className="size-5" />,
    },
    {
      value: "websites",
      label: "Websites",
      icon: <Monitor className="size-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Floating Navbar */}
      <nav className="fixed top-[26px] left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-40px)] sm:w-[calc(100vw-80px)] max-w-[1360px] backdrop-blur-[5px] bg-white/92 rounded-[78px] shadow-[0_4px_40px_rgba(0,0,0,0.25)] px-6 sm:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
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

        {/* Tab Pills — desktop */}
        <div className="hidden md:flex bg-black/8 rounded-full p-1 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                setActiveTag(null);
                setSearch("");
                setSort("relevance");
                setPage(1);
              }}
              className={`flex items-center gap-2.5 pl-6 pr-8 py-3 rounded-full text-lg font-medium leading-none transition-all whitespace-nowrap ${
                activeTab === tab.value
                  ? "bg-white text-black shadow-[0_1px_2px_rgba(0,0,0,0.25)] border border-black/5"
                  : "text-black hover:text-black/70"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Icon */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center justify-center size-11 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.25)] border border-black/5 hover:shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-shadow"
          >
            <Search className="size-5" />
          </button>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-24 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSearch("");
              setSearchOpen(false);
            }
          }}
        >
          <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-2xl p-4 border border-black/5">
            <div className="flex items-center gap-3">
              <Search className="size-5 text-black/40 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search documents, websites, guides..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 text-base sm:text-lg outline-none bg-transparent placeholder:text-black/30"
              />
              <button
                onClick={() => {
                  setSearch("");
                  setSearchOpen(false);
                }}
                className="size-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="relative pt-[160px] sm:pt-[193px] pb-10 px-6 sm:px-10 flex flex-col items-start justify-end overflow-hidden"
        style={{ background: HERO_BG }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-[60px] font-semibold tracking-[-0.6px] leading-none text-white whitespace-nowrap">
          {hero.before}
          <span style={{ color: "#FCFF33" }}>{hero.accent}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-[22px] font-medium mt-4 text-white/65 max-w-3xl">
          {hero.subtitle}
        </p>
      </section>

      {/* Mobile Tab Selector */}
      <div className="md:hidden px-4 pt-5">
        <div className="flex bg-black/8 rounded-full p-1 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                setActiveTag(null);
                setSearch("");
                setSort("relevance");
                setPage(1);
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.value
                  ? "bg-white text-black shadow-[0_1px_2px_rgba(0,0,0,0.25)] border border-black/5"
                  : "text-black/50"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full px-6 sm:px-10 pt-[60px] pb-20">
        {/* Filter Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-1">
            <span className="text-base font-medium text-black shrink-0">
              {filterLabels[activeTab]}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => { setActiveTag(null); setPage(1); }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${
                  activeTag === null
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-black/15 hover:border-black/30"
                }`}
              >
                All
              </button>
              {relevantTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setActiveTag(activeTag === tag ? null : tag);
                    setPage(1);
                  }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${
                    activeTag === tag
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black border-black/15 hover:border-black/30"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          {/* Sort Dropdown */}
          <div className="relative shrink-0" ref={sortRef}>
            <div className="flex items-center gap-4">
              <span className="text-base font-medium text-black">
                Sort by:
              </span>
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5f5f5] text-base font-medium text-black hover:bg-black/10 transition-colors"
              >
                {sortLabels[sort]}
                <ChevronDown
                  className={`size-[18px] transition-transform ${sortOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-black/10 rounded-xl shadow-lg py-1 min-w-[160px] z-20">
                {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSort(option);
                      setSortOpen(false);
                      setPage(1);
                    }}
                    className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-black hover:bg-black/5 transition-colors"
                  >
                    {sortLabels[option]}
                    {sort === option && (
                      <Check className="size-4 text-[#00493e]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid */}
        {(() => {
          const allItems =
            activeTab === "documents"
              ? filteredDocuments
              : activeTab === "websites"
                ? filteredWebsites
                : filteredStacks;
          const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);
          const currentPage = Math.min(page, totalPages || 1);
          const pagedItems = allItems.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
          );

          return (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
                {activeTab === "documents" &&
                  (pagedItems as typeof filteredDocuments).map((doc) => (
                    <DocumentCard key={doc.id} document={doc} />
                  ))}
                {activeTab === "websites" &&
                  (pagedItems as typeof filteredWebsites).map((website) => (
                    <WebsiteCard key={website.id} website={website} />
                  ))}
                {activeTab === "stacks" &&
                  (pagedItems as typeof filteredStacks).map((stack) => (
                    <StackCard key={stack.id} stack={stack} />
                  ))}
                {allItems.length === 0 && (
                  <div className="col-span-full flex flex-col items-center justify-center py-20 text-black/40">
                    <Search className="size-10 mb-3 opacity-20" />
                    <p className="text-base">
                      No {activeTab === "documents" ? "documents" : activeTab === "websites" ? "websites" : "guides"} found
                    </p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-black/60 hover:text-black hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="size-4" />
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`flex items-center justify-center size-9 rounded-lg text-sm font-medium transition-colors ${
                          currentPage === p
                            ? "bg-black text-white"
                            : "text-black/60 hover:text-black hover:bg-black/5"
                        }`}
                      >
                        {p}
                      </button>
                    )
                  )}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-black/60 hover:text-black hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              )}
            </>
          );
        })()}
      </main>

      {/* Other Solutions Section */}
      <section className="bg-[#fafafa] px-6 sm:px-10 pt-14 pb-20">
        <h2 className="text-3xl font-semibold text-black tracking-tight mb-4">
          Other Solutions
        </h2>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Dokistan card */}
          <div className="bg-white border border-black/5 rounded-[24px] px-8 py-6 flex flex-col justify-between w-full sm:w-[490px] min-h-[220px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Dokistan"
                  width={32}
                  height={32}
                  className="h-8 w-auto rounded-lg"
                />
                <span className="text-2xl font-semibold text-black">
                  Dokistan
                </span>
              </div>
              <span className="inline-flex items-center gap-2 bg-[#e0ffe8] text-[#00493e] text-sm font-medium px-3 py-1 rounded-full">
                <span className="size-[7px] bg-[#00493e] rounded-full" />
                Live
              </span>
            </div>
            <p className="text-base font-medium text-black/55 leading-relaxed mt-4">
              A simple directory to navigate Pakistan&apos;s Citizen Documents.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-black text-white font-medium px-6 py-3 rounded-2xl text-base mt-4 self-start hover:bg-black/90 transition-colors"
            >
              Visit now
            </Link>
          </div>

          {/* SafePak card */}
          <div className="bg-white border border-black/5 rounded-[24px] px-8 py-6 flex flex-col justify-between w-full sm:w-[490px] min-h-[220px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-orange-100 flex items-center justify-center text-lg">
                  🛡️
                </div>
                <span className="text-2xl font-semibold text-black">
                  SafePak.online
                </span>
              </div>
              <span className="inline-flex items-center gap-2 bg-[#fff0d4] text-[#b24a00] text-sm font-medium px-3 py-1 rounded-full">
                <span className="size-[7px] bg-[#b24a00] rounded-full" />
                In development
              </span>
            </div>
            <p className="text-base font-medium text-black/55 leading-relaxed mt-4">
              A simple library of resources and support for online security &amp;
              safety.
            </p>
            <button
              disabled
              className="inline-flex items-center justify-center bg-black text-white font-medium px-6 py-3 rounded-2xl text-base mt-4 self-start opacity-45 cursor-not-allowed"
            >
              Coming soon
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fafafa] border-t border-black/10 px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-base font-medium text-black">
          🇵🇰 Made proudly by{" "}
          <span className="underline">Sanger Khan</span>
        </p>
        <p className="text-sm text-black/55 text-center sm:text-right max-w-md">
          Dokistan is an independent project by Sanger Khan and is not
          affiliated or represents the government of Pakistan.
        </p>
      </footer>
    </div>
  );
}
