import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import NavigationBar from 'react-native-navbar';

import NavBarButton from './NavBarButton';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#4393B9',
  },
});

const statusBar = {
  tintColor: '#4393B9',
};

class NavBar extends Component {
  render() {
    const { _handleNavigate, leftButton, rightButton } = this.props;
    let actualLeftButton;
    let actualRightButton;

    if (leftButton && leftButton.isVisible !== false) {
      actualLeftButton = {
        title: leftButton.title,
        handler: leftButton.isDisabled ? () => {} : () => { _handleNavigate(leftButton.navigate); },
        tintColor: leftButton.isDisabled ? 'orange' : '#fff',
      };
    }

    if (rightButton && rightButton.isVisible !== false) {
      actualRightButton = {
        title: rightButton.title,
        handler: rightButton.isDisabled ? () => {} : () => { _handleNavigate(rightButton.navigate); },
        tintColor: rightButton.isDisabled ? 'orange' : '#fff',
      };
    }

    return (
        <NavigationBar
          leftButton={
            <NavBarButton {...actualLeftButton}
              style={{ marginLeft: 8 }}
            />
          }
          rightButton={
            <NavBarButton {...actualRightButton}
              style={{ marginRight: 8 }}
            />
          }
          statusBar={statusBar}
          style={styles.navBar}
          title={{ title: this.props.title, tintColor: '#fff' }}
        />
    );
  }
}

NavBar.propTypes = {
  _handleNavigate: PropTypes.func,
  leftButton: PropTypes.shape({
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    tintColor: PropTypes.string,
  }),
  rightButton: PropTypes.shape({
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    tintColor: PropTypes.string,
  }),
  title: PropTypes.string,
};

export default NavBar;
