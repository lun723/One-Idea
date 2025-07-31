import React from 'react';

interface PaginationProps {
  nextUrl: string | null;
  previousUrl: string | null;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  nextUrl,
  previousUrl,
  handleNextPage,
  handlePreviousPage,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        onClick={handlePreviousPage}
        disabled={!previousUrl}
        className={`px-4 py-2 rounded-lg text-white font-semibold transition-colors ${
          previousUrl ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        上一頁
      </button>
      <button
        onClick={handleNextPage}
        disabled={!nextUrl}
        className={`px-4 py-2 rounded-lg text-white font-semibold transition-colors ${
          nextUrl ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        下一頁
      </button>
    </div>
  );
};

export default Pagination;