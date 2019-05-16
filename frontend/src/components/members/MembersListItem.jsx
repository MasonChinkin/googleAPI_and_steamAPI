import React, { Component } from 'react';

class MembersListItem extends Component {
  render() {
    let username = this.props.member[0]
    return (
      <li className="members-list-item">
        {username}
      </li>
    );
  }
}

export default MembersListItem;
