import { NAME } from './constants';
import Poll from './Poll';
import reducer from './reducer';
import * as actions from './actions';

export default {
  NAME,
  Component: Poll,
  reducer,
  actions,
};
