import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import Render from './Render';

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
    height: 100,
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
    backgroundColor: '#71C9E4',
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
    return Render.bind(this)(styles);
  }
}

PollRow.propTypes = {
  active: React.PropTypes.bool.isRequired,
  charCode: React.PropTypes.number.isRequired,
  choice: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  }),
  onPress: React.PropTypes.func.isRequired,
};

export default PollRow;
