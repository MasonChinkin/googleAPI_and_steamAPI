import React from 'react';
import '../styles/app.scss'
import { Route, Redirect } from 'react-router-dom';
import NavBar from './navBar/NavBar';
import Footer from './footer/Footer';
import MembersListContainer from './members/MemberListContainer';
import Home from './home/Home';
import Events from './events/Events';
import Join from './join/Join';

function App() {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/Home" />} />
      <Route path="/" component={NavBar} />
      <Route path="/Home" component={Home} />
      <Route path="/Roster" component={MembersListContainer} />
      <Route path="/Events" component={Events} />
      <Route path="/Join" component={Join} />
      <Route path="/" component={Footer} />
    </>
  );
}

export default App;
