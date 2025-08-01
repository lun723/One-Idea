import React from 'react';
import type { PaginationProps } from "./Pagination.types";
import { STYLES } from './Pagination.styles';

const Pagination: React.FC<PaginationProps> = ({ nextUrl, previousUrl, handleNextPage, handlePreviousPage }) => {
  return (
    <div className={STYLES.pagination.container}>
      <a onClick={handlePreviousPage} className={`${STYLES.pagination.linkWrapper} ${previousUrl ? STYLES.pagination.enabledLink : STYLES.pagination.disabledLink}`}>
        <div className={STYLES.pagination.linkContent}>
          <svg className={STYLES.pagination.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className={`${STYLES.pagination.linkText} ${previousUrl ? 'text-blue-900' : 'text-gray-400'}`}>上一頁</span>
        </div>
        {previousUrl && (
          <span className={`${STYLES.pagination.underline} ${STYLES.pagination.previousUnderline}`} />
        )}
      </a>
      <a onClick={handleNextPage} className={`${STYLES.pagination.linkWrapper} ${nextUrl ? STYLES.pagination.enabledLink : STYLES.pagination.disabledLink}`}>
        <div className={STYLES.pagination.linkContent}>
          <span className={`${STYLES.pagination.linkText} ${nextUrl ? 'text-blue-900' : 'text-gray-400'}`}>下一頁</span>
          <svg className={STYLES.pagination.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {nextUrl && (
          <span className={`${STYLES.pagination.underline} ${STYLES.pagination.nextUnderline}`} />
        )}
      </a>
    </div>
  );
};

export default Pagination;