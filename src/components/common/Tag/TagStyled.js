import styled from 'styled-components';

export const Tag = styled.div`
  display: inline-block;
  border-radius: 6px;
  font-size: 0.7em;
  font-weight: 600;
  margin-right: 2px;
  padding: 4px;
  text-align: center;
`;

export const Sale = styled(Tag)`
  background-color: #e94560;
  color: white;
  font-weight: bold;
`;

export const Best = styled(Tag)`
  border: 1px solid #e94560;
  color: #e94560;
  font-weight: bold;
  text-decoration: underline;
`;

export const Soldout = styled(Tag)`
  color: gray;
`;

export const Pending = styled(Tag)`
  background-color: gray;
  color: white;
`;

export const MD = styled(Tag)``;
