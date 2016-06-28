import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  choiceText: {
    marginLeft: 20,
  },
  container: {
    borderBottomWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    height: 92,
    alignItems: 'center',
  },
  circle: {
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#CCC7C7',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 28,
  },
  circleActive: {
    backgroundColor: '#4393B9',
  },
  circleText: {
    fontSize: 20,
    fontWeight: '500',
  },
  circleTextActive: {
    color: '#FFFFFF',
  },
});

class PollRow extends Component {
  render() {
    const { active, charCode, choice, onPress } = this.props;
    return (
      <View style={styles.container}>
          <TouchableHighlight
            onPress={onPress}
            style={[styles.circle, active && styles.circleActive]}
          >
            <Text style={[styles.circleText, active && styles.circleTextActive]}>
              {String.fromCharCode(charCode)}
            </Text>
          </TouchableHighlight>
          <Text style={styles.choiceText}>{choice.name}</Text>
        </View>
    );
  }
}

PollRow.propTypes = {
  active: PropTypes.bool.isRequired,
  charCode: PropTypes.number.isRequired,
  choice: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onPress: PropTypes.func.isRequired,
};

export default PollRow;
