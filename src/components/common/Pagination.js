import React from 'react';
import styled from 'styled-components';

const Pagination = ({
  currentPage,
  totalPage,
  numberOfItems,
  setCurrentPage,
}) => {
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
    setCurrentPage(page - 1);
  };

  const handleClickPreviousButton = () => {
    if (Math.floor(Number(currentPage / numberOfItems)) <= 0) return;
    setCurrentPage(
      Math.floor(Number(currentPage / numberOfItems) - 1) * numberOfItems,
    );
  };
  const handleClickNextButton = () => {
    if (
      Math.floor(Number(currentPage / numberOfItems) + 1) * numberOfItems >
      totalPage - 1
    )
      return;
    setCurrentPage(
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
      <ActionButton
        onClick={handleClickPreviousButton}
        disabled={prevButtonDisabled}
      >
        &#60;
      </ActionButton>
      {renderPageItem}
      <ActionButton
        onClick={handleClickNextButton}
        disabled={nextButtonDisabled}
      >
        &#62;
      </ActionButton>
    </div>
  );
};

export default Pagination;

const PageButton = styled.button`
  background: ${({ isActive }) => isActive && 'skyblue'};
  margin: 5px;
`;

const ActionButton = styled.button`
  :disabled {
    cursor: not-allowed;
  }
`;
