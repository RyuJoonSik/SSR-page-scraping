import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './PaginationButton.scss';
import { Context } from '../Store/Store';

PaginationButton.propTypes = {
  children: PropTypes.any,
};

function PaginationButton({ moveTo, children, pageNum }) {
  const { onMove } = useContext(Context);
  const className = 'pagination-button pagination-button--' + moveTo;

  return (
    <button data-testid="pagination-button" onClick={() => onMove(moveTo, pageNum)} className={className}>
      {children}
    </button>
  );
}

export default PaginationButton;
