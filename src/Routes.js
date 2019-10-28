import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormSignup from './components/FormSignup';
import Welcome from './components/Welcome';
import Main from './components/Main';

export default props => (
    <Router>
      <Stack key="root" navigationBarStyle={ {backgroundColor: '#115E54'}} titleStyle={{ flex: 1,color:'#fff', marginLeft: 90 }}>
        <Scene initial key='formLogin' component={FormLogin} hideNavBar={true} title="Login" />
        <Scene key='formSignup' component={FormSignup} hideNavBar={false} title="Sign up" />
        <Scene key='welcome' component={Welcome} hideNavBar={true} title="Welcome" />
        <Scene key='main' component={Main} hideNavBar={true} title="Main" />
      </Stack>
    </Router>
);
