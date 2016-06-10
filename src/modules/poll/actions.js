import { REQUEST_POLL, VOTE } from './constants';

export const fetchPoll = () => {
  // const request = axios.get(`/api/polls/${pollId}`);

  return {
    type: REQUEST_POLL,
    payload: {},
  };
};

export const vote = () => {
  // const request = axios.get(`/api/polls/${pollId}`);

  return {
    type: VOTE,
    payload: {},
  };
};
