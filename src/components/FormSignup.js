import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { modifyName, modifyEmail, modifyPassword, registerUser } from '../actions/AuthActions';

const bg = require('../imgs/bg.png');

class FormSignup extends React.Component {
  _registerUser(){

    const {name, email, password} = this.props; // Destructuring Assingment
    //const name = this.props.name;
    //const email = this.props.email;
    //const password = this.props.password;

    this.props.registerUser({name, email, password}); // chave/valor

  }  
  render() {
    return (
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.textLogo}>Cadastro</Text>
          </View>
          <View style={styles.middle}>
            <TextInput
              value={this.props.name}
              placeholder="Nome"
              style={styles.textInput}
              onChangeText={text => this.props.modifyName(text)}
            />
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              style={styles.textInput}
              onChangeText={text => this.props.modifyEmail(text)}
            />
            <TextInput
              secureTextEntry
              value={this.props.password}
              placeholder="Senha"
              style={styles.textInput}
              onChangeText={text => this.props.modifyPassword(text)}
            />
          </View>
          <View style={styles.bottom}>
            <View style={styles.button}>
              <Button title="Cadastrar" color="#115E54" onPress={() => this._registerUser()} />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 25,
    backgroundColor: 'transparent',
    color: '#fff',
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
  button: {
    backgroundColor: '#115E54' //IOS Color/Button
  },
});

const mapStateToProps = state => ({
  name: state.AuthReducer.name,
  email: state.AuthReducer.email,
  password: state.AuthReducer.password,
});

export default connect(mapStateToProps, { modifyName, modifyEmail, modifyPassword, registerUser })(FormSignup);
