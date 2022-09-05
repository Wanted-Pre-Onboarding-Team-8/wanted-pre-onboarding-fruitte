import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './DetailPage.styled';
import Dropdown from './DropDown';
import SelectItem from './SelectItem';
import CustomButton from './CustomButton/CustomButton';
import { getUrl } from './utils/getUrl';
import axios from 'axios';
import { PRODUCT_DETAIL_URL } from '../../consts';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  // const { product_id } = useParams();
  const [data, setData] = useState({});
  const [pick, setPick] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    axios.get(`${PRODUCT_DETAIL_URL}?id=2`).then((res) => setData(res.data));
  }, []);

  const onClickToCart = () => {
    if (totalPrice === 0) {
      alert('필수 옵션을 선택해주세요');
      return;
    }
    alert('장바구니에 담겼습니다');
  };

  const onClickToBuy = () => {
    if (totalPrice === 0) {
      alert('필수 옵션을 선택해주세요');
      return;
    }
  };

  return (
    <S.Wrap>
      <S.NowPage>
        <Link to="/products">HOME</Link>
        <Link to="/products">FRUIT STORE</Link>
      </S.NowPage>
      <S.ProductWrap>
        <S.ImageWrap>
          <img src={data.imageUrl}></img>
        </S.ImageWrap>
        <S.InfoWrap>
          <S.TitleWrap>
            <S.Title>
              <S.Name>{data?.name}</S.Name>
              <S.LikeAndShare>
                <S.Like
                  onClick={() => {
                    alert('로그인 후 이용 가능한 서비스입니다');
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </S.Like>
                <S.Share
                  onClick={() => {
                    alert(`${getUrl(window.location.href).content}`);
                  }}
                >
                  <FontAwesomeIcon icon={faShareNodes} />
                </S.Share>
              </S.LikeAndShare>
            </S.Title>
            <S.Description>{data?.content} </S.Description>
          </S.TitleWrap>
          <S.DeliveryWrap>
            <S.Row>
              <S.Label>원산지</S.Label>
              <S.Content>{data?.originPlace}</S.Content>
            </S.Row>
            <S.Row>
              <S.Label>배송 방법</S.Label>
              <S.Content>{data?.deliveryMethod}</S.Content>
            </S.Row>
            <S.Row>
              <S.Label>배송비</S.Label>
              <S.Content>{data?.deliveryPrice}원</S.Content>
            </S.Row>
            <S.Row>
              <S.Label>배송 안내</S.Label>
              <S.Content>제주, 도서지역 추가 4,000원</S.Content>
            </S.Row>
            <S.Row>
              <S.Label>필수 선택</S.Label>
            </S.Row>
            <Dropdown
              options={data?.productOptions}
              pick={pick}
              setPick={setPick}
              setTotalPrice={setTotalPrice}
            />
          </S.DeliveryWrap>
          {pick.length > 0 &&
            pick.map((item, index) => (
              <SelectItem
                key={item.id}
                item={item}
                pick={pick}
                index={index}
                setPick={setPick}
                setTotalPrice={setTotalPrice}
              />
            ))}
          <S.TotalPriceWrap>
            <S.TotalPriceLabel>총 상품 금액</S.TotalPriceLabel>
            <S.TotalPrice>{totalPrice.toLocaleString()}원</S.TotalPrice>
          </S.TotalPriceWrap>
          <S.ButtonWrap>
            <CustomButton onClick={onClickToCart} name="장바구니" />
            <CustomButton onClick={onClickToBuy} name="구매하기" theme="main" />
          </S.ButtonWrap>
        </S.InfoWrap>
      </S.ProductWrap>
    </S.Wrap>
  );
};
export default ProductDetail;
