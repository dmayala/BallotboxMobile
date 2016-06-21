import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
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

  const store = createStore(rootReducer, data, compose(
    middleware,
    autoRehydrate())
  );

  return store;
};
