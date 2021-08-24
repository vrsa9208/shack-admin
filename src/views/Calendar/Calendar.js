import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import Container from "@material-ui/core/Container";

const Calendar = () => {
  const events = [
    {
      title: "Orlando Santiago",
      start: "2021-08-23",
      end: "2021-09-01",
      color: "green",
    },
    {
      title: "Ernesto Santiago",
      start: "2021-08-25",
      end: "2021-08-31",
      color: "red",
    },
  ];
  return (
    <Container style={{ height: "80vh" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="100%"
        events={events}
        locale="es-mx"
        dateClick={(info) => console.log("Hello", info)}
      />
    </Container>
  );
};

export default Calendar;
