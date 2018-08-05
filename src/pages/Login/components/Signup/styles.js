import styled from 'styled-components';

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
    justify-content: center;
    align-items: center;
    display: flex;
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

export const Avatar = styled.img`
  background: #fff;
  vertical-align: middle;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

export const Error = styled.div`
  margin-top: 10px;
  color: #e74c3c;
`;

export const IconInButton = styled.div`
  width: 22px;
  height: 22px;
  margin-left: 5px;
`;
