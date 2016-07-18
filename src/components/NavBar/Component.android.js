import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StatusBarAndroid from 'react-native-android-statusbar';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#4393B9',
    height: 56,
  },
});

StatusBarAndroid.setHexColor('#357594');

class NavBar extends Component {
  render() {
    const { _handleNavigate, rightButton } = this.props;
    const toolbarActions = [];
    let isBack = false;

    if (rightButton && rightButton.isVisible !== false) {
      const { type } = rightButton.navigate;
      if (type !== 'pop') {
        toolbarActions.push({
          title: rightButton.description || '',
          handler: rightButton.isDisabled ? () => {} : () => { _handleNavigate(rightButton.navigate); },
        });
      } else {
        isBack = true;
      }
    }

    return (
        <Icon.ToolbarAndroid
          actions={toolbarActions}
          navIconName={isBack ? 'arrow-back' : null}
          onActionSelected={(i) => { toolbarActions[i].handler(); }}
          onIconClicked={() => { _handleNavigate(rightButton.navigate); }}
          style={styles.toolbar}
          title={this.props.title}
          titleColor="#FFFFFF"
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
