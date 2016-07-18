import React, { Component, PropTypes } from 'react';
import {
  BackAndroid,
  NavigationExperimental,
  View,
} from 'react-native';
import * as modules from '../index';
import Login from '../../components/Login';
import Settings from '../../components/Settings/Component';
import NavBar from '../../components/NavBar/Component';

const { CardStack: NavigationCardStack } = NavigationExperimental;

export default class NavigationRoot extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleNavigate = this._handleNavigate.bind(this);
    this._handleBackAction = this._handleBackAction.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction);
  }

  _renderScene({ scene }) {
    const { route } = scene;
    const module = modules[route.key];
    if (route.key === 'settings') {
      return (
        <View style={{ flex: 1 }}>
          <NavBar
            _handleNavigate={this._handleNavigate.bind(this)}
            leftButton={Settings.leftButton}
            rightButton={Settings.rightButton}
            title={Settings.title}
          />
          <Settings
            _goBack={this._handleBackAction.bind(this)}
            _handleLogout={this.props.logOutUser}
          />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <NavBar
          _handleNavigate={this._handleNavigate.bind(this)}
          leftButton={module.Component.leftButton}
          rightButton={module.Component.rightButton}
          title={module.Component.title}
        />
        <module.Component _handleNavigate={this._handleNavigate.bind(this)} />
      </View>
    );
  }

  _handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  _handleNavigate(action) {
    switch (action && action.type) {
    case 'push':
      this.props.pushRoute(action.payload);
      return true;
    case 'replace':
      this.props.replaceRoute(action.payload);
      return true;
    case 'resetTo':
      this.props.resetToRoute(action.payload);
      return true;
    case 'back':
    case 'pop':
      return this._handleBackAction();
    case 'popToTop':
      this.props.popToTopRoute();
      return true;
    default:
      return false;
    }
  }

  render() {
    const { authPending, failureMessage, isAuthenticated } = this.props.auth;
    if (!isAuthenticated) {
      return (
        <Login
          authPending={authPending}
          failureMessage={failureMessage}
          loginUser={this.props.loginUser}
          signupUser={this.props.signupUser}
        />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <NavigationCardStack
          direction="horizontal"
          navigationState={this.props.navigation}
          onNavigate={this._handleNavigate}
          renderScene={this._renderScene}
        />
      </View>
    );
  }
}

NavigationRoot.propTypes = {
  auth: PropTypes.shape({
    authPending: PropTypes.bool.isRequired,
    failureMessage: PropTypes.string,
    isAuthenticated: PropTypes.bool.isRequired,
  }),
  logOutUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    index: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    routes: PropTypes.array.isRequired,
  }),
  popRoute: PropTypes.func.isRequired,
  popToTopRoute: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired,
  replaceRoute: PropTypes.func.isRequired,
  resetToRoute: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
};
