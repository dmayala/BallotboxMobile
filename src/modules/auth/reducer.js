import { handleActions } from 'redux-actions';
import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
         LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
         LOGOUT_USER_SUCCESS,
         SESSION_EXPIRED } from './constants';
import { REHYDRATE } from 'redux-persist/constants';

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
  [LOGOUT_USER_SUCCESS]: (state, action) => {
    return initialState;
  },
  [SESSION_EXPIRED]: (state, action) => {
    const { response } = action;
    return {
      ...initialState,
      failureMessage: response,
    };
  },
  [REHYDRATE]: (state, action) => {
    const incoming = action.payload.auth;
    if (incoming) {
      return { ...state, ...incoming, authPending: false, failureMessage: '' };
    }
  },
}, initialState);
