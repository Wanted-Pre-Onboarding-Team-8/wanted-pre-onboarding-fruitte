import { useNavigate } from 'react-router-dom';
import {
  ProductListItemWrapper,
  Image,
  Title,
  Price,
  SaledPrice,
  ReviewCount,
} from './ProductsListItemStyled';
import {
  SaleTag,
  BestTag,
  SoldoutTag,
  PendingTag,
  MDTag,
} from '../../../Common/Tag/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PRODUCTS_PAGE } from '../../../../consts/routes';

function ProductListItem({ product }) {
  const KO_KR = 'ko-KR';
  const navigate = useNavigate();

  const handleClickProductListItem = () => {
    navigate(PRODUCTS_PAGE + `/${product.id}`);
  };

  return (
    <ProductListItemWrapper onClick={handleClickProductListItem}>
      <Image imageUrl={product.imageUrl}></Image>
      <Title>{product.name}</Title>
      <div>
        <SaledPrice>
          {'₩ ' +
            (product.price * (100 - product.salePercent) * 0.01).toLocaleString(
              KO_KR,
            )}
        </SaledPrice>
        {product.salePercent && (
          <Price>{product.price.toLocaleString(KO_KR)}</Price>
        )}
      </div>
      <div style={{ margin: '12px' }}>
        {product.salePercent && <SaleTag />}
        {product.isMDSelect && <MDTag />}
        {!product.stock && <SoldoutTag />}
        {!product.isOnSale && <PendingTag />}
        {product.sellCount >= 10 && <BestTag />}
      </div>
      <div style={{ display: 'flex', margin: '12px', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
        <ReviewCount>{product.reviewCount}</ReviewCount>
      </div>
    </ProductListItemWrapper>
  );
}

export default ProductListItem;
