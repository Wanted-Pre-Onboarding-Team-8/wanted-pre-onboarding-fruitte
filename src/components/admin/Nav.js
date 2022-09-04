import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ADMIN_PAGE, PRODUCT_ADD_PAGE } from '../../consts/routes';

const Nav = () => {
  return (
    <Wrapper>
      <NavLink
        to={ADMIN_PAGE}
        style={({ isActive }) => ({ color: isActive ? 'skyblue' : 'black' })}
      >
        상품관리
      </NavLink>
      <NavLink
        to={PRODUCT_ADD_PAGE}
        style={({ isActive }) => ({ color: isActive ? 'skyblue' : 'black' })}
      >
        상품등록
      </NavLink>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  width: 300px;
  height: 100vh;
  background-color: #eee;
  color: white;
  display: flex;
  flex-direction: column;

  > a {
    padding: 10px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 700;
  }
`;
