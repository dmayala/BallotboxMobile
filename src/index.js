import React from 'react';
import { Provider } from 'react-redux';

import { poll } from './modules';

import createStore from './createStore';

const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <poll.Poll />
    </Provider>
  );
};

export default Main;
