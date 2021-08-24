import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ShacksList from "../../components/ShacksList/ShacksList";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Calendar = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Grid container spacing={3} style={{ height: "90vh" }}>
        <Grid item xs={2}>
          <ShacksList />
        </Grid>
        <Grid item xs={10} style={{ height: "100%" }}>
          <Paper className={classes.paper} style={{ height: "100%" }}>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              height="100%"
              events={events}
              locale="es-mx"
              dateClick={(info) => console.log("Hello", info)}
              eventClick={(info) => alert("No me toques, depravado")}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Calendar;
