import { CustomerInfoForm, InfoItemForm } from './infoStyle';
import { useState } from 'react';

function CustomerInfo({ isValidation, customerName, customerPhone }) {
  const [formVaildation, setFormVaildation] = useState({
    name: 'idle',
    phone: 'idle',
  });

  const number = /[0-9]/g;
  const dash = /[-]/g;

  const NAME_REGEX = /^[가-힣]{2,4}$/;
  const PHONE_REGEX = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const validationName = (name) => {
    if (name.length === 0) return 'idle';
    if (NAME_REGEX.test(name)) return 'vaild';

    return 'invaild';
  };
  const validationPhone = (phone) => {
    if (phone.length === 0) return 'idle';
    if (PHONE_REGEX.test(phone)) return 'vaild';

    return 'invaild';
  };

  return (
    <InfoItemForm>
      <CustomerInfoForm>
        <h2>주문자 정보</h2>
        <input
          type="text"
          placeholder="이름"
          onBlur={(e) => {
            setFormVaildation({
              ...formVaildation,
              name: validationName(e.target.value),
            });

            isValidation(
              validationName(e.target.value) === 'vaild' &&
                formVaildation.phone === 'vaild',
            );

            customerName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="연락처"
          onBlur={(e) => {
            setFormVaildation({
              ...formVaildation,
              phone: validationPhone(e.target.value),
            });

            isValidation(
              formVaildation.name === 'vaild' &&
                validationPhone(e.target.value) === 'vaild',
            );

            customerPhone(e.target.value);
          }}
          onChange={(e) => {
            if (!number.test(e.target.value) && !dash.test(e.target.value))
              e.target.value = '';
          }}
        />
        <input type="text" placeholder="이메일(선택)" />
      </CustomerInfoForm>
    </InfoItemForm>
  );
}

export default CustomerInfo;
