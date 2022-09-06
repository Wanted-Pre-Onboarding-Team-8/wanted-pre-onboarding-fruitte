import CustomerInfo from './CustomerInfo';
import OrderInfo from './OrderInfo';
import DeliverInfo from './DeliverInfo';
import { InfoForm } from './infoStyle';
import { useState } from 'react';

function Info({ isValidation }) {
  const [data, setData] = useState({ name: '', phone: '' });

  const isValidationInfo = (valid) => {
    isValidation(valid);
  };
  const customerName = (name) => {
    setData({ ...data, name: name });
  };
  const customerPhone = (phone) => {
    setData({ ...data, phone: phone });
  };

  return (
    <InfoForm>
      <OrderInfo />
      <CustomerInfo
        isValidation={isValidation}
        customerName={customerName}
        customerPhone={customerPhone}
      />
      <DeliverInfo isValidation={isValidationInfo} customerData={data} />
    </InfoForm>
  );
}

export default Info;
