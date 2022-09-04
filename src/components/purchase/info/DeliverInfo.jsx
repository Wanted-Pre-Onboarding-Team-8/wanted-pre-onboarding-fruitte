import {
  DeliverAddress,
  DeliverInfoForm,
  DeliverMemo,
  InfoItemForm,
} from './infoStyle';
import { useRef, useState } from 'react';
import Modal from './Modal';

function DeliverInfo({ isValidation, customerData }) {
  const customerName = useRef(null);
  const customerPhone = useRef(null);
  const zonecodeInput = useRef(null);
  const addressInput = useRef(null);
  const [formVaildation, setFormVaildation] = useState({
    name: 'idle',
    phone: 'idle',
    address: 'idle',
  });
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };

  const NAME_REGEX = /^[가-힣]{2,4}$/;
  const PHONE_REGEX = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const ADDRESS_REGEX =
    /^((?!상가)[가-힣])+(\d{1,5}|(\d{1,5}[가-힣,]+\d{1,5})?)(읍|면|동|가)$/;

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
  const validationAddress = (address) => {
    if (address.length === 0) return 'idle';
    if (ADDRESS_REGEX.test(address)) return 'vaild';

    return 'invaild';
  };

  const DROPDOWN_DATA = [
    '배송메모를 선택해주세요.',
    '배송전에 미리 연락 바랍니다.',
    '부재시 경비실에 맡겨주세요.',
    '부재시 문자나 전화를 남겨주세요.',
    '직접 입력',
  ];
  const deliverMemoInput = useRef(null);
  const number = /[0-9]/g;
  const dash = /[-]/g;

  const onComplete = (zonecode, address) => {
    zonecodeInput.current.value = zonecode;
    addressInput.current.value = address;
  };

  return (
    <InfoItemForm>
      <h2>배송 정보</h2>
      <DeliverInfoForm>
        <div className="customer-info">
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked === true) {
                customerName.current.value = customerData.name;
                customerPhone.current.value = customerData.phone;
              } else {
                customerName.current.value = '';
                customerPhone.current.value = '';
              }
            }}
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
                formVaildation.address,
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
                formVaildation.address,
            );
          }}
          onChange={(e) => {
            if (!number.test(e.target.value) && !dash.test(e.target.value))
              e.target.value = '';
          }}
        />
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
                formVaildation.phone,
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
          onChange={(e) =>
            e.target.value === '4'
              ? (deliverMemoInput.current.style.display = 'block')
              : (deliverMemoInput.current.style.display = 'none')
          }
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
