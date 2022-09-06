import { useState } from 'react';
import styled from 'styled-components';

export default function Dropdown({ options, pick, setPick, setTotalPrice }) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive((prev) => !prev);
  };

  const onClickOption = (el) => () => {
    const temp = [...pick];
    let remove = temp.find((item) => item.option_title === el.name);
    if (remove) {
      alert('이미 담은 상품입니다');
      return;
    }
    if (el.is_sold_out) {
      alert('품절된 상품입니다');
      return;
    }
    toggleDropdown();
    toggleDropdown();
    setPick([
      ...pick,
      {
        option_title: el.name,
        option_price: el.price,
        option_amount: 1,
      },
    ]);
    setTotalPrice((prev) => prev + el.price);
  };
  return (
    <Drop onClick={toggleDropdown} className={isActive ? 'isActive' : ''}>
      <div>필수 선택 (필수)</div>
      <div>▼</div>
      {isActive && (
        <Option>
          <ul>
            {options.map((el, index) => (
              <li
                key={index}
                onClick={onClickOption(el)}
                className={el.is_sold_out ? 'isSoldOut' : ''}
              >
                <p>{el.name}</p>
                <p>{el.price}원</p>
              </li>
            ))}
          </ul>
        </Option>
      )}
    </Drop>
  );
}

const Drop = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #aaaaaa;
  padding: 00px 20px;
  color: black;
  cursor: pointer;
  &.isActive {
    border: 1px solid #666;
    color: black;
  }
`;

const Option = styled.div`
  position: absolute;

  width: 100%;
  left: 0px;
  top: 50px;
  background: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  z-index: 2;
  ul {
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 18px 20px;
      cursor: pointer;
      :hover {
        color: black;
        background-color: rgba(206, 206, 206, 0.3);
      }
      p:nth-of-type(1) {
        margin-bottom: 5px;
      }
      p:nth-of-type(2) {
        font-weight: 700;
      }
    }
    li.isSoldOut {
      cursor: not-allowed;
    }
    li:not(:last-of-type) {
      border-bottom: 1px solid #cecece;
    }
  }
`;
