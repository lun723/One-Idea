import React from 'react';
import { Button } from '../Button';
import type { PaginationProps } from "./Pagination.types";

const Pagination: React.FC<PaginationProps> = ({ nextUrl, previousUrl, handleNextPage, handlePreviousPage, }) => {
  return (
    <div className="flex justify-between gap-4 m-6">
      <Button onClick={handlePreviousPage} disabled={!previousUrl} label="上一頁" />
      <Button onClick={handleNextPage} disabled={!nextUrl} label="下一頁"/>
    </div>
  );
};

export default Pagination;