import { connect } from 'react-redux';
import { requestMembers } from '../../actions/membersActions';
import MembersList from './MembersList';

const mSP = ({ entities, errors }) => ({
  members: Object.values(entities.members),
  membersError: errors.membersError
})

const mDP = dispatch => ({
  requestMembers: () => dispatch(requestMembers())
})

const MembersListContainer = connect(mSP, mDP)(MembersList)

export default MembersListContainer