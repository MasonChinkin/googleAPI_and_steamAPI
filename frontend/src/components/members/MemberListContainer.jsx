import { connect } from 'react-redux';
import { requestMembers } from '../../actions/membersActions';
import MembersList from './MembersList';

const mSP = ({ entities }) => ({
  members: entities.members
})

const mDP = dispatch => ({
  requestMembers: () => dispatch(requestMembers())
})

const MembersListContainer = connect(mSP, mDP)(MembersList)

export default MembersListContainer