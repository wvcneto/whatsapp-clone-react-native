import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormSignup from './components/FormSignup';
import Welcome from './components/Welcome';
import Main from './components/Main';
import AddContact from './components/AddContact';
import Conversation from './components/Conversation';

export default props => (
    <Router>
      <Stack key="root" navigationBarStyle={ {backgroundColor: '#115E54'}} titleStyle={{ flex: 1,color:'#fff', marginLeft: 90 }}>
        <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true} />
        <Scene key='formSignup' component={FormSignup} title="Sign up" hideNavBar={false} />
        <Scene key='welcome' component={Welcome} title="Welcome" hideNavBar={true} />
        <Scene key='main' component={Main} title="Main" hideNavBar={true} />
        <Scene key='addContact' component={AddContact} title="Add New Contact" hideNavBar={false} />
        <Scene key='conversation' component={Conversation} title="Conversation" hideNavBar={false} />

      </Stack>
    </Router>
);
