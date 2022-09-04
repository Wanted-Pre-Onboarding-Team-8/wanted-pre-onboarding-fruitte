import { PaymentMethodForm, PaymentItemForm } from './paymentStyle';

function PaymentMethod() {
  return (
    <PaymentItemForm>
      <h2>결제수단</h2>
      <PaymentMethodForm>
        <input type="radio" name="payment-method" checked onChange={() => {}} />
        <label htmlFor="card">신용카드</label>
        <input type="radio" name="payment-method" />
        <label htmlFor="cash">무통장입금</label>
      </PaymentMethodForm>
    </PaymentItemForm>
  );
}

export default PaymentMethod;
