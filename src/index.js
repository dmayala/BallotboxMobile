import React, { Component } from 'react';
import { AsyncStorage, Linking, View } from 'react-native';
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
    Linking.addEventListener('url', this.handleDeepLink);
    persistStore(store, { storage: AsyncStorage, whitelist: ['auth'] }, () => {
      this.setState({ rehydrated: true });
    });
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleDeepLink);
  }

  handleDeepLink(e) {
    console.log('handling it!');
    console.log(e.url);
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
