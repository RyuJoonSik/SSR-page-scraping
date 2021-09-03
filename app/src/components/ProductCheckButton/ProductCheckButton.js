import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Store/Store';
import './ProductCheckButton.scss';

ProductCheckButton.propTypes = {
  idx: PropTypes.number,
  isChecked: PropTypes.bool,
};

function ProductCheckButton({ idx, isChecked }) {
  console.log('ProductCheckButton render');

  const { dispatch } = useContext(Context);

  return (
    <button
      data-testid="product-check-state"
      onClick={() => dispatch({ type: 'CHECK_PRODUCT', payload: idx })}
      className="product-check-state"
    >
      {isChecked ? '☑️' : '🟦'}
    </button>
  );
}

export default React.memo(ProductCheckButton, (prev, next) => prev.isChecked === next.isChecked);
