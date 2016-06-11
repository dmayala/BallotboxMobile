import Config from 'react-native-config';
import { REQUEST_POLL, RECEIVE_POLL, VOTE } from './constants';
console.log(Config);
const bearer = Config.SECRET;
const baseUrl = Config.API_URL;

export const fetchPoll = () => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/api/polls/1`, {
      headers: {
        'Authorization': `Bearer ${bearer}`,
      },
    })
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: RECEIVE_POLL,
          payload: data,
        });
      });

    dispatch({
      type: REQUEST_POLL,
      payload: {},
    });
  };
};

export const vote = () => {
  return (dispatch, getState) => {
    dispatch({
      type: VOTE,
      payload: {},
    });
  };
};
