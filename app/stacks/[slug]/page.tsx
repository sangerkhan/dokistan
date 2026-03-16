import { notFound } from "next/navigation";
import Link from "next/link";
import { stacks, getStackBySlug } from "@/data/stacks";
import { getDocumentsByIds } from "@/data/documents";
import { getWebsitesByIds } from "@/data/websites";
import { DocIcon } from "@/components/doc-icon";
import { DetailHeader } from "@/components/detail-header";
import { Building2, ExternalLink, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return stacks.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const stack = getStackBySlug(slug);
    return {
      title: stack ? `${stack.name}` : "Not Found",
      description: stack?.description,
    };
  });
}

export default async function StackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stack = getStackBySlug(slug);
  if (!stack) notFound();

  const docs = getDocumentsByIds(stack.documentIds);
  const sites = getWebsitesByIds(stack.websiteIds);

  return (
    <>
      <DetailHeader />

      {/* Green Header Band */}
      <div
        className="pt-32 sm:pt-36 pb-8 sm:pb-10 px-6 sm:px-10"
        style={{ background: "#00493E" }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
          <div className="flex size-20 sm:size-24 items-center justify-center rounded-[20px] bg-white border-2 border-white/20 text-4xl sm:text-5xl shrink-0">
            {stack.emoji}
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                {stack.name}
              </h1>
              <span className="inline-flex items-center rounded-full bg-white/15 text-white px-4 py-1 text-sm font-medium">
                {stack.documentIds.length} Documents
              </span>
            </div>
            <p className="text-base sm:text-lg text-white/65 max-w-3xl leading-relaxed">
              {stack.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-10 sm:py-14 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-black tracking-tight mb-3">
            Overview
          </h2>
          <p className="text-base text-black/55 leading-relaxed max-w-4xl">
            {stack.overview}
          </p>
        </section>

        {/* Two-column: Documents + Websites */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Required Documents */}
          <section>
            <h2 className="text-2xl font-semibold text-black tracking-tight mb-4">
              Required Documents
            </h2>
            <div className="space-y-3">
              {docs.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/documents/${doc.slug}`}
                  className="group flex items-center gap-4 rounded-2xl bg-[#fafafa] border border-black/5 p-4 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-white border border-black/5 shrink-0">
                    <DocIcon
                      name={doc.icon}
                      className="size-6 text-black/40"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold text-black">
                      {doc.abbreviation ?? doc.name}
                    </p>
                    <p className="text-sm text-black/55 line-clamp-1">
                      {doc.description}
                    </p>
                  </div>
                  <ArrowRight className="size-4 text-transparent group-hover:text-black/40 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          {/* Useful Websites */}
          <section>
            <h2 className="text-2xl font-semibold text-black tracking-tight mb-4">
              Useful Websites
            </h2>
            <div className="space-y-3">
              {sites.map((site) => (
                <div
                  key={site.id}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-[#fafafa] border border-black/5 p-4"
                >
                  <Link
                    href={`/websites/${site.slug}`}
                    className="group flex items-center gap-4 min-w-0 flex-1"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-white border border-black/5 shrink-0">
                      <Building2 className="size-6 text-black/40" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-semibold text-black">
                        {site.abbreviation}
                      </p>
                      <p className="text-sm text-black/55 line-clamp-1">
                        {site.name}
                      </p>
                    </div>
                  </Link>
                  {site.links.slice(0, 1).map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-black/10 text-sm font-medium text-black hover:bg-black/5 transition-colors shrink-0"
                    >
                      Visit
                      <ExternalLink className="size-3" />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Recommended Order */}
        <section>
          <h2 className="text-2xl font-semibold text-black tracking-tight mb-5">
            Recommended Order
          </h2>
          <ol className="space-y-4">
            {stack.applicationOrder.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ background: "#00493E" }}
                >
                  {i + 1}
                </span>
                <span className="text-base text-black/55 pt-1 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>

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
    </>
  );
}
