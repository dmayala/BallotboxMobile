import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import Render from './Render';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  signOut: {
    borderColor: '#c7c8ca',
    backgroundColor: '#fff',
    borderWidth: 1,
    color: 'red',
    padding: 10,
    textAlign: 'center',
  },
});

class Settings extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return Render.bind(this)(styles);
  }
}

Settings.title = Settings.displayName = 'Settings';

Settings.rightButton = {
  title: 'Close',
  navigate: {
    type: 'pop',
  },
};

Settings.propTypes = {
  _handleLogout: PropTypes.func.isRequired,
};

export default Settings;
