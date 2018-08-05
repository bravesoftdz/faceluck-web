import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  background: #f7f7f7;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostsForm = styled.form`
  background: #fff;
  font-size: 16px;
`;
