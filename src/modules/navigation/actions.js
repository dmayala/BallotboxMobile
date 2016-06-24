import {
  PUSH_ROUTE,
  POP_ROUTE,
  POP_TO_TOP,
  REPLACE_ROUTE,
  RESET_TO_ROUTE,
} from './constants';

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

export const replace = (route) => {
  return (dispatch, getState) => {
    dispatch({
      type: REPLACE_ROUTE,
      route,
    });
  };
};

export const resetTo = (route) => {
  return (dispatch, getState) => {
    dispatch({
      type: RESET_TO_ROUTE,
      route,
    });
  };
};

export const popToTop = () => {
  return (dispatch, getState) => {
    dispatch({
      type: POP_TO_TOP,
    });
  };
};
