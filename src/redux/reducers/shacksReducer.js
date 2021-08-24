import {
  RESET,
  SET_SHACKS_DATA,
  SET_SHACKS_ERROR,
  SET_SHACKS_IS_LOADING,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHACKS_DATA:
    case SET_SHACKS_IS_LOADING:
    case SET_SHACKS_ERROR:
      return { ...state, ...payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
