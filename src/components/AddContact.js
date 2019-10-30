import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default props => {
  return (
    <View style={{ Flex: 1, justifyContent: 'center', padding: 20 }}>
      <View style={{ Flex: 1, justifyContent: 'center' }}>
        <TextInput
          placeholder='Email'
          style={{ fontSize: 20, height: 45 }}
          onChange={() => false}
        />
      </View>
      <View style={{ Flex: 1 }}>
        <Button
          title="Add"
          color="#115e54"
          onPress={() => false}
        />
      </View>
    </View >
  );
}