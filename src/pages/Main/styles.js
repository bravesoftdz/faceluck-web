import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  height: 50px;
  background: #8b9dc3;
`;

export const Content = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
`;

export const Sidebar = styled.div`
  display: flex;
  width: 30vh;
  background: #3b5998;
`;

export const Feed = styled.div`
  display: flex;
  flex-grow: 1;
  background: #dfe3ee;
`;
