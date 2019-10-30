import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversations from './Conversations';
import Contacts from './Contacts';

export default class Main extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Conversations' },
      { key: '2', title: 'Contacts' },
    ],
  };

  render() {
    return (      
        <TabView
          renderTabBar={props =>
            <TabBarMenu
              {...props}
              indicatorStyle={{ backgroundColor: 'white' }}
              style={{ backgroundColor: '#115E54', elevation: 0}}
            />
          }
          navigationState={this.state}
          renderScene={SceneMap({
            '1': Conversations,
            '2': Contacts,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}          
        />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});