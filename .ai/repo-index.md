# Repo Index

Purpose: Help Codex/ChatGPT find the right files for feature-spec generation when only the repository root URL is provided.

Repository root:
https://github.com/1965kickcrab/prototype-playground/tree/main

---

## How To Use

When the user requests a feature spec:

1. Identify the requested feature.
2. Find the matching feature group below.
3. Read the listed files first.
4. Use related keywords only if more files are needed.
5. Do not scan the full repository unless the feature group is missing or incomplete.

---

## Repository Structure

| Path | Role |
| --- | --- |
| `.codex/` | Codex hooks, local policy, quality gate, and prompt context |
| `assets/` | SVG icons, logos, and static image assets |
| `history/` | Decision and work history |
| `public/` | Static HTML entry files |
| `src/components/` | Reusable UI components, forms, modals, lists, calendars, filters, ticket views |
| `src/config/` | Shared configuration such as policy sections and weekdays |
| `src/pages/` | Page-level HTML/JS entry points and screen wiring |
| `src/pages/settings/` | School/hotel settings pages |
| `src/services/` | Business logic, domain calculations, sync logic, repair utilities |
| `src/storage/` | LocalStorage-backed persistence modules |
| `src/utils/` | Pure utilities for dates, DOM, status, tags, sidebar, fee totals, selections |
| `src/styles/` | CSS |

## Feature Map

| Feature / Domain | Primary Files | Notes |
| --- | --- | --- |
| Reservation | `src/pages/reservation.js`, `src/components/reservation-modal.js`, `src/services/reservation-entries.js`, `src/storage/reservation-storage.js` | Reservation create/edit flow, date entries, save/update state |
| Hoteling reservation | `src/pages/hotels.js`, `src/components/hoteling-reservation-form.js`, `src/components/hoteling-calendar.js`, `src/components/hoteling-list.js`, `src/services/hoteling-reservation-service.js` | Hoteling check-in/check-out, stay dates, disabled date rules, calendar/list UI |
| Pickdrop | `src/services/pickdrop-policy.js`, `src/services/pickdrop-detail-sync.js`, `src/services/pickdrop-usage-repair-service.js`, `src/services/hoteling-reservation-service.js`, `src/components/reservation-modal.js`, `src/components/reservation-ticket-view.js`, `src/services/ticket-reservation-service.js`, `src/services/ticket-usage-service.js` | Pickup/dropoff flags, one-way/roundtrip policy, ticket usage sync/repair |
| Ticket reservation usage | `src/components/reservation-ticket-view.js`, `src/services/ticket-reservation-service.js`, `src/services/ticket-usage-service.js`, `src/services/ticket-auto-assign.js`, `src/services/ticket-count-service.js` | Ticket selection, reservable count, ticket usage mapping, auto assignment |
| Ticket management | `src/pages/ticket-page.js`, `src/components/ticket-form.js`, `src/components/ticket-view.js`, `src/components/ticket-issue.js`, `src/components/ticket-issue-view.js`, `src/services/ticket-service.js`, `src/services/ticket-issue-service.js`, `src/storage/ticket-storage.js`, `src/storage/ticket-issue-storage.js` | Ticket creation, editing, issuing, and storage |
| Pricing / billing | `src/pages/pricing.js`, `src/components/pricing-view.js`, `src/components/reservation-fee.js`, `src/services/pricing-service.js`, `src/services/reservation-billing.js`, `src/services/reservation-date-fee.js` | Pricing settings, reservation fee display, billing/date fee calculation |
| Payment status | `src/services/reservation-payment.js`, `src/services/reservation-payment-status.js`, `src/services/reservation-billing.js`, `src/components/reservation-fee.js` | Payment completion/status behavior |
| Member list/detail | `src/pages/member-page.js`, `src/pages/member-detail-page.js`, `src/components/member-search.js`, `src/components/member-table.js`, `src/components/member-detail-edit-templates.js`, `src/storage/members.js`, `src/services/member-page-service.js`, `src/services/member-detail-service.js` | Member search, table, detail view/edit logic |
| Member tags | `src/components/member-tags.js`, `src/services/member-tag-service.js`, `src/services/member-tag-management-service.js`, `src/storage/member-tag-catalog.js`, `src/utils/tags.js` | Member tag display, catalog, and management |
| Member reservation summary | `src/services/member-reservation-summary.js`, `src/services/member-reservable-count.js`, `src/storage/member-reservation-index-storage.js` | Member-level reservation/ticket availability summary |
| Guest reservation | `public/guest-reservation.html`, `src/pages/guest-reservation.js`, `src/services/guest-reservation-service.js`, `src/storage/guest-reservation-storage.js` | Guest reservation flow and storage |
| School class settings | `src/pages/settings/school/class.html`, `src/pages/settings/class-settings.js`, `src/components/class-form.js`, `src/components/class-list.js`, `src/services/class-management.js`, `src/services/class-display.js`, `src/storage/class-storage.js` | School class CRUD/settings |
| School/hotel operations | `src/pages/settings/school/operations.html`, `src/pages/settings/hotel/operations.html`, `src/pages/settings/operations.js`, `src/components/operations-view.js`, `src/services/operations-calendar.js`, `src/services/operations-settings.js`, `src/storage/operations-storage.js`, `src/storage/hotel-operations-storage.js` | Operation day/time settings |
| Reservation policy settings | `src/pages/settings/school/reservation-policy.html`, `src/pages/settings/hotel/reservation-policy.html`, `src/pages/settings/reservation-policy.js`, `src/components/policy-form.js`, `src/config/policy-sections.js`, `src/services/policy-utils.js` | Reservation policy form and shared policy utilities |
| Hotel rooms | `src/pages/settings/hotel/room.html`, `src/components/hoteling-room-options.js`, `src/services/room-pricing-sync.js`, `src/storage/hotel-room-storage.js` | Hotel room settings and room-pricing sync |
| Filters / selections | `src/components/filter-panel.js`, `src/components/service-filters.js`, `src/components/teacher-filters.js`, `src/components/selection-chips.js`, `src/utils/service-selection.js`, `src/utils/teacher-selection.js` | Shared filtering and selection UI |
| Sidebar / list | `src/components/list.js`, `src/utils/sidebar.js`, `src/utils/sidebar-groups.js`, `src/utils/sidebar-reservation-badge.js` | Sidebar, list rendering, grouping, and badges |
| Calendar | `src/components/calendar.js`, `src/components/hoteling-calendar.js`, `src/services/operations-calendar.js` | Generic calendar, hoteling calendar, operations calendar |
