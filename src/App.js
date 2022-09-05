import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ADMIN_PAGE,
  PAYMENT_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_ADD_PAGE,
} from './consts';
import Admin from './pages/Admin';
import DetailPage from './pages/DetailPage/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PRODUCTS_PAGE} element={<div>메인</div>} />
        <Route path={`${PRODUCTS_PAGE}/:id`} element={<DetailPage />} />
        <Route path={PAYMENT_PAGE} element={<div>결제</div>} />
        <Route path={ADMIN_PAGE} element={<Admin />} />
        <Route path={PRODUCT_ADD_PAGE} element={<div>관리자 상품 추가</div>} />
        <Route path="/*" element={<div>404 Not Fround</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
