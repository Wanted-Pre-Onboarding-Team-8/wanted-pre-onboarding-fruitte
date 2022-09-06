import { PaymentSummaryForm, PaymentItemForm } from './paymentStyle';

function OrderSummary() {
  return (
    <PaymentItemForm>
      <h2>주문 요약</h2>
      <PaymentSummaryForm>
        <div className="payment-name">
          <p>상품가격</p>
          <p>배송비</p>
        </div>
        <div className="payment-value">
          <p>20,000원</p>
          <p>+4,000원</p>
        </div>
        <div className="payment-total">
          <p>총 주문금액</p>
          <p>
            <span>24,000원</span>
          </p>
        </div>
      </PaymentSummaryForm>
    </PaymentItemForm>
  );
}

export default OrderSummary;
