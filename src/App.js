import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ADMIN_PAGE,
  PAYMENT_HISTORY_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_ADD_PAGE,
} from './consts';
import Admin from './pages/Admin';
import PaymentHistory from './pages/PaymentHistory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PRODUCTS_PAGE} element={<div>메인</div>} />
        <Route path={`${PRODUCTS_PAGE}/:id`} element={<div>상세</div>} />
        <Route path={PAYMENT_HISTORY_PAGE} element={<PaymentHistory />} />
        <Route path={ADMIN_PAGE} element={<Admin />} />
        <Route path={PRODUCT_ADD_PAGE} element={<div>관리자 상품 추가</div>} />
        <Route path="/*" element={<div>404 Not Fround</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
