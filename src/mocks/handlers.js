import { rest } from 'msw';
import { PRODUCTS_PAGE, PRODUCT_ADD_PAGE } from '../consts';
import data from './data.json';

const productList = [...data.productList];
const productDetail = [...data.productDetail];

export const handlers = [
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
