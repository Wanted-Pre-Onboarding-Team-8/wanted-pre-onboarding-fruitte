import { CustomerInfoForm, InfoItemForm } from './infoStyle';
import { useState } from 'react';
import {
  validationName,
  validationPhone,
  validationPhoneEnter,
} from '../validations';

function CustomerInfo({ isValidation, customerName, customerPhone }) {
  const [formVaildation, setFormVaildation] = useState({
    name: 'idle',
    phone: 'idle',
  });

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
            if (validationPhoneEnter(e.target.value)) e.target.value = '';
          }}
        />
        <span>
          {formVaildation.name === 'invaild' && '이름을 정확히 입력해주세요'}
        </span>
        <span>
          {formVaildation.phone === 'invaild' &&
            '전화번호를 정확히 입력해주세요'}
        </span>
        <input type="text" placeholder="이메일(선택)" />
      </CustomerInfoForm>
    </InfoItemForm>
  );
}

export default CustomerInfo;
