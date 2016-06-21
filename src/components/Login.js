import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  authInput: {
    borderBottomColor: '#4CA8D3',
    borderBottomWidth: 1,
    width: 293,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authInputIcon: {
    fontSize: 20,
    width: 20,
    color: '#fff',
  },
  authInputText: {
    color: '#fff',
    fontFamily: 'HelveticaNeue',
    height: 30,
    marginLeft: 15,
    width: 265,
  },
  brand: {
    marginTop: 125,
    alignItems: 'center',
  },
  brandBaseText: {
    fontFamily: 'HelveticaNeue',
    color: '#ffffff',
  },
  brandHead: {
    fontSize: 60,
  },
  brandSub: {
    fontSize: 14,
    fontWeight: '200',
  },
  container: {
    backgroundColor: '#4393B9',
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  footerText: {
    fontWeight: '200',
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#4CA8D3',
    borderRadius: 8,
    borderWidth: 1,
    height: 35,
    justifyContent: 'center',
    marginTop: 25,
    width: 134,
  },
  loginBtnText: {
    color: '#4CA8D3',
    fontSize: 18,
  },
  validation: {
    color: 'white',
    marginBottom: 10,
  },
});

class Login extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      username: '',
      password: '',
      isNewUser: false,
    };
  }

  _submit() {
    const { email, username, password } = this.state;
    if (this.state.isNewUser) {
      this.props.signupUser({ email, username, password, confirmPassword: password });
    } else {
      this.props.loginUser({ username, password });
    }
  }

  render() {
    const { isNewUser } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.brand}>
          <Text style={[styles.brandBaseText, styles.brandHead]}>
            Ballotbox
          </Text>
          <Text style={[styles.brandBaseText, styles.brandSub]}>
            create custom polls with live results
          </Text>
        </View>
        <View style={{ marginTop: 80, alignItems: 'center' }}>
          <Text style={styles.validation}>{this.props.failureMessage}</Text>
          {isNewUser ?
            (<View style={[styles.authInput, { marginBottom: 20 }]}>
              <Icon
                name="envelope"
                style={styles.authInputIcon}
              />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(email) => this.setState({ ...this.state, email })}
                placeholder="Email"
                placeholderTextColor="#D3E0E7"
                style={styles.authInputText}
              />
            </View>) : null}
          <View style={styles.authInput}>
            <Icon
              name="user"
              style={styles.authInputIcon}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(username) => this.setState({ ...this.state, username })}
              placeholder="Username"
              placeholderTextColor="#D3E0E7"
              style={styles.authInputText}
            />
          </View>
          <View style={[styles.authInput, { marginTop: 20 }]}>
            <Icon
              name="unlock-alt"
              style={styles.authInputIcon}
            />
            <TextInput
              onChangeText={(password) => this.setState({ ...this.state, password })}
              placeholder="Password"
              placeholderTextColor="#D3E0E7"
              secureTextEntry
              style={styles.authInputText}
            />
          </View>
        </View>
        <TouchableHighlight
          onPress={this._submit.bind(this)}
          style={styles.loginBtn}
          underlayColor="#71C9E4"
        >
          <Text style={[styles.brandBaseText, styles.loginBtnText]}>
            {isNewUser ? 'Sign Up' : 'Log In'}
          </Text>
        </TouchableHighlight>
        <View style={styles.footer}>
          <Text style={[styles.brandBaseText, styles.footerText]}>
            {isNewUser ? 'Already' : 'Don\’t'} have an account?{' '}
            <Text
              onPress={() => this.setState({ ...this.state, isNewUser: !isNewUser })}
              style={{ textDecorationLine: 'underline' }}
            >
              {isNewUser ? 'Log In' : 'Sign Up'}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  failureMessage: React.PropTypes.string,
  loginUser: React.PropTypes.func.isRequired,
  signupUser: React.PropTypes.func.isRequired,
};

export default Login;
