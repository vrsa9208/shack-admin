export const mapReservationToEvent = (reservation, shacks = []) => {
  let reservedShack = shacks.find((shack) => shack.id === reservation.shackId);

  return {
    title: reservation.name,
    start: reservation.startDate,
    end: reservation.endDate,
    color: reservedShack?.color,
  };
};
