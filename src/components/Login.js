import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
});

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="#71C9E4"
        >
          <Text>Next Question</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Login.propTypes = {};

export default Login;
