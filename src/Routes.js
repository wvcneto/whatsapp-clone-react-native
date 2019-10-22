import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormSignup from './components/FormSignup';

export default props => (
    <Router>
      <Stack>
        <Scene key='formLogin' component={FormLogin} title="Login" />
        <Scene key='formSignup' component={FormSignup} title="Sign up" />
      </Stack>
    </Router>
);
