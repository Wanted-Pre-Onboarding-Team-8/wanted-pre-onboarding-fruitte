import styled from 'styled-components';
import NaviBar from './NaviBar';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NaviBar />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
