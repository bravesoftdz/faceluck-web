import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #dfe3ee;
  border-radius: 3px;
  height: 500px;
  width: 380px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 1.8em;
    color: hsl(0, 0%, 29%);
    margin-bottom: 20px;
  }

  input {
    border: none;
    border-radius: 3px;
    background: #fff;
    margin-top: 10px;
    font-size: 22px;
    font-weight: 400;
    padding: 12px 20px;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  }

  button {
    width: 100%;
    font-size: 26px;
    color: #fff;
    background: #3b5998;
    border-radius: 3px;
    margin-top: 15px;
    padding: 6px 10px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    &:hover {
      filter: opacity(0.9);
    }
  }

  div.links {
    margin-top: 10px;
    justify-content: space-between;
    a {
      font-weight: 600;
      text-decoration: none;
      color: hsl(0, 0%, 29%);
    }
  }
`;

export const Avatar = styled.div`
  background: #fff;
  vertical-align: middle;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
`;
