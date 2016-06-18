import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { navigation } from './modules/navModule';
import { poll } from './modules';

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    [navigation.NAME]: navigation.reducer,
    [poll.NAME]: poll.reducer,
  });

  return createStore(rootReducer, data, middleware);
};
