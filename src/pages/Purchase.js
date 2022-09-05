import { useState } from 'react';
import Info from '../components/purchase/info/Info';
import Payment from '../components/purchase/payment/Payment';
import { PurchaseForm } from '../components/purchase/purchaseStyle';

function Purchase() {
  const [isInfoVaild, setIsInfoVaild] = useState(false);
  const [isPaymentVaild, setIsPaymentVaild] = useState(false);

  const isInfoValidation = (vaild) => {
    setIsInfoVaild(vaild);
  };
  const isPaymentValidation = (vaild) => {
    setIsPaymentVaild(vaild);
  };

  return (
    <PurchaseForm>
      <h1>결제하기</h1>
      <Info isValidation={isInfoValidation} />
      <Payment
        isValidation={isPaymentValidation}
        isVaild={isInfoVaild && isPaymentVaild}
      />
    </PurchaseForm>
  );
}

export default Purchase;
