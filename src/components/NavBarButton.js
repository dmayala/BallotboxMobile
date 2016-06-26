import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = {
  navBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5,
  },
};

class NavbarButton extends Component {
  render() {
    const { style, tintColor, margin, title, handler } = this.props;

    return (
      <TouchableOpacity
        onPress={handler}
        style={styles.navBarButton}
      >
        <View style={style}>
          <Text style={[styles.navBarButtonText, { color: tintColor }]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

NavbarButton.propTypes = {
  handler: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  tintColor: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

NavbarButton.defaultProps = {
  style: {},
  title: '',
  tintColor: '#0076FF',
  onPress: () => ({}),
};

export default NavbarButton;
