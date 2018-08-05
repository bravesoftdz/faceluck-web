import React from 'react';
import { Route } from 'react-router-dom';

import { Container, ContainerForm } from './styles';
import Signin from './components/Signin';
import Signup from './components/Signup';

const Login = () => (
  <Container>
    <ContainerForm>
      <Route exact path="/login" component={Signin} />
      <Route path="/login/signup" component={Signup} />
    </ContainerForm>
  </Container>
);

export default Login;
