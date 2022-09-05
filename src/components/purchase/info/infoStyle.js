import styled from 'styled-components';

export const InfoForm = styled.div`
  width: 40%;
  margin-right: 60px;
`;

export const InfoItemForm = styled.div`
  width: 520px;
  padding: 24px;
  background: #eee;
  margin-bottom: 20px;

  h2 {
    width: 100%;
    font: bold 22px/1 'malgun gothic';
    margin-bottom: 20px;
    margin-top: 0px;
  }
`;

export const CustomerInfoForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  input {
    width: 49%;
    margin-bottom: 10px;
    padding: 8px 10px;
    border: 1px solid #aaa;

    &:last-of-type {
      width: 100%;
      margin-bottom: 0px;
    }
  }
  > span {
    width: 49%;
    font: 10px/1 'malgun gothic';
    color: orangered;
    margin-bottom: 10px;
    text-align: left;
  }
`;

export const OrderInfoForm = styled.div`
  div.wrap {
    width: 100%;
    border: 1px solid #aaa;
    padding: 20px;

    &::after {
      content: '';
      display: block;
      clear: both;
    }
    div.pic {
      float: left;
      width: 80px;
      height: 80px;
      margin-right: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    div.desc {
      padding: 5px 0px;

      > span {
        font: 14px/1 'malgun gothic';
      }
      p {
        font: 12px/1 'malgun gothic';
        color: #777;
        margin-top: 10px;
        margin-bottom: 10px;

        em {
          border: 1px solid #777;
        }
      }
    }
  }
  div.payment-deliver {
    width: 100%;
    border: 1px solid #aaa;
    border-top: none;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-content: center;

    div.payment {
      text-align: center;
      margin-right: 5px;
      font: 12px/1.4 'malgun gothic';
    }
    > span {
      text-align: center;
      font: bold 14px/1 'malgun gothic';
    }
  }
`;

export const DeliverInfoForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div.customer-info {
    width: 100%;
    margin-bottom: 10px;

    input[type='checkbox'] {
      margin-right: 7px;
    }
    span {
      font: 12px/1 'malgun gothic';
    }
  }
  input[type='text'],
  input[type='number'] {
    border: 1px solid #aaa;
    width: 49%;
    padding: 8px 10px;
    margin-bottom: 7px;
  }
  > span {
    width: 49%;
    font: 10px/1 'malgun gothic';
    color: orangered;
    margin-bottom: 10px;
    text-align: left;
  }
`;
export const DeliverAddress = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  input {
    padding: 8px 10px;
    margin-bottom: 7px;
    width: 100%;
    border: 1px solid #aaa;

    &: nth-of-type(1) {
      width: 30%;
      margin-right: 10px;
    }
  }
  button {
    padding: 8px 20px;
    margin-bottom: 7px;
    border: 1px solid #aaa;
  }
`;
export const DeliverMemo = styled.div`
  h3 {
    font: 14px/1 'malgun gothic';
    margin-bottom: 10px;
  }
  select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #aaa;
  }
  div.custom-memo {
    display: none;

    input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #aaa;
    }
  }
`;
