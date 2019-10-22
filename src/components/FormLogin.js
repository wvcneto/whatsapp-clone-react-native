import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.textLogo}>WhatsApp Clone</Text>
        </View>
        <View style={styles.middle}>
            <TextInput style={styles.textInput} placeholder='E-mail' />
            <TextInput style={styles.textInput} placeholder='Senha' />
            <TouchableHighlight onPress={() => Actions.formCadastro() }>
                <Text style={styles.textSignup}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.bottom}>
          <View style={styles.button}>
            <Button title="Acessar" onPress={() => false} />
          </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 25,
  },
  middle: {
    flex: 2,
  },
  bottom: {
    flex: 2,
  },
  textInput: {
    fontSize: 20,
    height: 45, 
  },
  textSignup: {
    fontSize: 20,
  },
  button:{
    backgroundColor: '#115E54' //IOS Color/Button
  },
});
