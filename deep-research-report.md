# Product Requirements Document: Pakistan Government Services Directory WebApp

## Overview
This webapp will serve Pakistani citizens by aggregating official government websites, citizen documents, and contextual “stacks” (bundles) for common life events. Three main views (toggled by a segmented control at the top) will present: **Websites**, **Documents**, and **Stacks**. The **Websites** view lists key government departments and portals (e.g. NADRA for identity, DGI&P for passports) with descriptions and direct links. The **Documents** view catalogs important citizen documents (e.g. CNIC, passport, birth certificate) by category, explaining each document’s purpose, prerequisites, and where/how to obtain it. The **Stacks** view groups documents into scenario-based collections (e.g. *“New Adult (18+)”*, *“Minor Registration”*, *“Travel Abroad”*, *“Marriage”*, *“Home Purchase”*, *“Vehicle Ownership”*, etc.). Each stack shows the relevant documents with links to the issuing agency and notes on requirements. Initial content will include ~5–6 items per view (with room to expand over time). The site emphasizes a **clean, minimal** aesthetic (black/white/grey base with subtle accent colors on icons/tags), following patterns from design libraries like ShadCN UI【24†L21-L24】. All pages will ultimately direct users to the correct official resources (agency websites or e-services).

## Navigation & Page Layout
- **Master Toggle (Top Bar):** A segmented control or tabs labeled **Websites**, **Documents**, **Stacks**. Default view is **Websites**. Toggling switches between sections without full page reload (client-side routing).
- **Websites Page:** A scrollable list or grid of cards, each card representing a government department or portal. Each entry includes: agency name, short description of its function, and one or more links/buttons to its service portal. Example entries:  
  - *NADRA (National Database & Registration Authority)* – issues CNICs (national ID), B-Forms (child registration), family registration, etc. (Link to NADRA e-Services portal).  
  - *DGI&P (Immigration & Passports, Ministry of Interior)* – issues Machine-Readable Passports and oversees visas/citizenship【28†L39-L45】【28†L139-L143】.  
  - *FBR (Federal Board of Revenue)* – provides online tax filing, e-payment, business registration (IRIS tax portal, customs, e-invoicing)【31†L159-L166】.  
  - *Election Commission of Pakistan* – voter registration portal.  
  - *NJP (National Job Portal)* – listing of government job openings.  
  - *PTA (Telecom Authority)* – SIM/mobile registration system.  
  Each card may use a ShadCN UI card or list component, with the agency’s logo/icon, and a brief bullet list of services offered.  
- **Documents Page:** Documents are categorized (e.g. *Identity*, *Family*, *Travel*, *Property*, *Licenses*). Each document entry includes: document name, issuing authority, summary of its use, prerequisites, and a link to apply or learn more. For example:  
  - *CNIC (Computerized National Identity Card)* – mandatory ID for all adults (18+); prerequisite: parent’s CNIC and Birth Certificate; issued by NADRA (details on NADRA portal).  
  - *B-Form (Child Registration Certificate)* – birth certificate for minors; issued by NADRA or union councils; needed for school enrollment.  
  - *Passport (Machine-Readable Passport)* – required for international travel; apply via DGI&P (Ministry of Interior)【28†L139-L143】.  
  - *NICOP/POC* – identity for overseas Pakistanis.  
  - *Marriage Certificate* – proof of marriage (issued by local Union Council/NADRA).  
  - *Domicile Certificate* – proof of residence/registration in a province.  
  - *Driving License* – issued by provincial transport authorities.  
  Each document entry links to the relevant official site (e.g. NADRA, DGI&P) and explains what other processes it enables (e.g. CNIC enables voting, banking).  
- **Stacks Page:** Each stack is a user-journey scenario, presented as a list or card with a title and description (e.g. *“Turn 18: Obtain Your CNIC”*). Upon selecting a stack, a detail view lists all required documents (with brief explanations and links) and any sequential steps. Example stacks:  
  - *“Under 18 (Child) – Child Registration”*: includes Birth Certificate, Child Registration (B-Form), School Enrollment Info.  
  - *“Just Turned 18 – New Adult”*: includes CNIC (NID card) application (requires B-Form), Voter registration link.  
  - *“Travel Abroad”*: Passport application【28†L139-L143】, international health certificates, visa guidance.  
  - *“Getting Married”*: Marriage certificate requirements, spouse CNICs, registration link.  
  - *“Buy a House”*: Property title search portal, registration authority link.  
  - *“Buy a Car”*: Vehicle registration, driving license, insurance info.  
  Each stack entry may use a ShadCN accordion or list component to expand required docs.

## Content Strategy & Data Model
- **Content Items:** Start with ~5–6 entries per section. For each item, store structured data in Supabase (PostgreSQL):  
  - *Websites table:* `{ id, name, description, category, link, iconURL }`.  
  - *Documents table:* `{ id, name, description, category, issuingAgency (ref to Websites), prerequisites, applicationLink }`.  
  - *Stacks table:* `{ id, name, description }`.  
  - *StackItems join table:* linking stacks to required Documents.  
- **Fields & Relationships:** Documents reference their issuing website/agency. Stacks reference multiple documents via a join table. Each record includes any meta (e.g. logo URL, display order, tags).  
- **Initial Data:** Seed the database with a small subset: e.g. Websites = {NADRA, DGI&P, FBR, NJP, Election Commission}; Documents = {CNIC, Passport, B-Form, Marriage Cert, Domicile, Driving License}; Stacks = {“18th Birthday”, “Under 18”, “Travel”, “Marriage”, “Property Purchase”, “Vehicle Purchase”}.  
- **Growth Plan:** The content model supports easy expansion: admins can add more agencies, documents, and stacks through a CMS interface or directly via Supabase. Search and filtering (e.g. by department or life stage) can be added later.

## User Interface & Design
- **Clean, Minimal Aesthetic:** Use a monochrome palette (black/white/gray) for backgrounds and text, with sparing use of accent color (e.g. for icons, buttons, tags). Font and spacing should favor readability. This approach mirrors the minimalist style of inspiration sites (e.g. Mobbin) and is well-supported by Tailwind CSS and ShadCN’s neutral theme【24†L21-L24】.  
- **ShadCN Components:** Leverage the ShadCN UI library for consistent, accessible components【24†L21-L24】. For example, use ShadCN’s Tab or Segmented Control for the top toggles, Card or List components for items, and Accordion or Expansion Panels for stack details. All components will be styled via Tailwind.  
- **Responsive Layout:** Ensure mobile-friendly design: the toggle switches to a dropdown or stacked tabs on narrow screens; lists become vertical; spacing and touch targets adjusted.  
- **Header & Navigation:** A simple header with the app name/logo. Below it, the three-section toggle. Each section uses headings and bullet lists for clarity.  
- **UI Libraries:** ShadCN is the “foundation for your design system” with customizable components【24†L21-L24】. It works seamlessly with Next.js and Tailwind, enabling rapid prototyping of the above layout.  

## Technology Stack & Architecture
- **Frontend:** Next.js (React framework) with **TypeScript** and **Tailwind CSS**. Next.js offers server-side rendering and static generation, which suits mostly-static content. A client-side router will handle the toggle navigation between sections. The UI uses ShadCN components (built on Radix and Tailwind) for consistent styling【24†L21-L24】.  
- **Backend & Data:** **Supabase** (PostgreSQL) serves as the database and backend. Supabase is “the Postgres development platform” offering a managed Postgres database, authentication, instant RESTful APIs, and real-time subscriptions【40†L17-L24】. We’ll store content tables (websites, documents, stacks) in Supabase. The Next.js frontend can fetch from Supabase using its JavaScript client or auto-generated APIs (Supabase automatically provides an API for each table). Supabase’s row-level security can be configured to allow public read-access for the listings, and optionally admin write-access.  
- **Deployment:** Host the Next.js app on **Vercel** for easy continuous deployment. Vercel provides a native Supabase integration: “By integrating Supabase with Vercel, developers can leverage a Supabase Postgres Database, Auth, and Storage… while benefiting from Vercel’s hassle-free deployment”【42†L130-L132】. Environment variables (Supabase keys/URLs) are securely injected into the Vercel deployment.  
- **Starter Templates:** We will use or adapt a Next.js App Router template pre-configured with Supabase and Tailwind. Vercel Marketplace offers a Next.js template “configured with cookie-based auth using Supabase, TypeScript and Tailwind CSS”【42†L243-L250】. This jumpstarts development with best practices for this stack.  
- **Data Workflow:** No heavy backend code is needed. Next.js pages will use `getStaticProps` or `getServerSideProps` (or the App Router’s data fetching) to load content from Supabase. Small client-side React hooks can fetch or subscribe to real-time updates if needed.  
- **Scalability:** The architecture can scale easily: adding more records in the database updates the site content. Search and filtering can be added on the front-end using built data or via Supabase Full-Text Search. If user accounts or feedback are needed later, Supabase Auth and Functions can be integrated.

## Implementation Summary
1. **Data Modeling:** Define Supabase tables for Websites, Documents, Stacks, and populate seed data.  
2. **Frontend Layout:** Using ShadCN+Tailwind, build pages/components for each section: a Tab/Toggle component to switch views, and page-specific layouts (cards/lists for Websites and Documents, accordions for Stacks). Ensure a cohesive monochrome theme.  
3. **Content Pages:** Hardcode initial entries (5–6) or fetch them from Supabase. Each item links to the official agency sites. For example, link “Passport” to DGI&P’s passport application page, and highlight that passports are issued by DGI&P【28†L139-L143】.  
4. **Interactivity:** No complex logic; mostly content display. The toggles simply show/hide sections. As content grows, add simple search or filter components (ShadCN forms) if needed.  
5. **Deployment:** Push to Vercel for automatic CI/CD. Use the Supabase integration to sync environment and allow immediate global access.  

**Key Technologies:** Next.js, TypeScript, Tailwind CSS, ShadCN UI components【24†L21-L24】, Supabase (Postgres + Auth)【40†L17-L24】, Vercel hosting (with Supabase integration)【42†L130-L132】【42†L243-L250】. This modern stack ensures maintainability and fast delivery of a polished, minimal interface.  

By following these requirements, the final product will be a succinct, user-friendly hub that guides Pakistani citizens to the precise government services they need, organized by document type and life event.  

**Sources:** Official agency sites and documentation (e.g. DGI&P passport service【28†L39-L45】【28†L139-L143】, FBR e-services【31†L159-L166】), and tech platform docs (ShadCN UI library【24†L21-L24】, Supabase platform【40†L17-L24】, Vercel integration guide【42†L130-L132】【42†L243-L250】). These inform the design and tech choices.