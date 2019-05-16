import React from 'react';
import NavButton from './NavButton';

const NavBar = props => {

  const handleClick = (e) => props.history.push(`/Home`)

  return (
    <header>
      <img onClick={handleClick} src="./SigTac5.png" alt="sigtac logo" />
      <div>
        <NavButton link={"Home"} />
        <NavButton link={"Roster"} />
        <NavButton link={"Events"} />
        <NavButton link={"Join"} />
      </div>
    </header>
  );
}

export default NavBar;
