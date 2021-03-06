import Config from 'react-native-config';
import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS,
         LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
         LOGOUT_USER, LOGOUT_USER_SUCCESS,
         SESSION_EXPIRED } from './constants';
const baseUrl = Config.API_URL;

export const signupUser = (details) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/auth/register`, {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(details),
    })
      .then(response => response.json())
      .then((data) => {
        if (data.modelState) {
          throw new Error(data.modelState[0].errorMessage);
        }
        const { username, token } = data;
        dispatch({
          type: SIGNUP_SUCCESS,
          response: { username, token },
        });
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_FAILURE,
          response: error.message,
        });
      });
    dispatch({ type: SIGNUP });
  };
};

export const loginUser = (details) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/auth/login`, {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(details),
    })
      .then(response => response.json())
      .then((data) => {
        if (data.modelState) {
          throw new Error('Invalid username or password');
        }
        const { username, token } = data;
        dispatch({
          type: LOGIN_USER_SUCCESS,
          response: { username, token },
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_USER_FAILURE,
          response: error.message,
        });
      });
    dispatch({ type: LOGIN_USER });
  };
};

export const logOutUser = () => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/auth/logout`, { method: 'post' })
      .then(response => response.json())
      .then(() => {
        dispatch({ type: LOGOUT_USER_SUCCESS });
      });
    dispatch({ type: LOGOUT_USER });
  };
};

export const sessionExpired = () => {
  return {
    type: SESSION_EXPIRED,
    response: 'Your session has expired. Please log in again.',
  };
};
