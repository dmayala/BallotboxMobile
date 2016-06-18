import { NAME } from './constants';
import reducer from './reducer';
import * as actions from './actions';
import NavigationRootContainer from './NavigationRootContainer';


export default {
  NAME,
  reducer,
  Component: NavigationRootContainer,
  actions,
};
