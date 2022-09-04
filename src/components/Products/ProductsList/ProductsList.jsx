import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PRODUCT_API_URL } from '../../../consts';
import ProductListItem from './ProductsListItem/ProductsListItem';
import Pagination from '../../Common/Pagination';

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
      const productListData = await axios.get(PRODUCT_API_URL, {
        params: {
          page: currentPage,
          size: ITEMS_PER_PAGE,
          exposure: 'on',
        },
      });
      setCurrentProductListData(productListData.data);
    };

    getCurrentProductListData();
  }, [currentPage]);

  return (
    <Wrapper>
      <ProductListItemWrapper>
        {currentProductListData?.products?.map((product) => {
          return (
            <ProductListItem
              key={product.id}
              product={product}
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
