import React from 'react';
import { View, Text, Button, Image, ImageBackground, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux';

const bg = require('../imgs/bg.png');
const logo = require('../imgs/logo.png');

export default props => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.textWelcome}>Welcome!</Text>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.bottom}>
          <Button title="Login" color='#115E54' style={styles.button} onPress={() => Actions.formLogin()} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  top: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWelcome: {
    fontSize: 20,
    color: '#fff',
  },
  logo: {
    margin: 10,
  },
  bottom: {
    flex: 1,
  },
  button: {
    backgroundColor: '#115E54' //IOS Color/Button
  },
});
