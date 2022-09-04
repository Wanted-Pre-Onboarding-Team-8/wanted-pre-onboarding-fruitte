import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PRODUCT_API_URL } from '../../../consts';
import ProductListItem from './ProductsListItem';
import Pagination from '../../common/Pagination';

const ProductListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Products() {
  const INITIAL_PAGE_NUMBER = 0;
  const INITIAL_PAGINATION_NUMBER = 10;
  const ITEMS_PER_PAGE = 30;
  const [currentProductListData, setCurrentProductListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);

  useEffect(() => {
    const getCurrentProductListData = async () => {
      const {data: productList} = await axios.get(PRODUCT_API_URL, {
        params: {
          page: currentPage,
          size: ITEMS_PER_PAGE,
          exposure: 'on',
        },
      });
      setCurrentProductListData(productList);
    };

    getCurrentProductListData();
  }, [currentPage]);

  return (
    <Wrapper>
      <ProductListItemWrapper>
        {currentProductListData?.products?.map((product) => {
          const {id, imageUrl, name, price, salePercent, isMDSelect, stock, isOnSale, sellCount, reviewCount} = product;
          return (
            <ProductListItem
              key={product.id}
              id={id}
              imageUrl={imageUrl}
              name={name}
              price={price}
              salePercent={salePercent}
              isMDSelect={isMDSelect}
              stock={stock}
              isOnSale={isOnSale}
              sellCount={sellCount}
              reviewCount={reviewCount}
            ></ProductListItem>
          );
        })}
      </ProductListItemWrapper>
      <Pagination
        currentPage={currentPage}
        totalPage={currentProductListData.totalPage}
        numberOfItems={INITIAL_PAGINATION_NUMBER}
        setPage={setCurrentPage}
      ></Pagination>
    </Wrapper>
  );
}

export default Products;
