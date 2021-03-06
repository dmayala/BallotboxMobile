import { handleActions } from 'redux-actions';
import {
  PUSH_ROUTE,
  POP_ROUTE,
  POP_TO_TOP,
  REPLACE_ROUTE,
  RESET_TO_ROUTE,
} from './constants';

import { LOGOUT_USER_SUCCESS } from '../auth/constants';

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
    key: 'poll',
  }],
};

export default handleActions({
  [PUSH_ROUTE]: (state, action) => {
    const { index, routes } = state;
    return {
      ...state,
      routes: [
        ...routes,
        action.route,
      ],
      index: index + 1,
    };
  },
  [POP_ROUTE]: (state, action) => {
    const { index, routes } = state;
    return index > 0 ? {
      ...state,
      routes: routes.slice(0, routes.length - 1),
      index: index - 1,
    } : state;
  },
  [POP_TO_TOP]: (state, action) => {
    return initialState;
  },
  [REPLACE_ROUTE]: (state, action) => {
    const routes = state.routes.slice();
    routes[routes.length - 1] = action.route;
    return routes.length > 0 ? {
      ...state,
      routes,
    } : state;
  },
  [RESET_TO_ROUTE]: (state, action) => {
    return {
      ...initialState,
      routes: [action.route],
    };
  },
  [LOGOUT_USER_SUCCESS]: (state, action) => {
    return initialState;
  },
}, initialState);
