import React, { useState } from 'react';

const Pagination = ({ pageCount, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const maxButtons = 6; // 3 before + current + 3 after

    let startPage = Math.max(1, currentPage - 3);
    let endPage = Math.min(pageCount, currentPage + 3);

    if (endPage - startPage + 1 < maxButtons) {
      if (startPage > 1) {
        startPage -= maxButtons - (endPage - startPage + 1);
        startPage = Math.max(1, startPage);
      } else if (endPage < pageCount) {
        endPage += maxButtons - (endPage - startPage + 1);
        endPage = Math.min(pageCount, endPage);
      }
    }

    if (startPage > 1) {
      buttons.push(<button key="start" onClick={() => handlePageClick(1)}>1</button>);
      if (startPage > 2) {
        buttons.push(<span key="start-ellipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < pageCount) {
      if (endPage < pageCount - 1) {
        buttons.push(<span key="end-ellipsis">...</span>);
      }
      buttons.push(<button key="end" onClick={() => handlePageClick(pageCount)}>{pageCount}</button>);
    }

    return buttons;
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageClick(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
        Previous
      </button>
      {renderPageButtons()}
      <button onClick={() => handlePageClick(Math.min(pageCount, currentPage + 1))} disabled={currentPage === pageCount}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
