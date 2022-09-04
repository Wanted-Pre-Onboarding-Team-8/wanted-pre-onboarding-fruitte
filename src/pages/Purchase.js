import { useState } from 'react';
import Info from '../components/purchase/info/Info';
import Payment from '../components/purchase/payment/Payment';
import { PurchaseForm } from '../components/purchase/purchaseStyle';

function Purchase() {
  const [isVaild, setIsVaild] = useState(false);

  const isValidation = (vaild) => {
    setIsVaild(vaild);
  };

  return (
    <PurchaseForm>
      <h1>결제하기</h1>
      <Info isValidation={isValidation} />
      <Payment isValidation={isValidation} isVaild={isVaild} />
    </PurchaseForm>
  );
}

export default Purchase;
