import {
  combineReducers
} from "redux";

import entities from './entitiesReducer'

const RootReducer = combineReducers({
  entities,
  // errors,
  // ui,
  // session
});

export default RootReducer;