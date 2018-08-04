import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import {
  Container, ContainerForm, LoginForm, Avatar,
} from './styles';

export default class Login extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    email: '',
    password: '',
  };

  handleOnSubmit = async (e) => {
    const { email, password } = this.state;
    e.preventDefault();

    const response = await axios.post('http://localhost:3333/api/signin', {
      email,
      password,
    });

    alert(JSON.stringify(response.data));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <ContainerForm>
          <LoginForm onSubmit={this.handleOnSubmit}>
            <h2 className="title">
Efetuar Login
            </h2>
            <Avatar />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Usuário"
              value={email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={this.handleChange}
            />
            <button type="submit">
Entrar
            </button>
            <div className="links">
              <a href="/">
Criar Conta
              </a>
            </div>
          </LoginForm>
        </ContainerForm>
      </Container>
    );
  }
}
