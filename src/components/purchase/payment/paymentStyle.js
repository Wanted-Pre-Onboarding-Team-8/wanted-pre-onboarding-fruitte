import styled from 'styled-components';

export const PaymentForm = styled.div`
  width: 30%;

  > div {
    &:last-of-type {
      padding: 0px;

      h2 {
        padding-left: 24px;
        padding-top: 24px;
      }
      > div {
        padding-left: 24px;
      }
    }
  }
`;

export const PaymentItemForm = styled.div`
  width: 350px;
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

export const PaymentSummaryForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    font: 12px/1 'malgun gothic';
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }

  div.payment-name {
    width: 50%;

    p {
      color: #777;
    }
  }
  div.payment-value {
    width: 50%;
    margin-bottom: 20px;

    p {
      text-align: right;
    }
  }
  div.payment-total {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    p {
      padding-top: 20px;
      display: block;
      width: 50%;

      span {
        display: block;
        width: 100%;
        text-align: right;
        font: bold 14px/1 'malgun gothic';
        color: #4c9c2e;
      }
    }
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #aaa;
    }
  }
`;

export const PaymentMethodForm = styled.div`
  padding-bottom: 10px;

  input {
    margin-right: 5px;
  }
  label {
    margin-right: 50px;
  }
`;

export const TermsForm = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  label {
    width: 85%;
    margin-bottom: 20px;
    font-size: 16px;
  }
  input {
    width: 5%;
    margin-right: 5px;
    margin-bottom: 20px;

    &:nth-of-type(2),
    &:nth-of-type(3) {
      position: relative;
      margin-left: 20px;

      &::before {
        content: '';
        display: block;
        width: 7px;
        height: 7px;
        border-bottom: 1px solid #aaa;
        border-left: 1px solid #aaa;
        position: absolute;
        left: -13px;
      }
    }
  }
`;
export const PaymentButton = styled.button`
  width: 100%;
  background: #4c9c2e;
  padding: 15px 20px;
  font: bold 14px/1 'malgun gothic';
  color: #fff;
`;
