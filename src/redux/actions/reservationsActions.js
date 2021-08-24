import {
  SET_RESERVATIONS_DATA,
  SET_RESERVATIONS_ERROR,
  SET_RESERVATIONS_IS_LOADING,
} from "./actionTypes";
import { getServerClient } from "../../utils/networkUtils";
import { mapCollectionResponse } from "../../utils/firebaseUtils";

export const setReservationsData = (data) => ({
  type: SET_RESERVATIONS_DATA,
  payload: { data },
});

export const setReservationsIsLoading = (isLoading) => ({
  type: SET_RESERVATIONS_IS_LOADING,
  payload: { isLoading },
});

export const setReservationsError = (error) => ({
  type: SET_RESERVATIONS_ERROR,
  payload: { error },
});

export const fetchReservations = () => (dispatch) => {
  dispatch(setReservationsIsLoading(true));

  getServerClient()
    .get("reservations.json")
    .then((response) => {
      let data = mapCollectionResponse(response.data);
      dispatch(setReservationsData(data));
    })
    .catch((error) => dispatch(setReservationsError(error)))
    .then(() => dispatch(setReservationsIsLoading(false)));
};

export const postReservation = (reservation) => (dispatch) => {
  dispatch(setReservationsIsLoading(true));

  getServerClient()
    .post("reservations.json", reservation)
    .then((response) => {
      dispatch(fetchReservations());
    })
    .catch((error) => dispatch(setReservationsError(error)))
    .then(() => dispatch(setReservationsIsLoading(false)));
};
