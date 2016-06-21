import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';


import { navigation } from './modules/navModule';

import createStore from './createStore';
const store = createStore();

class Main extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(store, { storage: AsyncStorage, whitelist: ['auth'] }, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (!this.state.rehydrated) {
      return <View />;
    }
    return (
      <Provider store={store}>
        <navigation.Component />
      </Provider>
    );
  }
}

export default Main;
