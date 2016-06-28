import React from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';

const localStyle = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  signOutButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    borderColor: '#c7c8ca',
    borderWidth: 1,
  },
  signOut: {
    color: 'red',
    textAlign: 'center',
  },
});

export default function render(baseStyle) {
  return (
    <View style={[baseStyle.container, localStyle.container]}>
      <TouchableHighlight
        onPress={this.props._handleLogout}
        style={localStyle.signOutButton}
        underlayColor="#71C9E4"
      >
        <Text style={localStyle.signOut}>Sign Out</Text>
      </TouchableHighlight>
    </View>
  );
}
