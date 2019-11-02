import React from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { contactsUserFetch } from '../actions/AppActions';

class Contacts extends React.Component {

  componentWillMount() {
    this.props.contactsUserFetch();
    this.createSource( this.props.contacts )
}

componentWillReceiveProps(nextProps) {
    this.createSource( nextProps.contacts )
}

createSource( contacts ) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    this.source = ds.cloneWithRows(contacts)
}


  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.source}
        renderRow={(data) =>
          <View style={styles.container}>
            <Text style={styles.titleList}>{data.name}</Text>
            <Text style={styles.textList}>{data.email}</Text>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  titleList: {
    fontSize: 25
  },
  textList: {
    fontSize: 18,
  }
});

const mapStateToProps = (state) => {
  const contacts = _.map(state.ListContactsReducer, (val, uid) => {
    return { ...val, uid }
  });
  return {contacts};
}

export default connect(mapStateToProps, { contactsUserFetch })(Contacts)
