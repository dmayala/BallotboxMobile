import { handleActions } from 'redux-actions';
import { REQUEST_POLL } from './constants';

const initialState = {
  question: '',
  choices: [],
};

export default handleActions({
  [REQUEST_POLL]: (state, action) => {
    return {
      question: 'How far away is the moon from Earth?',
      choices: [
        { name: '389,200 mi' },
        { name: '238,900 mi' },
        { name: '504,100 mi' },
        { name: '4472,200 mi' },
      ],
    };
  },
}, initialState);
