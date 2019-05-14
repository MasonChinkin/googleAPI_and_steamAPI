import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store';

document.addEventListener("DOMContentLoaded", () => {

  let store = configureStore()

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
})
