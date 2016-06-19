import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: 40,
    flex: 1,
  },
});

class Login extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(username) => this.setState({ ...this.state, username })}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TextInput
          onChangeText={(password) => this.setState({ ...this.state, password })}
          secureTextEntry
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TouchableHighlight
          onPress={() => { this.props.loginUser(this.state); }}
          underlayColor="#71C9E4"
        >
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Login.propTypes = {};

export default Login;
