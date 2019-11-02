import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableHighlight } from 'react-native';

const sendImage = require('../imgs/enviar_mensagem.png');

export default class Conversation extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.messagesLabel}></View>
        <View style={styles.inputLabel}>
          <TextInput 
            style={styles.inputField}
          />
          <TouchableHighlight
            onPress={() => false}
            underlayColor='#fff'
          >
            <Image source={sendImage} />
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#eee4dc',
    padding: 10
  },
  messagesLabel: {
    flex: 1,
    paddingBottom: 20,
  },
  inputLabel: {
    flexDirection: 'row',
    height: 60,
  },
  inputField: {
    flex: 4,
    backgroundColor: '#fff',
    fontSize: 18
  },
  textConversation: {
    marginTop: 80,
  },
});
