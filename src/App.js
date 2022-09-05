import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ADMIN_PAGE,
  PAYMENT_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_ADD_PAGE,
  PAYMENT_RESULT_PAGE,
} from './consts';
import DetailPage from './components/Detail/DetailPage';
import styled from 'styled-components';
import Purchase from './pages/Purchase';
import Admin from './pages/Admin';
import Products from './pages/Products';
import Nav from './components/common/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={PRODUCTS_PAGE} element={<Products />} />
        <Route path={`${PRODUCTS_PAGE}/:id`} element={<DetailPage />} />
        <Route path={PAYMENT_PAGE} element={<Purchase />} />
        <Route
          path={PAYMENT_RESULT_PAGE}
          element={
            <Wrapper>
              <div>주문목록</div>
            </Wrapper>
          }
        />
        <Route path={ADMIN_PAGE} element={<Admin />} />
        <Route path={PRODUCT_ADD_PAGE} element={<div>관리자 상품 추가</div>} />

        <Route
          path="/*"
          element={
            <Wrapper>
              <div>상단 메뉴를 클릭해서 이동해주세요.</div>
            </Wrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 100px;
`;

export default App;
