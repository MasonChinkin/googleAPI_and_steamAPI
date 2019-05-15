import {
  RECEIVE_MEMBERS
} from "../actions/membersActions";

const MembersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERS:
      return action.payload.data
    default:
      return state;
  }
}

export default MembersReducer;