import React from 'react';

import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import { userCircleO } from 'react-icons-kit/fa/userCircleO';
import { bellO } from 'react-icons-kit/fa/bellO';
import { caretDown } from 'react-icons-kit/fa/caretDown';
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial';

import Auth from '@/services/auth';

import { Container } from './styles';

const Header = () => (
  <Container>
    <ul className="facebook" role="navigation">
      <li className="facebook__brand">
        <Icon icon={facebookOfficial} />
      </li>
      <li className="facebook__search">
        <form>
          <input placeholder="search Facebook" />
          <Icon icon={search} />
        </form>
      </li>
      <li>
        <Icon icon={userCircleO} />
      </li>
      <li>
        <Icon icon={bellO} />
        {'Notifications'}
      </li>
      <li>
Home
      </li>
      <li>
        <Icon icon={userCircleO} />
        {'Ohans'}
      </li>
      <li>
        <Icon icon={caretDown} />
      </li>
      <li>
        <button type="button" onClick={() => Auth.signout()}>
          <Icon icon={caretDown} />
          Sair
        </button>
      </li>
    </ul>
  </Container>
);

export default Header;
