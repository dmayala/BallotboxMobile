import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

class Ballotbox extends Component {

  constructor(props, context) {
    super(props, context);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this._dataSource = [
      { name: '389,200 mi' },
      { name: '238,900 mi' },
      { name: '504,100 mi' },
      { name: '472,200 mi' },
    ];

    this.state = {
      question: 'How far away is the moon from Earth?',
      dataSource: this.ds.cloneWithRows(this._dataSource),
      active: null,
    }
  }

  renderRow(choice, sectionId, rowId, highlightRow) {
    const active = this.state.active  === Number(rowId);
    const charCode = active ? 10003 : 65 + Number(rowId);
    return (
      <View style={rowStyles.container}>
        <TouchableHighlight 
          onPress={() => this.setState(Object.assign({}, this.state, { 
            dataSource: this.ds.cloneWithRows(this._dataSource),
            active: Number(rowId)})) 
          }
          style={[rowStyles.circle, active && rowStyles.circleActive]}
        >
          <Text style={[rowStyles.circleText, active && rowStyles.circleTextActive]}>
            {String.fromCharCode(charCode)}
          </Text>
        </TouchableHighlight>
        <Text style={rowStyles.choiceText}>{ choice.name }</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <Text style={styles.questionText}>
          {this.state.question}
          </Text>
        </View>
        <ListView
          style={rowStyles.listContainer}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        >
        </ListView>
        <TouchableHighlight
          onPress={()=> console.log('pressed')}
          style={styles.nextButton}
          underlayColor="#71C9E4"
        >
          <Text style={styles.nextButtonText}>Next Question</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const rowStyles = StyleSheet.create({
  listContainer: {

  },
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
    backgroundColor: '#65BFA3',
  },
  circleText: {
    fontSize: 20,
    fontWeight: '500',
  },
  circleTextActive: {
    color: '#FFFFFF',
  },
});

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

AppRegistry.registerComponent('Ballotbox', () => Ballotbox);
