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
    this.props.requestMembers()
      .then(() => this.setState({ loaded: true }))
  }

  render() {
    let roster;
    let members = this.props.members
    if (members.length === 0 && this.state.loaded === false) {
      roster = <section className="spinner-parent">
        <Loader
          type="Triangle"
          color="black"
          height="300"
          width="300"
        />
      </section>
    } else {
      let leadership = []
      let otherMembers = []
      members.forEach((member, i) => {
        let tier = member.tier;
        (tier.includes('T3')) ?
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
          <h2>We are a democratic organization with blah blah blah</h2>
        </section>
        {roster}
      </main>
    );
  }
}

export default MembersList;
