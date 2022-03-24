
import {combineReducers} from "redux";
import {prayerReducer} from "./prayerReducer";

export const rootReducer = combineReducers({
  prayer : prayerReducer
})
