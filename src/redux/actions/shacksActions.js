import {
  SET_SHACKS_DATA,
  SET_SHACKS_ERROR,
  SET_SHACKS_IS_LOADING,
} from "./actionTypes";
import { getServerClient } from "../../utils/networkUtils";
import { mapShacksResponse } from "../../utils/shacksUtils";

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
      let data = mapShacksResponse(response.data);
      dispatch(setShacksData(data));
    })
    .catch((error) => dispatch(setShacksError(error)))
    .then(() => dispatch(setShacksIsLoading(true)));
};
