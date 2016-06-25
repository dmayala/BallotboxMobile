import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';
import TableView from 'react-native-tableview';
const { Section, Item } = TableView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Settings extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <TableView
        allowsMultipleSelection
        allowsToggle
        onPress={(event) => console.log(event)}
        style={styles.container}
        tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
        tableViewStyle={TableView.Consts.Style.Grouped}
      >
          <Section label="Section 1" arrow={false}>
              <Item selected={true}>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
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
};

export default Settings;
