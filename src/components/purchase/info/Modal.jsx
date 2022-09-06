import styled from 'styled-components';
import UseOutsiderClick from './UseOutsiderClick';
import { useRef } from 'react';
import DaumPostCode from 'react-daum-postcode';

function Modal({ onClose, onComplete }) {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  UseOutsiderClick(modalRef, handleClose);

  const handleComplete = (data) => {
    let addr = '';
    let extraAddr = '';

    if (data.userSelectedType === 'R') {
      addr = data.roadAddress;
    } else {
      addr = data.jibunAddress;
    }

    if (data.userSelectedType === 'R') {
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '' && data.apartment === 'Y') {
        extraAddr +=
          extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
      }
      if (extraAddr !== '') {
        extraAddr = ' (' + extraAddr + ')';
      }

      handleClose();

      onComplete(data.zonecode, addr);
    }
  };

  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <DaumPostCode onComplete={handleComplete} />;
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;
const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

export default Modal;
