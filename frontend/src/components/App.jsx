import React from 'react';
import '../styles/app.scss'
import { Route } from 'react-router-dom';
import NavBar from './navBar/NavBar';
import Footer from './footer/Footer';
import MembersListContainer from './members/MemberListContainer';

function App() {
  return (
    <>
      <Route path="/" component={NavBar} />
      <Route path="/" component={MembersListContainer} />
      <Route path="/" component={Footer} />
    </>
  );
}

export default App;
