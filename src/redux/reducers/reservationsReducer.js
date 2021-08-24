import {
  RESET,
  SET_RESERVATIONS_DATA,
  SET_RESERVATIONS_ERROR,
  SET_RESERVATIONS_IS_LOADING,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RESERVATIONS_DATA:
    case SET_RESERVATIONS_IS_LOADING:
    case SET_RESERVATIONS_ERROR:
      return { ...state, ...payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
