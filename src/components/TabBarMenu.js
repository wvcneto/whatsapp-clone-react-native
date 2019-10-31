import React from 'react';
import { View, Text, Image, StatusBar, TouchableHighlight, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { enableAddContact } from '../actions/AppActions';


const Add = require('../imgs/adicionar-contato.png');

const tabBarMenu = props => {
  return (
    <View style={styles.bar}>
      <StatusBar backgroundColor="#114d44" />
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.textLogo}>WhatsApp Clone</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.addButton}>
            <TouchableHighlight
              onPress={() => {Actions.addContact(); props.enableAddContact()}}
              underlayColor="#114d44"
            >
              <Image source={Add} />
            </TouchableHighlight>
          </View>
          <View style={styles.exitButton}>
            <Text style={styles.textExit}>Exit</Text>
          </View>
        </View>
      </View>
      <TabBar {...props} />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#115e54',
    elevation: 2,
    marginBottom: 2
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  top: {
    height: 50,
    justifyContent: 'center'
  },
  textLogo:{
    color: '#fff',
    fontSize: 18,
    marginLeft: 20
  },
  bottom: {
    marginRight: 20,
    flexDirection: 'row'
  },
  addButton:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 50
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
  exitButton: {
    justifyContent: 'center'
  },
  textExit: {
    color: '#fff',
    fontSize: 18
  }
});

export default connect(null,{enableAddContact})(tabBarMenu); // Somente a action do AppActions não sendo necessári oassociar state a props
