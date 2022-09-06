import styled from 'styled-components';
import ProductsList from '../components/Products/ProductsList/ProductsList';
import Landing from '../components/Products/Landing/Landing.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Products() {
  return (
    <Wrapper>
      <Landing />
      <ProductsList />
    </Wrapper>
  );
}

export default Products;
