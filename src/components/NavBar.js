import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import NavigationBar from 'react-native-navbar';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#4393B9',
  },
});

const statusBar = {
  tintColor: '#4393B9',
};

export default class NavBar extends Component {
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
            title={{ title: this.props.title, tintColor: '#fff' }}
            leftButton={actualLeftButton}
            rightButton={actualRightButton}
            statusBar={statusBar}
            style={styles.navBar}
        />
    );
  }
}
