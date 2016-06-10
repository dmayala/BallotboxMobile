import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const localStyle = StyleSheet.create({
  container: {},
});

export default function render(baseStyle) {
  const { active, charCode, choice, onPress } = this.props;
  return (
    <View style={[baseStyle.container, localStyle.container]}>
        <TouchableHighlight
          onPress={onPress}
          style={[baseStyle.circle, active && baseStyle.circleActive]}
        >
          <Text style={[baseStyle.circleText, active && baseStyle.circleTextActive]}>
            {String.fromCharCode(charCode)}
          </Text>
        </TouchableHighlight>
        <Text style={baseStyle.choiceText}>{choice.name}</Text>
      </View>
  );
}
