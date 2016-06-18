import React from 'react';
import { Provider } from 'react-redux';

import { navigation } from './modules/navModule';

import createStore from './createStore';

const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <navigation.Component />
    </Provider>
  );
};

export default Main;
