import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { poll } from './modules';

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    [poll.NAME]: poll.reducer,
  });

  return createStore(rootReducer, data, middleware);
};
