import styled, { keyframes } from 'styled-components';

const SlideUp = keyframes`
  from {
    opacity:0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ProductListItemWrapper = styled.div`
  width: 280px;
  aspect-ratio: 4 / 5;
  border: 1px solid #e2e5e6;
  border-radius: 16px;
  margin: 8px;
  cursor: pointer;
  transition: all 0.2s;
  animation: ${SlideUp} 0.5s;

  &:hover {
    opacity: 0.75;
    -webkit-box-shadow: 4px 3px 15px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 4px 3px 15px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 75%;
  border-radius: 16px 16px 0 0;
  background: url(${(props) => props.imageUrl}) center/cover no-repeat;
`;

export const Title = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  margin: 12px;
  white-space: nowrap;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SaledPrice = styled.div`
  display: inline-block;
  margin: 0 12px 0 12px;
  font-weight: 900;
`;

export const Price = styled.div`
  font-size: 0.9em;
  display: inline-block;
  color: grey;
  text-decoration: line-through;
`;

export const TagsWrapper = styled.div`
  margin: 12px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  margin: 12px;
  align-items: center;
`;

export const ReviewCount = styled.div`
  margin-left: 4px;
  font-size: 0.85em;
`;
