import * as MembersUtils from '../utils/members'

export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS'
export const RECEIVE_MEMBERS_ERROR = 'RECEIVE_MEMBERS_ERROR'

const receiveMembers = payload => ({
  type: RECEIVE_MEMBERS,
  payload
})

const receiveMembersError = payload => ({
  type: RECEIVE_MEMBERS_ERROR,
  payload
})

export const requestMembers = () => dispatch => {
  return MembersUtils.fetchMembers()
    .then(members => dispatch(receiveMembers(members)))
    .catch(err => dispatch(receiveMembersError(err)))
}