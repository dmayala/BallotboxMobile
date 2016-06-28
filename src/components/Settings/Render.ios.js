import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import TableView from 'react-native-tableview';
const { Section, Item, Cell } = TableView;

const localStyle = StyleSheet.create({
  container: {},
});

export default function render(baseStyle) {
  return (
    <TableView
      style={[baseStyle.container, localStyle.container]}
      tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
      tableViewStyle={TableView.Consts.Style.Grouped}
    >
      <Section arrow={false}>
        <Cell onPress={this.props._handleLogout}>
          <Text style={[baseStyle.signOut, localStyle.signOut]}>Sign Out</Text>
        </Cell>
      </Section>
    </TableView>
  );
}
