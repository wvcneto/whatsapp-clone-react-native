import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormSignup from './components/FormSignup';
import Welcome from './components/Welcome';
import Main from './components/Main';
import AddContact from './components/AddContact';

export default props => (
    <Router>
      <Stack key="root" navigationBarStyle={ {backgroundColor: '#115E54'}} titleStyle={{ flex: 1,color:'#fff', marginLeft: 90 }}>
        <Scene key='formLogin' component={FormLogin} hideNavBar={true} title="Login" hideNavBar={true} />
        <Scene key='formSignup' component={FormSignup} hideNavBar={false} title="Sign up" hideNavBar={false} />
        <Scene key='welcome' component={Welcome} hideNavBar={true} title="Welcome" hideNavBar={true} />
        <Scene key='main' component={Main} hideNavBar={true} title="Main" hideNavBar={true} />
        <Scene initial key='addContact' component={AddContact} hideNavBar={true} title="Add Contact" hideNavBar={false} />
      </Stack>
    </Router>
);
