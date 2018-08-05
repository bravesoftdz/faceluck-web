import styled from 'styled-components';

export const Container = styled.div`
  background: #ecf0f1;
  .sideBar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    width: 300px;
    /* background-color: #fcfdfd; */
    padding: 10px;
    background: #ecf0f1;
  }

  .sideBar__item {
    cursor: pointer;
    color: #2c3e50;
    font-size: 18px;
    width: 100%;

    a {
      padding: 5px 10px;
      text-decoration: none;
      color: #2c3e50;
      font-size: 18px;
      display: block;
    }
  }

  .sideBar__item.active {
    background-color: #8b9dc3;
    border-radius: 4px;
  }
`;

export const ProfileSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 250px;
  .profile__sidebar__avatar {
    border-radius: 50%;
    background: #fff;
    width: 120px;
    height: 120px;
    border: 4px solid #fff;
    margin: 10px;
  }
  .profile__sidebar__text {
    min-height: 20px;
    width: 100%;
    text-align: center;
  }
  .profile__sidebar__info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 100%;
    div {
      flex-grow: 1;
      text-align: center;
    }
  }
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
`;
