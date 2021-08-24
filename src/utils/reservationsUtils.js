import moment from "moment";

export const mapReservationToEvent = (reservation, shacks = []) => {
  let reservedShack = shacks.find((shack) => shack.id === reservation.shackId);

  return {
    title: `${reservation.name} ${reservation.lastname}`,
    start: reservation.startDate,
    end: reservation.endDate,
    color: reservedShack?.color,
  };
};

export const isValidEvent = (proposedEvent, currentEvents) => {
  let proposedStartDate = moment(proposedEvent.start);
  let proposedEndDate = moment(proposedEvent.end);

  for (let i = 0; i < currentEvents.length; i++) {
    let currentEvent = currentEvents[i];
    let currentEventStartDate = moment(currentEvent.start);
    let currentEventEndDate = moment(currentEvent.end);
    if (
      (proposedStartDate.diff(currentEventStartDate) >= 0 &&
        proposedStartDate.diff(currentEventEndDate) < 0) ||
      (proposedEndDate.diff(currentEventStartDate) > 0 &&
        proposedEndDate.diff(currentEventEndDate) <= 0) ||
      (proposedStartDate.diff(currentEventStartDate) < 0 &&
        proposedEndDate.diff(currentEventEndDate) > 0)
    ) {
      return false;
    }
  }
  return true;
};
