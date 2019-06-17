import {
  RECEIVE_MEMBERS_ERROR
} from "../actions/membersActions";

const ErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERS_ERROR:
      return {
        membersError: action.payload.response
      }
      default:
        return state;
  }
}

export default ErrorsReducer;