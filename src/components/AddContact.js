import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { modifyAddEmail, addEmailContact } from '../actions/AppActions';

const addContact = props => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput
          placeholder='Email'
          style={styles.textInput}
          value={props.email}
          onChangeText={text => props.modifyAddEmail(text)} // Callback
        />     
        <Text style={styles.textErro}>{props.erroAdd}</Text>   
      </View>
      <View style={styles.bottom}>
        <Button
          style={styles.button}
          title="Add"
          color="#115e54"
          onPress={() => props.addEmailContact(props.email)}
        />        
      </View>
    </View >
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  top: {
    flex: 1,
    justifyContent: 'center'
  },
  bottom: {
    flex: 1,
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
  button: {
    backgroundColor: '#115E54', //IOS Color/Button
  },
});

const mapStateToProps = state => ({
  email: state.AppReducer.addEmail, // State redux / Reducer / variavel de estado
  erroAdd: state.AppReducer.erroAdd,
});

export default connect(mapStateToProps,{modifyAddEmail, addEmailContact})(addContact); // Mapeamento de estado / actionsCreator / (component)
