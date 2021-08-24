import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchShacks } from "../../redux/actions/shacksActions";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import ShacksList from "../../components/ShacksList/ShacksList";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { Container } from "@material-ui/core";

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

const Calendar = ({ shacks, fetchShacks }) => {
  const classes = useStyles();
  const [selectedShack, setSelectedShack] = useState("");

  useEffect(() => {
    fetchShacks();
  }, [fetchShacks]);

  const handleOnItemClick = (item) => {
    setSelectedShack(item.id);
  };

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
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3} style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Alert severity="info">
            Para agendar una cita, selecciona una cabaña y presiona la fecha de
            inicio en el calendario
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
              dateClick={(info) => console.log("Hello", info)}
              eventClick={(info) => alert("No me toques, depravado")}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  shacks: state.shacks.data,
});

const mapDispatchToProps = { fetchShacks };

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
