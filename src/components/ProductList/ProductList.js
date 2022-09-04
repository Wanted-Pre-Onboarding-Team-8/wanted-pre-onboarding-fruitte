// fix: 임시로 disable
/* eslint-disable */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { PRODUCT_API_URL } from '../../consts';
import ProductListItem from './ProductListItem/ProductListItem';

// fix: 상품들의 id가 고유하지 않아, key 판별을 위해 임시로 생성.
let temp = 0;

function ProductList() {
  const [currentProductListData, setCurrentProductListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(30);

  useEffect(() => {
    const getCurrentProductListData = async () => {
      const response = await axios.get(PRODUCT_API_URL, {
        params: {
          page: currentPage,
          size: itemsPerPage,
        },
      });

      setCurrentProductListData(response.data);
    };

    getCurrentProductListData();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {currentProductListData?.products?.map((product) => {
        temp += 1;
        return <ProductListItem key={temp} product={product}></ProductListItem>;
      })}
    </div>
  );
}

export default ProductList;
