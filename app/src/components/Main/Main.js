import React, { useContext } from 'react';
import './Main.scss';
import ProductList from '../ProductList/ProductList';
import PageController from '../PageController/PageController';
import { Context } from '../Store/Store';

function Main() {
  // console.log('Main render');
  const {
    state: { page, curPageNum, keyword, lastPageNum },
  } = useContext(Context);

  return (
    <>
      {page[curPageNum] ? (
        <main data-testid="main" className="main">
          <h1 data-testid="main-title" className="main__title">
            😎{keyword}｜📄{lastPageNum}
          </h1>
          <ProductList />
          <PageController />
        </main>
      ) : null}
    </>
  );
}

export default Main;
