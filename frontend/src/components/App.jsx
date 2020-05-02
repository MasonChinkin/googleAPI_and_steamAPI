import React from 'react';
import '../styles/app.scss'
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './navBar/NavBar';
import Footer from './footer/Footer';
import MembersListContainer from './members/MemberListContainer';
import Home from './home/Home';
import Events from './events/Events';

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Roster" component={MembersListContainer} />
        <Route path="/Events" component={Events} />
        <Redirect to="/Home" />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
