import React from 'react';
import { withRouter } from 'react-router-dom';

const NavButton = props => {
  let currURL = props.history.location.pathname

  const handleClick = (e) => {
    let target = e.target.innerHTML
    props.history.push(`/${target}`)
  }

  let buttonClass = (props.link === currURL.slice(1)) ? "active-nav-button" : "nav-button"
  return (
    <h2 className={buttonClass} onClick={handleClick}>{props.link}</h2>
  );
}

export default withRouter(NavButton);
