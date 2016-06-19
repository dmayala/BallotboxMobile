import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { push } from '../modules/navigation/actions';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
});

class Login extends Component {
  _navigate() {
    this.props.push({ key: this.props.redirectTo, title: 'placeholder' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this._navigate.bind(this)}
          underlayColor="#71C9E4"
        >
          <Text>Next Question</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Login.propTypes = {};

export default connect(
  null,
  (dispatch) => ({
    push: (route) => dispatch(push(route)),
  })
)(Login);

