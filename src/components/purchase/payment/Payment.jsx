import OrderSummary from './OrderSummary';
import PaymentMethod from './PaymentMethod';
import { PaymentForm } from './paymentStyle';
import Terms from './Terms';

function Payment({ isValidation, isVaild }) {
  const isValidationPayment = (vaild) => {
    isValidation(vaild);
  };

  return (
    <PaymentForm>
      <OrderSummary />
      <PaymentMethod />
      <Terms isValidation={isValidationPayment} isVaild={isVaild} />
    </PaymentForm>
  );
}

export default Payment;
