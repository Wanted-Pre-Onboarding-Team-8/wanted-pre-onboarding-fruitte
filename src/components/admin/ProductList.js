import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PRODUCT_EXPOSURE_API_URL } from '../../consts';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    axios
      .get('/products', {
        params: {
          page: 0,
          size: 10,
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

  return <ul>{productList?.products?.map(renderListItem)}</ul>;
};

export default ProductList;
