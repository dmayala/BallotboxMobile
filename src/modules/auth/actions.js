import Config from 'react-native-config';
import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS,
         LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from './constants';
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
        if (data.status) { throw new Error(data.message); }
        const { username, token } = data;
        // cookie.save('bearer', data.token)
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
  };
};

export const loginUser = (details) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}//auth/login`, {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(details),
    })
      .then(response => response.json())
      .then((data) => {
        if (data.status) { throw new Error(data.message); }
        const { username, token } = data;
        // cookie.save('bearer', data.token)
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
  };
};
