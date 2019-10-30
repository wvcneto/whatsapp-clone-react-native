import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => {
  return(
    <View style={{backgroundColor: '#115e54', elevation:3, marginBottom: 3,}}>
      <StatusBar backgroundColor="#114d44" />
      <View style={{ height: 50, justifyContent: 'center' }}>
        <Text style={{color: '#fff', fontSize: 20, marginLeft: 20}}>WhatsApp Clone</Text>
      </View>
      <TabBar {...props} />
    </View>
  );
}