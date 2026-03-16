import { Document, DocumentCategory } from "./types";

export const documents: Document[] = [
  {
    id: "cnic",
    name: "ID Card (CNIC)",
    slug: "cnic",
    description:
      "National ID card for Pakistani citizens aged 18 and above, issued by NADRA. Required for voting, banking, and all official transactions.",
    category: "identity",
    icon: "id-card",
    coverImage: "/images/ID Card CNIC.png",
    whatItIs:
      "The CNIC (Computerized National Identity Card) is the primary identity document for Pakistani citizens. Issued by NADRA, it is mandatory for all citizens aged 18 and above. The card contains biometric data, a unique 13-digit identification number, and serves as proof of citizenship. It is required for virtually all official and financial interactions in the country.",
    usedFor: [
      "Opening bank accounts",
      "Voter registration and voting",
      "Passport applications",
      "SIM card registration",
      "Property transactions",
      "Government service access",
      "Tax filing (NTN registration)",
    ],
    requirements: [
      { item: "B-Form (CRC)", notes: "Original NADRA Child Registration Certificate required" },
      { item: "Parent's CNIC", notes: "Valid CNIC of parent or legal guardian" },
      { item: "Matriculation certificate", notes: "School certificate if requested by NADRA (optional)" },
      { item: "Photographs", notes: "Two passport-sized photos, white background" },
    ],
    steps: [
      "Gather required documents: B-Form (CRC) and a parent's CNIC.",
      "Use the Pak ID mobile app or visit a NADRA Registration Center.",
      "Submit an online CNIC application or apply in person at NADRA with all documents.",
      "Undergo biometric verification (fingerprints and photo) at NADRA.",
      "Pay the CNIC processing fee. Your CNIC will be ready in a few days; NADRA will call or SMS when it's issued.",
    ],
    fees: [
      { amount: 750, type: "Normal", asOf: "March 2026" },
      { amount: 1500, type: "Urgent", asOf: "March 2026" },
      { amount: 2500, type: "Executive", asOf: "March 2026" },
    ],
    notes: "Try to visit your nearest NADRA early morning to avoid waiting in long queues.",
    applyLink: "https://id.nadra.gov.pk",
    applyLabel: "Apply on Pak ID Portal",
    issuingAgencyId: "nadra",
    relatedDocumentIds: ["bform", "passport"],
    tags: ["Identity", "Legal"],
  },
  {
    id: "passport",
    name: "Passport",
    slug: "passport",
    description:
      "Official travel document issued by DGI&P for international travel. Available in 5 or 10 year validity.",
    category: "travel",
    icon: "book-open",
    coverImage: "/images/Passport.png",
    whatItIs:
      "The Machine-Readable Passport (MRP) is issued by the Directorate General of Immigration & Passports under the Ministry of Interior. It is required for all international travel and serves as proof of Pakistani citizenship abroad. Available in regular, official, and diplomatic categories with 36 or 72 pages.",
    usedFor: [
      "International travel",
      "Visa applications",
      "Proof of citizenship abroad",
      "Opening overseas bank accounts",
      "NICOP/POC applications",
    ],
    requirements: [
      { item: "Valid CNIC", notes: "Original CNIC (and NICOP for overseas citizens)" },
      { item: "Passport fee receipt", notes: "Bank challan or online payment (PSID)" },
      { item: "Previous passport", notes: "Original required if renewal" },
      { item: "Child's CRC or Juvenile Card", notes: "Required if applicant is under 18" },
      { item: "Parents' CNICs and consent", notes: "Required if applicant is under 18" },
    ],
    steps: [
      "Download and fill the passport application form from DGI&P or apply online at the Passport Office website.",
      "Pay the prescribed passport fee at any designated bank and obtain the Challan receipt.",
      "Visit the nearest Regional Passport Office (RPO) with original CNIC and required documents.",
      "Submit the documents and application form. DGI&P staff will verify your identity.",
      "Provide fingerprints and photograph at the RPO for your passport application.",
      "Receive the passport via courier or pick it up (usually 2–3 weeks for normal service).",
    ],
    fees: [
      { amount: 3600, type: "Normal (36 pages)", asOf: "March 2026" },
      { amount: 5400, type: "Normal (72 pages)", asOf: "March 2026" },
      { amount: 9000, type: "Urgent (36 pages)", asOf: "March 2026" },
    ],
    notes: "Keep your fee receipt (PSID) safely — it is required at the time of passport issuance.",
    applyLink: "https://onlinemrp.dgip.gov.pk",
    applyLabel: "Apply on Passport Portal",
    issuingAgencyId: "dgip",
    relatedDocumentIds: ["cnic", "bform"],
    tags: ["Travel", "Identity"],
  },
  {
    id: "driving-license",
    name: "Driving License",
    slug: "driving-license",
    description:
      "Government-issued license permitting the holder to drive vehicles. Issued by provincial traffic police.",
    category: "licenses",
    icon: "car",
    coverImage: "/images/Driving License.png",
    whatItIs:
      "A Driving License is a legal permit to operate motor vehicles on public roads in Pakistan. Issued by provincial authorities through DLIMS (Driving License Issuance Management System), it requires passing both written and practical driving tests. Categories include motorcycle, car/jeep, LTV, and HTV.",
    usedFor: [
      "Legal permission to drive",
      "Vehicle registration",
      "International driving permit applications",
      "Secondary identification",
      "Insurance claims",
    ],
    requirements: [
      { item: "Valid CNIC", notes: "Original required" },
      { item: "Medical fitness certificate", notes: "From approved doctor" },
      { item: "Photographs", notes: "2 passport-size photographs" },
      { item: "Learner's permit", notes: "Must be held for minimum 42 days after theory test" },
      { item: "Fee payment receipt", notes: "Varies by province and license category" },
    ],
    steps: [
      "Visit the traffic licensing branch and fill out the license application form.",
      "Submit CNIC, medical certificate, and photographs to obtain a Learner's Permit.",
      "Study the traffic rules and practice driving during the learner period.",
      "After a minimum waiting period (42 days), return to take the theory (written) test.",
      "Upon passing theory, take the practical driving test at the testing track.",
      "If you pass both tests, pay the final fee and receive a computerized Driving License (valid for 3–5 years).",
    ],
    fees: [
      { amount: 1000, type: "Learner Permit", asOf: "March 2026" },
      { amount: 3000, type: "Permanent License", asOf: "March 2026" },
    ],
    notes: "Fees vary by province. Punjab fees shown. Sindh and KPK may differ.",
    applyLink: "https://dlims.punjab.gov.pk",
    applyLabel: "Apply on DLIMS Portal",
    issuingAgencyId: "dlims",
    relatedDocumentIds: ["cnic", "vehicle-reg"],
    tags: ["Identity", "Legal"],
  },
  {
    id: "bform",
    name: "B-Form",
    slug: "birth-certificate",
    description:
      "Official certificate for children under 18, issued by NADRA. Essential for school enrollment and future CNIC application.",
    category: "family",
    icon: "baby",
    coverImage: "/images/Form or Certificate.png",
    whatItIs:
      "The B-Form (Child Registration Certificate) is the official birth registration document for Pakistani children under 18. Issued by NADRA based on the Union Council birth registration, it serves as proof of birth, parentage, and citizenship. It is a prerequisite for obtaining a CNIC at age 18.",
    usedFor: [
      "School enrollment",
      "CNIC application at age 18",
      "Passport application for minors",
      "Proof of age and parentage",
      "Inheritance documentation",
    ],
    requirements: [
      { item: "Birth Certificate", notes: "Original from Union Council (B-Form)" },
      { item: "Parent's CNIC", notes: "Valid CNIC of parent or legal guardian" },
      { item: "Mother's CNIC", notes: "Original and copy" },
      { item: "Parents' marriage certificate", notes: "Nikah Nama (if required)" },
    ],
    steps: [
      "Register the child's birth at the local Union Council to obtain the original Birth Certificate.",
      "Visit a NADRA Registration Center with the Birth Certificate and a parent/guardian carrying their CNIC.",
      "Submit the application for the Child Registration Certificate (CRC/B-Form). NADRA will take the child's photo and fingerprints.",
      "Pay the processing fee.",
      "Receive the child's NADRA CRC (usually within a few days).",
    ],
    fees: [
      { amount: 200, type: "Normal", asOf: "March 2026" },
      { amount: 500, type: "Urgent", asOf: "March 2026" },
    ],
    applyLink: "https://id.nadra.gov.pk",
    applyLabel: "Apply on NADRA e-Services",
    issuingAgencyId: "nadra",
    relatedDocumentIds: ["cnic", "passport"],
    tags: ["Identity", "Family"],
  },
  {
    id: "vehicle-reg",
    name: "FRC",
    slug: "vehicle-registration",
    description:
      "Document issued by Excise department proving vehicle ownership and registration. Required for all motor vehicles.",
    category: "licenses",
    icon: "truck",
    coverImage: "/images/Form or Certificate.png",
    whatItIs:
      "The Vehicle Registration Certificate (also called FRC — Fitness Registration Certificate) is issued by the provincial Excise & Taxation department. It proves legal ownership and registration of a motor vehicle. Every vehicle in Pakistan must be registered within a set period after purchase.",
    usedFor: [
      "Proof of vehicle ownership",
      "Vehicle transfer",
      "Insurance claims",
      "Traffic police verification",
      "Sale of vehicle",
    ],
    requirements: [
      { item: "Sale invoice", notes: "Original from dealer (new cars) or previous registration book (used)" },
      { item: "Form 29/30", notes: "Transfer form for new cars or transfer letter for used cars" },
      { item: "CNIC", notes: "Copy of buyer (and seller for used vehicles)" },
      { item: "Token tax receipt", notes: "Vehicle bank token tax payment" },
      { item: "Photographs", notes: "Passport-size photographs" },
    ],
    steps: [
      "Obtain Form 29/30 from the vehicle dealer (if new) or a transfer letter from the seller (if used).",
      "Visit the Excise & Taxation office of your district with all documents and identity proof.",
      "Fill out the vehicle registration application form and submit it with the required documents.",
      "Pay the token tax and registration fee (amount depends on engine capacity and province).",
      "After processing (a few days), receive the vehicle registration book (FRC) and number plates.",
    ],
    applyLink: "https://excise-punjab.gov.pk",
    applyLabel: "Excise Punjab Portal",
    issuingAgencyId: "excise",
    relatedDocumentIds: ["cnic", "driving-license"],
    tags: ["Property", "Legal"],
  },
  {
    id: "marriage-cert",
    name: "Marriage Certificate",
    slug: "marriage-certificate",
    description:
      "Computerized marriage certificate issued by NADRA based on a registered Nikkah. Required for visa, sponsorship, and legal proof.",
    category: "family",
    icon: "heart",
    coverImage: "/images/Form or Certificate.png",
    whatItIs:
      "The NADRA Computerized Marriage Certificate is the official, legally recognized proof of marriage in Pakistan. It is issued in English and Urdu based on a properly registered Nikkah Nama from the Union Council. It is required for most official purposes including visa applications, spousal sponsorship, and family registration.",
    usedFor: [
      "Legal proof of marriage",
      "Visa and immigration applications",
      "Spousal sponsorship",
      "Family registration of children",
      "Insurance and benefits claims",
      "CNIC marital status update",
    ],
    requirements: [
      { item: "Nikkah Nama", notes: "Original, properly registered with Union Council and stamped" },
      { item: "Spouses' CNICs", notes: "Valid CNICs of both husband and wife" },
      { item: "Witnesses' CNICs", notes: "CNICs of two marriage witnesses" },
      { item: "Photographs", notes: "Passport-size photos of both spouses" },
      { item: "Application form", notes: "Filled form at Union Council or NADRA" },
    ],
    steps: [
      "Ensure the Nikkah is performed by an authorized Maulvi and get the Nikkah Nama stamped by the Union Council.",
      "Collect all documents: Nikkah Nama, spouses' CNICs, witnesses' CNICs, and photos.",
      "Visit the relevant Union Council office or NADRA center with these documents.",
      "Submit the application form and documents, then pay the official fee.",
      "After processing (usually 3–5 working days), collect the NADRA Marriage Certificate.",
    ],
    applyLink: "https://www.nadra.gov.pk",
    applyLabel: "Visit NADRA Website",
    issuingAgencyId: "nadra",
    relatedDocumentIds: ["cnic", "bform"],
    tags: ["Family", "Legal"],
  },
  {
    id: "origin-card",
    name: "Origin Card",
    slug: "origin-card",
    description:
      "NADRA-issued card for overseas Pakistanis granting visa-free entry and property rights in Pakistan.",
    category: "identity",
    icon: "globe",
    coverImage: "/images/Form or Certificate.png",
    whatItIs:
      "The Pakistan Origin Card (POC) is issued by NADRA to foreign nationals of Pakistani origin. It grants the holder visa-free entry into Pakistan, the right to purchase and sell property, open bank accounts, and conduct business in Pakistan. It is valid for 5 years and can be renewed.",
    usedFor: [
      "Visa-free entry to Pakistan",
      "Property purchase and sale in Pakistan",
      "Opening bank accounts in Pakistan",
      "Business operations in Pakistan",
      "Extended stay in Pakistan without visa",
    ],
    requirements: [
      { item: "Foreign passport", notes: "Valid passport of the country of citizenship" },
      { item: "Proof of Pakistani origin", notes: "Old Pakistani passport, CNIC, or parent's CNIC" },
      { item: "Photographs", notes: "Recent passport-size photographs" },
      { item: "Application form", notes: "NADRA POC application form" },
      { item: "Fee payment", notes: "POC processing fee receipt" },
    ],
    steps: [
      "Visit the NADRA website or Pakistani consulate/embassy abroad to obtain the POC application form.",
      "Fill out the application form with personal details and proof of Pakistani origin.",
      "Submit the application along with copies of your foreign passport, old Pakistani documents, and photographs.",
      "Pay the prescribed POC fee.",
      "After processing (usually 4–6 weeks), receive the Pakistan Origin Card by mail or pick-up.",
    ],
    applyLink: "https://id.nadra.gov.pk",
    applyLabel: "Apply on NADRA Portal",
    issuingAgencyId: "nadra",
    relatedDocumentIds: ["cnic", "passport"],
    tags: ["Identity", "Travel"],
  },
  {
    id: "death-cert",
    name: "Death Certificate",
    slug: "death-certificate",
    description:
      "Official certificate issued by NADRA/Union Council upon death. Required for inheritance, pension, and legal proceedings.",
    category: "family",
    icon: "file-text",
    coverImage: "/images/Form or Certificate.png",
    whatItIs:
      "The Death Certificate is an official document issued by NADRA (computerized) or the Union Council confirming the death of an individual. It is required for inheritance proceedings, pension claims, insurance settlements, and cancellation of the deceased's CNIC. Registration of death is mandatory under Pakistani law.",
    usedFor: [
      "Inheritance and succession proceedings",
      "Pension and gratuity claims",
      "Insurance settlement",
      "Cancellation of deceased's CNIC",
      "Property transfer to heirs",
      "Legal proof of death",
    ],
    requirements: [
      { item: "Deceased's CNIC", notes: "Original or copy of the deceased's CNIC" },
      { item: "Applicant's CNIC", notes: "CNIC of the person reporting the death" },
      { item: "Hospital/doctor certificate", notes: "Medical certificate confirming death (if applicable)" },
      { item: "Burial permit", notes: "Graveyard certificate or burial receipt" },
      { item: "Application form", notes: "Death registration form from Union Council" },
    ],
    steps: [
      "Report the death to the local Union Council within the prescribed time period.",
      "Submit the deceased's CNIC, medical certificate, and burial permit to the Union Council.",
      "Fill out the death registration form and provide your own CNIC as the informant.",
      "The Union Council issues a death registration certificate.",
      "Visit NADRA with the Union Council certificate to obtain a computerized Death Certificate and cancel the deceased's CNIC.",
    ],
    applyLink: "https://www.nadra.gov.pk",
    applyLabel: "Visit NADRA Website",
    issuingAgencyId: "nadra",
    relatedDocumentIds: ["cnic"],
    tags: ["Family", "Legal"],
  },
];

export function getDocumentById(id: string): Document | undefined {
  return documents.find((d) => d.id === id);
}

export function getDocumentBySlug(slug: string): Document | undefined {
  return documents.find((d) => d.slug === slug);
}

export function getDocumentsByIds(ids: string[]): Document[] {
  return ids
    .map((id) => documents.find((d) => d.id === id))
    .filter((d): d is Document => d !== undefined);
}

export function getDocumentsByCategory(
  category: DocumentCategory
): Document[] {
  return documents.filter((d) => d.category === category);
}

export const documentCategories: {
  key: DocumentCategory;
  label: string;
}[] = [
  { key: "identity", label: "Identity" },
  { key: "travel", label: "Travel" },
  { key: "family", label: "Family" },
  { key: "finance", label: "Finance" },
  { key: "property", label: "Property" },
  { key: "licenses", label: "Licenses" },
];
