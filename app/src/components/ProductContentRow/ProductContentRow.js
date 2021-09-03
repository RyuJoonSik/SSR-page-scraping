import React from 'react';
import PropTypes from 'prop-types';
import './ProductContentRow.scss';

ProductContentRow.propTypes = {
  product: PropTypes.any,
};

function ProductContentRow({ children }) {
  console.log('ProductContentRow render');
  return (
    <div data-testid="product-content-row" className="product-content-row">
      {children}
    </div>
  );
}

export default ProductContentRow;
