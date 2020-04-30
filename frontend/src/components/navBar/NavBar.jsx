import React from 'react';
import NavButton from './NavButton';

const NavBar = props => {

  const handleLogoClick = event => props.history.push(`/Home`)

  return (
    <header>
      <img onClick={handleLogoClick} src="./sigtac-logo.png" alt="sigtac logo" />
      <div>
        <a className="discord nav-button" href="https://chat.sigtac.cool/" target="_blank" rel="noopener noreferrer">Discord</a>
        <NavButton link={"Home"} />
        <NavButton link={"Roster"} />
        <NavButton link={"Events"} />
        {/* <NavButton link={"Join"} /> */}
      </div>
    </header>
  );
}

export default NavBar;
