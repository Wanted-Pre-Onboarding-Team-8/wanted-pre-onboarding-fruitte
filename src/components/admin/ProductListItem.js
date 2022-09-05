import React from 'react';
import styled from 'styled-components';

const ProductListItem = ({
  listItem,
  handleClickDelete,
  handleClickProductExposure,
}) => {
  const { id, name, imageUrl, isExposure } = listItem;
  return (
    <List>
      <div>
        <img src={imageUrl} alt={`${name} 이미지`} />
        <span>{name}</span>
      </div>
      <Buttons>
        <button onClick={() => handleClickProductExposure(id)}>
          {isExposure ? '노출 OFF' : '노출 ON'}
        </button>
        <button onClick={() => handleClickDelete(id)}>삭제</button>
      </Buttons>
    </List>
  );
};

export default ProductListItem;

const List = styled.li`
  width: 100%;
  height: 70px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 5px #eee;

  img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    border-radius: 10px;
  }
`;

const Buttons = styled.div`
  padding: 0 10px;
  > button {
    margin: 0 5px;
  }
`;
