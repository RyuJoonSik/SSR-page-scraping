import React, { useContext, useEffect, useState } from 'react';
import './CheckButton.scss';
import { Context } from '../Store/Store';

function CheckButton() {
  const [state, setState] = useState(true);
  const { dispatch } = useContext(Context);

  const onClick = () => {
    dispatch({ type: 'CHECK_ALL_PRODUCTS', payload: state });
    setState((prev) => !prev);
  };

  return (
    <button className="all-check" onClick={onClick}>
      All check
    </button>
  );
}

export default CheckButton;
