# - Assginment #2

## ๐ ํ๋ก์ ํธ ๋ชฉํ

#### Fruitte ์คํ ์ด ๋ฆฌ๋ด์ผ ๊ฐ๋ฐ     

<br/>

## ๐จโ๐ฉโ๐งโ๐ง ํ์ ์๊ฐ ๋ฐ ์ญํ 

| ์ด๋ฆ   |                                 ์ญํ                                   |
| ------ | :-------------------------------------------------------------------: |
| ๊น์ฌ๋ฏผ | ํ๋ก์ ํธ ์ด๊ธฐ ์ธํ, Mock ๋ฐ์ดํฐ ์ธํ, ์ ์ฒด ๋ฆฌ๋ทฐ ๋ฐ ๋ฆฌํฉํ ๋ง |
| ์ด์ง์ฐ |            ๊ด๋ฆฌ์ ์ํ ๊ด๋ฆฌ ํ์ด์ง ํ์ด์ง ๊ตฌ์ฑ, ๊ณตํต ์ปดํฌ๋ํธ ์ ์            |
| ์ฅํ์ฑ |                    ์ํ ๊ฒฐ์  ํ์ด์ง                    |
| ์ ์น์ค |                ๋ฉ์ธ ์ํ ํ์ด์ง, GNB ๋ค๋น๊ฒ์ด์                 |
| ๊น๊ธฐ๋ฒ |                         ๊ฒฐ์  ๋ด์ญ ํ์ด์ง, ๊ฒฐ์  ๊ด๋ จ api mock ์ ์                                   |
| ๋ฐฐ๋ฒ์ |       ๊ด๋ฆฌ์ ์ํ ์ญ์  , ๊ด๋ฆฌ์ ํ์ด์ง ์คํ์ผ๋ง      |
| ์ต์ฌํ |            ์ํ ์์ธ ํ์ด์ง            |


</br>


## โ ํ๋ก์ ํธ ๋งํฌ
<h3><a href='http://pre-onboarding-wanted-deploy-test-metamong.s3-website.ap-northeast-2.amazonaws.com/'>๋ฐ๋ชจ ์ฌ์ดํธ ๋ณด๋ฌ๊ฐ๊ธฐ</a></h3>

</br>

## โ ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ
```
> npm i
> npm run start
```

</br>

## โจ ํ๋ก์ ํธ ๊ตฌํ ๊ธฐ๋ฅ

์ฌ์ฉ์ ๊ธฐ๋ฅ

- ์คํ ์ด ์ํ๋ชฉ๋ก ์กฐํ(30๊ฐ ์ด์์ ์ํ๋ชฉ๋ก, 10๊ฐ ๋จ์์ ํ์ด์ง๋ค์ด์)
- ์คํ ์ด ์ํ ์ฃผ๋ฌธ ๋ด์ญํ์ธ (์ฃผ๋ฌธ ๋ฒํธ, ์ํ๋ช, ์ฃผ๋ฌธ ์๋, ์ฃผ๋ฌธ ์ต์)

<img src='https://user-images.githubusercontent.com/54323527/188350789-fdb31640-8031-44c2-9cd9-df042c028ec8.png' />
<img src='https://user-images.githubusercontent.com/54323527/188350803-ef9116af-0f02-4b69-a1db-bfd066cc36c6.png' />

<br/>

๊ด๋ฆฌ์ ๊ธฐ๋ฅ

- ์ํ ๋ธ์ถ ์ฌ๋ถ ์กฐ์  ๊ธฐ๋ฅ(์ํ์ ์ ์ง๋์ด ์๋, ๋ธ์ถ ์ฌ๋ถ๋ฅผ ์์ ํ๋ ๊ธฐ๋ฅ)
- ์ํ ์ญ์  ๊ธฐ๋ฅ

<img src='https://user-images.githubusercontent.com/54323527/188350800-1f9173cd-708f-4627-9364-ab7b7277e665.png'/>

</br>

## โจ ์ฌ์ฉ ์คํ
- react
- styled-components (style)
- react-router-dom (route)
- react-daum-postcode (address)
- msw (api mock)  

</br>

## โจ ํ๋ก์ ํธ ๊ตฌ์กฐ

```
src
 โฃ components
 โ โฃ Products
 โ โ โฃ Landing
 โ โ โ โฃ Landing.jsx
 โ โ โ โ LandingStyled.js
 โ โ โ ProductsList
 โ โ โ โฃ ProductsList.jsx
 โ โ โ โฃ ProductsListItem.jsx
 โ โ โ โ ProductsListItemStyled.js
 โ โฃ admin
 โ โ โฃ Layout.js
 โ โ โฃ Nav.js
 โ โ โฃ ProductList.js
 โ โ โฃ ProductListItem.js
 โ โ โ index.js
 โ โฃ common
 โ โ โฃ Tag
 โ โ โ โฃ Tag.js
 โ โ โ โ TagStyled.js
 โ โ โ Pagination.js
 โ โ purchase
 โ โ โฃ info
 โ โ โ โฃ CustomerInfo.jsx
 โ โ โ โฃ DeliverInfo.jsx
 โ โ โ โฃ Info.jsx
 โ โ โ โฃ Modal.jsx
 โ โ โ โฃ OrderInfo.jsx
 โ โ โ โฃ UseOutsiderClick.js
 โ โ โ โ infoStyle.js
 โ โ โฃ payment
 โ โ โ โฃ OrderSummary.jsx
 โ โ โ โฃ Payment.jsx
 โ โ โ โฃ PaymentMethod.jsx
 โ โ โ โฃ Terms.jsx
 โ โ โ โ paymentStyle.js
 โ โ โฃ purchaseStyle.js
 โ โ โ validations.js
 โฃ consts
 โ โฃ api.js
 โ โฃ index.js
 โ โ routes.js
 โฃ mocks
 โ โฃ browser.js
 โ โฃ data.json
 โ โ handlers.js
 โฃ pages
 โ โฃ Admin.js
 โ โฃ Products.jsx
 โ โ Purchase.js
 โฃ styles
 โ โฃ GlobalStyle.jsx
 โ โฃ _color.scss
 โ โ _reset.scss
 โฃ App.js
 โ index.js
```

</br>

## ๐ 8ํ ์ปจ๋ฒค์ ๋ฐ ํ์๋ก

- [Convention-commit](https://www.notion.so/6a7522b6be6348d3b9e8e522c0c76053)
- [Convention-etc](https://www.notion.so/2022-09-02-49fdc592a25e44b29cccfc8f1cb38828)
- [etc](https://www.notion.so/2022-09-03-a5618261bb7b4eeca2f86493daf8a49e)
