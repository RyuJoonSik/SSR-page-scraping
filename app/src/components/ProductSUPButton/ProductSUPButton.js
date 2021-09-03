import React from 'react';
import PropTypes from 'prop-types';
import { downloadSupplement } from '../../js/scrap';
import './ProductSUPButton.scss';

ProductSUPButton.propTypes = {
  title: PropTypes.string,
  supplementTable: PropTypes.object,
};

function ProductSUPButton({ title, supplementTable }) {
  console.log('ProductSUPButton render');

  return (
    <button
      data-testid="product-supplement-table"
      onClick={() => downloadSupplement(title, supplementTable)}
      className="product-supplement-table"
    >
      💊
    </button>
  );
}

export default React.memo(ProductSUPButton);
