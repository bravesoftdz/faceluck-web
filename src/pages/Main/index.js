import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Header, Sidebar, Content, Feed,
} from './styles';

export default class Main extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <Container>
        <Header>
HEADER
        </Header>
        <Content>
          <Sidebar>
SIDEBAR
          </Sidebar>
          <Feed>
FEED
          </Feed>
        </Content>
      </Container>
    );
  }
}
