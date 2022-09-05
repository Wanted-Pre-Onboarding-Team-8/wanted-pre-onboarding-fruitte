import { rest } from 'msw';
import {
  PRODUCTS_PAGE,
  PRODUCT_ADD_PAGE,
  PRODUCT_API_URL,
  PRODUCT_EXPOSURE_API_URL,
} from '../consts';
import data from './data.json';

const PRODUCT_LIST_LENGTH = 500;
const PRODUCT_LIST_DIVIDER = 8;
const productList = Array.from({ length: PRODUCT_LIST_LENGTH }).map(
  (_, index) => {
    return {
      ...data.productList[index % PRODUCT_LIST_DIVIDER],
      id: String(index + 1),
    };
  },
);
const productDetail = [...data.productDetail];

export const handlers = [
  rest.get(PRODUCT_API_URL, (req, res, ctx) => {
    const exposureStatus = ['all', 'on', 'off'];
    const page = Number(req.url.searchParams.get('page'));
    const size = Number(req.url.searchParams.get('size'));
    const exposure = req.url.searchParams.get('exposure')
      ? req.url.searchParams.get('exposure')
      : exposureStatus[2];
    const newProducts = [...productList].filter((product) => {
      if (exposure === exposureStatus[0]) {
        return product.isExposure === true;
      } else if (exposure === exposureStatus[1]) {
        return product.isExposure === false;
      } else {
        return product;
      }
    });
    const totalPage = Math.ceil(newProducts.length / size);
    const targetProductsList = newProducts.splice(page * size, size);

    const responseData = {
      totalPage,
      size,
      currPage: page,
      products: targetProductsList,
    };

    return res(ctx.status(200), ctx.json(responseData));
  }),

  rest.put(`${PRODUCT_EXPOSURE_API_URL}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const targetProduct = productList.find((product) => product.id === id);
    targetProduct.isExposure = !targetProduct.isExposure;
    return res(ctx.status(201));
  }),

  rest.get(`${PRODUCTS_PAGE}?id=`, async (req, res, ctx) => {
    const currentProductId = req.url.searchParams.get('id');
    const productDetailById = productDetail.find(
      (product) => product.id === currentProductId,
    );
    return res(ctx.json(productDetailById));
  }),

  rest.get(PRODUCTS_PAGE, async (_, res, ctx) => {
    return res(ctx.json(productList));
  }),

  rest.post(PRODUCT_ADD_PAGE, async (req, res, ctx) => {
    const newProduct = await req.json();

    await productList.push({ ...newProduct, id: req.id });
    return res(ctx.status(201));
  }),

  rest.delete(`${PRODUCTS_PAGE}?id=`, async (req, res, ctx) => {
    const DELETE_NUMBER = 1;

    const currentProductId = req.url.searchParams.get('id');
    const deleteProductId = productList.findIndex(
      (product) => product.id === currentProductId,
    );

    productList.splice(deleteProductId, DELETE_NUMBER);

    return res(ctx.status(201));
  }),
];
