import styled from 'styled-components';

export const Wrap = styled.div``;

export const NowPage = styled.div`
  width: 100%;
  margin: 20px 0px;
  display: flex;
  a {
    cursor: pointer;
  }
  a:not(:last-of-type) {
    ::after {
      content: '>';
      margin: 0px 8px;
    }
  }
`;

export const ProductWrap = styled.div`
  display: flex;
  grid-gap: 100px;
`;

export const ImageWrap = styled.section`
  width: 50%;
  height: 600px;
`;

export const InfoWrap = styled.section`
  width: 50%;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Name = styled.h1`
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
  padding-right: 40px;
`;

export const LikeAndShare = styled.div`
  display: flex;
`;

export const Like = styled.div`
  margin-right: 10px;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
`;
export const Share = styled.div`
  cursor: pointer;
  font-size: 25px;
`;

export const Description = styled.div`
  color: #aaaaaa;
`;

export const TagAndPriceWrap = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #cecece;
`;

export const Price = styled.span`
  color: black;
  font-size: 23px;
  font-weight: 800;
  line-height: 1.5;
`;

export const DeliveryWrap = styled.div`
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const Label = styled.div`
  width: 120px;
  color: #666;
`;

export const Content = styled.div`
  width: calc(100% -10px);
`;
export const TotalPriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
  padding: 30px 0px;
  margin-top: 20px;
  border-top: 1px solid black;
`;
export const TotalPriceLabel = styled.div`
  color: black;
`;

export const TotalPrice = styled.div``;

export const ButtonWrap = styled.div`
  display: flex;
  grid-gap: 10px;
`;
