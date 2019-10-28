import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'; // conexão react e redux
import { modifyEmail, modifyPassword, authUser } from '../actions/AuthActions';

const bg = require('../imgs/bg.png');

//Decorator => adicionar comportamentos a um OBJETO já existente em tempo de execução.

// Componente Funcional
class formLogin extends React.Component {
  _authUser() {
    const { email, password } = this.props;

    this.props.authUser({ email, password });
  }
  renderBtnLogin() {
    if(this.props.loading){
      return(
        <ActivityIndicator size="large"/>
      );
    }
    return (
      <Button title="Entrar" color={'#115E54'} onPress={() => this._authUser()} />
    );
  }
  render() {
    return (
      <ImageBackground source={bg} style={styles.bg}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.textLogo}>WhatsApp Clone</Text>
          </View>
          <View style={styles.middle}>
            <TextInput
              value={this.props.email}
              style={styles.textInput}
              placeholder="E-mail"
              onChangeText={text => this.props.modifyEmail(text)}
            />
            <TextInput
              secureTextEntry
              value={this.props.password}
              style={styles.textInput}
              placeholder="Senha"
              onChangeText={text => this.props.modifyPassword(text)}
            />
            <Text style={styles.textErro}>{this.props.erro}</Text>
            <TouchableHighlight onPress={() => Actions.formSignup()}>
              <Text style={styles.textSignup}>
                Ainda não tem cadastro? Cadastre-se
            </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.bottom}>
            <View style={styles.button}>
              {this.renderBtnLogin()}
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

// Styles
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
    color: '#fff',
    backgroundColor: 'transparent',
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
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#115555',

  },
  textErro: {
    fontSize: 14,
    color: 'red',
    marginBottom: 2,
  },
  textSignup: {
    fontSize: 14,
    color: '#fff',
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
  erro: state.AuthReducer.erro,
  loading: state.AuthReducer.loading,
});

// implementando decorator React/Redux
export default connect(mapStateToProps, { modifyEmail, modifyPassword, authUser })(formLogin); // connect(Recursos a Decorar)(Componente a Decorar)
