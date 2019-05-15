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
    members = members.map((member, i) => {
      return <MembersListItem member={member} key={i} />
    })
    return (
      <h1>
        <ul className="members-list">
          {members}
        </ul>
      </h1>
    );
  }
}

export default MembersList;
