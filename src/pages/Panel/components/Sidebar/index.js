import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { Container, ProfileSideBar, Avatar } from './styles';

class Sidebar extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      username: PropTypes.string,
      friendsCount: PropTypes.number,
      postCount: PropTypes.number,
    }),
  };

  static defaultProps = {
    user: {},
  };

  getNavLinkClass = path => (this.props.location.pathname === path ? 'active' : '');

  render() {
    const {
      name, username, friendsCount, postCount,
    } = this.props.user;
    return (
      <Container>
        <ProfileSideBar>
          <div className="profile__sidebar__avatar">
            <Avatar
              src="data:image/png;base64,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"
              alt="Avatar"
            />
          </div>
          <div className="profile__sidebar__text">
            {name}
          </div>
          <div className="profile__sidebar__text">
            {username}
          </div>
          <div className="profile__sidebar__info">
            <div>
              {`Amigos(${friendsCount})`}
            </div>
            <div>
              {`Posts(${postCount})`}
            </div>
          </div>
        </ProfileSideBar>
        <div className="sideBar">
          <div className="sideBar__section">
            <div className={`sideBar__item ${this.getNavLinkClass('/feed')}`}>
              <NavLink to="/feed">
Feed
              </NavLink>
            </div>
            <div className={`sideBar__item ${this.getNavLinkClass('/profile')}`}>
              <NavLink to="/profile">
Perfil
              </NavLink>
            </div>
            <div className={`sideBar__item ${this.getNavLinkClass('/users')}`}>
              <NavLink to="/users">
Usuários
              </NavLink>
            </div>
          </div>
          <div className="sideBar__section">
            <div className="sideBar__item">
Change theme
            </div>
            <div className="sideBar__item">
Legal
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Sidebar);
