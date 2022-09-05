import { OrderInfoForm, InfoItemForm } from './infoStyle';

function OrderInfo() {
  return (
    <InfoItemForm>
      <OrderInfoForm>
        <h2>주문 상품 정보</h2>
        <div className="wrap">
          <div className="pic">
            <img
              src="https://user-images.githubusercontent.com/54323527/188268108-b85a8878-0139-4415-96db-1d1fac66967f.jpg"
              alt="#"
            />
          </div>
          <div className="desc">
            <span>국산 강원도 화천 생 아스파라거스 1kg 2kg</span>
            <p>
              <em>필수</em> 1kg - 1개
            </p>
            <span>20,000원</span>
          </div>
        </div>
        <div className="payment-deliver">
          <div className="payment">배송비 </div>
          <span>4,000원</span>
        </div>
      </OrderInfoForm>
    </InfoItemForm>
  );
}

export default OrderInfo;
