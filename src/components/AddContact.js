import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { modifyAddEmail, addEmailContact } from '../actions/AppActions';

class addContact extends React.Component {
  renderAddContact() {
    if (!(this.props.successAdd)) {
      return (        
        <>
          <View style={styles.top}>
            <TextInput
              placeholder='Email'
              style={styles.textInput}
              value={this.props.email}
              onChangeText={text => this.props.modifyAddEmail(text)} // Callback
            />
            <Text style={styles.textErro}>{this.props.erroAdd}</Text>
          </View>
          <View style={styles.bottom}>
            <Button
              style={styles.button}
              title="Add"
              color="#115e54"
              onPress={() => this.props.addEmailContact(this.props.email)}
            />
          </View>
        </>
      );

    } else {
      return (
        <>
          <Text style={styles.textSuccess}>Contact Registered!</Text>
        </>
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        { this.renderAddContact() }
      </View>
    );
  }
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
  textSuccess: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#115E54', //IOS Color/Button
  },
});

const mapStateToProps = state => ({
  email: state.AppReducer.emailContact, // State redux / Reducer / variavel de estado
  erroAdd: state.AppReducer.erroAdd,
  successAdd: state.AppReducer.successAdd
});

export default connect(mapStateToProps, { modifyAddEmail, addEmailContact })(addContact); // Mapeamento de estado / actionsCreator / (component)
