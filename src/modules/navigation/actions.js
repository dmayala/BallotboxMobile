import { PUSH_ROUTE, POP_ROUTE } from './constants';

export const push = (route) => {
  return (dispatch, getState) => {
    dispatch({
      type: PUSH_ROUTE,
      route,
    });
  };
};

export const pop = () => {
  return (dispatch, getState) => {
    dispatch({
      type: POP_ROUTE,
    });
  };
};
