# Repo Index

## Project

`prototype-playground` is a LocalStorage-based static prototype for Schedule Daycare / Dialodog product planning.

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

## High Priority Files

| File | Domain | Role | Priority |
| --- | --- | --- | --- |
| `src/pages/reservation.js` | Reservation | Reservation page entry and screen wiring | High |
| `src/components/reservation-modal.js` | Reservation | Reservation create/edit modal UI | High |
| `src/services/reservation-entries.js` | Reservation | Reservation date-entry logic | High |
| `src/storage/reservation-storage.js` | Reservation | Reservation LocalStorage schema/access | High |
| `src/components/reservation-ticket-view.js` | Ticket usage | Reservation ticket selection UI | High |
| `src/services/ticket-reservation-service.js` | Ticket usage | Issued ticket options and reservable counts | High |
| `src/services/ticket-usage-service.js` | Ticket usage | Ticket usage record/date mapping | High |
| `src/services/hoteling-reservation-service.js` | Hoteling | Hoteling date entries, night count, disabled dates | High |
| `src/services/pickdrop-policy.js` | Pickdrop | Pickup/dropoff flag normalization and one-way/roundtrip policy | High |
| `src/services/pickdrop-detail-sync.js` | Pickdrop | Pickdrop ticket option restoration in detail/edit flow | High |
| `src/services/pickdrop-usage-repair-service.js` | Pickdrop | Manual repair of pickdrop ticket usages | High |
| `src/services/pricing-service.js` | Pricing | Pricing business logic | High |
| `src/services/reservation-billing.js` | Billing | Reservation billing/amount calculation | High |
| `src/services/reservation-date-fee.js` | Pricing | Date-level fee logic | High |
| `src/pages/member-detail-page.js` | Member | Member detail page wiring | Medium |
| `src/services/member-detail-service.js` | Member | Member detail business logic | Medium |
| `src/storage/members.js` | Member | Member storage | Medium |

## Source Tree Snapshot

```text
public/guest-reservation.html
public/index.html
src/components/calendar.js
src/components/class-form.js
src/components/class-list.js
src/components/filter-panel.js
src/components/hoteling-calendar.js
src/components/hoteling-list.js
src/components/hoteling-reservation-form.js
src/components/hoteling-room-options.js
src/components/list.js
src/components/member-detail-edit-templates.js
src/components/member-search.js
src/components/member-table.js
src/components/member-tags.js
src/components/member-ticket-issue-modal.js
src/components/operations-view.js
src/components/policy-form.js
src/components/pricing-view.js
src/components/reservation-fee.js
src/components/reservation-modal.js
src/components/reservation-ticket-view.js
src/components/selection-chips.js
src/components/service-filters.js
src/components/tag-input.js
src/components/teacher-filters.js
src/components/ticket-form.js
src/components/ticket-issue-view.js
src/components/ticket-issue.js
src/components/ticket-view.js
src/components/toast.js
src/config/policy-sections.js
src/config/weekdays.js
src/pages/guest-reservation.js
src/pages/hotels.html
src/pages/hotels.js
src/pages/main.js
src/pages/member-detail-page.js
src/pages/member-detail.html
src/pages/member-page.js
src/pages/members.html
src/pages/mypage.html
src/pages/mypage.js
src/pages/pricing.html
src/pages/pricing.js
src/pages/reservation.js
src/pages/ticket-page.js
src/pages/tickets.html
src/pages/settings/class-settings.js
src/pages/settings/operations.js
src/pages/settings/reservation-policy.js
src/pages/settings/hotel/operations.html
src/pages/settings/hotel/reservation-policy.html
src/pages/settings/hotel/room.html
src/pages/settings/school/class.html
src/pages/settings/school/operations.html
src/pages/settings/school/reservation-policy.html
src/services/class-display.js
src/services/class-management.js
src/services/class-pricing-sync.js
src/services/class-ticket-sync.js
src/services/daycare-duration.js
src/services/guest-reservation-service.js
src/services/hoteling-reservation-service.js
src/services/member-detail-service.js
src/services/member-page-service.js
src/services/member-reservable-count.js
src/services/member-reservation-summary.js
src/services/member-tag-management-service.js
src/services/member-tag-service.js
src/services/operations-calendar.js
src/services/operations-settings.js
src/services/pickdrop-detail-sync.js
src/services/pickdrop-policy.js
src/services/pickdrop-usage-repair-service.js
src/services/policy-utils.js
src/services/pricing-service.js
src/services/reservation-billing.js
src/services/reservation-date-fee.js
src/services/reservation-entries.js
src/services/reservation-payment-status.js
src/services/reservation-payment.js
src/services/room-pricing-sync.js
src/services/state.js
src/services/ticket-auto-assign.js
src/services/ticket-count-service.js
src/services/ticket-issue-service.js
src/services/ticket-reservation-service.js
src/services/ticket-service.js
src/services/ticket-usage-service.js
src/storage/class-storage.js
src/storage/guest-reservation-storage.js
src/storage/hotel-operations-storage.js
src/storage/hotel-room-storage.js
src/storage/member-reservation-index-storage.js
src/storage/member-tag-catalog.js
src/storage/members.js
src/storage/operations-storage.js
```

## AI Reading Rule

When analyzing a feature:

1. Read `.ai/repo-index.md` first.
2. Use `Feature Map` to identify related files.
3. Read High Priority files first.
4. Read Medium/Low files only when the behavior is unclear.
5. Avoid full repository scans unless explicitly requested.
6. Final product specs should describe:
   - user-facing behavior
   - business logic
   - UI logic
   - edge cases
   - data impact

## Maintenance Rule

Update this file when:

- files are moved or renamed;
- a new domain/feature area is added;
- a feature's primary source-of-truth file changes.
