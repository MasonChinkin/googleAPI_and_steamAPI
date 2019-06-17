import {
  combineReducers
} from "redux";

import entities from './entitiesReducer'
import errors from './errorsReducer'

const RootReducer = combineReducers({
  entities,
  errors,
  // ui,
  // session
});

export default RootReducer;