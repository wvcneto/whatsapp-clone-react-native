import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import firebase from 'firebase';

import Routes from './src/Routes';
import reducers from './src/reducers'; // index

 class App extends React.Component{
   componentDidMount(){
    let firebaseConfig = {
      apiKey: "AIzaSyC6_tIGySsDlGpAkJujOu20h3VkOfz3QEs",
      authDomain: "whats-clone-896d2.firebaseapp.com",
      databaseURL: "https://whats-clone-896d2.firebaseio.com",
      projectId: "whats-clone-896d2",
      storageBucket: "whats-clone-896d2.appspot.com",
      messagingSenderId: "104563213141",
      appId: "1:104563213141:web:7abf9d6fde08baf19825dc",
      measurementId: "G-20KEFP0B3G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   }
   render(){
    return(
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
   }
 }

export default App;
