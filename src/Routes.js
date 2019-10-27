import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormSignup from './components/FormSignup';
import Welcome from './components/Welcome';

export default props => (
    <Router>
      <Stack key="root">
        <Scene initial key='formLogin' component={FormLogin} title="Login" titleStyle={{ flex: 1, textAlign: 'center' }} />
        <Scene key='formSignup' component={FormSignup} title="Sign up" titleStyle={{ flex: 1, textAlign: 'center' }} />
        <Scene key='welcome' component={Welcome} title="Welcome" titleStyle={{ flex: 1, textAlign: 'center' }} />

      </Stack>
    </Router>
);
