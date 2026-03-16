import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  documents,
  getDocumentBySlug,
  getDocumentsByIds,
} from "@/data/documents";
import { getWebsiteById } from "@/data/websites";
import { DetailHeader } from "@/components/detail-header";
import { ExternalLink, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return documents.map((doc) => ({ slug: doc.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const doc = getDocumentBySlug(slug);
    return {
      title: doc ? doc.name : "Not Found",
      description: doc?.description,
    };
  });
}

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDocumentBySlug(slug);
  if (!doc) notFound();

  const agency = getWebsiteById(doc.issuingAgencyId);
  const relatedDocs = getDocumentsByIds(doc.relatedDocumentIds);

  return (
    <>
      <DetailHeader />

      {/* Green Header Band */}
      <div
        className="pt-28 sm:pt-32 pb-8 sm:pb-10 px-6 sm:px-10"
        style={{ background: "#00493E" }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          {/* Cover image */}
          <div className="flex size-[100px] sm:size-[120px] shrink-0 items-center justify-center rounded-[20px] bg-white border-2 border-white/20 overflow-hidden">
            <Image
              src={doc.coverImage}
              alt={doc.name}
              width={120}
              height={120}
              className="size-full object-cover"
            />
          </div>

          <div className="space-y-1.5 flex-1">
            {agency && (
              <span className="inline-flex items-center rounded-full bg-[#e0ffe8] px-4 py-1 text-sm font-medium text-[#00493e]">
                Issued by {agency.abbreviation}
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-[-0.24px]">
              {doc.name}
            </h1>
            <p className="text-sm sm:text-base text-white/65 max-w-3xl leading-relaxed">
              {doc.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-10 sm:py-14 space-y-10">
        {/* What This Document Is */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-[-0.24px] mb-3">
            What This Document Is
          </h2>
          <p className="text-sm sm:text-base text-black/55 leading-relaxed max-w-4xl">
            {doc.whatItIs}
          </p>
        </section>

        {/* Two-column: Requirements + Where To Apply sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Requirements */}
          <div className="lg:col-span-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-[-0.24px] mb-4">
              Requirements
            </h2>
            <div className="space-y-0">
              {doc.requirements.map((req) => (
                <div
                  key={req.item}
                  className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-3 border-b border-black/10 last:border-0"
                >
                  <span className="text-sm sm:text-base font-semibold text-black sm:w-2/5 shrink-0">
                    {req.item}
                  </span>
                  <span className="text-sm sm:text-base text-black/55">
                    {req.notes}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Where To Apply — dark green sidebar */}
          <div className="lg:col-span-2">
            <div
              className="rounded-[24px] p-6 sm:p-8 space-y-6"
              style={{ background: "#00493E" }}
            >
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                Where To Apply
              </h2>
              <a
                href={doc.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-medium px-5 py-2.5 rounded-xl text-sm hover:bg-white/90 transition-colors"
              >
                {doc.applyLabel}
                <ExternalLink className="size-3.5" />
              </a>

              {/* Fees */}
              {doc.fees && doc.fees.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Fees
                  </h3>
                  <div className="space-y-2.5">
                    {doc.fees.map((fee) => (
                      <div
                        key={fee.type}
                        className="flex items-center justify-between gap-2"
                      >
                        <span className="text-sm sm:text-base font-semibold text-[#FCFF33]">
                          Rs. {fee.amount.toLocaleString()}{" "}
                          <span className="font-medium text-[#FCFF33]/80">
                            ({fee.type})
                          </span>
                        </span>
                        <span className="text-xs sm:text-sm text-white/50 shrink-0">
                          As of {fee.asOf}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              {doc.notes && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Note
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {doc.notes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Application Steps */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-[-0.24px] mb-5">
            Application Steps
          </h2>
          <ol className="space-y-4">
            {doc.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ background: "#00493E" }}
                >
                  {i + 1}
                </span>
                <span className="text-sm sm:text-base text-black/55 pt-1 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Bottom row: Used For + Related Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Used For */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-[-0.24px] mb-3">
              Used For
            </h2>
            <ul className="space-y-2">
              {doc.usedFor.map((use) => (
                <li
                  key={use}
                  className="flex items-start gap-3 text-sm sm:text-base text-black/55"
                >
                  <span className="text-black/30 mt-0.5 shrink-0">
                    &#x2022;
                  </span>
                  {use}
                </li>
              ))}
            </ul>
          </section>

          {/* Related Documents */}
          {relatedDocs.length > 0 && (
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-[-0.24px] mb-3">
                Related Documents
              </h2>
              <div className="space-y-3">
                {relatedDocs.map((related) => (
                  <Link
                    key={related.id}
                    href={`/documents/${related.slug}`}
                    className="group flex items-center gap-4 rounded-2xl bg-[#fafafa] border border-black/5 p-4 transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white border border-black/5 overflow-hidden">
                      <Image
                        src={related.coverImage}
                        alt={related.name}
                        width={48}
                        height={48}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-semibold text-black">
                        {related.name}
                      </p>
                      <p className="text-xs sm:text-sm text-black/55 line-clamp-1">
                        {related.description}
                      </p>
                    </div>
                    <ExternalLink className="size-4 text-black/20 group-hover:text-black/40 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
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
