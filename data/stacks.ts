import { Stack } from "./types";

export const stacks: Stack[] = [
  {
    id: "new-adult",
    name: "New Adult Essentials",
    slug: "new-adult-essentials",
    emoji: "\u{1F382}",
    description:
      "Turning 18? Here are the documents and steps you need as a new adult in Pakistan.",
    overview:
      "Turning 18 is a major milestone in Pakistan. You become eligible for a Computerized National Identity Card (CNIC), can register to vote, open bank accounts in your own name, and begin your financial life. The Pak ID mobile app allows online application to reduce in-person visits. Ensure all spellings match on documents to avoid issues.",
    documentIds: ["cnic", "driving-license", "passport"],
    websiteIds: ["nadra", "dgip", "dlims"],
    applicationOrder: [
      "Gather required documents: NADRA CRC (B-Form) and a parent's CNIC.",
      "Use the Pak ID mobile app or visit a NADRA Registration Center to apply for your CNIC.",
      "Undergo biometric verification (fingerprints and photo) at NADRA.",
      "Pay the CNIC processing fee and wait for issuance (NADRA will notify you).",
      "Once you have your CNIC, you can apply for a Driving License and Passport.",
    ],
    tags: ["Identity", "Legal"],
  },
  {
    id: "kids",
    name: "Kids Essentials",
    slug: "kids-essentials",
    emoji: "\u{1F9D2}",
    description:
      "Registering a child under 18 with NADRA and getting their essential documents.",
    overview:
      "Registering a child in Pakistan is essential for school enrollment, future CNIC applications, and establishing citizenship. The Child Registration Certificate (CRC/B-Form) is issued by NADRA based on the Union Council birth registration. A parent or guardian must accompany the child for verification, and parents' CNICs must be valid.",
    documentIds: ["bform"],
    websiteIds: ["nadra"],
    applicationOrder: [
      "Register the child's birth at the local Union Council to obtain the original Birth Certificate (B-Form).",
      "Visit a NADRA Registration Center with the Birth Certificate and a parent/guardian carrying their CNIC.",
      "Submit the application for the CRC/B-Form. NADRA will take the child's photo and fingerprints.",
      "Receive the child's NADRA CRC (usually within a few days).",
    ],
    tags: ["Identity", "Family"],
  },
  {
    id: "first-travel",
    name: "First Time Travel",
    slug: "first-time-travel",
    emoji: "\u{2708}\u{FE0F}",
    description:
      "Obtaining a passport and preparing for your first international trip from Pakistan.",
    overview:
      "Traveling internationally from Pakistan requires a valid Machine-Readable Passport issued by DGI&P. Minors must be accompanied by both parents and present an updated CRC/Juvenile Card. Dual nationals should bring the original foreign passport. Keep the fee receipt (PSID) safely — it is required for issuance.",
    documentIds: ["cnic", "passport", "bform"],
    websiteIds: ["dgip", "nadra"],
    applicationOrder: [
      "Ensure your CNIC is valid and up to date.",
      "Download and fill the passport application form from DGI&P or apply online.",
      "Pay the prescribed passport fee at any designated bank.",
      "Visit the nearest Regional Passport Office with CNIC and all documents.",
      "Provide fingerprints and photograph at the RPO.",
      "Receive the passport via courier or pick it up (usually 2–3 weeks for normal service).",
    ],
    tags: ["Travel", "Identity"],
  },
  {
    id: "marriage",
    name: "Getting married",
    slug: "getting-married",
    emoji: "\u{1F48D}",
    description:
      "All the documents and steps needed to register your marriage in Pakistan.",
    overview:
      "Marriage in Pakistan requires proper documentation for legal recognition. The Nikkah must be performed by an authorized Maulvi and stamped by the Union Council. A NADRA Marriage Certificate is the legal proof of marriage in English and is required for most official purposes. If abroad, a relative can obtain it on your behalf with a valid Power of Attorney.",
    documentIds: ["cnic", "marriage-cert"],
    websiteIds: ["nadra"],
    applicationOrder: [
      "Ensure the Nikkah is performed by an authorized Maulvi and get the Nikkah Nama stamped by the Union Council.",
      "Collect all documents: Nikkah Nama, spouses' CNICs, witnesses' CNICs, and photos.",
      "Visit the relevant Union Council office or NADRA center.",
      "Submit the application form and documents, then pay the official fee.",
      "Collect the NADRA Marriage Certificate after processing (3–5 working days).",
      "Update your CNIC to reflect marital status change.",
    ],
    tags: ["Legal", "Family"],
  },
  {
    id: "bank-account",
    name: "Open a Bank Account",
    slug: "open-bank-account",
    emoji: "\u{1F3E6}",
    description:
      "Documents needed to open a personal bank account in Pakistan.",
    overview:
      "Opening a bank account in Pakistan requires a valid CNIC and proof of income or address. Most banks accept walk-in applications with minimal documentation for basic savings accounts. For business accounts, additional documents like NTN certificate and business registration are required. Digital banks and mobile wallets have simplified the process further.",
    documentIds: ["cnic"],
    websiteIds: ["nadra"],
    applicationOrder: [
      "Ensure your CNIC is valid and not expired.",
      "Choose a bank and visit the nearest branch.",
      "Fill out the account opening form and submit your CNIC copy.",
      "Provide proof of income or address (utility bill, salary slip, etc.).",
      "Complete biometric verification at the bank.",
      "Receive your account number, debit card, and cheque book within a few days.",
    ],
    tags: ["Finance", "Identity"],
  },
  {
    id: "school-admission",
    name: "School admission",
    slug: "school-admission",
    emoji: "\u{1F392}",
    description:
      "Documents required for enrolling a child in school in Pakistan.",
    overview:
      "Enrolling a child in school in Pakistan requires a B-Form (Child Registration Certificate) from NADRA, along with the child's photographs and previous school records (if transferring). Some schools require a domicile certificate or the parents' CNICs. Private schools may have additional requirements such as entrance tests.",
    documentIds: ["bform"],
    websiteIds: ["nadra"],
    applicationOrder: [
      "Obtain the child's B-Form (CRC) from NADRA if not already issued.",
      "Gather the child's passport-size photographs and previous school records.",
      "Visit the school and collect the admission form.",
      "Submit the admission form along with B-Form, photographs, and any other required documents.",
      "Pay the admission fee and await confirmation from the school.",
    ],
    tags: ["Family", "Identity"],
  },
];

export function getStackBySlug(slug: string): Stack | undefined {
  return stacks.find((s) => s.slug === slug);
}
