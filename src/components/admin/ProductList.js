import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PRODUCT_EXPOSURE_API_URL } from '../../consts';
import Pagination from '../common/Pagination';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getProductList();
  }, [page]);

  const getProductList = () => {
    axios
      .get('/products', {
        params: {
          page,
          size: 10,
          exposure: 'all',
        },
      })
      .then((res) => {
        setProductList(res.data);
      });
  };

  const handleClickProductExposure = (id) => {
    axios.put(`${PRODUCT_EXPOSURE_API_URL}/${id}`).then((res) => {
      getProductList();
    });
  };

  const handleClickDelete = (id) => {};

  const renderListItem = (item) => {
    return (
      <ProductListItem
        key={item.id}
        listItem={item}
        handleClickProductExposure={handleClickProductExposure}
        handleClickDelete={handleClickDelete}
      />
    );
  };

  return (
    <ListWrapper>
      <ul>{productList?.products?.map(renderListItem)}</ul>
      <Pagination
        numberOfItems={10}
        setPage={setPage}
        currentPage={page}
        totalPage={productList.totalPage}
      />
    </ListWrapper>
  );
};

export default ProductList;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > ul {
    width: 100%;
  }
`;
