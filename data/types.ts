export type DocumentCategory =
  | "identity"
  | "travel"
  | "family"
  | "property"
  | "licenses"
  | "finance";

export type Tag =
  | "Identity"
  | "Travel"
  | "Property"
  | "Legal"
  | "Finance"
  | "Employment"
  | "Telecom"
  | "Elections"
  | "Family";

export interface Website {
  id: string;
  name: string;
  slug: string;
  abbreviation: string;
  department: string;
  description: string;
  services: string[];
  links: { label: string; url: string }[];
  tags: Tag[];
}

export interface Requirement {
  item: string;
  notes: string;
}

export interface Fee {
  amount: number;
  type: string;
  asOf: string;
}

export interface Document {
  id: string;
  name: string;
  slug: string;
  abbreviation?: string;
  description: string;
  category: DocumentCategory;
  icon: string;
  coverImage: string;
  whatItIs: string;
  usedFor: string[];
  requirements: Requirement[];
  steps: string[];
  fees?: Fee[];
  notes?: string;
  applyLink: string;
  applyLabel: string;
  issuingAgencyId: string;
  relatedDocumentIds: string[];
  tags: Tag[];
}

export interface Stack {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  description: string;
  overview: string;
  documentIds: string[];
  websiteIds: string[];
  applicationOrder: string[];
  tags: Tag[];
}
