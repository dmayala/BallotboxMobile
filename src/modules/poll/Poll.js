import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from './actions';

import PollRow from '../../components/PollRow/Component';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
  question: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 155,
  },
  questionText: {
    fontSize: 20,
    lineHeight: 33,
    width: 272,
    fontWeight: '500',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#EC8026',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

class Poll extends Component {

  constructor(props, context) {
    super(props, context);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      active: null,
      dataSource: this.ds.cloneWithRows(props.choices),
    };
  }

  componentWillMount() {
    this.props.fetchPoll();
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.choices);
    this.setState({ ...this.state, dataSource });
  }

  renderRow(choice, sectionId, rowId, highlightRow) {
    const active = this.state.active === Number(rowId);
    const charCode = active ? 10003 : 65 + Number(rowId);
    return (
      <PollRow
        active={active}
        charCode={charCode}
        choice={choice}
        onPress={() => this.setState({
          ...this.state,
          dataSource: this.ds.cloneWithRows(this.props.choices),
          active: Number(rowId) })
        }
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <Text style={styles.questionText}>
          {this.props.question}
          </Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections
          renderRow={this.renderRow.bind(this)}
        />
        <TouchableHighlight
          onPress={() => console.log('pressed')}
          style={styles.nextButton}
          underlayColor="#71C9E4"
        >
          <Text style={styles.nextButtonText}>Next Question</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Poll.displayName = 'Poll';

Poll.propTypes = {
  choices: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  })).isRequired,
  fetchPoll: React.PropTypes.func.isRequired,
  question: React.PropTypes.string.isRequired,
  vote: React.PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    question: state.poll.question,
    choices: state.poll.choices,
  }),
  (dispatch) => ({
    fetchPoll: () => dispatch(actions.fetchPoll()),
    vote: () => dispatch(actions.vote()),
  })
)(Poll);
