import React from 'react';
import styled from 'styled-components';

const Pagination = ({ currentPage, totalPage, numberOfItems, setPage }) => {
  if (totalPage === 0 || currentPage < 0) return null;

  const prevButtonDisabled =
    Math.floor(Number(currentPage / numberOfItems)) <= 0;
  const nextButtonDisabled =
    Math.floor(Number(currentPage / numberOfItems) + 1) * numberOfItems >
    totalPage - 1;

  const createPage = () => {
    const startPageNumber =
      Math.ceil((currentPage + 1) / numberOfItems) * numberOfItems -
      numberOfItems;
    const pages = Array(numberOfItems)
      .fill('')
      .map((_, idx) => {
        if (idx + 1 + startPageNumber > totalPage) return 0;
        return idx + 1 + startPageNumber;
      })
      .filter((item) => item);

    return pages;
  };

  const handleClickPage = (page) => {
    setPage(page - 1);
  };

  const handleClickPrev = () => {
    if (Math.floor(Number(currentPage / numberOfItems)) <= 0) return;
    setPage(
      Math.floor(Number(currentPage / numberOfItems) - 1) * numberOfItems,
    );
  };
  const handleClickNext = () => {
    if (
      Math.floor(Number(currentPage / numberOfItems) + 1) * numberOfItems >
      totalPage - 1
    )
      return;
    setPage(
      Math.floor(Number(currentPage / numberOfItems) + 1) * numberOfItems,
    );
  };

  const renderPageItem = createPage().map((item, idx) => {
    return (
      <PageButton
        isActive={item - 1 === currentPage}
        onClick={() => handleClickPage(item)}
        key={idx}
      >
        {item}
      </PageButton>
    );
  });

  return (
    <div>
      <ActionButton onClick={handleClickPrev} disabled={prevButtonDisabled}>
        &#60; Prev
      </ActionButton>
      {renderPageItem}
      <ActionButton onClick={handleClickNext} disabled={nextButtonDisabled}>
        Next &#62;
      </ActionButton>
    </div>
  );
};

export default Pagination;

const Button = styled.button`
  height: 32px;
  border: 2px solid skyblue;
  border-radius: 50%;
  background: transparent;
  color: gray;
  font-weight: 600;
  
  &:hover {
    background-color: #E2E5E6;
  }
`;

const PageButton = styled(Button)`
  width: 32px;
  background: ${({ isActive }) => isActive && 'skyblue'} !important;
  margin: 5px;
`;

const ActionButton = styled(Button)`
  width: auto;
  border-radius: 16px;
  :disabled {
    cursor: not-allowed;
  }
`;
