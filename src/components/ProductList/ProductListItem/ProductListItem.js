// fix: 임시로 disable
/* eslint-disable */

import {
  ProductListItemWrapper,
  Image,
  Title,
  Price,
  SaledPrice,
  ReviewCount,
} from './ProductListItemStyled';
import {
  SaleTag,
  BestTag,
  SoldoutTag,
  PendingTag,
  MDTag,
} from '../../Common/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

function ProductListItem(props) {
  console.log(props.product);
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
            ).toLocaleString('ko-KR')}
        </SaledPrice>
        {props.product.salePercent && (
          <Price>{props.product.price.toLocaleString('ko-KR')}</Price>
        )}
      </div>
      <div style={{ margin: '12px' }}>
        {props.product.salePercent && <SaleTag></SaleTag>}
        {props.product.isMDSelect && <MDTag></MDTag>}
        {!props.product.stock && <SoldoutTag></SoldoutTag>}
        {!props.product.isOnSale && <PendingTag></PendingTag>}
        {props.product.sellCount >= 10 && <BestTag></BestTag>}
      </div>
      <div style={{ display: 'flex', margin: '12px', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
        <ReviewCount>{props.product.reviewCount}</ReviewCount>
      </div>
    </ProductListItemWrapper>
  );
}

export default ProductListItem;
