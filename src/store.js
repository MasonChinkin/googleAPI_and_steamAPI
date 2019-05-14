import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/rootReducer';

const configureStore = (preloadedState = {}) => {
  let middleware = [thunk];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middleware)
    ));
};

export default configureStore;