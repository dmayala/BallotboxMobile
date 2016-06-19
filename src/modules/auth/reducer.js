import { handleActions } from 'redux-actions';
import { SIGNUP_SUCCESS, LOGIN_USER_SUCCESS } from './constants';

const initialState = {
  username: null,
  token: null,
  isAuthenticated: false,
  failureMessage: '',
};

export default handleActions({
  [SIGNUP_SUCCESS]: (state, action) => {
    const { response } = action;
    return {
      ...state,
      username: response.username,
      token: response.token,
      isAuthenticated: true,
    };
  },
  [LOGIN_USER_SUCCESS]: (state, action) => {
    const { response } = action;
    return {
      ...state,
      username: response.username,
      token: response.token,
      isAuthenticated: true,
    };
  },
}, initialState);
