import styled from 'styled-components';
import { useState } from 'react';

export default function SelectItem({
  item,
  setTotalPrice,
  setPick,
  pick,
  index,
}) {
  const [option, setOption] = useState({
    amount: 1,
    price: item.option_price,
  });

  const temp = [...pick];

  const onClickDown = () => {
    if (option.amount === 1) {
      alert('최소 주문 수량은 1개입니다');
      return;
    }
    temp[index].option_amount = temp[index].option_amount - 1;
    setPick(temp);
    setOption({
      amount: option.amount - 1,
      price: Number(item.option_price) * (option.amount - 1),
    });
    setTotalPrice((prev) => prev - Number(item.option_price));
  };

  const onClickUp = () => {
    temp[index].option_amount = temp[index].option_amount + 1;
    setPick(temp);
    setOption({
      amount: option.amount + 1,
      price: Number(item.option_price) * (option.amount + 1),
    });
    setTotalPrice((prev) => prev + Number(item.option_price));
  };

  const onClickDelete = (item) => {
    setPick((prev) =>
      prev.filter((el) => el.option_title !== item.option_title),
    );
    setTotalPrice((prev) => prev - Number(item.option_price) * option.amount);
  };

  return (
    <Wrap>
      <Selected>
        <SelectedOption>{item.option_title}</SelectedOption>
        <ButtonWrap>
          <button onClick={onClickDown}>
            <span className="down"></span>
          </button>
          <input type="number" value={option.amount} readOnly />
          <button onClick={onClickUp}>
            <span className="up"></span>
          </button>
        </ButtonWrap>
        <TotalPrice>{option.price}원</TotalPrice>
        <DeleteOption
          onClick={() => {
            onClickDelete(item);
          }}
        ></DeleteOption>
      </Selected>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: rgba(51, 51, 51, 0.05);
  padding: 15px;
  margin-bottom: 10px;
`;

const Selected = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 1.5fr 0.5fr;
  align-items: center;
`;

const SelectedOption = styled.div``;

const DeleteOption = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
  ::before,
  ::after {
    content: '';
    width: 20px;
    height: 1px;
    position: absolute;
    left: 50%;
    top: 50%;
    background: #333;
  }
  ::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  ::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 90px;
  height: 30px;
  border: 1px solid #cecece;
  input {
    width: 30px;
    text-align: center;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  button {
    height: 30px;
    width: 30px;
    font-size: 25px;
    position: relative;
    span {
      ::after {
        content: '';
        width: 10px;
        height: 1px;
        background: #666;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    span.up {
      ::before {
        content: '';
        width: 1px;
        height: 10px;
        background: #666;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

const TotalPrice = styled.div``;
