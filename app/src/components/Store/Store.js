import React, { useState, useRef, useReducer, createContext, useCallback, useMemo } from 'react';
import {
  getPage,
  getLastPageNum,
  getProductURLs,
  getProductInfo,
  hasResult,
  hasProhibitedIngredients,
  downloadExcel,
} from '../../js/scrap';
import prohibitedIngredients from '../../js/ingredients';
import myReduce from '../../js/myReduce';

const Context = createContext({});

function Store({ children }) {
  // console.log('Store render');
  const [state, dispatch] = useReducer(myReduce, {
    input: '',
    keyword: '',
    curPageNum: 0,
    lastPageNum: 0,
    page: {},
  });

  const addProduct = async (page, pageNum) => {
    try {
      const products = [];

      for (let URL of getProductURLs(page)) {
        const product = await getProductInfo(URL);
        const content = product.title + product.overview;

        if (!hasProhibitedIngredients(prohibitedIngredients, content)) {
          products.push(product);
          dispatch({ type: 'SET_PAGE_PRODUCTS', payload: { pageNum, products } });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onExportExcel = async () => {
    try {
      await downloadExcel(state.page[state.curPageNum]);
    } catch (err) {
      console.error(err);
    }
  };

  const onMove = async (to, newNum) => {
    let num;

    switch (to) {
      case 'first':
        num = 1;
        break;
      case 'prev':
        num = state.curPageNum - 1;
        break;
      case 'next':
        num = state.curPageNum + 1;
        break;
      case 'last':
        num = state.lastPageNum;
        break;
      case 'num':
        num = newNum;
        break;

      default:
    }

    if (num < 1 || num > state.lastPageNum) {
      return;
    }

    if (!state.page[num]) {
      const page = await getPage(`https://kr.iherb.com/search?kw=${state.keyword}&p=${num}`);

      addProduct(page, num);
    }

    dispatch({ type: 'SET_CURRENT_PAGE_NUM', payload: num });
  };

  const onChange = useCallback(({ target: { value } }) => {
    dispatch({ type: 'INPUT_VALUE', payload: value });
  }, []);

  const onSearch = useCallback(
    async ({ type, key }) => {
      if (type !== 'click' && (type !== 'keydown' || key !== 'Enter')) {
        return;
      }

      const { input } = state;

      if (input === '') {
        alert('키워드를 입력 해 주세요.');

        return;
      }

      const page = await getPage(`https://kr.iherb.com/search?kw=${input}`);

      if (!hasResult(page)) {
        alert('결과가 없습니다.');

        return;
      }

      dispatch({ type: 'SET_KEYWORD', payload: input });
      dispatch({ type: 'SET_LAST_PAGE_NUM', payload: getLastPageNum(page) });
      addProduct(page, 1);
      dispatch({ type: 'SET_CURRENT_PAGE_NUM', payload: 1 });
    },
    [state]
  );

  return (
    <Context.Provider value={{ state, dispatch, onChange, onSearch, onExportExcel, onMove }}>
      {children}
    </Context.Provider>
  );
}

export { Context };
export default Store;
