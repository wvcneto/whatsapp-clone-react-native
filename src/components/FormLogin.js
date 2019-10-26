import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'; // conexão react e redux
import { modifyEmail, modifyPassword } from '../actions/AuthActions';

//Decorator => adicionar comportamentos a um OBJETO já existente em tempo de execução.

// Componente Funcional
const formLogin = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textLogo}>WhatsApp Clone</Text>
      </View>
      <View style={styles.middle}>
        <TextInput 
          value={props.email} 
          style={styles.textInput} 
          placeholder="E-mail"  
          onChangeText={ text => props.modifyEmail(text) }
        />
        <TextInput
          value={props.password}
          style={styles.textInput} 
          placeholder="Senha" 
          onChangeText={ text => props.modifyPassword(text) }
        />
        <TouchableHighlight onPress={() => Actions.formSignup()}>
          <Text style={styles.textSignup}>
            Ainda não tem cadastro? Cadastre-se
          </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.bottom}>
        <View style={styles.button}>
          <Button title="Acessar" color={'#115E54'} onPress={() => false} />
        </View>
      </View>
    </View>
  );
};

// Styles
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
    fontSize: 14,
  },
  button: {
    backgroundColor: '#115E54', //IOS Color/Button
  },
});

// Retornar estados do redux como props do componente
// Conectando variaveis de state do redux com as props desse componente(decorator)
const mapStateToProps = state => ({
  email: state.AuthReducer.email,
  password: state.AuthReducer.password,
});

// implementando decorator React/Redux
export default connect(mapStateToProps, { modifyEmail, modifyPassword })(formLogin); // connect(Recursos a Decorar)(Componente a Decorar)
