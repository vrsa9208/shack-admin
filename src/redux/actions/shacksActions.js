import {
  SET_SHACKS_DATA,
  SET_SHACKS_ERROR,
  SET_SHACKS_IS_LOADING,
} from "./actionTypes";
import { getServerClient } from "../../utils/networkUtils";

export const setShacksData = (data) => ({
  type: SET_SHACKS_DATA,
  payload: { data },
});

export const setShacksIsLoading = (isLoading) => ({
  type: SET_SHACKS_IS_LOADING,
  payload: { isLoading },
});

export const setShacksError = (error) => ({
  type: SET_SHACKS_ERROR,
  payload: { error },
});

export const fetchShacks = () => (dispatch) => {
  dispatch(setShacksIsLoading(true));

  getServerClient()
    .get("shacks.json")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => dispatch(setShacksError(error)))
    .then(() => dispatch(setShacksIsLoading(true)));
};
