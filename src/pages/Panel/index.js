import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Container, Content } from './styles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentContainer from './components/ContentContainer';
import Posts from './components/ContentContainer/components/Posts';
import { PostsForm } from './components/ContentContainer/components/Posts/styles';

import api from '@/services/api';

export default class Panel extends Component {
  state = {
    user: {
      name: '',
      username: '',
    },
    friendsCount: 0,
    postCount: 0,
  };

  async componentDidMount() {
    // console.log(Auth.isAuthenticated);
    api.defaults.headers.common.authorization = `Bearer ${sessionStorage.getItem(
      '@FaceLuck:token',
    )}`;
    const response = await api.get('users/me');

    this.setState({
      user: response.data.user,
      friendsCount: response.data.friendsCount,
      postCount: response.data.postCount,
    });
  }

  getNavLinkClass = path => (this.props.location.pathname === path ? 'active' : '');

  render() {
    const { user, friendsCount, postCount } = this.state;
    return (
      <Container>
        <Header />
        <ContentContainer>
          <Sidebar user={{ ...user, friendsCount, postCount }} />
          <Content>
            <Posts>
              <div>
                <PostsForm action="">
                  <textarea
                    name="content"
                    id="content"
                    cols="30"
                    rows="10"
                    placeholder={`No que você está pensando, ${user.name}?`}
                  />
                  <button type="submit">
Criar post
                  </button>
                </PostsForm>
              </div>
            </Posts>
          </Content>
          <Content />
        </ContentContainer>
      </Container>
    );
  }
}
