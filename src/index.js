import React, { Component } from 'react';
import { AsyncStorage, Linking, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import { navigation } from './modules/navModule';
import { poll } from './modules';

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
    const parts = e.url.split(/:?\//);
    const module = parts[2];

    if (poll.NAME === module) {
      const id = parts[3];
      store.dispatch(poll.actions.fetchPoll(id));
      store.dispatch(navigation.actions.popToTop());
    }
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
