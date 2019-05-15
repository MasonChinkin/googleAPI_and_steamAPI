import React, { Component } from 'react';
import MembersListItem from './MembersListItem';

class MembersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.requestMembers()
      .then(() => this.setState({ loaded: true }))
  }

  render() {
    if (this.state.loaded === false) return null;
    let members = this.props.members
    members.map(member => {
      return <MembersListItem member={member} />
    })
    return (
      <div>
        {members}
      </div>
    );
  }
}

export default MembersList;
