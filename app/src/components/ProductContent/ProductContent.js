import React from 'react';
import PropTypes from 'prop-types';
import './ProductContent.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductStar from '../ProductStar/ProductStar';
import ProductReviewCount from '../ProductReviewCount/ProductReviewCount';
import ProductState from '../ProductState/ProductState';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductSpecialPrice from '../ProductSpecialPrice/ProductSpecialPrice';
import ProductLinkButton from '../ProductLinkButton/ProductLinkButton';
import ProductIMGButton from '../ProductIMGButton/ProductIMGButton';
import ProductSUPButton from '../ProductSUPButton/ProductSUPButton';
import ProductCheckButton from '../ProductCheckButton/ProductCheckButton';
import ProductContentRow from '../ProductContentRow/ProductContentRow';

ProductContent.propTypes = {
  product: PropTypes.object,
  idx: PropTypes.number,
};

function ProductContent({ product, idx }) {
  console.log('ProductContent render');
  const { title, URL, supplementTable, isChecked, imgURLs, star, review, state, originalPrice, specialPrice } = product;

  return (
    <div className="product-content">
      <ProductImage imgURL={imgURLs[0]} />
      <ProductContentRow>
        <ProductStar star={star} />
        <ProductReviewCount review={review} />
        <ProductState state={state} />
      </ProductContentRow>
      <ProductContentRow>
        <ProductPrice originalPrice={originalPrice} />
        {specialPrice && <ProductSpecialPrice specialPrice={specialPrice} />}
      </ProductContentRow>
      <ProductContentRow>
        <ProductLinkButton URL={URL} />
        <ProductIMGButton title={title} imgURLs={imgURLs} />
        {supplementTable && <ProductSUPButton title={title} supplementTable={supplementTable} />}
        <ProductCheckButton isChecked={isChecked} idx={idx} />
      </ProductContentRow>
    </div>
  );
}

export default React.memo(ProductContent, (prev, next) => prev.product.isChecked === next.product.isChecked);
