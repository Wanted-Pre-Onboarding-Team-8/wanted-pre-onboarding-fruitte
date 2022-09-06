import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  height: auto;
  width: auto;
  width: 10em;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  margin: 0 16px;

  cursor: pointer;
`;

export const AdminMenu = styled(Menu)`
  width: 10em;
`;
