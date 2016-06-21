import { handleActions } from 'redux-actions';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from './constants';

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
  [SIGNUP_FAILURE]: (state, action) => {
    const { response } = action;
    return {
      ...initialState,
      failureMessage: response,
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
  [LOGIN_USER_FAILURE]: (state, action) => {
    const { response } = action;
    return {
      ...initialState,
      failureMessage: response,
    };
  },
}, initialState);
