import React from 'react';
import PropTypes from 'prop-types';
import { downloadIMGs } from '../../js/scrap';
import './ProductIMGButton.scss';

ProductIMGButton.propTypes = {
  title: PropTypes.string,
  imgURLs: PropTypes.arrayOf(PropTypes.string),
};

function ProductIMGButton({ title, imgURLs }) {
  console.log('ProductIMGButton render');
  return (
    <button
      data-testid="product-imgs"
      onClick={() => downloadIMGs(title, imgURLs, 1000)}
      className="product-img-download"
    >
      📷
    </button>
  );
}

export default React.memo(ProductIMGButton);
