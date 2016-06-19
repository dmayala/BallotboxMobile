import Config from 'react-native-config';
import { REQUEST_POLL, REQUEST_POLL_FAIL, RECEIVE_POLL, VOTE } from './constants';
const baseUrl = Config.API_URL;

export const fetchPoll = () => {
  return (dispatch, getState) => {
    const bearer = getState().auth.token;
    fetch(`${baseUrl}/api/polls/random`, {
      headers: {
        'Authorization': `Bearer ${bearer}`,
      },
    })
      .then(response => {
        if (!response.ok) { throw Error(response.statusText); }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: RECEIVE_POLL,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({ type: REQUEST_POLL_FAIL });
      });

    dispatch({
      type: REQUEST_POLL,
      payload: {},
    });
  };
};

export const vote = (pollId, choiceId) => {
  return (dispatch, getState) => {
    const bearer = getState().auth.token;
    fetch(`${baseUrl}/api/polls/${pollId}/choices/${choiceId}`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${bearer}`,
      },
    }).then(response => { dispatch({ type: VOTE }); });
  };
};
