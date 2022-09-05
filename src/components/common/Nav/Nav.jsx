/* eslint-disable */

import { useNavigate } from 'react-router-dom';
import {
  PAYMENT_RESULT_PAGE,
  ADMIN_PAGE,
  PAYMENT_PAGE,
  PRODUCTS_PAGE,
} from '../../../consts';
import { MenuWrapper, Wrapper, Menu, Logo, AdminMenu } from './NavStyled';

function Nav() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo
        src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg"
        onClick={() => navigate('/')}
      ></Logo>
      <MenuWrapper>
        <Menu onClick={() => navigate(PRODUCTS_PAGE)}>상품 리스트</Menu>
        <Menu onClick={() => navigate(PAYMENT_RESULT_PAGE)}>결제 내역</Menu>
        <Menu onClick={() => navigate(PAYMENT_PAGE)}>결제 하기</Menu>
      </MenuWrapper>
      <AdminMenu onClick={() => navigate(ADMIN_PAGE)}>관리자</AdminMenu>
    </Wrapper>
  );
}

export default Nav;
