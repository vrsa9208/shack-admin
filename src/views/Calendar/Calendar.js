import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchShacks } from "../../redux/actions/shacksActions";
import {
  fetchReservations,
  postReservation,
} from "../../redux/actions/reservationsActions";
import {
  mapReservationToEvent,
  isValidEvent,
} from "../../utils/reservationsUtils";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import ShacksList from "../../components/ShacksList/ShacksList";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { Container } from "@material-ui/core";
import ShackUpdateDialog from "../../components/ShackUpdateDialog/ShackUpdateDialog";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "83vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Calendar = ({
  shacks,
  reservations,
  fetchShacks,
  fetchReservations,
  postReservation,
}) => {
  const classes = useStyles();
  const [selectedShack, setSelectedShack] = useState(null);
  const [updateDialog, setUpdateDialog] = useState({ open: false });

  useEffect(() => {
    fetchShacks();
    fetchReservations();
  }, [fetchShacks, fetchReservations]);

  const handleOnItemClick = (item) => {
    setSelectedShack(item);
  };

  const handleOnUpdateDialogCancelClick = () => {
    setUpdateDialog({ open: false });
  };

  const handleOnCalendarSelect = (calendarEvent) => {
    if (!selectedShack) {
      alert("Selecciona una cabaña");
      return;
    }

    if (!isValidEvent(calendarEvent, events)) {
      alert("Las fechas NO son válidas. Favor de revisar");
      return;
    }

    setUpdateDialog({
      open: true,
      selectedShack,
      calendarEvent,
      onSubmitClick: startPostReservation,
    });
  };

  const startPostReservation = (reservation) => {
    setUpdateDialog({ open: false });
    postReservation(reservation);
  };

  const filteredReservations = reservations.filter(
    (reservation) => reservation.shackId === selectedShack?.id
  );

  const events = filteredReservations.map((reservation) =>
    mapReservationToEvent(reservation, shacks)
  );

  return (
    <>
      {updateDialog.open && (
        <ShackUpdateDialog
          onCancelClick={handleOnUpdateDialogCancelClick}
          {...updateDialog}
        />
      )}
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3} style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Alert severity="info">
              Para agendar una cita, selecciona una cabaña y presiona la fecha
              de inicio en el calendario
            </Alert>
          </Grid>
          <Grid item xs={2}>
            <ShacksList
              data={shacks}
              selected={selectedShack}
              onItemClick={handleOnItemClick}
            />
          </Grid>
          <Grid item xs={10} style={{ height: "100%" }}>
            <Paper className={classes.paper} style={{ height: "100%" }}>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                height="100%"
                events={events}
                locale="es-mx"
                selectable
                eventClick={(info) => alert("No me toques, depravado")}
                select={handleOnCalendarSelect}
                selectConstraint={{
                  start: moment(new Date()).subtract(1, "d").toDate(),
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  shacks: state.shacks.data,
  reservations: state.reservations.data,
});

const mapDispatchToProps = { fetchShacks, fetchReservations, postReservation };

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
