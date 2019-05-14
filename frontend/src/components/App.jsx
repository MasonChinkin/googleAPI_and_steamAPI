import React from 'react';
import '../styles/app.scss'
import { Route } from 'react-router-dom';
import NavBar from './navBar/NavBar';
import Footer from './footer/Footer';
import MembersList from './members/MembersList';

function App() {
  return (
    <>
      <Route path="/" component={NavBar} />
      <Route path="/" component={MembersList} />
      <Route path="/" component={Footer} />
    </>
  );
}

export default App;
