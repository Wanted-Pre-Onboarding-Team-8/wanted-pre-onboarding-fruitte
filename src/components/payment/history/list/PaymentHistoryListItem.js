import { Fragment } from 'react';
import styled from 'styled-components';

const PaymentHistoryListItem = () => {
  const historyList = [
    {
      orderNumber: '2022090402116',
      name: '거창 오가네체리자두 3kg한 상자',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20200715/236fbfcdd9cf2.jpg',
      subName: '3kg',
      price: 29000,
      stock: 1,
    },
    {
      orderNumber: '2022090402117',
      name: '국산 강원도 생 아스파라거스 1kg 2kg',
      imageUrl:
        'https://user-images.githubusercontent.com/54323527/188268088-acebe58d-5f74-4fb9-899a-bef0963899f4.jpg',
      subName: '2kg',
      price: 40000,
      stock: 2,
    },
    {
      orderNumber: '2022090402118',
      name: '전통 재래식 메주로 띄운 수제 된장 1kg 2kg',
      imageUrl:
        'https://user-images.githubusercontent.com/54323527/188268099-b5f742fb-44db-4036-9616-ac76a2339bd8.jpg',
      subName: '3kg',
      price: 56000,
      stock: 2,
    },
    {
      orderNumber: '2022090402119',
      name: '100% 제주감귤주스 (15팩 x 1box)',
      imageUrl: 'https://cdn.imweb.me/thumbnail/20220521/69f390486a3e3.png',
      subName: '5박스',
      price: 112500,
      stock: 1,
    },
  ];
  return (
    <List>
      <h2>주문 조회</h2>
      {historyList.map((el) => (
        <Fragment>
          <header>
            <span>주문번호</span>
            <span>{el.orderNumber}</span>
          </header>
          <div className="contents">
            <img src={el.imageUrl} alt="" />
            <ul>
              <li>{el.name}</li>
              <li>{el.subName}</li>
              <li>
                {el.price}원 / {el.stock}개
              </li>
            </ul>
          </div>
        </Fragment>
      ))}
    </List>
  );
};

export default PaymentHistoryListItem;

const List = styled.li`
  display: flex;
  flex-direction: column;

  header {
    flex-direction: row;
    padding: 30px 0px 20px;

    span {
      padding-right: 20px;
    }
    span:nth-of-type(2) {
      color: #4c9c2e;
    }
  }
  .contents {
    height: 130px;
    box-shadow: 0 5px 5px #eee;
    padding: 20px;
    display: flex;
    flex-direction: row;

    img {
      width: 90px;
      height: 90px;
      margin-right: 15px;
    }

    li:nth-of-type(1) {
      font-size: 16px;
      font-weight: 600;
    }
    li:nth-of-type(2) {
      padding: 20px 0px 20px;
      font-size: 13px;
      color: #9a9b9c;
    }
    li:nth-of-type(3) {
      font-size: 14px;
    }
  }
`;
