import React, { Component } from 'react';
import MembersListItem from './MembersListItem';
import Loader from 'react-loader-spinner'

class MembersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    if (this.props.members.length > 0) {
      this.setState({ loaded: true })
      return;
    }

    this.props.requestMembers()
      .then(() => this.setState({ loaded: true }))
  }

  render() {
    let roster;
    let { members, membersError } = this.props
    if (this.state.loaded === false) {
      roster = <section className="spinner-parent">
        <Loader
          type="Triangle"
          color="black"
          height="300"
          width="300"
        />
      </section>
    } else if (members.length === 0) {
      roster = <h2 className="error">{membersError.data}</h2>
    } else {
      let leadership = []
      let otherMembers = []
      members.forEach((member, i) => {
        let tier = member.tier;
        (tier.includes('T3') || !tier) ?
          otherMembers.push(< MembersListItem member={member} key={i} />) :
          leadership.push(< MembersListItem member={member} key={i} />)
      })

      roster = <section className="members-list backdrop">
        <div className="leadership">
          <h3>Leadership</h3>
          <ul>
            {leadership}
          </ul>
        </div>

        <div className="other-members">
          <h3>Members</h3>
          <ul>
            {otherMembers}
          </ul>
        </div>

      </section>
    }

    return (
      <main className="roster">
        <section>
          <h1>Sigtac's roster</h1>
        </section>
        {roster}
      </main>
    );
  }
}

export default MembersList;
