import { combineReducers } from "redux";
import shacksReducer from "./shacksReducer";
import reservationsReducer from "./reservationsReducer";

const rootReducer = combineReducers({
  shacks: shacksReducer,
  reservations: reservationsReducer,
});

export default rootReducer;
