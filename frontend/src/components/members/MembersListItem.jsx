import React, { Component } from 'react';

class MembersListItem extends Component {
  render() {
    let { username, steam_id } = this.props.member
    return (
      <div>
        <p>{username}</p>
        <p>{steam_id}</p>
      </div>
    );
  }
}

export default MembersListItem;
