import { useRef, useState } from 'react';
import {
  DeliverAddress,
  DeliverInfoForm,
  DeliverMemo,
  InfoItemForm,
} from './infoStyle';
import {
  validationAddress,
  validationName,
  validationPhone,
  validationPhoneEnter,
} from '../validations';
import Modal from './Modal';

function DeliverInfo({ isValidation, customerData }) {
  const customerName = useRef(null);
  const customerPhone = useRef(null);
  const zonecodeInput = useRef(null);
  const addressInput = useRef(null);
  const deliverMemoInput = useRef(null);
  const [formVaildation, setFormVaildation] = useState({
    name: 'idle',
    phone: 'idle',
    address: 'idle',
  });
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  const DROPDOWN_DATA = [
    '배송메모를 선택해주세요.',
    '배송전에 미리 연락 바랍니다.',
    '부재시 경비실에 맡겨주세요.',
    '부재시 문자나 전화를 남겨주세요.',
    '직접 입력',
  ];
  const onCustomMemoInput = (idx) => {
    if (parseInt(idx) === DROPDOWN_DATA.length - 1) {
      deliverMemoInput.current.style.display = 'block';
    } else {
      deliverMemoInput.current.style.display = 'none';
    }
  };

  const onComplete = (zonecode, address) => {
    zonecodeInput.current.value = zonecode;
    addressInput.current.value = address;
  };
  const setSameCustomerData = (name, phone, checked) => {
    if (checked) {
      customerName.current.value = name;
      customerPhone.current.value = phone;
    } else {
      customerName.current.value = '';
      customerPhone.current.value = '';
    }
  };

  return (
    <InfoItemForm>
      <h2>배송 정보</h2>
      <DeliverInfoForm>
        <div className="customer-info">
          <input
            type="checkbox"
            onChange={(e) =>
              setSameCustomerData(
                customerData.name,
                customerData.phone,
                e.target.checked,
              )
            }
          />
          <span>주문자 정보와 동일</span>
        </div>
        <input
          type="text"
          placeholder="수령인"
          ref={customerName}
          onBlur={(e) => {
            setFormVaildation({
              ...formVaildation,
              name: validationName(e.target.value),
            });
            isValidation(
              validationName(e.target.value) === 'vaild' &&
                formVaildation.phone === 'vaild' &&
                formVaildation.address === 'vaild',
            );
          }}
        />
        <input
          type="text"
          placeholder="연락처"
          ref={customerPhone}
          onBlur={(e) => {
            setFormVaildation({
              ...formVaildation,
              phone: validationPhone(e.target.value),
            });
            isValidation(
              validationPhone(e.target.value) === 'vaild' &&
                formVaildation.name === 'vaild' &&
                formVaildation.address === 'vaild',
            );
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
      </DeliverInfoForm>
      <DeliverAddress>
        <input type="text" placeholder="우편번호" ref={zonecodeInput} />
        <button onClick={onClickButton}>주소찾기</button>
        {isOpen && (
          <Modal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            onComplete={onComplete}
          />
        )}
        <input
          type="text"
          placeholder="주소"
          ref={addressInput}
          onBlur={(e) => {
            setFormVaildation({
              ...formVaildation,
              address: validationPhone(e.target.value),
            });
            isValidation(
              validationAddress(e.target.value) === 'vaild' &&
                formVaildation.name === 'vaild' &&
                formVaildation.phone === 'vaild',
            );
          }}
        />
        <input type="text" placeholder="상세주소" />
      </DeliverAddress>
      <DeliverMemo>
        <h3>배송메모</h3>
        <select
          name="deliverMemo"
          id="deliverMemo"
          onChange={(e) => onCustomMemoInput(e.target.value)}
        >
          {DROPDOWN_DATA.map((data, idx) => {
            return (
              <option key={idx} value={idx}>
                {data}
              </option>
            );
          })}
        </select>
        <div ref={deliverMemoInput} className="custom-memo">
          <input type="text" placeholder="배송메모를 입력해 주세요" />
        </div>
      </DeliverMemo>
    </InfoItemForm>
  );
}

export default DeliverInfo;
