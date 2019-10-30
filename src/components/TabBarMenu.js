import React from 'react';
import { View, Text, Image, StatusBar, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';

const Add = require('../imgs/adicionar-contato.png');

export default props => {
  return (
    <View style={{ backgroundColor: '#115e54', elevation: 3, marginBottom: 3}}>
      <StatusBar backgroundColor="#114d44" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ height: 50, justifyContent: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 18, marginLeft: 20 }}>WhatsApp Clone</Text>
        </View>
        <View style={{ marginRight: 20, flexDirection: 'row' }}>
          <View style={{justifyContent: 'center', alignItems: 'center', width: 50 }}>
            <TouchableHighlight
              onPress={() => Actions.addContact()}
              underlayColor="#114d44"
            >
              <Image source={Add} />
            </TouchableHighlight>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Exit</Text>
          </View>
        </View>
      </View>
      <TabBar {...props} />
    </View>
  );
}