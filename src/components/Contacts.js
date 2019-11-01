import React from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { contactsUserFetch } from '../actions/AppActions';

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { r1 !== r2 } });

    this.state = {
      dataSource: ds.cloneWithRows([
        'Reg 1',
        'Reg 2',
        'Reg 3'
      ])
    }

  }

  componentDidMount() {
    this.props.contactsUserFetch();
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) =>
          <View style={styles.container}>
            <Text>{data}</Text>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = (state) => {
  const contacts = _.map(state, (val, uid) => {
    return { ...val, uid }
  });
  console.log(contacts);
  return {};
}

export default connect(mapStateToProps, { contactsUserFetch })(Contacts)
