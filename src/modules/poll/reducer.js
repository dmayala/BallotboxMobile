import { handleActions } from 'redux-actions';
import { RECEIVE_POLL } from './constants';

const initialState = {
  question: '',
  choices: [],
};

export default handleActions({
  [RECEIVE_POLL]: (state, action) => {
    const { name, choices } = action.payload;
    return {
      question: name,
      choices,
    };
  },
}, initialState);
