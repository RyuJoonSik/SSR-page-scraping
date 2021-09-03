import React from 'react';
import PropTypes from 'prop-types';
import './ProductPrice.scss';

ProductPrice.propTypes = {
  originalPrice: PropTypes.string,
};

function ProductPrice({ originalPrice }) {
  console.log('ProductPrice render');

  return (
    <b data-testid="product-price" className="product-price">
      {originalPrice}
    </b>
  );
}

export default React.memo(ProductPrice);
