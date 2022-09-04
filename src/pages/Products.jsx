import styled from 'styled-components';
import ProductsList from '../components/ProductsList/ProductsList';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Products() {
  return (
    <Wrapper>
      <ProductsList></ProductsList>
    </Wrapper>
  );
}

export default Products;
