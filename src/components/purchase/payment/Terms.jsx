import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAYMENT_RESULT_PAGE } from '../../../consts';
import { PaymentButton, TermsForm, PaymentItemForm } from './paymentStyle';

function Terms({ isValidation, isVaild }) {
  const [termsAgree, setTermsAgree] = useState({ info: false, payment: false });
  const navigate = useNavigate();
  const handlePaymentButtonClick = () => {
    if (isVaild) {
      navigate(PAYMENT_RESULT_PAGE, {
        state: {
          orderNumber: '111',
          name: '거창 오가네체리자두 3kg한 상자',
          imageUrl:
            'https://user-images.githubusercontent.com/54323527/188268108-b85a8878-0139-4415-96db-1d1fac66967f.jpg',
          subContents: {
            name: '3kg',
            price: 29000,
            stock: 1,
          },
        },
      });
    }
  };

  return (
    <PaymentItemForm>
      <h2>약관동의</h2>
      <TermsForm>
        <input
          type="checkbox"
          onChange={(e) => {
            isValidation(e.target.checked);
            setTermsAgree({
              ...termsAgree,
              info: e.target.checked,
              payment: e.target.checked,
            });
          }}
          checked={termsAgree.info && termsAgree.payment}
        />
        <label htmlFor="agree-all">전체 동의</label>
        <input
          type="checkbox"
          onChange={(e) => {
            setTermsAgree({ ...termsAgree, info: e.target.checked });
          }}
          checked={termsAgree.info}
        />
        <label htmlFor="agree-one">개인정보 수집 및 이용 동의</label>
        <input
          type="checkbox"
          onChange={(e) => {
            setTermsAgree({ ...termsAgree, payment: e.target.checked });
          }}
          checked={termsAgree.payment}
        />
        <label htmlFor="agree-two">구매조건 확인 및 결제진행에 동의</label>
      </TermsForm>
      <PaymentButton onClick={() => handlePaymentButtonClick()}>
        결제하기
      </PaymentButton>
    </PaymentItemForm>
  );
}

export default Terms;
