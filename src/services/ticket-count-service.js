import { readStorageArray, writeStorageValue } from "../storage/storage-utils.js";

const DAYCARE_RESERVATIONS_KEY = "daycare-reservations:reservations";
const HOTELING_RESERVATIONS_KEY = "hoteling-reservations:reservations";
const MEMBERS_KEY = "memberList";

// Status definitions from user request, using keys instead of display values
const DAYCARE_RESERVED_STATUSES = new Set(["PLANNED"]);
const DAYCARE_USED_STATUSES = new Set(["CHECKIN", "CHECKOUT", "ABSENT"]);

const HOTELING_RESERVED_STATUSES = new Set(["PLANNED"]);
const HOTELING_USED_STATUSES = new Set(["CHECKIN", "CHECKOUT", "NO_SHOW"]);


/**
 * Recalculates used, reserved, and reservable counts for all tickets of all members
 * based on the current state of all reservations.
 */
export function recalculateTicketCounts() {
  // 1. Read all data
  const members = readStorageArray(MEMBERS_KEY, { fallback: [] });
  const daycareReservations = readStorageArray(DAYCARE_RESERVATIONS_KEY, { fallback: [] });
  const hotelingReservations = readStorageArray(HOTELING_RESERVATIONS_KEY, { fallback: [] });

  if (!members.length) {
    return;
  }

  // 2. Create a map for quick ticket-to-member lookup and reset counts
  const ticketMap = new Map();
  for (const member of members) {
    if (!member.tickets) member.tickets = [];
    for (const ticket of member.tickets) {
      ticketMap.set(ticket.id, ticket);
      // Reset counts before recalculation
      ticket.usedCount = 0;
      ticket.reservedCount = 0;
    }
  }

  // 3. Process Daycare reservations
  for (const reservation of daycareReservations) {
    for (const dateEntry of reservation.dates) {
      const ticketId = dateEntry.ticketUsage?.ticketId;
      if (!ticketId) continue;

      const ticket = ticketMap.get(ticketId);
      if (!ticket) continue;

      const statusKey = dateEntry.baseStatusKey || reservation.baseStatusKey || 'PLANNED';

      if (DAYCARE_RESERVED_STATUSES.has(statusKey)) {
        ticket.reservedCount++;
      } else if (DAYCARE_USED_STATUSES.has(statusKey)) {
        ticket.usedCount++;
      }
    }
  }

  // 4. Process Hoteling reservations
  for (const reservation of hotelingReservations) {
      // Hoteling status is on the reservation, not the date entry
    const statusKey = reservation.status; // This should be the key e.g., 'PLANNED'
    for (const dateEntry of reservation.dates) {
        const ticketId = dateEntry.ticketUsage?.ticketId;
        if (!ticketId) continue;

        const ticket = ticketMap.get(ticketId);
        if (!ticket) continue;

        if (HOTELING_RESERVED_STATUSES.has(statusKey)) {
            ticket.reservedCount++;
        } else if (HOTELING_USED_STATUSES.has(statusKey)) {
            ticket.usedCount++;
        }
    }
  }

  // 5. Calculate the final reservableCount for all tickets
  for (const member of members) {
    for (const ticket of member.tickets) {
      ticket.reservableCount =
        ticket.totalCount - (ticket.usedCount + ticket.reservedCount);
    }
  }

  // 6. Write the updated members list back to storage
  writeStorageValue(MEMBERS_KEY, members);
}
