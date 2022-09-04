import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentHistoryListItem from './PaymentHistoryListItem';

const PaymentHistoryList = () => {
  const [paymentHistoryList, setPaymentHistoryList] = useState([]);

  useEffect(() => {
    getPaymentHistoryList();
  }, []);

  const getPaymentHistoryList = () => {
    axios
      .get('/products/payment/history', {
        params: {
          page: 0,
          size: 5,
        },
      })
      .then((res) => {
        setPaymentHistoryList(res.data);
      });
  };

  // const ListItem = (item) => {
  //   return <PaymentHistoryListItem key={item.id} listItem={item} />;
  // };

  console.log('왜?', paymentHistoryList);

  return (
    <Wrapper>
      {/* {paymentHistoryList?.historyList?.map((el) => ( */}
      <PaymentHistoryListItem itemlist={paymentHistoryList} />
      {/* ))} */}
      {/* {paymentHistoryList?.historyList?.map(ListItem)} */}
    </Wrapper>
  );
};

export default PaymentHistoryList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  /* ul {
    white-space: pre-line;
  } */
`;
