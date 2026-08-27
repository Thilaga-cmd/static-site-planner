# Charithra Learning Hub — Static Showcase Build + Architecture Blueprint

## What the document asks for vs. what is buildable here

The document describes a full ecosystem: public website + CRM + LMS + teacher marketplace + staff performance + AI analytics, on Postgres with auth, payments, messaging and background jobs. That is a multi-phase, backend-heavy product.

This build is deliberately **static only** — no database, no login, no server logic. So the deliverable is a **clickable, demo-data-driven prototype** that proves the workflow, information architecture and UI language, and a written architecture blueprint for the real system.

Everything "dynamic" is simulated with typed mock data in `src/data/*` and local component state. Forms validate and show success states but persist nothing.

## Scope of the static build

### A. Public website (real, production-quality content)

- **Home** (`/`) — hero, vision, why Charithra, programme grid, how-it-works (Diagnose → Understand → Personalise → Teach → Assess → Track → Improve), assessment system, teacher network, Tamil Academy / Online / Home Tuition / Future Skills strips, parent community, testimonials, CTA band. Primary CTA "Find the Right Learning Programme", secondary "Become a Teacher".
- **About** (`/about`) — vision, mission, learning philosophy, values, future-school vision.
- **Programmes** (`/programmes`) — filterable list by category (Academic, Foundation Recovery, One-to-One, Online, Home Tuition, Future Skills, Tamil Academy).
- **Programme detail** (`/programmes/$slug`) — overview, who it's for, outcomes, duration, mode, fees, batches, enquiry CTA.
- **Enquiry** (`/enquiry`) — full lead form (student, parent, contact, school, standard, board, subjects, learning problem, mode, timing, budget, source). Client validation, then a "lead created" confirmation screen showing the simulated Lead ID and next steps.
- **Become a teacher** (`/teachers/apply`) — teacher application form + explanation of the Application → Assessment → Verification → Demo → Approval → Matching journey.
- **Contact** (`/contact`).

### B. Workflow explainer pages (the "understand the system" part)

- `/how-it-works` — the three journeys (Parent, Teacher, Staff) rendered as visual step flows, plus the CRM pipeline stages as a horizontal board.

### C. Demo portals (static, role-switchable, mock data)

Accessible from a `/demo` entry that lets you pick a role — no auth, clearly labelled "Demo data".

- **Admin dashboard** (`/demo/admin`) — KPI cards (leads, conversion, active students, revenue, pending fees, attendance), charts, at-risk students table, AI-insight cards marked as AI-generated recommendations.
- **CRM board** (`/demo/admin/crm`) — Kanban of the 12 pipeline stages with mock lead cards and a lead detail drawer showing the activity timeline.
- **Students list + student profile** (`/demo/admin/students`, `.../students/$id`) — learning profile: current level, strengths, gaps, recommended programme, 10 growth dimensions as a radar-style panel, attendance and test history.
- **Teachers + match demo** (`/demo/admin/teachers`) — teacher cards with verification status, and a match-score panel breaking down subject/timing/location/experience/budget.
- **Teacher portal** (`/demo/teacher`) — schedule, assigned students, session report form, earnings, rating.
- **Student portal** (`/demo/student`) — my programme, lessons, assignments, progress, AI recommendations.
- **Parent dashboard** (`/demo/parent`) — child profile, attendance, progress, fees, teacher feedback.

Each portal shares one app shell (sidebar + topbar + role switcher), so the navigation structure of the real admin panel is visible even though most sidebar items are marked "Phase N".

Every table gets search, filters, sort, pagination, and empty/loading/error states so the UX contract from section 32 is demonstrated.

### D. Design system

One distinctive education-tech direction defined entirely in `src/styles.css` as oklch tokens (deep academic ink base, a warm Tamil-heritage accent, restrained gold for achievement states), custom shadcn variants, no hardcoded colours in components. Generated hero/programme imagery. Mobile responsive throughout.

## What is explicitly NOT in this build

No auth, no RBAC enforcement, no persistence, no payments, no email/SMS/WhatsApp, no real AI, no exam engine grading, no file uploads, no audit logs. Those are named in the blueprint below with where they slot in.

## Architecture blueprint (delivered as an in-app `/architecture` page + `docs/architecture.md`)

Written so the static prototype can be upgraded without rewrites:

1. **Layering** — a modular monolith, not microservices. `routes → feature modules → service layer → repository layer → DB`. In the static build the repository layer is mock adapters; swapping them for real data access is the only change needed per module.
2. **Data model** — ERD covering the ~35 core entities in section 26, with soft delete, timestamps, and a single `activity_log` + `audit_log` spine.
3. **RBAC** — roles in a separate `user_roles` table (never on the profile), permissions as capability strings, server-side checks only. The demo role switcher maps 1:1 to these roles.
4. **AI layer** — provider abstraction, permission-aware retrieval, data minimisation (no raw student PII into prompts), every insight carries data period + supporting metrics + "AI recommendation" labelling and a human-review gate.
5. **Integrations** — payment provider abstraction, messaging provider abstraction, object storage abstraction. All behind interfaces so nothing leaks into domain logic.
6. **Phasing** — Phase 1 Foundation → 2 CRM → 3 LMS → 4 Assessment → 5 Operations → 6 Finance → 7 Staff Performance → 8 AI Analytics, matching the document.

### Feature enhancements I'd add beyond the document

- **Multi-tenant / multi-branch from day one** — an `organisation` + `branch` scope on every row, so Tamil Academy, Future School and franchise centres don't need a migration later.
- **Event log as a first-class primitive** — every meaningful action emits a domain event; CRM timelines, audit logs, notifications and AI features all read from it instead of each module inventing its own history table.
- **Human-in-the-loop by design** — AI outputs land in a review queue with approve/edit/reject, never straight into a parent-facing report.
- **Consent & data-retention module** — child data means explicit parental consent records, retention windows and export/delete requests. Cheaper now than retrofitted.
- **Offline-tolerant home-tuition check-in** — teachers check in from homes with poor connectivity; queue writes locally and sync.
- **Feature flags per branch/role** so phases can ship to one centre first.

## Technical notes

- TanStack Start routes under `src/routes`; `src/routes/index.tsx` becomes the real Home page.
- Mock data as typed modules in `src/data/` (leads, students, teachers, programmes, insights) — one obvious seam to replace with real fetching later.
- Charts via a lightweight charting lib; tables via shadcn primitives.
- Per-route `head()` metadata with unique titles/descriptions for SEO on every public page.