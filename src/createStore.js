import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { auth, poll } from './modules';
import { navigation } from './modules/navModule';

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    [auth.NAME]: auth.reducer,
    [navigation.NAME]: navigation.reducer,
    [poll.NAME]: poll.reducer,
  });

  return createStore(rootReducer, data, middleware);
};
