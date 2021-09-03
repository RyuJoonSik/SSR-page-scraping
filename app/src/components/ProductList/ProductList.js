import React, { useContext } from 'react';
import './ProductList.scss';
import Product from '../Product/Product';
import { Context } from '../Store/Store';

function ProductList() {
  console.log('ProductList render');
  const {
    state: { page, curPageNum },
  } = useContext(Context);

  return (
    <div data-testid="product-list" className="product-list">
      {page[curPageNum].map((product, idx) => (
        <Product product={product} key={product.id} idx={idx} />
      ))}
    </div>
  );
}

export default ProductList;
