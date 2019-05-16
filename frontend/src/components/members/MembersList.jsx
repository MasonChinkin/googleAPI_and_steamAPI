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
    if (this.state.loaded === false) {
      roster = <section className="spinner-parent">
        <Loader
          type="Triangle"
          color="lightGrey"
          height="300"
          width="300"
        />
      </section>
    } else {
      let members = this.props.members
      members = members.map((member, i) => {
        return <MembersListItem member={member} key={i} />
      })

      roster = <section>
        <ul className="members-list">
          {members}
        </ul>
      </section>
    }

    return (
      <main>
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
