import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './Product.scss';
import ProductContent from '../ProductContent/ProductContent';

Product.propTypes = {
  product: PropTypes.object,
  idx: PropTypes.number,
};

function Product({ product, idx }) {
  console.log('Product render');
  const onClick = useCallback(async (e) => {
    try {
      const title = e.target.title;

      navigator.clipboard.writeText(title).then(
        () => alert('제품명이 복사 성공'),
        () => alert('제품명 복사 실패')
      );
    } catch (err) {
      console.error(err);
    }
  }, []);

  const { title } = product;

  return (
    <article data-testid="product" className="product">
      <h2 data-testid="product-title" title={title} onClick={onClick} className="product__title">
        {title}
      </h2>
      <ProductContent product={product} idx={idx} />
    </article>
  );
}

export default React.memo(Product, (prev, next) => prev.product.isChecked === next.product.isChecked);
