import React, { Component } from 'react';

class MembersListItem extends Component {
  render() {
    let username = this.props.member[0]
    let steam_id = this.props.member[1]
    return (
      <li className="members-list-item">
        <p>{username}</p>
        <p>{steam_id}</p>
      </li>
    );
  }
}

export default MembersListItem;
