import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
`;
const Content = styled.div`
  width: 100%;
  padding: 20px;
`;
