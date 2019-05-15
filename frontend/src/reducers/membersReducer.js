import {
  RECEIVE_MEMBERS
} from "../actions/membersActions";

const MembersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEMBERS:
      let members = action.payload.data
      return members.slice(1) // remove column headers
    default:
      return state;
  }
}

export default MembersReducer;