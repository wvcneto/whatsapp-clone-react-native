import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default props => {
  return(
    <View style={styles.container}>
      <Text>Contacts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
