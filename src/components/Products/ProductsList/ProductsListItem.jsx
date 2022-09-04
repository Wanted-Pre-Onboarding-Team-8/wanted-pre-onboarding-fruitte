import { useNavigate } from 'react-router-dom';
import {
  ProductListItemWrapper,
  Image,
  Title,
  Price,
  SaledPrice,
  ReviewCount,
  TagsWrapper,
  ReviewWrapper,
} from './ProductsListItemStyled';
import {
  SaleTag,
  BestTag,
  SoldoutTag,
  PendingTag,
  MDTag,
} from '../../common/Tag/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PRODUCTS_PAGE } from '../../../consts/routes';

function ProductListItem({
  id,
  imageUrl,
  name,
  price,
  salePercent,
  isMDSelect,
  stock,
  isOnSale,
  sellCount,
  reviewCount,
}) {
  const KO_KR = 'ko-KR';
  const SALED_PRICE =
    '₩ ' + (price * (100 - salePercent) * 0.01).toLocaleString(KO_KR);
  const navigate = useNavigate();

  const handleClickProductListItem = () => {
    navigate(PRODUCTS_PAGE + `/${id}`);
  };

  return (
    <ProductListItemWrapper onClick={handleClickProductListItem}>
      <Image imageUrl={imageUrl}></Image>
      <Title>{name}</Title>
      <div>
        <SaledPrice>{SALED_PRICE}</SaledPrice>
        {salePercent && <Price>{price.toLocaleString(KO_KR)}</Price>}
      </div>
      <TagsWrapper>
        {salePercent && <SaleTag />}
        {isMDSelect && <MDTag />}
        {!stock && <SoldoutTag />}
        {!isOnSale && <PendingTag />}
        {sellCount >= 10 && <BestTag />}
      </TagsWrapper>
      <ReviewWrapper>
        <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
        <ReviewCount>{reviewCount}</ReviewCount>
      </ReviewWrapper>
    </ProductListItemWrapper>
  );
}

export default ProductListItem;
