import { combineReducers } from "redux";
import shacksReducer from "./shacksReducer";

const rootReducer = combineReducers({
  shacks: shacksReducer,
});

export default rootReducer;
