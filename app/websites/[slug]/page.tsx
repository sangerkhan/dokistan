import { notFound } from "next/navigation";
import { websites, getWebsiteBySlug } from "@/data/websites";
import { DetailHeader } from "@/components/detail-header";
import { Building2, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return websites.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const website = getWebsiteBySlug(slug);
    return {
      title: website ? `${website.abbreviation}` : "Not Found",
      description: website?.description,
    };
  });
}

export default async function WebsitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const website = getWebsiteBySlug(slug);
  if (!website) notFound();

  return (
    <>
      <DetailHeader />

      {/* Green Header Band */}
      <div
        className="pt-32 sm:pt-36 pb-8 sm:pb-10 px-6 sm:px-10"
        style={{ background: "#00493E" }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
          <div className="flex size-20 sm:size-24 items-center justify-center rounded-[20px] bg-white border-2 border-white/20 shrink-0">
            <Building2 className="size-10 sm:size-12 text-black/40" />
          </div>
          <div className="space-y-2 flex-1">
            <span className="inline-flex items-center rounded-full bg-white/15 text-white px-4 py-1 text-sm font-medium">
              {website.department.length > 40
                ? website.abbreviation
                : website.department}
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              {website.abbreviation}
            </h1>
            <p className="text-sm sm:text-base text-white/50 font-medium">
              {website.name}
            </p>
            <p className="text-base sm:text-lg text-white/65 max-w-3xl leading-relaxed">
              {website.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-10 sm:py-14 space-y-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Services */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-black tracking-tight mb-4">
              Services Provided
            </h2>
            <ul className="space-y-3">
              {website.services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-base text-black/55"
                >
                  <span className="text-black/30 mt-0.5 shrink-0">
                    &#x2022;
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Links */}
          <div>
            <div
              className="rounded-[24px] p-6 sm:p-8"
              style={{ background: "#00493E" }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                Direct Links
              </h2>
              <div className="flex flex-col gap-2.5">
                {website.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-2.5 rounded-xl text-sm hover:bg-white/90 transition-colors w-full"
                  >
                    {link.label}
                    <ExternalLink className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
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
