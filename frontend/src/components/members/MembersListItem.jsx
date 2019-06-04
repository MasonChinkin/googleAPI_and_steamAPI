import React, { Component } from 'react';

class MembersListItem extends Component {
  render() {
    const avatar = this.props.member.avatar ?
      this.props.member.avatar.medium :
      'http://chittagongit.com/images/profile-png-icon/profile-png-icon-13.jpg';
    return (
      <div className="member-list-item">
        <img src={avatar} alt="avatar" />
        <li>
          {this.props.member.name}
        </li>
      </div>
    );
  }
}

export default MembersListItem;
