import React, { useContext } from 'react';
import './PageController.scss';
import Pagination from '../Pagination/Pagination';
import Scroll from '../Scroll/Scroll';
import CheckButton from '../CheckButton/CheckButton';
import ExcelButton from '../ExcelButton/ExcelButton';
import { Context } from '../Store/Store';

function PageController() {
  const {
    state: { keyword },
  } = useContext(Context);

  return (
    <section data-testid="controller" className="controller">
      <h3 className="controller__title">Controller</h3>
      <div className="controller__wrap">
        <b className="controller__keyword">{keyword}</b>
        <Pagination />
        <Scroll />
        <CheckButton />
        <ExcelButton />
      </div>
    </section>
  );
}

export default PageController;
