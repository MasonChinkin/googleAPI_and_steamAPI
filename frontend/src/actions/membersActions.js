import * as MembersUtils from '../utils/members'

export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS'

const receiveMembers = payload => ({
  type: RECEIVE_MEMBERS,
  payload
})

export const requestMembers = () => dispatch => {
  return MembersUtils.fetchMembers()
    .then(members => dispatch(receiveMembers(members)))
}