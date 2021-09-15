import { combineReducers } from "redux";
import namesData from "./nameReducer";

const appReducer = combineReducers({
  namesData,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}
