import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  background: rgba(59, 89, 153, 1);
  box-shadow: 5px 10px 20px -20px rgba(59, 89, 153, 1);
  ul > li {
    list-style-type: none;
  }
  .facebook {
    display: flex;
    height: 46px;
    align-items: center;
    padding: 0 10px;
    color: #fff;
    font-size: 0.9em;
  }
  .facebook__search {
    margin-right: auto;
  }
  .facebook__brand i {
    font-size: 1.5em;
  }
  .facebook li:not(:last-child):not(:first-child):not(.facebook__search) {
    margin-right: 10px;
  }
`;
