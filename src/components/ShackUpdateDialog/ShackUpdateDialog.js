import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

const ShackUpdateDialog = ({
  onCancelClick,
  onSubmitClick,
  selectedShack,
  calendarEvent,
}) => {
  const [startDate, setStartDate] = useState(
    calendarEvent?.start ?? new Date()
  );
  const [endDate, setEndDate] = useState(calendarEvent?.end ?? new Date());
  const [initialPayment, setInitialPayment] = useState(0);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const days = moment(endDate).diff(moment(startDate), "d");
  const total = days * selectedShack?.price;
  const leftPayment = total - initialPayment;

  const handleOnStartDateInputChange = (date) => {
    setStartDate(date._d);
  };

  const handleOnEndDateInputChange = (date) => {
    setEndDate(date._d);
  };

  const handleOnInitialPaymentChange = (event) => {
    if (event.target.value.length > 0) {
      setInitialPayment(parseFloat(event.target.value));
    } else {
      setInitialPayment(0);
    }
  };

  const handleOnNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOnLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleOnSubmitClick = () => {
    let reservation = {
      shackId: selectedShack.id,
      name,
      lastname,
      total,
      startDate: moment(startDate).format("yyyy-MM-DD"),
      endDate: moment(endDate).format("yyyy-MM-DD"),
      initialPayment,
      creationDate: new Date(),
      status: "Open",
    };

    onSubmitClick(reservation);
  };

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reservar cabaña</DialogTitle>
        <DialogContent>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <DialogContentText>
                Cabaña: {selectedShack?.name} - {days} días
              </DialogContentText>
            </Grid>
            <Grid item xs={6}>
              <DialogContentText align="right" style={{ paddingRight: 5 }}>
                Precio por día: ${selectedShack?.price}
              </DialogContentText>
            </Grid>
          </Grid>

          <Grid item container xs={12}>
            <Grid item xs={6}>
              <KeyboardDatePicker
                disableToolbar
                format="yyyy-MM-DD"
                margin="normal"
                inputVariant="outlined"
                label="Fecha inicio"
                value={startDate}
                onChange={handleOnStartDateInputChange}
                style={{ paddingRight: 8 }}
              />
            </Grid>
            <Grid item xs={6}>
              <KeyboardDatePicker
                disableToolbar
                format="yyyy-MM-DD"
                margin="normal"
                inputVariant="outlined"
                label="Fecha fin"
                value={endDate}
                onChange={handleOnEndDateInputChange}
              />
            </Grid>
          </Grid>

          <FormControl fullWidth variant="outlined" style={{ marginTop: 16 }}>
            <InputLabel htmlFor="name">Nombre(s)</InputLabel>
            <OutlinedInput
              value={name}
              onChange={handleOnNameChange}
              id="name"
              labelWidth={90}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined" style={{ marginTop: 16 }}>
            <InputLabel htmlFor="lastname">Apellidos</InputLabel>
            <OutlinedInput
              value={lastname}
              onChange={handleOnLastnameChange}
              id="lastname"
              labelWidth={90}
            />
          </FormControl>

          <Grid item container xs={12} style={{ marginTop: 16 }}>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                style={{ marginTop: 16, paddingRight: 8 }}
              >
                <InputLabel htmlFor="initialPayment">Pago inicial</InputLabel>
                <OutlinedInput
                  id="initialPayment"
                  value={initialPayment}
                  onChange={handleOnInitialPaymentChange}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={90}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                style={{ marginTop: 16 }}
              >
                <InputLabel htmlFor="leftPayment">Pago restante</InputLabel>
                <OutlinedInput
                  value={leftPayment}
                  readOnly={true}
                  id="leftPayment"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={120}
                />
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          style={{ paddingTop: 8, paddingBottom: 16, paddingInline: 25 }}
        >
          <Button onClick={onCancelClick} color="secondary" variant="outlined">
            Cancelar
          </Button>
          <Button
            onClick={handleOnSubmitClick}
            color="primary"
            variant="outlined"
          >
            Reservar
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default ShackUpdateDialog;
