import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

class Settings extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props._goBack}
          underlayColor="#71C9E4"
        >
          <Text>
            Hello world!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Settings.propTypes = {
};

export default Settings;
