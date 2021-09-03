import React from 'react';
import PropTypes from 'prop-types';
import './Scroll.scss';

Scroll.propTypes = {};

function Scroll(props) {
  const toTop = () => {
    window.scroll(0, 0);
  };

  const toBottom = () => {
    const Y = document.body.scrollHeight - window.innerHeight;

    window.scroll(0, Y);
  };

  return (
    <div className="controller-scroll">
      <button title="TOP" onClick={toTop} className="controller-scroll__btn">
        TOP
      </button>
      <button title="BOTTOM" onClick={toBottom} className="controller-scroll__btn">
        BOTTOM
      </button>
    </div>
  );
}

export default Scroll;
