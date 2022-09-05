import { PaymentMethodForm, PaymentItemForm } from './paymentStyle';
import { useState } from 'react';

function PaymentMethod() {
  const [currentValue, setCurrentValue] = useState('card');

  return (
    <PaymentItemForm>
      <h2>결제수단</h2>
      <PaymentMethodForm>
        <input
          type="radio"
          name="payment-method"
          checked={currentValue === 'card'}
          onChange={() => {
            setCurrentValue('card');
          }}
        />
        <label htmlFor="card">신용카드</label>
        <input
          type="radio"
          name="payment-method"
          checked={currentValue === 'cash'}
          onChange={() => {
            setCurrentValue('cash');
          }}
        />
        <label htmlFor="cash">무통장입금</label>
      </PaymentMethodForm>
    </PaymentItemForm>
  );
}

export default PaymentMethod;
