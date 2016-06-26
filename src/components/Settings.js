import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import TableView from 'react-native-tableview';
const { Section, Item, Cell } = TableView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  signOut: {
    borderColor: '#c7c8ca',
    backgroundColor: '#fff',
    borderWidth: 1,
    color: 'red',
    padding: 10,
    textAlign: 'center',
  },
});

class Settings extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <TableView
        style={styles.container}
        tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
        tableViewStyle={TableView.Consts.Style.Grouped}
      >
        <Section arrow={false}>
          <Cell onPress={this.props._handleLogout}>
            <Text style={styles.signOut}>Sign Out</Text>
          </Cell>
        </Section>
      </TableView>
    );
  }
}

Settings.title = Settings.displayName = 'Settings';

Settings.rightButton = {
  title: 'Close',
  navigate: {
    type: 'pop',
  },
};

Settings.propTypes = {
  _handleLogout: PropTypes.func.isRequired,
};

export default Settings;
