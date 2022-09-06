# - Assginment #2

## 📕 프로젝트 목표

#### Fruitte 스토어 리뉴얼 개발     

<br/>

## 👨‍👩‍👧‍👧 팀원 소개 및 역할

| 이름   |                                 역할                                  |
| ------ | :-------------------------------------------------------------------: |
| 김재민 | 프로젝트 초기 세팅, Mock 데이터 세팅, 전체 리뷰 및 리팩토링 |
| 이지우 |            관리자 상품 관리 페이지 페이지 구성, 공통 컴포넌트 제작            |
| 장현성 |                    상품 결제 페이지                    |
| 신승준 |                메인 상품 페이지, GNB 네비게이션                 |
| 김기범 |                         결제 내역 페이지, 결제 관련 api mock 제작                                   |
| 배범수 |       관리자 상품 삭제 , 관리자 페이지 스타일링      |
| 최재혁 |            상품 상세 페이지            |


</br>


## ✋ 프로젝트 링크
<h3><a href='http://pre-onboarding-wanted-deploy-test-metamong.s3-website.ap-northeast-2.amazonaws.com/'>데모 사이트 보러가기</a></h3>

</br>

## ✋ 프로젝트 실행 방법
```
> npm i
> npm run start
```

</br>

## ✨ 프로젝트 구현 기능

사용자 기능

- 스토어 상품목록 조회(30개 이상의 상품목록, 10개 단위의 페이지네이션)
- 스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)

<img src='https://user-images.githubusercontent.com/54323527/188350789-fdb31640-8031-44c2-9cd9-df042c028ec8.png' />
<img src='https://user-images.githubusercontent.com/54323527/188350803-ef9116af-0f02-4b69-a1db-bfd066cc36c6.png' />

<br/>

관리자 기능

- 상품 노출 여부 조정 기능(상품은 유지되어 있되, 노출 여부를 수정하는 기능)
- 상품 삭제 기능

<img src='https://user-images.githubusercontent.com/54323527/188350800-1f9173cd-708f-4627-9364-ab7b7277e665.png'/>

</br>

## ✨ 사용 스택
- react
- styled-components (style)
- react-router-dom (route)
- react-daum-postcode (address)
- msw (api mock)  

</br>

## ✨ 프로젝트 구조

```
src
 ┣ components
 ┃ ┣ Products
 ┃ ┃ ┣ Landing
 ┃ ┃ ┃ ┣ Landing.jsx
 ┃ ┃ ┃ ┗ LandingStyled.js
 ┃ ┃ ┗ ProductsList
 ┃ ┃ ┃ ┣ ProductsList.jsx
 ┃ ┃ ┃ ┣ ProductsListItem.jsx
 ┃ ┃ ┃ ┗ ProductsListItemStyled.js
 ┃ ┣ admin
 ┃ ┃ ┣ Layout.js
 ┃ ┃ ┣ Nav.js
 ┃ ┃ ┣ ProductList.js
 ┃ ┃ ┣ ProductListItem.js
 ┃ ┃ ┗ index.js
 ┃ ┣ common
 ┃ ┃ ┣ Tag
 ┃ ┃ ┃ ┣ Tag.js
 ┃ ┃ ┃ ┗ TagStyled.js
 ┃ ┃ ┗ Pagination.js
 ┃ ┗ purchase
 ┃ ┃ ┣ info
 ┃ ┃ ┃ ┣ CustomerInfo.jsx
 ┃ ┃ ┃ ┣ DeliverInfo.jsx
 ┃ ┃ ┃ ┣ Info.jsx
 ┃ ┃ ┃ ┣ Modal.jsx
 ┃ ┃ ┃ ┣ OrderInfo.jsx
 ┃ ┃ ┃ ┣ UseOutsiderClick.js
 ┃ ┃ ┃ ┗ infoStyle.js
 ┃ ┃ ┣ payment
 ┃ ┃ ┃ ┣ OrderSummary.jsx
 ┃ ┃ ┃ ┣ Payment.jsx
 ┃ ┃ ┃ ┣ PaymentMethod.jsx
 ┃ ┃ ┃ ┣ Terms.jsx
 ┃ ┃ ┃ ┗ paymentStyle.js
 ┃ ┃ ┣ purchaseStyle.js
 ┃ ┃ ┗ validations.js
 ┣ consts
 ┃ ┣ api.js
 ┃ ┣ index.js
 ┃ ┗ routes.js
 ┣ mocks
 ┃ ┣ browser.js
 ┃ ┣ data.json
 ┃ ┗ handlers.js
 ┣ pages
 ┃ ┣ Admin.js
 ┃ ┣ Products.jsx
 ┃ ┗ Purchase.js
 ┣ styles
 ┃ ┣ GlobalStyle.jsx
 ┃ ┣ _color.scss
 ┃ ┗ _reset.scss
 ┣ App.js
 ┗ index.js
```

</br>

## 📖 8팀 컨벤션 및 회의록

- [Convention-commit](https://www.notion.so/6a7522b6be6348d3b9e8e522c0c76053)
- [Convention-etc](https://www.notion.so/2022-09-02-49fdc592a25e44b29cccfc8f1cb38828)
- [etc](https://www.notion.so/2022-09-03-a5618261bb7b4eeca2f86493daf8a49e)
