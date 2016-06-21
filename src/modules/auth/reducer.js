import { handleActions } from 'redux-actions';
import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
         LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
         SESSION_EXPIRED } from './constants';

const initialState = {
  username: null,
  token: null,
  isAuthenticated: false,
  failureMessage: '',
  authPending: false,
};

export default handleActions({
  [SIGNUP]: (state, action) => {
    return {
      ...initialState,
      authPending: true,
    };
  },
  [SIGNUP_SUCCESS]: (state, action) => {
    const { response } = action;
    return {
      ...state,
      username: response.username,
      token: response.token,
      authPending: false,
      isAuthenticated: true,
    };
  },
  [SIGNUP_FAILURE]: (state, action) => {
    const { response } = action;
    return {
      ...initialState,
      authPending: false,
      failureMessage: response,
    };
  },
  [LOGIN_USER]: (state, action) => {
    return {
      ...initialState,
      authPending: true,
    };
  },
  [LOGIN_USER_SUCCESS]: (state, action) => {
    const { response } = action;
    return {
      ...state,
      username: response.username,
      token: response.token,
      authPending: false,
      isAuthenticated: true,
    };
  },
  [LOGIN_USER_FAILURE]: (state, action) => {
    const { response } = action;
    return {
      ...initialState,
      authPending: false,
      failureMessage: response,
    };
  },
  [SESSION_EXPIRED]: (state, action) => {
    const { response } = action;
    return {
      ...initialState,
      failureMessage: response,
    };
  },
}, initialState);
