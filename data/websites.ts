import { Website } from "./types";

export const websites: Website[] = [
  {
    id: "nadra",
    name: "National Database & Registration Authority",
    slug: "nadra",
    abbreviation: "NADRA",
    department: "Ministry of Interior",
    description:
      "Pakistan's National Database & Registration Authority — issues national identity cards, birth/death/marriage certificates, and manages civil registration for all citizens.",
    services: [
      "CNIC / SNIC issuance and renewal",
      "B-Form (Child Registration Certificate)",
      "Family Registration Certificate (FRC)",
      "NICOP / POC for overseas Pakistanis",
      "Marriage and divorce certificates",
      "Succession certificates",
      "Unmarried certificates",
      "Verification services",
    ],
    links: [
      { label: "NADRA e-Services", url: "https://id.nadra.gov.pk" },
      { label: "Pak Identity Portal", url: "https://pakidentity.nadra.gov.pk" },
      { label: "NADRA Official Website", url: "https://www.nadra.gov.pk" },
    ],
    tags: ["Identity", "Family", "Legal"],
  },
  {
    id: "dgip",
    name: "Directorate General of Immigration & Passports",
    slug: "passport-pakistan",
    abbreviation: "DGI&P",
    department: "Ministry of Interior",
    description:
      "Handles passport issuance, immigration services, and visa-related matters for Pakistani nationals. Operates Regional Passport Offices nationwide.",
    services: [
      "Machine-Readable Passport (MRP)",
      "E-Passport issuance",
      "Passport renewal and tracking",
      "Immigration clearance",
      "Visa services",
    ],
    links: [
      { label: "Online Passport Application", url: "https://onlinemrp.dgip.gov.pk" },
      { label: "Passport Tracking", url: "https://tracking.dgip.gov.pk" },
      { label: "DGI&P Website", url: "https://www.dgip.gov.pk" },
    ],
    tags: ["Travel", "Identity"],
  },
  {
    id: "fbr",
    name: "Federal Board of Revenue",
    slug: "fbr",
    abbreviation: "FBR",
    department: "Revenue Division",
    description:
      "Federal Board of Revenue — manages tax collection, online tax filing, NTN registration, customs duties, and e-invoicing through the IRIS portal.",
    services: [
      "Income tax filing via IRIS",
      "NTN / STRN registration",
      "Sales tax and customs",
      "Active Taxpayer List verification",
      "E-invoicing",
      "Tax Facilitation Offices",
    ],
    links: [
      { label: "IRIS Tax Portal", url: "https://iris.fbr.gov.pk" },
      { label: "FBR Website", url: "https://www.fbr.gov.pk" },
    ],
    tags: ["Finance", "Legal"],
  },
  {
    id: "union-council",
    name: "Union Council Office",
    slug: "union-council",
    abbreviation: "UC Office",
    department: "Local Government",
    description:
      "Local civil authority responsible for registering births, deaths, marriages, and issuing community-level certificates at the grassroots level.",
    services: [
      "Birth registration",
      "Death registration",
      "Marriage registration (Nikkah Nama)",
      "Domicile certificate recommendations",
      "Community-level dispute resolution",
    ],
    links: [
      { label: "Local Government Portal", url: "https://www.localgovernment.gov.pk" },
    ],
    tags: ["Family", "Legal"],
  },
  {
    id: "zameen-portal",
    name: "Punjab Land Records Authority",
    slug: "punjab-land-records",
    abbreviation: "PLRA",
    department: "Board of Revenue, Punjab",
    description:
      "Provincial portal for land records — Fard retrieval, property transfer, mutation processing, and land ownership verification in Punjab.",
    services: [
      "Fard (land ownership) issuance",
      "Property mutation (Intiqal)",
      "Land record verification",
      "Online Fard retrieval",
      "Stamp paper issuance",
    ],
    links: [
      { label: "Zameen Portal", url: "https://www.punjab-zameen.gov.pk" },
    ],
    tags: ["Property", "Legal"],
  },
  {
    id: "excise",
    name: "Excise & Taxation Department",
    slug: "excise-taxation",
    abbreviation: "Excise",
    department: "Provincial Government",
    description:
      "Excise department for vehicle registration, token tax payment, transfer of ownership, and property tax collection across provinces.",
    services: [
      "New vehicle registration",
      "Vehicle ownership transfer",
      "Token tax payment",
      "Duplicate registration book",
      "Property tax collection",
    ],
    links: [
      { label: "Excise Punjab Portal", url: "https://excise-punjab.gov.pk" },
    ],
    tags: ["Property", "Legal", "Finance"],
  },
  {
    id: "dlims",
    name: "Driving License Issuance Management System",
    slug: "driving-license-authority",
    abbreviation: "DLIMS",
    department: "Punjab Information Technology Board",
    description:
      "Manages the issuance, renewal, and verification of driving licenses across Punjab province through computerized testing and biometric verification.",
    services: [
      "New driving license application",
      "License renewal",
      "International driving permit",
      "Duplicate license",
      "License verification",
      "Learner's permit issuance",
    ],
    links: [
      { label: "DLIMS Portal", url: "https://dlims.punjab.gov.pk" },
    ],
    tags: ["Identity", "Legal"],
  },
  {
    id: "pta",
    name: "Pakistan Telecommunication Authority",
    slug: "pta",
    abbreviation: "PTA",
    department: "Ministry of Information Technology",
    description:
      "Regulator for telecommunications in Pakistan — maintains SIM registration rules, device verification (DIRBS), and consumer protection for telecom services.",
    services: [
      "SIM registration verification",
      "Device verification (DIRBS/IMEI check)",
      "Telecom complaint resolution",
      "Internet service regulation",
      "Type approval for devices",
    ],
    links: [
      { label: "PTA Website", url: "https://pta.gov.pk" },
      { label: "DIRBS Device Check", url: "https://dirbs.pta.gov.pk" },
    ],
    tags: ["Telecom", "Identity"],
  },
];

export function getWebsiteById(id: string): Website | undefined {
  return websites.find((w) => w.id === id);
}

export function getWebsiteBySlug(slug: string): Website | undefined {
  return websites.find((w) => w.slug === slug);
}

export function getWebsitesByIds(ids: string[]): Website[] {
  return ids
    .map((id) => websites.find((w) => w.id === id))
    .filter((w): w is Website => w !== undefined);
}
