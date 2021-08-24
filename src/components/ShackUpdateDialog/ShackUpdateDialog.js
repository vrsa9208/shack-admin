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

const ShackUpdateDialog = ({ onCancelClick, selectedShack, calendarEvent }) => {
  const [startDate, setStartDate] = useState(
    calendarEvent?.start ?? new Date()
  );
  const [endDate, setEndDate] = useState(calendarEvent?.end ?? new Date());

  const handleOnStartDateInputChange = (date) => {
    setStartDate(date._d);
  };

  const handleOnEndDateInputChange = (date) => {
    setEndDate(date._d);
  };

  console.log("calendarEvent :>> ", calendarEvent);
  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reservar cabaña</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, completa el siguiente formulario para reservar la cabaña
          </DialogContentText>
          <FormControl fullWidth variant="outlined" style={{ marginTop: 16 }}>
            <InputLabel htmlFor="shack-name">Cabaña</InputLabel>
            <OutlinedInput
              value={selectedShack?.name}
              id="shack-name"
              labelWidth={90}
            />
          </FormControl>
          <Grid item container xs={12} style={{ marginTop: 16 }}>
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
        </DialogContent>
        <DialogActions
          style={{ paddingTop: 8, paddingBottom: 16, paddingInline: 25 }}
        >
          <Button onClick={onCancelClick} color="secondary" variant="outlined">
            Cancelar
          </Button>
          <Button color="primary" variant="outlined">
            Reservar
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default ShackUpdateDialog;
