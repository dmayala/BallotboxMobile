import { handleActions } from 'redux-actions';
import { RECEIVE_POLL, REQUEST_POLL_FAIL, VOTE } from './constants';

const initialState = {
  pollId: null,
  question: '',
  choices: [],
  voted: false,
};

export default handleActions({
  [RECEIVE_POLL]: (state, action) => {
    const { id, name, choices } = action.payload;
    return {
      pollId: id,
      question: name,
      choices,
      voted: false,
    };
  },
  [REQUEST_POLL_FAIL]: (state, action) => {
    return initialState;
  },
  [VOTE]: (state, action) => {
    return { ...state, voted: true };
  },
}, initialState);
