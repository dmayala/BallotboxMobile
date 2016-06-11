// we are using namespaceing to prevent module's action type collision
// name of this module
export const NAME = 'poll';

// action types
export const REQUEST_POLL = `${NAME}/REQUEST_POLL`;
export const RECEIVE_POLL = `${NAME}/RECEIVE_POLL`;
export const VOTE = `${NAME}/VOTE`;

