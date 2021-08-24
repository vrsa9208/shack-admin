import React from "react";
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

const ShackUpdateDialog = () => {
  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <Dialog open={true} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reservar cabaña</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, completa el siguiente formulario para reservar la cabaña
          </DialogContentText>
          <FormControl fullWidth variant="outlined" style={{ marginTop: 16 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Cabaña</InputLabel>
            <OutlinedInput
              value="Mestiza"
              id="outlined-adornment-amount"
              labelWidth={90}
            />
          </FormControl>
          <Grid container xs={12} style={{ marginTop: 16 }}>
            <Grid item xs={6}>
              <KeyboardDatePicker
                disableToolbar
                format="yyyy-MM-DD"
                margin="normal"
                inputVariant="outlined"
                id="date-picker-inline"
                label="Fecha inicio"
                onChange={(event) => {
                  console.log(event);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                style={{ paddingRight: 8 }}
              />
            </Grid>
            <Grid item xs={6}>
              <KeyboardDatePicker
                disableToolbar
                format="yyyy-MM-DD"
                margin="normal"
                inputVariant="outlined"
                id="date-picker-inline"
                label="Fecha fin"
                onChange={(event) => {
                  console.log(event);
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                style={{ paddingRight: 8 }}
              />
            </Grid>
          </Grid>
          <FormControl fullWidth variant="outlined" style={{ marginTop: 16 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Nombre(s)
            </InputLabel>
            <OutlinedInput id="outlined-adornment-amount" labelWidth={90} />
          </FormControl>

          <FormControl fullWidth variant="outlined" style={{ marginTop: 16 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Apellidos
            </InputLabel>
            <OutlinedInput id="outlined-adornment-amount" labelWidth={90} />
          </FormControl>

          <Grid container xs={12} style={{ marginTop: 16 }}>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                style={{ marginTop: 16, paddingRight: 8 }}
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Pago inicial
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
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
                <InputLabel htmlFor="outlined-adornment-amount">
                  Pago restante
                </InputLabel>
                <OutlinedInput
                  value={1500}
                  readOnly={true}
                  id="outlined-adornment-amount"
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
          <Button color="secondary" variant="outlined">
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
