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
    backgroundColor: '#ffffff',
    paddingTop: 40,
    flex: 1,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyHeading: {
    fontSize: 20,
    lineHeight: 33,
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
    backgroundColor: 'rgba(236, 128, 38, 0.3)',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonActive: {
    backgroundColor: 'rgba(236, 128, 38, 1)',
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
    if (nextProps.voted) {
      return this.props.fetchPoll();
    }
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.choices);
    this.setState({ ...this.state, dataSource });
  }

  renderRow(choice, sectionId, rowId, highlightRow) {
    const active = this.state.active === Number(choice.id);
    const charCode = active ? 10003 : 65 + Number(rowId);
    return (
      <PollRow
        active={active}
        charCode={charCode}
        choice={choice}
        onPress={() => this.setState({
          ...this.state,
          dataSource: this.ds.cloneWithRows(this.props.choices),
          active: Number(choice.id) })
        }
      />
    );
  }

  _renderEmpty() {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyHeading}>
          There are no more polls to answer. :(
        </Text>
        <Text>
          Check again later!
        </Text>
      </View>
    );
  }

  _renderPoll() {
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
          disabled={!this.state.active}
          onPress={this.props.vote.bind(this, this.props.pollId, this.state.active)}
          style={[styles.nextButton, this.state.active && styles.nextButtonActive]}
          underlayColor="#71C9E4"
        >
          <Text style={styles.nextButtonText}>Next Question</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return !this.props.empty ? this._renderPoll() : this._renderEmpty();
  }
}

Poll.displayName = 'Poll';

Poll.propTypes = {
  choices: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
  })).isRequired,
  empty: React.PropTypes.bool.isRequired,
  fetchPoll: React.PropTypes.func.isRequired,
  pollId: React.PropTypes.number,
  question: React.PropTypes.string.isRequired,
  vote: React.PropTypes.func.isRequired,
  voted: React.PropTypes.bool.isRequired,
};

export default connect(
  (state) => ({
    choices: state.poll.choices,
    empty: state.poll.empty,
    question: state.poll.question,
    pollId: state.poll.pollId,
    voted: state.poll.voted,
  }),
  (dispatch) => ({
    fetchPoll: () => dispatch(actions.fetchPoll()),
    vote: (pollId, choiceId) => dispatch(actions.vote(pollId, choiceId)),
  })
)(Poll);
