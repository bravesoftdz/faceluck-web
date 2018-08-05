import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Icon } from 'react-icons-kit';
import { circular } from 'react-icons-kit/iconic/circular';

import api from '@/services/api';
import { LoginForm, Error, IconInButton } from './styles';

export default class Signup extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    username: '',
    error: '',
    loading: false,
    redirect: false,
  };

  handleOnSubmit = async (e) => {
    e.preventDefault();

    const {
      email, password, name, username,
    } = this.state;

    this.setState({
      loading: true,
    });

    try {
      const response = await api.post('signup', {
        email,
        password,
        name,
        username,
      });

      sessionStorage.setItem('@FaceLuck:user', JSON.stringify(response.data.user));
      sessionStorage.setItem('@FaceLuck:token', response.data.token);

      this.setState({
        redirect: true,
      });
    } catch (err) {
      this.setState({
        error: err.response.data.error,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      email, name, username, password, error, loading, redirect,
    } = this.state;

    if (redirect) {
      return <Redirect path="/" />;
    }
    return (
      <LoginForm onSubmit={this.handleOnSubmit}>
        <h2 className="title">
Cadastrar-se
        </h2>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Usuário"
          value={username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
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
        {error && (
        <Error>
          {error}
        </Error>
        )}
        <button type="submit">
          Registrar
          {loading && (
            <IconInButton>
              <Icon className="rotating" icon={circular} size="100%" />
            </IconInButton>
          )}
        </button>
        <div className="links">
          <Link to="/login">
Já tenho uma conta
          </Link>
        </div>
      </LoginForm>
    );
  }
}
