// fix: 임시로 disable
/* eslint-disable */

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
} from '../../Common/Tag/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

function ProductListItem(props) {
  const KO_KR = 'ko-KR'
  
  return (
    <ProductListItemWrapper>
      <Image imageUrl={props.product.imageUrl}></Image>
      <Title>{props.product.name}</Title>
      <div>
        <SaledPrice>
          {'₩ ' +
            (
              props.product.price *
              (100 - props.product.salePercent) *
              0.01
            ).toLocaleString(KO_KR)}
        </SaledPrice>
        {props.product.salePercent && (
          <Price>{props.product.price.toLocaleString(KO_KR)}</Price>
        )}
      </div>
      <div style={{ margin: '12px' }}>
        {props.product.salePercent && <SaleTag />}
        {props.product.isMDSelect && <MDTag />}
        {!props.product.stock && <SoldoutTag />}
        {!props.product.isOnSale && <PendingTag />}
        {props.product.sellCount >= 10 && <BestTag />}
      </div>
      <div style={{ display: 'flex', margin: '12px', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
        <ReviewCount>{props.product.reviewCount}</ReviewCount>
      </div>
    </ProductListItemWrapper>
  );
}

export default ProductListItem;
